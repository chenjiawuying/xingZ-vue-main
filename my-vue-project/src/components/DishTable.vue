<template>
  <div class="table-container">
    <el-table
      stripe
      :data="tableData"
      :default-sort="{ prop: 'score', order: 'descending' }"
      style="width: 215px; margin: auto;"
    >
      <!-- 排名列 -->
      <el-table-column label="R" width="50" align="center">
        <template v-slot="scope">
          <div
            class="rank-circle"
            :style="{ backgroundColor: getColor(scope.$index) }"
          >
            {{ scope.$index + 1 }}
          </div>
        </template>
      </el-table-column>

      <!-- 菜名列 -->
      <el-table-column width="85" prop="name" label="菜名" align="center">
        <template v-slot="scope">
          <span
            class="food-name"
            @mouseenter="showTooltip(scope.row, $event)"
            @mouseleave="hideTooltip"
          >
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>

      <!-- 分数列 -->
      <el-table-column label="分数" width="80" align="center">
        <template v-slot="scope">
          <div class="score-container">
            <el-icon><arrow-up /></el-icon>
            <span>{{ scope.row.score }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 自定义悬浮卡片 -->
    <div
      v-if="showCard"
      class="custom-card"
      :style="{ top: tooltipPosition.top + 'px', left: tooltipPosition.left + 'px' }"
    >
      <img :src="currentItem.imageUrl" :alt="currentItem.name" class="card-image" />
      <div class="card-info">
        <h4>{{ currentItem.name }}</h4>
        <p>这是{{ currentItem.name }}的美味图片。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowUp } from '@element-plus/icons-vue';

export default {
  components: {
    ArrowUp,
  },
  props: {
    // 接收外部传入的 tableData
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showCard: false,
      currentItem: {},
      tooltipPosition: { top: 0, left: 0 },
    };
  },
  methods: {
    getColor(index) {
      if (index === 0) return '#ff4d4f'; // 深红色
      if (index === 1) return '#ffa940'; // 深橙色
      if (index === 2) return '#ffd666'; // 浅橙色
      return '#91d5ff'; // 之后颜色改为淡蓝色
    },
    showTooltip(item, event) {
      this.currentItem = item;
      this.showCard = true;
      // 计算卡片位置，相对于表格右侧显示
      this.tooltipPosition.top = event.clientY - 50; // 调整显示位置
      this.tooltipPosition.left = event.clientX + 20;
    },
    hideTooltip() {
      this.showCard = false;
    },
  },
};
</script>

<style lang="less" scoped>
.table-container {
  position: relative;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  border: 1px solid #d1caca;
  .rank-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    margin: auto;
    font-size: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // 添加阴影效果
  }

  .score-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px; // 调整分数字体大小
  }

  .custom-card {
    position: absolute;
    padding: 8px;
    border: 1px solid #ebeef5;
    background-color: #ffffff; // 背景色保持白色
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15); // 增强阴影效果
    border-radius: 8px; // 圆角调整为 8px
    width: 180px;
    z-index: 1000;
    display: flex;
    align-items: center;

    .card-image {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      margin-right: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); // 图片阴影
    }

    .card-info {
      display: flex;
      flex-direction: column;

      h4 {
        margin: 0;
        font-size: 14px;
        font-weight: bold;
        color: #333; // 标题颜色
      }

      p {
        margin: 4px 0 0;
        font-size: 12px;
        color: #606266; // 描述文本颜色
      }
    }
  }
}

.el-table {
  th, td {
    padding: 4px;
    font-size: 12px; // 调整表格字体大小
    text-align: center;
    border: 1px solid #ebeef5; // 表格边框颜色
  }

  th {
    background-color: #fafafa; // 表头背景色
    color: #606266; // 表头文本颜色
  }

  td {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
