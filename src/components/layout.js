/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Reusable/navbar"
import Footer from "../components/Reusable/footer"

import "./layout.css"
import Particles from "react-particles-js"

const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"
        ></link>
      </head>
      <body>
        <div>
          <Navbar />
          <Particles
            canvasClassName="example"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 500,
                  },
                },
                color: {
                  value: "#000000",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 1,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 6,
                  },
                },
                opacity: {
                  value: 0.5,
                  random: true,
                },
                size: {
                  value: 2,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 200,
                  color: "#0000",
                  opacity: 0.3,
                  width: 2,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "top",
                  random: true,
                  straight: true,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: ["grab", "bubble"],
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 0.7,
                    },
                  },
                  bubble: {
                    distance: 600,
                    size: 12,
                    duration: 1,
                    opacity: 0.8,
                    speed: 2,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 20,
                  },
                  remove: {
                    particles_nb: 10,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          {children}
          <Footer />
        </div>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c6943ffb8c7aca9"></script>
      </body>
    </html>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
