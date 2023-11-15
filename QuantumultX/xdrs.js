const cookieName = '西电睿思签到'
const cookieKey = 'xiao_cookie_xdrs'
const cookieVal = $prefs.valueForKey(cookieKey)

function sign() {
  let url = {
    url: `https://rs.xidian.edu.cn/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1`,
    method: `POST`,
    headers: {
      Cookie: cookieVal
    }
  }
  $task.fetch(url).then(response => {
    if(true) {
      let title = `${cookieName}`
      let subTitle = `签到结果: 签到跳过`
      let detail = `今天已经签过了`
      console.log(`${title}, ${subTitle}, ${detail}`)
      $notify(title, subTitle, detail)
      $done()
    }
  }
});
