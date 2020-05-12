import React, { Component } from "react"
import Heading from "../components/Reusable/heading"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import M  from 'materialize-css'



class Achievments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: props.achivement.edges,
    }
  }
  async componentDidMount() {
    M.Slider.init(this.slider, {})
  }
  render() {
    return (
      <Layout>  
        <div className="container view">
          <Heading title="Gallery" />
          <div
            class="slider"
            ref={slider => {
              this.slider = slider
            }}
          >
            <ul class="slides">
              {this.state.gallery.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <Img sizes={node.image.sizes} />
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
            sizes(maxWidth: 2080, maxHeight: 786) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
export default galleryPage
