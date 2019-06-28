import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GroupsPopup from '../../components/popups/GroupsPopup';

class Groups extends React.Component {
	closeModal = () => {
		const { modal } = this.props;
		modal.close();
	};

	render() {
		const { modal } = this.props;
		return (
      <GroupsPopup
        onOkPress={this.closeModal}
		title={modal.params.title}
		funcao={modal.params.funcao}
      />
		);
	}
}

Groups.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			title: PropTypes.string.isRequired,
			funcao: PropTypes.func.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(Groups);
