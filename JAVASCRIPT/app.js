$(document).ready(function(){

  getDate();

  var id = document.body.id

  if (id === "reservations")
    commentDetails();

  if (id === "activities" || id === "accommodations")
    tableHover();

});

// Function in charge to display the current date and time in the footer of each page.
function getDate(){

  var date = new Date();

  document.getElementById("dateTime").innerHTML = "Today is: " + date;
}


// Function responsible for displaying how many charcters are still allow in the comment box of the
// reservations page.
function commentDetails(){

  // Statement that references the text area from the reservations page.
  var commentBox = document.getElementById("comments");

  commentBox.addEventListener("keyup", function (){

    var characters = commentBox.value.split('');

    var col = commentBox.cols;
    var row = commentBox.rows;
    var remaining = 64 - characters.length;

    // Case that informs the user how many charcters are still allow.
    if (remaining >= 0){

      document.getElementById("box-info").innerHTML = remaining + " of " + (col * row)+ " characters left.";
      document.getElementById("box-info").style.fontWeight = "normal";
      document.getElementById("box-info").style.color = "blue";

    }

    // Case that prevents the user from passing the character limit.
    else {

      commentBox.value = commentBox.value.substring(0,64);
      remaining = 0;

      document.getElementById("box-info").innerHTML = remaining + " of " + (col * row)+ " characters left.";
      document.getElementById("box-info").style.fontWeight = "bold";
      document.getElementById("box-info").style.color = "red";
    }

    document.getElementById("box-info").style.marginTop = 0;
    document.getElementById("box-info").style.marginLeft = "10.5em";
  });
}

// Function that uses jquery to give animations to the tables when you hover the rows.
function tableHover(){

  $("table tr").hover(function(){

    $(this).addClass("highlight");

  }, function(){

    $(this).removeClass("highlight");

  });
}
