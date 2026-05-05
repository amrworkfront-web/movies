
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <label className="text-sm font-medium">{label}</label>

      <input
        {...props}
        className={`p-3 rounded-xl bg-surface-high border outline-none
        ${error ? "border-red-500" : "border-transparent"}
        focus:ring-2 focus:ring-blue-500`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}