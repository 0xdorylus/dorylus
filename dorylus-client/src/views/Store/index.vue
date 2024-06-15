<template>
  <el-scrollbar wrap-class="app-main-scroll-wrap">
    <div class="home-page" id="home-page">
      <h1 class="intro">
        Welcome to Dorylus Store
      </h1>
      <div class="desc">
        You can suscribe all kinds of tools ,workflows and datasets to enhance your agent.
      </div>
      <div class="home-category">
        <div class="home-all-header">

          <h2 class="subTitle">
            Tools </h2>
        </div>
        <div>

          <el-button type="primary">Create</el-button>

        </div>
      </div>

      <div class="home-all-content-max">
        <div class="home-all-content">
          <div class="home-all-content-box" v-for="item in 0" :key="item">
            <div class="home-content-img">
              <div class="home-content-img-box">
                <img class="home-all-content-box-img"
                  src="https://s.dorylus.ai/s/bot.png">
              </div>
            </div>
            <div class="home-content-discrpit">
              <p class="home-content-discrpit-title">Wavman</p>
              <el-tooltip content="Highlight anything and share it with friends." placement="top-start">
                <p class="home-content-prompt-one">
                </p>
              </el-tooltip>
              <div class="home-content-name">
                <div class="home-content-name-content">
                  <el-icon>
                    <UserFilled />
                  </el-icon>
                  <div class="avater">dorylus tool</div>
                </div>
                <el-tag>write</el-tag>
              </div>
            </div>
          </div>
        </div>
        <div class="more-btn">
          <div class="pa">
            <el-button type="primary" @click="isLoading = true" text :loading="isLoading">
              {{ isLoading ? 'Loading' : 'coming soon' }}
            </el-button>
          </div>
        </div>
      </div>



      <div class="home-category">
        <div class="home-all-header">


          <h2 class="subTitle">
            Prompts
          </h2>
        </div>
        <div>


        </div>
      </div>

      <div class="home-all-content-max">
        <div class="home-all-content">
          <div class="home-all-content-box" v-for="item in 0" :key="item">
            <div class="home-content-img">
              <div class="home-content-img-box">
                <img class="home-all-content-box-img"
                  src="https://s.dorylus.ai/s/bot.png">
              </div>
            </div>
            <div class="home-content-discrpit">
              <p class="home-content-discrpit-title">Wavman</p>
              <el-tooltip content="Highlight anything and share it with friends." placement="top-start">
                <p class="home-content-prompt-one">
                </p>
              </el-tooltip>
              <div class="home-content-name">
                <div class="home-content-name-content">
                  <el-icon>
                    <UserFilled />
                  </el-icon>
                  <div class="avater">dorylus prompots</div>
                </div>
                <el-tag>Lightweight</el-tag>
              </div>
            </div>
          </div>
        </div>
        <div class="more-btn">
          <div class="pa">
            <el-button type="primary" @click="isLoading = true" text :loading="isLoading">
              {{ isLoading ? 'Loading' : 'coming soon' }}
            </el-button>
          </div>
        </div>
      </div>


      <div class="home-category">
        <div class="home-all-header">


          <h2 class="subTitle">
            Workflows
          </h2>
        </div>
        <div>


        </div>
      </div>

      <div class="home-all-content-max">
        <div class="home-all-content">
          <div class="home-all-content-box" v-for="item in 0" :key="item">
            <div class="home-content-img">
              <div class="home-content-img-box">
                <img class="home-all-content-box-img"
                  src="https://s.dorylus.ai/s/bot.png">
              </div>
            </div>
            <div class="home-content-discrpit">
              <p class="home-content-discrpit-title">Wavman</p>
              <el-tooltip content="Highlight anything and share it with friends." placement="top-start">
                <p class="home-content-prompt-one">
                </p>
              </el-tooltip>
              <div class="home-content-name">
                <div class="home-content-name-content">
                  <el-icon>
                    <UserFilled />
                  </el-icon>
                  <div class="avater">dorylus</div>
                </div>
                <el-tag>Lightweight</el-tag>
              </div>
            </div>
          </div>
        </div>
        <div class="more-btn">
          <div class="pa">
            <el-button type="primary" @click="isLoading = true" text :loading="isLoading">
              {{ isLoading ? 'Loading' : 'coming soon' }}
            </el-button>
          </div>
        </div>
      </div>





      <div class="home-category">
        <div class="home-all-header">


          <h2 class="subTitle">
            DataSets
          </h2>
        </div>
        <div>


        </div>
      </div>

      <div class="home-all-content-max">
        <div class="home-all-content">
          <div class="home-all-content-box" v-for="item in 0" :key="item">
            <div class="home-content-img">
              <div class="home-content-img-box">
                <img class="home-all-content-box-img"
                  src="https://s.dorylus.ai/s/bot.png">
              </div>
            </div>
            <div class="home-content-discrpit">
              <p class="home-content-discrpit-title">Wavman</p>
              <el-tooltip content="Highlight anything and share it with friends." placement="top-start">
                <p class="home-content-prompt-one">
                  Highlight anything and share it with friends.
                </p>
              </el-tooltip>
              <div class="home-content-name">
                <div class="home-content-name-content">
                  <el-icon>
                    <UserFilled />
                  </el-icon>
                  <div class="avater">dorylus</div>
                </div>
                <el-tag>Lightweight</el-tag>
              </div>
            </div>
          </div>
        </div>
        <div class="more-btn">
          <div class="pa">
            <el-button type="primary" @click="isLoading = true" text :loading="isLoading">
              {{ isLoading ? 'Loading' : 'coming soon' }}
            </el-button>
          </div>
        </div>
      </div>




    </div>
    <el-backtop :visibility-height="100" target=".app-main-scroll-wrap" />
  </el-scrollbar>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
const activeIndex = ref(0)
const isLoading = ref(false)
const categorys = reactive([
  {
    name: "All",
    value: 'all'
  },
  {
    name: "Work",
    value: 'work'
  },
  {
    name: "Life",
    value: 'life'
  },
  {
    name: "Defi",
    value: 'Defi'
  },
  {
    name: "Programming",
    value: 'Programming'
  },
])
const activeTag = (index: number) => {
  activeIndex.value = index;
}

</script>

<style scoped lang="scss">
.home-page {
  .intro {
    text-align: center;
    font-size: 60px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }

  .subTitle {
    text-align: center;
    font-size: 40px;
    font-family: 'Staatliches', cursive;
    margin: 16px 0;
  }


  .desc {
    text-align: center;
  }

  .home-category {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
    align-items: center;

    .home-all-header {
      /* height: 40px; */
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      width: 100%;
      margin: 0 auto;

      .el-button {
        margin-right: 12px !important;
        margin-left: 0 !important;

        span {}

        &:last-child {
          margin-right: 0 !important;
        }
      }

      .home-all-header-btn {
        color: #000;
        background-color: #fafafa;
        border: 1px solid #eff0f0;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 10px;

        span {
          display: inline-flex;
          align-items: center;
        }
      }

      .is-select {
        background-color: #eff0f0 !important;
      }

    }
  }

  .home-all-content-max {

    .home-all-content {
      display: grid;
      grid-template-columns: repeat(7, 1fr);

      @media screen and (max-width: 1536px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }


      gap: 20px;

      .home-all-content-box {
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        border: 1px solid #eff0f0;

        .home-content-img {
          width: 100%;
          overflow: hidden;
          display: flex;
          height: 170px;
          align-items: center;
          justify-content: center;

          .home-content-img-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .home-all-content-box-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.2);
                transition: all .3s ease-in-out;
              }
            }
          }
        }

        .home-content-discrpit {
          width: 100%;
          height: 100px;
          background-color: #fff;
          box-sizing: border-box;
          padding: 8px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .home-content-discrpit-title {
            font-size: 20px;
            font-weight: 700;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .home-content-prompt-one {
            font-size: .8rem;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            color: #878786;
            line-height: 24px;
          }


          .home-content-name {
            width: 100%;
            display: flex;
            align-items: center;
            font-size: 1rem;
            justify-content: space-between;

            .home-content-name-content {
              display: flex;
              align-items: center;
              width: 50%;

              .avater {
                width: 100%;
                margin: 0 2px;
                font-size: .9rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }

}

.more-btn {
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .pa {
    display: flex;
    align-items: center;
  }
}
</style>