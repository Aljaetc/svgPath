import React, {useEffect} from 'react';
import './App.css';

function App() {

  function fillSvgPaths() {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    let paths = document.querySelectorAll('path')

    for (var i = 0; i < paths.length; i++) {
      let path = paths[i]

      let pathLength = path.getTotalLength()
      
      path.style.strokeDasharray = pathLength.toString()
      path.style.strokeDashoffset = pathLength.toString()

      let drawLength = pathLength * scrollPercentage

      path.style.strokeDashoffset = (pathLength - drawLength).toString()
    }
  }

  useEffect(() => {
    fillSvgPaths()
    document.addEventListener('scroll', fillSvgPaths)
  })

  return (
    <div className="App">
      <section>Oh, dear, I should be so late</section>
      <section>I'm really interesting in how deep is the rubbit hole</section>
      <section>one more section</section>
      <svg width="544" height="311" viewBox="0 0 544 311" fill="none" >
        <path d="M498 165C458 211.333 343.8 264.2 207 105L136 28C102 -32 56.6 20.4 31 54C-29 150 17 136 26 156L126 230C193 271 327 341.2 327 294C324.6 275.6 470 286.333 543 294L498 165Z" stroke="black"/>
      </svg>
    </div>
  );
}

export default App;
