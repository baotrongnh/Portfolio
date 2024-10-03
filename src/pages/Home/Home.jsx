import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
     AOS.init({duration: 900});

     return (
          <div className="home-page">
               <Hero />
               <About />
          </div>
     );
}

export default Home;