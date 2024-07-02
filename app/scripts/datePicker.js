const dateInput = document.getElementById("start");

dateInput.addEventListener("click", () => {
    console.log("Start");
    dateInput.showPicker();
});
