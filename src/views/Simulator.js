import React from "react";
import * as Scroll from 'react-scroll';
/* UI components */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
/* Redux */
import { connect } from 'react-redux'
import { userUpdate } from '../redux'
/* UI icons */
import ReceiptIcon from '@material-ui/icons/Receipt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


class Simulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            variation: 1,
            age: 1,
            show: true,
            selection: this.props.selection,
        }
    }
    typeChange = (event, value) => {
        this.setState({ ...this.state, type: value })
    }
    variationChange = (event, value) => {
        this.setState({ ...this.state, variation: parseInt(event.target.value) })
    }
    ageChange = (event, value) => {
        this.setState({ ...this.state, age: event.target.value })
    }
    update = () => {
        Scroll.scroller.scrollTo('result',{
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
        const user = {
            type: this.state.type,
            variation: this.state.variation,
            age: this.state.age
        }
        //this.props.userUpdate(user)
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => { 
                this.props.userUpdate(user)
                resolve();
            }, 100);
        });
        promise.then(() => {
            const speed = 10
            const tgt = [this.props.result.lite, this.props.result.basic, this.props.result.prefect]
            let num = [0,0,0]
            for (let i = 0; i < 3; i++) {
                setInterval(function(){
                    if(num[i] <= tgt[i]){
                        document.getElementById('plan' + (i+1) ).innerText = num[i].toLocaleString()
                        num[i]++
                    }
                },speed)
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <Grid container className="s_header">
                    <img src="/images/s.jpg" width="100%" height="100%" alt="Estimation" />
                    <h1>Quick Estimation</h1>
                </Grid>
                <Tabs value={this.state.type} onChange={this.typeChange} variant="fullWidth" indicatorColor="secondary" textColor="secondary">
                    {this.props.selection.type.map((item, index) => (<Tab key={index} value={item.value} label={item.name} />))}
                </Tabs>
                { this.state.type === 1 && (
                    <Grid container>
                    <FormControl component="fieldset" className="typeSelect" color="secondary">
                        <FormLabel component="legend">Variation</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={this.state.variation} onChange={this.variationChange}>
                            {this.props.selection.variation.map((item, index) => (<FormControlLabel key={index} value={item.value} control={<Radio />} label={item.name} />))}
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                )}
                <Grid container>
                <FormControl className="ageSelect" color="secondary">
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.age} onChange={this.ageChange}>
                        {this.props.selection.age.map((item, index) => (<MenuItem key={index} value={item}>{item} years old</MenuItem>))}
                    </Select>
                </FormControl>
                </Grid>
                <Grid container justify="center">
                    <Button onClick={this.update} variant="contained" color="secondary" startIcon={<ReceiptIcon />}>Calculate</Button>
                </Grid>
                <div id="result">
                { this.props.result.lite && (
                <Grid container className="result">
                    <Grid item xs={12}>
                        <h2>Recommond</h2>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <h3>Lite plan</h3>
                        <Typography id="plan1">{this.props.result.lite}</Typography>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <h3>Basic plan</h3>
                        <Typography id="plan2">{this.props.result.basic}</Typography>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <h3>Safty plan</h3>
                        <Typography id="plan3">{this.props.result.prefect}</Typography>
                    </Grid>
                    <Grid container justify="center">
                        <a href="/"><Button variant="contained" color="primary" endIcon={<ChevronRightIcon />}>Apply</Button></a>
                    </Grid>
                </Grid>
                )}
                </div>
            </React.Fragment>
        )
    };
}
// export default Simulator
const mapStateToProps = state => ({
    result: state.data.result,
    selection: state.data.selection
})

const mapDispatchToProps = {
    userUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(Simulator);