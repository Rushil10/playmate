import moment from "moment";

export const getTimeFromDuration = (startTime, duration) => {
  var newDateObj = "Greater Than 3 hours";
  if (duration === "30 min") {
    newDateObj = moment(startTime).add(30, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else if (duration === "1 hour") {
    newDateObj = moment(startTime).add(60, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else if (duration === "1 hour 30 min") {
    newDateObj = moment(startTime).add(90, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else if (duration === "2 hours") {
    newDateObj = moment(startTime).add(120, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else if (duration === "2 hours 30 min") {
    newDateObj = moment(startTime).add(150, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else if (duration === "3 hours") {
    newDateObj = moment(startTime).add(180, "m").toDate();
    return moment(newDateObj).format("h:mm a");
  } else {
    return newDateObj;
  }
};

function generateRandom(max) { // min and max included 
  return Math.floor(Math.random() * (max + 1))
}

export function randomColor() {
  var red = generateRandom(255)
  var green = generateRandom(255)
  var blue = generateRandom(255)
  var bg =  `rgba(${red},${green},${blue},0.2)`
  var border =  `rgba(${red},${green},${blue},1)`
  return [bg,border]
}
