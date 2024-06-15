<template>
    <el-scrollbar wrap-class="app-main-scroll-wrap">
        <div class="home-page" id="home-page">
            <h1 class="intro">
                <h1>0xbot是为赛博空间的数字游民打造的区块链驱动的AI角色平台</h1>
            </h1>


            <div class="desc">
                <p>你可以在平台上快速创建基于AI和NFT的智能角色，作为您在赛博空间的数字分身</p>

                <p>你可以和AI智能角色进行对话，让AI替您舒解压力</p>

                <p> 你可以让AI角色代替你完成工作，解放自己的双手</p>

                <p> 你可以不断用自己的个性化资料训练自己的角色，让他更像您，甚至让他替您进行社交，回答各种各样的问题</p>

                <p>你可以在这里定制特定的功能，来装备的的AI角色</p>

            </div>

        </div>
    </el-scrollbar>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped lang="scss">
.home-page {
    .intro {
        text-align: center;
        font-size: 30px;
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
        text-align: left;
        padding: 30px;
        line-height: 250%;
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
                grid-template-columns: repeat(1, 1fr);
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