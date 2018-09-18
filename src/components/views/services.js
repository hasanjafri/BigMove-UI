import React from 'react';
import { Segment, Grid, Header, Image, Icon, Container } from 'semantic-ui-react';
import ResponsiveContainer from '../responsive-container';

import airDeliveryImg from '../../assets/airdelivery.jpg';
import groundDeliveryImg from '../../assets/grounddelivery.jpeg';
import seaDeliveryImg from '../../assets/seadelivery.jpeg';

import '../styles/services.css';

const Services = () => (
    <ResponsiveContainer> 
        <Segment vertical>
            <Grid style={{marginRight: '10%', marginLeft: '10%'}}> 
                <Grid.Column mobile={16} tablet={16} computer={2} style={{ backgroundColor: "#d7e3fc"}} textAlign="center">
                    <Header className="Header" as='h4'>
                        <Icon name='server' />
                        <Header.Content>Services</Header.Content>
                    </Header>
                    <Header className="Header" as='h4'>
                        <Icon name='plane' />
                        <Header.Content>Air Delivery</Header.Content>
                    </Header>
                    <Header className="Header" as='h4'>
                        <Icon name='shipping fast' />
                        <Header.Content>Ground Shipping</Header.Content>
                    </Header>
                    <Header className="Header" as='h4'>
                        <Icon name='ship' />
                        <Header.Content>Sea Delivery</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={14}>
                    <Header as='h3' style={{ fontSize: '2em', fontFamily: 'Helvetica Neue' }}>WHAT WE DO</Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, risus dignissim rhoncus auctor, mi ipsum hendrerit mauris, vel tempor est diam a enim. Proin quis egestas purus, at ullamcorper eros. Morbi vulputate nisl eu lacus sagittis sodales. Fusce auctor, enim sed ullamcorper rhoncus, elit lorem lobortis nulla, non faucibus nisl leo et ligula.                    </p>
                        <Container style={{float: 'left', position: 'relative', width: '30%'}}>
                            <Image fluid className="serviceImages" inline src={airDeliveryImg}/>
                            <Header as="h3" textAlign="center"> Air Delivery </Header>
                            <p style={{ fontSize: '1.22em', padding: '0.5em 0.5em 0.5em 0.5em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et. Suspendisse eu magna quis ligula vidith ranjit ullamcorper consectetur. Proin eget justo et turpis lobortis tincidunt.
                            </p>
                        </Container>
                        <Container style={{float: 'left', position: 'relative', width: '30%'}}>
                            <Image fluid className="serviceImages" inline src={groundDeliveryImg}/>
                            <Header as="h3" textAlign="center"> Ground Shipping </Header>
                            <p style={{ fontSize: '1.22em', padding: '0.5em 0.5em 0.5em 0.5em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et. Suspendisse eu magna quis ligula vidith ranjit ullamcorper consectetur. Proin eget justo et turpis lobortis tincidunt.
                            </p>
                        </Container>
                        <Container style={{float: 'left', position: 'relative', width: '30%'}}>
                            <Image fluid className="serviceImages" inline src={seaDeliveryImg}/>
                            <Header as="h3" textAlign="center"> Sea Delivery </Header>
                            <p style={{ fontSize: '1.22em', padding: '0.5em 0.5em 0.5em 0.5em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et. Suspendisse eu magna quis ligula vidith ranjit ullamcorper consectetur. Proin eget justo et turpis lobortis tincidunt.
                            </p>
                        </Container>
                </Grid.Column>
            </Grid>
        </Segment>
    </ResponsiveContainer>
)

export default Services;