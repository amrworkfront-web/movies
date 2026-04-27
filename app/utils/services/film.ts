import { Film, Genre } from "@/app/types/film";
import { api } from "../axiosv2";

export const getGeneres = async() :Promise<Genre[]>=> {
  const res = await api.get("/Genres");
  return res.data
}

export const createGenre = async (name: string) => {
  const res = await api.post(
    "/Genres",
    JSON.stringify(name),

  );

  return res.data;
};

export const getFilms= async():Promise<Film[]> => {
  const res = await api.get("/Movies");
  return res.data
}