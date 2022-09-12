import React from 'react'
import DivProject from './pages/DivProject'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageProject from './pages/PageProject';
import { Container} from 'react-bootstrap';
function App() {
  const marginLeft = {
    marginLeft: "20%"
  }
  return (
    <Container>
      <br/>
      <br/>
      <br />
      <DivProject />
      <br/>
      <br/>
      <br />
      <h1 style={marginLeft}>----------------------------------</h1>
      <br/>
      <br/>
      <br />
      <PageProject />
    </Container>
  )
}

export default App