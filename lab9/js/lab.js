/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Mariana Acosta
   Date: 2024
*/


//function for toggling results

function toggleResults () {
  
    // toggle the results on and off
    $("#results").toggle();
    
    $("h1").toggleClass("green");
    
  }
  
  
  $("#pressButton").click(toggleResults);