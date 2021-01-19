const colorChoose = document.querySelectorAll(".colorChoose");
const phoneImage = document.querySelector('#iphone-image');
const continueContainer = document.querySelector('.price-info')

function createElement(tag, txt) {
    const el = document.createElement(tag);
    const text = document.createTextNode(txt);
    el.appendChild(text);
    return el;
}

// CHOOSE IPHONE COLOR
colorChoose.forEach((color)=> {
    color.addEventListener("click", () => {

        colorChoose.forEach((allColor) => {
            allColor.classList.remove('selected');
        });

        color.classList.add('selected');        
        if(color.classList.contains('white')) phoneImage.src = 'iphone11-white.png';     
        if(color.classList.contains('black')) phoneImage.src = 'iphone11-black.png';        
        if(color.classList.contains('green')) phoneImage.src = 'iphone11-green.png';        
        if(color.classList.contains('yellow')) phoneImage.src = 'iphone11-yellow.png';        
        if(color.classList.contains('purple')) phoneImage.src = 'iphone11-purple.png';        
        if(color.classList.contains('red')) phoneImage.src = 'iphone11-red.png';
        
        document.querySelector('.capacity').style.opacity = 1;
    });
});


// CHOOSE CAPACITY
const capacityChoose = document.querySelectorAll(".memoryChoose");

function createPriceInfo() {

    while (continueContainer.firstChild) {
        continueContainer.removeChild(continueContainer.firstChild);
    }

    if(capacityChoose.id = '64gb') {
        const price = createElement('h1', 'R$ 5.699,00');
        const installment = createElement('p', 'Em até 12x de R$ 474,92');
        const fullPayment = createElement('p', 'R$ 5.129,10 à vista (10% de desconto)');
        continueContainer.appendChild(price);
        continueContainer.appendChild(installment);
        continueContainer.appendChild(fullPayment);
        continueContainer.appendChild(createElement('div', " "));
    }

    if(capacityChoose.id = '128gb') {
        const price = createElement('h1', 'R$ 6.199,00');
        const installment = createElement('p', 'Em até 12x de R$ 516,58');
        const fullPayment = createElement('p', 'R$ 5.579,10 à vista (10% de desconto)');
        continueContainer.appendChild(price);
        continueContainer.appendChild(installment);
        continueContainer.appendChild(fullPayment);
        continueContainer.appendChild(createElement('div', " "));
    }

    if(capacityChoose.id = '264gb') {
        const price = createElement('h1', 'R$ 7.199,00');
        const installment = createElement('p', 'Em até 12x de R$ 599,92');
        const fullPayment = createElement('p', 'R$ 6.479,10 à vista (10% de desconto)');
        continueContainer.appendChild(price);
        continueContainer.appendChild(installment);
        continueContainer.appendChild(fullPayment);
        continueContainer.appendChild(createElement('div', " "));
    }
}

capacityChoose.forEach((capacity)=> {

    capacity.addEventListener("click", () => {
        
        capacityChoose.forEach((allOptions) => {
            allOptions.classList.remove('selected');
        });

        capacity.classList.add('selected');
        
        while (continueContainer.firstChild) {
            continueContainer.removeChild(continueContainer.firstChild);
        }
    
        if(capacity.id == '64gb') {
            const price = createElement('h1', 'R$ 5.699,00');
            const installment = createElement('p', 'Em até 12x de R$ 474,92');
            const fullPayment = createElement('p', 'R$ 5.129,10 à vista (10% de desconto)');
            continueContainer.appendChild(price);
            continueContainer.appendChild(installment);
            continueContainer.appendChild(fullPayment);
            continueContainer.appendChild(createElement('div', " "));
        }
    
        else if(capacity.id == '128gb') {
            const price = createElement('h1', 'R$ 6.199,00');
            const installment = createElement('p', 'Em até 12x de R$ 516,58');
            const fullPayment = createElement('p', 'R$ 5.579,10 à vista (10% de desconto)');
            continueContainer.appendChild(price);
            continueContainer.appendChild(installment);
            continueContainer.appendChild(fullPayment);
            continueContainer.appendChild(createElement('div', " "));
        }
    
        else if(capacity.id == '256gb') {
            const price = createElement('h1', 'R$ 7.199,00');
            const installment = createElement('p', 'Em até 12x de R$ 599,92');
            const fullPayment = createElement('p', 'R$ 6.479,10 à vista (10% de desconto)');
            continueContainer.appendChild(price);
            continueContainer.appendChild(installment);
            continueContainer.appendChild(fullPayment);
            continueContainer.appendChild(createElement('div', " "));
        }

    });

});








