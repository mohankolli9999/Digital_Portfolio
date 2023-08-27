import React from 'react';
import { Link } from 'react-scroll';
import harishPic from '../../images/harish_photo.png.jpeg';
import cvFile from '../../images/Mohan_Resume.pdf';
import './Home.css';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Mohan Naga Sai Kolli</h1>
        <div className="wrapper">
          <ul className="dynamic-texts">
            <li><span>CS Student</span></li>
            <li><span>Cyber Enthusiast</span></li>
            <li><span>Team player</span></li>
            <li><span>Problem Solver</span></li>
            <li><span>Tech Enthusiast</span></li>
          </ul>
        </div>
        <p>
        Hey! I'm Mohan, a cybersecurity-focused computer science student at NIIT University. Passionate about tech and security, I aim to enhance cyber safety through my growing skill set. Let's connect and collaborate to make a meaningful impact!
        </p>
        <div className='button-container'>
        
          <div className="button-box">
            <Link to="contact" spy={true} smooth={true} offset={50}>Let's Connect!</Link>
          </div>
          <div className="button-box">
            <a href={cvFile} download="Mohan_Resume.pdf">Download CV</a>
          </div>
        </div>
      </div>
      <div className="home-sci">
        <a href="mailto:mohan.sai20@st.niituniversity.in"><i className='bx bx-envelope'></i></a>
        <a href="https://www.linkedin.com/in/mohan-kolli-429903274/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
        <a href="https://github.com/mohankolli9999" target="_blank"><i className='bx bxl-github'></i></a>
      </div>
      <div className="harish-pic">
        <img src={harishPic} alt="Harish Sundar" />
      </div>
      <span className="home-imgHover"></span>
      <br />
      <br />
    </section>
  );
};

export default HomeSection;
