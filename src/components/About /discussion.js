import React, { Component } from "react"
import Heading from "../Reusable/heading"
import Description from "../Reusable/description"
class Discussion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about: props.about.edges,
    }
  }

  render() {
    return (
      <section id="aboutme">
        <div className="container view">
          <Heading title="About Me" />
          {this.state.about.map(({ node }) => {
            return (
              <Description key={node.id} description={node.description.description}/> 
            )
          })}
        </div>  
      </section>
    )
  }
}

export default Discussion
