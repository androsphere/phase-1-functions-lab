// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let blocks;
    if (value >= 42){
        blocks = value - 42;
    }
    else if ( value < 42 ){
        blocks = 42 - value;
    }
    return blocks;
}
function distanceFromHqInFeet(value){
   let feet = distanceFromHqInBlocks(value) * 264;
   return feet;

}
function distanceTravelledInFeet(value1, value2){
    let feet;
    if (value1 >= value2){
        feet = (value1 - value2) * 264;
    } 
    else if (value1 < value2){
        feet = (value2 - value1) * 264;
    }
    return feet;

}
function calculatesFarePrice(value1, value2){
    let fare;
    let message;
    let feet = distanceTravelledInFeet(value1 , value2)
    if (feet <= 400){
        message = 0;
    } else if (400 <= feet && feet <= 2000){
        fare = (feet - 400) * 0.02;
        message = fare;
    } else if (feet > 2000 && feet <= 2500){
        message = 25;
    } else if (feet > 2500){
        message = "cannot travel that far"
    }
    return message;

}