const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const bookSeed = [
  {
    title: "Dining In",
    author: "Alison Roman",
    description: "Vegetable-forward but with an affinity for a mean steak and a deep regard for fresh fish, Dining In is all about building flavor and saving time. Alison’s ingenuity seduces seasoned cooks, while her warm, edgy writing makes these recipes practical and approachable enough for the novice. With 125 recipes for effortlessly chic dishes that are full of quick-trick techniques (think slathering roast chicken in anchovy butter, roasting citrus to ramp up the flavor, and keeping boiled potatoes in the fridge for instant crispy smashed potatoes), she proves that dining in brings you just as much joy as eating out.",
   
  },
  {
    title: "Nothing Fancy: Unfussy Food for Having People Over",
    author: "Alison Roman",
    description: "Alison Roman will give you the food your people want (think DIY martini bar, platters of tomatoes, pots of coconut-braised chicken and chickpeas, pans of lemony turmeric tea cake) plus the tips, sass, and confidence to pull it all off. With Nothing Fancy, any night of the week is worth celebrating.",
    
  },
  {
    title: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
    author: "Samin Nosrat",
    description: "In the tradition of The Joy of Cooking and How to Cook Everything comes Salt, Fat, Acid, Heat, an ambitious new approach to cooking by a major new culinary voice. Chef and writer Samin Nosrat has taught everyone from professional chefs to middle school kids to author Michael Pollan to cook using her revolutionary, yet simple, philosophy. Master the use of just four elements—Salt, which enhances flavor; Fat, which delivers flavor and generates texture; Acid, which balances flavor; and Heat, which ultimately determines the texture of food—and anything you cook will be delicious",
    
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });