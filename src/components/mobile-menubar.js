import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Sidebar, Menu, Segment, Container, Icon, Item } from 'semantic-ui-react';

import history from './history';
import Hero from './hero';

import Logo from '../assets/logo.png';
import trucks from '../assets/trucks.jpeg';

export default class MobileMenubar extends Component {
    state = {}
  
    handlePusherClick = () => {
      const { sidebarOpened } = this.state
  
      if (sidebarOpened) this.setState({ sidebarOpened: false })
    }
  
    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive {...Responsive.onlyMobile}>
          <Sidebar.Pushable>
            <Sidebar width="thin" as={Menu} direction="right" animation='push' inverted vertical visible={sidebarOpened}>
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a" >About Us</Menu.Item>
              <Menu.Item as="a" onClick={() => history.push('/services')}>Services</Menu.Item>
              <Menu.Item as="a">News</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
              <Segment inverted textAlign='center' style={{ minHeight: 300, padding: '1em 0em', backgroundSize: "100% 100%", backgroundImage: `url(${trucks})`}} vertical>
                <Container>
                  <Menu style={{backgroundColor: '#D7E3FC'}} secondary size='large'>
                    <Item.Image src={Logo} size="small"/>
                    <Menu.Item position="right" onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                  </Menu>
                </Container>
                <Hero mobile />
              </Segment>
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      );
    }
  }
  
MobileMenubar.propTypes = {
    children: PropTypes.node,
}