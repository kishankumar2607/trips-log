"use strict";

//trip list module
class Trip {
    constructor(destination, km, litres) {
        this.destination = destination;
        this.km = parseFloat(km);
        this.litres = parseFloat(litres);
    }

    //validate destination
    get isValid() {
        return this.destination !== "" && !isNaN(this.km) && !isNaN(this.litres) && this.km > 0 && this.litres > 0;
    }

    //calculate kilometers per liter (KML)
    get kml() {
        return this.km / this.litres;
    }

    //return a string representation of the trip
    toString() {
        return `${this.destination}: Kilometers - ${this.km}; KML - ${this.kml.toFixed(1)}`;
    }
}

//trip list module
const trips = (function () {
    const _trips = []; // Private variable to store trips

    //public methods to manipulate the trip list module
    function push(trip) {
        if (trip instanceof Trip) {
            _trips.push(trip);
        }
    }

    //calculate and return the average KML of all trips in the list
    function totalKml() {
        const totalKm = _trips.reduce((sum, trip) => sum + trip.km, 0);
        const totalLitres = _trips.reduce((sum, trip) => sum + trip.litres, 0);
        return totalKm / totalLitres;
    }

    //return a string representation of all trips in the list, including the cumulative KML
    function toString() {
        let str = _trips.map(trip => trip.toString()).join("\n");
        str += `\n\nCumulative KML: ${totalKml().toFixed(1)}`;
        return str;
    }

    return {
        push,
        get totalKml() { return totalKml(); },
        toString
    };
})();
