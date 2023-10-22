"use client";
import React from "react";
import { Input } from "@material-tailwind/react";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type }) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <Input
          crossOrigin={""}
          color="orange"
          label={label}
          type={type}
          id={id}
        />
      </div>
    </div>
  );
};

export default FormInput;
