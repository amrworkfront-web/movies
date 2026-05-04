import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFilm } from '../services/film';
import { toast } from 'sonner';
import { CreateMovieRequest } from '@/app/types/film';

export default function useCreateFilm() {
    const queryClient =  useQueryClient();
  return  useMutation({
  mutationFn: (formData: CreateMovieRequest) => createFilm(formData),

onSuccess: (_, formData) => {
  queryClient.invalidateQueries({ queryKey: ['films'] });

  toast.success(`Film "${formData.Title}" created successfully`);
},

    onError: () => {
      toast.error("Failed to create film");
    }
  });

}
