function showContent(tab) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
}

function showContent(id, event) {
    event.preventDefault();
    const contents = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav a');

    contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = 0;
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    document.getElementById(id).style.opacity = 1;
    document.querySelector(`.nav a[onclick="showContent('${id}', event)"]`).classList.add('active');
}