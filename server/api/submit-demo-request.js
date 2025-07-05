const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || 'your-spreadsheet-id';
const RANGE = 'Sheet1!A:G'; // Adjust range as needed

// Email configuration
const ADMIN_EMAIL = 'mr.deep4k@gmail.com';
const SMTP_CONFIG = {
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'your-email@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password'
  }
};

// Create transporter
const transporter = nodemailer.createTransporter(SMTP_CONFIG);

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

async function addToGoogleSheets(formData) {
  try {
    const values = [
      [
        new Date().toISOString(),
        formData.name,
        formData.email,
        formData.phone,
        formData.company,
        formData.product,
        formData.message
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });

    return true;
  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    return false;
  }
}

async function sendEmails(formData) {
  // Email to user
  const userEmailOptions = {
    from: SMTP_CONFIG.auth.user,
    to: formData.email,
    subject: `Demo Request Confirmation - ${formData.product}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #022140, #005343); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Demo Request Confirmed!</h1>
        </div>
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #022140;">Hello ${formData.name},</h2>
          <p>Thank you for your interest in <strong>${formData.product}</strong>!</p>
          <p>We have received your demo request and our team will contact you within 24 hours to schedule your personalized demonstration.</p>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #005343; margin-top: 0;">Your Request Details:</h3>
            <p><strong>Product:</strong> ${formData.product}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
          </div>
          
          <p>If you have any immediate questions, feel free to contact us at:</p>
          <p>📧 Info@finamite.in<br>📞 +91 9592500362</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>Finamite Solutions Team</strong></p>
        </div>
      </div>
    `
  };

  // Email to admin
  const adminEmailOptions = {
    from: SMTP_CONFIG.auth.user,
    to: ADMIN_EMAIL,
    subject: `New Demo Request - ${formData.product}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #022140, #005343); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Demo Request</h1>
        </div>
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #022140;">Demo Request Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
            <p><strong>Product Interest:</strong> ${formData.product}</p>
            ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="color: #005343; font-weight: bold;">Please follow up within 24 hours.</p>
        </div>
      </div>
    `
  };

  try {
    await Promise.all([
      transporter.sendMail(userEmailOptions),
      transporter.sendMail(adminEmailOptions)
    ]);
    return true;
  } catch (error) {
    console.error('Error sending emails:', error);
    return false;
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Add to Google Sheets
    const sheetsSuccess = await addToGoogleSheets(formData);
    
    // Send emails
    const emailSuccess = await sendEmails(formData);

    if (sheetsSuccess && emailSuccess) {
      res.status(200).json({ 
        success: true, 
        message: 'Demo request submitted successfully' 
      });
    } else {
      res.status(500).json({ 
        error: 'Partial failure - some operations may not have completed' 
      });
    }
  } catch (error) {
    console.error('Error processing demo request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};