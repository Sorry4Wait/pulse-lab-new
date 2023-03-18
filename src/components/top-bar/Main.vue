<template>
    <!-- BEGIN: Top Bar -->
    <div
            class="top-bar-boxed h-[70px] md:h-[65px] z-[49] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10  md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
    >
        <div class="h-full flex items-center">
            <!-- BEGIN: Logo -->
            <a href="" class="logo -intro-x hidden md:flex  block h-10">
                <img
                        alt="Enigma Tailwind HTML Admin Template"
                        class="logo__image w-6"
                        height="10"
                        src="@/assets/images/logo.svg"
                />
                <!--        <span class="logo__text text-white text-lg ml-3"> Enigma </span>-->
            </a>
            <!-- END: Logo -->
            <!-- BEGIN: Breadcrumb -->
            <nav aria-label="breadcrumb" class="-intro-x h-[45px] mr-auto" :class="minimizeIconMarginLeft">
                <ol class="breadcrumb breadcrumb-light">
                    <li class="breadcrumb-item"><a href="#" @click.prevent="changeSideBar">
                        <ChevronsRightIcon class="text-slate-900" v-if="globalStore.sideBarMini"/>
                        <ChevronsLeftIcon class="text-slate-900" v-else/>
                    </a></li>
                    <!--          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>-->
                </ol>
            </nav>
            <!-- END: Breadcrumb -->
            <!-- BEGIN: Notifications -->
            <Dropdown class="intro-x mr-4 sm:mr-6">
                <DropdownToggle
                        tag="div"
                        role="button"
                        class="notification  cursor-pointer"
                >
                    <span class="text-slate-900 bg-slate-200 rounded-lg p-2">UZ</span>
                </DropdownToggle>
                <DropdownMenu class="pt-2">
                    <DropdownContent tag="div" class="">
                        <ul>
                            <li class="p-1 cursor-pointer hover:bg-slate-200">
                                RU
                            </li>
                            <li class="p-1 cursor-pointer hover:bg-slate-200">
                                UZ
                            </li>
                            <li class="p-1 cursor-pointer hover:bg-slate-200">
                                EN
                            </li>
                        </ul>
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
            <!-- END: Notifications -->
            <!-- BEGIN: Notifications -->
            <Dropdown class="intro-x mr-4 sm:mr-6" @click.prevent="goToProfileNotification">
                <DropdownToggle
                        tag="div"
                        role="button"
                        class="notification notification--bullet cursor-pointer"
                >
                    <BellIcon class="notification__icon text-slate-900 dark:text-slate-500"/>
                </DropdownToggle>
            </Dropdown>
            <!-- END: Notifications -->

            <!-- BEGIN: Account Menu -->
            <Dropdown class="intro-x w-8 h-8">
                <DropdownToggle
                        tag="div"
                        role="button"
                        class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
                >
                    <img
                            alt="Enigma Tailwind HTML Admin Template"
                            src="/src/assets/img/demo/avtor1.png"
                    />
                </DropdownToggle>
                <DropdownMenu class="w-56">
                    <DropdownContent
                            class="bg-main before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
                    >
                        <DropdownHeader tag="div" class="!font-normal">
                            <div class="font-medium">
                                UserName
                            </div>
                            <!--                            <div class="text-xs text-white/60 mt-0.5 dark:text-slate-500">-->
                            <!--                                {{ $f()[0].jobs[0] }}-->
                            <!--                            </div>-->
                        </DropdownHeader>
                        <DropdownDivider class="border-white/[0.08]"/>
                        <DropdownItem class="dropdown-item hover:bg-white/5" @click="goToProfile">
                            <UserIcon class="w-4 h-4 mr-2"/>
                            Profile
                        </DropdownItem
                        >
                        <!--                        <DropdownItem class="dropdown-item hover:bg-white/5">-->
                        <!--                            <EditIcon class="w-4 h-4 mr-2"/>-->
                        <!--                            Add Account-->
                        <!--                        </DropdownItem-->
                        <!--                        >-->
                        <!--                        <DropdownItem class="dropdown-item hover:bg-white/5">-->
                        <!--                            <LockIcon class="w-4 h-4 mr-2"/>-->
                        <!--                            Reset Password-->
                        <!--                        </DropdownItem-->
                        <!--                        >-->
                        <!--                        <DropdownItem class="dropdown-item hover:bg-white/5">-->
                        <!--                            <HelpCircleIcon class="w-4 h-4 mr-2"/>-->
                        <!--                            Help-->
                        <!--                        </DropdownItem-->
                        <!--                        >-->
                        <DropdownDivider class="border-white/[0.08]"/>
                        <DropdownItem class="dropdown-item hover:bg-white/5" @click.prevent="logoutUser">
                            <ToggleRightIcon class="w-4 h-4 mr-2"/>
                            Logout
                        </DropdownItem
                        >
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
            <!-- END: Account Menu -->
        </div>
    </div>
    <!-- END: Top Bar -->
</template>

<script setup>
    import {ref, computed} from "vue";
    import {auth} from "@/stores/auth";
    import {useGlobalStore} from "@/stores/global.js";
    import {useRouter} from "vue-router";

    const globalStore = useGlobalStore();

    const router = useRouter();
    const goToProfile = () => {
        router.push('/profile');
    };
    const goToProfileNotification = () => {
        router.push('/profile/notifications');
    };
    const changeSideBar = () => {
        globalStore.sideBarMini = !globalStore.sideBarMini
    };
    let minimizeIconMarginLeft = computed(() => {
        if (globalStore.sideBarMini) {
            return "ml-2"
        } else {
            return "ml-[185px]"

        }
    });
    const authUser = auth();
    const searchDropdown = ref(false);
    const showSearchDropdown = () => {
        searchDropdown.value = true;
    };
    const hideSearchDropdown = () => {
        searchDropdown.value = false;
    };

    const logoutUser = async () => {
        authUser.logout();
    }
</script>
