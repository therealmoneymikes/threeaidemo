const products = [
  {
    id: 1,
    url: require("../assets/images/products/cappuccino.jpg"),
    name: "Cappuccino",
    category: "Hot Drinks",
    price: 4.5,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 2,
    url: require("../assets/images/products/mocha.jpg"),
    name: "Mocha",
    category: "Hot Drinks",
    price: 4.25,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 3,
    url: require("../assets/images/products/latte.jpg"),
    name: "Latte",
    category: "Hot Drinks",
    price: 4.75,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 4,
    url: require("../assets/images/products/hotchocolate.jpg"),
    name: "Hot Chocolate",
    category: "Hot Drinks",
    price: 5.0,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 5,
    url: require("../assets/images/products/choccroissant.jpg"),
    name: "Chocolate Croissant",
    category: "Bakery",
    price: 3.75,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 6,
    url: require("../assets/images/products/almondcroissant.jpg"),
    name: "Almond Croissant",
    category: "Bakery",
    price: 4.0,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 7,
    url: require("../assets/images/products/croissant.jpg"),
    name: "Croissant",
    category: "Bakery",
    price: 3.25,
    quantity: 0,
    isLiked: false,
  },
  {
    id: 8,
    url: require("../assets/images/products/latte.jpg"),
    name: "Espresso Shot",
    category: "Bakery",
    price: 2.0,
    quantity: 0,
    isLiked: false,
  },
];

const exportSliderImages = [
  {
    body: { image: require("../assets/images/categories/waiter.jpg") },
  },
  { body: { image: require("../assets/images/categories/coffeecup.jpg") } },
  {
    body: { image: require("../assets/images/categories/coffeewithteam.jpg") },
  },
  {
    body: {
      image: require("../assets/images/categories/cookies.jpg"),
    },
  },
  { body: { image: require("../assets/images/categories/coffeecup.jpg") } },
  { body: { image: require("../assets/images/categories/team.png") } },
];

const categories = [
  {
    image: require("../assets/images/categories/coffeewithteam.jpg"),
    name: "All",
  },
  {
    image: require("../assets/images/categories/coffeecup.jpg"),
    name: "Hot Drinks",
  },
  {
    image: require("../assets/images/categories/coffeewithteam.jpg"),
    name: "Cold Drinks",
  },
  {
    image: require("../assets/images/categories/reactnativecolor.png"),
    name: "Bakery",
  },
  {
    image: require("../assets/images/categories/coffeewithteam.jpg"),
    name: "Syrups and Condiments",
  },
];

export { exportSliderImages, products, categories };
