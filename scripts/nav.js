const navButtons = Array.from(document.getElementsByClassName('navButtons'));

navButtons.forEach(button => {
    button.addEventListener('mouseenter', e => {
        button.style.background = '#77C9D4' ;
        button.childNodes[0].style.color = '#015249';
    });
});

navButtons.forEach(button => {
    button.addEventListener('mouseleave', e => {
        button.style.background = '#015249';
        button.childNodes[0].style.color = 'white';
    }); 
});
