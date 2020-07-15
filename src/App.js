import React from 'react';

import store from './store'
import { Provider } from 'react-redux'

import ComA from './pages/comA'
import ComB from './pages/comB'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        nihao
        <ComA></ComA>
        <ComB></ComB>
    </div>
    </Provider>

  );
}

export default App;
