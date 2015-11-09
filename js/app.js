define(['jquery', 'Materialize'], function ($, Materialize) {

    $(document).ready(function () {

        //search
        $('.show-search').click(function () {
            $('.search-out').fadeToggle("50", "linear");
        });

        //init waves
        Waves.displayEffect();

        //user dropdown button
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false,
            hover: false, // Activate on click
            alignment: 'left',
            gutter: 0, // Spacing from edge
            belowOrigin: true // Displays dropdown below the button
        });

        //sidebar
        $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: false
        });

        $('.subscription').click(function (e) {
            var subscribeButton = e.target;
            // console.log(e.target.text);
            if (e.target.text === 'Subscribe')
                subscribeButton.innerHTML = 'Unsubscribe';
            else
                subscribeButton.innerHTML='Subscribe';
        })
    })

})