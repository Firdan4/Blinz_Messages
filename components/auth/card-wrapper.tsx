"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./login-form";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  backButtonHref,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[90%] max-w-[25rem] duration-300">
      <CardHeader>
        <p className="text-gray-600 text-lg text-center font-medium">
          {headerLabel}
        </p>
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter className="flex flex-col w-full gap-3">
          <Social />
        </CardFooter>
      )}

      <CardFooter className="w-full">
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
