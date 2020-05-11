import React, { Component } from "react"
import Heading from "../components/Reusable/heading"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import M from "materialize-css"
import { Helmet } from 'react-helmet'


class Achievments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: props.achivement.edges,
      width: 0, // or your default width here
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener("resize", this.handleWindowSizeChange)
    M.Slider.init(this.slider, {})
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  render() {
    return (
      <Layout>
        <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Helmet>
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
