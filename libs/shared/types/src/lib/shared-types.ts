export type Movie = {
  id: string;
  title: string;
};

export type MovieDetails = Movie & {
  video?: string;
  tagline?: string;
  description: string;
};
