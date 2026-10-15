<script setup>
defineProps({
  colori: { type: Array, required: true },
  coloreSelezionato: { type: String, required: true },
})

const emit = defineEmits(['seleziona'])
</script>

<template>
  <div
    class="d-flex flex-wrap gap-2"
    role="group"
    aria-label="Colori disponibili"
  >
    <button
      v-for="colore in colori"
      :key="colore.hex"
      type="button"
      class="btn opzione-colore d-flex flex-column align-items-center gap-1"
      :class="
        colore.hex === coloreSelezionato
          ? 'btn-success'
          : 'btn-outline-secondary'
      "
      :aria-pressed="colore.hex === coloreSelezionato"
      @click="emit('seleziona', colore.hex)"
    >
      <span
        class="campione-colore rounded-circle border border-secondary"
        :style="{ backgroundColor: colore.hex }"
        aria-hidden="true"
      ></span>

      <span class="small">{{ colore.nome }}</span>
    </button>
  </div>
</template>

<style scoped>
.opzione-colore {
  width: 76px;
}

.campione-colore {
  width: 36px;
  height: 36px;
}
</style>