import { Vue, Component, Prop } from 'vue-property-decorator'
import Render from './App.html'

@Render
@Component({})

export default class App extends Vue {
    
    @Prop(Number) start!: number
    @Prop(({ default: 'default value' })) someString!: string
    
    number: number = 0

    get number_formatted() : string {
        return new Intl.NumberFormat().format(this.number + this.start) + this.someString
    }
    
    mounted() {
        window.setInterval(() => {
            this.number = this.number + this.start
        }, 1000)
    }
}