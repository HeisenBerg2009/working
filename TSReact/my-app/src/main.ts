// 1. შევქმნათ ფორმის ელემენტი
const form = document.createElement("form");
form.id = "myForm";

// 2. შევქმნათ ტექსტური შეყვანის ველი (Input)
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "username";
nameInput.placeholder = "შეიყვანეთ სახელი";
nameInput.required = true;

// 3. შევქმნათ გაგზავნის ღილაკი (Button)
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "გაგზავნა";

// 4. ჩავსვათ ინპუტი და ღილაკი ფორმის შიგნით
form.appendChild(nameInput);
form.appendChild(submitButton);

// 5. დავამატოთ ფორმის გაგზავნის (submit) ივენთი
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // გვერდის გადატვირთვის თავიდან ასაცილებლად

  console.log("ფორმა გაიგზავნა!");
  console.log("მომხმარებლის სახელი:", nameInput.value);
});

// 6. ბოლოს, მიღებული ფორმა ჩავსვათ HTML დოკუმენტის body-ში (ან სასურველ კონტეინერში)
document.body.appendChild(form);
