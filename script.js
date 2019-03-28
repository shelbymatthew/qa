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
                person = "Oscar M";
                return person;
            case 4:
            case 5:
            case 6:
                person = "Sara B";
                return person;
            case 7:
            case 8:
            case 9:
                person ="Sarah M";
                return person;         
        };
     });

     var apartment = "";
     var name = "";
     var date = "";

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
        console.log(childDate);
        var dateParsed = moment.unix(childDate/1000).format('MMMM Do YYYY, h:mm:ss a');
        $("#assign-table > tbody").prepend("<tr><td>" + childApartment+ "</td><td>" + childName + "</td><td>" + dateParsed
        +"</td></tr>");
    });

});




// var database = firebase.database();
// var apartment = "";
// var name = "";
// var date = "";
// $("#assign").on("click", function () {
//     event.preventDefault();
//     name = person;
//     apartment = $("#apartment-input").val().trim();
    
//     database.ref().push({
//         name: name,
//         apartment: apartment,
//         dateAdded: firebase.database.ServerValue.TIMESTAMP,
        
// });
// });

  // Set the configuration for your app
//   // TODO: Replace with your project's config object
//   var config = {
//     apiKey: "AIzaSyAZL-EEDAvir8NSlhazfVmO4FCz9vHDKuw",
//     authDomain: "asset-qa.firebaseapp.com",
//     databaseURL: "https://asset-qa.firebaseio.com",
//     storageBucket: "asset-qa.appspot.com"
//   };
//   firebase.initializeApp(config);

//   // Get a reference to the database service
//   var database = firebase.database();



  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
//   var config = {
//     apiKey: "AIzaSyAZL-EEDAvir8NSlhazfVmO4FCz9vHDKuw",
//     authDomain: "asset-qa.firebaseapp.com",
//     databaseURL: "https://asset-qa.firebaseio.com",
//     projectId: "asset-qa",
//     storageBucket: "asset-qa.appspot.com",
//     messagingSenderId: "785188994482",
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();
//         var apartment = "";
//         var name = "";
//         var date = "";
//         $("#assign").on("click", function () {
//             event.preventDefault();
//             name = person;
//             apartment = $("#apartment-input").val().trim();
            
//             database.ref().push({
//                 name: name,
//                 apartment: apartment,
//                 dateAdded: firebase.database.ServerValue.TIMESTAMP,
                
//         });
// });
