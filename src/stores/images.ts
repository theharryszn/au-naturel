import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'

const IMAGES = [
  'joanmartinezros/joanmartinezros-7.jpg',
  'love.errs/loveerrs-5.jpg',
  'lalovenenoso/lalovenenoso-4.jpg',
  'seeavton/seeavton-5.jpg',
  'lalovenenoso/lalovenenoso-3.jpg',
  'seeavton/seeavton-1.jpg',
  'lalovenenoso/lalovenenoso-8.jpg',
  'love.errs/loveerrs-8.jpg',
  'joanmartinezros/joanmartinezros-5.jpg',
  'love.errs/loveerrs-9.jpg',
  'charlotte_lapalus/charlotte_lapalus-9.jpg',
  'love.errs/loveerrs-2.jpg',
  'love.errs/loveerrs-7.jpg',
  'seeavton/seeavton-6.jpg',
  'charlotte_lapalus/charlotte_lapalus-6.jpg',
  'seeavton/seeavton-7.jpg',
  'paeulini/paeulini-4.webp',
  'lalovenenoso/lalovenenoso-6.jpg',
  'charlotte_lapalus/charlotte_lapalus-3.jpg',
  'photoprotsenko/photoprotsenko-2.jpg',
  'love.errs/loveerrs-4.jpg',
  'lalovenenoso/lalovenenoso-5.jpg',
  'charlotte_lapalus/charlotte_lapalus-2.jpg',
  'joanmartinezros/joanmartinezros-1.jpg',
  'paeulini/paeulini-7.webp',
  'love.errs/loveerrs-6.jpg',
  'lalovenenoso/lalovenenoso-2.jpg',
  'joanmartinezros/joanmartinezros-6.jpg',
  'photoprotsenko/photoprotsenko-3.jpg',
  'charlotte_lapalus/charlotte_lapalus-8.jpg',
  'photoprotsenko/photoprotsenko-6.jpg',
  'paeulini/paeulini-5.webp',
  'charlotte_lapalus/charlotte_lapalus-5.jpg',
  'seeavton/seeavton-2.jpg',
  'paeulini/paeulini-8.webp',
  'seeavton/seeavton-4.jpg',
  'charlotte_lapalus/charlotte_lapalus-7.jpg',
  'lalovenenoso/lalovenenoso-1.jpg',
  'charlotte_lapalus/charlotte_lapalus-1.jpg',
  'paeulini/paeulini-1.webp',
  'love.errs/loveerrs-3.jpg',
  'photoprotsenko/photoprotsenko-10.jpg',
  'joanmartinezros/joanmartinezros-4.jpg',
  'photoprotsenko/photoprotsenko-7.jpg',
  'paeulini/paeulini-6.webp',
  'charlotte_lapalus/charlotte_lapalus-4.jpg',
  'joanmartinezros/joanmartinezros-3.jpg',
  'paeulini/paeulini-2.webp',
  'photoprotsenko/photoprotsenko-4.jpg',
  'photoprotsenko/photoprotsenko-8.jpg',
  'seeavton/seeavton-3.jpg',
  'photoprotsenko/photoprotsenko-5.jpg',
  'lalovenenoso/lalovenenoso-7.jpg',
  'photoprotsenko/photoprotsenko-9.jpg',
  'joanmartinezros/joanmartinezros-2.jpg',
  'paeulini/paeulini-3.webp'
]

export const useImageStore = defineStore('images', () => {
  const state = reactive({
    images: IMAGES,
    loadingProgress: 0
  })

  function progress(p: number) {
    state.loadingProgress = p
  }

  const names = computed(() => {
    return new Set(state.images.map((image) => image.substring(0, image.indexOf('/'))))
  })

  return { ...state, progress, names }
})
