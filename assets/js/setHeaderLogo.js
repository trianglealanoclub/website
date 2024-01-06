function setHeaderLogo() {
    var showHeaderLogo = ldclient.variation(FeatureFlag_css_theme, false);
    switch (showHeaderLogo) {
        case 'default': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'new-years-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'winter': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'valentines-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'spring': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'memorial-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'summer': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'independence-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'labor-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'fall': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_fall.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'halloween': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'thanksgiving-day': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
        case 'christmas': logo.innerHTML = '<a href="/" class="scrollto"><img src="assets/img/tac_logo_full_winter.png" alt="" title="Triangle Alano Club"></a>';
            break;
    }
}
ldclient.on('ready', setHeaderLogo);
ldclient.on('change', setHeaderLogo);
setHeaderLogo();