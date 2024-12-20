const loginButton = document.querySelector('.login-button');
const loginForm = document.getElementById('loginForm');
const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector('.overlay2');
const submitButton = document.getElementById('submitButton');
const sendButton = document.querySelector('.send-button');
const sendForm = document.getElementById('sendForm');

// Открытие формы входа
loginButton.addEventListener('click', () => {
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
});

// Закрытие формы входа
document.querySelector('.close-button').addEventListener('click', () => {
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
});

// Закрытие формы при клике на оверлей
overlay.addEventListener('click', () => {
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
});

// Открытие формы входа
sendButton.addEventListener('click', () => {
    sendForm.style.display = 'block';
    overlay2.style.display = 'block';
});

// Закрытие формы входа
document.querySelector('.close-button2').addEventListener('click', () => {
    sendForm.style.display = 'none';
    overlay2.style.display = 'none';
});

// Закрытие формы при клике на оверлей
overlay2.addEventListener('click', () => {
    sendForm.style.display = 'none';
    overlay2.style.display = 'none';
});


// Ввод данных
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


// Автозаполнение данных для входа
document.addEventListener('DOMContentLoaded', () => {
    usernameInput.value = 'user'; // Предустановленное имя пользователя
    passwordInput.value = 'password'; // Предустановленный пароль

    updateSubmitButtonState();
});

// Функция обновления состояния кнопки
function updateSubmitButtonState() {
    const isFilled = usernameInput.value && passwordInput.value;
    submitButton.disabled = !isFilled;

    if (isFilled) {
        submitButton.classList.add('active');
    } else {
        submitButton.classList.remove('active');
    }
}

// Обработчики событий для ввода
usernameInput.addEventListener('input', updateSubmitButtonState);
passwordInput.addEventListener('input', updateSubmitButtonState);

// Функция для проверки введённых данных
function checkLoginCredentials(username, password) {
    return username === 'user' && password === 'password';
}

// Обработчик отправки формы
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkLoginCredentials(username, password)) {
        window.location.href = 'Main.html';
    } else {
        alert('Неверные данные для входа');
    }
});

const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const content = this.closest('.page-block').querySelector('.content');
        const pageBlock = this.closest('.page-block');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            pageBlock.style.maxHeight = '400px';
            button.style.transform = 'rotate(180deg)';

        } else {
            content.style.display = 'none';
            pageBlock.style.maxHeight = '150px';
            button.style.transform = 'rotate(0deg)';
        }
    });
});
