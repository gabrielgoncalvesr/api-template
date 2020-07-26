var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

const sendEmail = async ({ to, subject, content }) => {
    const params = {
        to,
        subject,
        text: content,
        from: process.env.MAIL_EMAIL
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(params, async (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

module.exports = { sendEmail };