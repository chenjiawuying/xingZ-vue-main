<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'score', order: 'descending' }"
      style="width: 225px; margin: auto;"

    >
      <!-- 排名列 -->
      <el-table-column
        label="Rank"
        width="50"
        align="center"
      >
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
      <el-table-column
        label="分数"
        width="80"
        align="center"
      >
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
  data() {
    return {
      tableData: [
      { name: '汤', score: 466, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '叉烧', score: 216, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '烧鹅', score: 112, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '叉烧包', score: 87, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '猪手', score: 73, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '牛河', score: 53, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '煲仔饭', score: 50, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '荷叶饭', score: 2, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '冬瓜盅', score: 2, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '猪肚煲鸡', score: 1, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      // Add more dishes here as needed
    ],
      showCard: false,
      currentItem: {},
      tooltipPosition: { top: 0, left: 0 },
    };
  },
  methods: {
    getColor(index) {
      if (index === 0) return '#f56c6c'; // 深红色
      if (index === 1) return '#e6a23c'; // 深橙色
      if (index === 2) return '#e6a23c'; // 浅橙色
      return '#e6a23c'; // 之后颜色保持相同
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

<style scoped>
.table-container {
  position: relative;
}

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
}

.score-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px; /* 调整分数字体大小 */
}

.el-table th,
.el-table td {
  padding: 4px;
  font-size: 12px; /* 调整表格字体大小 */
  text-align: center;
}

.el-table th {
  background-color: #f5f7fa;
}

.el-table td {
  border-bottom: 1px solid #ebeef5;
}

.custom-card {
  position: absolute;
  padding: 8px;
  border: 1px solid #ebeef5;
  background-color: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 180px;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.card-image {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 8px;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-info h4 {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}

.card-info p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #606266;
}
</style>
