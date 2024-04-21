"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from "@react-three/fiber"
import Iphone from "./Iphone.jsx"
import Spline from "@splinetool/react-spline"


const WebgiViewer = () => {

  return (
 <div className='w-full h-[100vh]'>
   <Spline scene="https://prod.spline.design/lPKZ5nOaN8UlIoMg/scene.splinecode" />
 </div>
  )
}

export default WebgiViewer