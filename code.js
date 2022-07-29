function getcard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q',
        'K', 'A'];
    const valindex = Math.floor(Math.random() * values.length);
    const value =  values[valindex];
    
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suitindex = Math.floor(Math.random() * suits.length);
    const suit = suits[suitindex];
    return { value: value, suit: suit };
}
// These two functions both execute the same objective.One is more efficient using
// a function to automate the random selection within a Array.//

function getRandomElement(arry) {
    let content = arry
    let index = Math.floor(Math.random() * arry.length);
    return content[index]
}

function getcard() {
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q',
        'K', 'A'];
    const value = getRandomElement(values)
   
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suit = getRandomElement(suits)
    
    return { value: value, suit: suit };
    
}