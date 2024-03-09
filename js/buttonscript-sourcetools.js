const myButton = document.querySelector("#myButton1");
const sourcetools = document.querySelector("#sourcetools");

myButton.addEventListener("click", () => {

    if(sourcetools.style.visibility == "hidden"){
        sourcetools.style.visibility = "visible";
    }
    else{
        sourcetools.style.visibility = "hidden";
    }
})