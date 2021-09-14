
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes/routes';

import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar/Navbar';

import {Provider} from 'react-redux';
//redux store
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router className="App">
        <ToastContainer />
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
