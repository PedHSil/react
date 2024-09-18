import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import carrosel1 from '../img/istockphoto-1320388570-1024x1024.jpg';
import carrosel2 from '../img/istockphoto-ex2.jpg';
import './carrosel.css';

const Carrosel = () => {
  

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel" // Substitua data-ride por data-bs-ride
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carrosel1}
            className="d-block w-100"
            alt="Primeira Imagem"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>GuZebbra</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem doloribus quasi error quas autem placeat impedit
              dolorem eum, consequuntur esse ipsum nostrum commodi similique
              distinctio fugit repudiandae saepe, ut ad eos ipsa aperiam
              provident debitis! Quis reprehenderit repellendus porro, quasi
              neque excepturi facere assumenda.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carrosel2}
            className="d-block w-100"
            alt="Segunda Imagem"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Tattos</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui,
              placeat ullam eligendi iure dolor molestiae voluptate maiores.
              Corrupti minus at eos facere, molestias provident explicabo non
              soluta ex et quas dignissimos? Fugiat, sit? Aliquid nisi eius
              totam recusandae, sit molestias tempora ab, cupiditate est
              mollitia ad alias at unde.
            </p>
            <button><a href="/trabalhos">Trabalhos</a></button>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-bs-slide="next" // Substitua data-slide por data-bs-slide
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carrosel;
