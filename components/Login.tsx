import Image from "next/image";
import NavLogo from "../public/assets/navLogo.png";
import React, { useState } from "react";

const Login = () => {
  const [coupon, setcoupon] = useState(false);

  const checkboxFunction = () => {
    setcoupon(!coupon);
  };

  return (
    <div className="h-screen w-full flex flex-col pl-16  justify-left items-left relative">
      <img
        className="h-screen z-[1] absolute top-0 right-0"
        src="/assets/login/mainbg.png"
        alt="bg"
      />

      <div className="flex justify-left items-center p-4 z-[100]">
        <Image src={NavLogo} alt="/" height="40" className="cursor-pointer" />
        <h3 className="text-lg px-[5px]">DARWIN LABS</h3>
      </div>

      <div className="mt-10 h-[35%] w-[90%] flex justify-center items-center z-[100]">
        <div className="flex flex-col justify-between items-center w-[5%] h-full">
          <div className="h-[37%] w-[2px] bg-[#f6f6f4]"></div>
          <img className="h-[35px]" src="/assets/login/comma.png" alt="comma" />
          <div className="h-[37%] w-[2px] bg-[#f6f6f4]"></div>
        </div>

        <div className="flex flex-col justify-center items-left w-[95%] h-full ml-[25px]">
          <img
            className="h-[80px] w-[130px] "
            src="/assets/login/yes.png"
            alt="yes"
          />
          <div className="flex flex-col text-[30px] italic">
            <div>Data Science is an Art, </div>
            <div>Let’s Craft it togther.</div>
          </div>
        </div>
      </div>
      <div className="h-[35%] w-[90%] flex justify-center items-center z-[100]">
        <div className="w-[5%] h-full"></div>
        <div className="flex flex-col justify-left items-left w-[95%] h-[150px] ml-[25px]">
          <div className="font-bold">Sign up / Log in</div>
          <div className="py-2 flex justify-left items-center">
            <div>
              <img
                className="h-[35px] p-1 hover:border-[var(--primary)] hover:border-[1.5px] rounded-sm hover:cursor-pointer"
                src="/assets/login/google.png"
                alt="google"
              />
            </div>
            <input
              onClick={checkboxFunction}
              checked={coupon}
              className="h-[50px] ml-[10px] bg-black"
              type="checkbox"
            />
            <div className="pl-4">I have a coupon</div>
          </div>
          <input
            type="text"
            className={
              coupon
                ? "z-[100] w-[200px] h-[50px] border-dashed bg-black uppercase text-[var(--primary)] border-[var(--primary)] border-2 rounded-sm"
                : "hidden"
            }
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
