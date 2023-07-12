const endDate = "12 July 2023 1:31 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)  / 1000;
    
    if (diff < 0) return;  // To ignore negative values
    //converting Days 
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    //converting Hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    //converting Minutes
    inputs[2].value = (Math.floor(diff / 60) % 60);
    //converting Seconds
    inputs[3].value = (Math.floor(diff) % 60);

}

//init call
clock()

/* 
* 1 days - 24 hr
* 1 hr = 60 min
* 60 min = 3600 sec

*/

setInterval(
    () => {clock()}, 
    1000
    
)