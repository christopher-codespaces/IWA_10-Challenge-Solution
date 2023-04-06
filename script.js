const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: new Date(`16 December ${currentYear}`)
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`)
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`)
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`)
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`)
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`)
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`)
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`)
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`)
  }
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment
const trueID = holidays.futureId;

console.log(trueID ? holidays.futureId.name : `ID ${futureId} not created yet`);

//Changes to the  christmas object
const newXmas = {
  id: 6,
  name: "X-mas",
  date: new Date(`25 December ${currentYear}`)
};

//Temporary object for potential changes
const copied = {
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`)
  }
};

console.log(
  newXmas.date < holidays[6].date
    ? `New date is earlier: ${true}`
    : `New date is earlier: ${false}`
);

//Conditional changes to temporary object
if (newXmas.date < holidays[6].date) {
  copied[6].name = newXmas.name;
  copied[6].date = newXmas.date;
  //Formatting christmas date to dd/mm/yy
  let day = copied[6].date.getDate();
  let month = copied[6].date.getMonth() + 1;
  let year = copied[6].date.getFullYear();

  let newDateFormat = `${day}/${month}/${year}`;
  copied[6].date = newDateFormat;
}

//Check and alert for ID changes?
console.log(
  copied[6].id !== holidays[6].id
    ? `ID change: ${copied[6].id}`
    : `ID change: ${false}`
);
//Check and alert for Name changes?
console.log(
  copied[6].name !== holidays[6].name
    ? `Name change: ${copied[6].name}`
    : `Name change: ${false}`
);
//Check and alert for Date changes?
console.log(
  copied[6].date !== holidays[6].date
    ? `Date change: ${copied[6].date}`
    : `Date change: ${false}`
);

//Finding first holiday of the year with Math.min
const firstHolidayTimestamp = Math.min(
  holidays[0].date,
  holidays[1].date,
  holidays[2].date,
  holidays[3].date,
  holidays[4].date,
  holidays[5].date,
  holidays[6].date,
  holidays[7].date,
  holidays[8].date
);

//Finding last holiday of the year with Math.max
const lastHolidayTimestamp = Math.max(
  holidays[0].date,
  holidays[1].date,
  holidays[2].date,
  holidays[3].date,
  holidays[4].date,
  holidays[5].date,
  holidays[6].date,
  holidays[7].date,
  holidays[8].date
);

//Getting a random holiday of the year
let randomNbr = Math.floor(Math.random() * 10);
if (randomNbr === 9) {
  randomNbr -= 1;
}

const randomHoliday = holidays[randomNbr].date;

//Function to output date in the new date format i.e. dd/mm/yy
const newFormat = (x) => {
  const dateInput = new Date(x);
  let day = dateInput.getDate();
  let month = dateInput.getMonth() + 1;
  let year = dateInput.getFullYear();

  if (day < 10) {
    day = day.toString().padStart(2, "0");
  }

  if (month < 10) {
    month = month.toString().padStart(2, 0);
  }

  const newFormat = `${day}/${month}/${year}`;

  console.log(newFormat);
};

//Logs out the first, last and a random holiday
newFormat(firstHolidayTimestamp);
newFormat(lastHolidayTimestamp);
newFormat(randomHoliday);

//Alternatively for the date changes

//Getting first holiday of the year
// const firstHolidayDate = new Date(firstHolidayTimestamp);
// let firstHoliDay = firstHolidayDate.getDate();
// let firstHoliMonth = firstHolidayDate.getMonth() + 1;
// const firstHoliYear = firstHolidayDate.getFullYear();

// if (firstHoliDay < 10) {
//   firstHoliDay = "0" + firstHoliDay;
// }
// if (firstHoliMonth < 10) {
//   firstHoliMonth = "0" + firstHoliMonth;
// }

// const newFirstHolidayFormat = `${firstHoliDay}/${firstHoliMonth}/${firstHoliYear}`;

//Getting last holiday of the year
// const lastHolidayDate = new Date(lastHolidayTimestamp);
// const lastHoliDay = lastHolidayDate.getDate();
// const lastHoliMonth = lastHolidayDate.getMonth() + 1;
// const lastHoliYear = lastHolidayDate.getFullYear();

// const newLastHolidayFormat = `${lastHoliDay}/${lastHoliMonth}/${lastHoliYear}`;

//Getting a random holiday of the year

// let randomNbr = Math.floor(Math.random() * 10);
// if (randomNbr === 9) {
//   randomNbr -= 1;
// }

// const randomHoliday = holidays[randomNbr].date;

// const rndHolidayDate = new Date(randomHoliday);
// let rndHoliDay = rndHolidayDate.getDate();
// let rndHoliMonth = rndHolidayDate.getMonth() + 1;
// const rndHoliYear = rndHolidayDate.getFullYear();

// if (rndHoliDay < 10) {
//   rndHoliDay = "0" + rndHoliDay;
// }
// if (rndHoliMonth < 10) {
//   rndHoliMonth = "0" + rndHoliMonth;
// }

// const newRandomHolidayFormat = `${rndHoliDay}/${rndHoliMonth}/${rndHoliYear}`;

// console.log(newFirstHolidayFormat);
// console.log(newLastHolidayFormat);
// console.log(newRandomHolidayFormat);
