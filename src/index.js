window.onload = function () {

    window.document.getElementById('preloader').style.display = "none";

    const ajaxSend = (formData) => {

        fetch('mail.php',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
                body: formData
            })
            .then(response => alert('Сообщение отправлено'))
            .catch(error => console.error(error));
    };

    const form = document.querySelector('.mailer');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        ajaxSend(formData);
        this.reset();
    });
};