import './App.css';
import Post from './Post';
// import Header from './Header';
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
