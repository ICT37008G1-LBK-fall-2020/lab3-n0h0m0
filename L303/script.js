/* L303 დაწერეთ სკრიპტი რომელიც ფასს, შეყვანილს სტრიქონით სახით ფორმატით {currency}price,
გადაიყვანს საპირისიპირო ვალუტაში (თუ მოცემულია ლარებში გადაიყვანს დოლარებში და პირიქით)
 კურსთი 1დოლარი = 2.6 ლარს. მაგალითი: $10 პასუხი 26, L26 პასუხი $10 */

 var dolar = 2.6;
 var result;
 var input = prompt("შეიყვანეთ თანხის ოდენობა ( [[number]format] ): ");

 if(input.indexOf("$") != -1 ){
    var del = input.indexOf("$");
    input.substring(del, del+1);
    var parsedInput = parseFloat(input);
    result = parsedInput * dolar; ;
    alert(result + "L");
 }
if(input.indexOf("L") != -1){
    var del = input.indexOf("L");
    input.substring(del, del+1);
    var parsedInput = parseFloat(input);
    result = parsedInput / dolar; ;
    alert(result + "$");
 }