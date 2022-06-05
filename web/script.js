function Time() {
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current second
  var second = date.getSeconds();
  // Get current day
  var dayofweek = date.getDay();

  switch(dayofweek){
    case 0: 
        nameOfDay = 'Sonntag';
        break;
    case 1:
        nameOfDay = 'Montag';
        break;
    case 2:
        nameOfDay = 'Dienstag';
        break;
    case 3:
        nameOfDay = 'Mittwoch';
        break;
    case 4:
        nameOfDay = 'Donnerstag';
        break;
    case 5:
        nameOfDay = 'Freitag';
        break;
    case 6:
        nameOfDay = 'Samstag';
        break;

  }
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var dayofmonth = date.getDate(); 

  // Variable to store AM / PM
  var period = "";
  // Assigning AM / PM according to the current hour
  if (hour >= 12) {
  period = "Abends";
  } else {
  period = "Morgens";
  }
  // Converting the hour in 12-hour format
  if (hour == 0) {
  hour = 12;
  } else {
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = nameOfDay + "\n\n" + hour + " : " + minute + "\n" + period + "\n\n" + dayofmonth + "." + month + "." + year;
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 60000);
 }
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
 function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
 }
 Time();