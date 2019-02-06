<template>
  <div class="outter-wrapper">
    <div :class="['wrapper']">
      <Toolbar leftIcon="fal fa-times" rightIcon="fal fa-check" title="Add New" @left-icon-clicked="leftAction" @right-icon-clicked="rightAction">
      </Toolbar>
      <div class="header">
        <input class="title first-row" type="text" placeholder="New Event" v-model="title">
        <input class="description second-row" type="text" placeholder="Description" v-model="description">
      </div>
      <div class="blocks">

        <div class="block-item" @click="toggleCalendar">
          <img class="block-item__icon" src="../assets/images/calendar-w.png" alt="calendar">
          <div class="block-item__content">
            <p class="block-item__title">Date</p>
            <p>{{ today }}</p>
          </div>
          <img :class="[calendarIsOpened ? 'rotate90' : '', 'icon-action']" src="../assets/images/disclosure.png" alt="open">
        </div>
        <div class="calendar" :class="[calendarIsOpened ? 'opened' : 'closed']">
          <vue-calendar @day-clicked="dayClicked">
          </vue-calendar>
        </div>

        <div class="block-item time-picker" @click="toggleTime">
          <img class="block-item__icon" src="../assets/images/time-w.png" alt="time">
          <div class="block-item__content">
            <p class="block-item__title">Time</p>
            <p>{{ setValue(hoursChoosed) }}:{{ setValue(minutesChoosed) }}</p>
          </div>
          <img :class="[timeIsOpened ? 'rotate90' : '', 'icon-action']" src="../assets/images/disclosure.png" alt="open">
        </div>

        <div class="select-time" :class="[timeIsOpened ? 'opened' : 'closed']">
          <div class="hours">
            <h1>Hours</h1>
            <div class="display-selected" @click="hoursIsOpened = true">{{ hoursChoosed }}</div>
            <ul v-show="hoursIsOpened" class="hours-list">
              <li v-for="i in 25" :key="i" @click="hoursSelected($event)">{{ setValue(i-1) }}</li>
            </ul>
          </div>
          <div class="minutes">
            <h1>Minutes</h1>
            <div class="display-selected" @click="minutesIsOpened = true">{{ minutesChoosed }}</div>
            <ul v-show="minutesIsOpened" class="minutes-list">
              <li v-for="i in 61" :key="i" @click="minutesSelected($event)">{{ setValue(i-1) }}</li>
            </ul>
          </div>
        </div>

        <div class="block-item">
          <img class="block-item__icon" src="../assets/images/location-w.png" alt="location">
          <div class="block-item__content">
            <p class="block-item__title">Location</p>
            <input type="location" name="location" placeholder="Enter location" v-model="location" />
          </div>
        </div>

        <div class="block-item" @click="togglePeople">
          <img class="block-item__icon" src="../assets/images/people-w.png" alt="people">
          <div class="block-item__content">
            <p class="block-item__title">People</p>
            <p v-if="peopleList.length == 0">Add people</p>
            <span class="names-item" v-for="(name, i) in peopleList" :key="i">{{ name ? name : 'Add people' }}</span>
          </div>
          <img class="icon-action" src="../assets/images/plus.png" alt="add">
        </div>
        <div class="add-people" :class="[peopleIsOpened ? 'opened' : 'closed']">
          <input type="text" placeholder="Enter name" v-model="personName">
          <button @click="addPeople(personName)">ADD</button>
        </div>

        <div class="block-item">
          <img class="block-item__icon" src="../assets/images/droplet-w.png" alt="droplet">
          <div class="block-item__content">
            <p class="block-item__title">label color</p>
            <div class="colors">
              <div :class="[hero.choosed ? 'choosed' : '']" class="colors-item" v-for="(hero, i) in colors" @click="onColorClicked(i)" :key="i" :style="{'background-color' : hero.color}">
              </div>
            </div>
          </div>
        </div>
        <div class="block-item block-types">
          <img class="block-item__icon" src="../assets/images/notification-w.png" alt="notification">
          <div class="block-item__content">
            <p class="block-item__title">types</p>
            <ul class="types">
              <li v-for="(item, i) in types" :key="i" @click="typeChoosed(i)">
                {{item}}
              </li>
            </ul>
          </div>
        </div>

        <div class="block-item">
          <img class="block-item__icon" src="../assets/images/notification-w.png" alt="notification">
          <div class="block-item__content">
            <p class="block-item__title">notification</p>
            <p>Will be available in FUTURE</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'
export default {
  name: 'New',
  components: { Toolbar },
  data () {
    return {
      types: [
        'еда',
        'встреча',
        'работа',
        'учеба',
        'развлечение',
        'покупки',
        'отдых'
      ],
      typeSelected: null,
      title: '',
      description: '',
      calendarIsOpened: false,
      dateChoosed: new Date(),
      hoursChoosed: new Date().getHours(),
      minutesChoosed: new Date().getMinutes(),
      minutesIsOpened: false,
      hoursIsOpened: false,
      timeIsOpened: false,
      peopleIsOpened: false,
      bothTime: false,
      location: null,
      peopleList: [],
      personName: '',
      colors: [
        {
          color: 'aqua',
          choosed: false
        },
        {
          color: '#ff3366',
          choosed: false
        },
        {
          color: '#d667cd',
          choosed: false
        },
        {
          color: '#f4e23b',
          choosed: false
        }
      ],
      colorsChoosed: [],
      ifColor: [false, false, false, false]
    }
  },
  methods: {
    typeChoosed: function (i) {
      const target = event.target
      if (target.classList.contains('choosed')) {
        target.classList.remove('choosed')
        return
      }

      const types = document.querySelectorAll('.types li')
      for (let i = 0; i < types.length; i++) {
        types[i].classList.remove('choosed')
      }

      target.classList.toggle('choosed')
      this.typeSelected = target.childNodes[0].nodeValue.trim()
    },
    onColorClicked: function (i) {
      this.colorsChoosed = []
      this.colors[i].choosed = !this.colors[i].choosed
      this.ifColor[i] = !this.ifColor[i]
      this.ifColor.map((el, index) => {
        if (el) {
          this.colorsChoosed.push(this.colors[index].color)
        }
      })
    },
    // Push task data to tasks array
    onCreateTask: function () {
      const dateChoosed = new Date(this.today)
      dateChoosed.setHours(this.hoursChoosed)
      dateChoosed.setMinutes(this.minutesChoosed)
      const taskData = {
        title: this.title || 'Новая запись',
        description: this.description || '',
        date: dateChoosed,
        location: this.location,
        people: this.peopleList,
        colors: this.colorsChoosed,
        notifications: 'none',
        type: this.typeSelected || 'default'
      }
      this.$store.dispatch('createTask', taskData)
      this.$router.go(-1)
    },
    rightAction: function () {
      this.onCreateTask()
    },
    leftAction: function () {
      this.$store.dispatch('openNewTask')
    },
    toggleCalendar: function () {
      this.calendarIsOpened = !this.calendarIsOpened
    },
    toggleTime: function () {
      this.timeIsOpened = !this.timeIsOpened
      this.hoursIsOpened = false
      this.minutesIsOpened = false
    },
    togglePeople: function () {
      this.peopleIsOpened = !this.peopleIsOpened
    },
    dayClicked: function (day) {
      this.dateChoosed = day.date
      this.calendarIsOpened = !this.calendarIsOpened
    },
    minutesSelected: function (event) {
      this.minutesChoosed = event.currentTarget.childNodes[0].nodeValue
      this.minutesIsOpened = false
    },
    hoursSelected: function (event) {
      this.hoursChoosed = event.currentTarget.childNodes[0].nodeValue
      this.hoursIsOpened = false
    },
    setValue: function (i) {
      return i <= 9 ? '0' + i : i
    },
    addPeople: function (name) {
      if (name === '') {
        return
      }
      this.peopleList.push(name)
      this.personName = ''
    }
  },
  computed: {
    today: function () {
      const date = this.dateChoosed || new Date()
      var formatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      return formatter.format(date)
    }
  },
  mounted: function () {
    const oldNext = document.querySelector('.next-month')
    oldNext.innerHTML = '<i class="fal fa-angle-right"> </i>'
    const oldPrev = document.querySelector('.prev-month')
    oldPrev.innerHTML = '<i class="fal fa-angle-left"> </i>'
    // this.$nextTick(() => {
    //   const calendar = document.querySelector('.vue-calendar')
    //   calendar.style.marginTop = '10px'
    //   const days = document.querySelectorAll('.week-day')
    //   for (let i = 0; i < days.length; i++) {
    //     days[i].style.height = '30px'
    //     days[i].style.width = '30px'
    //   }
    // })
  }
}
</script>

<style scoped lang="scss">
.block-types {
  min-height: 120px;
}
.types {
  display: flex;
  flex-wrap: wrap;

  li {
    cursor: pointer;
    padding: 5px 10px;
    margin: 0px 5px 5px 0px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    &.choosed {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}

.calendar-header {
  .title {
    font-size: 15px;
  }
}

.colors {
  width: 100%;
  display: flex;
}

.colors-item {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;
  cursor: pointer;
}

.colors-item.choosed {
  border: 2px solid white;
}

.names-item {
  padding: 2px 10px;
  border-radius: 20px;
  background-color: aquamarine;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  margin-right: 15px;
}

.add-people {
  width: 100%;
  display: flex;
  justify-content: space-around;
  transition: 0.5s max-height cubic-bezier(0.55, 0.09, 0.68, 0.53);
  input {
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 60%;
    padding: 5px 0;
    align-self: center;
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  button {
    margin: 15px 0;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
}

.select-time {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: max-height 0.3s ease-in-out;
}

.time-picker + .opened {
  overflow: visible;
}

.hours,
.minutes {
  padding: 20px 0;
  flex-basis: 30%;
  position: relative;
  h1 {
    margin-bottom: 15px;
  }
  ul {
    max-height: 150px;
    overflow-y: scroll;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }
  li {
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

.display-selected {
  display: inline-block;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}

.header {
  input {
    width: 100%;
    text-align: center;
    background-color: transparent;
    border: none;
  }
}

.title {
  color: white;
  font-size: 36px;
  margin-bottom: 6px;
  font-weight: 300;
  letter-spacing: 1px;
  &::placeholder {
    color: white;
  }
}

.description {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  text-transform: uppercase;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}

.block-item {
  height: initial;
  padding: 15px 0 15px 50px;
  img:first-child {
    opacity: 0.5;
    transition: 0.2s all ease-in;
  }
  &:hover img:first-child {
    opacity: 1;
  }
}

.block-item__content p:last-child {
  color: rgba(255, 255, 255, 0.6);
}

// .week-day {
//   width: 30px;
//   height: 30px;
// }

.calendar {
  transition: max-height 0.5s ease-in-out;
}

.closed {
  max-height: 0;
  overflow: hidden;
}

.opened {
  overflow: hidden;
  max-height: 500px;
}

.icon-action {
  transition: 0.3s all ease-in;
  width: 16px;
}

.rotate90 {
  transform: rotate(90deg);
}
</style>
