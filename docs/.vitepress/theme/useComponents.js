import BaseUse from '../components/BaseUse.vue'
import ApiReferenceMethods from '../components/ApiReferenceMethods.vue'
import ApiReferenceCallback from '../components/ApiReferenceCallback.vue'
import ApiReferenceOptions from '../components/ApiReferenceOptions.vue'
import ApiReferenceSlots from '../components/ApiReferenceSlots.vue'

export function useComponents(app) {
  app.component('BaseUse', BaseUse)
  app.component('ApiReferenceMethods', ApiReferenceMethods)
  app.component('ApiReferenceCallback', ApiReferenceCallback)
  app.component('ApiReferenceOptions', ApiReferenceOptions)
  app.component('ApiReferenceSlots', ApiReferenceSlots)
}
