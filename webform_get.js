/* get webform submissions from Drupal 8 site. SHMG.
 *
 */

var request = require('request')

function getWebformSubmission()  {
    var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?'
    var webfrm_url = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/webform_rest/swl_create_service/submissions/1_format=json?'

    var user = new Object()
    user.name = 'admin'
    user.pass = 'swladmin'

    auth = 'Basic' + new Buffer("admin:swladmin").toString('base64');

    var json_user = JSON.stringify (user)

    var options = {
        jar: true,
        url: purl,
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

