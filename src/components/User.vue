<template>
  <div id="user">
    <div class="user-card">
      <div class="user-name-info">
        <img :src="user.avatarUrl" />
        <div>
          <h1><a :href='user.url'>{{user.login}}</a></h1>
          <p>{{user.name}}</p>
        </div>
      </div>
      <div class="user-follow-info">
        <div>
          <span class="follow-count">{{user.followers.totalCount}}</span>
          <span class="follow-label">Followers</span>
        </div>
        <div>
          <span class="follow-count">{{user.following.totalCount}}</span>
          <span class="follow-label">Following</span>
        </div>
      </div>
    </div>
    <div class="git-info">
      <GitCardInfo :value='user.createdAt | formatDate' label='Member since' icon='calendar-alt' iconColor='deepskyblue'/>
      <GitCardInfo :value='user.repositories.totalCount' label='Public Repositories' icon='cubes' iconColor='deeppink'/>
      <GitCardInfo :value='user.location' label='Location' icon='map-marker-alt' iconColor='greenyellow'/>
      <GitCardInfo :value="user.isHireable ? 'Yes' : 'No'" label='Looking for job?' icon='briefcase' iconColor='slateblue'/>
    </div>
    <div v-on:click='onLogout' class="logout-btn">
      <font-awesome-icon icon='power-off'/>
    </div>
    <!-- <button >Log out</button> -->
  </div>
</template>

<script>
import axios from 'axios';
import GitCardInfo from '@/components/GitCardInfo.vue'

export default {
  name: 'user',
  components: { GitCardInfo },
  data() {
    return {
      currentUser: '',
      user: {
        name: "Loading",
        login: "Loading",
        url: "",
        name: "loading",
        login: "loading",
        createdAt: null,
        isHireable: "loading",
        avatarUrl: "loading",
        location: "loading",
        followers: {totalCount: 0},
        following: {totalCount: 0},
        repositories: {totalCount: 0},
      }
    }
  },
  methods: {
    onLogout() {
      this.$cookie.delete("token");
      this.$router.go();
    },
    getUser() {
      const GET_USER = `
        {
          viewer {
            name
            login
            createdAt
            isHireable
            avatarUrl
            location
            followers {
              totalCount
            }
            following {
              totalCount
            }
            repositories {
              totalCount
            }
          }
        }
      `;
      
      axios({
        method: "POST",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${this.currentUser}`
        },
        data: {
          query: GET_USER
        }
      }).then(r => {
        this.user = r.data.data.viewer;
      })
    }
  },
  mounted() {
    this.currentUser = this.$cookie.get("token");
    this.getUser();
  }
}
</script>

<style>
#user {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content 1fr;
  grid-gap: 50px;
}

#user div.user-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#user div.user-card div.user-name-info {
  display: flex;
  flex-direction: row;
}

#user div.user-card img {
  width: 200px;
  height: 200px;
  margin-right: 40px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

#user .user-follow-info {
  color: grey;
  display: flex;
  flex-direction: row;
}

#user .user-follow-info > div {
  display: flex;
  flex-direction: column;
  height: min-content;
  margin: 0 10px;
}

#user .follow-count {
  font-size: 32px;
  text-align: right;
  font-weight: bold;
}

#user .follow-label { font-size: 18px;}

#user h1 { font-size: 32px; margin: 0; color: #16C0B0; }

#user p {
  margin-top: 5px;
  color: lightgray;
  text-decoration: none; 
  font-weight: bold; 
  font-size: 20px;
}

#user a { text-decoration: none; color: inherit; }

#user .logout-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: crimson;
  width: 20px;
  height: 20px;
  font-weight: bold;
  color: white;
  padding: 15px;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

#user .logout-btn:hover {
  transition-duration: 0.5s;
  transform: rotate(90deg);
}

#user .git-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-gap: 25px; */
  flex-wrap: wrap;
}

#user .git-info > * {
  flex-grow: 1;
  margin: 10px 0;
  margin-right: 20px;
}

.git-info > :last-child {
  margin-right: 0;
}

</style>
