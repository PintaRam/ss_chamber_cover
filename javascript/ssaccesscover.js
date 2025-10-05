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




    