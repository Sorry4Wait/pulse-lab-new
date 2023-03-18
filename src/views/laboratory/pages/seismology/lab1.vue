<template>
    <div class="p-1">
        <top-gust title="Курс Сейсмология" sub-title="“Определение эпицентра землетрясений”"
                  :customClass="`w-[657px] text-[28px] leading-[34px] h-[73px]`">

        </top-gust>

        <div class="flex flex-row flex-wrap mt-[70px]">
            <div class="ml-[40px] text-center ">
                <p class="text-lg text-baseBlue font-bold">Дано</p>
                <div class="text-center flex flex-col mt-[40px]">

                    <div>

                        <p class="text-lg text-baseBlue font-bold">
                            Запись 1
                        </p>
                    </div>
                    <div id="wave_graph1" class="graph-div w-[283px] h-[150px] mt-2"></div>
                    <div class="flex text-center justify-center mt-[18px]">
                        <div class="bg-baseBlue p-1 rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                               ∆t1, мс
                            </span>
                        </div>
                        <div class="bg-white border-[1px] border-baseBlue rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer">
                             <span class="m-auto">
                                 {{stationOne_deltaT}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="text-center flex flex-col mt-[36px]">

                    <div>

                        <p class="text-lg text-baseBlue font-bold">
                            Запись 2
                        </p>
                    </div>
                    <div id="wave_graph2" class="graph-div w-[283px] h-[150px] mt-2"></div>
                    <div class="flex text-center justify-center mt-[18px]">
                        <div class="bg-baseBlue p-1 rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                               ∆t1, мс
                            </span>
                        </div>
                        <div class="bg-white border-[1px] border-baseBlue rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer">
                             <span class="m-auto">
                                 {{stationTwo_deltaT}}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="text-center flex flex-col mt-[36px]">

                    <div>

                        <p class="text-lg text-baseBlue font-bold">
                            Запись 3
                        </p>
                    </div>
                    <div id="wave_graph3" class="graph-div w-[283px] h-[150px] mt-2"></div>
                    <div class="flex text-center justify-center mt-[18px]">
                        <div class="bg-baseBlue p-1 rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                               ∆t1, мс
                            </span>
                        </div>
                        <div class="bg-white border-[1px] border-baseBlue rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer">
                             <span class="m-auto">
                                 {{stationThree_deltaT}}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="ml-[97px] flex flex-col">
                <div v-if="authorizedUser">
                    <lab-start-component :labName="$options.name"></lab-start-component>
                </div>
                <div class="flex flex-row">
                    <div>
                        <div class="border-[2px] border-baseBlue rounded-xl  m-auto w-[417px] h-[300px] overflow-hidden flex flex-col  mt-[23px]">
                            <div class="flex flex-row flex-wrap">
                                <div class="ml-[33px] mt-[18px]">
                                    <p class="graph-title-text">
                                        Годограф
                                    </p>
                                </div>
                                <div class="flex flex-row ml-[120px] mt-[18px]">
                                    <div class="title-params-div">
                                        <span>x, м</span>
                                    </div>
                                    <div class="title-params-div ml-[11px]">
                                        <span>t, мc</span>
                                    </div>
                                </div>
                            </div>
                            <div class="border-[1px] border-baseBlue rounded-xl w-[358px] h-[221px] overflow-hidden m-auto flex justify-center">
                                <div id="godogrov"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center flex-col ml-[48px] mt-[45px]">
                        <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                <span class="m-auto">
                                    R, м
                                </span>
                        </div>
                        <input class=" outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle mt-[9px] cursor-pointer"
                               @input="debounceRadiusChange($event,'stationOne')"
                               type="number">
                        <input class=" outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle mt-[9px] cursor-pointer"
                               type="number" @input="debounceRadiusChange($event,'stationTwo')">
                        <input class=" outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle mt-[9px] cursor-pointer"
                               type="number" @input="debounceRadiusChange($event,'stationThree')">
                    </div>
                </div>
                <div class="flex flex-row mt-[75px]">
                    <div>
                        <div class="border-[2px] border-baseBlue rounded-xl m-auto w-[417px] h-[300px] overflow-hidden flex flex-col  mt-[23px]">
                            <div class="flex flex-row flex-wrap">
                                <div class="ml-[33px] mt-[18px]">
                                    <p class="graph-title-text">
                                        Карта
                                    </p>
                                </div>
                                <div class="flex flex-row ml-[170px] mt-[18px]">
                                    <div class="title-params-div">
                                        <span>x, м</span>
                                    </div>
                                    <div class="title-params-div ml-[11px]">
                                        <span>y, м</span>
                                    </div>
                                </div>
                            </div>
                            <div class="border-[1px] border-baseBlue rounded-xl w-[358px] h-[221px] overflow-hidden m-auto flex justify-center">

                                <div id="circles"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="flex justify-center flex-col ml-[48px] mt-[45px]">
                            <div>
                                <p class="text-2xl text-baseBlue font-bold">
                                    Ваш ответ
                                </p>
                            </div>
                            <div class="flex mt-[16px]">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                       x, м
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.xm">

                            </div>
                            <div class="flex mt-[16px]">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                       y, м
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.ym">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-[70px]">
                    <div class="flex flex-col mt-2 align-middle justify-center">
                        <div>
                            <button class="w-[184px] h-[40px] border-[1px] border-baseBlue rounded-md outline-0 text-baseBlue">
                                Помощь
                            </button>
                            <button class="w-[184px] h-[40px]  rounded-md ml-2 outline-0 text-white"
                                    :class="buttonClass" v-if="labActive" @click="submitLab">
                                <span>Выполнено</span>
                            </button>
                            <button class="w-[184px] h-[40px] bg-[#C4C4C4] rounded-md ml-2 outline-0 text-white" v-else>
                                <span>Не выполнено</span>
                            </button>

                        </div>
                        <div class="mt-1" v-if="authorizedUser">
                            <button class="w-[379px] h-[40px] bg-[#C4C4C4] text-white rounded-md outline-0 ">
                                Отчет
                            </button>
                        </div>
                        <p class="text-[9px]">
                            Перед началом выполнения лабораторной работы нажмите на “Помощь”
                        </p>


                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script>
    import TopGust from "@/views/courses/sections/TopGust.vue";
    import LabStartComponent from "@/components/custom/lab-start-component/index.vue";
    import LabaratoryService from "@/services/labaratory.service";
    import {TokenService} from "../../../../services/storage.service";
    import {auth} from "@/stores/auth";
    import {useCurrentActiveLab} from "@/stores/currentActiveLab";
    import {computed} from 'vue';

    export default {
        name: "earthquake-epicenter",
        components: {
            LabStartComponent,
            TopGust
        },
        data() {
            return {
                lab_params: {
                    wave_graph1: {
                        f1: 30,
                        f2: 80,
                        A1: 6,
                        A2: 10,
                    },
                    wave_graph2: {
                        f1: 30,
                        f2: 80,
                        A1: 8,
                        A2: 9,
                    },
                    wave_graph3: {
                        f1: 30,
                        f2: 80,
                        A1: 8,
                        A2: 9,
                    },
                    stationOne: {
                        x: 642,
                        y: 2620
                    },
                    stationTwo: {
                        x: 1752,
                        y: 811
                    },
                    stationThree: {
                        x: 3801,
                        y: 198
                    },
                    epicenter: {
                        x: 2624,
                        y: 1818
                    },
                    k: 0.602,
                    b: 1.4734,

                },
                stationOne_radius: null,
                stationTwo_radius: null,
                stationThree_radius: null,
                stationOne_deltaT: null,
                stationTwo_deltaT: null,
                stationThree_deltaT: null,
                circlesList: [],
                shapeList: [],
                answers: {
                    xm: "",
                    ym: ""
                },
                maxY: 0,
                maxX: 0,
                minX: 0,
                minY: 0,
                debounce: null,

            }
        },
        setup() {

            const authUser = auth();
            const currentActiveLab = useCurrentActiveLab();
            let authorizedUser = computed(() => authUser.authorizedUser);
            let labActive = computed(() => currentActiveLab.labActive);
            let currentTimer = computed(() => currentActiveLab.currentTimer);
            return {authorizedUser, labActive, currentTimer}
        },
        methods: {
            async submitLab() {
                try {
                    let response = await LabaratoryService.submit(this.$options.name, this.answers);
                    if (300 > response.status && response.status >= 200) {
                        this.$myMakeToast(
                            this.$t(`actions.success`),
                            this.$t("actions.success"),
                            "success"
                        );
                        this.$store.commit("currentActiveLab/changeLabSubmit", true);
                    }

                } catch (e) {

                }

            },
            async getLab() {
                let token = TokenService.getToken();
                let actionName = 'demo';
                if (token) {
                    actionName = 'variant';
                }
                try {
                    let response = await LabaratoryService[actionName](this.$options.name);
                    this.lab_params = response.data.result[this.$options.name].params;
                } catch (e) {
                    console.log(e)
                }

            },
            async getCurrentActiveLab() {
                try {
                    let response = await LabaratoryService.getLab(this.$options.name);
                    this.lab_params = response.data.result[this.$options.name].params;
                } catch (e) {
                    console.log(e)
                }

            },
            debounceRadiusChange(e, paramName) {
                let vm = this;

                clearTimeout(vm.debounce);
                vm.debounce = setTimeout(() => {
                    vm.setRadius(e.target.value, paramName);

                }, 300)
            },
            setRadius(value, paramName) {
                this.$data[`${paramName}_radius`] = value;
                this.renderCircles();
                this.calcWave(paramName);
            },
            degrees_to_radians(degrees) {
                var pi = Math.PI;
                return degrees * (pi / 180);
            },
            renderCircles() {
                this.circlesList = [];
                this.minX = 0;
                this.minY = 0;
                this.maxX = 0;
                this.maxY = 0;
                for (const [key, value] of Object.entries(this.lab_params)) {
                    if (key.includes('station')) {
                        let x = [];
                        let y = [];
                        if (this.$data[`${key}_radius`]) {
                            let r = this.$data[`${key}_radius`];

                            for (let i = 0; i <= 360; i++) {
                                x.push(r * Math.cos(this.degrees_to_radians(i)) + value.x);
                                y.push(r * Math.sin(this.degrees_to_radians(i)) + value.y);
                            }

                            let obj = {
                                x: x,
                                y: y,
                                mode: 'line',
                                name: key,
                                line: {
                                    color: this[`${key}Color`],
                                }
                            };
                            this.circlesList.push(obj);
                        }
                        let xList = new Set([...x, value.x]);
                        let yList = new Set([...y, value.y])
                        let minX = Math.min(...xList);
                        let minY = Math.min(...yList);
                        let maxX = Math.max(...xList);
                        let maxY = Math.max(...yList);
                        if (maxX > this.maxX) {
                            this.maxX = maxX + 1000;
                        }
                        if (maxY > this.maxY) {
                            this.maxY = maxY + 1000;
                        }

                        if (minX < this.minX) {
                            this.minX = minX - 1000;
                        }
                        if (minY < this.minY) {
                            this.minY = minY - 1000;
                        }
                        let obj2 = {
                            x: [value.x],
                            y: [value.y],
                            text: key,
                            type: 'scatter',
                            mode: 'markers',
                            marker: {
                                color: this[`${key}Color`],
                            }
                        };
                        this.circlesList.push(obj2);
                    }
                }

                let layout = {
                    showlegend: false,
                    xaxis: {
                        range: [this.minX, this.maxX],
                        zeroline: false
                    },
                    yaxis: {
                        range: [this.minY, this.maxY],
                    },
                    shapes: this.shapeList,
                    width: 357,
                    height: 221,
                    margin: {
                        l: 40,
                        r: 40,
                        t: 40,
                        b: 40
                    }

                };
                Plotly.newPlot('circles', this.circlesList, layout, {
                    displayModeBar: false
                });
            },
            renderGodogrov() {
                let x = [];
                let y = [];
                for (let i = 0; i <= 360; i++) {
                    x.push(i);
                    y.push((this.lab_params.k * i) + this.lab_params.b);
                }
                let obj = {
                    x: x,
                    y: y,
                    mode: 'line',
                    name: 'Godogrov',
                    line: {
                        color: 'rgb(125,91,255)',
                    }
                };
                let layout = {
                    showlegend: false,
                    width: 357,
                    height: 221,
                    margin: {
                        l: 40,
                        r: 40,
                        t: 40,
                        b: 40
                    }

                };
                Plotly.newPlot('godogrov', [obj], layout, {
                    displayModeBar: false
                });
            },
            calcRadius(station, epicenter) {
                return Math.sqrt((station.x - epicenter.x) ** 2 + (station.y - epicenter.y) ** 2);
            },
            calcGraphValue(freq, Amp, i) {
                let calc = Math.sin(2 * Math.PI * freq * i) * Math.cos(2 * Math.PI * freq * i) * Math.exp(-Amp * i);
                if (calc > 0.05) {
                    calc = 0;
                } else {
                    calc = -calc;
                }
                return calc
            },
            calcWave(paramName) {
                //-ЕСЛИ((SIN(2*ПИ()*$F$2*H5)*COS(2*ПИ()*$F$2*H5)*EXP(-$G$2*H5))>0,05;0;SIN(2*ПИ()*$F$2*H5)*COS(2*ПИ()*$F$2*H5)*EXP(-$G$2*H5))
                // let r = this.calcRadius(station, epicenter);
                //
                let graphId = 'wave_graph1';
                if (paramName === 'stationTwo') {
                    graphId = 'wave_graph2';
                }
                if (paramName === 'stationThree') {
                    graphId = 'wave_graph3';
                }
                let r = this.$data[`${paramName}_radius`];
                r = r / 1000;
                let deltaT = this.lab_params.k * r + this.lab_params.b;
                deltaT = parseFloat(deltaT.toFixed(2));

                this.$data[`${paramName}_deltaT`] = deltaT;

                let graph1 = [];
                let graph2 = [];
                let nulls = [];
                let x1 = [];
                let x2 = [];

                for (let i = 0; i <= 1000; i += 1) {
                    let j = i / 100;
                    graph1.push(this.calcGraphValue(this.lab_params[graphId].f1, this.lab_params[graphId].A1, j));
                    graph2.push(this.calcGraphValue(this.lab_params[graphId].f2, this.lab_params[graphId].A2, j));
                    if (j < deltaT) {
                        x1.push(j);

                    } else {
                        x2.push(j);

                    }

                    if (j < deltaT) {
                        nulls.push(0)
                    }
                }
                // nulls.forEach((el,index) =>{
                //     graph2[index] = el;
                // });
                let graph1Data = {
                    mode: 'lines',
                    line: {color: "#b55400"},
                    x: x1,
                    y: graph1,

                };

                let graph2Data = {
                    mode: 'lines',
                    line: {color: "#a5b5b5"},
                    x: x2,
                    y: [...nulls, ...graph2]
                };
                Plotly.newPlot(graphId, [graph1Data, graph2Data], {
                    showlegend: false, width: 280,
                    height: 150,
                    margin: {
                        l: 30,
                        r: 30,
                        t: 30,
                        b: 30
                    }
                }, {
                    displayModeBar: false
                });
            },

        },
        computed: {

            buttonClass() {
                if (this.currentTimer <= 2) {
                    return 'btm-danger';
                } else if (this.currentTimer <= 15) {
                    return 'btm-warning';
                } else {
                    return 'btm-success';
                }
            },
            stationOneColor() {
                return 'rgb(255,41,104)';
            },
            stationTwoColor() {
                return 'rgb(125,91,255)';
            },
            stationThreeColor() {
                return 'rgb(81,255,74)';
            },
        },
        async mounted() {
            await this.getLab();
            this.renderCircles();
            this.renderGodogrov();

        },
    }
</script>
<style scoped lang="scss">
    .graph-title-text {

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #00356B;
    }

    .title-params-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 22px;
        left: 997px;
        top: 399px;

        border: 1px solid #00356B;
        border-radius: 5px;

        span {

            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */

            color: #A5A5A5;
        }

    }
</style>