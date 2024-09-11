"use client"
import SignInButton from "@/components/SignInButton";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!(status === "loading") && !session) void signIn("google");
    if (session) window.close();
  }, [session, status]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        background: "white",
      }}
    ></div>
  );
};


export default page;
