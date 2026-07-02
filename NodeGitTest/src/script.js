// let college: string = "Gdani";
function createUser(user) {
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
    Age: user.Age,
  };
  //   console.log("User created:", user.name, user.email, user.isActive, user.Age);
}
let getUSer = createUser({
  name: "Luka",
  email: "luka@example.com",
  Age: 17,
});
console.log(getUSer);
export {};
