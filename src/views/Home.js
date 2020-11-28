import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
/* Parts */
import Carousel from '../components/Carousel';
/* UI components */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
/* UI icons */
import PetsIcon from '@material-ui/icons/Pets';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = theme => ({
  block: {
    margin:8,
    padding:8
  },
  title: {
    margin:8,
    padding:8,
    marginTop:24,
    fontSize:24,
    color:'#555'
  },
  ttlIcon: {
    fontSize: 32,
    width:32,
    paddingBottom:8,
    paddingRight:8,
    verticalAlign: 'middle'
  },
  subtitle: {
    fontSize:18,
    color:'#555'
  },
  strong: {
    color: '#f50057',
    fontWeight: 'bold',
    fontSize: '160%',
    paddingLeft:2,
    paddingRight:2
  },
  sideIcon: {
    color:'#f50057',
    height:28,
    width:28,
    verticalAlign: 'top',
    paddingRight:4
  },
  product: {
    paddingRight:20
  },
  image: {
    paddingTop:20
  },
  listItem: {
    margin:4
  },
  txt: {
    fontSize:12
  },
  topAdjust1: {
    paddingLeft:16,
    paddingTop:4
  },
  topAdjust2: {
    padding:0,
    margin:0,
    position:'relative'
  },
  topAdjust3: {
    position:'absolute',
    top:0,
    left:-8
  },
  cv: {
    textDecoration: 'none',
    marginBottom:24
  },
  points: {
    marginTop: 24
  }
});
class Home extends React.Component {
  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
        <Carousel />
        <Grid container justify="center">
          <Link className={classes.cv} to="/simulator"><Button variant="contained" color="secondary" startIcon={<PetsIcon />}>Quick Estimation</Button></Link>
        </Grid>
        <h1 className={classes.title}><MenuBookIcon className={classes.ttlIcon} />Why you need it</h1>
        <Paper className={classes.block} elevation={0}>
          <Grid container className={classes.root}>
            <Grid item xs={4} container justify="center">
              <img className={classes.image} src="/images/h1.jpg" width="100%" height="100%" alt="Cost" />
            </Grid>
            <Grid item xs={8} className={classes.topAdjust1}>
              <h2 className={classes.subtitle}><LocalHospitalOutlinedIcon className={classes.sideIcon} />Hospital</h2>
              <Typography><span className={classes.strong}>$ 5,000</span>necessary</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.block} elevation={0}>
          <Grid container className={classes.root}>
            <Grid item xs={8}>
              <h2 className={classes.subtitle}><AccountBalanceWalletOutlinedIcon className={classes.sideIcon} />Payment</h2>
              <Typography><span className={classes.strong}>100%</span>need to pay</Typography>
            </Grid>
            <Grid item xs={4} container justify="center">
            <img className={classes.image} src="/images/h2.jpg" width="100%" height="100%" alt="Payment" />
            </Grid>
          </Grid>
        </Paper>
        <h2 className={classes.title}><PetsIcon className={classes.ttlIcon} />Our product</h2>
        <Paper className={classes.block} elevation={0}>
          <Grid container className={classes.topAdjust2}>
            <Chip className={classes.topAdjust3} icon={<AttachMoneyIcon />} label="From $7/per month " color="secondary" />
            <img className={classes.image} src="/images/h3.jpg" width="100%" height="100%" alt="Product" />
          </Grid>
          <Grid container className={classes.root}>
            <Grid item xs={4} container justify="center" className={classes.product}>
              <img className={classes.image} src="/images/h4.jpg" width="100%" height="100%" alt="Plan" />
            </Grid>
            <Grid item xs={8}>
              <h3 className={classes.subtitle}>Pet insurance</h3>
              <Typography className={classes.txt}>Sample incroduction sample incroduction sample incroduction sample incroduction</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.points}>
            <Chip className={classes.listItem} icon={<CheckCircleIcon />} label="Point 1 point 1 point 1 point 1 point 1 point 1" color="secondary" variant="outlined" />
            <Chip className={classes.listItem} icon={<CheckCircleIcon />} label="Point 2 point 2 point 2 point 2 point 2 point 2" color="secondary" variant="outlined" />
            <Chip className={classes.listItem} icon={<CheckCircleIcon />} label="Point 3 point 3 point 3 point 3 point 3 point 3" color="secondary" variant="outlined" />
            <Chip className={classes.listItem} icon={<CheckCircleIcon />} label="Point 4 point 4 point 4 point 4 point 4 point 4" color="secondary" variant="outlined" />
          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}
export default withStyles(useStyles)(Home);
//export default Home;