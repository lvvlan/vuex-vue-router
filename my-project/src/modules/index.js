import moduleA from './moduleA'
import moduleB from './moduleB'

export default {
  MA: {
    namespaced: true,
    ...moduleA
  },
  MB: {
    namespaced: true,
    ...moduleB
  }
}
