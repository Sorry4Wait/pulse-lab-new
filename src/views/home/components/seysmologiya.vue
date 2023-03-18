<template>
    <div class="grid grid-cols-12 overflow-hidden">
      <div class="col-span-12 order-2 lg:order-1 lg:col-span-6 xl:col-span-7 pr-8">
        <p>
            {{$t("seismologicDes")}}
        </p>
        <p class="py-5">{{$t("seismologicMiddle")}}</p>
        <p>
          <ul>
            <li>{{$t("seismologicOption1")}}</li>
            <li>{{$t("seismologicOption2")}}</li>
            <li>{{$t("seismologicOption3")}}</li>
          </ul>
        </p>
      </div>
      <div class="col-span-12 order-1 mb-5 lg:mb-0 lg:col-span-6 xl:col-span-5">
        <img src="@/assets/img/HomeCoursesTab/seysmologiya.png">
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  img {
    width: 100%;
  }
  p,
  li {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  
    color: #00356b;
  }
  li {
    position: relative;
    padding-left: 20px;
    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 2px;
      border-radius: 100%;
      background: rgba(0, 53, 107, 1);
      left: 10px;
      top: 10px;
      transform: translate(-50%, -50%);
    }
  }
  </style>
  