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

