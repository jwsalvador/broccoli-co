import React from 'react';
import styled from 'styled-components';

import Invite from 'containers/Invite';
import Header from 'components/Header';
import Footer from 'components/Footer';

import bg from 'assets/bg.jpg';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(#3f51b5eb, #ffffff), url(${bg}) no-repeat center;
    background-size: cover;

    ${({
        theme: {
            media: { phone },
        },
    }) => phone} {
        height: initial;
    }
`;

const HomePage = () => (
    <Wrapper>
        <Header>Broccoli &amp; Co.</Header>
        <Invite />
        <Footer>
            Made with ♥ in Melbourne<br />@2018 Broccoli &amp; Co. All rights reserved.
        </Footer>
    </Wrapper>
);

export default HomePage;
