
export const goToAnchor = (id) => {
  var anchor = document.getElementById(id);
  // chrome
  document.body.scrollTop = anchor.offsetTop;
  // firefox
  document.documentElement.scrollTop = anchor.offsetTop;
  // safari
  window.pageYOffset = anchor.offsetTop;
}

export const getQueryObject = (url) => {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

export const getQueryString = (name) => {
  return getQueryObject(window.location.href)[name];
}

export const getLocal = (name) => {
  return localStorage.getItem(name)
}

export const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}

export const addDay = (days) => {
  //创建date
  let nowDate = new Date();
  //添加天数
  nowDate.setDate(nowDate.getDate() + days);
  //返回
  return nowDate
}

export const addMonth= (months) => {
  //创建date
  let nowDate = new Date();
  //添加周数
  nowDate.setMonth(nowDate.getMonth() + months);
  //返回
  return nowDate
}

export const addYear= (years) => {
  //创建date
  let nowDate = new Date();
  //添加年数
  nowDate.setMonth(nowDate.getYear() + years);
  //返回
  return nowDate
}

export const dateFormat = (fmt, date) => {
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

