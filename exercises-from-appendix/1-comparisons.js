const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  if (startTime < dayStart) return false;

  var startTimeHour = Number(startTime.split(":")[0]);
  var startTimeminutes = Number(startTime.split(":")[1]);
  var endTime;
  var endTimeHour = startTimeHour;
  var endTimeMinutes = startTimeminutes + durationMinutes;

  if (endTimeMinutes >= 60) {
    var endTimeHour = Math.floor(endTimeMinutes / 60) + startTimeHour;
    endTimeMinutes = endTimeMinutes % 60;

    if (endTimeHour < 10) {
      endTimeHour = "0" + endTimeHour;
    }
  }

  endTime = endTimeHour + ":" + endTimeMinutes;

  return endTime <= dayEnd;
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("07:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
