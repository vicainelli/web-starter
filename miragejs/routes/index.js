export default function routes() {
  this.namespace = 'api'
  this.timing = 2000
  this.resource('users')
  this.resource('products')
}
