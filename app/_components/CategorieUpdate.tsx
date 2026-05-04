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

import { updateGenre } from "../utils/services/film";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Pen } from "lucide-react";

export function CategorieUpdate({id, title}: {id: string, title: string}) {
const queryClient = useQueryClient();
  const [name, setName] = useState(title);
const{mutate, isPending, isError} = useMutation({
    mutationFn: (name: string) => updateGenre(id, name),
    onSuccess: () => {
        
        queryClient.invalidateQueries({ queryKey: ["genres"] });
        toast.success("Genre updated successfully");
},
onError: () => {
    toast.error("Failed to update genre");
}
});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    mutate( name );
    setName(""); 

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-blue-500/20 text-blue-500 p-4 rounded-lg"><Pen ></Pen></div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <DialogHeader>
            <DialogTitle>Update Category</DialogTitle>
            <DialogDescription>
              Update the details of an existing movie category.
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
          {isError && (
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

            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}