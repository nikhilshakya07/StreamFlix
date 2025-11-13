'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const title = movie.title || movie.name || 'Untitled';
  const imageUrl = getImageUrl(movie.backdrop_path, 'original');

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 line-clamp-3">
            {movie.overview}
          </p>

          <div className="flex items-center space-x-4 pt-4">
            <Link
              href={`/movie/${movie.id}`}
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              <span>Play</span>
            </Link>

            <Link
              href={`/movie/${movie.id}`}
              className="bg-gray-600/80 px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}