const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,  
  auth: {
    user: "Mary10@list.ru", // <--- ваша почта
    pass: "AhyftfjUyqdAyZUawurW", //Введите пароль для внешнего приложения!!!!
  },
});

module.exports = transporter