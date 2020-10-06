import React from 'react';
import { Provider} from 'react-redux';

//responsavel pela estancia de armazenamento do redux
import { store } from './store/store';

//compontens padrao
import SideBar from './componets/sideBar';
import Usuarios from './componets/usuarios';

//provider => estancia o react-redux na raiz da aplicação
function App() {
  return (
    <Provider store={store}>
      <SideBar />
      <Usuarios />
    </Provider>
  );
}

export default App;




// npm install --save redux
// npm install react-redux