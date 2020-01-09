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
import afford from "./img/affordable.png"
import fair from "./img/Fair.png"
import health from "./img/healthy.png"
import sus from "./img/sustainable.png"
import appleBiz from "./img/apple-biz.jpg"


//style libraries imports
import 'semantic-ui-css/semantic.min.css'
import { Input, Menu, Segment, Icon, Grid } from 'semantic-ui-react'

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
                        text: <div>< Sustainable isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>,
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
                    text: <div>< Sustainable isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>
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
                    text:<div>< Affordable isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>,   
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
                text: <div>< Affordable isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>   
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
                    text: <div>< Fair isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>,   
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
                text: <div>< Fair isLogged={this.props.isLogged} /><Link to ={'/'}><button> Show More </button></Link></div>   
                });  
        }
    }

    render() {
        return (


            <div>
                <header className = "home-cover">
                    <h1 className="homepage-header-text">Food Should Be...</h1>
                    <a href="#cards">
                    <div className="svg-container">
                        <svg className="down-arrow" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="512px" height="512px">
                            <g>
                                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="#ffffff"/>
                            </g>
                        </svg>

                    </div>
                </a>
                </header>
                <section>
                    <div class='cardpagpe'>
                        <div className="Homepagep" id ="cards">
                        <Grid columns={4} >
                                <Grid.Column style={{padding:0 }} >
                                    <button onClick={() => { this.onClickSus();}}  className="oneThree"><Tiles src={sus} alt={"logo"} />
                                        <h3>Sustainable</h3>
                                        <p>See how we ensure and expand the impact for sustainable food practtices.</p>
                                        <Icon name='add' />
                                    </button>
                                </Grid.Column>
                                <Grid.Column style={{padding: 0}}>
                                    <button onClick={() => { this.onClickHealth(); }}><Tiles src={health} alt={"logo"} />
                                        <h3>Healthy</h3>
                                        <p>See how our efforts are improving people's health within our diverse community.</p>
                                        <Icon name='add' />
                                    </button>
                                </Grid.Column>
                                <Grid.Column style={{padding: 0}}>
                                    <button onClick={() => {  this.onClickAfford(); }} className="oneThree"><Tiles src={afford} alt={"logo"} />
                                        <h3>Affordable</h3>
                                        <p>See our success in providing affordable, fresh food to locals. This data compares previous outcomes.</p>
                                        <Icon name='add' />
                                    </button>
                                </Grid.Column>
                                <Grid.Column style={{padding: 0}}>
                                <button onClick={() => { this.onClickFair(); }}><Tiles src={fair} alt={"logo"} />
                                    <h3>Fair</h3>
                                    <p>See how we curate fair prices for the food we help to bring to communities across LA</p>
                                    <Icon name='add' />
                                </button>
                                </Grid.Column>
                            </Grid>
                        </div>
                        <br/>
                        <br/>
                        {this.state.show && <div>{this.state.text}</div>}
                    </div>
                </section>

            </div>


            // <div className='cardpage'>
            //     {/* <div className="cover-div">
            //         <img className ="cover-image" src= {appleBiz}/>
            //         <div className = "cover-text">
            //             Food Should be...
            //             <br/>
            //             <Icon name='chevron down' size='big' className = "cover-chevron" />
            //         </div>
            //     </div> */}
            //     <div className="Homepage">
                    
            //         <button onClick={() => { this.onClickSus();}}><Tiles src={sus} alt={"logo"} />+</button>
            //         <button onClick={() => { this.onClickHealth(); }}><Tiles src={health} alt={"logo"} />+</button>
            //         <button onClick={() => {  this.onClickAfford(); }}><Tiles src={afford} alt={"logo"} />+</button>
            //         <button onClick={() => { this.onClickFair(); }}><Tiles src={fair} alt={"logo"} />+</button>
            //     </div>
            //     {this.state.show && <div>{this.state.text}</div>}
            // </div>
        )
    }
}

export default Homepage;
