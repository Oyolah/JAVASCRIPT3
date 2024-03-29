
class Movie {
  constructor(title, director) {
    // add your code here
    this.title = title;
    this.director = director;
  }

  getTitle() {
    // add your code here
    return this.title
  }

  getDirector() {
    // add your code here
    return this.director;
  }

  addStar(star) {
    // add your code here
    this.star = star;
  }

  getStars() {
    // add your code here
  return [this.star];
  }

  addWriter(writer) {
    // add your code here
    this.writer = writer;
  }

  getWriters() {
    // add your code here
    return this.writer;
  }

  addRating(rating) {
    // add your code here
    this.rating = rating;
  }

  getAverageRating() {
    // add your code here
  }

  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    // add your code here
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
  }

  addMovie(movie) {
    // add your code here
    this.movie = movie;
  }

  getName() {
    // add your code here
    return this.name;
  }

  getRole() {
    // add your code here
    return this.role;
  }

  getAge() {
    // add your code here
    return (new Date().getFullYear()) - this.dateOfBirth ;
  }
}

// Pick your favorite movie from http://www.imdb.com/
const Oyolah = new StaffMember("Oyolah", "Student", 2002)
console.log(Oyolah)

const myMovie = new Movie('Greek Heroine', Oyolah);
  myMovie.addStar('Anastacia');
   console.log(myMovie.getTitle() +": " + myMovie.getStars())
const firstActor = new StaffMember("Oyolah", "student", 2002);
myMovie.addStar(firstActor);
  console.log(myMovie)
 console.log(firstActor.getAge())
 // create and add more staff members
 const Nawal = new StaffMember("Nawal", "Mother", 1966)
 const Rabaha = new StaffMember("Rabaha", "sister", 1993)
 const Andrely = new StaffMember("Andrely", "Friend", 1998)
 console.log(Nawal, Rabaha)
 console.log(Andrely.getName())
//   // Make sure that  the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);
document.querySelector("h1").innerHTML=(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`))

const director1 = myMovie.director.getName();
document.querySelector("h2").innerHTML=("Director: " + director1)

const director2 = myMovie.Nawal;
document.querySelector("p").innerHTML=("Actor: " + Andrely.getName())