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
    
        //1st condition - current date is smaller than input date or current date is greater than input date
        if(currentDate<inputDate){
            const targetDate=eval((currentDate+daysInMonth[currentMonth]) - inputDate)
            day.style.display="inline-block"
            day.firstElementChild.textContent=targetDate
        }else{
            const targetDate=eval(currentDate - inputDate)
            day.style.display="inline-block"
            day.firstElementChild.textContent=targetDate
        }

        //2nd condition - input month is greater than current month and input date is smaller than or euqal to current date
        if(currentMonth<inputMonth && currentDate>=inputDate ){
            const targetMonth=eval((currentMonth+12)-inputMonth)
            const targetYear=eval((currentYear-1)-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //3rd condition -input month is smaller than current month and input date is greater than current date
        }else if(currentMonth>inputMonth && currentDate<inputDate ){
            const targetMonth=eval( (currentMonth-1)-inputMonth)
            const targetYear=eval(currentYear-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //4th condition -input month is greater than current month and input date is greater than or euqal to current date
        }else if(currentMonth<inputMonth && currentDate<=inputDate ){
            const targetMonth=eval(((currentMonth-1)+12)-inputMonth)
            const targetYear=eval((currentYear-1)-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //5th condition - input month is greater than or equal to current month and input date is greater than or euqal to current date
        }else if(currentMonth<=inputMonth && currentDate<=inputDate ){
            const targetMonth=eval(((currentMonth-1)+12)-inputMonth)
            const targetYear=eval((currentYear-1)-inputYear)
            month.style.display="inline-block"
            year.style.display="inline-block"
            month.firstElementChild.textContent=targetMonth
            year.firstElementChild.textContent=targetYear

        //6th condition -  input date and input month both are smaller than current date and current month
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




