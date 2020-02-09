const displayData="DISPLAY";

const displayDiv = document.getElementById("display");
const lifespan = 28800;
// 78 years 310 days;


secondsConverter = (secs) => {
  const minutes = Math.floor(secs/60);
  const remainingSeconds = secs % 60;
  const hours = Math.floor(minutes/60);
  const remainingMinutes = minutes % 60;
  return `${hours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`

}

dummy = () => {
  // displayDiv.innerText = "dummy";
  let nowtimes = moment().format("h:mm:ss a");
  document.getElementById("today").innerText = `${nowtimes}`;
}

function calculateTime () {
  const bday = document.getElementById("name").value
  const bdayMoment = moment(bday, "MM/DD/YYYY");

  let daysAgo = bdayMoment.diff(moment(), 'days')
  let borntime = moment().add(daysAgo, 'seconds').format('h:mm:ss a')

  const remainingTime = 28800 + daysAgo;
  let diedtime = moment().add(remainingTime, 'seconds').format("h:mm:ss a")
  document.getElementById("born").innerText = `${borntime}\n  ${secondsConverter(daysAgo * -1)} lived`;
  document.getElementById("died").innerText = `${diedtime}\n${secondsConverter(remainingTime)} remain`;
  document.getElementById("timeSince").innerText = `Born ${daysAgo * -1} days ago`;
  document.getElementById("timeNow").innerText = `now`;
  document.getElementById("timeToGo").innerText = `${remainingTime} days remain`;
}

// displayDiv.innerText = `${displayData}`

// let currentTime = new Date()

// displayDiv.innerHTML = `
// What's Your Birthday, including year?
// <form>
// <input type='text' />
// <br />
// <input type='button' value='submit'>
// </form> ${currentTime}`
//
// age in years
  // let diedtime = moment(bday, "YYYYMMDD").fromNow()
