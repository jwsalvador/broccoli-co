import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
    min-height: 30px;
    padding: 20px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    left: 0;
    color: white;
    transition: background 300ms ease-in;

    ${({ isOnScroll }) =>
        isOnScroll &&
        `
        color: initial;
        background: white;
    `};
`;

class Header extends PureComponent {
    state = {
        isOnScroll: false,
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { pageYOffset } = window;

        if (pageYOffset > 0) {
            this.setState({ isOnScroll: true });
        } else {
            this.setState({ isOnScroll: false });
        }
    };
    render() {
        const { children } = this.props;
        return (
            <Wrapper isOnScroll={this.state.isOnScroll}>
                <Typography variant="title" color="inherit">
                    {children}
                </Typography>
            </Wrapper>
        );
    }
}

Header.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Header;
