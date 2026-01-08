const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

console.log('🚀 Starting ApplyNext server...');
console.log('Environment check:');
console.log('- SUPABASE_URL:', process.env.VITE_SUPABASE_URL ? '✅ Set' : '❌ Missing');
console.log('- SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ Missing');
console.log('- SMTP_HOST:', process.env.SMTP_HOST ? '✅ Set' : '❌ Missing');
console.log('- SMTP_USER:', process.env.SMTP_USER ? '✅ Set' : '❌ Missing');

// Initialize Supabase client
let supabase;
try {
  if (process.env.VITE_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
    console.log('✅ Supabase client initialized successfully');
  } else {
    console.log('⚠️  Supabase client not initialized - missing credentials');
  }
} catch (error) {
  console.error('❌ Failed to initialize Supabase client:', error.message);
}

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Test Supabase connection
app.get('/api/test-supabase', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('count(*)')
      .limit(1);

    if (error) {
      console.error('Supabase test error:', error);
      return res.status(500).json({
        success: false,
        message: 'Supabase connection failed',
        error: error.message
      });
    }

    res.json({
      success: true,
      message: 'Supabase connection successful',
      data: data
    });
  } catch (error) {
    console.error('Supabase test error:', error);
    res.status(500).json({
      success: false,
      message: 'Supabase connection failed',
      error: error.message
    });
  }
});

// Test SMTP connection
app.get('/api/test-smtp', async (req, res) => {
  try {
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: 'SMTP transporter not configured'
      });
    }

    // Verify SMTP connection
    await transporter.verify();
    
    res.json({
      success: true,
      message: 'SMTP connection successful'
    });
  } catch (error) {
    console.error('SMTP test error:', error);
    res.status(500).json({
      success: false,
      message: 'SMTP connection failed',
      error: error.message
    });
  }
});

// Email transporter configuration
let transporter;
try {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('✅ Email transporter configured successfully');
  } else {
    console.log('⚠️  Email transporter not configured - missing SMTP credentials');
  }
} catch (error) {
  console.error('❌ Failed to configure email transporter:', error.message);
}

// Partner registration endpoint
app.post('/api/register-partner', async (req, res) => {
  try {
    const formData = req.body;
    
    if (!supabase) {
      return res.status(500).json({
        success: false,
        message: 'Database connection not available. Please check server configuration.'
      });
    }
    
    // Store registration in Supabase
    const { data: registration, error: dbError } = await supabase
      .from('registrations')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          country: formData.country,
          city: formData.city,
          phone: formData.phone,
          company_name: formData.companyName,
          business_type: formData.businessType,
          role: formData.role,
          experience: formData.experience,
          countries: formData.countries,
          source: formData.source,
          consent: formData.consent,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error details:', {
        message: dbError.message,
        details: dbError.details,
        hint: dbError.hint,
        code: dbError.code
      });
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to save registration. Please try again.',
        error: dbError.message
      });
    }

    console.log('Registration saved to database:', registration.id);

    // Send welcome email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to ApplyNext</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1A2E5F, #17A2B8); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .step { background: white; margin: 15px 0; padding: 20px; border-radius: 8px; border-left: 4px solid #17A2B8; }
          .step-number { background: #17A2B8; color: white; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; }
          .cta-button { background: #17A2B8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 5px; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Welcome to ApplyNext!</h1>
            <p>Your trusted global admissions partner</p>
          </div>
          
          <div class="content">
            <p>Hi <strong>${formData.firstName}</strong>,</p>
            
            <p>Thank you for registering with ApplyNext – your trusted global admissions partner. 🎉</p>
            
            <p>We've received your application and our team will review it shortly. An account manager will reach out within 24–48 hours to guide you through the next steps.</p>
            
            <h3>What happens next:</h3>
            
            <div class="step">
              <div style="display: flex; align-items: flex-start;">
                <span class="step-number">1</span>
                <div>
                  <h4 style="margin: 0 0 10px 0;">Profile Review</h4>
                  <p style="margin: 0;">Our team verifies your details.</p>
                </div>
              </div>
            </div>
            
            <div class="step">
              <div style="display: flex; align-items: flex-start;">
                <span class="step-number">2</span>
                <div>
                  <h4 style="margin: 0 0 10px 0;">Welcome Onboarding</h4>
                  <p style="margin: 0;">You'll receive a welcome pack and login instructions (if approved).</p>
                </div>
              </div>
            </div>
            
            <div class="step">
              <div style="display: flex; align-items: flex-start;">
                <span class="step-number">3</span>
                <div>
                  <h4 style="margin: 0 0 10px 0;">Start Recruiting</h4>
                  <p style="margin: 0;">Begin connecting students to 500+ top institutions worldwide and enjoy up to 80% commissions.</p>
                </div>
              </div>
            </div>
            
            <h3>📌 In the meantime:</h3>
            <p>
              <a href="#" class="cta-button">Explore Partner Institutions</a>
              <a href="#" class="cta-button">Download Partner Guide</a>
            </p>
            
            <p>If you have questions, contact us at:</p>
            <p>
              ✉️ <a href="mailto:partners@applynext.com">partners@applynext.com</a><br>
              📱 WhatsApp Support: +92-XXX-XXXXXXX
            </p>
            
            <p><strong>We're excited to work with you!</strong></p>
            
            <p>Best regards,<br>
            <strong>The ApplyNext Team</strong></p>
          </div>
          
          <div class="footer">
            <p>© 2025 ApplyNext. All rights reserved.</p>
            <p>This email was sent to ${formData.email}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@applynext.com',
      to: formData.email,
      subject: 'Welcome to ApplyNext 🚀',
      html: emailHtml,
    };

    if (transporter) {
      try {
        const emailResult = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', emailResult.messageId);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the registration if email fails
        return res.status(200).json({ 
          success: true, 
          message: 'Registration successful but email sending failed. Please contact support.',
          registrationId: registration.id,
          emailError: true
        });
      }
    } else {
      console.warn('Email transporter not configured, skipping email');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Registration successful and welcome email sent!',
      registrationId: registration.id
    });

  } catch (error) {
    console.error('Registration error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      success: false, 
      message: 'Registration failed. Please try again.',
      error: error.message
    });
  }
});

// Get all registrations (for admin purposes)
app.get('/api/registrations', async (req, res) => {
  try {
    const { data: registrations, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch registrations' 
      });
    }

    res.json({
      success: true,
      data: registrations,
      count: registrations.length
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error occurred' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`🔗 Test endpoints:`);
  console.log(`   - Health: http://localhost:${PORT}/api/health`);
  console.log(`   - Supabase: http://localhost:${PORT}/api/test-supabase`);
  console.log(`   - SMTP: http://localhost:${PORT}/api/test-smtp`);
});