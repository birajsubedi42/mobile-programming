$(document).ready(function () {

    $("#profileCard").mouseenter(function () {
        $(this).css("background-color", "#d9ecff");
    });

    $("#profileCard").mouseleave(function () {
        $(this).css("background-color", "white");
    });

    $("#showQR").click(function () {
        $("#profileCard").hide();
        $("#qrContainer").fadeIn();
    });

    $("#closeQR").click(function () {
        $("#qrContainer").hide();
        $("#profileCard").fadeIn();
    });

});