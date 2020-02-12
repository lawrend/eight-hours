const lifespan = 28800;
// 78 years 310 days;

secondsConverter = (secs) => {
  const minutes = Math.floor(secs/60);
  const remainingSeconds = secs % 60;
  const hours = Math.floor(minutes/60);
  const remainingMinutes = minutes % 60;
  return `${hours} hrs, ${remainingMinutes} mins, ${remainingSeconds} secs`
}

dummy = () => {
  let nowtimes = moment().format("h:mm:ss a");
  document.getElementById("today").innerText = `${nowtimes}`;
}

function calculateTime () {
  const bday = document.getElementById("bday-text-box").value
  const bdayMoment = moment(bday, "MM/DD/YYYY");

  dummy();

  let daysAgo = bdayMoment.diff(moment(), 'days')
  let borntime = moment().add(daysAgo, 'seconds').format('h:mm:ss a')

  const remainingTime = 28800 + daysAgo;
  let diedtime = moment().add(remainingTime, 'seconds').format("h:mm:ss a")
  document.getElementById("born").innerText = `${borntime}`;
  document.getElementById("died").innerText = `${diedtime}\n`;
  document.getElementById("timeSince").innerText = `${secondsConverter(daysAgo * -1)}`;
  // document.getElementById("timeNow").innerText = `now`;
  document.getElementById("timeToGo").innerText = `${secondsConverter(remainingTime)}`;
  document.getElementById("footer-div").innerHTML =
    `<span class="footer-text">&copy2020 squigglewerkz</span>`;
}
// <img src="./Squiggle-cover.png" height=80 width=200 alt="squigglewerkz logo"/><br/>

// age in years
  // let diedtime = moment(bday, "YYYYMMDD").fromNow()
