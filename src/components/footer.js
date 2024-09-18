import React from "react";
import './footer.css'

const Footer = () => {
    return(
        <footer>
        <p> Copyright © 2024 - Direitos autorais à GuZebbra</p>
        <div class="midia">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/material-outlined/24/c8ae6a/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios-filled/50/c8ae6a/tiktok--v1.png"
              alt="tiktok--v1"
            />
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/ios/50/c8ae6a/pinterest--v1.png"
              alt="pinterest--v1"
            />
          </div>
    </footer>
    );
}

export default Footer;