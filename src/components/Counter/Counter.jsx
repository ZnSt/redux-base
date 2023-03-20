import { Outlet } from 'react-router-dom';
import { Appbar } from 'components/Appbar';

export const Counter = () => {
  return (
    <div>
      <Appbar />

      <Outlet />
    </div>
  );
};
