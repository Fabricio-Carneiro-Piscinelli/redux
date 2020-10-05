import React from 'react';
import { Provider} from 'react-redux';
import { store } from './store/store';

import SideBar from './componets/sideBar';
import Usuarios from './componets/usuarios';
function App() {
  return (
    <Provider store={store}>
      <SideBar />
      <Usuarios />
    </Provider>
  );
}

export default App;
