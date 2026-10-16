<script setup>
defineProps({
  coloreTappo: { type: String, required: true },
  coloreCorpo: { type: String, required: true },
  coloreFondo: { type: String, required: true },
})
</script>

<template>
  <figure class="m-0 text-center">
    <div
      class="bottiglia"
      role="img"
      aria-label="Anteprima della bottiglia personalizzata"
    >
      <div
        class="tappo"
        :style="{ backgroundColor: coloreTappo }"
      ></div>

      <div
        class="corpo"
        :style="{ backgroundColor: coloreCorpo }"
      ></div>

      <div
        class="fondo"
        :style="{ backgroundColor: coloreFondo }"
      ></div>
    </div>

    <figcaption class="text-body-secondary small mt-2 mt-md-3">
      Anteprima della tua bottiglia
    </figcaption>
  </figure>
</template>

<style scoped>
.bottiglia {
  width: 160px;
  margin: 0 auto;
}

.tappo {
  width: 76px;
  height: 38px;
  margin: 0 auto;
  border-radius: 12px 12px 4px 4px;
}

.corpo {
  height: 230px;
  border-radius: 40px 40px 0 0;
}

.fondo {
  height: 30px;
  border-radius: 0 0 24px 24px;
}

.tappo,
.corpo,
.fondo {
  box-shadow: inset -10px 0 0 rgb(0 0 0 / 10%);
}

@media (max-width: 767.98px), (max-height: 600px) {
  .bottiglia {
    width: 80px;
  }

  .tappo {
    width: 38px;
    height: 19px;
    border-radius: 6px 6px 2px 2px;
  }

  .corpo {
    height: 100px;
    border-radius: 20px 20px 0 0;
  }

  .fondo {
    height: 15px;
    border-radius: 0 0 12px 12px;
  }
}
</style>