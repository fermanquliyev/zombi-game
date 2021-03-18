<template>
  <div class="modal">
    <h1 id="header">Game has finished</h1>
    <p>
      <svg style="width:131px">
        <circle class="cls-1" cx="65.5" cy="65.5" r="64" />
        <circle class="cls-2" cx="95" cy="65.8" r="7.5" />
        <circle class="cls-2" cx="36" cy="65.8" r="7.5" />
        <path
          class="cls3"
          id="mouth"
          v-if="showMouth"
          d="M51,97s6,10,23,10S95,97,95,97"
          transform="translate(-8.5 -5.5)"
        />
      </svg>
    </p>
    <p>You {{ uiState }}!</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import gsap from "gsap";

export default defineComponent({
  data() {
    return {
      showMouth: false,
    };
  },
  computed: {
    ...mapState(["uiState"]),
  },
  mounted() {
    this.showMouth = true;
    setTimeout(() => {
      if (this.uiState == "lost") {
        gsap.to("#mouth", {
          duration: 1,
          scaleY: -1,
          transformOrigin: "50% 50%",
        });
      }
    }, 1);
  },
});
</script>

<style scoped>
.modal {
  text-align: center;
}
.cls-1 {
  fill: #fbb040;
  stroke: #231f20;
}

.cls-1,
.cls-3 {
  stroke-miterlimit: 10;
  stroke-width: 3px;
}

.cls-2 {
  fill: #231f20;
}

.cls-3 {
  fill: none;
  stroke: #be1e2d;
}
</style>
