$(document).ready(function () {
        //Preload, works thank god
        function preload(images) {
                $(images).each(function () {
                        new Image().src = this;
                });
        }

        preload([
                "Activity10_images/h1.jpg",
                "Activity10_images/h2.jpg",
                "Activity10_images/h3.jpg",
                "Activity10_images/h4.jpg",
                "Activity10_images/h5.jpg",
                "Activity10_images/h6.jpg"
        ]);


        document.getElementById("t1").addEventListener("click", function (event) {
                //measured in miliseconds, so 3 seconds
                //CAPTION:
                $("#caption").fadeOut(3000, function () {
                        //change the title
                        document.getElementById("caption").innerHTML = "James Allison: 1-1";

                        $(this).fadeIn(3000);
                });
                //IMAGE:
                $("#image").fadeOut(3000, function () {

                        document.getElementById("image").setAttribute("src", "Activity10_images/h1.jpg")
                        $(this).fadeIn(3000);
                });
                //stops from going into image viewer
                event.preventDefault();
        });

        document.getElementById("t2").addEventListener("click", function (event) {
                $("#caption").fadeOut(3000, function () {
                        document.getElementById("caption").innerHTML = "James Allison 1-2";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function () {
                        document.getElementById("image").setAttribute("src", "Activity10_images/h2.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("t3").addEventListener("click", function (event) {
                $("#caption").fadeOut(3000, function () {
                        document.getElementById("caption").innerHTML = "James Allison: -3";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function () {
                        document.getElementById("image").setAttribute("src", "Activity10_images/h3.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("t4").addEventListener("click", function (event) {
                $("#caption").fadeOut(3000, function () {
                        document.getElementById("caption").innerHTML = "James Allison:1-4";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function () {

                        document.getElementById("image").setAttribute("src", "Activity10_images/h4.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("t5").addEventListener("click", function (event) {
                $("#caption").fadeOut(3000, function () {
                        document.getElementById("caption").innerHTML = "JamesAllison: 1-5";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function () {
                        document.getElementById("image").setAttribute("src", "Activity10_images/h5.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("t6").addEventListener("click", function (event) {
                $("#caption").fadeOut(3000, function () {
                        document.getElementById("caption").innerHTML = "James Allison: 1-6";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function () {
                        document.getElementById("image").setAttribute("src", "Activity10_images/h6.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("t1").focus();


}); // end ready