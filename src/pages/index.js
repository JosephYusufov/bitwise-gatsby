import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const HomePage = () => {
  return <Root>
    <h1>Hi Timone</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Root>;
};

const Root = styled.div`
  color: red;
`
export default HomePage
