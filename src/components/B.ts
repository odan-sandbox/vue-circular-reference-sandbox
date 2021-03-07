import { defineComponent } from 'vue'
import { A } from "./A"

export const B = defineComponent({name: "B", components: { A }})