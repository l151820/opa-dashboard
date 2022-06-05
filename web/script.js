function Time() {
  // Creating object of the Date class
  var date = new Date();
  // Get current hour
  var hour = date.getHours();
  // Get current minute
  var minute = date.getMinutes();
  // Get current day
  var dayofweek = date.getDay();

  switch(dayofweek){
    case 0: 
        nameOfDay = 'SONNTAG';
        break;
    case 1:
        nameOfDay = 'MONTAG';
        break;
    case 2:
        nameOfDay = 'DIENSTAG';
        break;
    case 3:
        nameOfDay = 'MITTWOCH';
        break;
    case 4:
        nameOfDay = 'DONNERSTAG';
        break;
    case 5:
        nameOfDay = 'FREITAG';
        break;
    case 6:
        nameOfDay = 'SAMSTAG';
        break;

  }
  var year = date.getFullYear();
  let month = date.toLocaleString('de-de', { month: 'long' });
  var dayofmonth = date.getDate(); 

  // Variable to store AM / PM
  var period = "";
  // Assigning period according to hour
  switch(hour){
    case 6: 
        period = 'MORGENS';
        break;
    case 12:
        period = 'MITTAGS';
        break;
    case 15:
        nameOfDay = 'NACHMITTAGS';
        break;
    case 18:
        period = 'ABENDS';
        break;
  }
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  // Adding time elements to the div
  document.getElementById("dayofweek").innerText = nameOfDay;
  document.getElementById("clock").innerText = hour + " : " + minute;
  document.getElementById("timeofday").innerText = period;
  document.getElementById("dayofmonth").innerText = dayofmonth;
  document.getElementById("month").innerText = month.toUpperCase();
  document.getElementById("year").innerText = year;
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
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