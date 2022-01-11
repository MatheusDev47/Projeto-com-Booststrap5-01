//Função texto digitalizado
function typeWriter(element){
    //Separa o texto letra por letra com o método split
    const textArray = element.innerHTML.split('')
    //Zera o texto pra começar vazio
    element.innerHTML = ''
    //Aplica um forEach no texto separado, para que percorra letra por letra
    textArray.forEach((letter, i)=>{
        //setTimeout para que o efeito ocorra de tempo em tempo de acordo com o indice de cada letra    
        setTimeout(() => element.innerHTML += letter, 75 * i)
    })
}
//Cria uma constante selecionando o texto que deseja
const text = document.getElementById('mainText');
//Chamada da função
typeWriter(text);

/*
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
*/

const targetAnimation = document.querySelectorAll('[data-anime]')
const targetAnimationFade = document.querySelectorAll('[data-fade]')
const classAnimation = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetAnimation.forEach((element) =>{
        if (windowTop > element.offsetTop) {
            element.classList.add(classAnimation)
        }else {
            element.classList.remove(classAnimation)
        }
    })
}

if (targetAnimation.length) {
    window.addEventListener('scroll', () =>{
        animeScroll();
    })
}

function animeFade() {
    targetAnimationFade.forEach((element) =>{
        window.addEventListener('load', ()=>{
            element.classList.add(classAnimation)
        })
    })
}

animeFade()



