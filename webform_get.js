/* get webform submissions from Drupal 8 site. SHMG.
 *
 */

var request = require('request')

function getWebformSubmission()  {
    var purl = 'http://192.168.1.45:32798/user/login?_format=json'
    var webfrm_url = 'http:/192.168.1.45:32789/webform_rest/swl_create_service/submissions/1_format=json?'
    // var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?'
    // var webfrm_url = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/webform_rest/swl_create_service/submissions/1_format=json?'

    auth = 'Basic' + new Buffer("admin:swladmin").toString('base64');

    var options = {
        url: purl,
        jar: true,
        headers: {
            "Authorization": auth
        }
    }

    function req_callback (err, resp, body) {
        if (err)  {
            console.error ("Error authenticating", err);
        } else {
            console.log ("Response: ")
            console.log ("Body: ")
        }
    }


    function req_callback_webform (err, resp, body) {
        if (err)  {
            console.error ("Error authenticating", err);
        } else {
            console.log ("Response: ")
        }
    }


    request.get(options, req_callback)
    request.get(webfrm_url, req_callback_webform)
}

getWebformSubmission();

