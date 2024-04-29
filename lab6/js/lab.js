// Author: Mariana Acosta
// Date: Apeil 28th, 2024

// Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Purple Jumprope"]

// create an object for mainride
myMainride = {
  make: "Ford",
  model: "Taurus",
  color: "rusty",
  year: 1995,
  age: function () {
      return 2022 - this.year;
  }
}

// output
document.writeIN("Kinds of transportation I use: ", myTransport, "br>");
document.writeIN("My Main Ride: <pre>",
  JSON.stringify (myMainride, null, '/t'), "</pre")