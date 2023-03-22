import { useSelector, useDispatch } from 'react-redux';
import { update, getValue } from 'redux/clickSlice';
export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getValue);
  return (
    <div>
      <h1> Number of clicks {numberOfClicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        click 5
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        click 10
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        click 20
      </button>
    </div>
  );
};
