import React from 'react'

function Carousel() {
  return (
    <>
    <div className="container">
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="logo192.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="logo512.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="favicon.ico" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}

export default Carousel