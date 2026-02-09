function triangleArea(base, height) 
{
    return (base * height) / 2;
}

console.log(triangleArea(3, 4).toFixed(1));
console.log(triangleArea(5, 7).toFixed(1));

function sphereVolume(radius) 
{
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

console.log(sphereVolume(3).toFixed(1));
console.log(sphereVolume(5).toFixed(1));


function convertToMeters(distance, unit) 
{

    // short-circuit conditions
    if (distance === 0 || unit === "m") 
    {
        return distance;
    }

    let meters;

    switch (unit) 
    {
        case "km":
            meters = distance * 1000;
            break;
        case "y":
            meters = distance * 0.9144;
            break;
        case "mi":
            meters = distance * 1609.34;
            break;
        default:
            meters = NaN; // invalid unit
    }

    return meters;
}


console.log(convertToMeters(50, "m").toFixed(2));
console.log(convertToMeters(100, "y").toFixed(2));
console.log(convertToMeters(1, "mi").toFixed(2));
console.log(convertToMeters(1.234, "km").toFixed(2));


function timeToSeconds(time) 
{
    const parts = time.split(":").map(Number);

    let seconds = 0;

    switch (parts.length) 
    {
        case 3: // HH:MM:SS
            seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
            break;
        case 2: // MM:SS
            seconds = parts[0] * 60 + parts[1];
            break;
        case 1: // SS
            seconds = parts[0];
            break;
    }

    return seconds;
}
console.log(timeToSeconds("02:33:21"));
console.log(timeToSeconds("00:04:51"));
console.log(timeToSeconds("04:51"));
console.log(timeToSeconds("00:13"));
console.log(timeToSeconds("13"));

