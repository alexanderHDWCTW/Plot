(function($) 
{
    $area.scroll(function(e) 
    {
        if($(this).scrollBottom() < $('.fyes').offset().top)
            alert("Zomg you scrolled to my box!");
    });
})