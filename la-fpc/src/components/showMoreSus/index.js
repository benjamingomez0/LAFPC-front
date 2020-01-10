import React, { Component } from 'react'
import { Card, Icon, Label, Button, Grid, Transition, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MyPopup from '../util/MyPopup';

export default class ShowMoreSus extends Component {
    state = {
       Data:[],
        isLoading: true
    };

    componentDidMount() {
        this.getData()
    };

    getData = async () => {
        try { 
            const data = await fetch(`http://localhost:3030/data/get-data`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const oldData = await data.json()
            const newData = oldData.data.filter(data => data.pillar === 'sustainable')
            this.setState({
                Data: newData
            })
    
        }catch (err) {
            console.log(err)
        }
    };

    render() {
        const { Data } = this.state;
        return (
        <Container>
            <Grid columns={3}>
                <Grid.Row>
                    {
                        <Transition.Group>
                            {
                                Data && Data.map((data) => {
                                    return (
                                        <Grid.Column key={data._id} style={{ marginBottom: 20 }}>
                                            <Card color="violet" fluid>
                                                <Card.Content>
                                                    <Card.Header>{data.indicator}</Card.Header>
                                                    <Card.Description>{data.outcome}</Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <MyPopup content="Information about the Data">
                                                        
                                                        <Button floated='right' as={Link} to={`/sustainable`} color='blue'>
                                                            <Icon name='add' color='white' size='large'/>
                                                        </Button>
                                                    </MyPopup>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })
                            }
                        </Transition.Group>
                    }
                </Grid.Row>
            </Grid>
        </Container>
        )
    }
}

