let person;
$(function() {
    $('#assign').click(function() {
        function randomizer(max) {
            return Math.floor(Math.random() * Math.floor(max));
        };
        let random = randomizer(10);

        switch (random) {
            case 0:
                person = "Shelby";
                return person;
            case 1:
            case 2:
            case 3:
                person = "Sarah B.";
                return person;
            case 4:
            case 5:
            case 6:
                person = "Oscar";
                return person;
            case 7:
            case 8:
            case 9:
                person ="Sarah M.";
                return person;         
        };
     });

     var apartment = "";
     var name = "";
     var date = "";
     var complete = ""

     $("#assign").on("click", function () {
         event.preventDefault();
         name = person;
         console.log(person)
         apartment = $("#apartment-input").val().trim();
         
         database.ref().push({
            name: name,
            apartment: apartment,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
         });
     });

     database.ref().on("child_added", function(childSnapshot, prevChildKey){
        var childName = childSnapshot.val().name;
        var childApartment = childSnapshot.val().apartment;
        var childDate = childSnapshot.val().dateAdded;
        var key = childSnapshot.key
        console.log(`${key} is the key for ${childApartment}`);
        var dateParsed = moment.unix(childDate/1000).format('MMMM Do YYYY, h:mm:ss a');
        $("#assign-table > tbody").prepend("<tr><td>" + childApartment+ "</td><td>" + childName + "</td><td>" + dateParsed + "</td></tr>");
    });

});
