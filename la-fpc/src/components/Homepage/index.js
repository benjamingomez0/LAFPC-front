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
            {/* //     <div className= "sample">
            //     <HealthyData isLogged = {this.props.isLogged} />
            //     </div> */}

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

// class Box extends Component{
//     render(){
//         return(
//             <div class='box'>
//                 <h1>hello</h1>  
//             </div>
//         )
//     }
// }

export default Homepage;



// export default class MenuExampleTabularOnTop extends Component {
//     state = { activeItem: 'bio' }

//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//     render() {
//         const { activeItem } = this.state

//         return (
//             <div>
//                 <Menu attached='top' tabular>
//                     <Menu.Item
//                         name='sustainability'
//                         active={activeItem === 'sustainability'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         name='health'
//                         active={activeItem === 'health'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         name='affordability'
//                         active={activeItem === 'affordability'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Item
//                         name='fairness'
//                         active={activeItem === 'fairness'}
//                         onClick={this.handleItemClick}
//                     />
//                     <Menu.Menu position='right'>
//                         <Menu.Item>
//                             <Input
//                                 transparent
//                                 icon={{ name: 'search', link: true }}
//                                 placeholder='Search users...'
//                             />
//                         </Menu.Item>
//                     </Menu.Menu>
//                 </Menu>

//                 <Segment attached='bottom'>
//                     <h1>
//                         Hello
//                     </h1> />
//                 </Segment>
//             </div>
//         )
//     }
// }

// class Home extends Component {
//     render() {
//         return (
//                 <HomeDiv>
//                     <HeaderDiv>
//                         <h1>Food System Dashboard</h1>
//                         <p>LAFPC takes great pride at the positive changes we affect in our communities. See below for our in-depth statistics and data on how much our programs improve the loves of those around us.</p>
//                     </HeaderDiv>



//                     <TileDiv>
//                         <a href='/sustainable'><Tiles src={sus} alt={"logo"} /></a>
//                         <a href='/healthy'><Tiles src={health} alt={"logo"} /></a>
//                         <a href='/affordable'><Tiles src={afford} alt={"logo"} /></a>
//                         <a href='/fair'><Tiles src={fair} alt={"logo"} /></a>
//                     </TileDiv>
//                     <DescripDiv>
//                         <Descrip>
//                             <h1>What</h1>
//                             <Text>The Los Angeles Food System Dashboard is a tool for the Good Food Movement to better understand the local and regional food supply chain, from farm to compost bin, and its impacts on the health and quality of life of all Angelenos.</Text>
//                         </Descrip>
//                         <Descrip>
//                             <h1>Why</h1>
//                             <Text>The Dashboard strives to assist all Los Angeles food system stakeholders—residents, community organizers, government officials and staff, practitioners, nonprofits, and businesses—with metrics to
//                             evaluate the efficacy of current initiatives and to advance transformative policy and systems changes. Indicators included in this Dashboard are organized by our Good Food values.</Text>
//                         </Descrip>
//                         <Descrip>
//                             <h1>How</h1>
//                             <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
//                         </Descrip>
//                     </DescripDiv>
//                         <h1>Case Studies</h1>
//                     <UserImgDiv>
//                         <UserImg src={Food}/>
//                         <UserImg src={Compost}/>
//                         <UserImg src={Plant}/>
//                     </UserImgDiv>
//                 </HomeDiv>
//         )
//     }
// }

// export default Home