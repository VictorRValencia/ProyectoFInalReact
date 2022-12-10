import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div>
      <footer style={{display: "flex", flexDirection: "column", marginTop:"20px"}}>
      

        <div style={{ background: "red", with: "100%", textAlign: "center"}}>
          <p
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            VOLVER HACIA ARRIBA
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center"}} className="footer-container">
          <img style={{ width: "200px" }} src="/images/DH.png" alt="DH-logo" />
          <div style={{width:"200px"}}>
          <FacebookIcon />
          <InstagramIcon/>
          <WhatsAppIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
