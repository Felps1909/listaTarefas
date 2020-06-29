const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")

buttonElement.onclick = ev =>{
    ev.preventDefault()

    if(inputElement.value){
        

        const txtElement = document.createElement("span")
        txtElement.innerHTML= inputElement.value 

        const removeELement = document.createElement("button")
        removeELement.innerHTML = "Remove"

        const liElement = document.createElement("li")
        liElement.appendChild(txtElement)
        liElement.appendChild(removeELement)

        ulElement.appendChild(liElement) 
        inputElement.value = ""  
        
        removeELement.onclick = () =>{
            ulElement.removeChild(liElement);
        }
    }

    
   

}