const inputBox = document.querySelector('input');
const list = document.querySelector('.list');
document.querySelector('button').onclick = function addTask(){
    if(inputBox.value == ''){
        Swal.fire({
            title: "Oops",
            text: "You must write a task!",
            icon: "warning"
          });
    }
    else{
        const li =document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}  

list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);