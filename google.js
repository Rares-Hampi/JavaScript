// EX1 : Creează un Promise care simulează o cerere de autentificare.
// Returnează succes dacă parola este „1234” și eșec altfel.

function authenticate(password) {
  return new Promise((resolve, reject) => {
    if (password === "1234") {
      resolve("Autentificare reușită!");
    } else {
      reject("Parolă greșită!");
    }
  });
}

authenticate("1234")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
// Output: "Autentificare reușită!"

authenticate("wrong_password")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
// Output: "Parolă greșită!"

// EX2: Simulează trei operații consecutive (e.g., logare, preluare date, afișare date).
function login() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Utilizator autentificat"), 1000);
  });
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Date preluate"), 2000);
  });
}

function displayData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Date afișate: ${data}`), 1000);
  });
}

// Varianta cu Promises
login()
  .then((message) => {
    console.log(message);
    return fetchData();
  })
  .then((data) => {
    console.log(data);
    return displayData(data);
  })
  .then((finalMessage) => console.log(finalMessage))
  .catch((error) => console.error(error));

// Varianta cu async/await
async function processOperations() {
  try {
    const loginMessage = login();
    console.log(loginMessage, "fara await");

    const data = await fetchData();
    console.log(data);

    const displayMessage = await displayData(data);
    console.log(displayMessage);
  } catch (error) {
    console.error(error);
  }
}

processOperations();
