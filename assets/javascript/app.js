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
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".navbar").height()*5);
        //toggle logo disapear
       $("#initial-logo").toggleClass("animate__animated animate__fadeOut", $(this).scrollTop() > $(".navbar").height()*5)
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







    

});