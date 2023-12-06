<script>
import courseCard from "../components/courseCard.vue"
export default {
    data() {
        return {
            test: "",
            infoArr: [
                {
                    idName:"琦玉",
                    iclass: "fa-solid fa-laptop-code",
                    h3Text: "Web developemt",
                    pText: "Join Over 1 million Students.",
                    btnText: "Get Started"
                },
                {
                    idName:"京都",
                    iclass: "fa-brands fa-wordpress",
                    h3Text: "WordPress",
                    pText: "Join Over 2 million Students.",
                    btnText: "Get Started"
                },
                {
                    idName:"大阪",
                    iclass: "fa-solid fa-palette",
                    h3Text: "graphic design",
                    pText: "Join Over 1 million Students.",
                    btnText: "Get Started"
                },
                {
                    idName:"路兒島",
                    iclass: "fa-brands fa-app-store-ios",
                    h3Text: "IOS dev",
                    pText: "Join Over 3 million Students.",
                    btnText: "Get Started"
                },
            ]
        }
    },
    methods: {
        getId() {
            const iddd = document.querySelectorAll("div[name='cool']")
            console.dir(iddd)
            iddd.forEach(item => {
                item.addEventListener("mouseover", () => {
                    console.dir(item)
                    console.log(item.id)
                })
            })
        }
    },
    mounted() {
        this.getId()
    },
    components: {
        courseCard,
    }
}
</script>
<template>
    <div class="container">
        <nav>
            <ul>
                <li>
                    <a href="#" class="logo">
                        <img src="../../public/seaPeace.png" alt="">
                        <span class="nav-item">DashBoard</span>
                    </a>
                </li>
                <li><a href="">
                        <i class="fa-solid fa-house"></i>
                        <span class="nav-item">Home</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-solid fa-user"></i>
                        <span class="nav-item">Profile</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-solid fa-wallet"></i>
                        <span class="nav-item">Wallet</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-solid fa-chart-bar"></i>
                        <span class="nav-item">Analytics</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-solid fa-tasks"></i>
                        <span class="nav-item">Tasks</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-solid fa-cog"></i>
                        <span class="nav-item">Settings</span>
                    </a></li>
                <li><a href="">
                        <i class="fa-regular fa-circle-question"></i>
                        <span class="nav-item">Help</span>
                    </a></li>
                <li><a href="" class="logout">
                        <i class="fa-solid fa-sign-out-alt"></i>
                        <span class="nav-item">Logout</span>
                    </a></li>
            </ul>
        </nav>
        <section class="main">
            <div class="main-top">
                <h1>Skills</h1>
            </div>
            <div class="main-skills">
                <!-- <div class="card" name="cool" id="東京">
                    <i class="fa-solid fa-laptop-code"></i>
                    <h3>Web developemt</h3>
                    <p>Join Over 1 million Students.</p>
                    <button type="button">Get Started</button>
                </div>
                <div class="card" name="cool" id="京都">
                    <i class="fa-brands fa-wordpress"></i>
                    <h3>WordPress</h3>
                    <p>Join Over 1 million Students.</p>
                    <button type="button">Get Started</button>
                </div>
                <div class="card" name="cool" id="大阪">
                    <i class="fa-solid fa-palette"></i>
                    <h3>graphic design</h3>
                    <p>Join Over 2 million Students.</p>
                    <button type="button">Get Started</button>
                </div>
                <div class="card" name="cool" id="北海道">
                    <i class="fa-brands fa-app-store-ios"></i>
                    <h3>IOS dev</h3>
                    <p>Join Over 1 million Students.</p>
                    <button type="button">Get Started</button>
                </div> -->
                <courseCard v-for="item in infoArr" :idName="item.idName" :iclass="item.iclass" :h3Text="item.h3Text" :pText="item.pText" :btnText="item.btnText"/>
            </div>

            <section class="main-course">
                <h1>My course</h1>
                <div class="course-box">
                    <ul>
                        <li class="active">In progress</li>
                        <li>explore</li>
                        <li>incoming</li>
                        <li>finished</li>
                    </ul>
                    <div class="course">
                        <div class="box">
                            <h3>HTML</h3>
                            <p>80% - progress</p>
                            <button>continue</button>
                            <i class="fa-brands fa-html5 html"></i>
                        </div>

                        <div class="box">
                            <h3>CSS</h3>
                            <p>50% - progress</p>
                            <button>continue</button>
                            <i class="fa-brands fa-css3-alt css"></i>
                        </div>

                        <div class="box">
                            <h3>JavaScript</h3>
                            <p>30% - progress</p>
                            <button>continue</button>
                            <i class="fa-brands fa-js js"></i>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<style scoped lang="scss">
.container {
    // width: 40%;
    height: 100vh;
    display: flex;

    nav {
        height: 100%;
        width: 280px;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgb(256, 256, 256);
        overflow: hidden;
        position: relative;
        box-shadow: 0 20px 35px rgb(0, 0, 0, 0.1);

        a {
            position: relative;
            color: rgb(85, 85, 83);
            font-size: 14px;
            display: table;
            width: 280px;
            padding: 10px;

            &:hover {
                background: #eee;
            }
        }

        .fa-solid,
        .fa-regular {
            position: relative;
            width: 70px;
            height: 40px;
            top: 14px;
            font-size: 20px;
            text-align: center;
        }

        .nav-item {
            position: relative;
            top: 12px;
            margin-left: 10px;
        }

        .logout {
            position: absolute;
            bottom: 0;
        }

        .logo {
            text-align: center;
            display: flex;
            margin: 10px 0 0 10px;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            span {
                font-weight: bold;
                padding-left: 15px;
                font-size: 18px;
                text-transform: uppercase;
            }


        }
    }

    .main {
        margin: 0;
        position: relative;
        padding: 20px;
        width: 100%;

        .main-top {
            display: flex;
            width: 100%;

            i {
                position: absolute;
                right: 0;
                margin: 10px 30px;
                color: rgb(11, 109, 109);
                cursor: pointer;
            }
        }

        .main-skills {
            display: flex;
            margin-top: 20px;

            .card {
                width: 25%;
                margin: 10px;
                background: #fff;
                text-align: center;
                border-radius: 20px;
                padding: 10px;
                box-shadow: 0 20px 35px rgb(0, 0, 0, 0.1);

                h3 {
                    margin: 10px;
                    text-transform: capitalize;
                }

                button {
                    background: orangered;
                    color: #fff;
                    padding: 7px 15px;
                    border-radius: 10px;
                    margin-top: 15px;
                    cursor: pointer;

                    &:hover {
                        background: rgb(233, 70, 15, 0.8);

                    }
                }

                i {
                    font-size: 22px;
                    padding: 10px;
                }
            }
        }
    }

    .main-course {
        margin-top: 20px;
        text-transform: capitalize;

        .course-box {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 20px 35px rgb(0, 0, 0, 0.1);

            ul {
                list-style: none;
                display: flex;

                .active {
                    color: black;
                    border-bottom: 1px solid black;
                }

                li {
                    margin: 10px;
                    color: gray;
                    cursor: pointer;
                }
            }

            .course {
                display: flex;

                .box {
                    width: 33%;
                    padding: 10px;
                    margin: 10px;
                    border-radius: 10px;
                    background: rgb(235, 233, 233);
                    box-shadow: 0 20px 35px rgb(0, 0, 0, 0.1);

                    p {
                        font-size: 12px;
                        margin-top: 5px;
                    }

                    button {
                        background: #000;
                        color: #fff;
                        padding: 7px 10px;
                        border-radius: 10px;
                        margin-top: 3rem;
                        cursor: pointer;

                        &:hover {
                            background: rgb(0, 0, 0, 0.842);
                        }
                    }

                    i {
                        font-size: 7rem;
                        float: right;
                        margin: -20px 20px 20px 0;
                    }

                    .html {
                        color: rgb(25, 94, 54);
                    }

                    .css {
                        color: rgb(65, 63, 201);
                    }

                    .js {
                        color: rgb(240, 175, 61);
                    }
                }
            }
        }
    }
}
</style>
