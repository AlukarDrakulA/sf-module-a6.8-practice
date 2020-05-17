let currentProgress = 0;

function onePer() {
    currentProgress += 1;
    $('#myBar').prop("style", "width: " + currentProgress + "%");
    // console.log(currentProgress);
}

function threePer() {
    currentProgress += 3;
    $('#myBar').prop("style", "width: " + currentProgress + "%");
    // console.log(currentProgress);
}

function sevenPer() {
    currentProgress += 7;
    $('#myBar').prop("style", "width: " + currentProgress + "%");
    // console.log(currentProgress);
}

$('#onePercent').click(function() {
    onePer();
});

$('#threePercent').click(function() {
    threePer();
});

$('#sevenPercent').click(function() {
    sevenPer();
});

// console.log("скрипт подгрузился");
