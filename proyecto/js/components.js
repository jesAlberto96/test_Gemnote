Vue.component('menu-option', {
    props: ['title'],
    template: '<li class="has-sub"><a title="" href="#" v-text="title"></a>'
});

Vue.component('image-page', {
    props: ['src'],
    template: `<div class="col-md-2 col-sm-12 col-xs-12">
                <img :src="src" width="200" height="200">
            </div>`
});

Vue.component('section-one', {
    props: [],
    template: `<div class="col-md-6 col-sm-12 col-xs-12" style="position: relative;left: 5%;">
            <div class="card" style="width: 90%;height: 100%;">
                <div class="card-body">
                    <div class="row" style="height: 90%;">
                        <div class="col-md-5 col-sm-12 col-xs-12" style="border-right-style: ridge;">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <h6 class="card-title">Total number of orders this month</h6>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <h1>2,736</h1>
                                </div>
                            </div>
                        </div>
                        <!-- <hr class="lineSeparator"> -->
                        <div class="col-md-7 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <h6 class="card-title">Average number of shipments/month</h6>
                                </div>
                                <div class="col-md-5 col-sm-12 col-xs-12" align="center" style="padding-top: 8%;">
                                    <h1>365</h1>
                                </div>
                                <div class="col-md-7 col-sm-12 col-xs-12" style="padding-top: 10%;">
                                    <button type="button" class="btn btn-outline-secondary">View orders</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});


Vue.component('section-two', {
    props: [],
    template: `<div class="col-md-6 col-sm-12 col-xs-12" style="position: relative;left: 2%;">
            <div class="card" style="width: 90%;height: 100%;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="chart-container" style="position: relative;height: 16vh;width: 152%;left: -28%;">
                                <canvas id="myChartCircle"></canvas>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12" style="margin-top: 2%;">
                                    <h6 class="card-title">Current inventory</h6>
                                </div>
                                <div class="col-md-4 col-sm-12 col-xs-12" style="margin-top: 6%;">
                                    <h1 class="card-title">400</h1>
                                </div>
                                <div class="col-md-8 col-sm-12 col-xs-12" style="margin-top: 7%;">
                                    <button type="button" class="btn btn-outline-secondary">Manage inventory</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});

Vue.component('section-three', {
    props: ['images'],
    template: `<div class="col-md-12 col-sm-12 col-xs-12" style="position: relative;left: 5%;">
                <div class="card" style="width: 92%;margin-top: 3%;">
                    <div class="card-body">
                        <div class="row" style="margin-bottom: 1%;">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <h6 class="card-title">Trending gifts in your store</h6>
                            </div>
                        </div>
                        <div class="row">
                            <image-page v-for="item in images" v-bind:src="item.url"></image-page>
                            <div class="col-md-4 col-sm-12 col-xs-12" align="center">
                                <button type="button" class="btn btn-outline-secondary" style="width: 45%;margin-top: 18%;">Send a gift</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>`
});

Vue.component('section-four', {
    props: [],
    template: `<div class="col-md-12 col-sm-12 col-xs-12" style="position: relative;left: 5%;">
                <div class="card" style="width: 92%;margin-top: 3%;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <h6 class="card-title">Total gifts sent this year</h6>
                            </div>
                            <div class="col-md-4 col-sm-12 col-xs-12" align="right">
                                <button type="button" class="btn btn-outline-secondary">Download report</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="chart-container" style="position: relative; height:50vh; width: 100%;">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
});