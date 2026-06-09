/**
 * URL Cleaner - Removes .html extension from browser address bar
 * Keeps SEO-friendly URLs clean and professional
 */

(function() {
    'use strict';

    // Get current URL
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;

    // Remove .html extension
    if (currentPath.endsWith('.html')) {
        const cleanUrl = currentUrl.replace('.html', '');

        // Update browser address bar without reloading page
        // This uses the History API to change URL without triggering page reload
        window.history.replaceState(null, '', cleanUrl);
    }
})();
