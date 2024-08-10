import componentİmage from './assets/components.png';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data-with-examples';
import { CORE_CONCEPTS } from './data-with-examples';


function App() {

  const [selectedTopic, setSelectedTopic] = useState(null);

  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic){
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
    </div>) 

  }

  function selectHandle(selectedButton){
    setSelectedTopic(selectedButton);
    
};

  return (
    <div>
      <Header/>
      <main>
      <section id='core-concepts'>
      <h2>core concept</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) =>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
      </ul>
      </section>
      <section id='examples'>
      <h2>examples</h2>
      <menu>
    <TabButton isSelected={selectedTopic === "components"} onSelect={() => selectHandle("components")}>Components</TabButton>
    <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => selectHandle("jsx")}>JSX</TabButton>
    <TabButton isSelected={selectedTopic === "props"} onSelect={() => selectHandle("props")}>Props</TabButton>
    <TabButton isSelected={selectedTopic === "state"} onSelect={() => selectHandle("state")}>State</TabButton>
      </menu>
      {tabContent}
      </section>
      </main>

    </div>
  );
}

export default App;
