(function () {

    // Match this timestamp with the release of your code
    var lastVersioning = Date.UTC(2024, 0, 6, 12, 19);

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