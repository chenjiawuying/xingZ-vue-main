<template>
    <div id="app-index">

      <!-- Header -->
      <a name="home"></a>
      <div class="intro-header">
        <div class="bg-overlay">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-message">
                  <h1>行舟-基于Langchain的AI旅游助理</h1>
                  <h3>舟行万里，逐梦天涯。风帆远扬，心随旅行。</h3>
                  <hr class="intro-divider" />
                  <ul class="list-inline intro-social-buttons">
                    <li v-for="link in socialLinks" :key="link.name">
                      <a
                        :href="link.url"
                        target="_blank"
                        class="btn btn-default btn-lg"
                      >
                        <i :class="link.icon"></i>
                        <span class="network-name">{{ link.name }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- About Section -->
      <a name="about"></a>
      <div class="content-section-a">
        <div class="bg-overlay2">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-sm-5">
                <h2 class="section-heading">
                    
                    <br>
                    <br>
                    
                    行舟
                    
                    —基于Langchain的AI旅游助理</h2>
                <br />
                <p class="lead">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“行舟”是一个以用户为中心的智能旅游助理网站，旨在利用Langchain技术和先进的人工智能模型为用户提供个性化的旅游服务。
                    该平台结合多种数据源和创新技术，为用户提供从旅游推荐到行程规划的一站式服务。
                  <!-- <a
                    class="link"
                    target="_blank"
                    href="https://www.freecodecamp.com/thiagoferreira"
                    >self taught</a
                  > -->
                  
                  <!-- <a
                    class="link"
                    target="_blank"
                    href="https://www.facebook.com/Virtual-Dawn-802163799892155/"
                    >start-up called Virtual-Dawn</a
                  > -->
                  


                </p>
              </div>

              <div class="circle-right">
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <!-- <img
                  class="img-circle img-responsive"
                  src="https://68.media.tumblr.com/ccd0e1b1bdb3492eecdac39b8d42d7ad/tumblr_nwh4pmSv8k1ud7rr3o1_400.jpg"
                  alt=""
                /> -->
                <br>
                <br>
                <br>
                <div class="img-circle"></div>
              </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
  
      <!-- Portfolio Section -->
      <a name="portfolio"></a>
      <section id="portfolio" class="bg-light-gray bounds">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">更多的应用产品</h2>
              <h3 id="below-section" class="section-subheading text-muted">
                希望对你有更多帮助
              </h3>
            </div>
          </div>
          <div class="row">
            <div
              v-for="project in projects"
              :key="project.title"
              class="col-md-4 col-sm-6 portfolio-item"
            >
              <a
                :href="project.url"
                target="_blank"
                class="portfolio-link"
                data-toggle="modal"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fa fa-fire fa-3x"></i>
                  </div>
                </div>
                <img :src="project.image" class="img-responsive image-16by9" :alt="project.title" />
              </a>
              <div class="portfolio-caption">
                <h4>{{ project.title }}</h4>
                <p id="small-text" class="text-muted">{{ project.tech }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <a name="contact"></a>
      <div class="banner">
        <div class="bg-overlay4">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h2 class="connect">
                  可以关注我们公众号
                  <a
                    class="link-footer"
                    target="_blank"
                    href=""
                    >行舟-基于Langchain的AI旅游助理</a
                  >
                </h2>
              </div>
              <div class="col-lg-6">
                <ul class="list-inline banner-social-buttons">
                  <li v-for="link in socialLinks" :key="link.name">
                    <a
                      :href="link.url"
                      target="_blank"
                      class="btn btn-default btn-lg"
                    >
                      <i :class="link.icon"></i>
                      <span class="network-name">{{ link.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-inline">
                <li><a href="#">Home</a></li>
                <li class="footer-menu-divider">&sdot;</li>
                <li><a href="#about">About</a></li>
                <li class="footer-menu-divider">&sdot;</li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li class="footer-menu-divider">&sdot;</li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <p class="copyright text-muted small">
                Copyright &copy; Infinito Web Design Studio 2015. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        socialLinks: [
          // {
          //   name: '关于我们',
          //   url: '',
          //   icon: 'fa fa-search fa-fw',
          // },
          {
            name: '旅游推荐',
            url: '',
            icon: 'fa fa-map-marker fa-fw',
          },
          {
            name: '行程规划',
            url: '',
            icon: 'fa fa-calendar fa-fw',
          },
          {
            name: '智能客服',
            url: '',
            icon: 'fa fa-user fa-fw',
          },
        ],
        projects: [
          {
            title: '旅游推荐',
            url: '',
            image: require('../assets/旅游推荐.jpg'),
            tech: '为您提供个性化推荐',
          },
          {
            title: '行程规划',
            url: '',
            image: require('../assets/wcgh.jpg'),
            tech: '给您提供更好的旅游体验',
          },
          {
            title: '智能客服',
            url: '',
            image:
            require('../assets/zngf.jpg'),
            tech: '将为您提供7/24小时信息服务',
          },
          {
            title: '全面的多语言支持',
            url: '',
            image:
            require('../assets/dlang.jpg'),
            tech: '为跟多人提供服务',
          },
          {
            title: '微信公众号',
            url: '',
            image:
            require('../assets/wx.png'),
            tech: '关注我们提供更多质询',
          },
          {
            title: '更多',
            url: '',
            image:
            require('../assets/gduo.jpg'),
            tech: '更多功能与技术',
          },
        ],
      };
    },
  };
  </script>
  
  <style lang="less" scoped>
  
  
  .img-circle {
            // left: 20px;
            width: 300px; /* 设置宽度 */
            height: 300px; /* 设置高度 */
            background-image: url('/src/assets/头像.jpg');
            background-size: cover; /* 确保图片覆盖整个容器 */
            // background-position: right; /* 图片居中 */
            border-radius: 50%; /* 圆形效果 */
            overflow: hidden; /* 确保圆形效果 */
            background-position: calc(50% + 10px) calc(50% + 10px); /* 向右和向下移动 */
        }
  
  
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
  
  .topnav {
    font-size: 16px;
    border-bottom: 1px outset rgba(192, 192, 192, 0.5);
    background: rgba(192, 192, 192, 0.9);
    box-shadow: 0px 1px rgba(0, 0, 0, 0.3);
  }
  .topnav ul.navbar-nav li a {
    background: rgba(28, 28, 28, 0.1);
    color: #000;
  }
  .topnav ul.navbar-nav li a:hover,
  .topnav ul.navbar-nav li a:focus {
    background: rgba(255, 255, 255, 0.5);
    color: #000;
  }
  
  .topnav .navbar-brand {
    background: rgba(28, 28, 28, 0.0);
    color: #000;
  }
  
  .topnav .navbar-brand:hover,
  .topnav .navbar-brand:focus {
    background: rgba(255, 255, 255, 0.5);
    color: #000;
  }
  
  .lead {
    font-size: 18px;
    font-weight: 400;
  }
  /*top background*/
  .intro-header {
    padding-top: 50px; /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */
    padding-bottom: 50px;
    text-align: center;
    background: url('/src/assets/hot-air-balloon.jpg')
      no-repeat center center fixed;
    background-size: cover;
    height: 855px;
  }
  .bg-overlay {
    background: rgba(0, 0, 0, 0.3);
    height: 855px;
  }
  
  .intro-message {
    position: relative;
    padding-top: 20%;
    padding-bottom: 20%;
  }
  /*Big header*/
  .intro-message > h1 {
    margin-top: -50px;
    text-shadow: 2px 1px 2px #000;
    font-size: 5em;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .intro-divider {
    width: 400px;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  /*small header*/
  .intro-message > h3 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    color: black;
  }
  
  @media (max-width: 767px) {
    .intro-message {
      padding-bottom: 15%;
    }
  
    .intro-message > h1 {
      font-size: 3em;
    }
  
    ul.intro-social-buttons > li {
      display: block;
      margin-bottom: 20px;
      padding: 0;
    }
  
    ul.intro-social-buttons > li:last-child {
      margin-bottom: 0;
    }
  
    .intro-divider {
      width: 100%;
    }
  }
  /*line*/
  hr.intro-divider {
    border: 1px outset rgba(255, 255, 255, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    width: 100%;
  }
  /* social buttons */
  .btn {
    display: inline-block;
    color: #000;
    border: 2px outset rgba(0, 0, 0, 0.9);
    background: #c0c0c0;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 20);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    transition: 0.2s;
  }
  
  .btn:hover {
    color: #fff;
    border: 2px outset rgba(0, 0, 0, 0.9);
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
    transition: 0.2s;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 20);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
  }
  
  /*section 2*/
  .content-section-a {
    padding: 50px 0;
    background: url('/src/assets/sunset-3495108.jpg')
      no-repeat center center fixed;
    background-size: cover;
    height: 855px;
  }
  .bg-overlay2 {
    margin-top: -50px;
    background: rgba(255, 255, 255, 0.2);
    height: 855px;
  }
  /*self-taught*/
  .container .link {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 22px;
  }
  .container .link-footer {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 32px;
  }
  .container .link-footer:hover {
    color: rgba(24, 39, 40, 0.8);
    font-weight: bold;
    font-size: 32px;
  }
  
  .container .link:hover {
    color: rgb(0, 0, 128);
    font-weight: bold;
    font-size: 22.5px;
  }
  
  h2.section-heading {
    margin-top: 100px;
    font-size: 3em;
    color: rgba(0, 0, 0, 0.9);
  }
  
  /*text*/
  .content-section-a p {
    font-size: 22px;
    font-weight: bold;
    color: #000;
  }
  .content-section-a p a {
    color: silver;
    font-weight: bold;
  }
  /*profile picture*/
  .img-circle {
    margin-top: 150px;
    border: 1px outset rgba(255, 255, 255, 0.3);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.6);
    margin-left: 149px;
  }
  
  /* Portfolio section*/
  section {
    color: black;
    background: url('/src/assets/yosemite-922757.jpg')
      no-repeat center center fixed;
    background-size: cover;
  }
  
  #below-section {
    color: #000;
  }
  
  #small-text {
    color: white;
  }
  
  /*Portfolio items*/
  #portfolio .portfolio-item {
    margin: 0 0 15px;
    right: 0;
    border: 1px outset rgba(255, 255, 255, 0.6);
  }
  
  #portfolio .portfolio-item:hover {
    transition: 0.5s;
    box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.9);
  }
  
  #portfolio .portfolio-item .portfolio-link {
    display: block;
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }
  
  #portfolio .portfolio-item .portfolio-link .portfolio-hover {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all ease 0.5s;
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
  }
  
  #portfolio .portfolio-item .portfolio-link .portfolio-hover:hover {
    opacity: 1;
  }
  
  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
    position: absolute;
    width: 100%;
    height: 20px;
    font-size: 20px;
    text-align: center;
    top: 50%;
    margin-top: -12px;
    color: #fff;
  }
  
  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content i {
    margin-top: -12px;
  }
  
  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h3,
  #portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content h4 {
    margin: 0;
  }
  
  #portfolio .portfolio-item .portfolio-caption {
    max-width: 400px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    padding: 25px;
  }
  
  #portfolio .portfolio-item .portfolio-caption h4 {
    color: #fff;
    text-transform: none;
    margin: 0;
  }
  
  #portfolio .portfolio-item .portfolio-caption p {
    font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-style: italic;
    font-size: 13px;
    margin: 0;
  }
  
  #portfolio * {
    z-index: 2;
  }
  
  @media (min-width: 767px) {
    #portfolio .portfolio-item {
      margin: 0 0 30px;
    }
  }
  
  .section-heading-spacer {
    float: left;
    width: 200px;
    border-top: 3px solid #e7e7e7;
  }
  
  .banner {
    padding: 100px 0;
    background: url('/src/assets/dumped-church.jpg')
      no-repeat center center fixed;
    background-size: cover;
    height: 755px;
  }
  
  .bg-overlay4 {
    margin-top: -100px;
    padding: 100px 0;
    background: rgba(255, 255, 255, 0.3);
    height: 755px;
  }
  
  .banner ul {
    margin-bottom: 0;
  }
  
  .banner-social-buttons {
    float: right;
    margin-top: 0;
  }
  
  @media (max-width: 1199px) {
    ul.banner-social-buttons {
      float: left;
      margin-top: 15px;
    }
  }
  
  ul.banner-social-buttons > li {
    display: block;
    margin-bottom: 20px;
    padding: 0;
  }
  
  ul.banner-social-buttons > li:last-child {
    margin-bottom: 0;
  }
  
  h2.connect {
    margin: 0;
    color: rgba(0, 0, 0, 0.9);
  }
  
  footer {
    padding: 50px 0;
    background: rgba(192, 192, 192, 0.9);
  }
  
  p.copyright {
    margin: 15px 0 0;
  }

  .image-16by9 {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
  </style>
  