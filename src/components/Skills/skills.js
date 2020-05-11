import React, { Component } from "react"
import Heading from "../Reusable/heading"
import M from "materialize-css"

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
      totalitem: [],
      skills: props.skill.edges,
      mycategories: filtercategory(props.skill.edges),
    }
  }
  componentDidMount() {
    M.Collapsible.init(this.collapsible, {})
  }
  render() {
    return (
      <section id="skills">
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
