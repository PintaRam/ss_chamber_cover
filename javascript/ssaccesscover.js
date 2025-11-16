document.querySelectorAll('.rating-section').forEach(section => {
        const rating = parseFloat(section.getAttribute('data-rating'));
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.textContent = '★';
            section.appendChild(star);
        }

        // Add half star
        if (halfStar) {
            const star = document.createElement('span');
            star.className = 'star-half';
            star.textContent = '★';
            section.appendChild(star);
        }

        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            const star = document.createElement('span');
            star.className = 'star-empty';
            star.textContent = '★';
            section.appendChild(star);
        }

        // Add rating number
        const ratingNumber = document.createElement('span');
        ratingNumber.className = 'rating-number';
        ratingNumber.textContent = rating.toFixed(1);
        section.appendChild(ratingNumber);
    });


document.addEventListener('click', function(e){
  // BUY NOW -> WhatsApp
  if (e.target.closest && e.target.closest('.btn-buy-now')) {
    const btn = e.target.closest('.btn-buy-now');
    const card = btn.closest('.product-card');
    if (!card) return;

    // Read details from the card
    const phone = (card.dataset.phone || '+918951845341').replace(/\D/g, ''); // numeric only
    const title = card.querySelector('.product-title')?.innerText?.trim() || 'Product';
    const price = card.querySelector('.price')?.innerText?.trim() || '';
    const mrp = card.querySelector('.mrp')?.innerText?.trim() || '';
    const delivery = card.querySelector('.delivery')?.innerText?.trim() || '';
    const reviews = card.querySelector('.review-count')?.innerText?.trim() || '';
    const pageUrl = window.location.href;

    // Build message (edit template as you like)
    const message = `Hello!%0A%0AI'd like to buy the following product:%0A- *${title}*%0A- Price: ${price}%0A- MRP: ${mrp}%0A- Delivery: ${delivery}%0A- Reviews: ${reviews}%0A%0APlease confirm availability and next steps.%0AProduct page: ${pageUrl}`;

    // Build wa.me url (international number without + or spaces)
    const waUrl = `https://wa.me/${phone}?text=${message}`;

    // Open in new tab
    window.open(waUrl, '_blank');
  }

  // CALL NOW -> ensure tel: uses card phone attribute when clicking anchor
  if (e.target.closest && e.target.closest('.btn-call-now')) {
    const link = e.target.closest('.btn-call-now');
    const card = link.closest('.product-card');
    if (!card) return;
    const phone = card.dataset.phone || '+918951845341';
    // update href right before follow (in case dataset changed dynamically)
    link.href = `tel:${phone}`;
    // Note: default anchor behavior will open phone dialer on devices that support it
  }
});

    