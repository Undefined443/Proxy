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
    let data = response.body
    let title = `${cookieName}`
    let subTitle = `签到结果: 测试`
    let detail = `请看日志`
    console.log(`${title}, ${subTitle}, 响应体：\n${data}`)
    $notify(title, subTitle, detail)
    $done()
  });
}