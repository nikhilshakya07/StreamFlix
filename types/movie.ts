export interface Movie {
  id: number;
  title: string;
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  genre_ids?: number[];
  media_type?: string;
}

export interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime?: number;
  status?: string;
  tagline?: string;
  popularity: number;
  vote_count: number;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}