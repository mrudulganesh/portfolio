import React from 'react';
import { motion } from 'framer-motion';
import './Service.css';
const Service = () => {
  return (
    <div>
      <div className='container  w-75 mt-4'>
        <div className='row'>
          <h2 className='text-center text-white mb-4'>Technical Skills</h2>
          <div className='col-md-6 mb-3'>
            <motion.div className='card' style={{ backgroundColor: "#000", border: '1px solid #dc143c'}}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h4 className='text-white text-center'>Frontend</h4>
              <li className='text-center text-danger'>HTML & CSS</li>
              <li className='text-center text-danger'>Java Script</li>
              <li className='text-center text-danger'>React Js</li>
              <li className='text-center text-danger'>Bootstrap5</li>
              <li className='text-center text-danger'>Jquery</li>
              <li className='text-center text-danger'>Git</li>
            </motion.div>
          </div>
          <div className='col-md-6'>
            <motion.div className='card' style={{ backgroundColor: "#000", border: '1px solid #dc143c' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <h4 className='text-danger text-center'>Backend</h4>
              <li className='text-center'>Node JS</li>
              <li className='text-center'>Express JS</li>
              <li className='text-center'>MongoDB</li>
              <li className='text-center'>Bcryptjs</li>
              <li className='text-center'>JWT</li>
              <li className='text-center'>Nodemailer</li>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
