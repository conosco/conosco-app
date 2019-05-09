export const validateUser = user => {
  if (user.email === '') return false;
  if (user.password === '') return false;
  return true;
}