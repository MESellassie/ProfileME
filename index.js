$(document).ready(function () {

    $(function menuToggle1() {

        $(".contentContainer2, .contentContainer3").hide();

        $(".portfolio").click(function () {

            event.preventDefault()

            $(".contentContainer1, .contentContainer3").hide();

            $(".contentContainer2").toggle();

        });

    });

    $(function menuToggle2() {

        // $(".contentContainer2, .contentContainer3").hide();

        $(".resume").click(function () {

            event.preventDefault()

            $(".contentContainer1, .contentContainer2").hide();

            $(".contentContainer3").toggle();

        });

    });

});
