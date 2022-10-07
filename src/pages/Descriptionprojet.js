import React, { useState } from 'react';
import "./Descriptionprojet.css";
import img1 from "../assets/Fire-Fighting.jpg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Descriptionprojet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="row position-relative">

        <img src={img1} class="col-lg-7 about-img" alt='fighter'/>

        <div class="col-lg-7">
          <h2>Consequatur eius et magnam</h2>
          <div class="our-story">
            <h4>Est 1988</h4>
            <h3>Our Story</h3>
            <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.</p>
            <ul>
              <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
              <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
              <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
            </ul>
            <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.</p>

            <div class="watch-video d-flex align-items-center position-relative">
              <i class="bi bi-play-circle"></i>
              <button  onClick={handleShow} className="watchvideo">
                Watch Video
              </button>

              <Modal  size="xl"  show={show} onHide={handleClose} >
                <Modal.Header className='modalheader' closeButton ></Modal.Header>
                <iframe  src="https://www.youtube.com/embed/JjBWiPmGja0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
              </Modal>
              
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Descriptionprojet;