var readline = require('readline-sync');

function rentRoom() {
    var y = "YES";
    var n = "NO";
    var emptyRooms = {
        room1: "Bubble Room",
        room2: "The Diamond Room",
        room3: "The Copa Cabana",
        room4: "The Revolution "
    }
    var occupiedRooms = [];

    var yesOrNo = readline.question("Welcome to the Fantasuites Hotel and Spa Would you like to rent a room? Yes/no:").toUpperCase();
    // "Here is a list of our available rooms."
    if (yesOrNo == y) {

        var vacantRooms = Object.keys(emptyRooms);
        for (var listedRoom of vacantRooms) {
            console.log(listedRoom);
        }
        var roomChoice = readline.question("Here is a list of our available rooms. Which room suits your fancy? 1,2,3,or 4?");

        if (roomChoice == 1) {
            occupiedRooms.push(vacantRooms[0]);
            vacantRooms.splice(0,1);
            console.log("You've chosen the Bubble Room, this room is equipped with a jacuzzi and a complimentary bottle of bubbly.");
        }
        else if (roomChoice == 2) {
            occupiedRooms.push(vacantRooms[1]);
             vacantRooms.splice(1,1);
            console.log("I see you've chosen the Diamond Room. A multitude of amenities including but not limited to,a crystal shower, Cristal on ice and 14 kt gold wrapped strawberries await. Well suited for such a multifaceted person as yourself.");
        }
        else if (roomChoice == 3) {
            occupiedRooms.push(vacantRooms[2]);
            vacantRooms.splice(2,1);
            console.log(" Showgirls and palm trees await you in the Copa Cabana Room. Sip Margaritas in the infity pool while getting a complimentary Barry Manilow performance nightly.");
        }
        else if (roomChoice == 4) {
            occupiedRooms.push(vacantRooms[3]);
            vacantRooms.splice(3,1);
            console.log(" You say you want a revolution? You can have all the revolutions you want in our king size revolving bed in the Revolution Room. ");
        }
    }


    else if (yesOrNo == n) {
        console.log(" Thank you for stopping by.");
    }

}

rentRoom();

