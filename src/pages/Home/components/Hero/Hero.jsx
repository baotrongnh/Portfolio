import { Image } from 'antd';
import './Hero.scss';
import { TypeAnimation } from 'react-type-animation';
import { photoProfile2 } from '../../../../assets/photo';
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/AppContext';

function Hero() {
     const { theme } = useContext(AppContext);

     return (
          <div className={`hero ${theme}`}>
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
                              `Hi There!`,
                              1000,
                              `I'm Bao Trong`,
                              2000,
                              "I'm a Frontend Developer",
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