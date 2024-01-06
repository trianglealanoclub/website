function setHeroLogo() {
    var showHeroLogo = ldclient.variation(FeatureFlag_css_theme, false);
    switch (showHeroLogo) {
        case 'default': ('theme-default');
            break;
        case 'new-years-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac-logo-new-years-day.png" alt="" title="Triangle Alano Club">';
            break;
        case 'winter': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_winter.png" alt="" title="Triangle Alano Club">';
            break;
        case 'valentines-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_valentines-day.png" alt="" title="Triangle Alano Club">';
            break;
        case 'spring': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_spring.png" alt="" title="Triangle Alano Club">';
            break;
        case 'memorial-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac-logo-memorial-day.png" alt="" title="Triangle Alano Club">';
            break;
        case 'summer': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_summer.png" alt="" title="Triangle Alano Club">';
            break;
        case 'independence-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_white.png" alt="" title="Triangle Alano Club">';
            break;
        case 'labor-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac-logo-labor-day.png" alt="" title="Triangle Alano Club">';
            break;
        case 'fall': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_fall.png" alt="" title="Triangle Alano Club">';
            break;
        case 'halloween': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac-logo-halloween.png" alt="" title="Triangle Alano Club">';
            break;
        case 'thanksgiving-day': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac-logo-thanksgiving-day.png" alt="" title="Triangle Alano Club">';
            break;
        case 'christmas': hero.innerHTML = '<div class="hero-container" data-aos="zoom-in" data-aos-delay="100"><h1 class="mb-4 pb-0">Welcome to the<br><span>Triangle Alano CLub</span></h1><img src="assets/img/tac_logo_christmas.png" alt="" title="Triangle Alano Club">';
            break;
    }
}
ldclient.on('ready', setHeroLogo);
ldclient.on('change', setHeroLogo);
setHeroLogo();