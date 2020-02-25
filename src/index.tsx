import { render } from 'react-dom'
import React, { FC } from 'react'
export const HelloMessage: FC<{ name: string }> = ({ name }) => {
  var i18n = 'Hello'
  console.log('test')

  return (
    <div>
      <Header />
      <div className="container">
        <h1>
          {i18n} {name}
        </h1>
      </div>
      <Footer />
    </div>
  )
}

render(<HelloMessage name="Yomi" />, document.getElementById('app'))
