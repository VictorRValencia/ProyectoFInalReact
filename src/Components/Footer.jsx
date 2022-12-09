import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TikTokIcon from "./TikTikIcon";
import { footer } from "./styled_component/footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <img src="./images/DH.png" alt="" />
          <div>
            <img src="./images/ico-facebook.png" alt="" />
            <img src="./images/ico-instagram.png" alt="" />
            <img src="./images/ico-tiktok.png" alt="" />
            <img src="./images/ico-whatsapp.png" alt="" />
          </div> */}

        <div style={{ background: "red", with: "100%" }}>
          <p
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            VOLVER HACIA ARRIBA
          </p>
        </div>
        <div style={{ diplay: "flex" }} className="footer-container">
          <img style={{ width: "100px" }} src="/images/DH.png" alt="DH-logo" />
          <FacebookIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
