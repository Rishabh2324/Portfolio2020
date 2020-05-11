import React, { Component } from "react"
import Heading from "../components/Reusable/heading"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

if (typeof window !== "undefined") {
  require("materialize-css/dist/js/materialize.min.js")
}

class Achievments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: props.achivement.edges,
    }
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".slider")
    window.M.Slider.init(elems, {})
  }
  render() {
    return (
      <Layout>
      <div className="container view">
        <Heading title="Gallery" />
        <div class="slider">
          <ul class="slides">
            {this.state.gallery.map(({ node }) => {
              return (
                <li key={node.id}>
                  <Img fluid={node.image.fluid} />
                  <div class="caption center-align">
                    <h3>{node.title}</h3>
                    <h5 class="light grey-text text-lighten-3">
                      {node.descriptionon}
                    </h5>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      </Layout>
    )
  }
}

const galleryPage = ({ data }) => <Achievments achivement={data.gallery} />

export const query = graphql`
  {
    gallery: allContentfulGallery {
      edges {
        node {
          id
          title
          descriptionon
          image {
            fluid(maxWidth:2080,maxHeight:786){
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default galleryPage
