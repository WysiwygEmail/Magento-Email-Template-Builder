/* Pokiaľ užívateľ klikne na class site-navbar, tak sa odstráni homepage content - texty  

$(document).ready(function(){
    $(".site-navbar").click(function(){
        $( "#homepage_container" ).remove();
    });
});

*/