import '@/assets/css/atomic.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </header>
  );
}
