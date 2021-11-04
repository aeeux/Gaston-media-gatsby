import React from "react"
import processimg from "../images/research.png"
import Carousel from "react-elastic-carousel"
import Item from "./item"
import { Link } from "gatsby"
import Rectangle from '../images/Rectangle.png';
import ScrollContainer from 'react-indiana-drag-scroll'

const changeFromBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 1.5 },
  { width: 960, itemsToShow: 2 },
  { width: 1279, itemsToShow: 2.5 },
]

console.log(Rectangle);

const projectsHome = () => {
  return (
    <div className="font">
      <li className="heading-ab">Featured Projects </li>

      <ScrollContainer className='carousel' >
       <Link draggable="false" to='/NaestvedProvsti'>
        <div className='carouselItem case1'>
          
        </div>
        </Link>
        <Link draggable="false" to='/item2'>
        <div className='carouselItem case2'>
          
        </div>
        </Link>
        <Link draggable="false" to='/item3'>
        <div className='carouselItem case3'>
          
        </div>
        </Link>
        <Link draggable="false" to='/item4'>
        <div className='carouselItem case4'>
          
        </div>
        </Link>
        <Link draggable="false" to='/item5'>
        <div className='carouselItem case5'>
          
        </div>
        </Link>

      </ScrollContainer>
    </div>


  )
}


export default projectsHome
