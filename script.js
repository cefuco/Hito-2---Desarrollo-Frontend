document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Aquí agregar lógica para el registro (llamada a API, validación, etc.)
    alert('Usuario registrado exitosamente');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Aquí agregar lógica para el inicio de sesión (llamada a API, validación, etc.)
    alert('Inicio de sesión exitoso');
    window.location.href = 'gallery.html';
});

document.getElementById('createPostForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Aquí agregar lógica para crear una publicación (llamada a API, validación, etc.)
    alert('Publicación creada exitosamente');
    window.location.href = 'gallery.html';
});

// Aquí puedes cargar las publicaciones en la galería dinámicamente

