import { mount } from 'svelte'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import App from './App.svelte'
import './interface'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app