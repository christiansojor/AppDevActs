import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/app/reducers/index';
import rootSaga from './src/app/saga/index';
import RootNavigation from './src/navigations/index';

const { store, runSaga } = configureStore();
runSaga(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;