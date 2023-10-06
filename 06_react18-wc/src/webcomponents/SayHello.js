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
        padding: 10px 20px;
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
      this.username = newVal
      this.render()
    }
  }

  render() {
    if (this.username) {
      this.shadowRoot.querySelector('div').innerHTML = `hello ${this.username}`
    }
  }
}

customElements.define('wc-say-hello', SayHello)