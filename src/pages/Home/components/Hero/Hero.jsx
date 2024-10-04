import { Image } from 'antd';
import './Hero.scss';
import { TypeAnimation } from 'react-type-animation';
import { photoProfile } from '../../../../assets/photo';
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/AppContext';

function Hero() {
     const { theme } = useContext(AppContext);

     return (
          <section id='home' className={`hero ${theme}`}>
               <div className="container" data-aos="fade-up">
                    <div className="img-block">
                         <Image
                              className='img'
                              src={photoProfile}
                         />
                    </div>

                    <TypeAnimation
                         sequence={[
                              "Hi There!", 2000,
                              "I'm Bao Trong", 2500,
                              "I'm a Frontend Developer", 2500,
                              "I'm a Photographer", 2500,
                              "I'm Bao Trong", 2000
                         ]}
                         wrapper="span"
                         speed={20}
                         style={{ display: 'inline-block' }}
                         repeat={false}
                         className='text-typing'
                         
                    />

                    <p className='description'>&quot;Coding Harmony, Living Simply.&quot;</p>
               </div>
          </section>
     );
}

export default Hero;