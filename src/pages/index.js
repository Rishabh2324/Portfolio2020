import React, {useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Intro from "../components/Landing/intro"
import Skills from "../components/Skills/skills"
import Projects from "../components/Projects/projects"
import Experience from "../components/Experience/experience"
import Discussion from "../components/About /discussion"
import Contact from "../components/Contact/contact"
import Aos from "aos"
import "aos/dist/aos.css"

const IndexPage = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])

  return (
    <Layout>
      <SEO title="Rishabh Jain" />
      <Intro />
      <div data-aos="fade-down">
        <Discussion about={data.about} />
      </div>
      <div data-aos="fade-down">
        <Skills skill={data.skills} />
      </div>
      <div data-aos="fade-down">
        <Projects project={data.projects} />
      </div>
      <div data-aos="fade-down">
        <Experience experience={data.experience} />
      </div>
      <Contact/>  
    </Layout>
  )
}

export const query = graphql`
  {
    skills: allContentfulSkills {
      edges {
        node {
          id
          title
          category
        }
      }
    }
    projects: allContentfulProjects {
      edges {
        node {
          id
          title
          description
          link
          image {
            sizes(maxWidth: 300,maxHeight: 200) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
    about: allContentfulAbout {
      edges {
        node {
          id
          description {
            description
          }
        }
      }
    }
    experience: allContentfulExperience {
      edges {
        node {
          id
          roole
          description
          link
          image {
            sizes(maxWidth: 300,maxHeight: 200) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
