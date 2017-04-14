 $(document).ready(function (){
            $("#kontakt").click(function (){
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 2000);
            });
			$("#psl").click(function (){
                $('html, body').animate({
                    scrollTop: $("#poslovi").offset().top
                }, 2000);
            });
        });