(() => {
    // LocalStorageのキー名
    const EMAIL_KEY = 'form_email';
    const PASSWORD_KEY = 'form_password';

    const $email = document.getElementById('js-email');
    const $password = document.getElementById('js-password');

    saveCredential = () => {
        const email = $email.value;
        const password = $password.value;
        localStorage.setItem(EMAIL_KEY, email);
        localStorage.setItem(PASSWORD_KEY, password);
    };

    loadCredential = () => {
        const email = localStorage.getItem(EMAIL_KEY);
        const password = localStorage.getItem(PASSWORD_KEY);
        $email.value = email;
        $password.value = password;
    };

    document.getElementById('js-button').addEventListener('click', saveCredential);
    window.addEventListener('load', loadCredential);
})();
