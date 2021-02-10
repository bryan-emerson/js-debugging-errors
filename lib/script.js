//console.log("Test your code here!");


let person = {
  firstName: "Bob",
  lastName: "Seger",
  greet: function() {
    function fullName() {
      return `${person.firstName} ${person.lastName}`;
    }
    console.log(this.firstName)
    alert(fullName());
  }
};

person.greet();