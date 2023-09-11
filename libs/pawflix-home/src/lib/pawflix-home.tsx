import { useLoaderData, useNavigate } from 'react-router-dom';
import styles from './pawflix-home.module.css';
import { Movie } from '@nx-conf-2023/shared-types';

export function PawflixHome() {
  const navigate = useNavigate();
  const data = useLoaderData() as Movie[];
  return (
    <div>
      <div className={styles['header']}>
        <img
          src="https://media.tenor.com/jFn8sS1Et-0AAAAM/cat.gif"
          alt="dancing cat gif"
          className={styles['header-gif']}
        ></img>
        <h1>Welcome to Pawflix</h1>
        <img
          src="https://i.pinimg.com/originals/3f/1b/ba/3f1bbacb688be6f52b2c1ffcd8a14c28.gif"
          alt="dancing dog gif"
          className={styles['header-gif']}
        ></img>
      </div>
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
