import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const Hero = ({ mobile }) => (
    <Container text>
        <Header as='h1' content='Services' inverted style={{fontSize: mobile ? '2em' : '4em', fontWeight: 'normal', marginBottom: 0, marginTop: mobile ? '1.5em' : '1.5em', background: 'rgba(0, 0, 0, 0.3)', fontFamily: 'Sawarabi Mincho, sans-serif'}}/>
    </Container>
)
  
Hero.propTypes = {
    mobile: PropTypes.bool,
}

export default Hero;