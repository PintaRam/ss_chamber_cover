# 🚀 Server Upload Instructions - Fix 404 Errors

## ⚠️ PROBLEM
Your server still has OLD files in `/HTML/` folder with OLD navigation links.
The NEW files are in the root directory with UPDATED navigation links.

---

## ✅ SOLUTION: Upload These Files to Server Root

### **Step 1: Delete Old Files from Server**

Using cPanel File Manager, navigate to `public_html/HTML/` and **DELETE** these files:
- ❌ about-shree-ashish-industries.html
- ❌ stainless-steel-access-cover.html
- ❌ laksh-influence-chamber-cover.html
- ❌ recessed-chamber-cover.html
- ❌ stainless-steel-chequered-cover.html
- ❌ frp-manhole-cover-5-ton.html
- ❌ frp-manhole-cover-10-ton.html
- ❌ frp-manhole-cover-25-ton.html
- ❌ frp-gully-cover.html
- ❌ chamber-cover-gallery.html
- ❌ contact-us.html

**KEEP ONLY:**
- ✅ login.html
- ✅ productPage.html

---

### **Step 2: Upload New Files to Server ROOT (public_html)**

Upload these 13 files from your local folder to `public_html/` (NOT the HTML subfolder):

**From:** `d:\Programming\web Development\ss_chamber_cover\`

**Upload to:** `public_html/` (root directory on server)

**Files to Upload:**
1. ✅ about-shree-ashish-industries.html
2. ✅ chamber-cover-gallery.html
3. ✅ contact-us.html
4. ✅ frp-gully-cover.html
5. ✅ frp-manhole-cover-5-ton.html
6. ✅ frp-manhole-cover-10-ton.html
7. ✅ frp-manhole-cover-25-ton.html
8. ✅ index.html
9. ✅ laksh-influence-chamber-cover.html
10. ✅ recessed-chamber-cover.html
11. ✅ stainless-steel-access-cover.html
12. ✅ stainless-steel-chamber-cover.html
13. ✅ stainless-steel-chequered-cover.html

**Also upload:**
14. ✅ sitemap.xml
15. ✅ js/redirect.js (upload to `public_html/js/` folder)

---

### **Step 3: Verify**

After uploading, test these URLs:

**Homepage:**
```
https://sschambercover.in/
→ Should redirect to stainless-steel-chamber-cover.html
→ Browser shows: /stainless-steel-chamber-cover
```

**Product Page:**
```
https://sschambercover.in/stainless-steel-access-cover.html
→ Should load the page
→ Browser shows: /stainless-steel-access-cover
```

**Navigation:**
- Click any menu item
- Should navigate to clean URLs without /HTML/
- Should work without 404 errors

---

### **Step 4: Final Check**

✅ All pages load without 404  
✅ Navigation links work  
✅ URLs show clean (no .html extension in browser)  
✅ No /HTML/ in URLs

---

## 📋 Quick Reference

**OLD Structure (causing 404):**
```
public_html/
  ├── HTML/
  │   ├── stainless-steel-access-cover.html ❌ (OLD - DELETE)
  │   └── ...other pages ❌ (OLD - DELETE)
```

**NEW Structure (correct):**
```
public_html/
  ├── stainless-steel-chamber-cover.html ✅
  ├── stainless-steel-access-cover.html ✅
  ├── about-shree-ashish-industries.html ✅
  ├── ...other pages ✅
  ├── sitemap.xml ✅
  ├── js/
  │   └── redirect.js ✅
  └── HTML/
      ├── login.html ✅ (keep)
      └── productPage.html ✅ (keep)
```

---

**After uploading, your website will work perfectly with clean SEO URLs!** 🎉
