const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    itemName: "Income",
    amount: 1,
    from: "Google",
    date: "2023-08-12",
    category: "Income",
  },
  {
    id: uuidv4(),
    itemName: "Dog Food",
    amount: -50,
    from: "grocery",
    date: "2023-08-12",
    category: "Pets",
  },
  {
    id: uuidv4(),
    itemName: "Fish Food",
    amount: -5,
    from: "grocery",
    date: "2023-08-12",
    category: "Pets",
  },
];
