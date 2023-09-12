import { LoaderFunctionArgs } from 'react-router-dom';

const apiUrl = 'http://localhost:4200/api';

export async function loadMovies() {
  return await fetch(`${apiUrl}/movies`).then((res) => res.json());
}

export async function loadDetails({ params }: LoaderFunctionArgs) {
  const id = params['id'];
  return await fetch(`${apiUrl}/movies/${id}`).then((res) => res.json());
}

export function imageUrl(id: string): string {
  return `${apiUrl}/images/${id}`;
}

export function videoUrl(id: string): string {
  return `${apiUrl}/videos/${id}`;
}
