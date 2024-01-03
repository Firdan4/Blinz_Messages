import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center justify-center min-h-screen w-full gap-5">
      {children}
    </div>
  );
}

export default AuthLayout;
