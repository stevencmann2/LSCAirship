$(document).ready(function(){
    //MOMENT INSTANCE
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
    $('.close').click(function(){
        $('#countdown-close').parent().slideUp();
      })

    //navbar change on scroll
    $(window).scroll(function() {
        // toggle navbar color 
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".navbar").height()*1.5);
        //toggle logo disapear
    //    $("#initial-logo").toggleClass("animate__animated animate__fadeOut", $(this).scrollTop() > $(".navbar").height()*1.5)
    })




  
    // Paragraphs
    const itParagraph = $("#it-content")
    const energyParagraph = $("#energy-content")

    // clickable icons
    const itToggle = $("#it-toggle")
    const energyToggle = $("#energy-toggle")
    const itToggleUp = $('#it-toggle-up').hide()
    const energyToggleUp = $('#energy-toggle-up').hide()
    
    //ENERGY CONTENT
    energyToggle.on( "click", function(e) {
        e.preventDefault();
        energyParagraph.collapse('toggle')
        energyToggle.hide()
        energyToggleUp.show()

    });

    energyToggleUp.on( "click", function(e) {
        e.preventDefault();
        energyParagraph.collapse('toggle')
        energyToggle.show()
        energyToggleUp.hide()

    });

    //IT CONTENT
    itToggle.on( "click", function(e) {
        e.preventDefault();
        itParagraph.collapse('toggle')
        itToggle.hide()
        itToggleUp.show()

    });

    itToggleUp.on( "click", function(e) {
        e.preventDefault();
        itParagraph.collapse('toggle')
        itToggle.show()
       itToggleUp.hide()

    });

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
            <div class="row">
                <div class="col">
                    <h3>Cloud Computing</h3>
                    <p>On the cutting edge of technology, Lone Star College is proud to offer our new IT program.
                        The IT program is a culmination of our long term promise to deliver accesible and affordable cloud
                        computing to the Houston area.</p>
                </div>

                <div class="col h-10">
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
            `<div class="row justify-content-center" style="background-color: grey">

                <div class="col-lg-6 md-6 sm-12">
                    <h3>An immersive experience, unlike any other.</h3>
                    <p>Our cutting edge cirriculum in green energy techonologies boasts the first ever co-operative program,
                        designed in part by our airship crew. Get hands on exprience working with mechanics and electrical systems that keep the airship afloat. 
                    </p>
                </div>

                <div class="col-lg-6 md-6 sm-12">
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
            `<div>
                <br>
                <br>
                &#8226; Fuel Cell Systems Electrician Marketable Skills Award
                <br>
                &#8226; Solar Photovoltaic System Electrician Marketable Skills Award
                <br>
                &#8226; Wind Turbine System Electrician Marketable Skills Award
            </div>
            `
        )
        content.collapse('toggle');
        
        console.log('click partnerships')
    })








    

});