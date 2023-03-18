import { Link } from 'react-router-dom';

/* eslint-disable */
type Props = {};

function NotFound({}: Props) {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to={'/'}>GO HOME</Link>
    </div>
  );
}

export default NotFound;
