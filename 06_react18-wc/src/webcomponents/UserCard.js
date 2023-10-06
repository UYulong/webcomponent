class UserCard extends HTMLElement {
  constructor() {
    super()

    const shadowDom = this.attachShadow({ mode: 'open' })

    const divEle = document.createElement('div')
    const nameEle = document.createElement('span')
    nameEle.id = 'name'
    const ageEle = document.createElement('span')
    ageEle.id = 'age'

    const btnEle = document.createElement('button')
    btnEle.id = 'btn'
    btnEle.innerText = 'click me'
    btnEle.addEventListener('click', () => {
      const event = new CustomEvent('myevent', {
        detail: {
          message: `hello, I come from UserCard. I am ${this._info.name}`
        }
      })

      this.dispatchEvent(event)
    })

    const styleEle = document.createElement('style')

    styleEle.innerText = `
      div {
        color: blue;
        font-size: 30px;
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
      }
    `

    divEle.appendChild(nameEle)
    divEle.appendChild(ageEle)
    divEle.appendChild(btnEle)

    shadowDom.appendChild(divEle)
    shadowDom.appendChild(styleEle)
  }

  static get observedAttributes() {
    return ['info']
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'info') {
      this._info = JSON.parse(newVal)
      this.render()
    }
  }

  render() {
    if (this._info) {
      const { name, age } = this._info
      this.shadowRoot.querySelector('#name').innerHTML = `name: ${name}`
      this.shadowRoot.querySelector('#age').innerHTML = `age: ${age}`
    }
  }
}

customElements.define('wc-user-card', UserCard)