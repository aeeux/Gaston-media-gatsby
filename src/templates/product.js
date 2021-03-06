import React from "react"


const Product = ({ pageContext }) => {
  const product = pageContext

  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <div className="container fluid">
            <h1 className="main-headline">{product.title}</h1>
            <div className="image">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
