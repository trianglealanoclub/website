(function () {

    // Match this timestamp with the release of your code
    var lastVersioning = Date.UTC(2024, 0, 7, 9, 29);

    var lastCacheDateTime = localStorage.getItem('lastCacheDateTime');

    if (lastCacheDateTime) {
        if (lastVersioning > lastCacheDateTime) {
            var reload = true;
        }
    }

    localStorage.setItem('lastCacheDateTime', Date.now());

    if (reload) {
        location.reload(true);
    }

})();