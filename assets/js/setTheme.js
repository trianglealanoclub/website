// function to set a given theme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  // function to toggle between themes
  function toggleTheme() {
    var showTheme = ldclient.variation(FeatureFlag_css_theme, false);
    switch (showTheme) {
      case 'default': setTheme('theme-default');
        break;
      case 'new-years-day': setTheme('theme-new-years-day');
        break;
      case 'winter': setTheme('theme-winter');
        break;
      case 'valentines-day': setTheme('theme-valentines-day');
        break;
      case 'spring': setTheme('theme-spring');
        break;
      case 'memorial-day': setTheme('theme-memorial-day');
        break;
      case 'summer': setTheme('theme-summer');
        break;
      case 'independence-day': setTheme('theme-independence-day');
        break;
      case 'labor-day': setTheme('theme-labor-day');
        break;
      case 'fall': setTheme('theme-fall');
        break;
      case 'halloween': setTheme('theme-halloween');
        break;
      case 'thanksgiving-day': setTheme('theme-thanksgiving-day');
        break;
      case 'christmas': setTheme('theme-christmas');
        break;
    }
  }
  ldclient.on('ready', toggleTheme);
  ldclient.on('change', toggleTheme);
  toggleTheme();