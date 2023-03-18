<template>
  <div class="myCard">
    <div class="img">
      <img :src="author.url_img" alt="author_photo" />
    </div>
    <div class="content">
      <strong v-if="$i18n.locale == 'ru'" v-html="author.cName"></strong>
      <strong v-else v-html="author.lName"></strong>
      <p class="degre">{{ author.position }}</p>
      <p>
        <label
          >E-mail:
          <a :href="author.email">{{ author.email }}</a>
        </label>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.myCard {
  display: flex;
  align-items: flex-start;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 161px;
    height: 213px;
    background: #d9d9d9;
    border-radius: 40px;
    overflow: hidden;
    margin-right: 28px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    p {
      padding-right: 0;
    }
    strong {
      display: flex;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #00356b;
      margin-bottom: 15px;
    }
    .degre {
      margin-bottom: 25px;
      font-family: "Montserrat";
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      min-height: 40px;
      color: #00356b;
      display: flex;
      flex-wrap: wrap;
      // flex-direction: column;
      align-content: center;
      // align-self: center;
    }
    a,
    label {
      font-family: "Montserrat";
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      color: #00356b;
      a {
        font-family: "Montserrat";
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;

        color: #00356b;
      }
    }
    label {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    a {
      display: flex;
      // margin-top: 10px;
      max-width: 100%;
      white-space: pre-wrap;
      word-break: break-all;
      text-decoration: underline;
    }
  }
}
</style>
