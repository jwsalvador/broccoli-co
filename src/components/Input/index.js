import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

const Wrapper = styled(FormControl)`
    && {
        margin: 15px 0;
        position: relative;
    }
`;

const Error = styled(FormHelperText)`
    position: absolute;
    top: 100%;
`;

const Input = ({ input: { ...input }, meta: { touched, error }, ...rest }) => (
    <Wrapper>
        <TextField {...rest} {...input} {...error && touched && { error: true }} />
        {error &&
            touched && (
            <Error error id="name-helper-text">
                {error}
            </Error>
        )}
    </Wrapper>
);

Input.propTypes = {
    input: PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }),
    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
        error: PropTypes.string,
    }),
    label: PropTypes.string.isRequired,
};

Input.defaultProps = {
    input: { name: '', onChange: () => {} },
    meta: { touched: false },
};

export default Input;
