import React from 'react';
import { Segment, Grid, Header, Image, Icon } from 'semantic-ui-react';
import ResponsiveContainer from '../responsive-container';

import airDeliveryImg from '../../assets/airdelivery.jpeg';

import '../styles/services.css';

const Services = () => (
    <ResponsiveContainer> 
        <Segment vertical>
            <Grid stackable style={{marginRight: '10%', marginLeft: '10%'}}> 
                <Grid.Column width={3} style={{ backgroundColor: "#d7e3fc"}} textAlign="center">
                    <Header className="Header" as='h3'>
                        <Icon name='server' />
                        <Header.Content>Services</Header.Content>
                    </Header>
                    <Header className="Header" as='h3'>
                        <Icon name='plane' />
                        <Header.Content>Air Delivery</Header.Content>
                    </Header>
                    <Header className="Header" as='h3'>
                        <Icon name='shipping fast' />
                        <Header.Content>Ground Shipping</Header.Content>
                    </Header>
                    <Header className="Header" as='h3'>
                        <Icon name='ship' />
                        <Header.Content>Sea Delivery</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Helvetica Neue' }}>WHAT WE DO</Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et. Suspendisse eu magna quis ligula ullamcorper consectetur. Proin eget justo et turpis lobortis tincidunt. Duis eu orci vitae eros
                    </p>
                    <Grid.Column width={13}>
                        <Image size="medium" centered bordered inline src={airDeliveryImg} label="Air Delivery"/>
                        <Image size="medium" centered bordered inline src={airDeliveryImg}/>
                        <Image size="medium" centered bordered inline src={airDeliveryImg}/>
                    </Grid.Column>
                </Grid.Column>
            </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default Services;