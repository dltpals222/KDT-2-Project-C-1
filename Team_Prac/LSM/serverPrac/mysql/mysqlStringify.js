function usersDataToStringify (userData) {
  return JSON.stringify({
    name : userData.name,
    phone : userData.phone,
    email : userData.email
  },null,2);
};

module.exports = usersDataToStringify;

