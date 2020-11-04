/*L307 დაწერეთ სკრიპტი რომელიც სახელების მოცემული 2 სიიდან 
(შეაქვს მომხმარებელს) შეადგენს გაერთიანებულ სიას ისე,
 რომ სახელები არ მეორდებოდეს
*/


/* კიდევ ერთი შესაძლო ვარიანტი.
let base1 = [];
let base2 = [];

let howMuch = prompt("რამდენი სტუდენტის შეყვანა გსურს?");
    for(let i=0;i<howMuch;i++){
        let input = prompt("შეიყვანეთ სტუდენტის სახელი: ");
        base1[i]=input;
    }

    alert("შეიყვანეთ მეორე სტუდენტების ცხრილი.");

    howMuch = prompt("რამდენი სტუდენტის შეყვანა გსურს?");

    for(let i=0;i<howMuch;i++){
        let input = prompt("შეიყვანეთ სტუდენტის სახელი: ");
        base2[i]=input;
    }


    let base = base1.concat(base2);
    gafiltruli = [...new Set(base)];
*/
let base1 = [];
let base2 = [];

let howMuch = prompt("რამდენი სტუდენტის შეყვანა გსურს?");
    for(let i=0;i<howMuch;i++){
        let input = prompt("შეიყვანეთ სტუდენტის სახელი: ");
        base1[i]=input;
    }

    alert("შეიყვანეთ მეორე სტუდენტების ცხრილი.");

    howMuch = prompt("რამდენი სტუდენტის შეყვანა გსურს?");

    for(let i=0;i<howMuch;i++){
        let input = prompt("შეიყვანეთ სტუდენტის სახელი: ");
        base2[i]=input;
    }

    let base = base1.concat(base2);

    let emptyBase=[];

for(var i in base){
    if(emptyBase.indexOf(base[i]) === -1){
        emptyBase.push(base[i]);
    }
}
    alert(emptyBase);
