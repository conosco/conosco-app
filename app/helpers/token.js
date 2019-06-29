export const authToken = (token) => {
  return {
    headers: { 'Authorization': `Bearer ${token}` },
  };
};