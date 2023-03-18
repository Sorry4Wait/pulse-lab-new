<template>
    <div class="py-5 md:py-0">
        <!--    <MainColorSwitcher />-->
        <MobileMenu/>
            <TopBar />
        <div class="h-full flex-col fixed z-50 bg-main hidden md:flex" :class="sideBarWidth">
            <div class="logo__sidebar">
                <router-link class="flex h-full w-full items-center justify-start" to="./">
                    <img src="@/assets/img/logoSidebar.png"/>
                </router-link>
            </div>
            <!-- BEGIN: Side Menu -->
            <template v-if="sideBarMinimized">
                <nav class="side-nav flex flex-col overflow-y-scroll grow navigation" >


                    <ul class=" ">
                        <!--                    <li-->
                        <!--                            class="side-nav__devider my-6"-->
                        <!--                    ></li>-->
                        <!-- BEGIN: First Child -->
                        <template v-for="(menu, menuKey) in formattedMenu">
                            <li
                                    v-if="menu == 'devider'"
                                    :key="menu + menuKey"
                                    class="side-nav__devider my-6"
                            ></li>
                            <li v-else :key="menu + menuKey">
                                <SideMenuTooltip
                                        tag="a"
                                        :content="$t(menu.title)"
                                        :href="
                  menu.subMenu
                    ? 'javascript:;'
                    : router.resolve({ name: menu.pageName }).path
                "
                                        class="side-menu"
                                        :class="{
                  'side-menu--active': menu.active,
                  'side-menu--open': menu.activeDropdown,
                }"
                                        @click="linkTo(menu, router, $event)"
                                >
                                    <div class="side-menu__icon">
                                        <component :is="menu.icon"/>
                                    </div>
                                    <div class="side-menu__title">
                                        {{ $t(menu.title) }}
                                        <div
                                                v-if="menu.subMenu"
                                                class="side-menu__sub-icon"
                                                :class="{ 'transform rotate-180': menu.activeDropdown }"
                                        >
                                            <ChevronDownIcon/>
                                        </div>
                                    </div>
                                </SideMenuTooltip>
                                <!-- BEGIN: Second Child -->
                                <transition @enter="enter" @leave="leave">
                                    <ul v-if="menu.subMenu && menu.activeDropdown">
                                        <li
                                                v-for="(subMenu, subMenuKey) in menu.subMenu"
                                                :key="subMenuKey"
                                        >
                                            <SideMenuTooltip
                                                    tag="a"
                                                    :content="subMenu.title"
                                                    :href="
                        subMenu.subMenu
                          ? 'javascript:;'
                          : router.resolve({ name: subMenu.pageName }).path
                      "
                                                    class="side-menu"
                                                    :class="{ 'side-menu--active': subMenu.active }"
                                                    @click="linkTo(subMenu, router, $event)"
                                            >
                                                <div class="side-menu__icon">
                                                    <component :is="subMenu.icon"/>
                                                </div>
                                                <div class="side-menu__title">
                                                    {{ subMenu.title }}
                                                    <div
                                                            v-if="subMenu.subMenu"
                                                            class="side-menu__sub-icon"
                                                            :class="{
                            'transform rotate-180': subMenu.activeDropdown,
                          }"
                                                    >
                                                        <ChevronDownIcon/>
                                                    </div>
                                                </div>
                                            </SideMenuTooltip>
                                            <!-- BEGIN: Third Child -->
                                            <transition @enter="enter" @leave="leave">
                                                <ul v-if="subMenu.subMenu && subMenu.activeDropdown">
                                                    <li
                                                            v-for="(
                            lastSubMenu, lastSubMenuKey
                          ) in subMenu.subMenu"
                                                            :key="lastSubMenuKey"
                                                    >
                                                        <SideMenuTooltip
                                                                tag="a"
                                                                :content="lastSubMenu.title"
                                                                :href="
                              lastSubMenu.subMenu
                                ? 'javascript:;'
                                : router.resolve({
                                    name: lastSubMenu.pageName,
                                  }).path
                            "
                                                                class="side-menu"
                                                                :class="{
                              'side-menu--active': lastSubMenu.active,
                            }"
                                                                @click="linkTo(lastSubMenu, router, $event)"
                                                        >
                                                            <div class="side-menu__icon">
                                                                <MinusIcon/>
                                                            </div>
                                                            <div class="side-menu__title">
                                                                {{ lastSubMenu.title }}
                                                            </div>
                                                        </SideMenuTooltip>
                                                    </li>
                                                </ul>
                                            </transition>
                                            <!-- END: Third Child -->
                                        </li>
                                    </ul>
                                </transition>
                                <!-- END: Second Child -->
                            </li>
                        </template>
                        <!-- END: First Child -->
                    </ul>

                </nav>
            </template>

           <template v-else>
               <nav class="side-nav side-nav--simple flex flex-col overflow-y-scroll grow navigation">
                   <ul>
                       <!-- BEGIN: First Child -->
                       <template v-for="(menu, menuKey) in formattedMenu">
                           <li
                                   v-if="menu == 'devider'"
                                   :key="menu + menuKey"
                                   class="side-nav__devider my-6"
                           ></li>
                           <li v-else :key="menu + menuKey">
                               <Tippy
                                       tag="a"
                                       :content="menu.title"
                                       :options="{
                  placement: 'left',
                }"
                                       :href="
                  menu.subMenu
                    ? 'javascript:;'
                    : router.resolve({ name: menu.pageName }).path
                "
                                       class="side-menu"
                                       :class="{
                  'side-menu--active': menu.active,
                  'side-menu--open': menu.activeDropdown,
                }"
                                       @click="linkTo(menu, router, $event)"
                               >
                                   <div class="side-menu__icon">
                                       <component :is="menu.icon" />
                                   </div>
                                   <div class="side-menu__title">
                                       {{ menu.title }}
                                       <div
                                               v-if="menu.subMenu"
                                               class="side-menu__sub-icon"
                                               :class="{ 'transform rotate-180': menu.activeDropdown }"
                                       >
                                           <ChevronDownIcon />
                                       </div>
                                   </div>
                               </Tippy>
                               <!-- BEGIN: Second Child -->
                               <transition @enter="enter" @leave="leave">
                                   <ul v-if="menu.subMenu && menu.activeDropdown">
                                       <li
                                               v-for="(subMenu, subMenuKey) in menu.subMenu"
                                               :key="subMenuKey"
                                       >
                                           <Tippy
                                                   tag="a"
                                                   :content="subMenu.title"
                                                   :options="{
                        placement: 'left',
                      }"
                                                   :href="
                        subMenu.subMenu
                          ? 'javascript:;'
                          : router.resolve({ name: subMenu.pageName }).path
                      "
                                                   class="side-menu"
                                                   :class="{ 'side-menu--active': subMenu.active }"
                                                   @click="linkTo(subMenu, router, $event)"
                                           >
                                               <div class="side-menu__icon">
                                                   <component :is="subMenu.icon" />
                                               </div>
                                               <div class="side-menu__title">
                                                   {{ subMenu.title }}
                                                   <div
                                                           v-if="subMenu.subMenu"
                                                           class="side-menu__sub-icon"
                                                           :class="{
                            'transform rotate-180': subMenu.activeDropdown,
                          }"
                                                   >
                                                       <ChevronDownIcon />
                                                   </div>
                                               </div>
                                           </Tippy>
                                           <!-- BEGIN: Third Child -->
                                           <transition @enter="enter" @leave="leave">
                                               <ul v-if="subMenu.subMenu && subMenu.activeDropdown">
                                                   <li
                                                           v-for="(
                            lastSubMenu, lastSubMenuKey
                          ) in subMenu.subMenu"
                                                           :key="lastSubMenuKey"
                                                   >
                                                       <Tippy
                                                               tag="a"
                                                               :content="lastSubMenu.title"
                                                               :options="{
                              placement: 'left',
                            }"
                                                               :href="
                              lastSubMenu.subMenu
                                ? 'javascript:;'
                                : router.resolve({
                                    name: lastSubMenu.pageName,
                                  }).path
                            "
                                                               class="side-menu"
                                                               :class="{
                              'side-menu--active': lastSubMenu.active,
                            }"
                                                               @click="linkTo(lastSubMenu, router, $event)"
                                                       >
                                                           <div class="side-menu__icon">

                                                               <component :is="menu.icon" />
                                                           </div>
                                                           <div class="side-menu__title">
                                                               {{ lastSubMenu.title }}
                                                           </div>
                                                       </Tippy>
                                                   </li>
                                               </ul>
                                           </transition>
                                           <!-- END: Third Child -->
                                       </li>
                                   </ul>
                               </transition>
                               <!-- END: Second Child -->
                           </li>
                       </template>
                       <!-- END: First Child -->
                   </ul>
               </nav>
           </template>
          <div class="h-[50px] flex justify-center mb-3" v-if="sideBarMinimized">
            <button>
              <span>{{ $t("exit") }}</span>
            </button>
          </div>

            <!-- END: Side Menu -->
            <!-- BEGIN: Content -->

            <!-- END: Content -->
        </div>
      <div class="content" :class="contentMarginLeft">
        <router-view/>
      </div>
    </div>
</template>

<script setup>
    import {computed, onMounted, provide, ref, watch } from "vue";
    import {useRoute, useRouter} from "vue-router";
    import {helper as $h} from "@/utils/helper";
    import {useSideMenuStore} from "@/stores/side-menu";
    import TopBar from "@/components/top-bar/Main.vue";
    import MobileMenu from "@/components/mobile-menu/Main.vue";
    import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
    import MainColorSwitcher from "@/components/main-color-switcher/Main.vue";
    import SideMenuTooltip from "@/components/side-menu-tooltip/Main.vue";
    import {linkTo, nestedMenu, enter, leave} from "./index";
    import dom from "@left4code/tw-starter/dist/js/dom";
    import {useI18n} from "vue-i18n";
    import {useGlobalStore} from "@/stores/global.js";
    const globalStore = useGlobalStore();

    const changeSideBar = () => {
        globalStore.sideBarMini = !globalStore.sideBarMini
    };
    let sideBarMinimized = computed(() => !globalStore.sideBarMini);

    let sideBarWidth = computed(() => {
        if(!globalStore.sideBarMini){
            return "w-[300px]"
        }else{
            return "w-[105px]"
        }
    });
    let contentMarginLeft = computed(() => {
        if(!globalStore.sideBarMini){
            return "lg:ml-[300px]"
        }else{
            return "lg:ml-[105px]"
        }
    });
    let {t} = useI18n;
    const route = useRoute();
    const router = useRouter();
    const formattedMenu = ref([]);
    const sideMenuStore = useSideMenuStore();
    const sideMenu = computed(() => nestedMenu(sideMenuStore.menu, route));

    provide("forceActiveMenu", (pageName) => {
        route.forceActiveMenu = pageName;
        formattedMenu.value = $h.toRaw(sideMenu.value);
    });

    watch(
        computed(() => route.path),
        () => {
            delete route.forceActiveMenu;
            formattedMenu.value = $h.toRaw(sideMenu.value);
        }
    );

    onMounted(() => {
        dom("body").removeClass("error-page").removeClass("login").addClass("main");
        formattedMenu.value = $h.toRaw(sideMenu.value);
    });
</script>
<style lang="scss" scoped>
  button {
    border: 1px dashed #017cf8;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    min-width: 150px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 40px;
      background: linear-gradient(
                      262.49deg,
                      #007eff 0%,
                      #0864c1 100.67%,
                      #c80000 100.68%
      );
      border-radius: 8px;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      color: #ffffff;
    }
  }

  .logo__sidebar {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 17px;

      img {
          height: 58px;
          width: initial;
      }
  }
  .navigation {
      transition: width 0.5s;
      background-image: url("@/assets/img/demo/sidebar.png");
      background-position: bottom left;
      background-repeat: no-repeat;
      overflow-x: hidden;
      z-index: 1000;
  }
</style>
