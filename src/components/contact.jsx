import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import Astronote from './AnimationJsonFiles/astronaut-with-space-shuttle.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';



const phrases = [
  "Get"," In", " Touch",
]


export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView} = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className="body">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="lineMask inline-block">
            <motion.p className="p-2" custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}

function Contact() {
  const Result = () => {
    return(
      <p>Successfully Submited!</p>
    )
  }
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true)
  }
  return (
    <div className="lg:mx-w-[1123px] mx-auto relative my-24" id='Contact' onSubmit={sendEmail}>
      <h1 className="text-center text-white text-[48px] font-bold pb-14"><MaskText /></h1>

      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center gap-12">
        <form className="flex flex-col mx-auto lg:mx-0 text-center text-neutral-600 text-4 font-bold gap-12 max-w-sm">
          <label className="flex flex-col items-start mt-2" name="name">
            Name
            <input
              className="w-[358px] border-b border-neutral-600 focus:outline-none bg-transparent hover:border-neutral-400"
              type="text"
              id="name"
              required
              name='full_name'
            />
          </label>

          <label className="flex flex-col items-start" name="email">
            Email
            <input
              className="w-[358px] border-b border-neutral-600 focus:outline-none bg-transparent hover:border-neutral-400"
              id="email"
              type="email"
              required
              name='email'
            />
          </label>

          <label className="flex flex-col items-start" name="message">
            Message
            <textarea
              className="w-full border border-neutral-600 leading-tight focus:outline-none bg-transparent hover:border-neutral-400"
              id="message"
              rows="5"
              required
              name='message'
            ></textarea>
          </label>
          <button className="w-[355px] h-[55px] bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md text-white cursor-pointer" type='submit'>
            Submit
          </button>
          <div className='text-white'>{result ? <Result /> : null}</div>
        </form>

        <div className="lg:block hidden w">
          {/*<img className="" src="ManSetting.png" alt="Man" />*/}
          <Lottie className='lg:w-[600px]' animationData={Astronote} loop={true}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
