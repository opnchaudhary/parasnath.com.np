function getPrograms(){
    $('#media-menu').hide();
    $.get("/ajax/programs.html", function(data, status){
        $('#main-content').html(data);
    });
    $.get("/ajax/programs-left-panel.html", function(data, status){
        $('#left-dynamic-panel').html(data);
    });
    $.get("/ajax/programs-right-panel.html", function(data, status){
        $('#right-dynamic-panel').html(data);
    })
}
function getPad(){
    $('#media-menu').show();
    $.get("./ajax/pad.html", function(data, status){
        $('#main-content').html(data);
    });
    $.get("./ajax/pad-left-panel.html", function(data, status){
        $('#left-dynamic-panel').html(data);
    });
    $.get("./ajax/pad-right-panel.html", function(data, status){
        $('#right-dynamic-panel').html(data);
    })
}
function getLive(){
    $('#media-menu').hide();
    $.get("./ajax/live.html", function(data, status){
        $('#main-content').html(data);
    });
    $.get("./ajax/live-left-panel.html", function(data, status){
        $('#left-dynamic-panel').html(data);
    });
    $.get("./ajax/live-right-panel.html", function(data, status){
        $('#right-dynamic-panel').html(data);
    })
}
$(document).ready(function(){
    getPrograms();
    $('#programs-menu').click(function(){
        getPrograms();
    })
    $('#pad-menu').click(function(){
        getPad();
    })
    $('#live-menu').click(function(){
        getLive();
    });

    $('#open-left-panel').click(function() {
        console.log('open left panel');
        var leftPanel = $("#left-panel");
        leftPanel.removeClass('d-none');
    });
    $('#open-right-panel').click(function() {
        console.log('open right panel');
        var rightPanel = $("#right-panel");
        rightPanel.removeClass('d-none');
    });
    $('#close-left-panel').click(function(){
        $('#left-panel').addClass('d-none');
    });
    $('#close-right-panel').click(function(){
        $('#right-panel').addClass('d-none');
    });


    $(".collapse.show").each(function(){
        $(this).prev("h2").find(".fa").addClass("fa-play").removeClass("fa-sort-down");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev("h2").find(".fa").removeClass("fa-play").addClass("fa-sort-down");
    }).on('hide.bs.collapse', function(){
        $(this).prev("h2").find(".fa").removeClass("fa-sort-down").addClass("fa-play");
    });

});
