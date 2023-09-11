import { useLoaderData } from 'react-router-dom';
import styles from './pawflix-details.module.css';
import { Movie } from '@nx-conf-2023/shared-types';

/* eslint-disable-next-line */
export interface PawflixDetailsProps {}

export function PawflixDetails(props: PawflixDetailsProps) {
  const data = useLoaderData() as Movie | undefined;
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <a href="/"> &#8592; Back</a>
        <h1>{data?.title}</h1>
        <div></div>
      </div>
      <div className={styles['body']}>
        <video controls>
          <source src="https://i.imgur.com/IcuAXiw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles['details']}>
          <p className={styles['tagline']}>{data?.tagline}</p>
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PawflixDetails;
