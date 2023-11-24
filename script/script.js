//----------------------DOM Elements----------------------//

const spanResult = document.querySelector('#result');
const button = document.querySelector('.btn-generator');
const copyPassword = document.querySelector('#copy')
const copyCard = document.querySelector('.copy-card')

//-------------------------------------------------------//

//----------------------CreatCpfFunction---------------//

function createCPF(){
    const cpfNumbers = '0123456789'
    let endResult = ''
    
    for (let i = 0; i < 11; i++) {
        endResult += cpfNumbers[Math.floor(Math.random() * cpfNumbers.length)];

        // Adiciona ponto após o segundo e quinto dígito
        if (i === 2 || i === 5) {
            endResult += '.';
        }

        // Adiciona traço após o oitavo dígito
        if (i === 8) {
            endResult += '-';
        }
    }
    spanResult.textContent = endResult
}

button.addEventListener('click',createCPF)

//--------------copyEvent--------------//

copyPassword.addEventListener('click',()=>{
    navigator.clipboard.writeText(result.textContent)
    copyCard.classList.add('flex')
    setInterval(() => {
        copyCard.classList.remove('flex')
    }, 1500);
    
});