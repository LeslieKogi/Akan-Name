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
console.log("From the determineAkanName function",year,month,day,gender)
}
