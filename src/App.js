import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyGallery from './components/MyGallery';
import MyFooter from './components/MyFooter';
import './customStyle.css'

function App() {
  return (
    <>
    <header>
      <MyNavbar />
    </header>
   <main>
      <MyGallery title="Marvel" query="marvel" />
      <MyGallery title="Fast and Furious" query="fast and furious"/>
      <MyGallery title="Disney" query="disney"/>
    </main>
    <footer>
      <MyFooter />
    </footer> 
     
    </>
  );
}

export default App;
