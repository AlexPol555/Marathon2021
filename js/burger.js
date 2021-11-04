function myFunction() {
   var x = document.getElementById("myBurger");
   if (x.className === " burger") {
      x.className += " responsive";
   } else {
      x.className = " burger";
   }
}