<template>
  <el-select v-model="valueName" :clearable="clearable" @clear="clearHandle">
    <el-option :value="valueId">
      <el-tree ref="treeSelect" :accordion="accordion" :data="options" :props="props" :current-node-key="valueId" :default-expanded-keys="defaultExpandedKeys" :node-key="props.value" @node-click="handleNodeClick" />
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'treeSelect',
  props: {
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => []
    },
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          label: 'name',
          value: 'id',
          children: 'children'
        }
      }
    },
    /* 初始值 */
    value: {
      type: [Number, String],
      default: () => 0
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    /* 手风琴模式 */
    accordion: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      valueName: '',
      valueId: this.value,
      defaultExpandedKeys: []
    }
  },
  mounted() {
    this.defaultExpandedKeys = [this.valueId]
    this.valueName = this.$refs.treeSelect.getNode(this.valueId)[this.props.label]
    // console.log(this.valueName)
  },
  methods: {
    /**
     * @method handleNodeClick 点击获取当前节点
     * @param {Object} node 当前节点
     */
    handleNodeClick(node) {
      this.valueName = node[this.props.label]
      this.valueId = node[this.props.value]
      this.$emit('getValue', this.valueId)
    },
    clearHandle() {
      this.valueName = ''
      this.valueId = null
      this.defaultExpandedKeys = []
      this.$emit('getValue', null)
    }
  }
}
</script>

<style scoped>
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
</style>
