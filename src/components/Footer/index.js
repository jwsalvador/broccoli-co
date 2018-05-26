import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
    min-height: 70px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    ${({
        theme: {
            media: { phone },
        },
    }) => phone} {
        position: relative;
    }
`;

const Footer = ({ children }) => (
    <Wrapper>
        <Typography variant="caption" align="center" color="inherit">
            {children}
        </Typography>
    </Wrapper>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Footer;
