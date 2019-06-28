import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ManageGroupsPopup from '../../components/popups/ManageGroupsPopup';

class ManageGroups extends React.Component {
	closeModal = () => {
		const { modal } = this.props;
		modal.close();
	};

	render() {
		const { modal } = this.props;
		return (
      <ManageGroupsPopup
        onOkPress={this.closeModal}
        title={modal.params.title}
      />
		);
	}
}

ManageGroups.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			title: PropTypes.string.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(ManageGroups);
