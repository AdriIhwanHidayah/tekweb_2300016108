// Menangani perubahan warna latar belakang
const bgColorSelect = document.getElementById('bg-color');
bgColorSelect.addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

// Menangani perubahan ukuran font
const fontSizeRange = document.getElementById('font-size');
const fontSizeValue = document.getElementById('font-size-value');
fontSizeRange.addEventListener('input', function() {
    document.body.style.fontSize = `${this.value}px`;
    fontSizeValue.textContent = `${this.value}px`;
});


// Menangani toggle mode gelap
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Menangani perubahan gaya font
const fontStyleSelect = document.getElementById('font-style');
fontStyleSelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});

// Menangani penambahan to-do item
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const courseInput = document.getElementById('course');
    const dateInput = document.getElementById('date');

    // Buat elemen list baru
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
        <span>${courseInput.value} - ${dateInput.value}</span>
        <button class="delete-btn">X</button>
    `;

    // Tambahkan item ke daftar
    todoList.appendChild(li);

    // Hapus input setelah ditambahkan
    courseInput.value = '';
    dateInput.value = '';

    // Menangani penghapusan item
    li.querySelector('.delete-btn').addEventListener('click', function() {
        todoList.removeChild(li);
    });
});
