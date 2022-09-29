import React from "react";
import "./Divservices.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function DivServices() {
    const listService = [
        {
            title: "title 1",
            description: "description 1",
            more: "Learn more 1",
        },
        {
            title: "title 2",
            description: "description2",
            more: "Learn more 2",
        },
        {
            title: "title 3",
            description: "description 3",
            more: "Learn more 3",
        },

        {
            title: "title 4",
            description: "description 4",
            more: "Learn more 3",
        },
    ];
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Services</h2>
                    <p>
                        Voluptatem quibusdam ut ullam perferendis repellat non
                        ut consequuntur est eveniet deleniti fignissimos eos
                        quam
                    </p>
                </div>
                <Swiper
                    spaceBetween={10}
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
                    {listService.map((e, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div class="row gy-4">
                                    <div
                                        class="col-lg"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="service-item  position-relative">
                                            <div className="icon">
                                                <i className="fa-solid fa-mountain-city"></i>
                                            </div>
                                            <h3>{e.title}</h3>
                                            <p>{e.description}</p>
                                            <a
                                                href={e.more}
                                                className="readmore stretched-link"
                                            >
                                                Learn more{" "}
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default DivServices;
