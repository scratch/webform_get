/* get webform submissions from Drupal 8 site. SHMG.
 *
 */

var request = require('request')

function getWebformSubmission()  {
    var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?_format=json'
    var user = new Object()
    user.name = 'admin'
    user.pass = 'swladmin'

    var json_user = JSON.stringify (user)

    var options = {
        url: purl,
        json: true,
        data: {
            json_user
        }
    }

    function req_callback (err, resp, body) {
        if (err)  {
            console.error ("Error authenticating", err);
        } else {
            console.log ("Response: ", resp)
            console.log ("body: ", body)
        }
    }

    request.post(options, req_callback)
}

getWebformSubmission();

