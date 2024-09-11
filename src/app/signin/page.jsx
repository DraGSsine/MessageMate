import SignInButton from "@/components/SignInButton";
import Image from "next/image";
import React from "react";

const page = () => {

  return (
    <div className=" w-[350px] bg-slate-100 p-5 text-black space-y-5 ">
      <h1 className=" font-bold text-2xl" >Welcome To MessageMate</h1>
      <p className=" text-slate-950 " >
        MessageMate! Your AI-powered writing partner for smarter, more effective
        messages.
      </p>
      <div className=" flex w-full items-center  gap-5 ">
        <SignInButton />
        <Image
          width={50}
          height={50}
          src="/GoogleIcon.png"
          alt="google"
          className="google"
          id="googleBtn"
        />
      </div>
    </div>
  );
};

export default page;
