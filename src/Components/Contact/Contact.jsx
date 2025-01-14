import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import '../Post/Post.css';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // const [status, setStatus] = useState('');

    //Handle input change
    const handlechange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    //Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //Your EmailJS credentials
        const SERVICE_ID = 'service_5wvin0b';
        const TEMPLATE_ID = 'template_dz20e5c';
        const PUBLIC_KEY = 'iPntto3HK8FVMQx8U';

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((response) => {
                console.log('Message sent successfully!', response.status, response.text);
                // setStatus('Message sent successfully!');

                //Reset formdata
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                toast.success('Message sent successfully!');
            }).catch((error) => {
                console.error('Failed to send message:', error);
                // setStatus('Failed to send message. Please try again.');
                toast.error('Failed to send message. Please try again.');
            });
    };


    return (
        <div className='mt-5'>
            <div class="container-xxl py-5">
                <div class="container">
                    <h1 className="text-center mb-5 wow fadeInUp text-white">
                        Contact For Any Query
                    </h1>
                    <div class="row g-4" id='contact'>
                        <div class="col-12">
                            <div class="row gy-4">
                                <div class="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                    <motion.div class="d-flex align-items-center  rounded p-4" style={{ backgroundColor: "#000", border: "1px solid #dc143c" }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div class="  d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                                            <i class="fa fa-map-marker-alt text-danger"></i>
                                        </div>
                                        <span className='text-danger' style={{ fontSize: "18px" }}>Kasragod, Kerala, India</span>
                                    </motion.div>
                                </div>
                                <div class="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                    <motion.div class="d-flex align-items-center  rounded p-4" style={{ backgroundColor: "#000", border: "1px solid #dc143c" }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                                            <i class="fa fa-envelope-open text-danger"></i>
                                        </div>
                                        <span className='text-danger' style={{ fontSize: "18px" }}>mrudulganeshkalanad@gmail.com</span>
                                    </motion.div>
                                </div>
                                <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                    <motion.div class="d-flex align-items-center  rounded p-4" style={{ backgroundColor: "#000", border: "1px solid #dc143c" }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                                            <i class="fa-solid fa-phone text-danger"></i>
                                        </div>
                                        <span className='text-danger' style={{ fontSize: "18px" }}>+91 9061076980</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe class="position-relative rounded w-100 h-100"
                                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.98052022862726!2d75.02095761465432!3d12.460097114738183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736839729110!5m2!1sen!2sin"
                                frameborder="0" style={{ minHeight: "400px", border: "0" }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        <div class="col-md-6">
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <p class="mb-4 text-white">The contact form is currently using ,Your techanical or web applications related issues report our technical team.</p>
                                <form onSubmit={handleSubmit} className='input-section text-danger'>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handlechange}
                                                    required
                                                />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" placeholder="Your Email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handlechange}
                                                    required
                                                />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handlechange}
                                                />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}
                                                    value={formData.message}
                                                    onChange={handlechange}
                                                    required
                                                ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class=" btn btn-send w-100 py-0" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <hr style={{ color: "#dc143c", width: "50%", }} />
            </div>
            <div className='container mt-4  d-flex align-items-center justify-content-center'>
                <a className='me-4 social-icons'
                    href='https://www.facebook.com/mrudul.mrudul.334?mibextid=ZbWKwL'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i class="fa-brands fa-facebook text-white" style={{ fontSize: "35px" }}></i>
                </a>
                <a className='me-4  social-icons'
                    href='https://www.instagram.com/mrudul_ganesh?igsh=MXF0cnNvbDhiNnF4ZQ=='
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i class="fa-brands fa-instagram text-white" style={{ fontSize: "35px" }}></i>
                </a>
                <a className='social-icons'
                    href='https://www.linkedin.com/in/mrudul-ganesh-k-7b58b4225'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <i class="fa-brands fa-linkedin-in text-white" style={{ fontSize: "35px" }}></i>
                </a>
            </div>
            <p className='text-white text-end me-3'>Copyright 2024 About<span style={{ color: "#dc143c" }}>Me</span></p>
        </div>
    )
}

export default Contact
