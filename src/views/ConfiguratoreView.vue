<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import AnteprimaBottiglia from '../components/AnteprimaBottiglia.vue'
import SelettoreColori from '../components/SelettoreColori.vue'

const router = useRouter()

const coloriDisponibili = [
  { nome: 'Acqua', hex: '#2a9d8f' },
  { nome: 'Sole', hex: '#e9c46a' },
  { nome: 'Petrolio', hex: '#264653' },
  { nome: 'Corallo', hex: '#e76f51' },
  { nome: 'Cielo', hex: '#4ea8de' },
  { nome: 'Blu', hex: '#355cbe' },
  { nome: 'Rosa', hex: '#e78ac3' },
  { nome: 'Lilla', hex: '#a78bfa' },
  { nome: 'Bianco', hex: '#f5f5f5' },
  { nome: 'Nero', hex: '#242424' },
]

const coloriBottiglia = ref({
  tappo: '#2a9d8f',
  corpo: '#e9c46a',
  fondo: '#264653',
})

const parti = ['tappo', 'corpo', 'fondo']
const passoAttuale = ref(0)

const parteAttuale = computed(() => {
  return parti[passoAttuale.value]
})

const ultimoPasso = computed(() => {
  return passoAttuale.value === parti.length - 1
})

function aggiornaColore(colore) {
  coloriBottiglia.value[parteAttuale.value] = colore
}

function avanti() {
  if (!ultimoPasso.value) {
    passoAttuale.value++
  }
}

function indietro() {
  if (passoAttuale.value > 0) {
    passoAttuale.value--
  }
}

function invia() {
  router.push('/grazie')
}
</script>

<template>
 <main class="container py-4 py-md-5">
  <div class="row g-4 align-items-start">
    <div class="col-12 col-md-6 order-2 order-md-1">
        <h1 class="fw-bold">
          Personalizza la tua bottiglia
        </h1>

        <p class="text-body-secondary" aria-live="polite">
          Passaggio {{ passoAttuale + 1 }} di {{ parti.length }}
        </p>

        <h2 class="h4 mb-3">
          Scegli il colore del {{ parteAttuale }}
        </h2>

        <SelettoreColori
          :colori="coloriDisponibili"
          :colore-selezionato="coloriBottiglia[parteAttuale]"
          @seleziona="aggiornaColore"
        />

        <div class="d-flex gap-2 mt-4">
          <button
            type="button"
            class="btn btn-outline-secondary"
            :disabled="passoAttuale === 0"
            @click="indietro"
          >
            Indietro
          </button>

          <button
            v-if="!ultimoPasso"
            type="button"
            class="btn btn-success"
            @click="avanti"
          >
            Avanti
          </button>

          <button
            v-else
            type="button"
            class="btn btn-success"
            @click="invia"
          >
            Invia
          </button>
        </div>

        <RouterLink to="/" class="btn btn-link px-0 mt-3">
          Torna alla home
        </RouterLink>
      </div>

      <div class="col-12 col-md-6 order-1 order-md-2 anteprima-fissa">
        <AnteprimaBottiglia
          :colore-tappo="coloriBottiglia.tappo"
          :colore-corpo="coloriBottiglia.corpo"
          :colore-fondo="coloriBottiglia.fondo"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.anteprima-fissa {
  position: sticky;
  top: 1rem;
  align-self: flex-start;
}

@media (max-width: 767.98px) {
  .anteprima-fissa {
    top: 0;
    z-index: 2;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #fff;
    box-shadow: 0 3px 6px rgb(0 0 0 / 8%);
  }
}
</style>