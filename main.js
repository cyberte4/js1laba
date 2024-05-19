'use strict'

document.addEventListener("DOMContentLoaded", () => {
  let name = '';
  let age = 0;

  const getNameAndAge = () => {
    name = prompt("Please enter your name:", name || '');
    age = prompt("Please enter your age:", age || '');

    if (!name) {
      alert("Name cannot be empty. Please enter your name.");
      return getNameAndAge();
    }

    age = Number(age);
    if (isNaN(age)) {
      alert("Age must be a number. Please enter your age.");
      return getNameAndAge();
    }

    return { name, age };
  };

  const { name: userName, age: userAge } = getNameAndAge();

  if (userAge < 18) {
    alert("You are not allowed to visit this website.");
  } else if (userAge >= 18 && userAge <= 22) {
    const confirmResult = confirm("Are you sure you want to continue?");
    if (confirmResult) {
      alert(`Welcome, ${userName}`);
    } else {
      alert("You are not allowed to visit this website.");
    }
  } else {
    alert(`Welcome, ${userName}`);
  }
});