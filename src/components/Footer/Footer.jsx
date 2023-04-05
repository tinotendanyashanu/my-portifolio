import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
const gitUrl = new URL("https://github.com/tinotendanyashanu");
const facebookUrl = new URL("https://www.facebook.com/tinotenda.nyashanu/");
const instagramUrl = new URL(
  "https://instagram.com/tino_nyashanu?igshid=YmMyMTA2M2Y="
);
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>tinotendanyash@gmail.com</span>
        <div className="f-icons">
          <Insta
            color="white"
            size={"3rem"}
            onClick={() => window.open(instagramUrl, "_blank")}
          />
          <Facebook
            color="white"
            size={"3rem"}
            onClick={() => window.open(facebookUrl, "_blank")}
          />
          <Gitub
            color="white"
            size={"3rem"}
            onClick={() => window.open(gitUrl, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
