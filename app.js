(function () {
    const container = document.querySelector('.container');
    const loading = document.querySelector('.loading');

    function ajaxNavigation(hash) {
        if (!hash) return

        const link = document.querySelector(`[href='${hash}']`);
        if (!link) return

        let url = hash.substring(1);
        if (url == '/') url = '/news.html';

        fetchData(url);
    }

    function fetchData(url) {
        container.innerHTML = '';
        loading.style.display = 'block';

        setTimeout(() => {
            fetch(url)
                .then(resp => resp.text())
                .then(html => {
                    container.innerHTML = html;
                })

            loading.style.display = 'none';
        }, 2000);


    }

    window.onload = e => fetchData('/news.html')
    window.onhashchange = e => ajaxNavigation(location.hash)
})()