class HelloWorld extends HTMLElement {
  constructor() {
    super()

    const shadowDom = this.attachShadow({ mode: 'open' })

    const divEle = document.createElement('div')
    const styleEle = document.createElement('style')

    divEle.innerText = 'Hello webcomponent'
    styleEle.innerText = `
      div {
        color: red;
        font-size: 30px;
      }
    `
    
    shadowDom.appendChild(divEle)
    shadowDom.appendChild(styleEle)
  }
}

const ele = customElements.define('wc-hello-world', HelloWorld)
export default ele