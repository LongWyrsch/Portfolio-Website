
const projects = {
    project1: {
        imageURL: 'media/projects_WineFestivalSchedule.png',
        name:  'Wine Festival Schedule',
        description: 'Using HTML, create a table to display a schedule.'
    },
    project2: {
        imageURL:'media/projects_NewYorkCityBlog.png',
        name: 'New York City Blog',
        description:'Restructured the site&#39;s HTML to add semantic elements.'
    },
    project3: {
        imageURL:'media/projects_Broadway.png',
        name: 'Broadway',
        description:'Change the navigation banner so that it sticks to the top when scrolling, and position existing element on the page.'
    },
    project4: {
        imageURL:'media/projects_PaintStore.png',
        name: 'Paint Store',
        description:'Color existing elements on the page using CSS.'
    },
    project5: {
        imageURL:'media/projects_Typography.png',
        name: 'Typography',
        description:'Added various font-families from google fonts to existing text.'
    },
    project6: {
        imageURL:'media/projects_TheSummit.png',
        name: 'The Summit',
        description:'Design links and buttons to reflect clickability and state.'
    },
    project7: {
        imageURL:'media/projects_FreshDealsBlueberries.png',
        name: 'Fresh Deals Blueberries',
        description:'Add breadcrumbs to the site.'
    },
    project8: {
        imageURL:'media/projects_BuildAWebsiteDesignSystem.png',
        name: 'Website Design System',
        description:'Design a system of text font, size, style, and colors to organize and unify elements of a website.'
    },
    project9: {
        imageURL:'media/projects_ToDoApp.png',
        name: 'ToDo App',
        description:'Fix the appearance of a ToDo app by reanrranging its elements using flexboxes.'
    },
    project10: {
        imageURL:'media/projects_TeaCozy.png',
        name: 'TeaCozy',
        description:'Fix the appearance of a website by reanrranging its elements using flexboxes.'
    },
    project11: {
        imageURL:'media/projects_PupSpa.png',
        name: 'PupSpa',
        description:'Fix the appearance of a website by rearranging it&#39;s elements using CSS grid.'
    },
    project12: {
        imageURL:'media/projects_TaskBoard.png',
        name: 'Task Board',
        description:'Fix the appearance of a website by rearranging it&#39;s elements using CSS grid.'
    },
    project13: {
        imageURL:'media/projects_ArchitectureBlog.png',
        name: 'Architecture Blog',
        description:'Fix the appearance of a website by rearranging it&#39;s elements using CSS grid.'
    },
    project14: {
        imageURL:'media/projects_TsunamiCoffee.png',
        name: 'Tsunami Coffee',
        description:'Change a website&#39;s CSS so that the elements reposition themselves according to the display size. This allows the website to be readable on different devices.'
    },
    project15: {
        imageURL:'media/projects_CompanyHomePage.png',
        name: 'Company Home Page',
        description:'Change a website&#39;s CSS so that the elements reposition themselves according to the display size. This allows the website to be readable on different devices.'
    },
    project16: {
        imageURL:'media/projects_ResponsiveClubWebsite.png',
        name: 'Responsive Club Website',
        description:'Change a website&#39;s CSS so that the elements reposition themselves according to the display size. This allows the website to be readable on different devices.'
    },
    project17: {
        imageURL:'media/projects_PianoKeys.png',
        name: 'Piano Keys',
        description:'Add some Javascript to an existing website to allow the user to interact with the site.'
    },
    project18: {
        imageURL:'media/projects_FormAStory.png',
        name: 'Form a Story',
        description:'Add HTML form elements to an existing website.'
    }
};


let randomProject = () => {
    let randProject = 'project' + (Math.floor(Math.random() * 17) + 1);
    let newURL = "url('" + projects[randProject].imageURL + "')";
    let newProjectName = projects[randProject].name;
    let newDescription = projects[randProject].description;
    // console.log("url('" + projects[randProject].imageURL + "')");
    document.getElementsByClassName('carousel')[0].style.backgroundImage = newURL;
    document.getElementsByClassName('projectName')[0].innerHTML = newProjectName;
    document.getElementsByClassName('description')[0].innerHTML = newDescription;
} 


randomProject();


const arrows = Array.from(document.querySelectorAll('.bracketLeft, .bracketRight'));

arrows.forEach(arrow => {
    arrow.addEventListener('click', e => {
        randomProject();
    });
});