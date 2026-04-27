"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { createGenre } from "../utils/services/film";

export function CategorieDailog() {
  const [name, setName] = useState("");

  const mutation = useMutation({
  mutationFn: (name: string) => createGenre(name),

    onSuccess: () => {
      setName(""); // reset input
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    mutation.mutate( name );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Category</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Create a new movie category.
            </DialogDescription>
          </DialogHeader>

          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor="name">Category name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
            />
          </div>

          {/* Error */}
          {mutation.isError && (
            <p className="text-red-500 text-sm">
              Something went wrong
            </p>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}