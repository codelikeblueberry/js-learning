if (true) {
    console.log("thisistrue");
}
else if (true) {
    console.log("this is also true");
}
// //////////////////////////////////////////////////
if (false) {
    console.log("this was false hence not printed");
} 
else {
    console.log("this shall print instead");
}

// SWITCH STATEMENT in GAMES movement




move = "Left"
switch (move) {
    case (move==="Left"): // yes equality tumko karne ki zaroorat nahi 
    // woh khud dekhte hai ki switch ka result aur case a result 
    // mil rahe hain ya nahi
        console.log("moved left");
        break;
    case (move==="Right"):
        console.log("moved right");
        break;
    case (move==="Up"):
        console.log("moved Up");
        break;
    case (move==="Down"):
        console.log("moved Down");
        break;
    
    default:
        console.log("Stand still");
        break;
}

/////////////////////////////////////////////////////////////////////

// Good one

const move = "Down"


switch (move) {
    case ("Left"):
        console.log("moved left");
        break;
    case ("Right"):
        console.log("moved right");
        break;
    case ("Up"):
        console.log("moved Up");
        break;
    case ("Down"):
        console.log("moved Down");
        break;
    
    default:
        console.log("Stand still");
        break;
}