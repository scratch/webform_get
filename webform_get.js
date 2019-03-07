/* get webform submissions from Drupal 8 site. SHMG.
 *
 * TODO:
 * 1. Make the request() calls work sequentially, without calling the second
 * request() inside the callback
 * 2. Get cookie result of login request.
 * 3. Make login REST call work with ?_format=json
 * 4. Make login REST call work with POST (same as #3?)
 * 5. nodejs resource; which website?
 * 6. Finally, make webform GET to work!
 */

var request = require('request')


var purl = 'http://192.168.1.45:32798/user/login'
// var webfrm_url = 'http:/192.168.1.45:32798/webform_rest/swl_create_service/submission/1?_format=json'
var webfrm_url = 'http://192.168.1.45:32798/webform_rest/swl_create_service/submission/1'
// The platform.sh stuff.
// var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?'
// var webfrm_url = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/webform_rest/swl_create_service/submissions/1_format=json?'

function req_callback_webform (err, resp, body) {
    if (err)  {
        console.error ("Error authenticating", err);
    } else {
        console.log ("Response: ")
        console.log ("Body: ")
    }
}


var options_webfrm = {
    url: webfrm_url,
    jar: true,
    json: true,
    auth: {
        'bearer': 'bearerToken'
    }
};


function req_callback (err, resp, body) {
    if (err)  {
        console.error ("Error authenticating", err);
    } else {
        console.log ("Response: ")
        console.log ("Body: ")
        request.get(options_webfrm, req_callback_webform).on ('data', function(data) {
            console.log ('data: ' + data)
        });
    }
}


//
// main()
//
function getWebformSubmission()  {
    auth = 'Basic' + new Buffer("admin:swladmin").toString('base64');

    var options = {
        url: purl,
        jar: true,
        headers: {
            "Authorization": auth
        }
    }

    console.log ("\n\n\nJUST A BIG LINE --- \n\n\n");
    request.get(options, req_callback)
    console.log ("\n\n\nYET ANOTHER  BIG LINE --- \n\n\n");
}

getWebformSubmission();

