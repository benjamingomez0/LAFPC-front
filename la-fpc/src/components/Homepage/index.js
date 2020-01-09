import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'

import { withRouter, Link } from 'react-router-dom'

import { Input, Menu, Segment } from 'semantic-ui-react'


import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'

import afford from "./img/Afford.png"
import fair from "./img/Fair.png"
import health from "./img/Health.png"
import sus from "./img/Sus.png"

import Food from "./img/Food.png"
import Compost from "./img/Compost.png"
import Plant from "./img/Plant.png"

import 'semantic-ui-css/semantic.min.css'

import './style.css'

import SustainableData from '../Sustainable/SustainableData'
import HealthyData from '../Healthy/HealthyData'
import AffordableData from '../Affordable/AffordableData'
import FairData from '../Fair/FairData'
class Homepage extends Component {

    constructor (props){
        super(props)
        this.state = {show : false};
        this. toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const {show} = this.state;
        this.setState({show : !show})
    }

    onClickSus = () => {
        this.setState({
            text: < SustainableData isLogged={this.props.isLogged} />
        });
    }

    onClickHealth = () => {
        this.setState({
            text: < HealthyData isLogged = { this.props.isLogged } />
        });
    }

    onClickAfford = () => {
        this.setState({
            text: < AffordableData isLogged={this.props.isLogged} />
        });
    }

    onClickFair = () => {
        this.setState({
            text: < FairData isLogged={this.props.isLogged} />
        });
    }

    render() {
        return (

            <div class='cardpage'>
                <div className="Homepage">
                    <button onClick={() => {this.toggleDiv(); this.onClickSus();}}><Tiles src={sus} alt={"logo"} />+</button>
                    <button onClick={() => { this.toggleDiv(); this.onClickHealth(); }}><Tiles src={health} alt={"logo"} />+</button>
                    <button onClick={() => { this.toggleDiv(); this.onClickAfford(); }}><Tiles src={afford} alt={"logo"} />+</button>
                    <button onClick={() => { this.toggleDiv(); this.onClickFair(); }}><Tiles src={fair} alt={"logo"} />+</button>
                </div>
                {this.state.show && <h1>{this.state.text}</h1>}
            </div>
        )
    }
}

export default Homepage;
