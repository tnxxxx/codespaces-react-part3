import './App.css';
import About from './About';
import Home from './Home';
import Post from './Post';
import Shop from './Shop';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to ="/"> Home </Link></li>
          <li><Link to ="/about"> About </Link></li>
          <li><Link to ="/posts?fname=Thanatchaporn&lname=Wongpipan"> Post </Link></li>
          <li><Link to ="/posts/1"> Post id 1 </Link></li>
          <li><Link to ="/posts/2"> Post id 2 </Link></li>
          <li><Link to ="/shop"> Shop </Link></li>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Post/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
