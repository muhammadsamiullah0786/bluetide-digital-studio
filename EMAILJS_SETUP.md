# EmailJS Setup Guide

This guide walks you through setting up EmailJS for your contact form to send messages directly to your Gmail account: **muhammadsamiu560@gmail.com**

---

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
2. Sign up with your Google account or email
3. Verify your email address

---

## Step 2: Connect Gmail Service

1. In the EmailJS dashboard, go to **Email Services** section
2. Click **Add New Service**
3. Select **Gmail** from the list
4. Click **Connect Account** and authorize with your Google account (**muhammadsamiu560@gmail.com**)
5. **Copy the Service ID** (e.g., `service_abc123`) - you'll need this later

---

## Step 3: Create Email Template

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use the following template configuration:

### Template Name
```
Contact Form Submission
```

### Template Content
Replace the default template with this:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Message</title>
</head>
<body>
    <h2>New Message from BlueTide Portfolio</h2>
    
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    
    <hr>
    
    <h3>Message:</h3>
    <p>{{message}}</p>
    
    <hr>
    
    <p style="color: #666; font-size: 12px;">
        This email was sent from your portfolio contact form at BlueTide Digital Studio.
    </p>
</body>
</html>
```

### Template Settings
- **To Email:** `{{to_email}}` (or you can hardcode: `muhammadsamiu560@gmail.com`)
- **From Name:** `{{from_name}}`
- **From Email:** Leave as default EmailJS email  
- **Subject:** `New Contact Form Message: {{subject}}`
- **Reply To:** `{{from_email}}`

4. Click **Save** and **copy the Template ID** (e.g., `template_xyz789`)

---

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. It looks like: `aBcD1234eFgH5678`
4. **Copy this key**

---

## Step 5: Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcD1234eFgH5678
```

**Important:** Make sure to replace:
- `service_abc123` with your **Service ID** from Step 2
- `template_xyz789` with your **Template ID** from Step 3
- `aBcD1234eFgH5678` with your **Public Key** from Step 4

---

## Step 6: Restart Development Server

After updating `.env.local`, restart your dev server:

```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

---

## Step 7: Test the Contact Form

1. Go to your website: http://localhost:3000/#contact
2. Fill out the contact form with test data:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Subject:** Testing EmailJS
   - **Message:** This is a test message
3. Click **Send Message**
4. You should see: ✅ "Message sent successfully!"
5. Check your Gmail inbox (**muhammadsamiu560@gmail.com**) for the email

---

## Troubleshooting

### ❌ "Email service not configured"
- Make sure `.env.local` file exists in the project root
- Verify all three environment variables are set correctly
- Restart your dev server after changes

### ❌ "Failed to send message"
- Check browser console for detailed error
- Verify your Service ID, Template ID, and Public Key are correct
- Make sure your Gmail account is connected in EmailJS dashboard
- Check EmailJS dashboard for error logs

### ❌ Email not received
- Check your Gmail spam/junk folder
- Verify the template has correct email address
- Check EmailJS dashboard → Email Services → make sure service is active
- Verify template variables match the form field names

---

## Security Notes

✅ **Safe:** All credentials use `NEXT_PUBLIC_` prefix because EmailJS requires client-side access
✅ **Protected:** The `.env.local` file is in `.gitignore` and won't be committed to Git
✅ **Limited:** EmailJS has built-in rate limiting to prevent abuse
✅ **Free Tier:** EmailJS free plan includes 200 emails/month

---

## Form Field Mapping

The contact form sends these fields to EmailJS:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| name       | `{{from_name}}`  | Sender's name |
| email      | `{{from_email}}` | Sender's email address |
| subject    | `{{subject}}`    | Message subject |
| message    | `{{message}}`    | Message content |
| (hardcoded)| `{{to_email}}`   | Your Gmail (muhammadsamiu560@gmail.com) |

---

## Next Steps

After successful setup:

1. ✅ Test with real data
2. ✅ Customize the email template design if needed
3. ✅ Set up email notifications in Gmail if desired
4. ✅ Monitor usage in EmailJS dashboard
5. ✅ Consider upgrading EmailJS plan if you exceed 200 emails/month

---

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Check your EmailJS dashboard for logs and errors

---

**Setup Complete! 🎉**

Your contact form is now connected to your Gmail account and will send messages directly to **muhammadsamiu560@gmail.com**.
