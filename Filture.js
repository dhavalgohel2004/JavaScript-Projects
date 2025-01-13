// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((item) => item > 5);

const books = [
  {
    name: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    edition: "1st",
  },
  {
    name: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    edition: "2nd",
  },
  {
    name: "The Great Gatsby",
    genre: "Classic",
    publishYear: 1925,
    edition: "1st",
  },
  {
    name: "Moby-Dick",
    genre: "Adventure",
    publishYear: 1851,
    edition: "Revised",
  },
  {
    name: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
    edition: "1st",
  },
  {
    name: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
    edition: "3rd",
  },
  {
    name: "The Hobbit",
    genre: "Fantasy",
    publishYear: 1937,
    edition: "2nd",
  },
  {
    name: "Harry Potter and the Sorcerer’s Stone",
    genre: "Fantasy",
    publishYear: 1997,
    edition: "1st",
  },
  {
    name: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
    edition: "1st",
  },
  {
    name: "The Alchemist",
    genre: "Fiction",
    publishYear: 1988,
    edition: "4th",
  },
  {
    name: "Brave New World",
    genre: "Science Fiction",
    publishYear: 1932,
    edition: "2nd",
  },
  {
    name: "War and Peace",
    genre: "Historical Fiction",
    publishYear: 1869,
    edition: "3rd",
  },
  {
    name: "The Road",
    genre: "Post-Apocalyptic",
    publishYear: 2006,
    edition: "1st",
  },
  {
    name: "Crime and Punishment",
    genre: "Psychological Fiction",
    publishYear: 1866,
    edition: "Revised",
  },
  {
    name: "Jane Eyre",
    genre: "Gothic",
    publishYear: 1847,
    edition: "1st",
  },
];


// const UserBooks = books.filter((bk) => bk.edition == "Revised")

UserBooks = books.filter((bk) => bk.publishYear > 1900 && bk.edition == "1st")

console.log(UserBooks, UserBooks.length);

// console.log(Array.isArray(newNums));
