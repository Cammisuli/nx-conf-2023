// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PawflixHome } from '@nx-conf-2023/pawflix-home';
import styles from './app.module.css';
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from 'react-router-dom';
import { PawflixDetails } from '@nx-conf-2023/pawflix-details';
import { Movie } from '@nx-conf-2023/shared-types';

async function loadMovies(): Promise<Movie[]> {
  return await fetch('http://localhost:4200/api/movies').then((res) =>
    res.json()
  );
}

async function loadDetails({
  params,
}: LoaderFunctionArgs): Promise<Movie | undefined> {
  return (await loadMovies()).find((item) => item.id === params.id);
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
