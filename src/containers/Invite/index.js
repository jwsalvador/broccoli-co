import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Dialog from 'components/Dialog';
import Input from 'components/Input';

import { sendInvite, clearState } from 'ducks/invite';
import { required, minLength3, email as emailValidation } from 'utils/validate';

import {
    Wrapper,
    Container,
    Welcome,
    InviteForm,
    SendIcon,
    SendButton,
    WelcomeBody,
    SubHeading,
} from './components';

class Invite extends PureComponent {
    handleSubmit = ({ name, email }) => {
        const { dispatch } = this.props;

        return dispatch(sendInvite({ name, email }));
    };

    handleDialogClose = () => {
        const {
            dispatch,
            reset,
            invite: { status },
        } = this.props;

        if (status === 200) reset();
        dispatch(clearState());
    };

    render() {
        const {
            invite: { status, error, isLoading },
            handleSubmit,
        } = this.props;
        return (
            <Wrapper>
                <Dialog open={status === 200} title="All done!" onClose={this.handleDialogClose}>
                    You will be one of the first to experience Brocoli &amp; Co. when we launch
                </Dialog>
                <Dialog open={status === 400} title="Sorry!" onClose={this.handleDialogClose}>
                    {error}
                </Dialog>
                <Container>
                    <Welcome>
                        <WelcomeBody>
                            <Typography variant="display1" gutterBottom color="inherit">
                                A better way to enjoy every day.
                            </Typography>
                            <SubHeading variant="subheading" color="inherit">
                                Be the first to know when we launch.
                            </SubHeading>
                        </WelcomeBody>
                    </Welcome>
                    <InviteForm onSubmit={handleSubmit(this.handleSubmit)}>
                        <Typography variant="headline" gutterBottom>
                            Request an invite
                        </Typography>
                        <Field
                            component={Input}
                            name="name"
                            label="Full name"
                            validate={[required, minLength3]}
                        />
                        <Field
                            component={Input}
                            name="email"
                            label="Email"
                            validate={[required, emailValidation]}
                            type="email"
                        />
                        <Field
                            component={Input}
                            name="confirmEmail"
                            label="Confirm email"
                            validate={[required, emailValidation]}
                            type="email"
                        />

                        <SendButton
                            type="submit"
                            variant="raised"
                            color="primary"
                            {...isLoading && { disabled: true }}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                            <SendIcon>send</SendIcon>
                        </SendButton>
                    </InviteForm>
                </Container>
            </Wrapper>
        );
    }
}

Invite.propTypes = {
    dispatch: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    invite: PropTypes.shape({
        status: PropTypes.number,
        error: PropTypes.string,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

const validate = ({ email, confirmEmail }) => {
    const error = {};

    if (email !== confirmEmail) {
        error.confirmEmail = 'Emails do not match!';
    }

    return error;
};

const mapStateToProps = ({ invite }) => ({
    invite,
});

export default connect(mapStateToProps)(reduxForm({ form: 'inviteForm', validate })(Invite));
