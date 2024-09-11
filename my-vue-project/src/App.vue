<template>
   <!-- <div class="header">
    <div class="header-container">
      <div class="nav-menu">
        <div class="left-header">
          <div class="title">
            <span><a href="">旅游网站</a></span>
          </div>

          <div class="nav-items">
            <span><a href="">首页</a> </span>
            <span><a href="">目的地</a> </span>
            <span><a href="">旅游产品</a> </span>
            <span><a href="">关于我们</a> </span>
            <span><a href="">更多内容</a> </span>
          </div>
        </div>
        <div class="right-header">
          <div class="userImage"></div>
          <div class="nav-menu"></div>
        </div>
      </div>
    </div>

    
  </div> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/">Home</router-link>  -->
    <!-- <router-link to="/about">About</router-link> -->
  
  <router-view/>
</template>
<!-- 
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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
  position: fixed; /* 将 header 固定在页面顶部 */
  z-index: 1000; /* 高 z-index 确保其位于其他元素之上 */
  width: 100%; /* 占据100%的宽度 */
  height: 72px;
  background-color: white; /* 背景颜色为白色 */
  mix-blend-mode: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
  box-sizing: border-box;
  order: 0;
  flex-shrink: 0;

  .header-container {
    width: 100%; /* 确保容器也占满宽度 */
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-header {
        display: flex;
        align-items: center;
        gap: 60px;

        .title {
          color: rgba(29, 33, 41, 1);
          font-size: 22px;
          font-weight: 700;
          font-family: "Kalam-Bold";
        }

        .nav-items {
          display: flex;
          gap: 32px;

          span {
            color: rgba(29, 33, 41, 1);
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            font-family: "HarmonyOSSansSC-Regular";
          }
        }
      }

      .right-header {
        display: flex;
        align-items: center;
        gap: 24px;

        .userImage {
          display: flex;
          width: 40px;
          height: 40px;
          background-image: var(--bg-img);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 50%;
        }

        .nav-menu {
          width: 40px;
          height: 40px;
          background-image: var(--bg-img);
          background-size: cover;
          display: flex;
        }
      }
    }
  }
}


</style> -->
