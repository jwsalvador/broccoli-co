import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import MaterialDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class Dialog extends PureComponent {
    state = {
        open: false,
    };

    componentWillReceiveProps({ open: nextOpen }) {
        if (nextOpen !== this.open) this.setState({ open: nextOpen });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        const { onClose } = this.props;
        this.setState({ open: false });
        onClose();
    };

    render() {
        const { children, title } = this.props;
        return (
            <div>
                <MaterialDialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {children}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </MaterialDialog>
            </div>
        );
    }
}

Dialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.string,
    title: PropTypes.string,
};

Dialog.defaultProps = {
    open: false,
    onClose: () => {},
    title: '',
    children: '',
};

export default Dialog;
