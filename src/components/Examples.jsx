import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";


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


    return(  
    <Section id='examples' title="Examples">
      <Tabs ButtonsContainer="menu" buttons={<>  <TabButton isSelected={selectedTopic === "components"} onClick={() => selectHandle("components")}>Components</TabButton>
      <TabButton isSelected={selectedTopic === "jsx"} onClick={() => selectHandle("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === "props"} onClick={() => selectHandle("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic === "state"} onClick={() => selectHandle("state")}>State</TabButton></>}>
      {tabContent}  
      </Tabs>
     </Section>)
}