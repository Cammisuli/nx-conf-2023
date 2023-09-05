// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PawflixHome } from '@nx-conf-2023/pawflix-home';
import styles from './app.module.css';
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from 'react-router-dom';
import { PawflixDetails } from '@nx-conf-2023/pawflix-details';

const data = [
  {
    id: '1',
    title: 'Funny Cat Jump Fails',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Watch these hilarious cats attempt to make leaps and jumps, only to find out they miscalculated.',
  },
  {
    id: '2',
    title: 'Dog Tricks Compilation',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'A compilation of dogs performing amazing tricks, from simple sit and fetch to complex routines.',
  },
  {
    id: '3',
    title: 'Parrot Talks',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Incredible footage of a parrot mimicking human speech and singing along to popular tunes.',
  },
  {
    id: '4',
    title: 'Hamster Maze Challenge',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Watch this adorable hamster navigate through a complex maze to find its favorite treat.',
  },
  {
    id: '5',
    title: 'Fish Tank Tour',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Take a tour of a beautiful fish tank setup, featuring a variety of colorful fish and mesmerizing decorations.',
  },
  {
    id: '6',
    title: 'Bunny Hopping Contest',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Cute bunnies compete in a hopping contest. Who will be the fastest hopper?',
  },
  {
    id: '7',
    title: 'Pet Reptiles: A Guide',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Learn the basics of taking care of pet reptiles, such as snakes, lizards, and turtles.',
  },
  {
    id: '8',
    title: 'Kitten vs. Laser Pointer',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Watch this playful kitten chase a laser pointer, trying to catch that elusive red dot.',
  },
  {
    id: '9',
    title: 'Guinea Pig Playtime',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'See how guinea pigs enjoy their playtime with a variety of toys and tunnels.',
  },
  {
    id: '10',
    title: 'Hedgehog Bath Time',
    image:
      'https://images.rawpixel.com/image_png_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png',
    description:
      'Experience the cuteness overload as a hedgehog takes a bubble bath.',
  },
];

function loadMovies() {
  return data;
}

function loadDetails({ params }: LoaderFunctionArgs) {
  return data.find((item) => item.id === params.id) ?? {};
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <PawflixHome />,
    loader: loadMovies,
  },
  {
    path: '/details/:id',
    element: <PawflixDetails />,
    loader: loadDetails,
  },
]);

export function App() {
  return (
    <div className={styles.root}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
