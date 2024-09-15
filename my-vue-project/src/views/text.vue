  <template>
    <div class="filter-container">
      <!-- 筛选项 - 特色 -->
      <div class="filter-group">
        <span class="filter-label">特色：</span>
        <el-checkbox
          size="small"
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
            size="small"
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

      <!-- 筛选项 - 分类 -->
      <div class="filter-group">
        <span class="filter-label">分类：</span>
        <el-checkbox
          size="small"
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
            size="small"
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

      <!-- 筛选项 - 商圈 -->
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
          >
          </el-option>
        </el-select>
      </div>

      <!-- 餐馆列表展示 -->
      <div class="restaurant-list">
        <div
          class="list-item"
          v-for="restaurant in paginatedRestaurants"
          :key="restaurant.name"
        >
          <div class="card-content">
            <!-- 图片部分 -->
            <img
              :src="restaurant.image"
              class="restaurant-image"
              alt="Restaurant Image"
            />

            <!-- 信息部分 -->
            <div class="info-section">
              <h4 class="restaurant-name">{{ restaurant.name }}</h4>
              <div class="rating-section">
                <span class="restaurant-rating">{{ restaurant.rating }}</span>
                <el-rate
                  v-model="restaurant.score"
                  disabled
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                  class="score-stars"
                ></el-rate>
                <span class="score">{{ restaurant.score }} 分</span>
                <span class="reviews">{{ restaurant.reviews }} 条用户点评</span>
              </div>
              <div class="latest-review">
                <span class="reviewer">{{ restaurant.reviewer }}</span
                >的最新点评：
                <blockquote>{{ restaurant.latestReview }}</blockquote>
              </div>
            </div>
          </div>
          <!-- 添加虚线分隔 -->
          <div class="divider"></div>
        </div>
      </div>

      <!-- 分页组件 -->
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10, 15, 20]"
        :total="filteredRestaurants.length"
        layout="prev, pager, next, sizes, jumper"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </template>

  <script>
  import { ref, computed } from "vue";

  export default {
    data() {
      return {
        // 特色
        checkAllFeatures: false,
        isIndeterminateFeatures: true,
        selectedFeatures: [],
        features: [
          "不限",
          "大众都爱吃",
          "不吃不等于没来过",
          "早茶",
          "广式甜品",
          "当地人最爱",
        ],

        // 分类
        checkAllCategories: false,
        isIndeterminateCategories: true,
        selectedCategories: [],
        categories: [
          "不限",
          "快餐",
          "川菜",
          "火锅",
          "西餐",
          "日料",
          "粤菜",
          "甜品",
        ],

        // 商圈
        selectedBusinessArea: "不限",
        businessAreas: ["不限", "北京路", "天河", "越秀", "海珠", "荔湾"],

        // 餐馆数据
        restaurants: [
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "九爷鸡(德政中路店)",
            rating: "No.1",
            latestReview:
              "圆滚滚的胖达的最新点评：实惠又好吃，满满一大碗肉，我点的四宝...",
            score: 5,
            reviews: 1551,
            type: "快餐",
            area: "北京路",
            image: require("../assets/食物1.jpg"),
          },
          {
            name: "超记煲仔饭(珠光路店)",
            rating: "No.2",
            latestReview:
              "浑噩一生的最新点评：煲仔饭的米，一定是丝苗米，细长晶莹...",
            score: 4.4,
            reviews: 61,
            type: "快餐",
            area: "珠光路",
            image: require("../assets/食物1.jpg"),
          },
          // 更多餐馆数据...
        ],

        // 分页控制
        currentPage: 1,
        pageSize: 10, // 每页展示的条目数
      };
    },
    computed: {
      filteredRestaurants() {
        // 过滤逻辑
        let filtered = this.restaurants.filter((restaurant) => {
          const matchesCategory =
            this.selectedCategories.length === 0 ||
            this.selectedCategories.includes(restaurant.type);
          const matchesArea =
            this.selectedBusinessArea === "不限" ||
            this.selectedBusinessArea === restaurant.area;
          return matchesCategory && matchesArea;
        });

        // 按评分排序
        filtered.sort((a, b) => b.score - a.score);

        return filtered;
      },
      paginatedRestaurants() {
        // 分页逻辑
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.filteredRestaurants.slice(start, end);
      },
    },
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
      },

      // 特色相关方法
      handleCheckAllFeaturesChange(val) {
        if (val) {
          this.selectedFeatures = this.features.filter((f) => f !== "不限");
          this.isIndeterminateFeatures = false;
        } else {
          this.selectedFeatures = [];
          this.isIndeterminateFeatures = true;
        }
      },
      handleCheckedFeaturesChange(value) {
        if (value.includes("不限")) {
          this.checkAllFeatures = false;
          this.isIndeterminateFeatures = false;
        } else {
          const checkedCount = value.length;
          this.checkAllFeatures = checkedCount === this.features.length - 1;
          this.isIndeterminateFeatures =
            checkedCount > 0 && checkedCount < this.features.length - 1;
        }
      },

      // 分类相关方法
      handleCheckAllCategoriesChange(val) {
        if (val) {
          this.selectedCategories = this.categories.filter((c) => c !== "不限");
          this.isIndeterminateCategories = false;
        } else {
          this.selectedCategories = [];
          this.isIndeterminateCategories = true;
        }
      },
      handleCheckedCategoriesChange(value) {
        if (value.includes("不限")) {
          this.checkAllCategories = false;
          this.isIndeterminateCategories = false;
        } else {
          const checkedCount = value.length;
          this.checkAllCategories = checkedCount === this.categories.length - 1;
          this.isIndeterminateCategories =
            checkedCount > 0 && checkedCount < this.categories.length - 1;
        }
      },
    },
  };
  </script>

<style lang="less" scoped>
.filter-container {
  padding: 10px 20px;

  .filter-group {
    margin-bottom: 15px;

    .filter-label {
      font-weight: bold;
      margin-right: 10px;
    }

    .custom-group {
      display: flex;
      flex-wrap: wrap;

      .custom-checkbox-button {
        margin-right: 10px;
        margin-bottom: 5px;
      }
    }

    .custom-select {
      width: 70px;
    }
  }
}
.restaurant-list {
  padding: 10px 0;

  .list-item {
    margin-bottom: 10px;

    .card-content {
      display: flex;
      padding: 10px 0;

      .restaurant-image {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 15px;
      }

      .info-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .restaurant-name {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin: 0 0 5px;
        }

        .rating-section {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          .restaurant-rating {
            color: #f56c6c;
            font-weight: bold;
            margin-right: 10px;
          }

          .score-stars {
            margin-right: 10px;
          }

          .score {
            font-size: 14px;
            color: #666;
            margin-right: 15px;
          }

          .reviews {
            font-size: 12px;
            color: #999;
          }
        }

        .latest-review {
          font-size: 14px;
          color: #666;
          font-family: "KaiTi", "STKaiti", "华文楷体", serif;

          .reviewer {
            font-weight: bold;
            color: #333;
          }
        }
      }
    }

    .divider {
      border-bottom: 1px dashed #ddd;
      margin: 10px 0;
    }
  }
}
</style>
