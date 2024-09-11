"use client";
import BuyMeACoffeeButton from "@/components/BuyMeACoffeeButton";
import { Loader, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md flex justify-center items-center ">
        <Loader size={32} className=" animate-spin stroke-blue-400 " />
      </div>
    );
  }

  if (!session) {
    router.push("/signin");
    return
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">
          Welcome,{" "}
          <span className=" text-blue-500 ">{session?.user?.name}</span>
        </div>
        <button
          onClick={() => signOut()}
          className=" bg-red-500 p-2 rounded-full "
        >
          <LogOut size={18} color="white" />
        </button>
      </div>
      <BuyMeACoffeeButton />
    </div>
  );
}
