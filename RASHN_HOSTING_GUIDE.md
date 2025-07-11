# Rashn Landing Page - Hosting Guide

## Overview
This guide provides instructions for hosting the Rashn e-grocery delivery landing page on **InfinityFree** or other hosting platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Git (optional)

### Building the Project

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Build the production version:**
   ```bash
   yarn build
   ```

4. **The build folder will contain all static files ready for hosting**

## 📁 Files to Upload

After building, upload the entire contents of the `build` folder to your hosting provider:

```
build/
├── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── manifest.json
└── favicon.ico
```

## 🌐 InfinityFree Hosting Instructions

### Step 1: Sign Up and Create Account
1. Go to [InfinityFree.net](https://infinityfree.net)
2. Create a free account
3. Create a new website/subdomain

### Step 2: Upload Files
1. Access your hosting control panel
2. Open the File Manager
3. Navigate to the `htdocs` or `public_html` folder
4. Upload all files from the `build` folder
5. Ensure `index.html` is in the root directory

### Step 3: Configure Domain
1. Use the temporary subdomain provided (e.g., `yoursite.infinityfreeapp.com`)
2. Or configure your custom domain if available

### Step 4: Test the Website
1. Visit your domain
2. Verify all sections load correctly
3. Test the email form functionality
4. Check mobile responsiveness

## 📊 Analytics Setup

The landing page includes basic visitor tracking:

### Built-in Tracking
- **LocalStorage tracking**: Counts page views and new visitors
- **PostHog Analytics**: Advanced user behavior tracking
- **Console logging**: Basic debugging information

### PostHog Dashboard
- Visit [PostHog Dashboard](https://app.posthog.com)
- Use the configured project key to view analytics
- Monitor conversions and user behavior

## 🔧 Customization Options

### Adding Your Logo
To replace the temporary styled text logo with your actual logo:
1. Save your logo image in the `public` folder (e.g., `public/logo.png`)
2. Edit `src/components/Logo.js`
3. Uncomment the image return section and update the `logoImageUrl` variable
4. Comment out the temporary styled text section
5. Rebuild and redeploy

Example:
```javascript
// In Logo.js, replace:
const logoImageUrl = '/path/to/your/logo.png';
// With:
const logoImageUrl = '/logo.png';
```

### Updating Content
1. Edit the source files in `src/App.js`
2. Update branding colors in `tailwind.config.js`
3. Modify SEO metadata in `public/index.html`
4. Rebuild and redeploy

### Adding Survey Link
Replace the placeholder survey link in the signup section:
```javascript
// In App.js, find this line:
href="#survey-placeholder"
// Replace with your actual Google Docs survey URL:
href="https://docs.google.com/forms/d/your-survey-id/edit"
```

### Email Form Integration
To integrate with Google Forms:
1. Create a Google Form
2. Get the form action URL
3. Replace the form submission logic in `handleEmailSubmit`

## 📱 Features Included

### ✅ Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

### ✅ Performance Optimized
- Image preloading
- Lazy loading for below-fold content
- Minified CSS and JavaScript
- Compressed assets

### ✅ SEO Ready
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup

### ✅ Analytics Ready
- Visitor tracking
- Conversion tracking
- User behavior analysis
- Performance monitoring

## 🎨 Design Features

### Color Palette
- **Dark Teal**: #06484F (Primary brand color)
- **Slate Blue**: #5A6B89 (Secondary)
- **Aqua**: #4C9A8D (Accent)
- **Lime**: #DBE994 (Highlights)
- **Mist**: #CED6D4 (Neutral)

### Typography
- System font stack for performance
- Responsive font sizes
- Optimized line heights
- Accessible contrast ratios

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading states

## 🔒 GDPR Compliance

### Email Consent
- Clear consent checkbox
- Transparent privacy messaging
- Unsubscribe information
- Data processing disclosure

### Cookie Policy
- Basic localStorage usage
- Analytics tracking disclosure
- User control options

## 📞 Support and Maintenance

### Regular Updates
- Monitor performance metrics
- Update content as needed
- Test form submissions
- Review analytics data

### Performance Monitoring
- Page load speed
- Mobile performance
- Conversion rates
- User engagement

## 🚨 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check internet connection
   - Verify image URLs are accessible
   - Check browser console for errors

2. **Form not submitting**
   - Verify email format
   - Check GDPR consent checkbox
   - Review console for JavaScript errors

3. **Mobile layout issues**
   - Clear browser cache
   - Test on different devices
   - Check viewport meta tag

4. **Analytics not tracking**
   - Verify PostHog configuration
   - Check browser console
   - Test with different browsers

## 🌟 Future Enhancements

### Planned Features
- Integration with actual Google Forms
- Real-time survey results
- Advanced A/B testing
- Newsletter automation
- Customer testimonials section

### Performance Improvements
- Progressive Web App (PWA) features
- Service worker caching
- Advanced image optimization
- CDN integration

## 📧 Contact Information

For technical support or questions about the landing page:
- Check the browser console for error messages
- Verify all files are uploaded correctly
- Test on multiple devices and browsers
- Monitor analytics for user behavior insights

---

**Note**: This landing page is optimized for conversion and user experience. The clean, professional design targets working professionals aged 25-40 in Oman, emphasizing time-saving benefits and premium quality produce delivery.