import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { makeStyles } from '@material-ui/core/styles';
/* UI components */
import IconButton from '@material-ui/core/IconButton';
/* UI icons */
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselData = [
  {
    image:'/images/h1.jpg', 
    title:'Sample title sample title sample title sample title',
    link:'/'
  },
  {
    image:'/images/h2.jpg', 
    title:'Sample title sample title sample title sample title',
    link:'/'
  },
  {
    image:'/images/h3.jpg', 
    title:'Sample title sample title sample title sample title',
    link:'/'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 24
  },
  slide: {
    minHeight: 100,
    color: '#333',
    position: 'relative'
  },
  image: {
    width: '100%'
  },
  carouselttl: {
    position: 'absolute',
    bottom: 16,
    right: 0,
    background: 'rgba(0,0,0,.6)',
    color:'#fff',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    height: 48,
    maxWidth: 240,
    lineHeight: 1.4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  back: {
    position: 'absolute',
    top: '45%',
    left: 8,
    background: 'rgba(0,0,0,.3)',
    color:'#fff',
    padding: 4,
  },
  forward: {
    position: 'absolute',
    top: '45%',
    right: 8,
    background: 'rgba(0,0,0,.3)',
    color:'#fff',
    padding: 4,
  },
}));

export default function Carousel() {
  const [state, setState] = React.useState({
   current: 0,
   max: carouselData.length
  });
  const handleChangeIndex = (item) => {
    setState({ ...state, current: item });
  };
  const handleNext = () => {
    setState({ ...state, current: state.current + 1 });
  };

  const handleBack = () => {
    setState({ ...state, current: state.current - 1 });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews index={state.current} onChangeIndex={handleChangeIndex}>
        {carouselData.map((item,i) => (
          <div className={classes.slide} key={i}>
            <a href={item.link}>
              <img className={classes.image} src={item.image} alt={item.title} />
            </a>
            { (state.current !== 0) && (<IconButton onClick={handleBack} className={classes.back} disabled={state.current === 0}><ArrowBackIosIcon /></IconButton>)}
            { (state.current !== state.max - 1) && (<IconButton onClick={handleNext} className={classes.forward} disabled={state.current === state.max - 1}><ArrowForwardIosIcon /></IconButton>)}
            <p className={classes.carouselttl}>{item.title}</p>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}
