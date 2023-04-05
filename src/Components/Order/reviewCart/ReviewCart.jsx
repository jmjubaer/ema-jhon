import React from "react";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ReviewCart = ({ product }) => {
  console.log(product);
  const { img, name, price, shipping, quantity } = product;
  return (
    <div className="p-3 pr-5 border rounded-md my-5 flex justify-between items-center">
        <div className="flex gap-x-7">
            <img className="w-24 rounded-md" src={img} alt="" />
            <div className="">
                <h2 className="text-xl">{name}</h2>
                <p className="text-lg">
                    Price : <span className="text-[#FF9900]">${price}</span>
                </p>
                <p className="text-lg">
                    Shipping Charge :{" "}
                    <span className="text-[#FF9900]">${shipping}</span>
                </p>
                <p className="text-lg">
                    Quantity : <span className="text-[#FF9900]">${quantity}</span>
                </p>
            </div>
        </div>
        <button className="text-3xl w-14 h-14 text-[#EB5757] bg-[rgba(235,87,87,0.30)] rounded-full"><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
  );
};

export default ReviewCart;
