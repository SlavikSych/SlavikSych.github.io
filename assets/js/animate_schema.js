var schemaFrame = 0,
    animStepDuration = 2340,
    animStep = 1,
    animStepChoosen = 0;
function layerOn(ids){
    var $ids = ids.split(',');
    $.each($ids, function(idx, val){
        $('#'+val+'-act').addClass('fade-in');
        $('#'+val+'-pas').removeClass('fade-in');
    })
}
function layerOff(ids){
    var $ids = ids.split(',');
    $.each($ids, function(idx, val){
        $('#'+val+'-pas').addClass('fade-in');
        $('#'+val+'-act').removeClass('fade-in');
    })
}
function moveIn(obj_nr){
    $('#obj'+obj_nr).addClass('show');
}
function moveOut(obj_nr){
    $('#obj'+obj_nr).addClass('hide');
    setTimeout("$('#obj"+obj_nr+"').removeClass('show').removeClass('hide');", 1500);
}


function initSchemaBuy(){
    $('#arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaBuy()",2000);
}
function animateSchemaBuy(){
    switch(schemaFrame){
        case 0:
            layerOn('arrow3,point1,arrow2,point2'); // initialize
            layerOff('point3');
            schemaFrame = 1; // skip 0 step
            setTimeout(animateSchemaBuy, animStepDuration);
            moveIn(2);
            moveIn(3);
            break;
        case 1:
            //moveOut(2);
            layerOn('point3');
            layerOff('point1,point2');
            schemaFrame = 0;
            setTimeout(animateSchemaBuy, animStepDuration);
            moveOut(2);
            moveOut(3);
            break;
    }
}

function initSchemaSell(){
    $('#arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaSell()",2000);
}
function animateSchemaSell(){
    switch(schemaFrame){
        case 0:
            layerOn('arrow3,point3,arrow2'); // initialize
            layerOff('point1,point2');
            schemaFrame = 1; // skip 0 step
            setTimeout(animateSchemaSell, animStepDuration);
            moveIn(2);
            moveIn(3);
            break;
        case 1:
            //moveOut(2);
            layerOn('point1,point2');
            layerOff('point3');
            schemaFrame = 0;
            setTimeout(animateSchemaSell, animStepDuration);
            moveOut(2);
            moveOut(3);
            break;
    }
}

function initSchemaComplex(){
    $('#arrow1-pas, #arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaComplex()",2000);
}
function animateSchemaComplex(){
    switch(animStep){
        case 1:
        case 4:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point2,arrow1,arrow2');
                    moveOut(1);
                    moveOut(2);
                    if(animStep==4){
                        moveOut(0);
                        moveOut("0-1");
                    }else{
                        moveOut(3);
                    }
                    // initialize
                    layerOn('arrow3,point3');
                    layerOff('point1');
                    schemaFrame = 1;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    if(animStep==4){
                        moveIn(3);
                    }else{
                        moveIn(0);
                        moveIn("0-1");
                    }
                    break;
                case 1:
                    layerOn('point1'); // initialize
                    layerOff('point3');
                    schemaFrame = 2;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    if(animStep==4){
                        moveOut(3);
                    }else{
                        moveOut(0);
                        moveOut("0-1");
                    }
                    break;
                case 2:
                    layerOn('point3'); // initialize
                    layerOff('point1');
                    schemaFrame = 0;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    break;
            }
            break;
        case 2:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point3,arrow2,arrow3');
                    moveOut(0);
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow1,point1');
                    layerOff('point2');
                    schemaFrame = 1;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    moveIn(1);
                    break;
                case 1:
                    layerOn('point2'); // initialize
                    layerOff('point1');
                    schemaFrame = 2;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    moveOut(1);
                    break;
                case 2:
                    layerOn('point1'); // initialize
                    layerOff('point2');
                    schemaFrame = 0;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    break;
            }
            break;
        case 3:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point1,arrow1,arrow3');
                    moveOut(0);
                    moveOut(1);
                    moveOut(3);
                    // initialize
                    layerOn('arrow2,point2');
                    layerOff('point3');
                    schemaFrame = 1;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    moveIn(2);
                    break;
                case 1:
                    layerOn('point3'); // initialize
                    layerOff('point2');
                    schemaFrame = 2;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    moveOut(2);
                    break;
                case 2:
                    layerOn('point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 0;
                    setTimeout(animateSchemaComplex, animStepDuration);
                    break;
            }
            break;
    }
}

function initSchemaReturn(){
    $('#arrow1-pas, #arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaReturn()",2000);
}
function animateSchemaReturn(){
    switch(animStep){
        case 1:
        case 4:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point3,arrow2,arrow3');
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow1,point1');
                    layerOff('point2');
                    schemaFrame = 1;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveIn(1);
                    break;
                case 1:
                    layerOn('point2'); // initialize
                    layerOff('point1');
                    schemaFrame = 2;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveOut(1);
                    break;
                case 2:
                    layerOn('point1'); // initialize
                    layerOff('point2');
                    schemaFrame = 0;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    break;
            }
            break;
        case 2:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point1,arrow1,arrow3');
                    moveOut(1);
                    moveOut(3);
                    // initialize
                    layerOn('arrow2,point2');
                    layerOff('point3');
                    schemaFrame = 1;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveIn(2);
                    break;
                case 1:
                    layerOn('point3'); // initialize
                    layerOff('point2');
                    schemaFrame = 2;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveOut(2);
                    break;
                case 2:
                    layerOn('point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 0;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    break;
            }
            break;
        case 3:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point2,arrow1,arrow2');
                    moveOut(1);
                    moveOut(2);
                    // initialize
                    layerOn('arrow3,point3');
                    layerOff('point1');
                    schemaFrame = 1;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveIn(3);
                    break;
                case 1:
                    layerOn('point1'); // initialize
                    layerOff('point3');
                    schemaFrame = 2;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    moveOut(3);
                    break;
                case 2:
                    layerOn('point2'); // initialize
                    layerOff('point1');
                    schemaFrame = 0;
                    setTimeout(animateSchemaReturn, animStepDuration);
                    break;
            }
            break;
    }
}

function initSchemaArenda() {
    $('#arrow1-pas, #arrow2-pas, #arrows1-pas, #arrows2-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaArenda()", 2000);
}

function animateSchemaArenda() {
    switch (animStep) {
        case 1:
            switch (schemaFrame) {
                case 0:
                    // reset
                    layerOff('point2,arrow2,arrows1,arrows2');
                    moveOut(1);
                    moveOut(2);
                    moveOut(3);
                    moveOut(4);
                    // initialize
                    layerOn('point3,arrow1,point1');
                    if (!animStepChoosen) {
                        showStepPannel(animStep - 1)
                    }
                    schemaFrame = 1;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveIn(0);
                    break;
                case 1:
                    schemaFrame = 2;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveOut(0);
                    break;
                case 2:
                    schemaFrame = 0;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    if (!animStepChoosen) {
                        animStep = 2;
                    }
                    break;
            }
            break;
        case 2:
            switch (schemaFrame) {
                case 0:
                    // reset
                    layerOff('point3,arrow2,arrow1,arrows2');
                    moveOut(0);
                    moveOut(4);
                    // initialize
                    layerOn('point1,arrows1,point2');
                    if (!animStepChoosen) {
                        showStepPannel(animStep - 1)
                    }
                    schemaFrame = 1;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveIn(1);
                    moveIn(2);
                    moveIn(3);
                    break;
                case 1:
                    schemaFrame = 2;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveOut(1);
                    moveOut(2);
                    moveOut(3);
                    break;
                case 2:
                    schemaFrame = 0;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    if (!animStepChoosen) {
                        animStep = 3;
                    }
                    break;
            }
            break;
        case 3:
            switch (schemaFrame) {
                case 0:
                    // reset
                    layerOff('point1,arrow1,point2,arrows1');
                    moveOut(0);
                    moveOut(1);
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow2,point3,arrows2,point2');
                    if (!animStepChoosen) {
                        showStepPannel(animStep - 1)
                    }
                    schemaFrame = 1;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveIn(4);
                    break;
                case 1:
                    schemaFrame = 2;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    moveOut(4);
                    break;
                case 2:
                    schemaFrame = 0;
                    setTimeout(animateSchemaArenda, animStepDuration);
                    if (!animStepChoosen) {
                        animStep = 1;
                    }
                    break;
            }
            break;
    }
}

function initSchemaOutsourcing(){
    $('#arrow1-pas, #arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    $(".pt-shema img[data-step4]").each(function(){
        var src = $(this).attr('src');
        $(this).data('src', src);
    })
    setTimeout("$('.pt-shema').addClass('started');animateSchemaOutsourcing()",2000);
}
var currObj = 2;
function animateSchemaOutsourcing(){
    switch(animStep){
        case 1:
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point3,arrow2,arrow3');
                    moveOut(0);
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow1,point1');
                    layerOff('point3');
                    schemaFrame = 1;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveIn(1);
                    break;
                case 1:
                    layerOn('point2'); // initialize
                    layerOff('point1');
                    schemaFrame = 2;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveOut(1);
                    break;
                case 2:
                    // initialize
                    layerOff('arrow1');
                    layerOn('arrow2,point2');
                    schemaFrame = 3;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveIn(4);
                    break;
                case 3:
                    layerOn('point3'); // initialize
                    layerOff('point2');
                    schemaFrame = 4;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveOut(4);
                    break;
                case 4:
                    layerOn('point1'); // initialize
                    layerOff('point3,arrow2');
                    schemaFrame = 0;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    break;
            }
            break;
        case 2:
        case 3:
            if(schemaFrame>2)
                schemaFrame = 0;
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point1,arrow1,arrow3');
                    moveOut(1);
                    if(animStep==3){
                        moveOut(0);
                        currObj = 2;
                    }
                    moveOut(3);
                    moveOut(4);
                    // initialize
                    layerOn('arrow2,point2');
                    layerOff('point3');
                    if(animStep==3){
                        layerOn('arrow3,point3');
                    }
                    schemaFrame = 1;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveIn(currObj);
                    if(animStep==3){
                        moveIn(5);
                    }

                    break;
                case 1:
                    layerOn('point3'); // initialize
                    layerOff('point2');
                    if(animStep==3){
                        layerOn('point1');
                    }
                    schemaFrame = 2;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveOut(currObj);
                    if(animStep==2){
                        currObj = currObj==2?0:2;
                    }
                    if(animStep==3){
                        moveOut(5);
                    }
                    break;
                case 2:
                    layerOn('point2'); // initialize
                    layerOff('point3');
                    if(animStep==3){
                        layerOff('point1');
                        layerOn('point3');
                    }
                    schemaFrame = 0;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    break;
            }
            break;
        case 4:
            if(schemaFrame>2)
                schemaFrame = 0;
            switch(schemaFrame){
                case 0:
                    // reset
                    layerOff('point1,arrow1,arrow3');
                    moveOut(0);
                    moveOut(1);
                    moveOut(2);
                    moveOut(4);
                    moveOut(5);
                    // initialize
                    layerOn('arrow2,point3');
                    layerOff('point2');
                    schemaFrame = 1;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveIn(3);
                    break;
                case 1:
                    layerOn('point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 2;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    moveOut(3);
                    break;
                case 2:
                    layerOn('point3'); // initialize
                    layerOff('point2');
                    schemaFrame = 0;
                    setTimeout(animateSchemaOutsourcing, animStepDuration);
                    break;
            }
            break;
    }
}

function initSchemaRepair(){
    $('#arrow1-pas, #arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaRepair()",2000);
}
function animateSchemaRepair(){
    switch(animStep){
        case 1:
            switch(schemaFrame){
                case 0:
                    // reset
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow2,arrow3,point2,point1');
                    layerOff('point3');
                    schemaFrame = 1;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    moveIn(0);
                    moveIn(1);
                    break;
                case 1:
                    layerOn('point3'); // initialize
                    layerOff('point1,point2');
                    schemaFrame = 2;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    moveOut(0);
                    moveOut(1);
                    break;
                case 2:
                    layerOn('point1,point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 0;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    break;
            }
            break;
        case 2:
            switch(schemaFrame){
                case 0:
                    // reset
                    moveOut(0);
                    moveOut(1);
                    // initialize
                    layerOn('arrow2,arrow3,point3');
                    layerOff('point2,point1');
                    schemaFrame = 1;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    moveIn(2);
                    moveIn(3);
                    break;
                case 1:
                    layerOn('point1,point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 2;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    moveOut(2);
                    moveOut(3);
                    break;
                case 2:
                    layerOn('point3'); // initialize
                    layerOff('point2,point1');
                    schemaFrame = 0;
                    setTimeout(animateSchemaRepair, animStepDuration);
                    break;

            }
            break;
    }
}

function initSchemaRent(){
    $('#arrow1-pas, #arrow2-pas, #arrow3-pas, #point1-pas, #point2-pas, #point3-pas, .point1-name, .point2-name').addClass('fade-in');
    setTimeout("$('.pt-shema').addClass('started');animateSchemaRent()",2000);
}
function animateSchemaRent(){
    switch(animStep){
        case 1:
            switch(schemaFrame){
                case 0:
                    // reset
                    moveOut(2);
                    moveOut(3);
                    // initialize
                    layerOn('arrow2,arrow3,point2');
                    layerOff('point1,point2');
                    schemaFrame = 1;
                    setTimeout(animateSchemaRent, animStepDuration);
                    moveIn(0);
                    moveIn(1);
                    break;
                case 1:
                    layerOn('point1,point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 2;
                    setTimeout(animateSchemaRent, animStepDuration);
                    moveOut(0);
                    moveOut(1);
                    break;
                case 2:
                    layerOn('point3'); // initialize
                    layerOff('point1,point2');
                    schemaFrame = 0;
                    setTimeout(animateSchemaRent, animStepDuration);
                    break;
            }
            break;
        case 2:
            switch(schemaFrame){
                case 0:
                    // reset
                    moveOut(0);
                    moveOut(1);
                    // initialize
                    layerOn('arrow2,arrow3,point1,point2');
                    layerOff('point3');
                    schemaFrame = 1;
                    setTimeout(animateSchemaRent, animStepDuration);
                    moveIn(2);
                    moveIn(3);
                    break;
                case 1:
                    layerOn('point3'); // initialize
                    layerOff('point1,point2');
                    schemaFrame = 2;
                    setTimeout(animateSchemaRent, animStepDuration);
                    moveOut(2);
                    moveOut(3);
                    break;
                case 2:
                    layerOn('point1,point2'); // initialize
                    layerOff('point3');
                    schemaFrame = 0;
                    setTimeout(animateSchemaRent, animStepDuration);
                    break;

            }
            break;
    }
}


function showStepPannel(index) {
    var panel = $('.steps-pannel li').eq(index);
    if ($(panel).length > 0) {
        $('.steps-pannel li').not($(panel)).removeClass('active');
        $(panel).addClass('active');
    }
}

function setAnimStep(step) {
    animStep = step;
    shemaFrame = 0;
    $(".pt-shema img[data-src]").each(function(){
        var src = $(this).attr('src');
        $(this).attr('src', $(this).data('src')).data('src', src);
    })
    if(animType=="outsourcing"){
        if(animStep!=4) {
            $(".pt-shema img[data-step4]").each(function () {
                $(this).attr('src', $(this).data('src'));
            })
        }else{
            $(".pt-shema img[data-step4]").each(function () {
                $(this).attr('src', $(this).data('step4'));
            })
        }
    }
}

$(function(){
    switch (animType) {
        case "buy":
            setTimeout(initSchemaBuy, 200);
            break;
        case "sell":
            setTimeout(initSchemaSell, 200);
            break;
        case "complex":
        case "return":
            setTimeout(initSchemaComplex, 200);
            break;
        case "return_shop":
            setTimeout(initSchemaReturn, 200);
            break;
        case "outsourcing":
            setTimeout(initSchemaOutsourcing, 200);
            break;
        case "repair":
            setTimeout(initSchemaRepair, 200);
            break;
        case "rent":
            setTimeout(initSchemaRent, 200);
            break;
        case "arenda":
            setTimeout(initSchemaArenda, 200);
            break;
    }
});


$(function(){
    $('[data-toggle=steps]').data('last-step', false);
    $('.steps a').click(function(e){
        e.preventDefault();
        var parent = $(this).parent();
        var index = parent.index();
        animStepChoosen = 1;
        setAnimStep(index+1);
        parent.parents('.steps').children().removeClass('active');
        parent.addClass('active');
        if($('.steps li.active').index() == $('.steps li').length-1){
            if(!$('[data-toggle=steps]').data('last-step')){
                var txt = $('[data-toggle=steps]').text();
                $('[data-toggle=steps]').text($('[data-toggle=steps]').data('text')).data('text', txt).data('last-step', true);
            }
        }else{
            if($('[data-toggle=steps]').data('last-step')){
                var txt = $('[data-toggle=steps]').text();
                $('[data-toggle=steps]').text($('[data-toggle=steps]').data('text')).data('text', txt).data('last-step', false);
            }
        }

        showStepPannel(index);
    })
    $('[data-toggle=steps]').on('click', function(){
        if($('[data-toggle=steps]').data('last-step')){
            $($('.steps li').eq(0)).find('a').click();
        }else{
            var active = $('.steps li.active').index();
            if($($('.steps li').eq(active+1)).length > 0){
                $($('.steps li').eq(active+1)).find('a').click();
            }
        }
    })
})