var text = "Bangladesh";
var len = text.length;
document.write("Number of character " + len);

var text = "Bangladesh";
document.write("Number of character " + text.length);

// 
var text = prompt("Enter Your Name :");
document.write("Number of character " + text.length);


var text = "Bangladesh";
document.write(text.charAt(2));
// 

// UpperCase

var text = "Bangladesh";
text = text.toUpperCase();
document.write(text);

// Again
var text = "Bangladesh";
document.write(text.toUpperCase());


// Lowercase

var text = "Bangladesh";
text = text.toLowerCase();
document.write(text);

// Again
var text = "Bangladesh";
document.write(text.toLowerCase());


// Concatenation Function
var text1 = "Bangladesh";
var text2 = "is a Beautiful Country"
document.write(text1.concat(text2));

// Again
var text1 = "Bangladesh";
var text2 = "is a Beautiful Country"
var text = text1.concat(text2)
document.write(text);


// Slice
var text1 = "Bangladesh";
var text = text.slice(0, 2);
document.write(text);

 // Task
    // get first name from user
    //get last name form user
    //add without using library function
    //print full name
    //total length of full name
    //convert full name into uppercase
    //print the 2nd position of full name
   
    var firstName = prompt("Enter your first name : ");
    var lastName = prompt("Enter your last name : ");
    var fullName = firstName + lastName ;
    var len = fullName.length;
    document.write(" Fullname :" + fullName);
    document.write("Number of characters " + len);
    document.write(fullName.charAt(2));
    document.write(fullName.toUpperCase());