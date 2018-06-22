export function model (name, options) {
  return function (target, key, decorator) {
    // target.
    // return {
    //   value: this.state[name],
    //   onChange: (e) => {
    //     this.setState({
    //       [name]: e.target.value
    //     })
    //   }
    // }
  }
}
