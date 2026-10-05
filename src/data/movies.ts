export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  emoji: string;
};

export const MOVIES: Movie[] = [
  { id: '1', title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, emoji: '🌀' },
  { id: '2', title: 'The Lion King', year: 1994, genre: 'Animation', rating: 8.5, emoji: '🦁' },
  { id: '3', title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.7, emoji: '🪐' },
  { id: '4', title: 'Spirited Away', year: 2001, genre: 'Animation', rating: 8.6, emoji: '🐉' },
  { id: '5', title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, emoji: '🦇' },
  { id: '6', title: 'Coco', year: 2017, genre: 'Animation', rating: 8.4, emoji: '💀' },
];
