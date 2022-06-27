const btn=document.querySelector(".btn")
const dob=document.querySelector(".dob")
const year=document.querySelector(".years")
const month=document.querySelector(".months")
const day=document.querySelector(".days")
const errormsg=document.querySelector(".errorMsg")

let daysInMonth=[0,31,28,31,30,31,30,31,31,30,31,30,31]

//add click event to calculate button
btn.addEventListener("click",(eve)=>{
    const dateInput=dob.value

    if(dateInput){
    const inputYear=Number(dateInput.slice(0,4))
    const inputMonth=Number(dateInput.slice(5,7))
    const inputDate=Number(dateInput.slice(8,10))
    errormsg.style.display="none"

    //find todays date to compare with dob
    const findTodaysDate=()=>{
        const todaysDate=new Date()
        const currentYear=todaysDate.getFullYear()
        const currentMonth=todaysDate.getMonth()+1
        const currentDate=todaysDate.getDate()
    
        //check current year is leap year or normal year
        const findLeapYear=()=>{
           if(currentYear%400==0){
            daysInMonth.splice(2,0,29)
    
           }else if(currentYear%4==0){
            daysInMonth.splice(2,0,29)
           }
        }
        findLeapYear()
    
        //condition for date
        if(currentDate<inputDate){
            const targetDate=eval((currentDate+daysInMonth[currentMonth]) - inputDate)
            day.firstElementChild.textContent=targetDate
        }else{
            const targetDate=eval(currentDate - inputDate)
            day.style.display="inline-block"
            day.firstElementChild.textContent=targetDate
        }
        //condition for date
        if(currentMonth<inputMonth && currentDate>inputDate ){
            const targetMonth=eval((currentMonth+12)-inputMonth)
            const targetYear=eval((currentYear-1)-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //condition for date
        }else if(currentMonth<inputMonth && currentDate<inputDate ){
            const targetMonth=eval(((currentMonth-1)+12)-inputMonth)
            const targetYear=eval((currentYear-1)-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //condition for date
        }else{
            const targetMonth=eval(currentMonth-inputMonth)
            const targetYear=eval(currentYear-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear
        }
    
    }
    findTodaysDate()
}else{
    errormsg.style.display="block"

}
    
})




