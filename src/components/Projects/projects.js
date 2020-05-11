import React, { Component } from "react"
import Heading from "../Reusable/heading"
import Img from "gatsby-image"

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pro: props.project.edges,
    }
  }

  render() {
    return (
      <section id="project">
        <div className="container" >
          <Heading title="Projects" />
          <div className="row">
            {this.state.pro.map(({ node }) => {
              return (
                <div className="col s12 m6 l6 xl3" key={node.id}>
                  <div data-aos="flip-in" class="card hoverable">
                    <div class="card-image waves-effect waves-block waves-light">
                      <Img class="activator" sizes={node.image.sizes} />
                    </div>
                    <div class="card-content">
                      <span class="card-title activator">
                        <span className="projectHeading">{node.title}</span>
                        <i class="material-icons right ">more_vert</i>
                      </span>
                      <p>
                        <a target="blank" href={node.link} style={{display:"inline-flex "}}>
                          Link{"  "}<i class="material-icons">arrow_forward</i>
                        </a>
                      </p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title">
                       <span className="projectHeading">{node.title}</span>
                        <i class="material-icons right">close</i>
                      </span>
                      <p>{node.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
            <a
              href="https://github.com/Rishabh2324"
              className="right"
              target="blank"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects
