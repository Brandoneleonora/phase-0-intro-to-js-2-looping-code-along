// Code your solutions in this file

function writeCards(names, thing){
    const cards = [];
    for(let i = 0; i < names.length; i++)
    {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${thing} gift!`);
    }       
    console.log(cards);
    return cards;
}

 writeCards([Guadalupe,Aki, Ollie], "birthday");
 

 function countDown(i){
    while (i >= 0){
        console.log(i);
        i--;
     }
 }
 countDown(10);