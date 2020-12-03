/**
 * @function treeFlattening tree扁平化
 * @param {Array}} tree 待转换tree
 */
export function treeFlattening(tree) {
  const temp = []

  treeForeach(tree, node => temp.push({ ...node }))

  return temp
}

/**
 * @method treeForeach 遍历所有树节点
 * @param {Tree} tree 原始tree类型数据
 * @param {Function} func 处理节点的回调函数
 */
export function treeForeach(tree, func, parentId) {
  tree.forEach((node, index) => {
    node.parentId = node.parentId ? node.parentId : parentId || '0'
    node.nodeId = node.nodeId ? node.nodeId : parentId ? `${node.parentId}-${index + 1}` : `${index + 1}`
    func(node)
    node.children && treeForeach(node.children, func, node.nodeId)
  })
}

/**
 * @method listToTree
 * @param {*} list 原始数组
 * @param {*} prop 父子关联对象键名
 */
export function listToTree(list, prop, parentId) {
  prop = prop || { parentKey: 'parentId', childrenKey: 'nodeId' }
  parentId = parentId || 0

  if (!(list instanceof Array) || !list.length) return []

  // 生成包含所有键为id的map集合
  const idMap = list.reduce((map, node) => {
    map[node[prop.childrenKey]] = node
    node.children = []
    return map
  }, {})

  return list.filter(node => {
    idMap[node[prop.parentKey]] && idMap[node[prop.parentKey]].children.push(node)
    return node[prop.parentKey] === parentId
  })
}
