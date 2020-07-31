import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShareButton extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render() {

        const { buttonText } = this.props
        return (
            <button
                onClick={() => this.submitEvent()}
                data-test='buttonComponent'>

            </button>

        )
    }
}



ShareButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}
export default ShareButton;