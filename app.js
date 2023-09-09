function currentDayOfTheWeek () {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"]
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay()
    return daysOfTheWeek[currentDayIndex];  
}

function currentUTC (){
    const currentUTCTime = new Date().getTime()
    return currentUTCTime
}


const currentDay = document.getElementById("currentDayOfTheWeek").textContent= currentDayOfTheWeek();
const currentUtc = document.getElementById("currentUTCTime").textContent = currentUTC();

