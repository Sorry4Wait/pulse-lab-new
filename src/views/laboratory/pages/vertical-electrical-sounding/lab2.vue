<template>
    <div class="">
        <top-gust title="Курс Электроразведка" sub-title="“Вертикальное электрическое зондирование”"
                  :customClass="`w-full text-3xl leading-9 h-20`">

        </top-gust>
        <div class="grid md:grid-cols-2 sm:grid-cols-1 mt-14 space-x-10 ">
            <div class="grid-cols-6">
                <div class="flex  flex-col justify-center px-5 py-5">
                    <div class="ml-1 mb-3 text-center ">
                        <p class="text-2xl text-baseBlue font-bold">Дано</p>
                        <br>
                        <div class="flex justify-center">
                            <div class="bg-baseBlue p-1 rounded-md text-white w-[89px] h-11 text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                xA
                            </span>
                            </div>
                            <div class="bg-[#E8EFF9]  rounded-md w-[89px] h-11 text-center align-middle  flex cursor-pointer">
                                <input class="m-auto outline-0 w-full bg-white border border-blue-800 rounded-md w-24 h-11 text-center align-middle  flex cursor-pointer"
                                       type="text" v-model="xA">
                            </div>
                        </div>
                    </div>
                    <table class="text-center">
                        <thead>
                        <tr>
                            <th class="w-1/7 py-1 border  text-baseBlue"></th>
                            <th class="w-1/6 py-1 border  text-baseBlue">AB/2, м</th>
                            <th class="w-1/6 py-1 border  text-baseBlue">MN/2, м</th>
                            <th class="w-1/6 py-1 border  text-baseBlue">K</th>
                            <th class="w-1/6 py-1 border  text-baseBlue">I, мA</th>
                            <th class="w-1/6 py-1 border  text-baseBlue">U, мВ</th>
                            <th class="w-1/6 py-1 border  text-baseBlue">rho, Oм*м</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="(el,index) in tableMatrix">
                            <tr :class="{ 'active-row': el.checked }">
                                <td class="border ">
                                    <div class="p-1">
                                        <label :for="`toggle-tableMatrix-${index}`"
                                               class="inline-flex relative items-center cursor-pointer">
                                            <input type="checkbox" v-model="el.checked" @change="toggleCheckbox(index)"
                                                   :id="`toggle-tableMatrix-${index}`"
                                                   class="sr-only peer">
                                            <div class="w-[40px] h-[22px]
                                bg-gray-200 outline-none
                                dark:peer-focus:ring-blue-800
                                rounded-full peer
                                dark:bg-gray-700
                                after:absolute after:top-[2px] after:left-[2px]
                                 after:bg-white after:border-gray-300 after:border
                                 after:rounded-full after:h-5 after:w-5 after:transition-all
                                 dark:border-gray-600"
                                                 :class="{ [`${checkedClass}`]: el.checked }"></div>
                                        </label>
                                    </div>
                                </td>
                                <td class="border ">{{el.AB}}</td>
                                <td class="border ">{{el.MN}}</td>
                                <td class="border ">
                                    <input class="outline-0 w-full bg-inherit border-none  bg-white w-full h-full text-center align-middle  flex cursor-pointer"
                                           type="text" v-model="el.K" :disabled="!el.checked"
                                           @input="debounceChangeGraph(el)"
                                           :class="{'border border-blue-800 rounded-md': el.checked}"></td>
                                <td class="border ">
                                    <input class="outline-0 w-full bg-inherit border-none  bg-white w-full h-full text-center align-middle  flex cursor-pointer"
                                           type="text" v-model="el.I" :disabled="!el.checked"
                                           @input="debounceChangeGraph(el)"
                                           :class="{'border border-blue-800 rounded-md': el.checked}">
                                </td>
                                <td class="border ">
                                    <input class="outline-0 w-full bg-inherit border-none  bg-white w-full h-full text-center align-middle  flex cursor-pointer"
                                           type="text" v-model="el.U" :disabled="!el.checked"
                                           @input="debounceChangeGraph(el)"
                                           :class="{'border border-blue-800 rounded-md': el.checked}"></td>
                                <td class="border ">
                                    <input class="outline-0 w-full bg-inherit border-none  bg-white w-full h-full text-center align-middle  flex cursor-pointer"
                                           type="text" v-model="el.rho" :disabled="!el.checked"
                                           :class="{'border border-blue-800 rounded-md': el.checked}">
                                   </td>
                            </tr>
                        </template>

                        </tbody>
                    </table>
                </div>

            </div>
            <div class="grid-cols-6" id="graph-parent-div">
                <div v-if="authorizedUser" class="mb-5 hidden md:block">
                    <lab-start-component :labName="$options.name"></lab-start-component>
                </div>
                <p class="text-2xl text-baseBlue font-bold">
                    Распространение токовых линий и потенциалов
                </p>
                <br>
                <div class="graphBody justify-self-center align-middle  m-auto">
                    <div id="eplab1"></div>
                </div>
                <br>
                <div class="flex mt-3 align-middle justify-center">
                    <div class="border border-solid border-blue-800 rounded-md sm:w-full sm:w-2/3 md:w-1/2 lg:1/4 h-[184px] ml-1 p-4 ">
                        <p class="text-md text-baseBlue font-bold">
                            Регулировка силы тока
                        </p>
                        <div class="mt-5 mb-4 border border-solid border-blue-800 rounded-md p-2 ">
                            <div class="flex">
                                <label for="default-range" class="mr-1">0</label>
                                <input id="default-range" type="range"
                                       class="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                       min="0.0001" max="2000" v-model="currentIma" step="1">
                                <label for="default-range" class="ml-1">2000</label>
                            </div>

                        </div>
                        <div class="flex justify-center mt-8">
                            <div class="bg-baseBlue p-1 rounded-md text-white w-24 h-11 text-center align-middle mr-2 flex">
                            <span class="m-auto">
                               I, мA
                            </span>
                            </div>
                            <div class="bg-white border border-blue-800 rounded-md w-24 h-11 text-center align-middle ml-2 flex cursor-pointer">
                             <span class="m-auto">
                               {{currentIma}}
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex mt-3 align-middle justify-center">
                    <div class="flex flex-col justify-center text-center border border-blue-800 rounded-md sm:w-full sm:w-2/3 md:w-1/2 lg:1/4 h-[120px] ml-1 p-5 ">
                        <p class="text-sm text-baseBlue font-bold">
                            Удельное электрическое сопротвление среды
                        </p>
                        <div class="flex justify-center mt-4">
                            <div class="flex">
                                <div class="bg-baseBlue rounded-md text-white w-24 h-11 text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                       ρ, Ом*м
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border border-blue-800 rounded-md w-24 h-11 text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.p">

                            </div>
                        </div>
                    </div>


                </div>
                <div class="text-center mt-5">
                    <div class="flex flex-col mt-2 align-middle justify-center">
                        <div>
                            <button class="w-48 h-10 border border-baseBlue rounded-md outline-0 text-baseBlue">
                                Помощь
                            </button>
                            <button class="w-48 h-10  rounded-md ml-2 outline-0 text-white"
                                    :class="buttonClass" v-if="labActive" @click="submitLab">
                                <span>Выполнено</span>
                            </button>
                            <button class="w-48 h-10 bg-[#C4C4C4] rounded-md ml-2 outline-0 text-white" v-else>
                                <span>Не выполнено</span>
                            </button>

                        </div>
                        <div class="mt-1" v-if="authorizedUser">
                            <button class="w-[379px] h-10 bg-[#C4C4C4] text-white rounded-md outline-0 ">
                                Отчет
                            </button>
                        </div>
                        <p class="text-xs">
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
    import {computed} from "vue";

    export default {
        name: "vertical-electrical-sounding",
        components: {LabStartComponent, TopGust},
        data() {
            return {
                lab_params: {
                    Ima: 10,
                    rhoOm: 100,
                    Xam: 0,
                    Zam: 0,
                    Xmm: 0,
                    Zmm: 0,
                    Xhm: 0,
                    Zhm: 0,
                },
                checkModal: true,
                tableMatrix: Array.from({length: 10}, (_, i) =>
                    Object.assign({},
                        {
                            checked: i === 0 ?? false,
                            AB: 1.5 + (i * 0.5),
                            MN: 0.5 + (i * 0.5),
                            K:"",
                            I: "",
                            U: "",
                            rho:"",
                        })),
                colorScale: [],
                answers: {
                    p: null
                },
                currentXm:1,
                currentXn:1.5,
                xA:0,
                currentGraphWidth:800,
                currentGraphHeight:400,
                currentCheckedElem:null,
                debounce:null,
            }
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
            roundFloatNumber(num) {
                let localNumber = parseFloat(num) ? parseFloat(num) : 0;
                return Number(Math.round(localNumber + 'e3') + 'e-3');
            },
            randomBetween(min, max, step){
                var delta,
                    range,
                    rand;
                if (arguments.length < 2) {
                    max = min;
                    min = 0;
                }
                if (!step) {
                    step = 1;
                }
                delta = max - min;
                range = delta / step;
                rand = Math.random();
                rand *= range;
                rand = Math.floor(rand);
                rand *= step;
                rand += min;
                return rand;
                //return Math.floor(Math.random() * (max - min)) + min;
            },
            toggleCheckbox(index) {
                this.tableMatrix.forEach((el, idx) => {
                    if(index === idx){
                        el.checked = true;
                        this.currentXm  = el.xM;
                        this.currentXn  = el.xN;
                        this.calcGraphParams(el);
                    }else{
                        el.checked = false;
                    }


                })
            },
            debounceChangeGraph(event) {
                let vm = this;

                clearTimeout(vm.debounce);
                vm.debounce = setTimeout(() => {
                    vm.calcGraphParams(event);

                }, 400)
            },
            calcGraphParams(el, I = null){
                el.K = this.roundFloatNumber(Math.PI*((el.AB)**2-(el.MN)**2)/2/(el.MN));
                if(I !== null){
                    el.I = I;
                }
                let k12 = (this.rho2 - this.rho1)/(this.rho2 + this.rho1);
                let U_am = this.rho1/2/Math.PI*((el.I)/Math.sqrt((-(el.MN)+0.0000001-(el.AB))**2)+k12*(el.I)/Math.sqrt((-(el.MN)+0.0000001-(el.AB))**2+(-this.h)**2));
                let U_bm = this.rho1/2/Math.PI*((el.I)/Math.sqrt((-(el.MN)+0.0000001+(el.AB))**2)+k12*(el.I)/Math.sqrt((-(el.MN)+0.0000001+(el.AB))**2+(-this.h)**2));
                let U_an = this.rho1/2/Math.PI*((el.I)/Math.sqrt(((el.MN)+0.0000001-(el.AB))**2)+k12*(el.I)/Math.sqrt(((el.MN)+0.0000001-(el.AB))**2+(-this.h)**2));
                let U_bn = this.rho1/2/Math.PI*((el.I)/Math.sqrt(((el.MN)+0.0000001+(el.AB))**2)+k12*(el.I)/Math.sqrt(((el.MN)+0.0000001+(el.AB))**2+(-this.h)**2))
                let U_m = U_am - U_bm;
                let U_n = U_bm - U_bn;
                let U_mn = this.roundFloatNumber(Math.abs(U_m - U_n));
                el.U = U_mn;
                this.currentCheckedElem = el;

            },
            renderGraph() {
                let xst = -16-this.currentCheckedElem.AB;
                let xsp = 16+this.currentCheckedElem.AB;

                let x = this.createArray(xst, xsp+1, 0.5);
                let z = Array.from({length: 21}, (_, i) => new Array(41));
                let y = this.createArray(-15 - this.h, 0.5, 0.5);
                for (let j = 0; j < x.length; j++) {
                    for (let i = 0; i < z.length; i++) {
                        z[i][j] = this.calcFormula(x[j], -i);
                    }
                }
                var data = [
                    {
                        z: z,
                        x: x,
                        y: y,
                        type: 'contour',
                        // contours: {
                        //     coloring: 'heatmap'
                        // },
                        colorscale: 'Jet',
                        autocontour:false,
                        contours:{
                            start:0,
                            end:6,
                            size:0.1
                        },
                        colorbar:{
                            title:"lg(U), Ом*м",
                            titleside:"right",
                            titlefont:{
                                size:12,
                                family: 'Montserrat,  sans-serif'
                            }
                        }

                        // colorscale: [
                        //     ['0.0', 'rgb(49,54,149)'],
                        //     // ['0.0007', 'rgb(65,33,215)'],
                        //     // ['0.005', 'rgb(45,255,245)'],
                        //     // ['0.3', 'rgb(253,174,97)'],
                        //     // ['0.4', 'rgb(254,224,144)'],
                        //     ['0.5', 'rgb(255,255,255)'],
                        //     // ['0.6', 'rgb(171,217,233)'],
                        //     // ['0.7', 'rgb(116,173,209)'],
                        //     // ['0.8', 'rgb(69,117,180)'],
                        //     ['1.0', 'rgb(149,21,22)']
                        // ]
                    },
                    {
                        x: [this.xA],
                        y: [0],
                        type: 'scatter',
                        mode: 'markers',
                        name: "A",
                        marker: {
                            color: 'rgb(230,23,55)',
                            size: 12,
                        },
                    },
                    {
                        x: [this.currentXm],
                        y: [0],
                        type: 'scatter',
                        mode: 'markers',
                        name: "M",
                        marker: {
                            color: 'rgb(17, 157, 255)',
                            size: 12,
                        },
                    },
                    {
                        x: [this.currentXn],
                        y: [0],
                        type: 'scatter',
                        mode: 'markers',
                        name: "N",
                        marker: {
                            color: 'rgb(17, 157, 255)',
                            size: 12,
                        },
                    },
                ];
                let layout = {
                    xaxis: {
                        title: {
                            text: 'x, м',
                            // font: {
                            //     family: 'Courier New, monospace',
                            //     size: 18,
                            //     color: '#7f7f7f'
                            // }
                        },
                        side: 'top'
                    },
                    yaxis: {
                        title: {
                            margin:15,
                            text: 'z, м',
                            // font: {
                            //     family: 'Courier New, monospace',
                            //     size: 18,
                            //     color: '#7f7f7f'
                            // }
                        },
                    },
                    showlegend: false,
                    annotations: [
                        {
                            x: this.xA,
                            y: 1.5,
                            xref: 'x',
                            yref: 'y',
                            text: 'A',
                            showarrow: false,
                            arrowhead: 2,
                            ax: 10,
                            ay: -40
                        },
                        {
                            x: this.currentXm,
                            y: 1.5,
                            xref: 'x',
                            yref: 'y',
                            text: 'M',
                            showarrow: false,
                            arrowhead: 2,
                            ax: 10,
                            ay: -40
                        },
                        {
                            x: this.currentXn,
                            y: 1.5,
                            xref: 'x',
                            yref: 'y',
                            text: 'N',
                            showarrow: false,
                            arrowhead: 2,
                            ax: 10,
                            ay: -40
                        },
                    ],

                    width: this.currentGraphWidth,
                    height: this.currentGraphHeight,
                    margin: {
                        l: 40,
                        r: 40,
                        t: 40,
                        b: 40
                    }
                };
                Plotly.newPlot('eplab1', data, layout, {
                    displayModeBar: false
                });
            },
            calcFormula(R, Q) {
                //$B$2/4/ПИ()*$B$1/1000/КОРЕНЬ((-$B$3+R$2+0,01)^2+(-$B$4+$Q3+0,01)^2)
                return Math.log10(this.lab_params.rhoOm / 2 / Math.PI * this.currentIma  / Math.sqrt((-this.lab_params.Xam + R + 0.01) ** 2 + (-this.lab_params.Zam + Q + 0.01) ** 2))
            },

            createArray(start, stop, step) {
                return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
            },
            getGraphParentWidth(){
                this.currentGraphWidth = document.getElementById("graph-parent-div").offsetWidth;
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
        computed: {
            h(){
                return this.randomBetween(3, 12,1)
            },
            rho1(){
                return this.randomBetween(10, 300, 10)
            },
            rho2(){
                return this.randomBetween(50, 500, 10)
            },
            buttonClass() {
                if (this.currentTimer <= 2) {
                    return 'btm-danger';
                } else if (this.currentTimer <= 15) {
                    return 'btm-warning';
                } else {
                    return 'btm-success';
                }
            },
            checkedClass() {
                return "peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:bg-blue-600"
            },
            currentIma: {
                get() {
                    let obj = this.tableMatrix.find(el => el.checked);
                    return obj ? obj.I : this.lab_params.Ima;
                },
                set(newValue) {
                    let obj = this.tableMatrix.find(el => el.checked);
                    if (obj) {
                        this.calcGraphParams(obj,newValue);
                    } else {
                        this.lab_params.Ima = newValue;
                    }

                }
            }
        },
        async mounted() {
            this.getGraphParentWidth();
            await this.getLab();
            this.renderGraph();

        },
        watch: {
            currentIma: {
                handler() {
                    this.renderGraph();
                }
            },
            xA:{
                handler() {
                    this.renderGraph();
                }
            }
        }
    }
</script>
<style scoped>
    table {
        border-collapse: separate;
        border-spacing: 0;
    }

    thead th:nth-child(odd) {
        border-top-left-radius: 0px;
    }

    thead th:nth-child(even) {
        border-top-left-radius: 0px;
    }

    thead th:first-child {
        border-top-left-radius: 10px;
    }

    thead th:last-child {
        border-top-right-radius: 10px;
    }

    tbody tr:last-child td:first-child {
        border-bottom-left-radius: 10px;
    }

    tbody tr:last-child td:last-child {
        border-bottom-right-radius: 10px;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        outline-style: none;
        animate: 0.2s;
        background: #03a9f4;
        border-radius: 25px;
    }

    input[type=range]::-webkit-slider-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        outline-style: none;
        background: #fff;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 1);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -8px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #03a9f4;
    }

    tr.active-row td {
        background-color: #E8EFF9;
    }

</style>