import { defineComponent } from 'vue'
import { C } from "./C"

export const A: ReturnType<typeof defineComponent> = defineComponent({name: "A", components: { C }})