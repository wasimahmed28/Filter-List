let input = document.querySelector('.input')

input.addEventListener('input', () => {

    let userWord = input.value.toLowerCase()
    
    let listItems = document.querySelectorAll("li");
    listItems.forEach((li)=>{
        let item = li.textContent.toLowerCase()
        if(item.includes(userWord)){
            li.style.display = "block";
        }
        else{
            li.style.display = "none";
        }
    })
    
})