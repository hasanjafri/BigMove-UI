import React, { Component } from 'react';
import { Segment, Icon, Grid, Header, List, Input, Button } from 'semantic-ui-react';
import history from './history';

import './styles/footer.css';

class Footer extends Component {
    render() {
        return(
            <Segment style={{position: 'relative', right: '0', bottom: '0', left: '0', padding: '1rem', backgroundColor: '#010915', width: '100%'}} inverted vertical>
                <Grid verticalAlign="middle" >
                    <Grid.Column mobile={16} style={{padding: this.props.mobile ? '2em 5em 2em 5em' : '2em 2em 2em 2em'}} textAlign="right" computer={4}>
                        <List>
                            <List.Item>
                                <List.Icon name='home' />
                                <List.Content as="a" style={{color: 'white'}}>Home</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='info' />
                                <List.Content as="a" style={{color: 'white'}}>About Us</List.Content>
                            </List.Item>
                            <List.Item >
                                <List.Icon name='server' />
                                <List.Content as="a" style={{color: 'white'}} onClick={() => history.push('/services')}>Services</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='newspaper outline' />
                                <List.Content as="a" style={{color: 'white'}}>News</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='phone' />
                                <List.Content as="a" style={{color: 'white'}}>Contact</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column mobile={16} textAlign='left' style={{padding: '2em 2em 2em 2em'}} computer={6}>
                        <Header textAlign="left" style={{color: 'white'}} as='h3'>
                            <Icon style={{paddingBottom: '0.5em'}} name="talk"/>
                            <Header.Content style={{paddingBottom: '0.5em'}}>CONTACT US</Header.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et.</p>
                            <p><b>Email:</b> <a href="mailto:hello@company.com">hello@company.com</a></p>
                            <p><b>Phone:</b> <a href="tel:+375295437649">+375 (29) 543-76-49</a>, <a href="tel:+375295437649">+375 (29) 543-76-49</a></p>
                            <p><b>Mail:</b> <a href="tel:+375295437649">20 Lorem ipsum do sit amet, 6046 Larsinac, Country</a></p>
                        </Header>
                    </Grid.Column>
                    <Grid.Column mobile={16} textAlign='left' style={{padding: '2em 2em 2em 2em'}} computer={6}>
                        <Header textAlign="left" style={{color: 'white'}} as='h3'>
                            <Icon style={{paddingBottom: '0.5em'}} name="newspaper"/>
                            <Header.Content style={{paddingBottom: '0.5em'}}>NEWSLETTER</Header.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices diam lorem, et placerat neque aliquam et.</p>
                            <Input style={{padding: '1em 1em 1em 0em'}} placeholder="Enter E-Mail"/>
                            <br/>
                            <Button style={{padding: '1em 1em 1em 1em'}} primary>SUBMIT</Button>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Footer;