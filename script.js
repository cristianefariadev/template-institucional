$(document).ready(function () {
    $(".nav-link").click(function () {
        $(".collapse").collapse('hide');
    });
});
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        maxWidth: 800,
        maxHeight: 800,
    });
});