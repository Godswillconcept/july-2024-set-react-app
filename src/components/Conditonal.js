const Conditional = () =>{
    const Today = new Date();
    const weekdays = ['Sun', 'Mon', 'Tue','Wed', 'Thurs', 'Fri', 'Sat'];
    const Tday = weekdays[Today.getDay()]
    console.log(Tday)
 
let day; 
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    
    default:
        day = 'Day is not found'
}

console.log(`Today is ${day}`);
console.log(new Date().getDate())

    return (
        <>Conditional</>
    )
}
export default Conditional;