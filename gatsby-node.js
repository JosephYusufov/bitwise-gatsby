/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    let articles = {};

    /* queries all metadata
      allArticleMetadataJson {
    nodes {
      data {
        title
        description
        path
        image
        featured
        author {
          facebook
          description
          instagram
          name
          profilePicture
          youtube
        }
      }
    }
  }
}

    */
    graphql(`
        query data {
            allFile(filter: {extension: {eq: "json"}}) {
                edges {
                    node {
                        id
                        name
                        extension
                    }
                }    
            }
        }
    `).then(res => {
        const data = res.data;
        data.allFile.edges.map((file, i) => {
            console.log(file.node.name);
            data[file.node.name] = file.node.extension
        }); 

        return graphql(`
            query markdown {
                allFile(filter: {extension: {eq: "md"}}) {
                    edges{
                        node {
                            extension
                        }
                    }
                }
            }
        `)
        // console.log(data.allFile.edges);
    }).then(res => {
        // data[]
        console.log(res);
    })
};