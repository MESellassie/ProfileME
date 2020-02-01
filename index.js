$(document).ready(function () {

    $(function menuToggle1() {

        $(".aboutMe").click(function () {

            event.preventDefault()

            $(".contentContainer1, .contentContainer2, .contentContainer3").fadeOut('slow', function () {

                $(".contentContainer1").fadeIn('slow');

                // $(".contentContainer1").toggle();

            })

        });

    });


    $(function menuToggle2() {

        $(".contentContainer2, .contentContainer3").hide();

        $(".portfolio").click(function () {

            event.preventDefault()

            let portfolioState = ".contentContainer1, .contentContainer3";

            $(".contentContainer1, .contentContainer3").hide();

            $(portfolioState).fadeOut('slow', function () {

                $(".contentContainer2").fadeIn('slow');

                // $(".contentContainer2").toggle();

            })

        });

    });

    $(function menuToggle3() {

        $(".resume").click(function () {

            event.preventDefault()

            let resumeState = ".contentContainer1, .contentContainer2";

            $(".contentContainer1, .contentContainer2").hide();

            $(resumeState).fadeOut('slow', function () {

                $(".contentContainer3").fadeIn('slow');

                // $(".contentContainer3").toggle();

            })

        });

    });

});
