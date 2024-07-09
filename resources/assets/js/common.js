$(document).ready(function () {
    $("#header").append(Header());

    function Header() {
        return `
        <div class="container">
                <a href="#">
                    <img src="img/sumsung-logo-w.png" alt="삼성중공업">
                </a>
                <button type="button">
                    <i class="ico i-set"></i>
                </button>
            </div>
        `
    };

});

