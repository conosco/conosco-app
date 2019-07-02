import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HabitsPopup from '../../components/popups/HabitsPopup';

class Habits extends React.Component {
	closeModal = () => {
		const { modal } = this.props;
		modal.close();
	};

	render() {
		const { modal } = this.props;
		return (
      <HabitsPopup
        onOkPress={this.closeModal}
		name={modal.params.name}
		description={modal.params.description}
      />
		);
	}
}

Habits.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(Habits);
