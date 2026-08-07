/* Amplitude web analytics */
if (window.amplitude) {
    amplitude.init('e4b639f3d12aa5905e877748a6400d68', {
        autocapture: true
    });
    document.querySelectorAll('.download-badges a').forEach(function (link) {
        link.addEventListener('click', function () {
            amplitude.track('Store Badge Clicked', {
                store: link.classList.contains('badge-appstore') ? 'App Store' : 'Google Play'
            });
        });
    });
}
