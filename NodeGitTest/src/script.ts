// let college: string = "Gdani";

// college = "Gldani College";

// let h: string = "hello";
// let x: number = 5;
// let isInGeorgia: boolean = true;

// let usersArr: string[] = ["user1", "user2", "user3"];

// console.log(college, h, x, isInGeorgia, usersArr);

// function jami(a: number, b: number): number {
//   return a + b;
// }

// function getUser(email: string, username: string): void {
//   for (let i = 0; i < 5; i++) {
//     console.log(email, username);
//   }
// }

// getUser("lukamircxulava23@gmail.com", "userName1");

// let sum = jami(5, 10);

// console.log(getUser("lukamircxulava23@gmail.com", "userName1"));

// let country = {
//   name: "Georgia",
//   capital: "Tbilisi",
//   population: 3.7,
// };

// function getCountry(c: {
//   name: string;
//   capital: string;
//   population?: number;
// }): {};

export {};

// let userName: string = "Luka";
// let userAge: number = 17;
// let isStudent: boolean = true;
// let skills: string[] = ["JavaScript", "TypeScript", "React"];

// console.log(userName, userAge, isStudent, skills);

// function calculateArea(width: number, height: number): number {
//   return width * height;
// }

// let calc = calculateArea(5, 10);
// console.log("Area:", calc);

type User = {
  name: string;
  email: string;
  isActive?: boolean;
  Age: number;
};

function createUser(user: User): User {
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

