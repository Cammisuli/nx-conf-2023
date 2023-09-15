import styles from './paws-rating.module.css';
import { useLoaderData } from 'react-router-dom';
import { MovieDetails } from '@nx-conf-2023/shared-types';
import { useEffect, useState } from 'react';
import { getRating, postRating } from '@nx-conf-2023/data-access';

import pawFilled from '../assets/filled-lg.png';
import pawOutline from '../assets/outline-lg.png';

/* eslint-disable-next-line */
export interface PawsRatingProps {}

export function PawsRating(props: PawsRatingProps) {
  const data = useLoaderData() as MovieDetails;

  const [paws, setPaws] = useState(0);
  useEffect(() => {
    getRating(data.id).then((paws) => setPaws(paws));
  });

  return (
    <div>
      {
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={index}
              onClick={async () => {
                const p = await postRating(data.id, index + 1);
                setPaws(p);
              }}
            >
              {index < paws ? (
                <img
                  src={pawFilled}
                  alt="Filled Paw"
                  style={{ width: '60px', height: '60px' }}
                />
              ) : (
                <img
                  src={pawOutline}
                  alt="Outlined Paw"
                  style={{ width: '60px', height: '60px' }}
                />
              )}
            </span>
          ))}
        </div>
      }
    </div>
  );
}

export default PawsRating;
