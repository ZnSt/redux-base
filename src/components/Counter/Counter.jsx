import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  changeStep,
} from 'redux/counter/typesCounter';
export const Counter = () => {
  const dispatch = useDispatch();
  const { count, step } = useSelector(state => state.counter);

  console.log('count: ', count);
  console.log('step: ', step);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(changeStep(Number(event.target.step.value)));
    event.target.reset();
  };
  return (
    <>
      <div className="mb-5 p-5 text-white bg-dark rounded-3 w-100">
        <form onSubmit={handleSubmit}>
          <h2>Current step: {step}</h2>
          <input type="text" name="step" placeholder="You can change step..." />
          <button>Set</button>
        </form>
        <div>{count}</div>
      </div>
      <div className="btns">
        <button type="button" onClick={() => dispatch(increment)}>
          +
        </button>
        <button type="button" onClick={() => dispatch(decrement)}>
          -
        </button>
        <button type="button" onClick={() => dispatch(reset)}>
          reset
        </button>
      </div>
    </>
  );
};
