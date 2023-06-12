import './App.css';
import Post from './Post';
import Header from './Header';
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route index element={
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      }/>
      <Route path={'/login'} element={
        <div>Login</div>
      }/>
      <Route path={'/register'} element={
        <div>register</div>
      }/>
    </Routes>
    
  );
}

export default App;
