<template>
  <div class="container">
    <!-- 按钮控制抽屉打开 -->
    <el-button type="primary" @click="openDrawer('brief')">
      打开简略内容
    </el-button>
    <el-button type="success" style="margin-left: 16px" @click="openDrawer('detailed')">
      打开详细内容
    </el-button>

    <!-- 简略内容抽屉 -->
    <el-drawer
      v-model="showBriefDrawer"
      title="简略内容"
      direction="ltr"
      size="35%"
      :before-close="handleClose"
    >
      <div class="markdown-content" v-html="renderedBriefContent"></div>
    </el-drawer>

    <!-- 详细内容抽屉 -->
    <el-drawer
      v-model="showDetailedDrawer"
      title="详细内容"
      direction="rtl"
      size="35%"
      :before-close="handleClose"
    >
      <div class="markdown-content" v-html="renderedDetailedContent"></div>
    </el-drawer>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { ElMessageBox, ElButton, ElDrawer, ElIcon } from 'element-plus';
import { HomeFilled, Search, User } from '@element-plus/icons-vue';
import MarkdownIt from 'markdown-it';

export default {
  name: "SightSpot",
  components: {
    ElButton,
    ElDrawer,
    ElIcon,
    HomeFilled,
    Search,
    User,
  },
  setup() {
    // 控制抽屉显示
    const showBriefDrawer = ref(false);
    const showDetailedDrawer = ref(false);

    // 简略内容
    const briefContent = ref(`简略内容文本...`);

    // 详细内容
    const detailedContent = ref(`详细内容文本...`);

    // Markdown 渲染
    const md = new MarkdownIt();
    const renderedBriefContent = computed(() => md.render(briefContent.value));
    const renderedDetailedContent = computed(() => md.render(detailedContent.value));

    // 打开抽屉
    const openDrawer = (type) => {
      if (type === 'brief') {
        showBriefDrawer.value = true;
      } else if (type === 'detailed') {
        showDetailedDrawer.value = true;
      }
    };

    // 关闭前确认
    const handleClose = (done) => {
      ElMessageBox.confirm('确定要关闭吗？')
        .then(() => {
          done();
        })
        .catch(() => {
          // 处理取消操作
        });
    };

    return {
      showBriefDrawer,
      showDetailedDrawer,
      renderedBriefContent,
      renderedDetailedContent,
      openDrawer,
      handleClose,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.markdown-content {
  font-size: 12px;
  line-height: 1.2;
  color: #333;

  h1 {
    font-size: 18px;
    margin: 15px 0;
  }

  h2 {
    font-size: 15px;
    margin: 13.5px 0;
  }

  h3 {
    font-size: 13.5px;
    margin: 12px 0;
  }

  p {
    font-size: 12px;
    margin: 7.5px 0;
  }

  ul {
    padding-left: 15px;

    li {
      font-size: 12px;
      line-height: 1.125;
    }
  }

  a {
    color: #007bff;
    text-decoration: underline;
  }
}
</style>
