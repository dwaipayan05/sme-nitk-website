(function ($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function(){
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });

    $('#gender').parent().append('<ul class="list-item" id="newgender" name="gender"></ul>');
    $('#gender option').each(function(){
        $('#newgender').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#gender').remove();
    $('#newgender').attr('id', 'gender');
    $('#gender li').first().addClass('init');
    $("#gender").on("click", ".init", function() {
        $(this).closest("#gender").children('li:not(.init)').toggle();
    });

    $('#event-list').parent().append('<ul class="list-item" id="newevent-list" name="event-list"></ul>');
    $('#event-list option').each(function(){
        $('#newevent-list').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    });
    $('#event-list').remove();
    $('#newevent-list').attr('id', 'event-list');
    $('#event-list li').first().addClass('init');
    $("#event-list").on("click", ".init", function() {
        $(this).closest("#event-list").children('li:not(.init)').toggle();
    });

    var allOptions = $("#event-list").children('li:not(.init)');
    $("#event-list").on("click", "li:not(.init)", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#event-list").children('.init').html($(this).html());
        allOptions.toggle();
    });

    var genderOptions = $("#gender").children('li:not(.init)');
    $("#gender").on("click", "li:not(.init)", function() {
        genderOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#gender").children('.init').html($(this).html());
        genderOptions.toggle();
    });
})(jQuery);
