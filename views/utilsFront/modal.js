document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Muestra el modal al cargar la página

    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function () {
         modal.style.display = 'none'; // Oculta el modal al hacer clic en la "X"
    });

  
});