use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John Smith",
    email: "js@gmail.com",
    checkedIn: true
  },

  {
    name: "Natalie Jones",
    email: "nj@gmail.com",
    checkedIn: false
  },

  {
    name: "Damien Hirst",
    email: "dh@gmail.com",
    checkedIn: true
  }
])
