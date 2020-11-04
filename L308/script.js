/*L308 დაწერეთ სკრიპტი რომელიც
 მომხმარებლის მიერ შეტანილ სტუდენტების
  სიას გამოიტანს შებრუნებული თანმიმდევრობით
  */


 let much = prompt("რამდენი სახელის შეტანა გსურს?");
 let base =[];
 for(let i=0;i<much;i++){
     let input = prompt("შეიყვანეთ სახელი: ");
     base[i] = input;
 }
 base.reverse();
 
 alert(base);