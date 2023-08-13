import React from 'react'
import ProjectItem from './ProjectItem'
import blog from '../assets/blog.png'
import ecom from '../assets/ecom.png'
import newsly from '../assets/newsly.png'
import portfolio from '../assets/portfolio.png'

export default function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center ">Projects</h1>
      <p className="text-center py-8">
        These are few of the Projects I created during my time in Graduation, using the various Technologies and skills i acquired over the period of time. Browse through my Github for more such exciting projects.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={blog} title='Blog App' tech='Django' link='https://github.com/sumanth2k1/DjangoBlog' />
        <ProjectItem img={ecom} title='Ecommerce App' tech='React.js' link='https://github.com/sumanth2k1/Ecommerce-web-shop' />
        <ProjectItem img={newsly} title='News App' tech='React.js' link='https://github.com/sumanth2k1/NewsLy' />
        <ProjectItem img={portfolio} title='Personal Portfolio' tech='React.js' link='' />
      </div>
    </div>
  )
}
