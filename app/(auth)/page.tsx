import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-5">
      <div>
        <Image
          src={"/images/blinz.png"}
          alt="logo blinz"
          className="w-[80%] mx-auto"
          width={100}
          height={100}
        />
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Sign in your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
