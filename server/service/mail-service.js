const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      secure: false,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMPT_USER,
      to,
      subject: 'activation an account ' + process.env.API_URL,
      text: '',
      html: ` 
      <div>
        <h1>For activation click on this link</h1>
        <a href='${link}'>${link}</a>
      </div>
      
      `,
    });
  }
}

module.exports = new MailService();
