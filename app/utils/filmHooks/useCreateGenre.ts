import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGenre } from '../services/film';
import { toast } from 'sonner';

export default function useCreateGenre() {
    const queryClient =  useQueryClient();
  return  useMutation({
  mutationFn: (name: string) => createGenre(name),

onSuccess: (_, name) => {
  queryClient.invalidateQueries({ queryKey: ['genres'] });

  toast.success(`Category "${name}" created successfully`);
},
    onError: () => {
      toast.error("Failed to create category");
    }
  });

}
