// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PawflixHome } from '@nx-conf-2023/pawflix-home';
import styles from './app.module.css';
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from 'react-router-dom';
import { PawflixDetails } from '@nx-conf-2023/pawflix-details';

async function loadMovies() {
  return await fetch('http://localhost:4200/api/movies').then((res) =>
    res.json()
  );
}

async function loadDetails({ params }: LoaderFunctionArgs) {
  const id = params.id;
  return await fetch(`http://localhost:4200/api/movies/${id}`).then((res) =>
    res.json()
  );
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
