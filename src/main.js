import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './style/global.less'
import router from './router'

const modules = import.meta.glob('./components/element/*.vue')
const app = createApp(App)
Object.keys(modules).forEach(key => {
    const name = key.match(/ment\/(.+)\.vue/)[1]
	app.component('k-'+ name, defineAsyncComponent(modules[key]))
})

app.use(router).mount('#app')
