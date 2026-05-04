
export type Genre = {
  id: string;
  name: string;
  moviesCount: number}

  export type CreateMovieRequest = {
  Title: string;
  Description: string;
  GenreId: string;
  Photo: File;
};
export type MovieResponse = {
  id: string;
  title: string;
  description: string;
  genre: {
    id: string;
    name: string;
  };
  photoUrl: string;
  createdAt: string;
  seriesId: string | null;
  seriesName: string | null;
  genres: Genre[];
};
 