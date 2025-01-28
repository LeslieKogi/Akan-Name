document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("akanform").addEventListener("submit",function(event){
        event.preventDefault()
        usersinput()
    })
})
function usersinput(){
    const birthdate = document.getElementById("birthdate").value;
    const gender= document.getElementById("genderselect").value;
    
    console.log(birthdate,gender)
    if(!birthdate||!gender){
        alert("Please fill out all details")
        return
    }
    //array destructure 2025-01-30
    const[year,month,day]=birthdate.split("-").map(Number)
    console.log(year,month,day)
    
    
    //validating
    if(day<=0 || day>31 || month<=0 || month>12){
        alert("invalid birthdate given")
        return

}

determineAkanName(year,month,day,gender)
}
function determineAkanName(year,month,day,gender){
console.log("From the determineAkanName function",year,month,day,gender);

//Extractions for CC and YY
const CC=Math.floor(year/100)
const YY=year%100;

//Extractions for day
const d = Math.floor(((CC / 4) - (2 * CC) - 1 + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7);

   // Ensure day of the week (d) is positive
   const dayOfWeek = (d + 7) % 7;

   

}

