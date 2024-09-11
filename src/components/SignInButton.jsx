"use client"
import { Loader } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  const [isLoad, setIsLoad] = React.useState(false);
  const router = useRouter();
  if (session) {
    router.push("/");
    return;

  }
  return (
    <button
      onClick={() => { signIn("google"); setIsLoad(true) }}
      className=" bg-slate-950 text-slate-100 rounded-full py-2 px-4 w-80 float-start flex items-center justify-center "
    >
     {
        isLoad ? <Loader size={30} className=" stroke-blue-500 animate-spin " /> : "Sign in with Google"
     }
    </button>
  );
};

export default SignInButton;
