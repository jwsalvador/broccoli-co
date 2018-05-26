import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(props => <Button {...props} />)`
    && {
        border-radius: 100px;
    }
`;
