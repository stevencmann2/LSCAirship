$(document).ready(function(){


    //navbar change on scroll
    $(window).scroll(function() {
        $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".navbar").height()*5)
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