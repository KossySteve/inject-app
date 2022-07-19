import React from "react";
import "./Footer.scss";
import twitter from "../../assets/images/icon-twitter.png";
import fb from "../../assets/images/icon-facebook.png";
import ig from "../../assets/images/icon-instagram.png";
import phone from "../../assets/images/phone.jpg";
import email from "../../assets/images/mssg.png";
import chat from "../../assets/images/chat.jpg";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__block">
        <div class="footer__socials">
          <a href="https://instagram.com" target="_blank">
            <img src={ig} class="footer__socials--logo" alt="instagram" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src={fb} class="footer__socials--logo" alt="twitter" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} class="footer__socials--logo" alt="twitter" />
          </a>
        </div>
      </div>
      <p class="footer__copyright">
        Copyright iN-JECT © 2022 All Rights Reserved
      </p>
      <div class="footer__block">
        <div class="footer__socials">
          <a href="tel:123-456-7890" target="_blank">
            <img src={phone} class="footer__socials--logo" alt="phone" />
          </a>
          <a href="https://mail.google.com" target="_blank">
            <img src={email} class="footer__socials--logo" alt="email" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            <img src={chat} class="footer__socials--logo" alt="chat" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
