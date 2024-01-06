function setFooterLogo() {
    var showFooterLogo = ldclient.variation(FeatureFlag_css_theme, false);
    switch (showFooterLogo) {
        case 'christmas': footerlogo.innerHTML = '<img src="assets/img/tac_logo_christmas.png" alt="" title="Triangle Alano Club"><p>The Triangle Alano Club is not an alcohol treatment facility.</p>';
            break;
        case 'winter': footerlogo.innerHTML = '<img src="assets/img/tac_logo_winter.png" alt="" title="Triangle Alano Club"><p>The Triangle Alano Club is not an alcohol treatment facility.</p>';
            break;
        case 'spring': footerlogo.innerHTML = '<img src="assets/img/tac_logo_winter.png" alt="" title="Triangle Alano Club"><p>The Triangle Alano Club is not an alcohol treatment facility.</p>';
            break;
        case 'fall': footerlogo.innerHTML = '<img src="assets/img/tac_logo_fall.png" alt="" title="Triangle Alano Club"><p>The Triangle Alano Club is not an alcohol treatment facility.</p>';
            break;
    }
}
ldclient.on('ready', setFooterLogo);
ldclient.on('change', setFooterLogo);
setFooterLogo();