// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PawflixHome } from '@nx-conf-2023/frontend/pawflix-home';
import styles from './app.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PawflixDetails } from '@nx-conf-2023/frontend/pawflix-details';
import { loadDetails, loadMovies } from '@nx-conf-2023/data-access';

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
