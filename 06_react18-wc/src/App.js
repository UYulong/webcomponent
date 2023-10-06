/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import WcHelloWorld from './webcomponents/HelloWorld'
import WcSayHello from './webcomponents/SayHello'
import WcUserCard from './webcomponents/UserCard'

const App = () => {
  const [username, setUsername] = useState('太上老君')
  const [info, setInfo] = useState({
    name: '张三丰',
    age: 1000
  })

  const userCardRef = useRef()

  const changeUsername = () => {
    setTimeout(() => {
      setUsername('快快显灵')
    }, 3000);
  }

  useEffect(() => {
    changeUsername()
  }, [])

  useEffect(() => {
    const domRef = userCardRef.current
    const handleReceiveEvent = ({ detail }) => {
      console.log(detail.message);
    }

    if (domRef) {
      domRef.addEventListener('myevent', handleReceiveEvent)
    }


    return () => {
      if (domRef) {
        domRef.removeEventListener('myevent', handleReceiveEvent)
      }
    }
  }, [userCardRef])

  return (
    <div className="App">
      <wc-hello-world />

      <hr />

      <wc-say-hello username={username} />

      <hr />

      <wc-user-card ref={userCardRef} info={JSON.stringify(info)} />
    </div>
  );
}

export default App;
