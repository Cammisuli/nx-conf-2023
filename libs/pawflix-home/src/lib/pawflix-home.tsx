import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './pawflix-home.module.css';

export function PawflixHome() {
  const navigate = useNavigate();
  const data = useLoaderData() as {
    id: string;
    title: string;
    image: string;
  }[];
  return (
    <div>
      <h1 className={styles['header']}>Welcome to PawflixHome!</h1>
      <div className={styles.grid}>
        {data.map((movie, index) => (
          <div
            onClick={() => navigate(`/details/${movie.id}`)}
            key={index}
            className={styles.card}
          >
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.title}>{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PawflixHome;
