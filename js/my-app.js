// Initialize your app
var myApp = new Framework7({material: true});


// Export selectors engine
var $$ = Dom7;

myApp.loginScreen('.login-screen');
setTimeout(function() {
    myApp.closeModal('.login-screen.modal-in');
}, 1000);

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$('#check-polis').on('click', function (e) {
    var serial = $$('[name=serial]').val(),
        number = $$('[name=number]').val(),
        code = $$('[name=code]').val();
    console.log(serial, number, code);
    console.log(1, document.getElementById('dkbm'));
    console.log(2, document.getElementById('dkbm').contentWindow);
    console.log(3, document.getElementById('dkbm').contentWindow.document);
    console.log(4, document.getElementById('dkbm').contentWindow.document.cookie);
    $$.ajax({
        method: 'POST',
        url: 'http://dkbm-web.autoins.ru/dkbm-web-1.0/bsostate.htm',
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        data: 'bsoseries=' + serial + '&bsonumber=' + number + '&answer=' + code,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
        },
        success: function(data, code, result) {
            $$('#dkbm-captcha').attr('src', 'http://dkbm-web.autoins.ru/dkbm-web-1.0/simpleCaptcha.png?' + Math.random());

            console.log(data, result);
        },
        error: function(e) {
            console.log(e);
        }
    });
})
//
// // Callbacks to run specific code for specific pages, for example for About page:
// myApp.onPageInit('about', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });
//
// // Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.router.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }
