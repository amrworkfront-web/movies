"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useGetGeneres from "../utils/filmHooks/useGetGeneres";
import { CreateMovieRequest } from "../types/film";
import useCreateFilm from "../utils/filmHooks/useCreateFilm";
const formSchema = z.object({
  Title: z.string().min(1, "Title is required"),
  Description: z.string().min(1, "Description is required"),
  GenreId: z.string().min(1, "Genre is required"),
  Photo: z.any().refine((file) => file, "Image is required"),
});

type FormData = z.infer<typeof formSchema>;


export default function MovieForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const { data } = useGetGeneres()
  const{mutate,isError,isPending}=useCreateFilm();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // ✅ Dropzone logic
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setValue("Photo", file); // نخزن file نفسه مش array

    const url = URL.createObjectURL(file);
    setPreview(url);
  }, [setValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  const onSubmit = (data: CreateMovieRequest) => {
    console.log("Form Data:", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">

      <Input
        label="Movie title"
        {...register("Title")}
        placeholder="Title"
        error={errors.Title?.message}
      />

      {/* Description */}
      <div className="flex flex-col">
        <label>Overview</label>
        <textarea
          className="p-3 mt-3 rounded-lg bg-surface-high border outline-none focus:ring-2 focus:ring-blue-500"
          {...register("Description")}
          placeholder="Description"
        />
        {errors.Description && (
          <p className="text-red-500">{errors.Description.message}</p>
        )}
      </div>

      {/* 🔥 Dropzone بدل input */}
      <div className="flex flex-col space-y-2">
        <label>Movie Poster</label>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition
            ${isDragActive ? "bg-blue-100 border-blue-500" : "bg-surface-high"}
          `}
        >
          <input {...getInputProps()} />
          <p className="text-sm text-gray-500">
            Drag & drop image here or click to upload
          </p>
        </div>

        {errors.Photo && (
          <p className="text-red-500">{errors.Photo.message as string}</p>
        )}

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-xl"
          />
        )}
      </div>

      <div className="flex flex-col">
        <label>Genre</label>
        <select
          className="p-3 mt-2 rounded-lg bg-surface-high border outline-none focus:ring-2 focus:ring-blue-500"
          {...register("GenreId")}
        >
          <option value="">Select Genre</option>
          {data?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        {errors.GenreId && (
          <p className="text-red-500">{errors.GenreId.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Add Movie</Button>
      </div>
    </form>
  );
}