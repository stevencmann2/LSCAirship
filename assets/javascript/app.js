$(document).ready(function(){
    //TIME INSTANCE
    let grandOpening = new Date('April 1, 2021 00:00:00').getTime();
    
    //logic for contdown clock
    function countdown() {
        //set time variables
        let now = new Date().getTime();
        let difference = grandOpening - now;
        // match for determing time values
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24
        //calculations for time variables
        let d = Math.floor(difference / (day));
        let h = Math.floor((difference % (day))/ (hour));
        let m = Math.floor((difference % (hour)) / (minute));
        let s = Math.floor((difference % (minute)) / second);
        //replace text element
        $("#day").text(d);
        $("#hour").text(h);
        $("#minute").text(m) ;
        $("#second").text(s);
    }

    //DISPLAY COUNTDOWN FUNCTION
    setInterval(function() {
        countdown(), 1000
        });

    // COUNTDOWN CARD CLOSE
    $('.close').click(function(e){
        e.preventDefault()
        $('#countdown-close').parent().slideUp();
      })


      // VIDEO BANNER BUTTON SCROLL
      $("#video-button").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#programs').offset().top -180 }, 'slow')
    });

    $("#enroll-button").click(function (e) {
        e.preventDefault();
         window.open("https://www.lonestar.edu/admissions.htm")

    });

    
    //navbar change on scroll
    $(window).scroll(function() {
        // toggle navbar color 
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".navbar").height()*1.5);
        $("#inner_nav").toggleClass("navbar-brand", $(this).scrollTop() > $(".navbar").height()*1.5)
        $("#inner_nav").toggleClass("animate__animated animate__flipInX", $(this).scrollTop() > $(".navbar").height()*1.5);
        $("#inner_nav").toggleClass("navbar-brand", $(this).scrollTop() > $(".navbar").height()*1.5)
        
        
        // $("#inner_nav").toggleClass("animate__animated animate__lightSpeedInLeft", $(this).scrollTop() < $(".navbar").height()*1.5);


       
        
        //toggle logo disapear
    //    $("#initial-logo").toggleClass("animate__animated animate__fadeOut", $(this).scrollTop() > $(".navbar").height()*1.5)
    })

    /////// Banner accordian

    


    

    const it = $("#it");
    const energy = $("#energy");
    const partnerships = $("#partnernships")
    const content = $("#accordian-content")

    it.on( "click", function(e) {
       
        e.preventDefault();
        content.empty();
        content.addClass("text-center")
        content.append(
            `
            <div class="row p-4">
                <div class="col-lg-6 col-sm-12">
                    <h3>Cloud Computing</h3>
                    <p>On the cutting edge of technology, Lone Star College is proud to offer our new IT program.
                        The IT program is a culmination of our long term promise to deliver accesible and affordable cloud
                        computing to the Houston area.</p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src="./assets/images/cloud-computing.jpg" class="img-fluid" alt="Cloud Computing">
                </div>
            </div>
            `
        )
        content.collapse('toggle');
       
    })

    energy.on( "click", function(e) {
        e.preventDefault();
        content.empty();
        content.addClass("text-center")
        content.append(
            `<div class="row p-4">
                <div class="col-lg-6 col-sm-12">
                    <h3>An experience, unlike any other.</h3>
                    <p>Our cutting edge cirriculum in green energy techonologies boasts the first ever co-operative program,
                        designed in part by our airship crew. Get hands on exprience working with mechanics and electrical systems that keep the airship afloat. 
                    </p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <img src="./assets/images/solar-panels.jpg" class="img-fluid" alt="Solar Panels">
                </div>
            </div>
            `
        )

        content.collapse('toggle');
        
       
    })

    partnerships.on( "click", function(e) {
        e.preventDefault();
        content.empty();
        content.addClass("text-center")
        content.append(

            `<div class="row p-4 ">
            <div class="col-lg-6 col-sm-12">
            <h4>Information Technology</h4>
            Cloud Networking AAS Degree, Cisco Track
            <br>
            Cloud Networking AAS Degree, Microsoft Track
            <br>
            Cloud Network Administrator Certificate: Cisco Track
            <br>
            Cloud Network Administrator Certificate: Microsoft Track
            <br>
            CCCNA (Cisco Certified Cloud Networking Associate)
            <br>
            <br>
            </div>
            <div class="col-lg-6 col-sm-12">
            <h4>Renewable Energy</h4>
            Fuel Cell Systems Electrician Marketable Skills Award
            <br>
            Solar Photovoltaic System Electrician Marketable Skills Award
            <br>
            Wind Turbine System Electrician Marketable Skills Award
            </div>


            
            </div>
        </div>
            `
        )
        content.collapse('toggle');
        
        console.log('click partnerships')
    })

   




    

});