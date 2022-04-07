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


const logoButtons = Array.from(document.getElementsByClassName('logo'));

logoButtons.forEach(button => {
    button.addEventListener('click', e => {
        window.location.href = 'index.html'
    });
});


const burgerButton = document.getElementsByClassName('hamburgerMenu')[0];
burgerButton.addEventListener('click', e => {
    // burgerButton.style.background = 'yellow';
    document.getElementsByClassName('smallscreen')[0].style.display = 'block';
});

document.addEventListener("click", function(event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".hamburgerMenu")) return;
    // If user clicks outside the element, hide it!
    document.getElementsByClassName('smallscreen')[0].style.display = 'none';
});