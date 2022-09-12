import React from 'react';
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function DivProject() {

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
  ]


  const styles = {
    style :{
      width : "20ren",
    },
    div: {
      display: "flex",
      flexDirection : "row",
      justifyContent: "space-evenly",
      marginBottom :"3rem"
    },
    p: {
      height: "6px",
      width :"30%",
      backgroundColor: "red",
      margin: "auto 0",
      borderRadius: "20px"
    },
    margin: {
      margin: "auto 0",
    }
  }
  
  return (
    < >
      <div style={styles.div}>
        <p style={styles.p}></p>
        <p style={styles.margin}>Project</p>
        <p style={styles.p}></p>
      </div>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
      >
      {listService.map(
        (e,index)=>{
          // console.log(e.title + " || " + listService.length)
          return (
            <SwiperSlide key={index} >
            <div style={styles.style}>
              <Card >
                  <Card.Header as="h5">{e.title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{e.imgUrl}</Card.Title>
                    <Card.Text>
                            {e.description}<br/>
                            {e.more}
                    </Card.Text>
                  </Card.Body>
               </Card>
              </div>
              </SwiperSlide>
          )
        })}
        </Swiper>
    </>
  );
}

export default DivProject;
