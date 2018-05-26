import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

import Button from 'components/Button';

import bg from 'assets/bg.jpg';

export const Wrapper = styled.div`
    display: flex;

    height: 100%;
`;

export const Container = styled(Paper)`
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
`;

export const Welcome = styled.div`
    padding: 80px;
    flex: 1;
    background: linear-gradient(#3f51b5, #3f51b5d4), url(${bg}) no-repeat center;
    background-size: cover;
    position: relative;
`;

export const SubHeading = styled.div`
    font-style: italic;
`;

export const WelcomeBody = styled.div`
    z-index: 1;
    color: white;
    text-align: center;
`;

export const InviteForm = styled.form`
    padding: 40px;
    flex: 1.5;
    display: flex;
    flex-direction: column;
`;

export const SendIcon = styled(Icon)`
    margin-left: 10px;
`;

export const SendButton = styled(Button)`
    && {
        margin-top: 20px;
    }
`;
