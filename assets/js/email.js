function sendEmail() {
    Email.send({
        SecureToken: "5bf72bd7-0429-4b7a-b24d-c01e37cec604",
        To: 'wong.eason@outlook.com',
        From: 'madeasonwong@gmail.com',
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> <br> Email: " + document.getElementById("email").value
            + "<br> <br> Message: " + document.getElementById("message").value

    }).then(
        function (message) {
            if (message === 'OK') {
                alert('Message sent successfully!');
            } else {
                alert(message);
            }
        }
    );
}
