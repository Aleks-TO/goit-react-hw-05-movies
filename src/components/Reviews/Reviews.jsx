import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/API';
import css from '../Reviews/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Error searching actors:', error);
      }
    };

    movieReviews();
  }, [movieId]);

  if (!reviews) {
    return <p>Loading reviews...</p>;
  }
  return (
    <div className={css.container}>
      <ul>
        {reviews.length === 0 ? (
          <li>
            <p className={css.message}>
              We do not have any reviews for this movie
            </p>
          </li>
        ) : (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
