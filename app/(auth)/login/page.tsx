import Image from "next/image";
import AuthHeader from "../components/AuthHeader";
import { LoginForm } from "@/components/auth/login-form";

export default function Login() {
  return (
    <>
      <AuthHeader />
      <LoginForm />
    </>
  );
}
