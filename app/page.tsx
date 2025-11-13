import HeroBanner from '@/components/ui/HeroBanner';
import MovieRow from '@/components/ui/MovieRow';
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/tmdb';

export default async function HomePage() {
  // Server-side data fetching
  const [trendingMovies, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getTrendingMovies(),
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ]);

  // Use first trending movie as hero
  const heroMovie = trendingMovies[0];

  return (
    <div className="pb-20">
      {heroMovie && <HeroBanner movie={heroMovie} />}

      <div className="space-y-8 -mt-32 relative z-10">
        <div id="trending">
          <MovieRow movies={trendingMovies} categoryTitle="Trending Now" />
        </div>
        
        <div id="popular">
          <MovieRow movies={popularMovies} categoryTitle="Popular on StreamFlix" />
        </div>
        
        <MovieRow movies={topRatedMovies} categoryTitle="Top Rated" />
        <MovieRow movies={upcomingMovies} categoryTitle="Coming Soon" />
      </div>
    </div>
  );
}