<template>
  <div class="header">
    <div class="header-container">
      <div class="nav-menu">
        <div class="left-header">
          <div class="title">
            <span><a href="">行舟旅游网站</a></span>
          </div>
          <div class="nav-items">
            <span><a href="">首页</a></span>
            <span><a href="">目的地</a></span>
            <span><a href="">旅游产品</a></span>
            <span><a href="">关于我们</a></span>
            <span><a href="">更多内容</a></span>
          </div>
        </div>

        <div class="search">
          <el-autocomplete
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
            @focus="clearInput"
            size="small"
          ></el-autocomplete>
          <p>{{ $t("message.hello") }}</p>
        </div>

        <div class="right-header">
          <div class="userImage"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="item-name">
    <div class="wrap">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">目的地</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">广东</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">广州</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">广州美食</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>

  <div class="slideshow">
    <div class="wrap">
      <el-row :gutter="20">
        <el-col :span="24" class="div-div"></el-col>
        <el-col :span="6">
          <el-row :gutter="100">
            <el-col :span="24" class="div-div-div"></el-col>
            <el-col :span="24">
              <div class="icon-text-container">
                <el-icon size="35" color="yellow">
                  <trophy-base />
                </el-icon>
                <span class="tit-meishi">广州特色美食排行</span>
              </div>
            </el-col>
            <el-col :span="24" class="container2">
              <dish-table :tableData="dishes" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="17">
          <el-carousel
            height="350px"
            indicator-position="outside"
            class="rounded-carousel"
          >
            <el-carousel-item v-for="(item, index) in images" :key="index">
              <img
                :src="item"
                alt="carousel image"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </el-carousel-item>
          </el-carousel>
          <div class="rankingList">
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
                        <span class="restaurant-rating">{{
                          restaurant.rating
                        }}</span>
                        <el-rate
                          v-model="restaurant.score"
                          disabled
                          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                          class="score-stars"
                        ></el-rate>
                        <span class="score">{{ restaurant.score }} 分</span>
                        <span class="reviews"
                          >{{ restaurant.reviews }} 条用户点评</span
                        >
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
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { ElCard, ElIcon, ElAutocomplete, ElCarousel, ElCarouselItem, ElCheckbox, ElCheckboxGroup, ElSelect, ElOption, ElRate, ElBreadcrumb, ElBreadcrumbItem, ElPagination } from "element-plus";
import { TrophyBase } from "@element-plus/icons-vue";
import DishTable from "@/components/DishTable.vue";
export default {
  name: "SightSpot",
  components: {
    DishTable,
    ElCard,
    ElIcon,
    ElAutocomplete,
    ElCarousel,
    ElCarouselItem,
    ElCheckbox,
    ElCheckboxGroup,
    ElSelect,
    ElOption,
    ElRate,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElPagination,
    TrophyBase,
  },
  setup() {
    const state1 = ref("");

    const querySearch = (queryString, cb) => {
      const results = [];
      if (queryString) {
        results.push({
          value: queryString,
          type: "suggest",
        });
      }
      cb(results);
    };

    const handleSelect = (item) => {
      console.log("Selected item:", item);
    };

    const clearInput = () => {
      console.log("Input cleared");
    };

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

      state1,
      querySearch,
      handleSelect,
      clearInput,
      images: [
        require("../assets/食物1.jpg"), // 替换为你的图片 URL
        require("../assets/食物1.jpg"), // 替换为你的图片 URL
        require("../assets/食物1.jpg"), // 替换为你的图片 URL
        require("../assets/食物1.jpg"), // 替换为你的图片 URL
      ],
      dishes: [
        {
          name: "汤",
          score: 466,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "叉烧",
          score: 216,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "烧鹅",
          score: 112,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "叉烧包",
          score: 87,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "猪手",
          score: 73,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "牛河",
          score: 53,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "煲仔饭",
          score: 50,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "荷叶饭",
          score: 2,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "冬瓜盅",
          score: 2,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        {
          name: "猪肚煲鸡",
          score: 1,
          imageUrl:
            "https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d",
        },
        // Add more dishes here as needed
      ],
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
.slideshow {
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  /* 设置上下外边距为0，左右外边距自动 */

  padding-left: 20px;
  padding-right: 20px;
  width: 1200px;
  .wrap {

    
.rankingList{
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
}



    width: 1200px;
    max-width: 1200px;
    /* 设置最小宽度 */
    min-width: 1200px;

    .div-div {
      margin-top: 25px;
    }

    .div-div-div {
      margin-top: 150px;
    }
    .container2 {
      /* 可能的样式调整 */
      display: flex; /* 检查并调整布局 */
      justify-content: flex-start; /* 控制内容位置 */
    }
    .icon-text-container {
      display: flex;
      align-items: center; /* 垂直居中 */
      span {
        margin-left: 8px; /* 图标与文字之间的间距 */
      }
    }
  }
}

.item-name {
  padding-top: 72px;
  .wrap {
    margin: 0 auto;
    /* 设置上下外边距为0，左右外边距自动 */
    max-width: 1200px;
    /* 设置最小宽度 */
    min-width: 1200px;

    padding-left: 20px;
    padding-right: 20px;
    /* 设置最大宽度 */
    display: flex;
    /* 使用弹性布局 */
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    /* 在交叉轴上居中对齐子元素 */
    padding-top: 17px;
    /* 设置内边距为0 */
    .img-item-name {
      width: 33px;
      height: 33px;
      background-image: url("/src/assets/旅途.png");
      background-size: cover;
    }
  }
}

.banner {
  margin-top: -80px; /* 向上移动 20 像素 */
}

a {
  text-decoration: none; /* 移除下划线 */
  color: inherit; /* 继承父元素的颜色 */
}

.styled {
  color: #333;
  background-color: lighten(#f06, 10%);
}

.header {
  position: fixed; /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  z-index: 1000; /* 确保导航栏在其他元素之上 */
  background-color: white; /* 背景颜色 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .header-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    /* 设置最小宽度 */
    min-width: 1200px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .left-header {
        display: flex;
        align-items: center;
        gap: 60px;

        .title {
          color: rgba(29, 33, 41, 1);
          font-size: 22px;
          font-weight: 700;
          font-family: "Kalam-Bold";
          white-space: nowrap;
        }

        .nav-items {
          display: flex;
          gap: 32px;

          span {
            color: rgba(29, 33, 41, 1);
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            font-weight: 400;
            font-family: "HarmonyOSSansSC-Regular";
            white-space: nowrap;
          }
        }
      }

      .right-header {
        display: flex;
        align-items: center;
        gap: 24px;

        .userImage {
          width: 40px;
          height: 40px;
          background-image: var(--bg-img);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
          --bg-img: var(--img-url);
          --img-url: url("/src/assets/6556e75090ab84325baa614a.png");
        }

        .nav-menu {
          display: flex;
          width: 40px;
          height: 40px;
          background-image: var(--bg-img);
          background-size: cover;
          --bg-img: var(--img-url);
          --img-url: url("/src/assets/3e260053f3fe1a53d64fd219a5465acdad443bce.png");
        }
      }
    }
  }
}
.kong {
  padding-top: 20px;
}
.content {
  .warp {
    margin: 0 auto;
    /* 设置上下外边距为0，左右外边距自动 */
    // width: 1200px;
    max-width: 1200px;
    /* 设置最小宽度 */
    min-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    /* 设置最大宽度 */
    // display: flex;
    /* 使用弹性布局 */

    /* 在交叉轴上居中对齐子元素 */
    .item-1 {
      .info-section {
        margin-bottom: 20px;

        .tit {
          .container {
            margin: 0px;
            padding: 0px;
          }
        }
      }

      .header h2 {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: #333;
      }

      .details {
        .info-item {
          margin: 5px 0;
        }
      }

      .info-label {
        font-weight: bold;
        color: #666;
      }

      .info-value {
        color: #333;
      }

      .tit {
        // font-size: 18px;
        font-size: 1.5em;
        font-weight: bold;
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .el-rate {
        margin-bottom: 10px;
      }
    }
    .item-3 {
      .info-section-content {
        font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
          sans-serif;
        font-size: 17px; /* 基本字体大小 */
        line-height: 1.47; /* 行高 */
        font-weight: 400; /* 字体粗细 */
        letter-spacing: -0.022em; /* 字母间距 */
        color: rgba(29, 29, 31, 0.61); /* 默认文本颜色 */
      }
    }
    .item-2 {
      .info-section-tit {
        font-size: 52px;
        font-weight: 605;
        line-height: 95%;
        margin-bottom: 5px;
        margin-top: 10px;
        letter-spacing: -0.04em;
        font-style: normal;
      }
    }
  }
}

.card-cont {
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  max-width: 1200px;
  min-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;

  .card-content {
    width: 600px;
    .markdown-content {
      font-size: 12px; // 原本 16px 的四分之三
      line-height: 1.2; // 原本 1.6 的四分之三
      color: #333;

      h1 {
        font-size: 18px; // 原本 24px 的四分之三
        margin: 15px 0; // 原本 20px 的四分之三
      }

      h2 {
        font-size: 15px; // 原本 20px 的四分之三
        margin: 13.5px 0; // 原本 18px 的四分之三
      }

      h3 {
        font-size: 13.5px; // 原本 18px 的四分之三
        margin: 12px 0; // 原本 16px 的四分之三
      }

      p {
        font-size: 12px; // 原本 16px 的四分之三
        margin: 7.5px 0; // 原本 10px 的四分之三
      }

      ul {
        padding-left: 15px; // 原本 20px 的四分之三

        li {
          font-size: 12px; // 原本 16px 的四分之三
          line-height: 1.125; // 原本 1.5 的四分之三
        }
      }

      a {
        color: #007bff;
        text-decoration: underline;
      }
    }
  }
}

.markdown-content {
  font-size: 16px; /* 原本 12px 放大 4/6 倍 */
  line-height: 1.6; /* 原本 1.2 放大 4/6 倍 */
  color: #333;

  h1 {
    font-size: 24px; /* 原本 18px 放大 4/6 倍 */
    margin: 20px 0; /* 原本 15px 放大 4/6 倍 */
  }

  h2 {
    font-size: 20px; /* 原本 15px 放大 4/6 倍 */
    margin: 18px 0; /* 原本 13.5px 放大 4/6 倍 */
  }

  h3 {
    font-size: 18px; /* 原本 13.5px 放大 4/6 倍 */
    margin: 16px 0; /* 原本 12px 放大 4/6 倍 */
  }

  p {
    font-size: 16px; /* 原本 12px 放大 4/6 倍 */
    margin: 10px 0; /* 原本 7.5px 放大 4/6 倍 */
  }

  ul {
    padding-left: 20px; /* 原本 15px 放大 4/6 倍 */

    li {
      font-size: 16px; /* 原本 12px 放大 4/6 倍 */
      line-height: 1.5; /* 原本 1.125 放大 4/6 倍 */
    }
  }

  a {
    color: #007bff;
    text-decoration: underline;
  }
}

.tit-meishi {
  font-size: 16px; /* 字体大小 */
  color: #ffa500; /* 字体颜色设为橙黄色 */
  font-weight: bold; /* 可选：加粗字体 */
}

.rounded-carousel {
  border-radius: 25px; /* 调整这个值以改变椭圆程度 */
  overflow: hidden; /* 确保内容不会超出边界 */
}
</style>
    