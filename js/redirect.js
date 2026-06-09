/**
 * URL Cleaner - Removes .html extension and /HTML/ folder from browser address bar
 * Keeps SEO-friendly URLs clean and professional
 */

(function() {
    'use strict';

    // Get current URL
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;

    let cleanUrl = currentUrl;
    let modified = false;

    // Remove .html extension
    if (currentPath.endsWith('.html')) {
        cleanUrl = cleanUrl.replace('.html', '');
        modified = true;
    }

    // Remove /HTML/ folder from path
    if (currentPath.includes('/HTML/')) {
        cleanUrl = cleanUrl.replace('/HTML/', '/');
        modified = true;
    }

    // Update browser address bar if URL was modified
    if (modified) {
        window.history.replaceState(null, '', cleanUrl);
    }
})();
