define(['jquery', 'Materialize', 'jquerymock'], function ($) {
    $(document).ready(function () {

        //search
        $('.show-search').click(function () {
            $('.search-out').fadeToggle("50", "linear");
        });

        //init waves
        Waves.displayEffect();

        //user dropdown button
        setTimeout(function () {
            $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 500,
                constrain_width: false,
                hover: false, // Activate on click
                alignment: 'right',
                gutter: 0, // Spacing from edge
                belowOrigin: true // Displays dropdown below the button
            });
        }, 1000);

        //sidebar
        $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: false
        });



    });
    //mocking api call
    $.mockjax({
        url: "/api/sidemenu/usr",
        proxy: 'mocks/sidemenu/sidemenu-usr.json'
    });
    $.mockjax({
        url: "/api/sidemenu/sa",
        proxy: 'mocks/sidemenu/sidemenu-sa.json'
    });
    $.mockjax({
        url: "/api/sidemenu/aa",
        proxy: 'mocks/sidemenu/sidemenu-aa.json'
    });
    $.mockjax({
        url: "/api/applications",
        proxy: 'mocks/applications/list.json'
    });
    $.mockjax({
        url: "/api/application/*",
        proxy: 'mocks/applications/demoapp.json'
    });

    window.topicPageComponents = function () {
        $('.subscription').click(function (e) {
            var subscribeButton = e.target;
            console.log(subscribeButton.tagName);
            if (subscribeButton.tagName === 'A') {
                if (e.target.text === 'Subscribe')
                    subscribeButton.innerHTML = 'Unsubscribe';
                else
                    subscribeButton.innerHTML = 'Subscribe';
            } else {
                if (subscribeButton.getAttribute('src') === 'images/pause-blue.png')
                    subscribeButton.setAttribute('src', 'images/play-blue-2.png');
                else
                    subscribeButton.setAttribute('src', 'images/pause-blue.png');
            }

        });
    };

});