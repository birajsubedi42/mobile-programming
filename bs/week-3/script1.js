$(document).ready(function () {

    $("#show-name").click(function () {
        let name = $("#student-name").text();
        $("#output").text(name);
    });

    $("#change-name").click(function () {
        $("#student-name").text("Biraj Subedi");
    });

    $("#show-bio").click(function () {
        let bio = $("#student-bio").html();
        $("#output").text(bio);
    });

    $("#get-input").click(function () {
        let nickname = $("#nickname-input").val();
        $("#output").text(nickname);
    });

    $("#set-input").click(function () {
        $("#nickname-input").val("jQuery Pro");
    });

    $("#highlight-card").click(function () {
        $("#profile-card").addClass("highlighted");
    });

    $("#remove-highlight").click(function () {
        $("#profile-card").removeClass("highlighted");
    });

    $("#toggle-dark-mode").click(function () {
        $("#profile-card")
            .css("background-color", "")
            .toggleClass("dark-mode");
    });

    $("#toggle-rounded").click(function () {
        $("#profile-photo").toggleClass("rounded");
    });

    $("#red-background").click(function () {
        $("#profile-card").css("background-color", "#e74c3c");
    });

    $("#green-background").click(function () {
        $("#profile-card").css("background-color", "#2e9724");
    });

    $("#reset-background").click(function () {
        $("#profile-card")
            .removeClass("dark-mode")
            .css("background-color", "white");
    });

    $("#hide-photo").click(function () {
        $("#profile-photo").hide("slow");
    });

    $("#show-photo").click(function () {
        $("#profile-photo").show("slow");
    });

    $("#toggle-bio").click(function () {
        $("#student-bio").toggle();
    });

    $("#fade-out-card").click(function () {
        $("#profile-card").fadeOut("slow");
    });

    $("#fade-in-card").click(function () {
        $("#profile-card").fadeIn("slow");
    });

    $("#fade-to-half").click(function () {
        $("#profile-card").fadeTo("slow", 0.5);
    });

    $("#slide-up-skills").click(function () {
        $("#skills-list").slideUp("slow");
    });

    $("#slide-down-skills").click(function () {
        $("#skills-list").slideDown("slow");
    });

    $("#slide-toggle-skills").click(function () {
        $("#skills-list").slideToggle("slow");
    });

    $("#animate-card").click(function () {

        $("#profile-card")
            .animate({ left: "200px" }, 1000)
            .animate({ left: "-200px" }, 1000)
            .animate({ left: "0px" }, 1000);
    
    });

    $("#profile-photo").mouseenter(function () {
        $(this).addClass("shadow");
    });

    $("#profile-photo").mouseleave(function () {
        $(this).removeClass("shadow");
    });

    $("#nickname-input").keydown(function (event) {
        $("#output").text("Pressed key: " + event.key);
    });

});