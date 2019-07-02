export const openModal = (modalId, params) => ({
	type: 'OPEN_MODAL',
	modalId,
	params
});

export const closeModal = modalId => ({
	type: 'CLOSE_MODAL',
	modalId
});