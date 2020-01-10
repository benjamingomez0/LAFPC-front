import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRoute } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
          <div>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <ButtonGroup fullWidth aria-label="full width outlined button group">
                        <Button
                            size='large'
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/sustainable/showmore'
                            style={{backgroundColor:'#ADC692', color:'white', fontWeight:'bold', borderColor:'#ADC692'}}
                        >
                            Sustainability
                        </Button>
                        <Button 
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/healthy/showmore' 
                            style={{backgroundColor:'#EF6C57', color:'white', fontWeight:'bold', borderColor:'#EF6C57'}}
                        >
                            Health
                        </Button>
                
                        <Button
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/affordable/showmore' 
                            style={{backgroundColor:'#7ED3B1', color:'white', fontWeight:'bold', borderColor:'#7ED3B1'}}
                        >
                            Affordability
                        </Button>
                        <Button
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/fair/showmore' 
                            style={{backgroundColor:'#FFC108', color:'white', fontWeight:'bold', borderColor:'#FFC108'}}
                        >
                            Fairness
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
          </div>
        )
    }
}


export default Navbar