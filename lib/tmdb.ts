import { Movie, MovieDetails, TMDBResponse } from '@/types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error('TMDB_API_KEY is not defined in environment variables');
}

// Helper function for API calls
async function fetchFromTMDB<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
  
  const response = await fetch(url, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`TMDB API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Fetch trending movies
export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse>('/trending/all/week');
  return data.results;
}

// Fetch popular movies
export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse>('/movie/popular');
  return data.results;
}

// Fetch top rated movies
export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse>('/movie/top_rated');
  return data.results;
}

// Fetch upcoming movies
export async function getUpcomingMovies(): Promise<Movie[]> {
  const data = await fetchFromTMDB<TMDBResponse>('/movie/upcoming');
  return data.results;
}

// Fetch movie details by ID
export async function getMovieDetails(id: string): Promise<MovieDetails> {
  const data = await fetchFromTMDB<MovieDetails>(`/movie/${id}`);
  return data;
}

// Get image URL helper
export function getImageUrl(path: string | null, size: 'w500' | 'w780' | 'original' = 'w500'): string {
  if (!path) return '/placeholder.png';
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/${size}${path}`;
}