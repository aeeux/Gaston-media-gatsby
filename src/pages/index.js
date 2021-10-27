import React from "react"
import SEO from "../components/seo"

//components
import Index from "../components/index/index"

const IndexPage = () => (
  <div id="app">
    <SEO title="Home" />
    <div className="banner">
      <div className="inner-banner">
        <Index />
      </div>
    </div>
  </div>
)

export default IndexPage
