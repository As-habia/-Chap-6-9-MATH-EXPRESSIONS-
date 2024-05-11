//task1
var subject1 = "English";
var subject2 = "Urdu";
var subject3 = "Math";

var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));

var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
document.write("<br>")

document.write("<h2>Subject Marks</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("</table>");

document.write("<br>");
document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
document.write("<p>Total Percentage: " + totalPercentage.toFixed(2) + "%</p>");
