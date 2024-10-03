import { Button, Col, Image, Row } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import { photoProfile2 } from "../../../../assets/photo";
import './About.scss';

function About() {
     return (
          <div className="about" id="about">
               
               <div className="container">
                    <Row className="content-info">
                         <Col xs={24} sm={24} md={24} lg={11} xl={13} className='img-block' data-aos="fade-up-right">
                              <Image className='img' src={photoProfile2} alt="" />
                         </Col>

                         <Col xs={24} sm={24} md={24} lg={13} xl={11} className='text-block' data-aos="fade-up-left">
                              <div >
                                   <div className='title-block'>
                                        <p className='who-text'>Who am i?</p>
                                        <h1 className='title'>I&apos;m Bao Trong, a Front-end Developer</h1>
                                        <p className='sub-title'>&quot;I use code to develop the parts of websites and apps that people, products and interact with. Fonts and colours. Forms and buttons. That&apos; me.&quot;</p>
                                   </div>
                                   <Row className='infor-block'>
                                        <Col xs={24} lg={12}>
                                             <p className='infor-item'><span>Name:</span> Nguyen Huynh Bao Trong</p>
                                             <p className='infor-item'><span>Age:</span> {20}</p>
                                        </Col>

                                        <Col xs={24} lg={12}>
                                             <p className='infor-item'><span>From:</span> Ho Chi Minh, VN</p>
                                             <p className='infor-item'><span>Email:</span> baotrongnh@gmail.com</p>
                                        </Col>

                                        <div className='button-block'>
                                             <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
                                                  Download CV
                                             </Button>
                                        </div>
                                   </Row>
                              </div>
                         </Col>
                    </Row>
               </div>
          </div>
     );
}

export default About;