export type Movie = {
  id: number;

  title: string;
  original_title: string;

  overview: string;

  poster_path: string | null;
  backdrop_path: string | null;

  release_date: string;

  vote_average: number;
  vote_count: number;

  popularity: number;

  genre_ids: number[];

  original_language: string;

  adult: boolean;
};

export type MovieCard = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};
export type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any | null;

  budget: number;
  genres: Genre[];

  homepage: string | null;
  id: number;

  imdb_id: string | null;
  original_language: string;
  original_title: string;

  overview: string;

  popularity: number;

  poster_path: string | null;

  production_companies: ProductionCompany[];
  production_countries: any[];

  release_date: string;

  revenue: number;
  runtime: number | null;

  spoken_languages: SpokenLanguage[];

  status: string;
  tagline: string | null;

  title: string;
  video: boolean;

  vote_average: number;
  vote_count: number;
};

export type MovieCreditsResponse = {
  id: number;
  cast: CastMember[];
};
export type CastMember = {
  character: string;
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
};
