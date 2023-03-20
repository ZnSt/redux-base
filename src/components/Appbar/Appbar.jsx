import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu';

export const Appbar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
        marginBottom: '12px',
      }}
    >
      <nav>
        <Link to="/login">Log In</Link>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
