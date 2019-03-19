
let head = document.querySelector('.head');
head.style.height = screen.height/2;
console.log(screen.height)

let content = document.querySelectorAll('.who');
console.log(content)

let check = true;

content.forEach((elm) => {
    elm.addEventListener("click",()=>{
        let hidden = (elm.childNodes[5]);
        if (check) {
            hidden.style.display = "block";
            check = false;
        }    
        else {
            hidden.style.display = "none";
            check = true;
        }      
    })
})