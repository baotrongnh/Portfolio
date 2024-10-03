import { Image } from 'antd';
import './Hero.scss';
import { TypeAnimation } from 'react-type-animation';
import { photoProfile2 } from '../../../../assets/photo';
import svgBgDark from '../../../../assets/photo/background-dark-theme.svg';
import svgBgLight from '../../../../assets/photo/background-light-theme.svg';
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/AppContext';

function Hero() {
     const { theme } = useContext(AppContext);

     return (
          <div className="hero" style={{ backgroundImage: `url(${theme === 'dark-theme' ? svgBgDark : svgBgLight})` }}>
               <div className="container" data-aos="fade-up">
                    <div className="img-block">
                         <Image
                              className='img'
                              src={photoProfile2}
                         />
                    </div>

                         <TypeAnimation
                              sequence={[
                                   // Same substring at the start will only be typed out once, initially
                                   "Hi, I'm Bao Trong",
                                   2000, // wait 1s before replacing "Mice" with "Hamsters"
                                   "I'm a Front-end Developer",
                                   2000,
                                   "I'm a Photographer",
                                   2000
                              ]}
                              wrapper="span"
                              speed={20}
                              style={{ display: 'inline-block' }}
                              repeat={Infinity}
                              className='text-typing'
                         />

                    <p className='description'>&quot;Coding Harmony, Living Simply.&quot;</p>
               </div>
          </div>
     );
}

export default Hero;