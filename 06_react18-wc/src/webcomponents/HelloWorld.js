class HellowWorld extends HTMLElement {
  constructor() {
    super()

    const shadowDom = this.attachShadow({ mode: 'open' })

    const divEle = document.createElement('div')
    const styleEle = document.createElement('style')

    divEle.innerHTML = 'Hello World'
    styleEle.innerText = `
      div {
        color: red;
        font-size: 30px;
        padding: 10px 20px;
        border: 1px solid red;
      }
    `

    shadowDom.appendChild(divEle)
    shadowDom.appendChild(styleEle)
  }
}

customElements.define('wc-hello-world', HellowWorld)