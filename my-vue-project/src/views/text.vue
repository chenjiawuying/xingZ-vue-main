<template>
  <div>

    <div class="warp">
      <dish-table :tableData="dishes" />
    </div>
    
  </div>
</template>

<script>
import DishTable from "@/components/DishTable.vue";
export default {
  components: {
    DishTable
  },
  data() {
    return {
      dishes: [
      { name: '汤', score: 466, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '叉烧', score: 216, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '烧鹅', score: 112, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '叉烧包', score: 87, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '猪手', score: 73, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '牛河', score: 53, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '煲仔饭', score: 50, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '荷叶饭', score: 2, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '冬瓜盅', score: 2, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      { name: '猪肚煲鸡', score: 1, imageUrl: 'https://img.jsdesign2.com/assets/img/6556e73f90ab84325baa606a.png#85d85dbadb9db0744eaa6c894d882c4d' },
      // Add more dishes here as needed
    ],
    };
  }
};
</script>
