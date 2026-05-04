import { CreateMovieRequest, Genre, MovieResponse } from "@/app/types/film";
import { api } from "../axiosv2";

export const getGeneres = async (): Promise<Genre[]> => {
  const res = await api.get("/Genres");
  return res.data;
};

export const createGenre = async (name: string) => {
  const res = await api.post("/Genres", name, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};

export const updateGenre = async (id: string, name: string) => {
  const res = await api.put(`/Genres/${id}`, name, {
    headers: {
      "Content-Type": "application/json",
    },

  });
return res.data;
}


export const getFilms = async (): Promise<MovieResponse[]> => {
  const res = await api.get("/Movies");

  return res.data;
};
export const createFilm = async (filmData: CreateMovieRequest) => {
  const formData = new FormData();

  formData.append("Title", filmData.Title);
  formData.append("Description", filmData.Description);
  formData.append("GenreId", filmData.GenreId);
  formData.append("Photo", filmData.Photo);

  const res = await api.post("/Movies", formData);

  return res.data;
};
