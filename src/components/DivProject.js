import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Divproject.css";
import "../assets/bootstrap.css"
import 'swiper/css';
import image1 from "../assets/blog-1.jpg";


function DivProject() {

  const listService = [
    {
      title: "title 1",
      imgUrl: "url 1",
      description: "description 1",
      more : "Learn more 1",
      date: "12 Decembre"
    },
    {
      title: "title 2",
      imgUrl: "url 2",
      description: "description 2",
      more : "Learn more 2",
      date: "22 November"
    },
    {
      title: "title 3",
      imgUrl: "url 3",
      description: "description 3",
      more : "Learn more 3",
      date: "02 Juin"
    },
    {
      title: "title 4",
      imgUrl: "url 4",
      description: "description 4",
      more : "Learn more 4",
      date: "1 Janvier"
    },
  ]


  
  
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">
              <div className="container" data-aos="fade-up">
                  <div className=" section-header">
                      <h2>Project</h2>
                      <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                  </div>
                  <Swiper spaceBetween={10}
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
                    }}>
                  {listService.map(
                    (e,index)=>{
                      // console.log(e.title + " || " + listService.length)
                      return (
                            <SwiperSlide key={index} >
                                      <div className="post-item position-relative h-100">
                                          <div className="post-img position-relative overflow-hidden">
                                            <img src={image1} className="img-fluid" alt="" />
                                              <span className="post-date">{e.date}</span>
                                          </div>
                                          <div className="post-content d-flex flex-column">
                                              <h3 className="post-title">{e.title}</h3>
                                              <div className="meta d-flex align-items-center">
                                                  <div className="d-flex align-items-center">
                                                      <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                                                  </div>
                                                  <span className="px-3 text-black-50">/</span>
                                                  <div className="d-flex align-items-center">
                                                      <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                                                  </div>
                                              </div>
                                              <hr />
                                              <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                        </div>
                                      </div>
                            </SwiperSlide>
                  
                      )
                    })}
                    </Swiper>
                    </div>
                    </section>
              );
}

export default DivProject;
