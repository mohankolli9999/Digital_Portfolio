import React from 'react';
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
  FaLinux,
  FaHandshake,
  FaBrain,
  FaComments,
  FaChalkboardTeacher,
  FaClock,
} from 'react-icons/fa';
import {  
  SiExpress,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import './Skills.css';

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className="skills-header">
        <h1>
          <span className="skills-title">My Skills</span>
        </h1>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Languages</h2>
      </div>
      <div className="lang-icons">
        <div className="lang-icon-container">
          <FaJava className="lang-icon" />
          <p>Java</p>
        </div>
        <div className="lang-icon-container">
          <FaPython className="lang-icon" />
          <p>Python</p>
        </div>
        <div className="lang-icon-container">
          <FaHtml5 className="lang-icon" />
          <p>HTML</p>
        </div>
        <div className="lang-icon-container">
          <FaCss3Alt className="lang-icon" />
          <p>CSS</p>
        </div>
        <div className="lang-icon-container">
          <FaJs className="lang-icon" />
          <p>JavaScript</p>
        </div>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Frameworks/Tools</h2>
      </div>
      <div className="frame-icons">

      <div className="frame-icon-container">
          <FaLinux className="frame-icon" />
          <p>Linux</p>
        </div>
      
        <div className="frame-icon-container">
          <FaReact className="frame-icon" />
          <p>React</p>
        </div>
        <div className="frame-icon-container">
          <SiExpress className="frame-icon" />
          <p>Express</p>
        </div>
        <div className="frame-icon-container">
          <FaGit className="frame-icon" />
          <p>Git</p>
        </div>

      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Software</h2>
      </div>
      <div className="tech-icons">
        <div className="tech-icon-container">
          <FaGithub className="tech-icon" />
          <p>Github</p>
        </div>
        <div className="tech-icon-container">
          <TbBrandVscode className="tech-icon" />
          <p>VS Code</p>
        
        </div>
      </div>
      <br />
      <div className = "skill-section-header">
        <h2>Soft Skills</h2>
      </div>
      <div class="soft-icons">
      <div className="soft-icon-container">
          <FaComments className="soft-icon" />
          <p>Communication</p>
        </div>
        <div className="soft-icon-container">
          <FaHandshake className="soft-icon" />
          <p>Collaboration</p>
        </div>
        <div className="soft-icon-container">
          <FaBrain className="soft-icon" />
          <p>Problem Solving</p>
        </div>
        <div className="soft-icon-container">
          <FaChalkboardTeacher className="soft-icon" />
          <p>Leadership</p>
        </div>
        <div className="soft-icon-container">
          <FaClock className="soft-icon" />
          <p>Time Management</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
