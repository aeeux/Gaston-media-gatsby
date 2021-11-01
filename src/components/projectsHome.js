import React from "react"
import processimg from "../images/research.png"
import Carousel from "react-elastic-carousel"
import Item from "./Item"
import { Link } from "gatsby"

const changeFromBreakpoints = [
  { width: 1, itemToShow: 2 },
  { width: 500, itemToShow: 5 },
]

const projectsHome = () => {
  return (
    <div className="font">
      <li className="heading-ab">Featured Projects </li>
      <Carousel breakpoints={changeFromBreakpoints}>
        <Link to='/item1'>
          <Item>1</Item>
        </Link>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel>
      <div className="scrollbar"></div>
    </div>
  )
}

export default projectsHome
