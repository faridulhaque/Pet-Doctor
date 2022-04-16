// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NoFound/NotFound';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signUp" element></Route>
          <Route path="/signIn" element={<SignIn></SignIn>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          
      </Routes>
    </div>
  );
}

export default App;
