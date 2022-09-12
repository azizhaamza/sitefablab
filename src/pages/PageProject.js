import React from 'react'
import { Container, Card, Row, Col} from 'react-bootstrap';

function PageProject() {
    const listService = [
    {
      title: "title 1",
      imgUrl: "url 1",
      description: "description 1",
      more : "Learn more 1"
    },
    {
      title: "title 2",
      imgUrl: "url 2",
      description: "description 2",
      more : "Learn more 2"
    },
    {
      title: "title 3",
      imgUrl: "url 3",
      description: "description 3",
      more : "Learn more 3"
    },
    {
      title: "title 4",
      imgUrl: "url 4",
      description: "description 4",
      more : "Learn more 4"
    },
    {
      title: "title 5",
      imgUrl: "url 5",
      description: "description 5",
      more : "Learn more 5"
    },
    {
      title: "title 6",
      imgUrl: "url 6",
      description: "description 6",
      more : "Learn more 6"
    },
    {
      title: "title 7",
      imgUrl: "url 7",
      description: "description 7",
      more : "Learn more 7"
    },
    {
      title: "title 8",
      imgUrl: "url 8",
      description: "description 8",
      more : "Learn more 8"
    },
    ]
    const style ={
        width: "15ren",
        marginBottom:"5%"
    }
  return (
      <>
          <Row>
            {listService.map(
            (e,index)=>{
            // console.log(e.title + " || " + listService.length)
            return (
                <Col xs={12} md={4} xl={3} key={index} style={style}>
                <Card >
                    <Card.Header as="h5">{index} - {e.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{e.imgUrl}</Card.Title>
                        <Card.Text>
                                {e.description}<br/>
                                {e.more}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            )
            })} 
        </Row>
    </>
  )
}

export default PageProject