const UserValidation = (values) => {
  const errors = {};

  if (!values.userId || values.userId === "") {
    errors.userId = "User Id harus diisi";
  }

  if (!values.id || values.id === "") {
    errors.id = "Id harus diisi";
  }

  if (!values.title || values.title === "") {
    errors.title = "Title harus diisi";
  }

  if (!values.body || values.body === "") {
    errors.body = "Body harus diisi";
  }

  return errors
};

export default UserValidation;
