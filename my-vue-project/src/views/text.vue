<template>
  <div class="filter-container">
    <!-- 特色 -->
    <div class="filter-group">
      <span class="filter-label">特色：</span>
      <el-checkbox
        v-model="checkAllFeatures"
        :indeterminate="isIndeterminateFeatures"
        @change="handleCheckAllFeaturesChange"
      >
        全选
      </el-checkbox>
      <el-checkbox-group
        v-model="selectedFeatures"
        @change="handleCheckedFeaturesChange"
        class="custom-group"
      >
        <el-checkbox
          v-for="feature in features"
          :key="feature"
          :label="feature"
          :value="feature"
          class="custom-checkbox-button"
        >
          {{ feature }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- 分类 -->
    <div class="filter-group">
      <span class="filter-label">分类：</span>
      <el-checkbox
        v-model="checkAllCategories"
        :indeterminate="isIndeterminateCategories"
        @change="handleCheckAllCategoriesChange"
      >
        全选
      </el-checkbox>
      <el-checkbox-group
        v-model="selectedCategories"
        @change="handleCheckedCategoriesChange"
        class="custom-group"
      >
        <el-checkbox
          v-for="category in categories"
          :key="category"
          :label="category"
          :value="category"
          class="custom-checkbox-button"
        >
          {{ category }}
        </el-checkbox>
      </el-checkbox-group>
    </div>

    <!-- 商圈 -->
    <div class="filter-group">
      <span class="filter-label">商圈：</span>
      <el-select
        v-model="selectedBusinessArea"
        placeholder="请选择商圈"
        size="small"
        class="custom-select"
      >
        <el-option
          v-for="area in businessAreas"
          :key="area"
          :label="area"
          :value="area"
        ></el-option>
      </el-select>
    </div>

    <!-- 展示过滤结果 -->
    <div class="result-container">
      <h3>符合条件的餐馆：</h3>
      <ul>
        <li v-for="restaurant in filteredRestaurants" :key="restaurant.name">
          {{ restaurant.name }} - {{ restaurant.rating }} - {{ restaurant.latestReview }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      // 特色
      checkAllFeatures: false,
      isIndeterminateFeatures: true,
      selectedFeatures: ['不限'],
      features: ['不限', '大众都爱吃', '不吃不等于没来过', '早茶', '广式甜品', '当地人最爱'],

      // 分类
      checkAllCategories: false,
      isIndeterminateCategories: true,
      selectedCategories: ['快餐'],
      categories: ['不限', '快餐', '川菜', '火锅', '西餐', '日料', '粤菜', '甜品'],

      // 商圈
      selectedBusinessArea: '北京路',
      businessAreas: ['不限', '北京路', '天河', '越秀', '海珠', '荔湾'],

      // 餐馆数据
      restaurants: [
        {
          name: "九爷鸡(德政中路店)",
          rating: "No.1",
          latestReview: "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
          score: 0,
          reviews: 0,
          type: "快餐",
          area: "北京路",
        },
        {
          name: "超记煲仔饭(珠光路店)",
          rating: "No.2",
          latestReview: "浑噩一生的最新点评：煲仔饭的米，一定是丝苗米，细长晶莹...",
          score: 4.4,
          reviews: 61,
          type: "快餐",
          area: "珠光路",
        },
        {
          name: "原盅炖饭",
          rating: "No.3",
          latestReview: "",
          score: 0,
          reviews: 0,
          type: "快餐",
          area: "未知",
        },
        {
          name: "文和友老长沙臭豆腐(北京路店)",
          rating: "No.7",
          latestReview: "蝥箭的最新点评：本次广东行，第四弹...",
          score: 3.2,
          reviews: 1,
          type: "小吃",
          area: "北京路",
        },
      ],
    };
  },
  computed: {
    filteredRestaurants() {
      // 过滤逻辑
      return this.restaurants.filter((restaurant) => {
        const matchesCategory = this.selectedCategories.includes('不限') || this.selectedCategories.includes(restaurant.type);
        const matchesArea = this.selectedBusinessArea === '不限' || this.selectedBusinessArea === restaurant.area;
        return matchesCategory && matchesArea;
      });
    },
  },
  methods: {
    // 特色相关方法
    handleCheckAllFeaturesChange(val) {
      this.selectedFeatures = val ? this.features : [];
      this.isIndeterminateFeatures = false;
    },
    handleCheckedFeaturesChange(value) {
      const checkedCount = value.length;
      this.checkAllFeatures = checkedCount === this.features.length;
      this.isIndeterminateFeatures = checkedCount > 0 && checkedCount < this.features.length;
    },

    // 分类相关方法
    handleCheckAllCategoriesChange(val) {
      this.selectedCategories = val ? this.categories : [];
      this.isIndeterminateCategories = false;
    },
    handleCheckedCategoriesChange(value) {
      const checkedCount = value.length;
      this.checkAllCategories = checkedCount === this.categories.length;
      this.isIndeterminateCategories = checkedCount > 0 && checkedCount < this.categories.length;
    },
  },
};
</script>

<style scoped>
.filter-container {
  padding: 20px;
  border: 1px solid #ebebeb;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-label {
  font-weight: 600;
  margin-right: 12px;
  color: #333;
  white-space: nowrap;
  flex-shrink: 0;
}

.custom-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.custom-checkbox-button {
  border-radius: 20px;
  padding: 6px 14px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 0;
  cursor: pointer;
}

.custom-checkbox-button:hover {
  background-color: #e6f7ff;
  border-color: #91d5ff;
}

.custom-checkbox-button.is-checked {
  background-color: #1890ff;
  color: #fff !important;
  border-color: #1890ff;
}

.custom-select {
  width: 220px;
  border-radius: 20px;
  transition: border-color 0.3s ease;
}

.custom-select .el-input__inner {
  border-radius: 20px;
  padding: 6px 14px;
  border-color: #ddd;
  transition: all 0.3s ease;
}

.custom-select .el-input__inner:hover {
  border-color: #91d5ff;
}

.custom-select .el-input__inner:focus {
  border-color: #1890ff;
}

.result-container {
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.result-container h3 {
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
}

.result-container ul {
  list-style: none;
  padding: 0;
}

.result-container li {
  margin-bottom: 8px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  transition: background 0.3s ease;
}

.result-container li:hover {
  background: #f0f0f0;
}
</style>
