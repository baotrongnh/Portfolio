import About from "./components/About/About";
import Hero from "./components/Hero/Hero";

function Home() {
     return (
          <div className="home-page">
               <Hero />
               <About />
          </div>
     );
}

export default Home;