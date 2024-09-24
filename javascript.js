
const skillsContainer = document.querySelector('.skills-container');

let scrollAmount = 0;
let autoScrollInterval;

function autoScrollSkills() {
    autoScrollInterval = setInterval(() => {
        if (scrollAmount <= skillsContainer.scrollWidth - skillsContainer.clientWidth) {
            skillsContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
            scrollAmount += 220;
        } else {
            scrollAmount = 0;
        }
    }, 2000);
}

skillsContainer.addEventListener('mouseover', () => {
    clearInterval(autoScrollInterval);
});

skillsContainer.addEventListener('mouseout', () => {
    autoScrollSkills();
});

autoScrollSkills();

console.log('JavaScript carregado');

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

function mostrarMensagem() {
    document.getElementById('customAlert').style.display = 'block';
}


document.querySelector('.close-alert').onclick = function() {
    document.getElementById('customAlert').style.display = 'none';
};


window.onclick = function(event) {
    let modal = document.getElementById('customAlert');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};



function mostrarMensagem1() {
    document.getElementById('customAlert1').style.display = 'block';
}


document.querySelector('.close-alert1').onclick = function() {
    document.getElementById('customAlert1').style.display = 'none';
};


window.onclick = function(event) {
    let modal = document.getElementById('customAlert1');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
