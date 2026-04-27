"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
  });

  return (
    <div className="space-y-3">
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-gray-100 transition"
      >
        <input {...getInputProps()} />
        <p>Drag & drop image here or click to upload</p>
      </div>

      {preview && (
        <img
          src={preview}
          className="w-full h-48 object-cover rounded-xl"
        />
      )}
    </div>
  );
}