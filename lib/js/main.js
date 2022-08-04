let sumbitBtn= document.getElementById("submit_button")

let titleBox, 
nounBox, 
verbBox, 
adjectiveBox, 
titleValue, 
nounValue, 
verbValue, 
adjectiveValue;

document.getElementById("title_input").onkeyup = function(){
    titleBox= document.getElementById("title_input")
    titleValue= titleBox.value
    
    document.getElementById("main_title").innerHTML= titleValue
}

sumbitBtn.onclick= function(event){
    event.preventDefault()

    nounBox= document.getElementById("noun")
    nounValue= nounBox.value

    verbBox= document.getElementById("verb")
    verbValue= verbBox.value

    adjectiveBox= document.getElementById("adjective")
    adjectiveValue= adjectiveBox.value

    adlibResult= "Last night I ate a "+ nounValue+ ", and today I just had to "+ verbValue+ ". What a "+ adjectiveValue+ " day !"

    if (titleValue == "" || nounValue == "" || verbValue == "" || adjectiveValue == ""){
        alert("Please fill in all fields")
    }
    else {
        let storyResult= document.getElementById("story_result")
        storyResult.innerHTML= adlibResult

        let mainTitle= document.getElementById("main_title")
        mainTitle.innerHTML= titleValue

        let formContainer= document.querySelectorAll(".adlib")
        for (let i= 0; i< formContainer.length; i ++){
            formContainer[i].innerHTML= ""
        }

        let sumbitButton= document.getElementById("submit_button")
        sumbitButton.remove()
    }
}
