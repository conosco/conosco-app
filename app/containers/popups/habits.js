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
		title={modal.params.title}
		funcao={modal.params.funcao}
      />
		);
	}
}

Habits.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			title: PropTypes.string.isRequired,
			funcao: PropTypes.func.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(Habits);
