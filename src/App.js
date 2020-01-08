import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Skills from './containers/Skills';
import Resume from './containers/Resume';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section className="Container">
          <Resume />
          <Skills />
        </section>
      </div>
    </Provider>
  );
}

export default App;
