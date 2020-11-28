import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
/* UI components */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
/* UI icons */
import ReceiptIcon from '@material-ui/icons/Receipt';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'fixed',
    bottom: 0,
    paddingBottom:12,
    paddingTop:12,
    background:'#efefef'
  },
  item: {
    textAlign:'center',
    textDecoration:'none',
    color:'#f50057'
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();
  const links = [
      {
        label: 'Tel',
        link: '/',
        icon: <PhoneIcon />
      },
      {
        label: 'Contact',
        link: '/',
        icon: <MailIcon />
      }
  ]
  return (
    <React.Fragment>
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        <Grid container justify="center">
            <Link to="/simulator" className={classes.item}>
              <ReceiptIcon />
              <Typography>Estimation</Typography>
            </Link>
        </Grid>
      </Grid>
      {links.map((item,index) => (
      <Grid item xs={4} key={index}>
        <Grid container justify="center">
            <a href={item.link} className={classes.item}>
                {item.icon}
                <Typography>{item.label}</Typography>
            </a>
        </Grid>
      </Grid>
      ))}
    </Grid>
    </React.Fragment>
  );
}
