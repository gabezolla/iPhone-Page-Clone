const colorChoose = document.querySelectorAll(".colorChoose");

console.log(colorChoose);

colorChoose.forEach((color)=> {
    color.addEventListener("click", () => {

        console.log(color);
        colorChoose.forEach((allColor) => {
            allColor.classList.remove('selected');
        });

        color.classList.add('selected');
        
        console.log('Click');
        document.querySelector('.capacity').style.opacity = 1;
    });

})

