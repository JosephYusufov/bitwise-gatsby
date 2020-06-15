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
    {
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
    `).then(res => {
        const data = res.data;
        data.allArticlesMetaDataJson.nodes.map((articleMetaData, i) => {
            // console.log(file.node.name);
            article[articleMetaData.path] = articleMetaData;
        }); 
    });

        // return graphql(`
        //     query markdown {
        //         allFile(filter: {extension: {eq: "md"}}) {
        //             edges{
        //                 node {
        //                     extension
        //                 }
        //             }
        //         }
        //     }
        // `)
        // console.log(data.allFile.edges);
    }).then(res => {
        // data[]
        console.log(res);
    })
};