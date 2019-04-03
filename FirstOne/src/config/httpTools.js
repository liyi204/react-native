
/**
 * 发送网络请求
 * @param method            HTTP 请求方法
 * @param url               URL
 * @param bodyParams        HTTP Body
 * @param urlParams         URL Params
 */
async function httpFetch(method, url, { bodyParams = {}, urlParams = {} }) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  // 将url参数写入URL
  let urlParStr = '';
  const urlParArr = Object.keys(urlParams);
  if (urlParArr.length) {
    Object.keys(urlParams).forEach((element) => {
      urlParStr += `${element}=${urlParams[element]}&`;
    });
    urlParStr = `?${urlParStr}`.slice(0, -1);
  }

  const res = await fetch(new Request(`${url}${urlParStr}`, {
    method,
    headers,
    body: method === ('GET' || 'HEAD') ? null : JSON.stringify(bodyParams),
  }));

  if (res.status < 200 || res.status > 299) {
    console.log(`出错啦：${res.status}`);
  } else {
    return res.json();
  }
}

async function reqGet(url, urlParams = {}) {  
  return await httpFetch("GET", url, { urlParams :urlParams});
}

async function reqPost(url, bodyParams = {}){
  return await httpFetch("POST", url, { bodyParams :bodyParams}).then(jsonResponse => jsonResponse.json());
}

async function reqPut(url, bodyParams = {}) {
  return await httpFetch("PUT", url, { bodyParams :bodyParams});
}

async function reqDel(url, urlParams = {}) {
  return await httpFetch("DELETE", url, { urlParams :urlParams});
}


export default {
  reqGet : reqGet,
  reqDel : reqDel,
  reqPut : reqPut,
  reqPost : reqPost
}
