// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NoFound/NotFound';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/signIn" element={<SignIn></SignIn>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          
          <Route path="/home/:serviceDetail" element={<RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>}></Route>
          
          
          <Route path="*" element={<NotFound></NotFound>}></Route>
          
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
