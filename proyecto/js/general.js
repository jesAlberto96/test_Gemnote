var myChart;
var labels = [];
var data = {},
  processedData = {},
  orderClosingByMonth = {};

function initChart(data) {
    var ctx = document.getElementById('myChart').getContext('2d');

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: '',
                data: [data.Jan, data.Feb, data.Mar, data.Apr, data.May, data.Jul, data.Jun, data.Aug, data.Sep, data.Oct, data.Nov, data.Dec],
                backgroundColor: [
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',

                ],
                width: [
                    '10px'
                ],
                borderColor: [
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(247, 247, 247, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',
                    'rgba(223, 223, 223, 1)',

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        display: false,
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            responsive: true,
        }
    });
}

function initChartCircle() {
    var ctx = document.getElementById('myChartCircle').getContext('2d');

    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Inventory one', 'Inventory two'],
            datasets: [{
                label: '',
                data: [getRandomInt(400), getRandomInt(400)], //for time I emulated the numbers, sorry!
                backgroundColor: [
                    'rgba(223, 223, 223, 1)',
                    'rgba(247, 247, 247, 1)',
                ],
                width: [
                    '10px'
                ],
                borderColor: [
                    'rgba(247, 247, 247, 1)',
                    'rgba(223, 223, 223, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
        }
    });
}


var processData = function (jsonData) {

    var jsonVal = jsonData;

    var dataSet = [];

    var date;
    var locale = "en-us";
    var months = Object.keys(jsonVal).map(function (index) {
        date = new Date(jsonVal[index].fecha);
        return date.toLocaleDateString(locale, {
            month: "short"
        });
    }).filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    });

    function sortByMonth(arr) {
        var exactMonths = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        arr.sort(function (a, b) {
            return exactMonths.indexOf(a) - exactMonths.indexOf(b);
        });
        return arr;
    };

    labels = sortByMonth(months);

    for (var i = 0, total = labels.length; i < total; i++) {
        orderClosingByMonth[labels[i]] = {
            allValue: []
        }
    }

    var thisMonth;
    Object.keys(jsonVal).filter(function (item) {
        date = new Date(jsonVal[item].fecha + " 00:00:00");
        thisMonth = date.toLocaleDateString(locale, {
            month: "short"
        });

        orderClosingByMonth[thisMonth]["allValue"].push(parseFloat(jsonVal[item]));

        return 0;
    });

    for (const month in orderClosingByMonth) {
        let cant = orderClosingByMonth[month].allValue.length;
        dataSet[month] = cant;
    }

    return {
        labels: labels,
        data: dataSet
    }
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}