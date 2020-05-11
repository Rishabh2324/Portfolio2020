import React, {useEffect } from "react"
import Heading from "../Reusable/heading"
import boy from "../../images/boy.svg"
import Typical from "react-typical"
import Aos from "aos"

function Intro() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="container view">
      <div className="row">
        <div>
          <div className="col s12 m6 l6">
            <img className="boy" data-aos="fade-right" src={boy} alt="boy" />
          </div>
          <div className="col s12 m6 l6">
            <Heading title="Hii !!" />
            <h1 data-aos="fade-left" className="mainIntroHeading">I'm Rishabh</h1>
            <h2 className="mainIntroHeading2">
              I am a{" "}
              <Typical
                loop={1}
                wrapper="b"
                steps={["Student", 100, "Designer", 1000, "Developer", 1000]}
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
