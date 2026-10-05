import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Movie, MOVIES } from '@/data/movies';

type MoviesValue = {
  movies: Movie[];
  watchlist: string[];
  addMovie: (movie: Omit<Movie, 'id'>) => void;
  toggleWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
};

const MoviesContext = createContext<MoviesValue | null>(null);

// Owns the movie list and the watchlist so every page sees the same data.
export function MoviesProvider({ children }: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>(MOVIES);
  const [watchlist, setWatchlist] = useState<string[]>([]);

  // Build a new array instead of mutating the old one, so React re-renders.
  const addMovie = (movie: Omit<Movie, 'id'>) =>
    setMovies((current) => [...current, { ...movie, id: String(Date.now()) }]);

  const toggleWatchlist = (id: string) =>
    setWatchlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  const isInWatchlist = (id: string) => watchlist.includes(id);

  return (
    <MoviesContext.Provider value={{ movies, watchlist, addMovie, toggleWatchlist, isInWatchlist }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const value = useContext(MoviesContext);
  if (!value) throw new Error('useMovies must be inside MoviesProvider');
  return value;
}
