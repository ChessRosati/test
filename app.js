Plotly.d3.csv("./cleaned_wine_v2(syrah).csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allCountryNames = unpack(rows, 'country'),
        allPrice = unpack(rows, 'price'),
        allPoints = unpack(rows, 'points'),
        listofCountries = [],
        currentCountry,
        currentPoints = [],
        currentPrice = [];

    for (var i = 0; i < allCountryNames.length; i++ ){
        if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
            listofCountries.push(allCountryNames[i]);
        }
    }

    function getCountryData(chosenCountry) {
        currentPoints = [];
        currentPrice = [];
        for (var i = 0 ; i < allCountryNames.length ; i++){
            if ( allCountryNames[i] === chosenCountry ) {
                currentPoints.push(allpoints[i]);
                currentPrice.push(allPrice[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('USA');

    function setBubblePlot(chosenCountry) {
        getCountryData(chosenCountry);

        var trace1 = {
            x: currentPrice,
            y: currentPoints,
            mode: 'markers',
            marker: {
                size: 12,
                opacity: 0.5
            }
        };

        var data = [trace1];

        var layout = {
            title:'Scatter Plot',
            height: 400,
            width: 480
        };

        Plotly.newPlot('myDiv', data, layout);
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        countrySelector = innerContainer.querySelector('.countrydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofCountries, countrySelector);

    function updateCountry(){
        setBubblePlot(countrySelector.value);
    }

    countrySelector.addEventListener('change', updateCountry, false);
});
