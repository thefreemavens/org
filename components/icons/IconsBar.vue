<template>
  <div class="social">
    <a href="https://www.facebook.com/horizzn" title="Horizzn on Facebook" target="_blank"><icon icon-name="facebook"><icon-facebook /></icon></a>

    <a href="https://twitter.com/horizzn" title="Horizzn on Twitter" target="_blank"><icon icon-name="twitter"><icon-twitter /></icon></a>

    <a href="https://www.instagram.com/horizznapp" title="Horizzn on Instagram" target="_blank"><icon icon-name="instagram"><icon-instagram /></icon></a>

    <a href="https://github.com/horizzn/horizzn" title="Horizzn on Github" target="_blank"><icon icon-name="github"><icon-github /></icon></a>
  </div>
</template>

<script>
import Icon from "@/components/icons/Icon";
import IconFacebook from "@/components/icons/IconFacebook";
import IconTwitter from "@/components/icons/IconTwitter";
import IconInstagram from "@/components/icons/IconInstagram";
import IconGithub from "@/components/icons/IconGithub";
// import IconWeb from "@/components/icons/IconWeb";

export default {
  components: {
    Icon,
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconGithub
    // IconWeb
  }
};
</script>

<style scoped lang="scss">
.social {
  list-style-type: none;
  margin: 0;
  padding: 0;
  a {
    line-height: 40px;
    font-size: 16px;
    border-bottom: none;
    font-style: normal;
    color: lighten($brand, 10);
    &:hover {
      color: darken($brand, 10);
      background: inherit;
    }
  }
  svg {
    opacity: 20%;
    position: relative;
    top: 4px;
    margin-right: 24px;
  }
}
</style>
