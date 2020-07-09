import React from "react";
import { Button, Typography } from "@material-ui/core";
import Doctor from "../../Images/Doctor_icon.png";
import styles from "./Header.module.css";
import { FaGithub, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.container}>
        <img src={Doctor} alt="Home_logo" width="100px" />
        <Typography variant="h4">Thanks to Our Doctors.</Typography>
        <Typography variant="h6">
          بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ
          وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
        </Typography>
     
        <div>
          <Button
            style={{ backgroundColor: "#212344" }}
            className={styles.btnAboutMe}
            variant="contained"
            color="primary"
            target="_blank"
            href="https://github.com/Maryam2506"
          >
            <FaGithub />
          </Button>
          <Button
            style={{ backgroundColor: "#4A148C" }}
            className={styles.btnAboutMe}
            variant="contained"
            color="primary"
            target="_blank"
            href="https://www.facebook.com/maryam.tufail2506/"
          >
            <FaFacebook />
          </Button>
        </div>

    </div>
  );
};

export default Header;
