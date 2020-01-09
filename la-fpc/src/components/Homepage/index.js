import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { withRouter, Link } from 'react-router-dom'

//style imports
import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'
import './style.css'

//image imports
import afford from "./img/Afford.png"
import fair from "./img/Fair.png"
import health from "./img/Health.png"
import sus from "./img/Sus.png"
import Food from "./img/Food.png"
import Compost from "./img/Compost.png"
import Plant from "./img/Plant.png"

//style libraries imports
import 'semantic-ui-css/semantic.min.css'
import { Input, Menu, Segment } from 'semantic-ui-react'

//component imports
import SustainableData from '../Sustainable/SustainableData'
import HealthyData from '../Healthy/HealthyData'
import Affordable from '../Affordable';
import Healthy from '../Healthy';
import Fair from '../Fair';
import Sustainable from '../Sustainable';
import ShowMore from '../showMore';


class Homepage extends Component {
    
    state = {
        show: false,
        text: null,
        aff:false,
        health:false,
        sus:false,
        fair:false
        }

    onClickSus = () => {
            if(this.state.show)//if show is true
            {
                if(this.state.sus=== true )
                {
                    this.setState({
                        show : !this.state.show,
                        sus:!this.state.sus,
                        aff:false,
                        health:false,
                        fair:false,
                    }) 
                }
                else
                {
                    this.setState({
                        aff:false,
                        sus:true,
                        fair:false,
                        health: false,
                        text: < Sustainable isLogged={this.props.isLogged} />,
                    });  
                }            
            }
            else
            {
                this.setState({
                    show : !this.state.show,
                    sus:!this.state.sus,
                    aff:false,
                    health:false,
                    fair:false,
                    text: < Sustainable isLogged={this.props.isLogged} /> 
                    });  
            }

           
    }

    onClickHealth = () => {
        if(this.state.show)//if show is true
        {
            if(this.state.health=== true )//and if text ===affortable
            {
                this.setState({
                    show : !this.state.show,
                    health:!this.state.health,
                    aff:false,
                    sus:false,
                    fair:false,
                }) 
            }
            else
            {
                this.setState({
                    aff:false,
                    sus:false,
                    fair:false,
                    health: true,
                    text: <div>< Healthy isLogged = { this.props.isLogged } /><Link to ={'/healthy/showmore'}><button> Show More </button></Link></div>,
            });  
            }            
        }
        else
        {
            this.setState({
                show : !this.state.show,
                health:!this.state.health,
                aff:false,
                sus:false,
                fair:false,
                text: <div>< Healthy isLogged = { this.props.isLogged } /><Link to ={'/healthy/showmore'}><button> Show More </button></Link></div>
                });  
        }

    }

    onClickAfford = () => {
        if(this.state.show)//if show is true
        {
            if(this.state.aff=== true )//and if text ===affortable
            {
                this.setState({
                    show : !this.state.show,
                    aff:!this.state.aff,
                    health:false,
                    sus:false,
                    fair:false,
                }) 
            }
            else
            {
                this.setState({
                    text: < Affordable isLogged={this.props.isLogged} />,   
                    aff:!this.state.aff,
                    health:false,
                    sus:false,
                    fair:false,

            });  
            }            
        }
        else
        {
            this.setState({
                show : !this.state.show,
                aff:!this.state.aff,
                health:false,
                sus:false,
                fair:false,
                text: < Affordable isLogged={this.props.isLogged} />   
                });  
        }
    }

    onClickFair = () => {
        if(this.state.show)//if show is true
        {
            if(this.state.fair=== true )//and if text ===fairortable
            {
                this.setState({
                    show : !this.state.show,
                    fair:!this.state.fair,
                    health:false,
                    sus:false,
                    aff:false,
                }) 
            }
            else
            {
                this.setState({
                    text: < Fair isLogged={this.props.isLogged} />,   
                    fair:!this.state.fair,
                    health:false,
                    sus:false,
                    aff:false,

            });  
            }            
        }
        else
        {
            this.setState({
                show : !this.state.show,
                fair:!this.state.aff,
                health:false,
                sus:false,
                aff:false,
                text: < Fair isLogged={this.props.isLogged} />   
                });  
        }
    }

    render() {
        return (

            <div class='cardpage'>
                <div className="Homepage">
                    <button onClick={() => { this.onClickSus();}}><Tiles src={sus} alt={"logo"} />+</button>
                    <button onClick={() => { this.onClickHealth(); }}><Tiles src={health} alt={"logo"} />+</button>
                    <button onClick={() => {  this.onClickAfford(); }}><Tiles src={afford} alt={"logo"} />+</button>
                    <button onClick={() => { this.onClickFair(); }}><Tiles src={fair} alt={"logo"} />+</button>
                </div>
                {this.state.show && <div>{this.state.text}</div>}
            </div>
        )
    }
}

export default Homepage;
