import React from "react"
import processimg from "../images/research.png"
import Carousel from "react-elastic-carousel"
import Item from "./item"
import { Link } from "gatsby"
import rectangle from '../images/Rectangle.png';

const changeFromBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 1.5 },
  { width: 960, itemsToShow: 2 },
  { width: 1279, itemsToShow: 2.5 },
]


const projectsHome = () => {
  return (
    <div className="font">
      <li className="heading-ab">Featured Projects </li>
      <Carousel breakPoints={changeFromBreakpoints}>

        <Item> <div className='carouselCards'> <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link> </div></Item>
        <Item> <div className='carouselCards'> <Link className='linkButtonCards' draggable="false" to='/item2'>Check Out</Link> </div></Item>
        <Item> <div className='carouselCards'> <Link className='linkButtonCards' draggable="false" to='/item3'>Check Out</Link> </div></Item>
        <Item> <div className='carouselCards'> <Link className='linkButtonCards' draggable="false" to='/item4'>Check Out</Link> </div></Item>

      </Carousel>

      <div id='carousel'>
        <div className='carouselItem'>
          <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link>
        </div>
        <div className='carouselItem'>
          <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link>
        </div>
        <div className='carouselItem'>
          <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link>
        </div>
        <div className='carouselItem'>
          <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link>
        </div>
        <div className='carouselItem'>
          <Link className='linkButtonCards' draggable="false" to='/item1'>Check Out</Link>
        </div>

      </div>
    </div>


  )
}


export default projectsHome
