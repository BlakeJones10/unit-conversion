/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', () => {
    let outputLength = document.getElementById('output-length')
    let outputVolume = document.getElementById('output-volume')
    let outputMass = document.getElementById('output-mass')

    let input = document.getElementById('input');

    function convertLengthToFeet(value) {
        return value * 3.281
    }

    function convertLengthToMeters(value) {
        return value / 3.281
    }

    function convertVolumeToGallons(value) {
        return value * 0.264
    }

    function convertVolumeToLiters(value) {
        return value / 0.264
    }

    function convertMassToPounds(value) {
        return value * 2.204
    }

    function convertMassToKilograms(value) {
        return value / 2.204
    }

    outputLength.innerHTML = `${input.value} meters = ${convertLengthToFeet(input.value).toFixed(3)} feet | ${input.value} feet = ${convertLengthToMeters(input.value).toFixed(3)} meters`
    outputVolume.innerHTML = `${input.value} liters = ${convertVolumeToGallons(input.value).toFixed(3)} gallons | ${input.value} gallons = ${convertVolumeToLiters(input.value).toFixed(3)} liters`
    outputMass.innerHTML = `${input.value} kilograms = ${convertMassToPounds(input.value).toFixed(3)} pounds | ${input.value} pounds = ${convertMassToKilograms(input.value).toFixed(3)} kilograms`
});
