import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";


export default function Examples(){
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



    return(  <Section id='examples'>
        <h2>examples</h2>
        <menu>
      <TabButton isSelected={selectedTopic === "components"} onSelect={() => selectHandle("components")}>Components</TabButton>
      <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => selectHandle("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === "props"} onSelect={() => selectHandle("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic === "state"} onSelect={() => selectHandle("state")}>State</TabButton>
        </menu>
        {tabContent}
        </Section>)
}