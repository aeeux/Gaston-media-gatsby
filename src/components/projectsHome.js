import React from "react"
import processimg from "../images/research.png"
import Carousel from "react-elastic-carousel"
import Item from "./item"
import { Link } from "gatsby"
import Rectangle from "../images/Rectangle.png"
import ScrollContainer from "react-indiana-drag-scroll"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const changeFromBreakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 700, itemsToShow: 1.5 },
  { width: 960, itemsToShow: 2 },
  { width: 1279, itemsToShow: 2.5 },
]

console.log(Rectangle)

const ProjectsHome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="font">
      <li data-aos="fade-right" className="heading-ab">
        Featured Projects{" "}
      </li>

      <div data-aos="fade-left">
        <ScrollContainer className="carousel">
          <Link draggable="false" to="/NaestvedProvsti">
            <div className="carouselItem case1">
              <h2>Næstved Provsti</h2>
            </div>
          </Link>
          <Link draggable="false" to="/item2">
            <div className="carouselItem case2">
              <h2>Tension Therapy</h2>
            </div>
          </Link>
          <Link draggable="false" to="/item3">
            <div className="carouselItem case3">
              <h2>Case 3</h2>
            </div>
          </Link>
          <Link draggable="false" to="/item4">
            <div className="carouselItem case4">
              <h2>Case 4</h2>
            </div>
          </Link>
          <Link draggable="false" to="/item5">
            <div className="carouselItem case5">
              <h2>Case 5</h2>
            </div>
          </Link>
        </ScrollContainer>
      </div>
    </div>
  )
}

export default ProjectsHome
