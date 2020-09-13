export const getUserInitials = (firstName, lastName) => {
  const userInitials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  return userInitials;
};
