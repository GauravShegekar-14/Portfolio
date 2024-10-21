import React,{useState} from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast'
import { FiSend } from 'react-icons/fi'
import  insta from "../Assets/instagram.png"
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.png"
import mail from "../Assets/gmail.png"
import phone from "../Assets/phone.png"
import gaurav from "../Assets/gaurav.png"


const ContactForm = () => {

         
  return (
   <section className='pt-20' id='contact'>
    <h2 className='text-center text-4xl font-semibold tracking-tighter '>Contact</h2>
    <h3 className='h-10 font-semibold pl-10'>About me</h3>
    <ul className='flex gap-7 pl-10' >
        
        <li><a href="#" ><img src={insta} alt="instagram"  height={40} width={40} className='' /></a></li>
        <li><a href="#"><img src={linkedin} alt="linkedin" height={40} width={40} className='' /></a></li>
        <li><a href="#"><img src={github} alt="github" height={40} width={40}  className=''/></a></li>
    </ul>
     <ul className='flex flex-col gap-5 pl-10  mt-5'>
        <li><a href="#" className='flex gap-5 align-middle cursor-pointer'><img src={mail}  alt="email" height={40} width={40} className=''/>gauravrshegekar@gmail.com</a></li>
        <li><a href="#" className='flex gap-5 align-middle'><img src={phone} alt="phone" height={40} width={40}  className=''/>+91 9156499532</a></li>
     </ul>
     <p className='flex justify-center pb-3'>&copy; This website is made by Gaurav Shegekar</p>
   </section>
  )
}
export default ContactForm