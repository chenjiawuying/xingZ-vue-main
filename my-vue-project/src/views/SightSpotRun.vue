<template>
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
              <span><a href="">更多内容</a> </span>
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
  
    <div class="item-name">
      <div class="wrap">
        <div class="img-item-name"></div>
        <a href=""> 景点名称 </a>
      </div>
    </div>
    <div class="slideshow">
      <div class="wrap">
        <!-- <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img
              :src="image"
              alt="Carousel Image"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </el-carousel-item>
        </el-carousel> -->
        <el-carousel class="rounded-carousel" height="400px" motion-blur>
          <el-carousel-item v-for="(image, index) in images" :key="index">
            <img
              :src="image"
              alt="Carousel Image"
              style="width: 100%; height: 100%; object-fit: cover"
              class="rounded-carousel-item"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="warp2">
        <el-row class="item-1">
          <el-col :span="18" :offset="2" class="info-section">
            <!-- <el-divider content-position="left">景观简介</el-divider> -->
            <el-row>
              <el-col :span="24" class="tit">
                土耳其穆拉(Muğla)费特希耶的猫
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} points"
                />
              </el-col>
            </el-row>
            <el-row class="details">
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">别名：</span>
                  <span class="info-value">小橘猫</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">地址：</span>
                  <span class="info-value">香港大屿山香港迪士尼乐园度假区</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">开放时间：</span>
                  <span class="info-value">未开园；今日10:30-20:00开放</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">官方电话：</span>
                  <span class="info-value">+852-35503388</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">提示信息：</span>
                  <span class="info-value">这信息由网上收集而来的公共信息</span>
                </div>
              </el-col>
            </el-row>
            <el-divider border-style="dashed" />
            <div class="tab-items">
              <div class="flex flex-wrap gap-1">
                <el-card class="custom-card" shadow="hover">
                  <div class="card-content">
                    <el-icon>
                      <HomeFilled />
                    </el-icon>
                    <span>Always</span>
                  </div>
                </el-card>
                <el-card class="custom-card" shadow="hover">
                  <div class="card-content">
                    <el-icon>
                      <Search />
                    </el-icon>
                    <span>Hover</span>
                  </div>
                </el-card>
                <el-card class="custom-card" shadow="hover">
                  <div class="card-content">
                    <el-icon>
                      <User />
                    </el-icon>
                    <span>Never</span>
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="kong"></div>
    <!-- <el-card> -->
    <div class="card-cont">
      <el-card class="card-content">
        <div class="markdown-content" v-html="htmlContent"></div>
      </el-card>
    </div>
    <div class="content">
      <div class="warp">
        <el-row class="item-1">
          <el-col :span="12" class="info-section">
            <!-- <el-divider content-position="left">景观简介</el-divider> -->
            <el-row>
              <el-col :span="24" class="tit">
                土耳其穆拉(Muğla)费特希耶的猫
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} points"
                />
              </el-col>
            </el-row>
            <el-row class="details">
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">地址：</span>
                  <span class="info-value">香港大屿山香港迪士尼乐园度假区</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">开放时间：</span>
                  <span class="info-value">未开园；今日10:30-20:00开放</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="info-item">
                  <span class="info-label">官方电话：</span>
                  <span class="info-value">+852-35503388</span>
                </div>
              </el-col>
            </el-row>
            <el-divider border-style="dashed" />
          </el-col>
          <el-col :span="12"> 111</el-col>
        </el-row>
      </div>
    </div>
  
    <!-- </el-card> -->
  </template>
    
  
  <script>
  import { ref } from "vue";
  import { ElCard, ElIcon } from "element-plus";
  import { HomeFilled, Search, User } from "@element-plus/icons-vue";
  import { ElMessageBox } from 'element-plus';
  import { computed } from "vue";
  import MarkdownIt from "markdown-it";
  // import { ElCard } from 'element-plus';
  
  // import MarkdownIt from 'markdown-it';
  // https://element-plus.org/zh-CN/component/icon
  export default {
    name: "SightSpot",
    components: {
      ElCard,
      ElIcon,
      HomeFilled,
      Search,
      User,
      ElCard,
    },
    setup() {
      const markdownContent = ref(`
  ### 广州动物园游玩攻略
  
  带孩子去广州动物园是很好的亲子活动，这里有详细的交通、门票和游玩路线建议，帮你轻松游园。
  
  #### 📍 基本信息
  - **地址**: 广州市越秀区先烈中路120号
  - **营业时间**: 8:00 - 18:00
  - **门票**: 成人20元，儿童/学生10元，60岁以上老人和1.2米以下儿童免费
  
  #### 🚉 交通
  - **南门**: 地铁5号线动物园站B、C出口
  - **北门**: 地铁6号线黄花岗站A出口
  - **自驾**: 停车位少，容易塞车
  
  #### 🗺️ 推荐路线（北门进，南门出）
  1. 北门入园
  2. 经过：猴子、黑猩猩、熊、老虎、飞禽大观、大象、熊猫、长颈鹿等
  3. 南门出
  
  #### ⭐ 推荐打卡点
  - **熊猫馆**: 建议早去，避免排队
  - **大象馆**: 适合全家观赏
  - **长颈鹿园**: 可喂食长颈鹿（20元/把草料）
  
  #### 🍴 建议
  - 园内餐饮较贵且一般，自备干粮和水
  
  #### 💡 小贴士
  - **推车**: 带娃建议自备推车
  - **防晒**: 记得做好防晒
  - **防蚊**: 带好防蚊用品
  - **避开高峰**: 工作日或一早来园，避开人流
  祝大家游园愉快！
      `);
  
      const md = new MarkdownIt();
      const htmlContent = computed(() => md.render(markdownContent.value));
  
      // 使用 ref 来创建响应式数据
      const value = ref(3.7);
      const images = ref([
        "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg",
        "https://cdn.pixabay.com/photo/2024/05/18/08/16/tomcat-8769861_640.jpg",
        "https://cdn.pixabay.com/photo/2017/04/30/18/33/kittens-2273598_640.jpg",
        "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_640.jpg",
        "https://cdn.pixabay.com/photo/2019/10/11/16/56/cat-4542301_1280.jpg",
      ]);
  
      // 返回需要在模板中使用的响应式数据
      return {
        value,
        images,
        HomeFilled,
        Search,
        User,
        htmlContent,
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
    max-width: 1200px;
    /* 设置最小宽度 */
    min-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    .wrap {
      width: 720px;
      .rounded-carousel {
        border-radius: 20px; /* Adjust the value to make corners more or less rounded */
        // overflow: hidden; /* Ensures that the content respects the border radius */
        .rounded-carousel-item {
          border-radius: 20px; /* 确保每个轮播项也遵循圆角 */
          overflow: hidden;
        }
      }
    }
    .warp2 {
      width: 480px;
      .item-1 {
        .info-section {
          margin-bottom: 20px;
        }
  
        .header h2 {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }
  
        .tab-items {
          .flex {
            display: flex;
          }
          .flex-wrap {
            flex-wrap: wrap;
          }
          .gap-1 {
            gap: 8px; /* 调整间距 */
          }
          .custom-card {
            width: 120px;
            height: 45px; /* 设置固定高度 */
            display: flex;
            flex-direction: column; /* 使内容纵向排列 */
            justify-content: center; /* 垂直居中对齐内容 */
          }
          .card-content {
            display: flex;
            align-items: center; /* 垂直居中对齐图标和文字 */
            gap: 8px; /* 图标和文字之间的间距 */
          }
          .card-content el-icon {
            font-size: 24px; /* 调整图标大小 */
          }
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
          margin-top: 20px;
          margin-bottom: 5px;
        }
  
        .el-rate {
          margin-bottom: 10px;
        }
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
  
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
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
  
      a {
        padding-left: 8px;
        font-size: 1.5em;
        width: auto;
        font-weight: bold;
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
          margin-top: 20px;
          margin-bottom: 5px;
        }
  
        .el-rate {
          margin-bottom: 10px;
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
  </style>
    