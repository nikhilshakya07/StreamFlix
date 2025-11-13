import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400">The movie or page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block bg-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}