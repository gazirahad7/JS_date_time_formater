const firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");
const formSubmit = document.getElementById("form-submit");
const outputDIV = document.getElementById("output");
formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    alert("Input Plz");
  } else {
    dateFormatter(firstInput.value, secondInput.value);
  }
});

function dateFormatter(olddate, format) {
  let newDate = new Date(olddate);

  if (newDate.toString() === "Invalid Date") {
    return "Invalid Date";
  }
  //"2018-8-12"
  // weekday l = sunday-saturday / D = Mon - Sun
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let l = days[newDate.getDay()];
  console.log("l", l);
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let D = daysShort[newDate.getDay()];
  console.log("D", D);
  const date = newDate.getDate();
  let j = date;
  console.log("j", j);
  let d = (newDate.getDate() < 10 ? "0" : "") + date;
  console.log("d", d);

  let S = date;
  if (date % 10 === 1 && date !== 11) {
    S += "st";
  } else if (date % 10 === 2 && date !== 12) {
    S += "nd";
  } else if (date % 10 === 3 && date !== 13) {
    S += "rd";
  } else {
    S += "th";
  }
  console.log("S", S);
  // for Day of Month d= 01-31/ j=1-31/s= 1st or 2nd, 15th,

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = newDate.getMonth();
  let F = months[month];
  console.log("F", F);
  let monthShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Month m = 01-12/ n=  1-12/F= January-December/M = Jan -Dec

  const M = monthShort[month];
  console.log("M", M);

  const m = (month < 10 ? "0" : "") + (month + 1);

  console.log("m", m);
  const n = month + 1;
  console.log("n", n);

  //Year Y = 2020, y = 20
  const fullYear = newDate.getFullYear();

  const Y = fullYear;
  console.log("Y", Y);
  const y = fullYear.toString().substr(-2);
  console.log("y", y);

  // date and time
  const hour = newDate.getHours();
  const g = hour % 12;
  const G = hour;
  console.log("G", G);
  // Time a = am,pm / A = AM,PM
  const a = G >= 12 ? "pm" : "am";
  console.log("a", a);
  const A = G >= 12 ? "PM" : "AM";
  console.log("A", A);
  // Hour g 1-12/ h = 01-12 / G = 0-23/ H = 00-23/

  console.log("g", g);

  const h = ((hour % 12 || 12) < 10 ? "0" : "") + (hour % 12 || 12);
  console.log("h", h);

  const H = (hour < 10 ? "0" : "") + hour;
  console.log("H", H);

  // Minutes i= 00-59
  const minute = newDate.getMinutes();
  const i = (minute < 10 ? "0" : "") + minute;
  console.log("i", i);
  // Seconds s = 00-59
  const second = newDate.getSeconds();
  const s = (second < 10 ? "0" : "") + second;
  console.log("s", s);
  // Timezone Eg.EST, MDT
  // at

  // Timezone

  const T = newDate
    .toLocaleTimeString(navigator.language, { timeZoneName: "short" })
    .split(" ")[2];
  console.log("T", T);

  const c = newDate.toISOString();
  console.log("c", c);

  const r = newDate.toUTCString();
  console.log("r", r);
  const U = newDate.valueOf();
  console.log("U", U);
  //let secondInput = prompt(String("Enter Format:"));
  console.log("first", format.length);

  let newString = "";

  const myObj = {
    a,
    A,
    c,
    d,
    D,
    F,
    g,
    G,
    h,
    H,
    i,
    j,
    l,
    m,
    M,
    n,
    r,
    s,
    S,
    T,
    U,
    Y,
  };
  console.log("with out loop", myObj);

  const keys = Object.keys(myObj);
  console.log("keys", keys);

  for (let v = 0; v < format.length; v++) {
    const latter = keys.find((key) => key == format[v]);

    if (format[v] === "\\") {
      v++;
      newString += format[v];
      continue;
    }
    if (latter) {
      newString += format[v].replace(latter, myObj[latter]);
    } else {
      newString += format[v];
    }
  }

  //console.log(newString);
  return (outputDIV.innerHTML = `<h4>${newString}</h4>`);
}
//dateFormat();

//
/* 


const dateTimeFormatter = (oldDate, format) => {
  const newDate = new Date(oldDate);

  if (newDate.toString() === 'Invalid Date') {
    return 'Invalid Date'
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thusday',
    'Friday',
    'Saturday',
  ]
  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const l = days[newDate.getDay()]
  const D = daysShort[newDate.getDay()]
  const date = newDate.getDate()
  const j = date
  const d = (date < 10 ? '0' : '') + date
  let S = date
  if (date % 10 === 1 && date !== 11) {
    S += 'st'
  } else if (date % 10 === 2 && date !== 12) {
    S += 'nd'
  } else if (date % 10 === 3 && date !== 13) {
    S += 'rd'
  } else {
    S += 'th'
  }
  const month = newDate.getMonth()
  const F = months[month]
  const M = monthsShort[month]
  const m = (month < 10 ? '0' : '') + (month + 1)
  const n = month + 1
  const fullYear = newDate.getFullYear()
  const Y = fullYear
  const y = fullYear.toString().substr(-2)
  const hour = newDate.getHours()
  const g = hour % 12
  const G = hour
  const a = G >= 12 ? 'pm' : 'am'
  const A = G >= 12 ? 'PM' : 'AM'
  const h = ((hour % 12 || 12) < 10 ? '0' : '') + (hour % 12 || 12)
  const H = (hour < 10 ? '0' : '') + hour
  const minute = newDate.getMinutes()
  const i = (minute < 10 ? '0' : '') + minute
  const second = newDate.getSeconds()
  const s = (second < 10 ? '0' : '') + second
  const T = newDate.toLocaleTimeString(navigator.language, { timeZoneName: 'short' }).split(' ')[2]
  const c = newDate.toISOString()
  const r = newDate.toUTCString()
  const U = newDate.valueOf()
  let formattedDate = ''
  const allFormatObj = {
    a,
    A,
    c,
    d,
    D,
    F,
    g,
    G,
    h,
    H,
    i,
    j,
    l,
    m,
    M,
    n,
    r,
    s,
    S,
    T,
    U,
    y,
    Y,
  }

  const keys = Object.keys(allFormatObj)

  for (let v = 0; v < format.length; v += 1) {
    const latter = keys.find((key) => key === format[v])

    if (format[v] === '\\') {
      v += 1;
      formattedDate += format[v];
    } else if (latter) {
      formattedDate += format[v].replace(latter, allFormatObj[latter]);
    } else {
      formattedDate += format[v];
    }
  }

  return formattedDate;
}

*/

// 3rd way

/*
const dateTimeFormatter = (oldDate, format) => {
  const newDate = new Date(oldDate);

  if (newDate.toString() === 'Invalid Date') {
    return 'Invalid Date'
  }

  // Day
  const d = newDate.toLocaleDateString('en-US', { day: '2-digit' })
  const j = newDate.toLocaleDateString('en-US', { day: 'numeric' })
  let S = newDate.getDate()
  if (S % 10 === 1 && S !== 11) {
    S += 'st'
  } else if (S % 10 === 2 && S !== 12) {
    S += 'nd'
  } else if (S % 10 === 3 && S !== 13) {
    S += 'rd'
  } else {
    S += 'th'
  }
  // Weekday
  const l = newDate.toLocaleDateString('en-US', { weekday: 'long' })
  const D = newDate.toLocaleDateString('en-US', { weekday: 'short' })
  // Month
  const m = newDate.toLocaleDateString('en-US', { month: '2-digit' })
  const n = newDate.toLocaleDateString('en-US', { month: 'numeric' })
  const F = newDate.toLocaleDateString('en-US', { month: 'long' })
  const M = newDate.toLocaleDateString('en-US', { month: 'short' })
  // Year
  const Y = newDate.toLocaleDateString('en-US', { year: 'numeric' })
  const y = newDate.toLocaleDateString('en-US', { year: '2-digit' })
  // Time
  const a = newDate.toLocaleTimeString('en-US', { hour12: true }).split(' ')[1].toLowerCase()
  const A = newDate.toLocaleTimeString('en-US', { hour12: true }).split(' ')[1]
  // Hour
  const g = newDate.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric' }).split(' ')[0]
  const h = newDate.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit' }).split(' ')[0]
  const G = newDate.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric' })
  const H = newDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit' })
  // Minute
  const i = newDate.toLocaleTimeString('en-US', { minute: '2-digit' })
  // Second
  const s = newDate.toLocaleTimeString('en-US', { second: '2-digit' })
  // Additional
  const T = newDate.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ')[2]
  const c = newDate.toISOString()
  const r = newDate.toUTCString()
  const U = newDate.valueOf()
  let formattedDate = ''
  const allFormatObj = { a, A, c, d, D, F, g, G, h, H, i, j, l, m, M, n, r, s, S, T, U, y, Y }

  const allFormatkeys = Object.keys(allFormatObj)

  for (let v = 0; v < format.length; v += 1) {
    if (format[v] === '\\') {
      v += 1
      formattedDate += format[v]
    } else {
      const formatKey = allFormatkeys.find(key => key === format[v])
      formattedDate += formatKey ? format[v].replace(formatKey, allFormatObj[formatKey]) : format[v]
    }
  }

  return formattedDate
}
*/
