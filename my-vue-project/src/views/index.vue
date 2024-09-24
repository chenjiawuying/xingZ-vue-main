<template>
  <!-- <div class="styled">Hello, Vue with LESS!</div> -->
  <div class="header">
    <div class="header-container">
      <div class="nav-menu">
        <div class="left-header">
          <div class="title">
            <span><a href="">行舟旅游网站</a></span>
          </div>

          <div class="nav-items">
            <span><a href="">首页</a> </span>
            <span><a href="">目的地</a> </span>
            <span><a href="">旅游产品</a> </span>
            <span><a href="">关于我们</a> </span>
            <router-link to="/Dining">
              <span><a href="">更多内容</a> </span></router-link
            >
          </div>
        </div>

        <div>
          <el-autocomplete
            class="inline-input"
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
          <div class="nav-menu"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 占位元素 -->
  <!-- <div class="placeholder"></div> -->

  <Banner class="banner" />
</template>

<script>
import Banner from "@/components/indexBanner.vue";

export default {
  data() {
    return {
      restaurants: [],
      state1: "",
      state2: "",
    };
  },
  name: "App",
  components: {
    Banner,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "中文", address: "zh" },
        { value: "English", address: "en" },
      ];
    },
    handleSelect(item) {
      console.log("Selected:", item);
      this.changeLanguage(item.address);
    },
    clearInput() {
      this.state1 = ""; // 清空输入框内容
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
};
</script>

<style lang="less" scoped>
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
    max-width: 1200px;
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

.placeholder {
  height: 72px; /* 占位元素的高度与导航栏一致 */
}
</style>
