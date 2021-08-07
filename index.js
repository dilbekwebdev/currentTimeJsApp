let date = new Date();
let weekDay = date.getDay();

switch (weekDay) {
  case 1: weekDay = "Monday";break;
  case 2: weekDay = "Tuesday"; break;
  case 3: weekDay = "Wednesday"; break;
  case 4: weekDay = "Thursday"; break;
  case 5: weekDay = "Friday"; break;
  case 6: weekDay = "Saturday"; break;
  case 7: weekDay = "Sunday"; break;
}


function time(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? ' PM ' : ' AM ';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ampm + ': ' + minutes + " : "+ seconds;
  return strTime;
}

alert(`Today is: ${weekDay}
Current Time is : ${time(new Date)}
`);