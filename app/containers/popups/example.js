/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExamplePopup from '../../components/popups/ExamplePopup';

class Example extends React.Component {
	closeModal = () => {
		const { modal } = this.props;
		modal.close();
	};

	render() {
		const { modal } = this.props;
		return (
      <ExamplePopup
        onOkPress={this.closeModal}
        title={modal.params.title}
      />
		);
	}
}

Example.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			title: PropTypes.string.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(Example);
