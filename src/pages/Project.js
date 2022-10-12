import React from "react";
import "../components/Divproject.css";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/blog-1.jpg";
import Bordure from "../components/Bordure-projets";

function Project() {
    const listService = [
        {
            title: "title 1",
            imgUrl: "url 1",
            description: "description 1",
            more: "Learn more 1",
            date: "12 Decembre",
        },
        {
            title: "title 2",
            imgUrl: "url 2",
            description: "description 2",
            more: "Learn more 2",
            date: "22 November",
        },
        {
            title: "title 3",
            imgUrl: "url 3",
            description: "description 3",
            more: "Learn more 3",
            date: "02 Juin",
        },
        {
            title: "title 4",
            imgUrl: "url 4",
            description: "description 4",
            more: "Learn more 4",
            date: "1 Janvier",
        },
        {
            title: "title 4",
            imgUrl: "url 4",
            description: "description 4",
            more: "Learn more 4",
            date: "1 Janvier",
        },
        {
            title: "title 4",
            imgUrl: "url 4",
            description: "description 4",
            more: "Learn more 4",
            date: "1 Janvier",
        },
    ];
    return (
        <div className="all">
            <Bordure />
            <section id="recent-blog-posts" className="recent-blog-posts">
                <div className="container" id="item" data-aos="fade-up">
                    {listService.map((e, index) => {
                        // Afficher les item de la liste
                        return (
                            <div class="col" id="projectitem">
                                <div class="post-item position-relative h-100">
                                    <div class="post-img position-relative overflow-hidden">
                                        <img
                                            src={image1}
                                            class="img-fluid"
                                            alt=""
                                        />
                                        <span class="post-date">
                                            December 12
                                        </span>
                                    </div>
                                    <div class="post-content d-flex flex-column">
                                        <h3 class="post-title">
                                            Eum ad dolor et. Autem aut fugiat
                                            debitis
                                        </h3>
                                        <div class="meta d-flex align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-person"></i>{" "}
                                                <span class="ps-2">
                                                    Julia Parker
                                                </span>
                                            </div>
                                            <span class="px-3 text-black-50">
                                                /
                                            </span>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-folder2"></i>{" "}
                                                <span class="ps-2">
                                                    Politics
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                        <a
                                            href="blog-details.html"
                                            class="readmore stretched-link"
                                        >
                                            <span>Read More</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Project;
