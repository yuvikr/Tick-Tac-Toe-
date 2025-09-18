$(".block").click(function () {
  var theClassClicked = this.id;

  if ($("h2").text() == "Player One Turn") {
    var playerLetter = "X";
    $("h2").text("Player Two Turn");
    $("#" + theClassClicked).text(playerLetter);
    $("#" + theClassClicked).addClass("noMoreClicks");
    checkIfWin();
  } else {
    var playerLetter = "O";
    $("h2").text("Player One Turn");
    $("#" + theClassClicked).text(playerLetter);
    $("#" + theClassClicked).addClass("noMoreClicks");
    checkIfWin();
  }
});

function checkIfWin() {
  // for X
  if (
    $("#block1").text() == "X" &&
    $("#block2").text() == "X" &&
    $("#block3").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block1").text() == "X" &&
    $("#block4").text() == "X" &&
    $("#block7").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block1").text() == "X" &&
    $("#block5").text() == "X" &&
    $("#block9").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  // col2
  if (
    $("#block2").text() == "X" &&
    $("#block5").text() == "X" &&
    $("#block8").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   col 3
  if (
    $("#block3").text() == "X" &&
    $("#block6").text() == "X" &&
    $("#block9").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block3").text() == "X" &&
    $("#block5").text() == "X" &&
    $("#block7").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   row2
  if (
    $("#block4").text() == "X" &&
    $("#block5").text() == "X" &&
    $("#block6").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   row3
  if (
    $("#block7").text() == "X" &&
    $("#block8").text() == "X" &&
    $("#block9").text() == "X"
  ) {
    $("h2").text("Player One Won!");
    $(".block").addClass("noMoreClicks");
  }
  // for O

  if (
    $("#block1").text() == "O" &&
    $("#block2").text() == "O" &&
    $("#block3").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block1").text() == "O" &&
    $("#block4").text() == "O" &&
    $("#block7").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block1").text() == "O" &&
    $("#block5").text() == "O" &&
    $("#block9").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  // col2
  if (
    $("#block2").text() == "O" &&
    $("#block5").text() == "O" &&
    $("#block8").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   col 3
  if (
    $("#block3").text() == "O" &&
    $("#block6").text() == "O" &&
    $("#block9").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  if (
    $("#block3").text() == "O" &&
    $("#block5").text() == "O" &&
    $("#block7").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   row2
  if (
    $("#block4").text() == "O" &&
    $("#block5").text() == "O" &&
    $("#block6").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
  //   row3
  if (
    $("#block7").text() == "O" &&
    $("#block8").text() == "O" &&
    $("#block9").text() == "O"
  ) {
    $("h2").text("Player Two Won!");
    $(".block").addClass("noMoreClicks");
  }
}
