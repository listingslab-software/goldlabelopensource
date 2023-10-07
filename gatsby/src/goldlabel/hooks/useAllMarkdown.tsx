import { graphql, useStaticQuery } from "gatsby"

export const useAllMarkdown = () => {
  const data = useStaticQuery(graphql`
  query AM {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            paid
            draft
            order
            cover
            category
            parentSlug
            slug
            title
            description
            keywords
            image
            youtube
            icon
            lat
            lng
            website
            email
            facebook
            phone
          }
          html
          excerpt
        }
      }
    }
  }
`)

    const {allMarkdownRemark} = data   
    const {edges} = allMarkdownRemark
    const docs: Array<any> = []
    for(let i = 0; i < edges.length; i++){        
        const {node} = edges[i]
        const {frontmatter} = node
                if(!frontmatter.draft){
                  docs.push({
                    order: frontmatter.order,
                    ...node,
                  })
                }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}
