import React from 'react';
import '../Post/Post.css';
import { motion } from 'framer-motion';
import image2 from '../../Assets/image2.jpg';
import mrudulresume from '../../Assets/mrudulresume.pdf';

const About = () => {
  return (
    <div id='about'>
      < motion.div className='container mt-5 pt-4'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className='row'>
          <div className='col-md-4  d-flex align-items-center justify-content-center' style={{ backgroundColor: "#000" }}>
            <img src={image2} className='mb-5' style={{ width: "200px" }} alt='img2' />
          </div>
          <div className='col-md-8' style={{ backgroundColor: "#000" }}>
            <h1 className='text-white'>About <span style={{ color: '#dc143c' }}>me</span></h1>
            <p className='text-white' style={{ fontSize: "20px" }}>Inspired by various aspects of becoming a full stack developer I am still striving to horn my skills to
              a certain level that exceeds my current state waiting for new opportunities and technologies to
              enlighten my expertise.</p>
            <a href={mrudulresume} download><button className='btn btn-cv mb-2'>Download Resume</button></a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
