import React from "react";
import "./trabalhos.css";
import img1 from "../img/t1.png";
import img2 from "../img/t2.png";
import img3 from "../img/t3.png";
import img4 from "../img/t4.png";
import img5 from "../img/t5.png";
import img6 from "../img/t6.png";
import img7 from "../img/t7.png";
import img8 from "../img/t8.png";
import img9 from "../img/t9.png";
import img10 from "../img/t10.png";
import img11 from "../img/t11.png";
import img12 from "../img/t12.png";
import img13 from "../img/t13.png";
import img14 from "../img/t14.png";
import img15 from "../img/t15.png";

const Trabalhos = () => {
  return (
    <main>
      <article>
        <div class="trabalho">
          <h2>Meus Trabalhos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            possimus necessitatibus magnam veniam reprehenderit omnis ad.
          </p>
        </div>
        <div class="trabalhoFoto">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
        </div>
      </article>

      <div class="parallax"></div>
    </main>
  );
};

export default Trabalhos;
