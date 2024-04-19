import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import React, { useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './landingpage.css';



type Props = {}

const Landingpage = () => {
  const parentRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
    
      gsap.fromTo('.image-container', 
        {
          scale: 0.4, // starting scale
          opacity: 0.35, // starting opacity
        }, 
        {
          scale: 1, // final scale
          opacity: 1, // final opacity
          scrollTrigger: {
            trigger: '.image-container', // element to trigger the animation
            start: 'top bottom', // start animation when the top of trigger hits the bottom of viewport
            end: '+=550',
            scrub: true,
          }
        }
      );
    
      // Cleanup function to kill ScrollTriggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  
  return (
    <div className="flex bg-slate-50 flex-col pt-20">
    <div className="mx-auto max-w-screen-lg">
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col gap-y-4">
      <div className="flex items-center  text-blue-700 text-center gap-4">
        <button className="bg-slate-200 px-4 py-2 rounded-md">New</button>
        <span className="inline-block">Add team members to accounts</span>
        <img src="./arrowright.svg" alt="" className="h-4 w-4"/>
      </div>
      <div className="text-slate-800 text-6xl"><div className="text-blue-700 ">Scale big <span className="text-slate-800">with</span></div>OmniSynkAI</div>
      <div className="text-gray-400">The AI Powered Order Management System with limitless possibilities</div>
      <div className="flex gap-3">
      <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400  px-3 py-2 rounded-md text-sm font-medium">Talk to sales</button>
      <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">Request demo</button>
      </div>
      <img src="./colabteam.svg" alt="" className="w-[270px] h-[36px]"/>
      </div>
      
      <img src="./omni-interface-page1.svg"/>
    </div>
    <div className="flex flex-col items-center justify-center py-10 gap-4">
      <div className="text-sm text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text">SIMPLY BETTER, ALL AROUND</div>
      <div className="text-5xl text-slate-800 w-[80%] text-center">Grow your e-commerce store with Intelligent Automation</div>
      <div className="text-xl text-slate-400 w-[80%] text-center">OmniSynkAI leverages the power of AI to streamline e-commerce operations, offering automated order management, inventory tracking, and insightful analytics. Say goodbye to manual tasks and hello to effortless business management.</div>
      <img src="./page2.svg" alt="" />
      <div className="flex flex-col items-center justify-center ">
      <div ref={parentRef} className="bg-gradient-to-b from-purple-600 to-indigo-600 rounded-lg h-auto flex flex-col items-center justify-center py-10 gap-4 relative">
      
        <motion.img drag dragConstraints={parentRef} dragMomentum={false} src="./starimg.png" alt=""/>
      <motion.div drag dragConstraints={parentRef} dragMomentum={false}>
        <div className="text-white text-sm text-center uppercase">our most powerful tool</div>
      </motion.div>
      
      <motion.div drag dragConstraints={parentRef} dragMomentum={false} className="text-white text-6xl w-[80%] text-center">
        Build your dream store in minutes - not days
      </motion.div>
      
      <motion.div drag dragConstraints={parentRef} dragMomentum={false} className="text-white text-xl w-[72%] text-center">
        Build a stunning e-commerce site with our AI drag-and-drop tool, created by ex-Meta and ex-Adobe designers. Streamline your operations with built-in order management.
      </motion.div>
      
      <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400 px-5 py-2 rounded-md text-sm font-medium">
        Try it out
      </button>
    
        <motion.img drag dragConstraints={parentRef}
        dragMomentum={false}
        className="image-container" src="./automate.svg" alt="Zooming Image" />
      

    </div>
      </div>
    </div>
        <div className="flex flex-col items-center justify-center py-10 gap-4 overflow-x-hidden">
        <div className="text-5xl text-slate-800 text-center">Native integrations</div>
        <div className="text-xl text-slate-400 w-[80%] text-center">Seamlessly link OmniSynkAI with the e-commerce platforms, shipping providers, and marketing apps you already use. Automate tasks, sync data, and streamline your entire workflow. Explore our top integrations below, and many more.</div>
        <div className="flex flex-col gap-8 overflow-hidden">
        
        <div className="flex logos-container space-x-4">
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./etsy.svg" alt="" /> Etsy</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./ebay.svg" alt="" /> eBay</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./mercari.svg" alt="" /> Mercari</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./depop.svg" alt="" /> Depop</div>
        </div>
        <div className="flex logos-container-2 space-x-4">
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./etsy.svg" alt="" /> Etsy</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./ebay.svg" alt="" /> eBay</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./mercari.svg" alt="" /> Mercari</div>
          <div className="flex flex-col w-[450px] h-[218px] border border-slate-400 rounded-md items-center justify-center"><img src="./depop.svg" alt="" /> Depop</div>
        </div>
  
      </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10 gap-4">
        <div className="text-5xl text-slate-800 w-[80%] text-center">Discover why OmniSynkAI is the easiest way to manage orders from everywhere.</div>
        <div className="text-xl text-slate-400 w-[80%] text-center">No more clunky interfaces or confusing jargon – just intuitive tools that simplify your workflow.</div>
        <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400  px-3 py-2 rounded-md text-sm font-medium">Request demo</button>
        </div>
        <div className="flex flex-col gap-4">
        <div className="flex">
          <img src="./page4-1.svg" alt="" />
          <div className="flex flex-col items-start justify-center gap-4 pl-20">
            <div className="text-sm text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text">FEATURE</div>
            <div className="text-5xl text-slate-800 w-[60%] ">Customizable dashboard</div>
            <div className="text-xl text-slate-400 w-[60%] ">Set up what works for you and your business and leave out what doesn't</div>
          </div>

        </div>
        <div className="flex">
          <div className="flex flex-col items-start justify-center gap-4 ">
            <div className="text-sm text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text">FEATURE</div>
            <div className="text-5xl text-slate-800 w-[60%] ">Automate your business in a few steps</div>
            <div className="text-xl text-slate-400 w-[60%] ">Make time for what really matters and leave the repetitive tasks to us</div>
          </div>
          <img src="./page4-2.svg" alt="" />
        </div>
          
        <div className="flex"> 
          <img src="./page4-3.svg" alt="" />
          <div className="flex flex-col items-start justify-center gap-4 pl-20">
            <div className="text-sm text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text">FEATURE</div>
            <div className="text-5xl text-slate-800 w-[60%] ">Pack and ship orders in one click</div>
            <div className="text-xl text-slate-400 w-[60%] ">Our system scales with your business, helping you fulfill orders faster and more accurately than ever before.</div>
          </div>
        </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-20">
          <div className="text-xl text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text">HOW WE SUPPORT YOU</div>
          <div className="text-4xl text-slate-800">An OMS built to help you succeed</div>
          <div className="flex gap-5 py-10">
            <div className="flex flex-col  gap-3 w-1/3">
              <div className="text-3xl text-slate-800 w-[80%]">Finish tasks quicker</div>
              <div className="text-xl text-slate-400">Forget about those tedious backend tasks. Our automations handle them, so you can focus on what matters.</div>
              <img src="./oms1.svg" alt="" />
            </div>
            <div className="flex flex-col  gap-3 w-1/3">
              <div className="text-3xl text-slate-800">Top integrations</div>
              <div className="text-xl text-slate-400">Centralize your orders. Streamline support. Gain actionable insights.</div>
              <img src="./oms2.svg" alt="" />
            </div>
            <div className="flex flex-col  gap-3 w-1/3"> 
              <div className="text-3xl text-slate-800">Work together, anywhere</div>
              <div className="text-xl text-slate-400">Work together, your way. Customize roles for streamlined collaboration and boosted productivity.</div>
              <img src="./oms3.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex bg-blue-900 rounded-lg p-14 ">
          <div className="flex flex-col gap-5">
            <div className="text-slate-50 text-4xl">We go where you grow</div>
            <div className="text-xl text-slate-50 w-[80%] ">Our platform scales effortlessly with your business. Whether you're starting with 10 orders a week or scaling to 1,000, we provide the tools and support you need to succeed at every stage.</div>
            <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400  px-3 py-2 rounded-md text-sm font-medium w-[20%]">Talk to sales</button>
          </div>
          <img src="./page6.svg" alt="" />
        </div>
        <div className="flex py-20 my-10">
          <img src="./page6-2.svg" alt="" />
          <div className="flex flex-col gap-2">
            <div className="text-5xl text-slate-900">List faster, reach wider with our AI-powered listing tool.</div>
            <div className="text-xl text-slate-400">Cross-list items effortlessly across multiple selling channels. Get AI-generated captions that attract more buyers and make listing a breeze.</div>
          </div>
          
        </div>
        <div className="flex flex-col justify-center items-center gap-10 py-10">
          <div className="text-5xl text-slate-900">Flexible plans that grow with your business</div>
          <div className="text-xl text-slate-400 w-[70%]">Month-to-month plans with flat rates. No hidden fees, just value. Try it free – we're confident you'll love the intuitive design and powerful features. Start your free 7-day trial today.</div>
          <div className="flex gap-5 py-10">
            <div className="flex flex-col bg-white rounded-md w-[300px] h-[360px] py-4 px-4 shadow-md">
              <div className="text-xl text-slate-400">Basic</div>
              <div className="text-2xl text-slate-900 font-bold pb-5">Free, always</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Order synching</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Inventory tracking</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Basic reporting</div>
              <hr className="w-full bg-slate-500 h-[1px] mt-24 my-5" />
              <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400  px-3 py-2 rounded-md text-sm font-medium">Select plan</button>
            </div>
            <div className="flex flex-col bg-white rounded-md w-[300px] h-[360px] py-4 px-4 shadow-md">
              <div className="text-xl text-slate-400">Solo</div>
              <div className="text-2xl text-slate-900 font-bold pb-5">$8/month</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />AI automation</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Predictive analytics</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Smart recommendations</div>
              <hr className="w-full bg-slate-500 h-[1px] mt-24 my-5" />
              <button className="bg-blue-700 text-white hover:bg-blue-700 hover:text-slate-400 border border-slate-400  px-3 py-2 rounded-md text-sm font-medium">Select plan</button>
            </div>
            <div className="flex flex-col bg-white rounded-md w-[300px] h-[360px] py-4 px-4 shadow-md">
              <div className="text-xl text-slate-400">Enterprise</div>
              <div className="text-2xl text-slate-900 font-bold pb-5">Custom</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Multi-User Support</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Advanced Integrations</div>
              <div className="flex text-base gap-2 py-1"><img src="./check.svg" alt="" />Dedicated Support</div>
              <hr className="w-full bg-slate-500 h-[1px] mt-24 my-5" />
              <button className="bg-white text-slate-400 hover:bg-blue-700 hover:text-white border border-slate-400  px-3 py-2 rounded-md text-sm font-medium">Select plan</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-3 justify-center">
            <div className="text-5xl text-slate-900">Easiest way to visualize orders</div>
            <div className="text-xl text-slate-400">See your orders, not a spreadsheet. OmniSynkAI's gallery view makes fulfillment a breeze – perfect for those who think in pictures.</div>
          </div>
          <img src="./page7-1.svg" alt="" />
        </div>
        <div className="flex">
          <img src="./page7-2.svg" alt="" className="w-[50%]"/>
          <div className="flex flex-col gap-3 justify-center">
            <div className="text-5xl text-slate-900">Seamless team collaboration</div>
            <div className="text-xl text-slate-400">Our platform makes collaboration easy for your fulfillment and warehouse teams. Get started quickly with our intuitive interface and built-in tooltips.</div>
          </div>
        </div>
        
      </div>
        <div className="flex flex-col bg-blue-900  p-16 justify-center items-center gap-8">
          <div className="text-white text-4xl">Learn more about what we have to offer</div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">Read FAQs</button>
        </div>
        
    </div>
  )
}

export default Landingpage