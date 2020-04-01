// Only change code below this line
class Thermostat {
    constructor(fahr){
        this.fahr = fahr;
    }
    //getter
    get temperature() {
        return 5/9 * (this.fahr - 32);
    }

    //setter
    set temperature (temp) {
        this.fahr = temp * 9.0 / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

