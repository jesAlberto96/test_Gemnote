var myChart = false;
var vm = new Vue({
    el: '#app',

    created: function(){
        this.getGifts();
    },

    mounted: function () {
        myChart = initChartCircle();
    },
    data: {
        menuOptions: [
            { title: 'Dashboard' },
            { title: 'Orders' },
            { title: 'Send a gift' },
            { title: 'Users' },
            { title: 'Integrations' },
            { title: 'Setting' },
            { title: 'Logout' },
        ],
        urlsImages: [
            { url: 'images/imageOne.png' },
            { url: 'images/imageTwo.png' },
            { url: 'images/imageThree.png' },
            { url: 'images/imageFour.png' },
        ]
    },
    methods: {
        getGifts: function () {
            axios.get('https://my.api.mockaroo.com/gifts.json?key=b31024f0')
            .then(function (response) {
                processedData = processData(response.data);
                myChart = initChart(processedData.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
})