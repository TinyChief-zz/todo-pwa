<template>
  <div :class="[this.$store.getters.menuStatus ? 'opened' : 'closed', 'menu']">
    <div v-if="this.$store.getters.menuStatus" class="closer" @click="closeMenu"></div>

    <div class="profile">
      <div class="photo">
        <img src="../../assets/images/photo.png" alt>
      </div>
      <div class="text-information">
        <h1>{{userData.name}}</h1>
        <p>{{userData.email}}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li v-for="(item, i) in navList" :key="i" @click="handleRoute(item.name)">
          <Icon :iconClass="[item.icon]" :divClass="['menu-icon']"></Icon>
          <p>{{ item.name }}</p>
          <p class="not-yet" v-if="item.notYet">В разработке</p>
          <span v-if="item.number">{{ item.number }}</span>
        </li>
      </ul>
    </nav>
    <div>
      <ul>
        <li @click="handleSettings">
          <Icon :iconClass="['fal fa-cog']" :divClass="['menu-icon']"></Icon>
          <p>Settings</p>
        </li>
        <li @click="handleLogout">
          <Icon :iconClass="['fal fa-sign-out']" :divClass="['menu-icon']"></Icon>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/reusable/Icon.vue'

export default {
  components: {
    Icon
  },
  name: 'Menu',
  data () {
    return {
      navList: [
        {
          name: 'Home',
          icon: 'fal fa-home'
        },
        {
          name: 'Calendar',
          icon: 'fal fa-calendar-alt'
        },
        {
          name: 'Overview',
          icon: 'fal fa-chart-pie',
          number: '5'
        },
        // {
        //   name: `Groups`,
        //   notYet: true,
        //   icon: 'fal fa-align-left'
        // },
        // {
        //   name: 'Lists',
        //   notYet: true,
        //   icon: 'fal fa-list-ul'
        // },
        {
          name: 'Profile',
          icon: 'fal fa-user-circle'
        },
        {
          name: 'Timeline',
          icon: 'fal fa-undo fa-rotate-90',
          number: '2'
        }
      ]
    }
  },
  methods: {
    closeMenu: function () {
      this.$store.dispatch('toggleMenu')
    },
    handleSettings: function () {
      this.$store.dispatch('toggleMenu')
      this.$router.push({ name: 'Settings' })
    },
    handleLogout: function () {
      this.$store.dispatch('logoutUser')
    },
    handleRoute: function (name) {
      this.$store.dispatch('toggleMenu')
      this.$router.push({ name: name })
    }
  },
  computed: {
    userData: function () {
      return this.$store.getters.userData
    }
  }
}
</script>

<style scoped lang="scss">
$textColor: #1d1d26;
@import "@/style/_vars.scss";

.closer {
  position: absolute;
  width: 1000px;
  height: 100%;
  left: 100%;
  top: 0;
}
.not-yet {
  text-decoration: underline;
}
.menu {
  position: absolute;
  height: 100%;
  width: 300px;
  padding: 20px 25px;
  display: block;
  flex-direction: column;
  top: 0;
  background-color: #fff;
  z-index: 100;
  color: $textColor;
  left: 0;
  transition: 0.3s transform ease-out;
  @include for-small-phone {
    width: 250px;
    padding: 14px 20px;
  }
}
.closed {
  transform: translateX(-100%);
}
.opened {
  transform: translate(0);
}

.profile {
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 5px;
  position: relative;
  text-align: left;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url("../../assets/images/divider1.png") center;
    background-size: contain;
  }
  h1 {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 8px;
    word-break: break-word;
    @include for-small-phone {
      font-size: 23px;
    }
  }
  p {
    opacity: 0.6;
  }
}
.photo {
  margin-right: 20px;
  height: initial;
  img {
    width: 70px;
  }
  @include for-small-phone {
    margin-right: 10px;
    img {
      width: 60px;
    }
  }
}

li {
  display: flex;
  justify-content: space-between;
  padding: 22px 0 22px 55px;
  position: relative;
  font-size: 18px;
  @include for-small-phone {
    padding: 19px 0 19px 55px;
  }
  cursor: pointer;
  img {
    position: absolute;
    left: 0;
    width: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  p {
    font-size: 16px;
    display: block;
  }
}
nav {
  padding-bottom: 5px;
  position: relative;
  margin-bottom: 10px;
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url("../../assets/images/divider1.png") center;
    background-size: contain;
  }
}
</style>
