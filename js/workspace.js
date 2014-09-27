$(document).ready(function(){
    $('.command-object').draggable({
        snap:true,
        snapMode: "inner",
        revert: "invalid",
        helper: "clone"
    });

    $('.command-placeholder').droppable({
        accept: ".command-object",
        drop: function(event, ui){
            $(this).find('h4').remove();
            $(ui.draggable).clone().appendTo(this);
            console.log($("#workspace-main .workspace-row").last());
            $("#workspace-main .workspace-row").first().clone().appendTo($(this).parent().parent()).removeClass("hidden");
        }
    });

    $('#save-data').on('click', function(){
        var dataObjects = $('#workspace-main').find('.input-group.command-object');
        var arrayObjects = [];
        var dataFormat = {};
        $.each(dataObjects, function(index, value){
           dataFormat['data-type'] = $(value).attr('data-type');
           dataFormat['data-direction'] = $(value).attr('data-direction');
           dataFormat['data-steps'] = $(value).attr('data-steps');
           arrayObjects.push(dataFormat);
        });
        console.log(dataObjects.length);
        console.log(arrayObjects);
    });
});
