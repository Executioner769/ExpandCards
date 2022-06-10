// Select all elements with class panel using Jquery
$(".panel").click(function () {
    // Remove the class "open" from all elements with class "panel"
    $(".panel").removeClass("active");
    // Toggle the class of the element to make it expand or collapse
    $(this).toggleClass("active");
});
