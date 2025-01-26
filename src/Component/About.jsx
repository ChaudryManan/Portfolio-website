import React from 'react'
import image from "./image/fiver profile picture.jpg"
import SkillProgress from "./SkillProgress";
import Stats from './Starts';
function About() {
  return (
    <div className=' w-10/12 mx-auto mt-2'>
      <h1 className='text-4xl font-bold text-center relative top-10 font-sans  '>About me</h1>
{/* display flex start */}
   <div  className='flex md:flex-row flex-col  '>
<div className=' md:w-1/3  h-[400px]'>
<img className='w-80 md:h-[700px]    mx-auto ' src={image} alt="" /> 
</div>
<div className='md:pt-32 pt-10  md:w-4/5 md:p-3'><p className='font-sans-serif text-[#c7c5c1] md:text-lg '>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
<p className='font-sans-serif text-[#c7c5c1] my-3 md:text-lg '>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
<SkillProgress />
<Stats></Stats>
 </div>
   </div>
{/* display flex start */}
    </div>
  )
}

export default About