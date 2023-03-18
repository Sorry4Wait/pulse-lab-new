<template>
    <div class="p-1">
        <top-gust title="Курс Сейсморазведка"
                  sub-title="“Изучение упругих модулей”">

        </top-gust>
        <br>
        <div class="flex flex-row space-x-[95px]">
            <div class=" ml-5">
                <div class="ml-1 mb-3">
                    <p class="text-lg text-baseBlue font-bold  w-[67px] h-[20px] text-2xl">
                        Дано
                    </p>
                    <br>
                    <div class="flex">
                        <div class="bg-baseBlue p-1 rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                ρ, г/см<sup>3</sup>
                            </span>
                        </div>
                        <div class="bg-[#E8EFF9] border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer">

                        </div>
                    </div>
                </div>
                <div class="border-[1px] border-baseBlue rounded-xl w-[379px] h-[113px] ml-1 p-4">
                    <div>
                        <p class="text-lg text-baseBlue font-bold">
                            Тип напряжения
                        </p>
                        <div class="">
                            <div>
                                <div class="form-check">
                                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                           type="radio" name="streeValue1" id="streeValue1"
                                           v-model="stress_type" value="1">
                                    <label class="form-check-label inline-block text-gray-800" for="streeValue1">
                                        Нормальное напряжение
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                           type="radio" name="streeValue2" id="streeValue2"
                                           v-model="stress_type" value="0">
                                    <label class="form-check-label inline-block text-gray-800" for="streeValue2">
                                        Касательное напряжение
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="border-[1px] border-blue-800 rounded-xl w-[379px] h-[98px] ml-1 pl-3 pt-1">
                    <p class="text-lg text-baseBlue font-bold">
                        Плоскость напряжения
                    </p>
                    <br>
                    <div class="p-1">
                        <div class="grid gap-4 grid-cols-3 justify-items-stretch">
                            <div class="form-check justify-self-start">
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                       type="radio" name="flexRadioDefault" id="surfaceXY"
                                       v-model="surface" value="XY">
                                <label class="form-check-label inline-block text-gray-800" for="surfaceXY">
                                    XY
                                </label>
                            </div>
                            <div class="form-check justify-self-center">
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                       type="radio" name="flexRadioDefault" id="surfaceXZ"
                                       v-model="surface" value="XZ">
                                <label class="form-check-label inline-block text-gray-800" for="surfaceXZ">
                                    XZ
                                </label>
                            </div>
                            <div class="form-check justify-self-end mr-2">
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                       type="radio" name="flexRadioDefault" id="surfaceYZ"
                                       v-model="surface" value="YZ">
                                <label class="form-check-label inline-block text-gray-800" for="surfaceYZ">
                                    YZ
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="border-[1px] border-blue-800 rounded-xl w-[379px] h-[136px] ml-1 p-4">
                    <p class="text-lg text-baseBlue font-bold">
                        Напряжение {{stress}}
                    </p>
                    <div class="mt-4 mb-4">
                        <div class="flex">
                            <label for="default-range" class="mr-1">0</label>
                            <input id="default-range" type="range"
                                   class="w-full mt-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                   min="0" max="1500" v-model="stress" step="1">
                            <label for="default-range" class="ml-1">1500</label>
                        </div>

                    </div>
                    <div class="flex">
                        <div class="bg-blue-500 p-1 rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                P, МПа
                            </span>
                        </div>
                        <div class="bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer">
                             <span class="m-auto">
                               {{stress}}
                            </span>
                        </div>
                    </div>
                </div>
                <br>
                <div class="border-[1px] border-blue-800 rounded-xl w-[379px] h-[204px] ml-1 ">

                    <div>
                        <p class="text-lg text-baseBlue font-bold p-4">
                            Тензор относительной деформации
                        </p>
                        <div class="p-4">
                            <div class="grid grid-cols-3 gap-4">
                                <div>
                                    <div class="flex">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>xx</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.exx : ''">


                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>xy</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.exy : ''">

                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>xz</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.exz : ''">

                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>yx</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.eyx : ''">

                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>yy</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.eyy : ''">

                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>yz</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.eyz : ''">

                                    </div>
                                </div>
                                <div>
                                    <div class="flex">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>zx</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.ezx : ''">

                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>zy</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.ezy : ''">

                                    </div>
                                    <div class="flex mt-2">
                                        <div class="bg-baseBlue rounded-md text-white w-[50px] h-[22px] text-center align-middle mr-2 flex">
                            <span class="m-auto">
                                e<sub>zz</sub>
                            </span>
                                        </div>
                                        <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[50px] h-[22px] text-center align-middle ml-2 flex cursor-pointer"
                                               type="text" disabled :value="showTensorParams ? cube_params.ezz : ''">

                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-3">

                                <button class="align-middle h-[32px] w-[128px] bg-blue-500 rounded-md"
                                        @click="toggleTensorParams">
                            <span class="text-sm text-white">
                                Рассчитать тензор
                            </span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="">
                <div v-if="authorizedUser" class="mb-5 flex justify-center">
                    <lab-start-component :labName="$options.name"></lab-start-component>
                </div>
                <p class="graph-title p-8 text-right">
                    Малый элемент напряженного тела
                </p>
                <div class="border-[1px] border-baseBlue rounded-xl justify-self-center align-middle  m-auto w-[400px] h-[400px] overflow-hidden flex justify-center align-middle">
                    <div id="myDiv"></div>
                </div>

                <div class=" align-middle mt-2">
                    <p class="text-lg text-baseBlue font-bold">
                        Ваш ответ
                    </p>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <div class="flex">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        E, МПа
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.E">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                       μ, МПа
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.u">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        Vp, м/с
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.Vp">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        λ, МПа
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.lambda">

                            </div>
                        </div>
                        <div>
                            <div class="flex">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        ν, ед.
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.v">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        K, МПа
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.K">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        Vs, м/с
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.Vs">

                            </div>
                            <div class="flex mt-2">
                                <div class="bg-baseBlue rounded-md text-white w-[89px] h-[39px] text-center align-middle mr-2 flex">
                                    <span class="m-auto">
                                        Vp/Vs
                                    </span>
                                </div>
                                <input class="m-auto outline-0 w-full bg-white border-[1px] border-blue-800 rounded-md w-[89px] h-[39px] text-center align-middle ml-2 flex cursor-pointer"
                                       type="text" v-model="answers.VpVs">

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-5 align-middle justify-center">
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
     //import TopGust from "../../../courses/sections/TopGust";
    import TopGust from "@/views/courses/sections/TopGust.vue";

    import LabStartComponent from "@/components/custom/lab-start-component/index.vue";
    import LabaratoryService from "@/services/labaratory.service";
    import {TokenService} from "@/services/storage.service";
    import {computed} from "vue";
    import {auth} from "@/stores/auth";
    import {useCurrentActiveLab} from "@/stores/currentActiveLab";

    export default {
        name: "elastic-module",
        components: {LabStartComponent, TopGust},
        data() {
            return {
                a: [0, 0, 1, 1, 0, 0, 1, 1],
                b: [0, 0, 0, 0, 1, 1, 1, 1],
                c: [0, 1, 1, 0, 0, 1, 1, 0],
                stress_type: 1,
                stress: 500,
                surface: 'YZ',
                length_cub: 100,
                cube_params: {
                    Vp: 1600,
                    Vs: 900,
                    rho: 1600,
                    Px: 0,
                    Py: 0,
                    Pz: 0,
                    exx: 0,
                    exy: 0,
                    exz: 0,
                    eyx: 0,
                    eyy: 0,
                    eyz: 0,
                    ezx: 0,
                    ezy: 0,
                    ezz: 0,
                },

                additionalCube: [],
                defaultPlaneObject: {
                    type: "scatter3d",
                    mode: "lines",
                    surfaceaxis: 2,
                    x: [],
                    y: [],
                    z: [],
                    opacity: 0.1,
                },
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 8
                },
                newA: [],
                newB: [],
                newC: [],
                newD: [],
                newE: [],
                newF: [],
                newG: [],
                newH: [],
                debounce: null,
                showTensorParams: false,
                answers: {
                    E: null,
                    K: null,
                    Vp: null,
                    VpVs: null,
                    Vs: null,
                    lambda: null,
                    u: null,
                    v: null,
                }


            };
        },
        async mounted() {
            await this.getLab();
            this.renderDefaultCub();
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
            toggleTensorParams() {
                this.showTensorParams = !this.showTensorParams;
            },
            roundFloatNumber(num) {
                let localNumber = parseFloat(num) ? parseFloat(num) : 0;
                return Number(Math.round(localNumber + 'e3') + 'e-3');
            },
            debounceRenderCube() {
                clearTimeout(this.debounce);
                this.debounce = setTimeout(() => {
                    this.createCub();
                }, 400)
            },
            createCub() {
                this.clearOldParams();
                this.setParams();
                Plotly.newPlot("myDiv", this.computedCubParams, {
                    autosize: false,
                    showlegend: false,
                    paper_bgcolor: "rgba(0,0,0,0)",
                    width: this.currentGraphWidth,
                    height: this.currentGraphHeight,
                    margin: {
                        l: 0,
                        r: 0,
                        t: 0,
                        b: 0,
                    },
                }, {
                    displayModeBar: false
                });
            },
            renderDefaultCub() {
                Plotly.newPlot("myDiv", this.computedCubParams, {
                    autosize: false,
                    showlegend: false,
                    width: this.currentGraphWidth,
                    height: this.currentGraphHeight,
                    margin: {
                        l: 0,
                        r: 0,
                        t: 0,
                        b: 0
                    }
                }, {
                    displayModeBar: false
                });
            },
            clearOldParams() {
                this.additionalCube = []
            },
            setParams() {
                this.showTensorParams = false;
                this.newA = [];
                this.newB = [];
                this.newC = [];
                this.newD = [];
                this.newE = [];
                this.newF = [];
                this.newG = [];
                this.newH = [];
                if (parseInt(this.stress_type) === 1 && this.surface === 'XY') {

                    this.cube_params.Px = 0;
                    this.cube_params.Py = 0;
                    this.cube_params.Pz = this.roundFloatNumber(-this.stress * 1000000);
                    this.cube_params.exx = this.roundFloatNumber(-this.cube_params.Pz / this.Young * this.Pois);
                    this.cube_params.exy = 0;
                    this.cube_params.exz = 0;
                    this.cube_params.eyx = 0;
                    this.cube_params.eyy = this.roundFloatNumber(-this.cube_params.Pz / this.Young * this.Pois);
                    this.cube_params.eyz = 0;
                    this.cube_params.ezx = 0;
                    this.cube_params.ezy = 0;
                    this.cube_params.ezz = this.roundFloatNumber(this.cube_params.Pz / this.Young);

                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        0
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        0
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        0
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        0
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.length_cub * this.cube_params.ezz
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.length_cub * this.cube_params.ezz
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.length_cub * this.cube_params.ezz
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.length_cub * this.cube_params.ezz
                    ]);

                } else if (parseInt(this.stress_type) === 1 && this.surface === 'XZ') {
                    this.cube_params.Px = 0;
                    this.cube_params.Py = this.roundFloatNumber(-this.stress * 1000000);
                    this.cube_params.Pz = 0;
                    this.cube_params.exx = this.roundFloatNumber(-this.cube_params.Py / this.Young * this.Pois);
                    this.cube_params.exy = 0;
                    this.cube_params.exz = 0;
                    this.cube_params.eyx = 0;
                    this.cube_params.eyy = this.roundFloatNumber(this.cube_params.Py / this.Young);
                    this.cube_params.eyz = 0;
                    this.cube_params.ezx = 0;
                    this.cube_params.ezy = 0;
                    this.cube_params.ezz = this.roundFloatNumber(-this.cube_params.Py / this.Young * this.Pois);

                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        0,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        0,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.cube_params.eyy * this.length_cub,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.cube_params.eyy * this.length_cub,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        0,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        0,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.cube_params.eyy * this.length_cub,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        -this.Pois * this.cube_params.exx * this.length_cub / 2,
                        this.cube_params.eyy * this.length_cub,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2
                    ]);

                } else if (parseInt(this.stress_type) === 1 && this.surface === 'YZ') {
                    this.cube_params.Px = this.roundFloatNumber(-this.stress * 1000000);
                    this.cube_params.Py = 0;
                    this.cube_params.Pz = 0;
                    this.cube_params.exx = this.roundFloatNumber(this.cube_params.Px / this.Young);
                    this.cube_params.exy = 0;
                    this.cube_params.exz = 0;
                    this.cube_params.eyx = 0;
                    this.cube_params.eyy = this.roundFloatNumber(-this.cube_params.Px / this.Young * this.Pois);
                    this.cube_params.eyz = 0;
                    this.cube_params.ezx = 0;
                    this.cube_params.ezy = 0;
                    this.cube_params.ezz = this.roundFloatNumber(-this.cube_params.Px / this.Young * this.Pois);

                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        0,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        this.cube_params.exx * this.length_cub,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        this.cube_params.exx * this.length_cub,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        0,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        -this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        0,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        this.cube_params.exx * this.length_cub,
                        -this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        this.cube_params.exx * this.length_cub,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        0,
                        this.Pois * this.cube_params.eyy * this.length_cub / 2,
                        this.Pois * this.cube_params.ezz * this.length_cub / 2,
                    ]);

                } else if (parseInt(this.stress_type) === 0 && this.surface === 'XY') {
                    this.cube_params.Px = 0;
                    this.cube_params.Py = this.roundFloatNumber(this.stress * 1000000);
                    this.cube_params.Pz = 0;
                    this.cube_params.exx = 0;
                    this.cube_params.exy = this.roundFloatNumber(this.cube_params.Py / this.Mu);
                    this.cube_params.exz = 0;
                    this.cube_params.eyx = this.cube_params.exy;
                    this.cube_params.eyy = 0;
                    this.cube_params.eyz = 0;
                    this.cube_params.ezx = this.cube_params.exz;
                    this.cube_params.ezy = this.cube_params.eyz;
                    this.cube_params.ezz = 0;


                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        0,
                        0,
                        0
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        0,
                        0,
                        0
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        0,
                        0,
                        0
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        0,
                        0,
                        0
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        0,
                        this.cube_params.exy * this.length_cub,
                        0
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        0,
                        this.cube_params.exy * this.length_cub,
                        0
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        0,
                        this.cube_params.exy * this.length_cub,
                        0
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        0,
                        this.cube_params.exy * this.length_cub,
                        0
                    ]);
                } else if (parseInt(this.stress_type) === 0 && this.surface === 'XZ') {
                    this.cube_params.Px = this.roundFloatNumber(this.stress * 1000000);
                    this.cube_params.Py = 0;
                    this.cube_params.Pz = 0;
                    this.cube_params.exx = 0;
                    this.cube_params.exy = 0;
                    this.cube_params.exz = this.roundFloatNumber(this.cube_params.Px / this.Mu);
                    this.cube_params.eyx = this.cube_params.exy;
                    this.cube_params.eyy = 0;
                    this.cube_params.eyz = 0;
                    this.cube_params.ezx = this.cube_params.exz;
                    this.cube_params.ezy = this.cube_params.eyz;
                    this.cube_params.ezz = 0;

                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        0,
                        0,
                        0
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        0,
                        0,
                        0
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        this.cube_params.exz * this.length_cub,
                        0,
                        0
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        this.cube_params.exz * this.length_cub,
                        0,
                        0,
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        0,
                        0,
                        0,
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        0,
                        0,
                        0,
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        this.cube_params.exz * this.length_cub,
                        0,
                        0
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        this.cube_params.exz * this.length_cub,
                        0,
                        0
                    ]);

                } else if (parseInt(this.stress_type) === 0 && this.surface === 'YZ') {
                    this.cube_params.Px = 0;
                    this.cube_params.Py = this.roundFloatNumber(this.stress * 1000000);
                    this.cube_params.Pz = 0;
                    this.cube_params.exx = 0;
                    this.cube_params.exy = 0;
                    this.cube_params.exz = 0;
                    this.cube_params.eyx = this.cube_params.exy;
                    this.cube_params.eyy = 0;
                    this.cube_params.eyz = this.roundFloatNumber(this.cube_params.Py / this.Mu);
                    this.cube_params.ezx = this.cube_params.exz;
                    this.cube_params.ezy = this.cube_params.eyz;
                    this.cube_params.ezz = 0;

                    this.newA = this.addOldAndNewVertex(this.vertex_A, [
                        0,
                        0,
                        0
                    ]);
                    this.newB = this.addOldAndNewVertex(this.vertex_B, [
                        0,
                        0,
                        this.cube_params.eyz * this.length_cub,
                    ]);

                    this.newC = this.addOldAndNewVertex(this.vertex_C, [
                        0,
                        0,
                        this.cube_params.eyz * this.length_cub
                    ]);
                    this.newD = this.addOldAndNewVertex(this.vertex_D, [
                        0,
                        0,
                        0,
                    ]);
                    this.newE = this.addOldAndNewVertex(this.vertex_E, [
                        0,
                        0,
                        0,
                    ]);
                    this.newF = this.addOldAndNewVertex(this.vertex_F, [
                        0,
                        0,
                        this.cube_params.eyz * this.length_cub,
                    ]);

                    this.newG = this.addOldAndNewVertex(this.vertex_G, [
                        0,
                        0,
                        this.cube_params.eyz * this.length_cub,
                    ]);

                    this.newH = this.addOldAndNewVertex(this.vertex_H, [
                        0,
                        0,
                        0
                    ]);

                }

                this.updateCube()

            },
            updateCube() {
                this.defaultCube.forEach(el => {
                    let newPlane = Object.assign({}, JSON.parse(JSON.stringify(el)));
                    newPlane.x = [];
                    newPlane.y = [];
                    newPlane.z = [];
                    for (let i in el.name) {
                        let vertex = el.name[i];
                        newPlane.x.push(this.$data[`new${vertex.toUpperCase()}`][0]);
                        newPlane.y.push(this.$data[`new${vertex.toUpperCase()}`][1]);
                        newPlane.z.push(this.$data[`new${vertex.toUpperCase()}`][2]);
                    }
                    newPlane.name = el.name;
                    if (this[this.surface].includes(newPlane.name)) {
                        newPlane.opacity = 0.3
                    } else {
                        newPlane.opacity = 0.1
                    }
                    newPlane.line = Object.assign({}, JSON.parse(JSON.stringify(this.line)));
                    this.additionalCube.push(newPlane);
                });

            },
            addOldAndNewVertex(oldValue, newValue) {
                return [...oldValue.map((element, i) => element + newValue[i])]

            },
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
            currentGraphWidth(){
                return 400
            },
            currentGraphHeight(){
                return 400
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
            XY() {
                return ['ABCDA', 'EFGHE'];
            },
            XZ() {
                return ['AEHDA', 'BFGCB'];
            },
            YZ() {
                return ['BFEAB', 'CGHDC'];
            },
            Pois() {
                return (this.cube_params.Vp * this.cube_params.Vp - 2 * this.cube_params.Vs * this.cube_params.Vs) / 2 / (this.cube_params.Vp * this.cube_params.Vp - this.cube_params.Vs * this.cube_params.Vs)
            },
            Mu() {
                return this.cube_params.Vs * this.cube_params.Vs * this.cube_params.rho
            },
            Lmda() {
                return this.cube_params.Vp * this.cube_params.Vp * this.cube_params.rho - 2 * this.Mu
            },
            Young() {
                return this.Mu * (3 * this.Lmda + 2 * this.Mu) / (this.Mu + this.Lmda)
            },
            vertex_D() {
                return [0, this.length_cub, 0];
            },
            vertex_E() {
                return [0, 0, this.length_cub]
            },
            vertex_B() {
                return [this.length_cub, 0, 0]
            },
            vertex_A() {
                return [0, 0, 0]
            },
            vertex_H() {
                return [0, this.length_cub, this.length_cub]
            },
            vertex_C() {
                return [this.length_cub, this.length_cub, 0]
            },
            vertex_F() {
                return [this.length_cub, 0, this.length_cub]
            },
            vertex_G() {
                return [this.length_cub, this.length_cub, this.length_cub]
            },
            computedCubParams() {
                return [...this.defaultCube, ...this.additionalCube];
            },
            defaultCube() {
                return [
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "y": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "z": [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "surfaceaxis": 2,
                        "name": "ABCDA",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3,
                    },
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "y": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "z": [
                            this.length_cub,
                            this.length_cub,
                            this.length_cub,
                            this.length_cub,
                            this.length_cub
                        ],
                        "surfaceaxis": 2,
                        "name": "EFGHE",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3
                    },
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "y": [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "z": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "surfaceaxis": 1,
                        "name": "BFEAB",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3
                    },
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "y": [
                            this.length_cub,
                            this.length_cub,
                            this.length_cub,
                            this.length_cub,
                            this.length_cub
                        ],
                        "z": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "surfaceaxis": 1,
                        "name": "CGHDC",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3
                    },
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "y": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "z": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "surfaceaxis": 0,
                        "name": "AEHDA",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3
                    },
                    {
                        "type": "scatter3d",
                        "mode": "lines",
                        "x": [
                            this.length_cub,
                            this.length_cub,
                            this.length_cub,
                            this.length_cub
                        ],
                        "y": [
                            0,
                            0,
                            this.length_cub,
                            this.length_cub,
                            0
                        ],
                        "z": [
                            0,
                            this.length_cub,
                            this.length_cub,
                            0,
                            0
                        ],
                        "surfaceaxis": 0,
                        "name": "BFGCB",
                        "line": {
                            "width": 5,
                            "color": "rgb(144,154,161)"
                        },
                        "opacity": 0.3
                    }
                ]
            }
        },
        watch: {
            stress: {
                handler() {
                    this.debounceRenderCube();
                }
            },
            stress_type: {
                handler() {
                    this.debounceRenderCube();
                }
            },
            surface: {
                handler() {
                    this.debounceRenderCube();
                }
            },
        }
    };
</script>

<style scoped>
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

    .graph-title {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #00366B;
    }
</style>
