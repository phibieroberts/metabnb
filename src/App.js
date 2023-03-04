import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import PlacetoStay from './components/PlacetoStay';
import{BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  const[popUp, setPopUp]=useState(false)

  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/placeToStay' element={<PlacetoStay />} />



          </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
