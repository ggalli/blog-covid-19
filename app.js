(function () {
    function ajaxNavigation(hash) {
        if (!hash) return

        const link = document.querySelector(`[href='${hash}']`);

        // link.classList.add('active');
        if (!link) return

        let url = hash.substring(1);
        if(url == '/') url = '/news.html';

        fetchData(url);
    }   

    function fetchData(url) {
        const destino = document.querySelector('.container');

        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html;
            })
    }


    window.onload = e => fetchData('/news.html')

    window.onhashchange = e => ajaxNavigation(location.hash)
    
})()