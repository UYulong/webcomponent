class SayHello extends HTMLElement {
  constructor() {
    super()

    const shadowDom = this.attachShadow({ mode: 'open' })

    const divEle = document.createElement('div')
    const styleEle = document.createElement('style')

    styleEle.innerText = `
      div {
        color: green;
        font-size: 30px;
        border: 1px solid green;
      }
    `

    shadowDom.appendChild(divEle)
    shadowDom.appendChild(styleEle)
  }

  static get observedAttributes() {
    return ['username']
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'username') {
      this._username = newVal
      this.render()
    }
  }

  render() {
    if (this._username) {
      this.shadowRoot.querySelector('div').innerHTML = `Hello ${this._username}`
    }
  }
}

const ele = customElements.define('wc-say-hello', SayHello)

export default ele