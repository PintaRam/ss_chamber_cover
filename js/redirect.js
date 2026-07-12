/**
 * URL Redirects and Cleaner
 * 1. Redirects old URLs to new SEO-friendly URLs
 * 2. Removes .html extension from browser address bar
 */

(function() {
    'use strict';

    const currentPath = window.location.pathname;

    // URL Redirect Mapping - Old URLs to New URLs
    const redirectMap = {
        // Old homepage
        '/index.html': '/stainless-steel-chamber-cover.html',

        // Old HTML folder URLs to new root URLs
        '/HTML/aboutUs.html': '/about-shree-ashish-industries.html',
        '/HTML/ssacesscover.html': '/stainless-steel-access-cover.html',
        '/HTML/SSLakshCover.html': '/laksh-influence-chamber-cover.html',
        '/HTML/ssrecessedcover.html': '/recessed-chamber-cover.html',
        '/HTML/sschequeredcover.html': '/stainless-steel-chequered-cover.html',
        '/HTML/frp5ton.html': '/frp-manhole-cover-5-ton.html',
        '/HTML/frp10ton.html': '/frp-manhole-cover-10-ton.html',
        '/HTML/frp25ton.html': '/frp-manhole-cover-25-ton.html',
        '/HTML/frpgullycover.html': '/frp-gully-cover.html',
        '/HTML/gallery.html': '/chamber-cover-gallery.html',
        '/HTML/contact.html': '/contact-us.html'
    };

    // Check if current path needs to be redirected
    if (redirectMap[currentPath]) {
        // Redirect to new URL
        window.location.replace(redirectMap[currentPath]);
        return; // Exit after redirect
    }

    // Remove .html extension from browser address bar for clean URLs
    if (currentPath.endsWith('.html')) {
        const cleanUrl = window.location.href.replace('.html', '');

        // Update browser address bar without reloading page
        // This uses the History API to change URL without triggering page reload
        window.history.replaceState(null, '', cleanUrl);
    }
})();
