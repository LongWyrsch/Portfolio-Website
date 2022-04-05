// const projectRow = Array.from(document.querySelectorAll('.name, .purpose, .link, .screenshot'));

const projects = Array.from(document.querySelectorAll('.project'));

projects.forEach(project => {
    project.addEventListener('mouseenter', e => {
        let projectName = project.className.split(' ').pop();
        let imageHeight = document.querySelector('.' + projectName + ' img').height + 'px';
        console.log(imageHeight);
        document.getElementsByClassName(projectName + ' screenshot')[0].style.height = imageHeight;
        // let linkTarget = document.getElementsByClassName(projectName + ' name')[0];
    });
});

projects.forEach(project => {
    project.addEventListener('mouseleave', e => {
        let projectName = project.className.split(' ').pop();
        document.getElementsByClassName(projectName + ' screenshot')[0].style.height = "0";
    }); 
});
