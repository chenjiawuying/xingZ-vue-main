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
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { ElCard, ElIcon } from "element-plus";
import { TrophyBase } from "@element-plus/icons-vue";
import MarkdownIt from "markdown-it";
import DishTable from "@/components/DishTable.vue";
export default {
  name: "SightSpot",
  components: {
    TrophyBase,
    ElCard,
    ElIcon,
    DishTable,
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
    