'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const title = movie.title || movie.name || 'Untitled';
  const imageUrl = getImageUrl(movie.poster_path, 'w500');

  return (
    <Link 
      href={`/movie/${movie.id}`} 
      className="group relative block flex-shrink-0 w-[150px] md:w-[200px] transition-transform duration-300 ease-out hover:scale-110 hover:z-30"
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 150px, 200px"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-md" />
      </div>
      
      <h3 className="mt-2 text-sm md:text-base font-medium line-clamp-1 group-hover:text-gray-300 transition-colors">
        {title}
      </h3>
    </Link>
  );
}