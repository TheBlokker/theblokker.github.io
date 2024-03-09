const myButton2 = document.querySelector("#myButton2");
const goldsourcetools = document.querySelector("#goldsourcetools");

myButton2.addEventListener("click", () => {

    if(goldsourcetools.style.visibility == "hidden"){
        goldsourcetools.style.visibility = "visible";
    }
    else{
        goldsourcetools.style.visibility = "hidden";
    }
})