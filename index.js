const colorChoose = document.querySelectorAll(".colorChoose");
const phoneImage = document.querySelector('#iphone-image');

colorChoose.forEach((color)=> {
    color.addEventListener("click", () => {

        console.log(color);
        colorChoose.forEach((allColor) => {
            allColor.classList.remove('selected');
        });

        color.classList.add('selected');
        
        if(color.classList.contains('white')) phoneImage.src = 'iphone11-white.png';
        
        document.querySelector('.capacity').style.opacity = 1;
    });

})

