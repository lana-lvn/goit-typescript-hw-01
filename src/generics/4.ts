type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): Partial<User> {
  const newUser: Partial<User> = {};
  return { ...newUser, ...initialValues };
}

const createdUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(createdUser);
