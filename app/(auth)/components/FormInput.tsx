"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { register } from "module";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  errors,
  register,
  required,
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div>
        <Input
          {...register(id, { required })}
          crossOrigin={""}
          autoComplete={id}
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
