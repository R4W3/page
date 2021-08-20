$( document ).ready(function() {
    console.log( "YES BITCHES!" );
    $( "#nav_home" ).click(function (){
        $( "#c_home" ).show();
        $( "#c_software" ).hide();
        $( "#c_blog" ).hide();
        $( "#c_contact" ).hide();
    });
    $( "#nav_software" ).click(function (){
        $( "#c_home" ).hide();
        $( "#c_software" ).show();
        $( "#c_blog" ).hide();
        $( "#c_contact" ).hide();
    });
    $( "#nav_blog" ).click(function (){
        $( "#c_home" ).hide();
        $( "#c_software" ).hide();
        $( "#c_blog" ).show();
        $( "#c_contact" ).hide();
    });
    $( "#nav_contact" ).click(function (){
        $( "#c_home" ).hide();
        $( "#c_software" ).hide();
        $( "#c_blog" ).hide();
        $( "#c_contact" ).show();
    });
});