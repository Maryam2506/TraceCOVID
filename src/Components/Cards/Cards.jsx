import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import Infected from "../../Images/Infected_icon.png";
import Recoverd from "../../Images/Recoverd_icon.png";
import Dead from "../../Images/Dead_icon.png";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Please wait..";
  }
  console.log(lastUpdate);
  return (
    <div className={styles.container}>
      <Grid container justify="center">
        <Grid item md={12}>
          <Typography variant="h3" component="h3">
            Covid-19 Statistics
          </Typography>
          <Typography variant="h6" component="h6">
          Globally | Coutry Wise
          </Typography>
       
        </Grid>
        <Grid
          style={{ backgroundColor: "rgba(208, 208, 241, 0.5)" }}
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <img src={Infected} alt="Infeced" width="94px"/>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            
           
          </CardContent>
        </Grid>

        <Grid
          style={{ backgroundColor: "rgba(188, 253, 188, 0.5)" }}
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
          <img src={Recoverd} alt="Recoverd" width="94px"/>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
          
          
          </CardContent>
        </Grid>

        <Grid
          style={{ backgroundColor: "rgba(245, 192, 192, 0.5)" }}
          item
          component={Card}
          xs={11}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
          <img src={Dead} alt="Dead" width="94px"/>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
          
           
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
