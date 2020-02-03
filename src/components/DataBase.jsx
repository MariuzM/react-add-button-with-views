const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const rand = () => Math.floor(Math.random() * 9999) + 1
const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`
console.log()

export const itemProducts = [
  {
    id: 1,
    image: randomImage,
    description: description,
    price: 44.9,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 2,
    image: randomImage,
    description: description,
    price: 4.99,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 3,
    image: randomImage,
    description: description,
    price: 2.99,
    inCart: false,
    count: 0,
    total: 0,
  },
  {
    id: 4,
    image: randomImage,
    description: description,
    price: 2.99,
    inCart: false,
    count: 0,
    total: 0,
  },
]
