"use client"
import { Loader } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();
  const [isLoad, setIsLoad] = React.useState(false);
  const router = useRouter();

  const popupCenter = (url, title) => {
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };

  const handleSignIn = () => {
    setIsLoad(true);
    popupCenter("/api/auth/signin/google", "Sign In with Google");
  };

  if (session) {
    router.push("/");
    return null;
  }

  return (
    <button
      onClick={handleSignIn}
      className="bg-slate-950 text-slate-100 rounded-full py-2 px-4 w-80 float-start flex items-center justify-center"
    >
      {isLoad ? <Loader size={30} className="stroke-blue-500 animate-spin" /> : "Sign in with Google"}
    </button>
  );
};

export default SignInButton;