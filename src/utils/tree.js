/**
 * @function arrayFlattening 数组扁平化
 * @param {Array}} tree 待转换tree
 */
export function arrayFlattening(tree) {
  const temp = []

  for (let i = 0, len = tree.length; i < len; i++) {
    if (tree[i].children) {
      temp.push(arrayFlattening(tree[i]).children)
      temp.push(tree[i])
    } else {
      temp.push(tree[i])
    }
  }

  return temp
}
