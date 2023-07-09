import { Link } from 'react-router-dom';
import css from '../AdditionalInfo/AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <div className={css.container}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfo;
