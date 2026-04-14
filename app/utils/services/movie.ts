import { api } from "../axios";
import type { MoviesResponse, Movie, MovieDetails } from "../../types/movie";

export const getPopularMovies = async (): Promise<MoviesResponse> => {
  const res = await api.get("/movie/popular");
  return res.data;
};


export const getTrendingMovies = async (): Promise<MoviesResponse> => {
  const res = await api.get("/trending/movie/day");
  return res.data;
};

export const getMovieDetails = async (id: number): Promise<MovieDetails> => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};
export const getMoviesbyGenre = async (genreId: number): Promise<MoviesResponse> => {
  const res = await api.get(`/discover/movie?with_genres=${genreId}`);
  return res.data;
};
export const getMovieVideos = async (id: number) => {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data.results;
};
export const searchMovies = async (query: string) => {
  const res = await api.get(`/search/movie?query=${query}`);
  return res.data.results;
};