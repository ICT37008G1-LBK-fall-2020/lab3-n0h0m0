/* L305 დაწერეთ სკრიპტი, რომელიც მომხმარებლის მიერ შეტანილი 
სტუდენტების სიიდან(წინა დავალების ანალოგიურად) 
გამოიტანს სტუდენტების სიას დალაგებულს ანბანის მიხედვით
*/

var numberOfStudents = prompt("რამდენი სტუდენტის შეყვანა გსურთ ?: ");
var students = [];
for(var j=0;j<numberOfStudents;j++){
    students[j] = prompt("შეიყვანეთ სტუდენტის სახელი: ");
}
students.sort();

for(var i=0;i<students.length ; i++){
    alert(studens[0]);
}