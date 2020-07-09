import React from "react";
import styles from "./InfoButtons.module.css";
import { Button } from "@material-ui/core";
const InfoButtons = () => {
  return (
    <div className={styles.btnGrid}>
      <Button
        style={{ backgroundColor: "#4A148C" }}
        className={styles.btnMyGov}
        variant="contained"
        color="primary"
        target="_blank"
        href="http://www.nhsrc.gov.pk/"
      >
        NHSRC
      </Button>
      <Button
        style={{ backgroundColor: "#004D40" }}
        className={styles.btnMyGov}
        variant="contained"
        color="primary"
        target="_blank"
        href="http://covid.gov.pk/covid19"
      >
        Disease
      </Button>
      <Button
        style={{ backgroundColor: "#900C3F" }}
        className={styles.btnMyGov}
        variant="contained"
        color="primary"
        target="_blank"
        href="https://twitter.com/who?lang=en"
      >
        WHO
      </Button>
      <Button
        style={{ backgroundColor: "#581845" }}
        className={styles.btnMyGov}
        variant="contained"
        color="primary"
        target="_blank"
        href="https://twitter.com/pid_gov"
      >
        PID_GOV
      </Button>
    </div>
  );
};

export default InfoButtons;
