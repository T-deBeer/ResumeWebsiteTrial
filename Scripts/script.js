document.getElementById("send").addEventListener("click", function () {
  var nodemailer = Require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "g4equinox@gmail.com",
      pass: "Tiaan@1007",
    },
  });

  var mailOptions = {
    from: document.getElementById("mailer").innerText,
    to: "tdebeer.za@gmail.com",
    subject: "Contact Message via Resume Site",
    text: document.getElementById("message").innerText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
