import React from 'react';
import '../Post/Post.css';
import { motion } from 'framer-motion';
import project5 from '../../Assets/project5.png';
import project2 from '../../Assets/project2.png';
import project3 from '../../Assets/project3.png';
import project4 from '../../Assets/project4.png';
const Project = () => {
  const Projects = [
    
    {
      id: 1,
      title: "Todo App",
      image: project4,
      // technologies: "ReactJS,CSS,Bootsrap",
      link: "http://mrudulganesh.github.io/todo-app",
      github: "http://github.com/mrudulganesh/todo-app/tree/main",
    },
    {
      id: 2,
      title: "Portfolio",
      image: project5,
      // technologies: "ReactJS,CSS,Bootstrap",
      link: "http://mrudulganesh.github.io/portfolio",
      github: "http://github.com/mrudulganesh/portfolio/tree/main",
    },
    {
      id: 3,
      title: "Job portal",
      image: project3,
      // technologies: "ReactJS,CSS,Boostrap,NodeJS,ExpressJS,MongoDB",
      // link: "https://",
      // github: "https://",
    },
  ];
  return (
    <div className='container d-flex align-items-center justify-content-center mt-5 pt-3'>
      <div className='row'>
        <h3 className='pb-1 text-white text-center'>Projects</h3>
        {
          Projects.map((pro) => (
            <motion.div className='col-md-4 col-md-3 m-1 mb-4 mt-4' key={pro.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1}}
              transition={{ duration: 2 }}
            >
              <div class="card me-2 mb-3" style={{ backgroundColor: "#000"}}>
                <img src={pro.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-white">{pro.title}</h5>
                  <p class="card-text text-white">{pro.technologies}</p>
                </div>
                <div class="card-body d-flex align-items-center justify-content-center">
                  <a href={pro.github} target='_blank' rel='noreferrer' class=" btn btn-git me-3">GitHub</a>
                  <a href={pro.link} target='_blank' rel='noreferrer' class=" btn btn-demo">Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Project
