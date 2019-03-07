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
// The platform.sh stuff.
// var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?'
// var webfrm_url = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/webform_rest/swl_create_service/submissions/1_format=json?'


//
// main()
//
function getWebformSubmission()  {
    // auth = 'Basic' + new Buffer("admin:swladmin").toString('base64');
    var purl = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/user/login?_format=json'
    var options = {
        url: purl,
        json: true,
        jar: true,
        body: {
          name: 'admin',
          pass: 'swladmin'
        }
    }

    request.post(options, (err, resp, body) => {
        if (err)  {
            console.error ("Error authenticating", err);
        } else {
          console.log('Login output ', JSON.stringify(resp.body, null, 2));
          var webfrm_url = 'https://master-7rqtwti-bzrfe2fjw7z3k.eu-2.platformsh.site/webform_rest/swl_create_service/submission/1?_format=json';
            var options_webfrm = {
                url: webfrm_url,
                headers: [{
                  'X-CSRF-Token': resp.body.csrf_token,
                  'cache-control': 'no-cache'
                }],
                json: true,
                jar: true
            };
            request.get(options_webfrm, (err, resp, body) => {
                console.log('Form data ', JSON.stringify(resp.body, null, 2));
            });
        }
    });
}

getWebformSubmission();
