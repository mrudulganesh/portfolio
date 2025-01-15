import React from 'react';
import './Post.css';
import { motion } from 'framer-motion';
import {Typewriter} from 'react-simple-typewriter';
import image4 from '../../Assets/image4.png';

const Post = () => {
  return (
    <div>
      <div className="container-fluid bg-danger" style={{ height: "500px" }}>
        <div className="row" style={{ height: "100%", backgroundColor: "#000" }} id='home'>
          <motion.div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: "" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <div className='container p-0 w-75 pt-5 mt-0'>
              <h2 className='text-center text-white pt-0'>Welcome to our website...</h2>
               <h2 className='text-white text-center'>
                I Am {''}
                <span style={{color:'#dc143c'}}>
                  <Typewriter
                   words={[
                    'React JS Developer',
                    'Node JS Developer',
                    'MERN Stack Developer',
                   ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>

               </h2>
              {/* <h2 className='text-white text-center'>I Am <span className='' style={{ color: "#dc143c" }}>MERN Stack </span>Developer.</h2> */}
              <h2 className='text-center'><a href='mailto:mruduganeshkalanad@gmail.com'><button className='btn btn-connect'>Connect me</button></a></h2>
            </div>
          </motion.div>
          <div className="col-md-6  d-flex align-items-center  justify-content-center">
            <img
              className=''
              src={image4}
              style={{ maxWidth: "100%", height: "200px" }}
              alt="imag1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
