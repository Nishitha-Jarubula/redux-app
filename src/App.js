import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter no is {counter}</h1>

      {isLogged ? <h3>you are logged in</h3> : ''}

     <button onClick={() => dispatch(increment)}>+</button>
     <button onClick={() => dispatch(decrement)}>-</button>

     

    </div>
  );
}

export default App;
