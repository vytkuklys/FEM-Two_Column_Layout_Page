
const inputBottom = document.querySelector(".early-access__input-msg");
const inputTop = document.querySelector(".get-started__div-msg");
const inputBorder = document.getElementsByTagName("input")

function showMessage(topOrBottom){
    switch(topOrBottom){
        case "top":
            inputTop.style.display = "block";
            inputBorder[0].classList.add("get-started__div__input--border");
            break;
        case "bottom":
            inputBottom.style.display = "block";
            inputBorder[1].classList.add("early-access__input--border");
            break;
        default:
            break;
    }
}