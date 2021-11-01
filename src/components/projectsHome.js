import React from "react"
import processimg from "../images/research.png"
import Carousel from "react-elastic-carousel"
import Item from "./item"
import { Link } from "gatsby"
import rectangle from '../images/Rectangle.png';

const changeFromBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2.5 }
]



const projectsHome = () => {
  return (
    <div className="font">
      <li className="heading-ab">Featured Projects </li>
      <Carousel breakPoints={changeFromBreakpoints}>
        
          <Item><Link draggable="false" to='/item1'><img draggable="false" className="itemImage" src={rectangle}></img></Link></Item>
          <Item><Link draggable="false" to='/item2'><img draggable="false" className="itemImage" src={rectangle}></img></Link></Item>
          <Item><Link draggable="false" to='/item3'><img draggable="false" className="itemImage" src={rectangle}></img></Link></Item>
          <Item><Link draggable="false" to='/item4'><img draggable="false" className="itemImage" src={rectangle}></img></Link></Item>

      </Carousel>
    </div>
  )
}


export default projectsHome
