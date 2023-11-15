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
