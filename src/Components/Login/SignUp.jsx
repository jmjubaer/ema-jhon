import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

const SignUp = () => {
    const auth = getAuth(app);
    const [error, setError] = useState("");
    const handleSignUp = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        // console.log(name,email,password,confirm);
        if(password !== confirm) {
            setError("Your password does not match !");
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(err => {
            setError(err.message);
        });
    };
    return (
        <div className='my-10 flex items-center justify-center'>
            <div className="border-2 w-1/3 p-10 shadow flex flex-col">
                <form onSubmit={handleSignUp} className=' flex flex-col rounded-md'>
                    <h2 className='text-4xl text-center'>Sign Up</h2>
                    <div className="mt-7">
                        <label className='block'>Name</label>
                        <input className='border-2 w-full p-2 mt-3' type="text" name="name" required/>
                    </div>
                    <div className="mt-7">
                        <label className='block'>Email</label>
                        <input className='border-2 w-full p-2 mt-3' type="email" name="email" required/>
                    </div>
                    <div className="mt-5">
                        <label className='block'>Password</label>
                        <input className='border-2 w-full p-2 mt-3' type="password" name="password" required/>
                    </div>
                    <div className="mt-5">
                        <label className='block'>Confirm Password</label>
                        <input className='border-2 w-full p-2 mt-3' type="password" name="confirm" required/>
                    </div>
                    <p className='text-red-400'>{error}</p>
                    <input className='py-3 text-xl hover:bg-[#FF9900] cursor-pointer bg-[#ff99004d] rounded-lg mt-10' type="submit" value="Sign Up" />

                    <p className='mt-2'>Already have an account? <Link to="/login" className='text-[#FF9900] hover:underline'>Login.</Link></p>
                </form>
                <div className="flex items-center gap-4 mt-7">
                        <div className="bg-[#95A0A7] h-px w-full"></div>
                        <span className='leading-none'>or</span>
                        <div className="bg-[#95A0A7] h-px w-full"></div>
                    </div>
                    <button className='flex justify-center items-center gap-x-3 p-2 border-2 rounded-md mt-7'><img className='w-5' src={google} alt="" /><span>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default SignUp;