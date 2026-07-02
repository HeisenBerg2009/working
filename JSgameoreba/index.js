// 1. მოვძებნოთ ელემენტები HTML-დან ID-ების მიხედვით
const userForm = document.getElementById("userForm");
const resultPre = document.getElementById("result");

// 2. დავამატოთ "submit" (გაგზავნის) ივენთი ფორმაზე
userForm.addEventListener("submit", function (event) {
  // თავიდან ავიცილოთ გვერდის გადატვირთვა ფორმის გაგზავნისას
  event.preventDefault();

  // 3. წამოვიღოთ თითოეული ველის მნიშვნელობა (value)
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  // 4. შევინახოთ ყველა მონაცემი ერთ ობიექტში
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone || "არ არის მითითებული", // თუ ცარიელია, ჩაიწერება ეს ტექსტი
    age: age ? Number(age) : "არ არის მითითებული",
    gender: gender || "არ არის მითითებული",
  };

  // 5. გამოვიტანოთ მიღებული ობიექტი <pre id="result"> ტეგში ტექსტის სახით
  // JSON.stringify(userData, null, 2) აფორმატებს ობიექტს წასაკითხად (2 სფეისით დაშორება)
  resultPre.textContent = JSON.stringify(userData, null, 2);

  // ბონუსი: სურვილისამებრ, შეგიძლიათ ფორმა გაასუფთაოთ შეყვანის შემდეგ
  // userForm.reset();
});
