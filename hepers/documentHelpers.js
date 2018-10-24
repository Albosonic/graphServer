var request = require('request');

module.exports = {
  fetchDocumentHistory: (cookie, cb) => {
    let options = {
      url: 'https://www.test.rocketlawyer.com/document/131532233/documentHistory?document_type=document',
      headers: {
        'Accept': 'application/json',
        'Cookie':'__utmc=264602764; __utmz=264602764.1537295717.1.1.utmcsr=localhost:8003|utmccn=(referral)|utmcmd=referral|utmcct=/; _ga=GA1.2.2004600010.1537295717; _gcl_au=1.1.1306646777.1537295928; rmStore=amid:43086; __ssid=7d863dd53cfa8dc15427ff45f561ccd; optimizelyEndUserId=oeu1537306299062r0.41657553844054895; __utma=264602764.2004600010.1537295717.1537295717.1537410805.2; lithiumSSO%3Ajwrky32358=~2YqYZ9Lwn1cUuighC~PZ51ZczpGrlPaFyN0y6cKbn6-OMqUA6smUPTozRmkbB1VYp2zSMHYRFfjW2eutyIDxOhIGBxs2iK7FAo9PbZvCXrjWIz7Q4Qiyzp9F9zLZ2g_L9DPnDjfhCKVYmcoIxdPGyolwfLtU8k6_0CVHrf-PtLmZEvUvGKTub2vibC_3cI7j7G5AQYvam8UMSiw_UzfDW-gbJziiEo3JVGdeuQBYt7yaufvc58-usLOL3jz8-QeBhgIuw5vHEl-oSt7C2RAxG1Gew5yQpzkRj44hIYY1lKPn8OSHz5ZIaZBzeiuoCX1YPOqgmuE4XpjBX1nWqtGKHSm8KVJa-wL0bJa1iKeJRDmvb5282LErHhoT58mAPcAsWta7mvQRUkYg9z2mphhufQA4nthvOXLQ8s-3NcWMxYLpkXujqPoA2sYO4Q-EreTX_7DfuVktMxpli0ZDv10f4-6c4w4jXsIkVTZ9vCDg..; lithiumSSO%253Ajwrky32358=~2YqYZ9Lwn1cUuighC~PZ51ZczpGrlPaFyN0y6cKbn6-OMqUA6smUPTozRmkbB1VYp2zSMHYRFfjW2eutyIDxOhIGBxs2iK7FAo9PbZvCXrjWIz7Q4Qiyzp9F9zLZ2g_L9DPnDjfhCKVYmcoIxdPGyolwfLtU8k6_0CVHrf-PtLmZEvUvGKTub2vibC_3cI7j7G5AQYvam8UMSiw_UzfDW-gbJziiEo3JVGdeuQBYt7yaufvc58-usLOL3jz8-QeBhgIuw5vHEl-oSt7C2RAxG1Gew5yQpzkRj44hIYY1lKPn8OSHz5ZIaZBzeiuoCX1YPOqgmuE4XpjBX1nWqtGKHSm8KVJa-wL0bJa1iKeJRDmvb5282LErHhoT58mAPcAsWta7mvQRUkYg9z2mphhufQA4nthvOXLQ8s-3NcWMxYLpkXujqPoA2sYO4Q-EreTX_7DfuVktMxpli0ZDv10f4-6c4w4jXsIkVTZ9vCDg..; rl-shared-browser-id=1370581025975722142; rl-shared-session-id=2656088301467755586; new-registration=true; new-registration-esign=true; isUser=true; __utmc=170725029; __utmz=170725029.1539900750.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); userinfo=321760976; rl-session-id=b4wqtgks2kxqjvkc7ycgg0s1n; _gid=GA1.2.1882852909.1540242458; _ceg.s=ph2psd; _ceg.u=ph2psd; __CG=u%3A9085093742506093000%2Cs%3A841787866%2Ct%3A1540334605449%2Cc%3A1%2Ck%3Awww.rocketlawyer.com%2F29%2F29%2F143%2Cf%3A1%2Ci%3A1; _mkto_trk=id:615-COM-352&token:_mch-rocketlawyer.com-1537295928119-31559; lastdocumentid=59; lastdocumentname="bill of sale"; __utma=170725029.2004600010.1537295717.1539900750.1540334702.2; __utmt=1; __utmb=170725029.1.10.1540334702; JSESSIONID=72AB5BB5BABB20B96D07FDA454800A65; _ceg.s=ph2q2u; _ceg.u=ph2q2u; stc114835=env:1540334605%7C20181123224325%7C20181023231942%7C9%7C1043444:20191023224942|uid:1537295928079.2102694219.8020267.114835.1849102796:20191023224942|srchist:1043444%3A1540334605%3A20181123224325:20191023224942|tsa:1540334605002.597010534.7667255.5409731894710841.4:20181023231942; _gat_UA-669091-2=1; _gat_UA-669091-24=1',
      },
    }
    request(options, (req, res) => {
      console.log('hello==>', res.body)
      cb(res.body);
    })
  }
}
