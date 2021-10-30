import React from "react"
import SEO from "../components/seo"

//components
import Index from "../components/index/index"
import Process from "../components/process"
import AboutHome from "../components/aboutHome"
import ProjectsHome from "../components/projectsHome"
import OurNumbers from "../components/ourNumbers"
import PeopleLove from "../components/peopleLove"

const IndexPage = () => (
  <div id="app">
    <SEO title="Home" />
    <div className="banner">
      <div className="inner-banner">
        <Index />
      </div>
      <div>
        <AboutHome/>
        <OurNumbers/>
        <PeopleLove/>
        <Process/>
        <ProjectsHome/>
      </div>
    </div>
  </div>
)

export default IndexPage
