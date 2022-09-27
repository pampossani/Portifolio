var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit',(event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
})

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw';
           navigationHeader.style.animationName = 'showSidebar';
           content.style.filter='blur(2px)';

    }
    else{
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter='';
    }

}

function closeSidebar()
{
    if(showSidebar)
    {
        toggleSidebar();
    }
 
}

window.addEventListener('resize',function(event){
    if(window.innerWidth > 768 && showSidebar)
    {
        toggleSidebar();
    }

})


function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }
    else{
        removeError(0);
    }
                        }

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';

}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else{
        removeError(1);
    }

}



