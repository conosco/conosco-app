import React from 'react';
import { View, Modal } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { closeModal } from '../../actions/nav';

import Example from '../popups/example';
import Groups from '../popups/groups';
import ManageGroups from '../popups/manageGroups'
import NewGroup from '../popups/newGroup';
import Habits from '../popups/habits';

const modalComponents = {
	Example,
	Groups,
	ManageGroups,
	NewGroup,
	Habits
};

const modalComponentsIds = Object.keys(modalComponents);

const AppModals = ({ dispatch, modalsStatus, navigation }) => (
	<View style={{ backgroundColor: 'transparent' }}>
		{Object.keys(modalComponents).map((modalId) => {
			const Component = modalComponents[modalId];
			const modalStatus = modalsStatus[modalId];
			const modal = {
				visible: modalStatus.visible,
				params: modalStatus.params,
				close: () => dispatch(closeModal(modalId))
			};
			return (
				<Modal
					key={modalId}
					transparent
					animationType='slide'
					visible={modal.visible}
					onRequestClose={modal.close}
				>
					<Component
						modal={modal}
						navigation={navigation}
					/>
				</Modal>
			);
		})}
	</View>
);

AppModals.propTypes = {
	dispatch: PropTypes.func.isRequired,
	modalsStatus: PropTypes.object,
	navigation: PropTypes.object.isRequired
};

AppModals.defaultProps = {
	modalStatus: null
};

const mapStateToProps = state => ({
	modalsStatus: state.modals
});

export { modalComponentsIds };
export default connect(mapStateToProps)(AppModals);
