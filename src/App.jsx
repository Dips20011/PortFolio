import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/portfolio";



export default function App() {
  return (
  <>
 <div>
 <Navbar></Navbar>
  <Home/>
  <About/>
  <PortFolio/>
  <Experiance/>
  
  <Contact/>
  <Footer/>
 </div>
 <Toaster/>

  </>
  )
}