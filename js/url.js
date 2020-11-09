var urlRewriterList = {
  "don": "https://donner.ilot.asso.fr/",
  "www": "https://www.ilot.asso.fr/"
}

var urlCurrentParam = getAllUrlParams();
var urlRewriterItems = document.getElementsByClassName('url-rewriter');

for (item of urlRewriterItems) {
  var urlParam = getAllUrlParams(item.href);
  var urlBase = urlRewriterList[item.dataset['hrefTarget']];
  var newUrlParam = {...urlParam, ...urlCurrentParam};
  item.href = urlParamConstructor(urlBase, newUrlParam);
}

function urlParamConstructor(url, params) {
  var newUrl = url;
  var first = true;
  for (var key in params) {
    if (first === true) {
      newUrl = newUrl + "?" + key + "=" + params[key];
      first = false
    } else {
      newUrl = newUrl + "&" + key + "=" + params[key];
    }
  }
  return newUrl;
}

function getAllUrlParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  
  if (queryString) {
  queryString = queryString.split('#')[0];
  var arr = queryString.split('&');
  
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=');
    var paramName = a[0];
    var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
  
    paramName = paramName.toLowerCase();
    if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
  
    if (paramName.match(/\[(\d+)?\]$/)) {
      var key = paramName.replace(/\[(\d+)?\]/, '');
      if (!obj[key]) obj[key] = [];
  
      if (paramName.match(/\[\d+\]$/)) {
        var index = /\[(\d+)\]/.exec(paramName)[1];
        obj[key][index] = paramValue;
      } else {
        obj[key].push(paramValue);
      }
    } else {
      if (!obj[paramName]) {
        obj[paramName] = paramValue;
      } else if (obj[paramName] && typeof obj[paramName] === 'string'){
        obj[paramName] = [obj[paramName]];
        obj[paramName].push(paramValue);
      } else {
        obj[paramName].push(paramValue);
      }
    }
  }
  }
  return obj;
  }