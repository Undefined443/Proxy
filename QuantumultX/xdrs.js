const cookieName = '西电睿思签到'
const cookieKey = 'xiao_cookie_xdrs'
const cookieVal = $prefs.valueForKey(cookieKey)

function sign() {
  let request = {
    url: `https://rs.xidian.edu.cn/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`,
    method: `POST`,
    headers: {
      Cookie: cookieVal
    }
  }
  $task.fetch(request).then(response => {
    let data = response.body
    
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
  }, reason => {
    console.log(reason.error);
    $done();
  });

// const headers = {
// 'Accept-Encoding' : `gzip, deflate, br`,
// 'sec-ch-ua-platform' : `"macOS"`,
// 'Host' : `rs.xidian.edu.cn`,
// 'Origin' : `https://rs.xidian.edu.cn`,
// 'Sec-Fetch-Dest' : `iframe`,
// 'Connection' : `keep-alive`,
// 'Cache-Control' : `max-age=0`,
// 'Sec-Fetch-Site' : `same-origin`,
// 'User-Agent' : `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0`,
// 'Content-Type' : `application/x-www-form-urlencoded`,
// 'Sec-Fetch-User' : `?1`,
// 'Referer' : `https://rs.xidian.edu.cn/plugin.php?id=dsu_paulsign:sign`,
// 'sec-ch-ua-mobile' : `?0`,
// 'Accept-Language' : `zh-CN,zh;q=0.9`,
// 'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
// 'Upgrade-Insecure-Requests' : `1`,
// 'Cookie' : `Q8qA_2132_saltkey=OAlkT59T; Q8qA_2132_lastvisit=1699785805; Q8qA_2132_auth=2ef0Gr3b%2F1SXhPf2WAFXX8YD4G8Ng27GCWi%2BNpft1MabgcfFBMYGTz1%2FWKDwfZTTrZYlCGVpLpMZljNwlxbsQLjwJiI; Q8qA_2132_viewid=uid_343269; Q8qA_2132_home_diymode=1; Q8qA_2132_con_request_uri=https%3A%2F%2Frs.xidian.edu.cn%2Fconnect.php%3Fmod%3Dlogin%26op%3Dcallback%26referer%3Dhome.php%253Fmod%253Dspacecp%2526ac%253Dplugin%2526id%253Dqqconnect%253Aspacecp; Q8qA_2132_client_created=1699789703; Q8qA_2132_client_token=E8CE558F22433911F49D8BC92267F134; Q8qA_2132_connect_login=1; Q8qA_2132_connect_is_bind=1; Q8qA_2132_connect_uin=E8CE558F22433911F49D8BC92267F134; Q8qA_2132_seccode=306.0fbc695f760eab52b0; safedog-flow-item=9F86E064BDCCE1DC71F30D62CAF6514C; Q8qA_2132_myrepeat_rr=R0; Q8qA_2132_ulastactivity=0866mo2mt13hGiKTAPMN2YQjlxUVn%2BErvrKf2aDmlqT%2FvGGhVPpl; sl-session=6NuEDC+fVWVq1js93qEAwA==; Q8qA_2132_sid=O56K4Z; Q8qA_2132_lip=10.194.63.44%2C+202.117.112.66%2C+172.30.10.100%2C1700023735; Q8qA_2132_lastact=1700023738%09plugin.php%09; UqZBpD3n3iPIDwJU=v1IKVbQwSDd4I`,
// 'Sec-Fetch-Mode' : `navigate`,
// 'sec-ch-ua' : `"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"`
  // };
  
// const body = `formhash=470886b1&qdxq=kx&qdmode=2&todaysay=&fastreply=0`;
