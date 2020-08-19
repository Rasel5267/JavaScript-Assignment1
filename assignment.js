// Feet To Mile Convert
function feetToMile(feet){
    if (feet == 0){
        return 0;
    }
    else if(feet > 0){
        return feet * 0.000189394;
    }
    else{
        return "Length can not be negative."
    }
}


//Wood Calculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}


//tiny Friends
function tinyFriend(names){
    var tiny = names[0];
    for(var i =0; i< names.length; i++){
        var currentName = names[i];
        if(currentName.length < tiny.length){
            tiny = currentName;
        }
    }
    return tiny;
}

//Brick calculator
function brickCalculator(floor){
    if(floor <=10){
        var firstFloorNum = floor * 15;
        var brick = firstFloorNum * 1000;       
    }
    else if(floor<=20){
        var firstFloorNum = 150000;
        var remaining = floor - 10;
        var secondFloor = remaining * 12;
        var secondFloorNum = secondFloor * 1000;
        var brick = firstFloorNum +  secondFloorNum;
    }
    else{
        var firstFloorNum = 150000;
        var secondFloorNum = 120000;
        var remaining = floor - 20;
        var thirdFloor = remaining * 10;
        var thirdFloorNum = thirdFloor * 1000;
        var brick = firstFloorNum + secondFloorNum + thirdFloorNum;
    }
    return brick;
}
var result = brickCalculator(21);
console.log(result);