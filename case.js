const school = 'Feni Govt. Pilot High School';
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I will read');
}
else{
    console.log('I will sleep');
}

const drink = '   water';
const liquid = 'water    ';
if(drink.trim() === liquid.trim()){
    console.log('I will drink water');
}
else{
    console.log('I am thirsty');
}