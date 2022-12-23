<template>
        <article class="articlePortFolioComp" id="portfolioId">
                <h4>Portfolio</h4>
                <div class="containCard">
                        <div
                                v-for="item in items"
                                :key="item.id"
                                class="mx-auto card"
                                width="28%"
                        >
                                <div class="titleCard">
                                        <h5 class="title">
                                                {{ item.title }}
                                        </h5>
                                        <h6 class="subtitle">
                                                {{ item.subTitle }}
                                        </h6>
                                </div>
                                <div class="links">
                                        <img
                                                class="icon"
                                                src="../../assets/images/githubicon.png"
                                                alt="github"
                                        />
                                        <a
                                                :href="item.link"
                                                target="_blank"
                                                class="link"
                                                >Github</a
                                        >
                                        <a
                                                :href="item.deploy"
                                                target="_blank"
                                                class="link"
                                                >Link to app</a
                                        >
                                </div>
                                <p class="about">
                                        {{ item.description }}
                                </p>
                        </div>
                </div>
        </article>
</template>

<script>
        import list from "../../assets/portfolio.json";
        export default {
                name: "portFolio-comp",
                data() {
                        return {
                                items: list,
                        };
                },
        };
</script>

<style scoped>
        .articlePortFolioComp {
                align-items: center;
                padding: 2vw 0vw;
                transition: 1.2s;
                background-image: linear-gradient(
                        135deg,
                        rgba(253, 95, 3, 0.2),
                        rgba(255, 94, 0, 0.2),
                        rgba(255, 94, 0, 0.2),
                        rgba(255, 94, 0, 0.2),
                        rgba(255, 187, 0, 0.2)
                );
                background-size: 100%;
        }
        .articlePortFolioComp:hover {
                background-color: rgba(255, 94, 0, 0.39);
        }
        .links {
                background-color: white;
                text-align: center;
                margin-top: 8vw;
                padding: 4pt;
        }
        .titleCard {
                height: 6vw;
                font-weight: 900;
                color: black;
        }
        .title {
                font-size: 12pt;
                color: white;
        }
        .subtitle {
                font-size: 11pt;
                color: white;
        }
        .link {
                font-size: 10pt;
        }
        .about {
                color: white;
                font-size: 9pt;
                padding: 1.5vw;
        }
        .card {
                height: 200px;
                width: 80vw;
                box-shadow: 0px 12px 52px rgba(0, 0, 0, 0.8);
                padding: 20px;
                background-color: rgba(81, 26, 153, 0.164);
                border-radius: 10px;
        }
        .card:hover {
                box-shadow: 0px 6px 50px 5px #edff4d63 inset,
                        2px 6px 25px #edff4d,
                        0px 12px 52px rgba(187, 245, 194, 0.322);
        }
        .icon {
                height: 1.2vw;
        }
        a {
                font-style: none;
        }
        h4 {
                color: white;
                padding: 1.5vw;
                font-size: 30pt;
                font-weight: bold;
                text-align: center;
        }
        .containCard {
                margin: 15px;
                gap: 3vw;
                display: block;
        }
        @media (min-width: 1000px) {
                .containCard {
                        display: flex;
                }
                .card {
                        height: 30vw;
                        width: 30vw;
                        padding: 30px;
                        border-radius: 20px;
                }
                .about {
                        color: white;
                        font-size: 1.3vw;
                        padding: 1.5vw;
                }
                .title {
                        font-size: 2vw;
                        color: white;
                }
                .subtitle {
                        font-size: 1.5vw;
                        color: white;
                }
                .links {
                        margin-top: 0.6vw;
                        padding: 8pt;
                }
                .link {
                        font-size: 1.2vw;
                }
                a {
                        margin: 0 0.3vw;
                }
        }
</style>
