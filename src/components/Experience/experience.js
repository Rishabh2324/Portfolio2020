import React, { Component  } from "react"
import Heading from "../Reusable/heading"
import Img from "gatsby-image"
import { Helmet } from 'react-helmet'
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
          <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Helmet>
        <div className="container ">
          <Heading title="Experience" />
          <div className="row">
            {this.state.experience.map(({ node }) => {
              return (
                <div className="col s12 m6 l6 xl3" key={node.id} >
                  <div class="card hoverable">
                    <div class="card-image  waves-effect waves-block">
                      <Img className="acti" sizes={node.image.sizes} />
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
