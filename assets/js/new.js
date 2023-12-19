
const LightMode = document.querySelector(".lightMode")
const DarkMode = document.querySelector(".darkMode")
const changeMode = document.querySelector(".nav")

var toggle = true;
const toggleMode = () => {
    
    if (toggle == true){
        DarkMode.style.display = "none";
        LightMode.style.display = "flex";
        toggle = false;
    }else{
        LightMode.style.display = "none";
        DarkMode.style.display = "flex";
        toggle = true;
    }
}
changeMode.addEventListener('click', toggleMode)

