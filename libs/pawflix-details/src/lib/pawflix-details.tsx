import { useLoaderData } from 'react-router-dom';
import styles from './pawflix-details.module.css';

/* eslint-disable-next-line */
export interface PawflixDetailsProps {}

export function PawflixDetails(props: PawflixDetailsProps) {
  const data = useLoaderData() as {
    id: string;
    title: string;
    image: string;
  };
  return (
    <div className={styles['container']}>
      <h1>Details for {data.title}</h1>
    </div>
  );
}

export default PawflixDetails;
