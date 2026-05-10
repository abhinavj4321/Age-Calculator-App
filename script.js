let userInput=document.getElementById("date");
let submitBtn=document.getElementById("calculate");

userInput.max=new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate=new Date(userInput.value);
    let birthYear=birthDate.getFullYear();
    let birthMonth=birthDate.getMonth()+1;
    let birthDay=birthDate.getDate();

    let currentDate=new Date();
    let currentYear=currentDate.getFullYear();
    let currentMonth=currentDate.getMonth()+1;
    let currentDay=currentDate.getDate();

    let ageDifference,monthDifference,dayDifference;
    
    ageDifference=currentYear-birthYear;

    if(currentMonth>=birthMonth){
        monthDifference=currentMonth-birthMonth;
    }else{
        ageDifference--;
        monthDifference=12+currentMonth-birthMonth;
    }
    if(currentDay>=birthDay){
        dayDifference=currentDay-birthDay;
    }else{
        monthDifference--;
        let daysInPreviousMonth=new Date(currentYear,currentMonth-1,0).getDate();
        dayDifference=daysInPreviousMonth+currentDay-birthDay;
    }
    if(monthDifference<0){
        monthDifference+=12;
        ageDifference--;
    }
    document.getElementById('result').innerHTML=`Your are <span> ${ageDifference} </span> Years, <span> ${monthDifference} Month </span> and <span> ${dayDifference} </span> Days old.`
}
