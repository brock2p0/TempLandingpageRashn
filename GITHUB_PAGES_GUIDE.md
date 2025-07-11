# Rashn Landing Page - GitHub Pages Deployment Guide

This guide will help you deploy your Rashn landing page to GitHub Pages with automatic builds and deployments.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `rashn-landing-page` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license (we have these files)

### Step 2: Upload Your Code
1. **Option A - Using GitHub Web Interface:**
   - Click "uploading an existing file"
   - Drag and drop all files from your project folder
   - Commit changes

2. **Option B - Using Git Commands:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rashn landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rashn-landing-page.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 4: Access Your Website
- Your site will be available at: `https://YOUR_USERNAME.github.io/rashn-landing-page`
- It takes 2-5 minutes for the first deployment

## 🔧 How It Works

### Automatic Deployment
- Every time you push to `main` branch, GitHub Actions will:
  1. Install dependencies (`yarn install`)
  2. Build the React app (`yarn build`)
  3. Deploy to GitHub Pages
  4. Your site updates automatically

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file handles:
- Node.js 18 setup
- Yarn package installation
- React build process
- GitHub Pages deployment

## 📁 Project Structure for GitHub Pages

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment config
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Logo.js         # Logo component
│   │   ├── App.js              # Main app
│   │   ├── App.css             # Styles
│   │   └── index.js            # Entry point
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── package.json            # Dependencies
│   └── tailwind.config.js      # Tailwind config
├── .gitignore                  # Git ignore rules
├── README.md                   # This guide
└── GITHUB_PAGES_GUIDE.md       # Deployment instructions
```

## 🎨 Customization After Deployment

### Adding Your Logo
1. Upload your logo image to `frontend/public/` folder
2. Edit `frontend/src/components/Logo.js`:
   ```javascript
   // Change this line:
   const logoImageUrl = '/path/to/your/logo.png';
   // To:
   const logoImageUrl = '/logo.png';
   
   // Then uncomment the image return section and comment out the text version
   ```
3. Push changes to GitHub - site updates automatically

### Updating Content
1. Edit `frontend/src/App.js` for content changes
2. Edit `frontend/src/App.css` for style changes
3. Edit `frontend/public/index.html` for SEO metadata
4. Push changes to GitHub

### Adding Survey Link
Replace the placeholder survey link:
```javascript
// In App.js, find:
href="#survey-placeholder"
// Replace with:
href="https://docs.google.com/forms/d/YOUR_SURVEY_ID/viewform"
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18 or higher
- Yarn package manager

### Setup
```bash
cd frontend
yarn install
yarn start
```

### Build for Production
```bash
cd frontend
yarn build
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Failing**
   - Check the Actions tab in your GitHub repository
   - Look for error messages in the build log
   - Ensure all dependencies are properly listed in `package.json`

2. **Site Not Updating**
   - Wait 2-5 minutes after pushing changes
   - Check GitHub Actions status
   - Clear browser cache and try again

3. **404 Error**
   - Ensure GitHub Pages is enabled in repository settings
   - Check that the source is set to "GitHub Actions"
   - Verify the repository is public

4. **Images Not Loading**
   - Ensure images are in the `frontend/public/` folder
   - Use relative paths starting with `/` (e.g., `/logo.png`)
   - Check browser developer tools for 404 errors

### Getting Help
- Check the **Actions** tab for build logs
- Visit **Settings > Pages** to verify configuration
- Ensure your repository is **Public**

## 📈 Analytics and Tracking

### Built-in Analytics
- PostHog analytics already configured
- Local storage visitor tracking
- Console logging for debugging

### Adding Google Analytics
Add to `frontend/public/index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌟 Features Ready for Production

### ✅ Responsive Design
- Works on all devices (mobile, tablet, desktop)
- Touch-friendly interactions
- Optimized for performance

### ✅ SEO Optimized
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup

### ✅ Performance Optimized
- Lazy loading images
- Minified CSS and JavaScript
- Fast loading times

### ✅ Conversion Focused
- Clear call-to-action buttons
- GDPR-compliant email collection
- Professional design targeting working professionals

## 🚀 Advanced Features

### Custom Domain (Optional)
1. Go to **Settings > Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file to `frontend/public/` with your domain
4. Configure DNS with your domain provider

### SSL Certificate
- Automatically provided by GitHub Pages
- No additional configuration needed

## 📞 Support

### Repository Issues
- Use GitHub Issues for bug reports
- Check Actions tab for deployment status
- Review build logs for error details

### Performance Monitoring
- Monitor Core Web Vitals
- Check Google PageSpeed Insights
- Use browser developer tools

---

## 🎯 Summary

Your Rashn landing page is now configured for GitHub Pages with:
- **Automatic deployment** on every push to main branch
- **Professional design** targeting working professionals in Oman
- **Mobile-responsive** layout
- **SEO optimization** for better visibility
- **Analytics tracking** for conversion monitoring
- **Easy customization** for logo and content updates

Simply push your code to GitHub and your professional landing page will be live in minutes!

**Your site URL:** `https://YOUR_USERNAME.github.io/rashn-landing-page`