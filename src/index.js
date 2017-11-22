import {
  Button,
  CheckboxGroup
} from './module'

function install(Vue) {
  if (install.installed) {
    return
  }
  const components = [
    Button,
    CheckboxGroup
  ]
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const onion = {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default onion
