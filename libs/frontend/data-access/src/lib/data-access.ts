import { LoaderFunctionArgs } from 'react-router-dom';

const apiUrl = 'http://localhost:4200/api';

export async function getMovies() {
  return await fetch(`${apiUrl}/movies`).then((res) => res.json());
}

export async function getMovieDetails({ params }: LoaderFunctionArgs) {
  const id = params['id'];
  return await fetch(`${apiUrl}/movies/${id}`).then((res) => res.json());
}

export async function getRating(id: string): Promise<number> {
  return await fetch(`${ratingUrl(id)}`)
    .then((res) => res.json())
    .then((res) => res.paws);
}

export async function postRating(id: string, paws: number) {
  return await fetch(ratingUrl(id), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paws: paws }),
  })
    .then((res) => res.json())
    .then((res) => res.paws);
}

export function imageUrl(id: string): string {
  return `${apiUrl}/images/${id}`;
}

export function videoUrl(id: string): string {
  return `${apiUrl}/videos/${id}`;
}

export function ratingUrl(id: string): string {
  return `${apiUrl}/rating/${id}`;
}
