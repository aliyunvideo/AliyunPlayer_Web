export function parseDom (html) {
  let ele = document.createElement('div')
  ele.innerHTML = html
  return ele.childNodes[0]
}