<template>
    <div class="otch_card" v-for="(report, index) in reports" :key="index">
      <div class="bg__mask"></div>
      <div class="body">
        <strong>{{ report.name }}</strong>
        <p class="name">{{report.labName}} {{ report.labNumber }}</p>
        <div class="files">
          <a href="#!">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2502 21.6667C26.2502 20.9763 25.6905 20.4167 25.0002 20.4167H15.0002C14.3098 20.4167 13.7502 20.9763 13.7502 21.6667C13.7502 22.357 14.3098 22.9167 15.0002 22.9167H25.0002C25.6905 22.9167 26.2502 22.357 26.2502 21.6667Z"
                fill="white"
              />
              <path
                d="M26.2502 28.3333C26.2502 27.643 25.6905 27.0833 25.0002 27.0833H15.0002C14.3098 27.0833 13.7502 27.643 13.7502 28.3333C13.7502 29.0237 14.3098 29.5833 15.0002 29.5833H25.0002C25.6905 29.5833 26.2502 29.0237 26.2502 28.3333Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6668 3.75C9.13552 3.75 7.0835 5.80203 7.0835 8.33333V31.6667C7.0835 34.198 9.13552 36.25 11.6668 36.25H28.3335C30.8648 36.25 32.9168 34.198 32.9168 31.6667V13.2794C32.9168 12.6448 32.7098 12.0275 32.3273 11.5212L27.331 4.9084C26.7797 4.17883 25.9183 3.75 25.0039 3.75H11.6668ZM9.5835 8.33333C9.5835 7.18274 10.5162 6.25 11.6668 6.25H23.7502V13.5784C23.7502 14.2688 24.3098 14.8284 25.0002 14.8284H30.4168V31.6667C30.4168 32.8173 29.4841 33.75 28.3335 33.75H11.6668C10.5162 33.75 9.5835 32.8173 9.5835 31.6667V8.33333Z"
                fill="white"
              />
            </svg>
            {{$t("methodManShort")}}
          </a>
          <a href="#!">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2502 21.6667C26.2502 20.9763 25.6905 20.4167 25.0002 20.4167H15.0002C14.3098 20.4167 13.7502 20.9763 13.7502 21.6667C13.7502 22.357 14.3098 22.9167 15.0002 22.9167H25.0002C25.6905 22.9167 26.2502 22.357 26.2502 21.6667Z"
                fill="white"
              />
              <path
                d="M26.2502 28.3333C26.2502 27.643 25.6905 27.0833 25.0002 27.0833H15.0002C14.3098 27.0833 13.7502 27.643 13.7502 28.3333C13.7502 29.0237 14.3098 29.5833 15.0002 29.5833H25.0002C25.6905 29.5833 26.2502 29.0237 26.2502 28.3333Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6668 3.75C9.13552 3.75 7.0835 5.80203 7.0835 8.33333V31.6667C7.0835 34.198 9.13552 36.25 11.6668 36.25H28.3335C30.8648 36.25 32.9168 34.198 32.9168 31.6667V13.2794C32.9168 12.6448 32.7098 12.0275 32.3273 11.5212L27.331 4.9084C26.7797 4.17883 25.9183 3.75 25.0039 3.75H11.6668ZM9.5835 8.33333C9.5835 7.18274 10.5162 6.25 11.6668 6.25H23.7502V13.5784C23.7502 14.2688 24.3098 14.8284 25.0002 14.8284H30.4168V31.6667C30.4168 32.8173 29.4841 33.75 28.3335 33.75H11.6668C10.5162 33.75 9.5835 32.8173 9.5835 31.6667V8.33333Z"
                fill="white"
              />
            </svg>
            {{$t("report")}}
          </a>
        </div>
        <div class="otch">
          <p>{{$t("score")}}: {{ ball }}</p>
          <p>{{$t("numAttempts")}}: {{ popitok }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lang : localStorage.getItem("currentLang"),
        course : this.$t("magneticName")
      }
    },
    props: {
      title: {
        type: String,
        default: "Магниторазведка",
      },
      name: {
        type: String,
        default: "№1",
      },
      ball: {
        type: String,
        default: "90%",
      },
      popitok: {
        type: String,
        default: "1",
      },
      color: {
        type: String,
      },
    },
    computed : {
      reports () {
        return [
          {
            name : this.$t("magneticName"),
            labLink : "",
            labName : this.$t("labWork"),
            labNumber : "№1"
          },
          {
            name : this.$t("magneticName"),
            labLink : "",
            labName : this.$t("labWork"),
            labNumber : "№2"
          },
          {
            name : this.$t("magneticName"),
            labLink : "",
            labName : this.$t("labWork"),
            labNumber : "№3"
          },
          {
            name : this.$t("magneticName"),
            labLink : "",
            labName : this.$t("labWork"),
            labNumber : "№4"
          },
          {
            name : this.$t("magneticName"),
            labLink : "",
            labName : this.$t("labWork"),
            labNumber : "№5"
          }
        ]
      }
    },
    inject : ["course"]
  };
  </script>
  
  <style lang="scss" scoped>
  .otch_card {
    overflow: hidden;
    position: relative;
    border: 0.5px solid #000000;
    // border-left: 6px solid;
    border-left-style: solid;
    border-left-width: 6px;
    border-radius: 4px 8px 8px 4px;
    width: 320px;
    padding: 10px 15px;
    margin-bottom: 20px;
    margin: 0 17px 20px;
    border-left-color: rgb(192, 192, 255);
    .bg__mask {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.05;
      background: rgba(228, 246, 255, 0.15);
    }
    .body {
      position: relative;
    }
    strong {
      display: flex;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
  
      color: #041628;
      margin-bottom: 15px;
    }
    .name {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
  
      color: #0d3257;
      margin-bottom: 24px;
    }
    .files {
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
      a {
        display: flex;
        align-items: center;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        margin-bottom: 5px;
  
        color: #0d3257;
        svg {
          width: 24px;
          height: 24px;
          object-fit: contain;
          margin-left: 5px;
          path {
            fill: #041628;
          }
        }
      }
    }
    .otch {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
  
        color: #00356b;
        margin-bottom: 5px;
      }
    }
  }
  </style>
  