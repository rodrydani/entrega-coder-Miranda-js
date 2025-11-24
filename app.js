console.log("welcome to Dream & Drive")


const COMPANY_NAME = "Dream & Drive";
let userName = "";
const cars = ["Fiat Mobi", "Jeep Renegade", "Peugeot 208", "Toyota Hilux"];
const prices = [14000, 32000, 18000, 45000];
let cart = [];

function welcome() {
  userName = prompt("Welcome to " + COMPANY_NAME + ". What's your name?");
  if (!userName) userName = "Guest";
  alert("Hello " + userName + "!");
}

function showMenu() {
  return prompt(
    "Choose an option:\n" +
    "1 - View cars\n" +
    "2 - Add car to cart\n" +
    "3 - View cart\n" +
    "4 - Exit"
  );
}

function viewCars() {
  let list = "Available cars:\n";
  for (let i = 0; i < cars.length; i++) {
    list += (i + 1) + ") " + cars[i] + " - $" + prices[i] + "\n";
  }
  alert(list);
}

function addCar() {
  const id = prompt("Enter car number to add (1 to " + cars.length + ")");
  const index = parseInt(id) - 1;

  if (index >= 0 && index < cars.length) {
    cart.push(cars[index]);
    alert(cars[index] + " added to cart.");
  } else {
    alert("Invalid number.");
  }
}

function viewCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("Your cart:\n" + cart.join("\n"));
  }
}

function start() {
  welcome();

  let exit = false;
  while (!exit) {
    const option = showMenu();
    if (option === null) break;

    switch (option) {
      case "1":
        viewCars();
        break;
      case "2":
        addCar();
        break;
      case "3":
        viewCart();
        break;
      case "4":
        exit = true;
        break;
      default:
        alert("Invalid option.");
    }
  }

  alert("Thanks for visiting " + COMPANY_NAME + "!");
}

start();




