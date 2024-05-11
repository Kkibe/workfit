import Topnav from './components/Topnav/Topnav';
import Search from './components/Search/Search';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import Flyer from './components/Flyer/Flyer';
import Single from './components/Single/Single';
import Sidenav from './components/Sidenav/Sidenav';
import Loader from './components/Loader/Loader';

function App() {
  
  return (
    <>
      <Topnav />
      <Search />
      <Single />
      <div className="body">
        <Sidenav />
        <div className='main'>
          <Flyer />
          <About />
          <Review />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
