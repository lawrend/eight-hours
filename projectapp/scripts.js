const displayData="DISPLAY";

const displayDiv = document.getElementById("display");
const lifespan = 28800;
// 78 years 310 days;


function dummy() {
  // displayDiv.innerText = "dummy";
  let nowtimes = moment().format("h:mm:ss a");
  document.getElementById("display2").innerText = `${nowtimes}`;
}

function calculateTime () {
  const bday = document.getElementById("name").value
  const bdayMoment = moment(bday, "YYYYMMDD");
  let daysAgo = bdayMoment.diff(moment(), 'days')
  let borntime = moment().add(daysAgo, 'seconds').format('h:mm:ss a')


  const remainingTime = 28800 + daysAgo;
  let diedtime = moment().add(remainingTime, 'seconds').format("h:mm:ss a")

  document.getElementById("born").innerText = `${borntime}`;

  document.getElementById("died").innerText = `${diedtime}`;
  console.log(remainingTime)
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
