import './App.css'
import Navbar from "./components/navbar"; // no need to include .jsx
import Sidebar from "./components/sidebar.jsx";
import Hero from "./components/hero.jsx";
import Content from "./components/content.jsx";
import Footer from "./components/footer.jsx";
import card from "./components/upcomingAnime.jsx";



function App() {


  return (



         <div className="grid">
             <div className="nav_area"><Navbar /></div>

            <div className="hero"><Hero/> </div>
            <div className="sidebar"> <Sidebar/></div>
             <div className="content"><Content /></div>
  <div className="footer"><Footer/></div>
</div>



  )
}

export default App
