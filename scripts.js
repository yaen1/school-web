window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    const siteTitle = document.querySelector('.site-title');
    const logo = document.querySelector('.site-logo');  // Assuming you have a logo with class .site-logo

    if (window.scrollY > 50) {
        header.classList.add('header-small');
        siteTitle.classList.add('hide');  // Hide the site title
        logo.classList.add('small-logo'); // Make the logo smaller
    } else {
        header.classList.remove('header-small');
        siteTitle.classList.remove('hide');  // Show the site title again
        logo.classList.remove('small-logo'); // Restore the original size of the logo
    }
});
