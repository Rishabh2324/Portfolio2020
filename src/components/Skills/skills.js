import React, { Component } from "react"
import Heading from "../Reusable/heading"
import M from "materialize-css"
import { Helmet } from 'react-helmet'


const filtercategory = items => {
  let holditems = items.map(items => {
    return items.node.category
  })
  let holdCategories = new Set(holditems)
  let categories = Array.from(holdCategories)
  categories = [...categories]
  return categories
}

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0, // or your default width here
      totalitem: [],
      skills: props.skill.edges,
      mycategories: filtercategory(props.skill.edges),
    }
  }
  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
    M.Collapsible.init(this.collapsible, {})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }
  render() {
    return (
      <section id="skills">
        <Helmet>
            <html lang="fr" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Helmet>
        <div className="container view">
          <Heading title="Skills" />
          <ul
            class="collapsible popout"
            ref={collapsible => {
              this.collapsible = collapsible
            }}
          >
            {this.state.mycategories.map((category, index) => {
              let holdskill = this.state.skills.filter(
                ({ node }) => node.category === category
              )
              let holditems = holdskill.map(holdskill => {
                return holdskill.node.title
              })
              let holdTitle = new Set(holditems)
              let titles = Array.from(holdTitle)
              titles = [...titles]
              return (
                <li key={index}>
                  <div class="collapsible-header  waves-effect waves-block  row">
                    <div class="col s10">
                      <i class="material-icons bold">code</i>
                      <span class="skillheading ">{category}</span>
                    </div>
                    <div class="col s2">
                      <i class="material-icons secondary-content">send</i>
                    </div>
                  </div>
                  {titles.map((name, index) => {
                    return (
                      <div class="collapsible-body" key={index}>
                        <span class="skilldescription">{name}</span>
                      </div>
                    )
                  })}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default Skills
