/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import { graphql, useStaticQuery } from 'gatsby';

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const { data } = useStaticQuery(graphql`
        query files {
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
    `);
    console.log(data);
};