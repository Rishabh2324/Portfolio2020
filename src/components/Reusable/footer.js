import React, { useEffect } from "react"
import Aos from "aos"
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      className="container"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <span className="footerText">
        Designed and Developed with {"   "}
        <i className="material-icons">favorite_border</i>
        {"   "} by Rishabh Jain"
      </span>
    </div>
  )
}

export default Footer
