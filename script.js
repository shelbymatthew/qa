$( "#target" ).click(function() {

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let person;
  let random = getRandomInt(10);

  switch (random) {
    case 0:
        person = "Shelby";
        break;
    case 1:
    case 2:
    case 3:
        person = "Jack";
        break;
    case 4:
    case 5:
    case 6:
        person = "Oscar";
        break;
    case 7:
    case 8:
    case 9:
        person ="Sarah";
        break;
    }
    $(function() {
    $('.namespace').text(`QA for this site is assigned to ${person}!`)
});
});