# EmailJS Contact Form - Troubleshooting Guide

## ⚠️ Current Issue: Contact Form Not Configured

Your contact form requires EmailJS credentials to send emails. Until configured, users will see a warning message and can email you directly at **muhammadsamiu560@gmail.com**.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create FREE EmailJS Account
1. Visit: https://dashboard.emailjs.com/sign-up
2. Sign up with Google or email
3. Verify your email address

### Step 2: Connect Gmail Service
1. In EmailJS dashboard, click **Email Services** → **Add New Service**
2. Select **Gmail** from the list
3. Click **Connect Account**
4. Login with your Gmail: **muhammadsamiu560@gmail.com**
5. Authorize EmailJS to send emails
6. **Copy the Service ID** (looks like: `service_abc123`)
   - You'll find this in the service list after connecting

**Where to find Service ID:**
- EmailJS Dashboard → Email Services → Click your Gmail service → Copy the Service ID

---

### Step 3: Create Email Template
1. Click **Email Templates** → **Create New Template**
2. Name it: **Contact Form Submission**
3. Configure the template:

**Email Subject:**
```
New Contact: {{subject}}
```

**Email Body (HTML):**
```html
<h2>New Contact Form Message</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<hr>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>

<p style="color: #666; font-size: 12px;">
  Sent from BlueTide Digital Studio Portfolio
</p>
```

**Template Settings:**
- **To Email:** `{{to_email}}` (or hardcode: muhammadsamiu560@gmail.com)
- **From Name:** `{{from_name}}`
- **Reply To:** `{{from_email}}`

4. Click **Save**
5. **Copy the Template ID** (looks like: `template_xyz789`)

**Where to find Template ID:**
- EmailJS Dashboard → Email Templates → Click your template → Copy the Template ID

---

### Step 4: Get Your Public Key
1. Click **Account** (top right) → **General**
2. Find **Public Key** section (also called User ID)
3. **Copy the Public Key** (looks like: `aBcD1234eFgH5678`)

**Where to find Public Key:**
- EmailJS Dashboard → Account → General → Public Key section

---

### Step 5: Update Environment Variables

Open `.env.local` in your project root and replace with YOUR actual credentials:

```env
# EmailJS Configuration
# Get these from https://dashboard.emailjs.com/

# Your EmailJS Service ID (from Step 2)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123

# Your EmailJS Template ID (from Step 3)
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789

# Your EmailJS Public Key (from Step 4)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=aBcD1234eFgH5678

# Your Contact Email (where messages will be sent)
NEXT_PUBLIC_CONTACT_EMAIL=muhammadsamiu560@gmail.com
```

**⚠️ Important:**
- Replace `service_abc123`, `template_xyz789`, `aBcD1234eFgH5678` with YOUR actual values
- Do NOT keep the placeholder text like "your_service_id_here"
- Keep the `NEXT_PUBLIC_` prefix - it's required for client-side access

---

### Step 6: Restart Development Server

After updating `.env.local`, restart your server:

```bash
# Stop the current server (Ctrl + C in terminal)

# Restart the server
npm run dev
```

**Why restart?**  
Environment variables are loaded when the server starts. Changes to `.env.local` require a restart.

---

## ✅ Verification

After setup, test the contact form:

1. Go to: http://localhost:3000/#contact
2. Fill out the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Subject:** Testing EmailJS
   - **Message:** This is a test message
3. Click **Send Message**
4. You should see: ✅ "Message sent successfully!"
5. Check your Gmail inbox for the test email

**Expected behavior:**
- ✅ No yellow warning box appears
- ✅ Form submits successfully
- ✅ Success toast notification shows
- ✅ Email arrives in Gmail within seconds

---

## 🐛 Common Issues & Solutions

### Issue 1: "Contact form is not configured yet"

**Cause:** Environment variables are missing or contain placeholder values

**Solution:**
1. Check `.env.local` exists in project root (not in `components/` or `public/`)
2. Verify all three variables are set with actual values (not placeholders)
3. Restart the dev server after changes
4. Check browser console (F12) for configuration warnings

---

### Issue 2: "Failed to send message" Error

**Possible causes and fixes:**

**A) Invalid Credentials**
- Double-check Service ID, Template ID, and Public Key
- Make sure there are no extra spaces or quotes
- Verify credentials are from the same EmailJS account

**B) Gmail Not Connected**
- Go to EmailJS Dashboard → Email Services
- Ensure Gmail service shows "Active" status
- Try disconnecting and reconnecting your Gmail

**C) Template Variables Mismatch**
- Verify your EmailJS template uses these exact variable names:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`
  - `{{to_email}}`

**D) CORS or Network Error**
- Check browser console (F12) for detailed error
- Verify you're on `localhost:3000` (not a different port)
- Try clearing browser cache

---

### Issue 3: Email Not Received

**Solutions:**
1. Check Gmail **Spam/Junk** folder
2. Verify EmailJS Dashboard → Email Services → Gmail is active
3. Check EmailJS Dashboard → Logs for delivery status
4. Ensure template "To Email" is set correctly
5. Verify your Gmail account can receive emails

---

### Issue 4: Environment Variables Not Working

**Common mistakes:**
- ❌ File named `.env` instead of `.env.local`
- ❌ File in wrong location (must be in project root)
- ❌ Missing `NEXT_PUBLIC_` prefix
- ❌ Quotes around values (remove them):
  ```env
  # ❌ Wrong
  NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_abc123"
  
  # ✅ Correct
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
  ```
- ❌ Server not restarted after changes

---

## 📋 Field Mapping Reference

The contact form sends these fields to EmailJS:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| name       | `{{from_name}}`  | Sender's full name |
| email      | `{{from_email}}` | Sender's email address |
| subject    | `{{subject}}`    | Message subject line |
| message    | `{{message}}`    | Message content |
| (env var)  | `{{to_email}}`   | Your email (muhammadsamiu560@gmail.com) |

---

## 🔍 Debug Checklist

If the form still doesn't work, check these in order:

- [ ] EmailJS account created and email verified
- [ ] Gmail service connected and shows "Active"
- [ ] Email template created with correct variables
- [ ] All 3 credentials copied correctly (Service ID, Template ID, Public Key)
- [ ] `.env.local` file exists in project root
- [ ] All 4 environment variables are set with actual values
- [ ] No placeholder text like "your_service_id_here" remains
- [ ] Development server restarted after updating `.env.local`
- [ ] Browser console (F12) checked for errors
- [ ] Test email sent and success message shown

---

## 🆘 Still Not Working?

### Check Browser Console

1. Open browser Developer Tools (F12)
2. Go to **Console** tab
3. Look for error messages starting with:
   - ⚠️ EmailJS Configuration Missing
   - ❌ EmailJS Error
   - 📧 Sending email via EmailJS...

### Check EmailJS Dashboard

1. Go to EmailJS Dashboard → **Logs**
2. Look for recent attempts
3. Check error messages if any

### Use Direct Email Fallback

While troubleshooting, users can always click:
**"Email me directly at muhammadsamiu560@gmail.com"**

This opens their email client with your address pre-filled.

---

## 🌐 Production Deployment

### Adding Your Production Domain to EmailJS

When deploying your site to production (Vercel, Netlify, etc.), you MUST add your production domain to EmailJS's allowed origins to prevent CORS errors.

#### Step 1: Get Your Production Domain

After deploying, note your production URL:
- **Vercel:** `https://your-site.vercel.app` or `https://yourdomain.com`
- **Netlify:** `https://your-site.netlify.app` or `https://yourdomain.com`
- **Custom Domain:** `https://yourdomain.com`

#### Step 2: Configure Allowed Origins in EmailJS

1. Go to: https://dashboard.emailjs.com/
2. Click **Account** → **Security**
3. Scroll to **Allowed Origins** section
4. Click **Add New Origin**
5. Add your production domain(s):
   ```
   https://your-site.vercel.app
   https://yourdomain.com
   ```
   
**⚠️ Important Notes:**
- Use `https://` (not `http://`)
- Do NOT include trailing slashes: ❌ `https://yoursite.com/`
- Add both `www` and non-`www` versions if applicable:
  ```
  https://yourdomain.com
  https://www.yourdomain.com
  ```
- `localhost` domains work by default (no need to add)

#### Step 3: Environment Variables in Production

Ensure your production environment has all environment variables set:

**For Vercel:**
1. Project Settings → Environment Variables
2. Add all 4 variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_CONTACT_EMAIL`

**For Netlify:**
1. Site Settings → Environment Variables
2. Add the same 4 variables

**⚠️ Security Reminder:**
- Never commit `.env.local` to Git
- Use your hosting platform's environment variable settings
- The `NEXT_PUBLIC_` prefix makes these safe for client-side use

#### Step 4: Test in Production

After deployment:
1. Visit your production site
2. Navigate to the contact section
3. Submit a test message
4. Check for success notification
5. Verify email arrives in your inbox

#### Common Production Issues

**Issue: "Network Error" or CORS Error**
- **Cause:** Production domain not added to EmailJS allowed origins
- **Solution:** Add domain in EmailJS Dashboard → Account → Security → Allowed Origins

**Issue: "Invalid Public Key"**
- **Cause:** Environment variables not set in production
- **Solution:** Add all 4 env vars in your hosting platform's settings, then redeploy

**Issue: Form works locally but not in production**
- **Cause:** Missing allowed origin or missing env variables
- **Solution:** 
  1. Check browser console (F12) for specific error
  2. Verify allowed origins include production domain
  3. Verify all env vars are set in production
  4. Check EmailJS Dashboard → Logs for failed attempts

#### Testing Best Practices

1. **Development Test:** Use the "🚀 Send Test Email" button (visible only in dev mode)
2. **Local Test:** Fill and submit the form on `localhost:3000`
3. **Production Test:** Submit from your live site after deployment
4. **Check Logs:** Monitor EmailJS Dashboard → Logs for all attempts

---

## 📚 Additional Resources

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Support:** https://www.emailjs.com/docs/faq/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/

---

## 🎯 Summary

**Required Steps:**
1. ✅ Create EmailJS account
2. ✅ Connect Gmail (muhammadsamiu560@gmail.com)
3. ✅ Create email template with correct variables
4. ✅ Copy 3 credentials (Service ID, Template ID, Public Key)
5. ✅ Update `.env.local` with actual values
6. ✅ Restart dev server (`npm run dev`)
7. ✅ Test the contact form

**Expected Result:**
- Contact form works and sends emails to your Gmail
- Users see success message
- Emails arrive in your inbox within seconds
- No yellow warning box appears

---

**Need more help?** Check the browser console for detailed error messages or visit the EmailJS documentation.
