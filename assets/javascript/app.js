$(document).ready(function(){

    // Paragraphs
    const itParagraph = $("#it-content")
    const energyParagraph = $("#energy-content")
    // clickable icons
    const itToggle = $("#it-toggle")
    const energyToggle = $("#energy-toggle")
    const itToggleUp = $('#it-toggle-up').hide()
    const energyToggleUp = $('#energy-toggle-up').hide()

    $("#it-content ").hide();
    $("#energy-content").hide();
    $('#energy-toggle-up').hide()
    $('#it-toggle-up').hide()

    $( "#it-toggle").on( "click", function( event ) {
        itParagraph.show();
        itToggle.hide()
        itToggleUp.show()
      });

      $( "#energy-toggle" ).on( "click", function( event ) {
        energyParagraph.show();
        energyToggle.hide();
        energyToggleUp.show();
      });

      itToggleUp.on( "click", function( event ) {
        itParagraph.hide();
        itToggle.show()
        itToggleUp.hide()
      });

      energyToggleUp.on( "click", function( event ) {
        energyParagraph.hide();
        energyToggle.show();
        energyToggleUp.hide();
      });





});