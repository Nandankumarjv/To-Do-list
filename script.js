let div=document.getElementById("container")
let ip=document.getElementById("ip")
let btn=document.getElementById("btn")
div.style.border="1px solid"
div.style.width="30%"
btn.addEventListener("click",()=>{

    let Addtask=document.createElement("div")
    let p=document.createElement("p")
    let Rbtn=document.createElement("button")
    let p2=document.createElement("p")
    if(ip.value.trim()===""){
        p.textContent="Please Add Task❗"
        div.appendChild(p)
        p.style.border="none"
        p.style.borderRadius="0.3rem"
        p.style.backgroundColor="white"
        setTimeout(() => {
            p.remove();
        }, 2000);
    }
    else{
    p.textContent=ip.value+" "
    div.appendChild(p)
    p.style.alignItems="center"
    p.style.justifyContent="center"
    p.style.border="1px solid"
    p.style.borderRadius="0.3rem"
    p.style.backgroundColor="cadetblue"
    ip.value=""
    Rbtn.textContent="🗑️"
    div.appendChild(Rbtn)
    Rbtn.style.cursor="pointer"
    Rbtn.style.border="1px solid"
    Rbtn.style.borderRadius="0.3rem"
    Rbtn.style.backgroundColor="rgb(198, 72, 72)"
    Rbtn.style.width="35%"
    div.appendChild(Addtask)
    Addtask.textContent=p.value
    Rbtn.style.justifyContent="center"
        }
Rbtn.addEventListener("click",()=>{
    p.remove();
    Rbtn.remove();
     p2.textContent="Task Deleted Successfully✅"
    div.appendChild(p2)
    p2.style.border="none"
    p2.style.backgroundColor="white"
    p2.style.borderRadius="0.3rem"
    setTimeout(()=>{
        p2.remove();
    },1000)
})
})

