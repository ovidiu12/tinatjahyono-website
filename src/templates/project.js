import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Project = props => {
  console.log(props.data.prismicProject.data)
  return (
    <div>
      <h1>Hello first project!</h1>
      <div style={{ width: "100%", height: "500px" }}>
        <Img
          fluid={
            props.data.prismicProject.data.main_image.localFile.childImageSharp
              .fluid
          }
        ></Img>
      </div>
    </div>
  )
}

Project.propTypes = {}

export default Project

export const pageQuery = graphql`
  query Project($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title
        description {
          html
        }
        main_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
