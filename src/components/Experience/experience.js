import React, { Component  } from "react"
import Heading from "../Reusable/heading"
import Img from "gatsby-image"

class Experience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      experience: props.experience.edges,
    }
  }
  render() {
    return (
      <section id="experience">
        <div className="container ">
          <Heading title="Experience" />
          <div className="row">
            {this.state.experience.map(({ node }) => {
              return (
                <div className="col s12 m6 l6 xl3" key={node.id} >
                  <div class="card hoverable">
                    <div class="card-image  waves-effect waves-block">
                      <Img className="acti" fluid={node.image.fluid} />
                    </div>
                    <div class="card-stacked">
                      <div class="card-content">
                        <span class="card-title">
                          <span className="projectHeading">
                            Role : {node.roole}
                          </span>
                        </span>
                        <p>{node.description}</p>
                      </div>
                      <div class="card-action">
                        <a href={node.link}>{node.link}</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Experience
