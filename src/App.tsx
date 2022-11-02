// npm i react-markdown
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

// TIP: To add a new line in markdown, add two spaces at the end of the line, the hit enter
// TIP: You can style each markdown element as standard HTML elements
// e.g. [link](...com) will be rendered as <a href='...com'>link</a>
// TIP: To add specificity, you can add a class to the ReactMarkdown component

function App() {
  const [markdown, setMarkdown] = useState(`# Hello
  world!  
  [link](#)`)
  return (
    <>
      {/* MARKDOWN INPUT */}
      <textarea
        value={markdown}
        onChange={(e) => {
          setMarkdown(e.target.value)
        }}
      />
      {/* RENDER MARKDOWN */}
      <ReactMarkdown className='markdownContainer' children={markdown} />
    </>
  )
}

export default App
