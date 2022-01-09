import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import Error404 from './pages/Error404'
import Navigation from './components/Navegation'
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>

      <Navigation/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
