import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewGroupPopup from '../../components/popups/NewGroupPopup/newGroup';

class NewGroup extends React.Component {
	closeModal = () => {
		const { modal } = this.props;
		modal.close();
	};

	render() {
        const { modal } = this.props;
		return (
      <NewGroupPopup
        onOkPress={this.closeModal}
        title={modal.params.title}
      />
		);
	}
}

NewGroup.propTypes = {
	modal: PropTypes.shape({
		params: PropTypes.shape({
			title: PropTypes.string.isRequired
		}).isRequired,
		close: PropTypes.func.isRequired
	}).isRequired
};

export default connect()(NewGroup);
