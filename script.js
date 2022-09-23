/*Script para mudar o  esquema de cores*/
'use strict';

const btnTroca = document.getElementById('Changer');
const configUser = window.matchMedia('(prefers-color-scheme:dark)');
const localConfig= localStorage.getItem('theme');

if (localConfig === 'dark') {
    document.body.classList.add('tema-escuro');
} else if (localConfig === 'light') {
    document.body.classList.add('tema-claro');
}


btnTroca.addEventListener('click', () => {
    let themeColor;
    
    if(configUser.matches){
        document.body.classList.toggle('tema-claro');
        themeColor = document.body.classList.contains('tema-claro') ? 'light' : 'dark'
    }
    else {
        document.body.classList.toggle('tema-escuro');

        themeColor = document.body.classList.contains('tema-escuro') ? 'dark' : 'light'
    }
   
    localStorage.setItem('theme', themeColor)


    console.log('Tema atual: ' + themeColor);
});

