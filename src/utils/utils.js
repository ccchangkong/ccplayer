export function unique (a, id) {
  let nn = []
  let res = a.filter((item, index, array) => {
    let bl = nn.indexOf(item[id]) === -1
    nn.push(item[id])
    return bl
  })
  return res
}
