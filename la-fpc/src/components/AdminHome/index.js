import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'

import afford from "./img/affordable.png"
import fair from "./img/fair.png"
import health from "./img/healthy.png"
import sus from "./img/sustainable.png"
import 'semantic-ui-css/semantic.min.css'
import { Input, Menu, Segment, Icon, Grid } from 'semantic-ui-react'


class AdminHome extends Component{
  render() {
    return (
            <HomeDiv>
                <HeaderDiv>
                    <h1>Admin Home Page</h1>
                </HeaderDiv>
                <TileDiv>

                <div class='cardpagpe'>
                        <div className="Homepagep" id ="cards">
                        <Grid columns={4} >
                                <Grid.Column style={{padding:10 }} >
                                    <Link to={'/sustainable'}>
                                        <button onClick={() => { console.log('hit');}}  className="oneThree"><Tiles src={sus} alt={"logo"} />
                                            <h3>Sustainable</h3>
                                        
                                            <Icon name='add' />
                                        </button>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column style={{padding: 10}}>
                                    <Link to={'/healthy'}>
                                        <button onClick={() => { console.log('hit'); }}><Tiles src={health} alt={"logo"} />
                                            <h3>Healthy</h3>
                                        
                                            <Icon name='add' />
                                        </button>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column style={{padding: 10}}>
                                   <Link to={'/affordable'}>
                                        <button onClick={() => {  console.log('hit'); }} className="oneThree"><Tiles src={afford} alt={"logo"} />
                                            <h3>Affordable</h3>
                                            
                                            <Icon name='add' />
                                        </button>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column style={{padding: 10}}>
                                <Link to={'/fair'}>
                                    <button onClick={() => { console.log('hit'); }}><Tiles src={fair} alt={"logo"} />
                                        <h3>Fair</h3>
                                        <Icon name='add' />
                                    </button>
                                </Link>
                                </Grid.Column>
                            </Grid>
                        </div>
                        <br/>
                        <br/>
                        
                    </div>

                </TileDiv>
                <Button
                style={{margin:'20px', color:'grey', fontWeight:'bold', border: '1px solid black'}}
                component={ Link } 
                to = {'/addAdmin'}
                >   
                Add User
                </Button>
                <Button
                style={{margin:'20px', color:'grey', fontWeight:'bold', border: '1px solid black'}}
                component={ Link } 
                >
                Edit User
                </Button>

            </HomeDiv>
    )
}
}

export default AdminHome;