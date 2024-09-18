<template>
  <div class="affix-container">
    <!-- 检查 target 的设置 -->
    <el-affix :offset="0">
      <div class="header">
        <div class="header-container">
          <div class="nav-menu">
            <div class="left-header">
              <div class="title">
                <span><a href="#">行舟旅游网站</a></span>
              </div>
              <div class="nav-items">
                <span><a href="#">首页</a></span>
                <span><a href="#">目的地</a></span>
                <span><a href="#">旅游产品</a></span>
                <span><a href="#">关于我们</a></span>
                <span><a href="#">更多内容</a></span>
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
    </el-affix>
  </div>

  <div class="body">
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
            <el-carousel height="360px" class="glass-carousel">
              <el-carousel-item v-for="(item, index) in images" :key="index">
                <div class="image-wrapper">
                  <img
                    :src="item"
                    alt="carousel image"
                    class="carousel-image"
                  />
                </div>
              </el-carousel-item>
            </el-carousel>
            1111这是一段介绍
            1111这是一段介绍1111这是一段介绍1111这是一段介绍
            <div class="banner-food">
              <el-icon size="25" color="#FF6347" class="icon">
                <Food />
              </el-icon>
              <span class="banner-text">广州全部美食推荐</span>
            </div>

            <!-- 搜索框 -->
            <div class="search-container" style="margin-bottom: 20px;">
              <el-input
                v-model="searchQuery"
                placeholder="请输入美食名称进行搜索"
                prefix-icon="el-icon-search"
                clearable
                @input="handleSearch"
              />
            </div>

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
                          <span class="restaurant-rating">
                            {{ restaurant.rating }}
                          </span>
                          <el-rate
                            v-model="restaurant.score"
                            disabled
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                            class="score-stars"
                          ></el-rate>
                          <span class="score">{{ restaurant.score }} 分</span>
                          <span class="reviews">
                            {{ restaurant.reviews }} 条用户点评
                          </span>
                        </div>
                        <div class="latest-review">
                          <span class="reviewer">{{ restaurant.reviewer }}</span>
                          的最新点评：
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
  </div>
</template>

<script>
import { ref, computed } from "vue";
import {
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
  ElInput,
} from "element-plus";
import { TrophyBase, Food } from "@element-plus/icons-vue";
import DishTable from "@/components/DishTable.vue";

export default {
  name: "SightSpot",
  components: {
    Food,
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
    ElInput,
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

    // 搜索框的输入内容
    const searchQuery = ref("");

    // 搜索逻辑：根据搜索关键词过滤餐馆名称
    const handleSearch = () => {
      // 这里只是打印搜索内容，你可以根据需要在这里执行更多操作
      console.log("Search query: ", searchQuery.value);
    };

    const features = ref([
      "不限",
      "大众都爱吃",
      "不吃不等于没来过",
      "早茶",
      "广式甜品",
      "当地人最爱",
    ]);
    const selectedFeatures = ref([]);
    const checkAllFeatures = ref(false);
    const isIndeterminateFeatures = ref(false);

    const handleCheckAllFeaturesChange = (val) => {
      selectedFeatures.value = val
        ? features.value.filter((f) => f !== "不限")
        : [];
      isIndeterminateFeatures.value = false;
    };

    const handleCheckedFeaturesChange = (value) => {
      const checkedCount = value.length;
      checkAllFeatures.value = checkedCount === features.value.length - 1;
      isIndeterminateFeatures.value =
        checkedCount > 0 && checkedCount < features.value.length - 1;
    };

    const categories = ref([
      "不限",
      "快餐",
      "川菜",
      "火锅",
      "西餐",
      "日料",
      "粤菜",
      "甜品",
    ]);
    const selectedCategories = ref([]);
    const checkAllCategories = ref(false);
    const isIndeterminateCategories = ref(false);

    const handleCheckAllCategoriesChange = (val) => {
      selectedCategories.value = val
        ? categories.value.filter((c) => c !== "不限")
        : [];
      isIndeterminateCategories.value = false;
    };

    const handleCheckedCategoriesChange = (value) => {
      const checkedCount = value.length;
      checkAllCategories.value = checkedCount === categories.value.length - 1;
      isIndeterminateCategories.value =
        checkedCount > 0 && checkedCount < categories.value.length - 1;
    };

    const selectedBusinessArea = ref("不限");
    const businessAreas = ref([
      "不限",
      "北京路",
      "天河",
      "越秀",
      "海珠",
      "荔湾",
    ]);

    const restaurants = ref([
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
      // ... (其他餐馆数据)
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
    ]);

    const currentPage = ref(1);
    const pageSize = ref(10); // 每页展示的条目数

    // 计算过滤后的餐馆列表
    const filteredRestaurants = computed(() => {
      let filtered = restaurants.value.filter((restaurant) => {
        const matchesCategory =
          selectedCategories.value.length === 0 ||
          selectedCategories.value.includes(restaurant.type);
        const matchesArea =
          selectedBusinessArea.value === "不限" ||
          selectedBusinessArea.value === restaurant.area;
        const matchesSearchQuery = restaurant.name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());

        return matchesCategory && matchesArea && matchesSearchQuery;
      });

      // 按评分排序
      filtered.sort((a, b) => b.score - a.score);

      return filtered;
    });

    const paginatedRestaurants = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredRestaurants.value.slice(start, end);
    });

    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const handleSizeChange = (size) => {
      pageSize.value = size;
      currentPage.value = 1; // 重置到第一页
    };

    return {
      state1,
      querySearch,
      handleSelect,
      clearInput,
      searchQuery,
      handleSearch,
      features,
      selectedFeatures,
      checkAllFeatures,
      isIndeterminateFeatures,
      handleCheckAllFeaturesChange,
      handleCheckedFeaturesChange,
      categories,
      selectedCategories,
      checkAllCategories,
      isIndeterminateCategories,
      handleCheckAllCategoriesChange,
      handleCheckedCategoriesChange,
      selectedBusinessArea,
      businessAreas,
      restaurants,
      currentPage,
      pageSize,
      filteredRestaurants,
      paginatedRestaurants,
      handlePageChange,
      handleSizeChange,
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
        // 更多菜品数据...
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.body {
  font-family: "Roboto", sans-serif;
  // background-color: #f9f6f6; // 全局背景色
  color: #333; // 全局文本颜色
}

.slideshow {
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  /* 设置上下外边距为0，左右外边距自动 */

  padding-left: 20px;
  padding-right: 20px;
  width: 1200px;
  .wrap {
    .rankingList {
      border-radius: 8px;
      
      box-shadow: 12px 12px 2px 1px #a6b2c745;
      border: 1px solid #a39d9d;
      background-color: white; // 全局背景色
      color: #333; // 全局文本颜色

      .filter-container {
        // background-color: rgba(151, 243, 109, 0.774);
        
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
  // padding-top: 36px;
  height: 50px;
  background: #fafafa;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
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

// 定义通用变量
@color-primary: rgba(29, 33, 41, 1);
@font-kalam-bold: "Kalam-Bold";
@font-harmony: "HarmonyOSSansSC-Regular";
@bg-color: white;
@box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
@header-height: 72px;
@container-width: 1200px;
@user-img-url: url("/src/assets/6556e75090ab84325baa614a.png");

.affix-container {
  width: 100%;

  .header {
    width: 100%;
    height: @header-height;
    z-index: 1000; // 确保导航栏在其他元素之上
    background-color: @bg-color; // 背景颜色
    box-shadow: @box-shadow; // 添加阴影
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .header-container {
      position: relative;
      width: 100%;
      max-width: @container-width;
      min-width: @container-width;
      height: @header-height;
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
            color: @color-primary;
            font-size: 22px;
            font-weight: 700;
            font-family: @font-kalam-bold;
            white-space: nowrap;
          }

          .nav-items {
            display: flex;
            gap: 32px;

            span {
              color: @color-primary;
              font-size: 16px;
              line-height: 24px;
              font-weight: 400;
              font-family: @font-harmony;
              white-space: nowrap;
            }
          }
        }

        .search {
          display: flex;
          align-items: center;
          gap: 10px;
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
            --img-url: @user-img-url;
          }
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
.glass-carousel {

  // width: 750px;
  border-radius: 6px; /* 圆角 */
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* 柔和的阴影 */
  backdrop-filter: blur(10px); /* 模糊背景 */
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  border: 1px solid rgba(255, 255, 255, 0.2); /* 半透明边框 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  margin-bottom: 34px;
}

.glass-carousel:hover {
  transform: scale(1.02); /* 悬停时轻微放大 */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* 悬停时增强阴影 */
}

.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.3s ease; /* 图片的动画效果 */
}

.carousel-image:hover {
  transform: scale(1.08); /* 图片悬停时放大效果 */
  filter: brightness(1.1); /* 悬停时增加亮度 */
}

.banner-food {
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  .icon {
    margin-right: 10px;
  }

  .banner-text {
    color: #333;
  }
}
</style>
    