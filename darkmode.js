const body = document.getElementsByTagName('body')[0]
const trigger = document.getElementById('dark-btn')

trigger.addEventListener("click", ()=>{
    console.log("hello");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
    }else{
        body.classList.add('dark')
    }
})