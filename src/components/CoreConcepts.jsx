import { CORE_CONCEPTS } from "../data-with-examples";
import CoreConcept from "./CoreConcept";
import Section from "./Section";
export default function CoreConcepts(){


return(<>
 <Section id='core-concepts'>
    <h2>core concept</h2>
    <ul>
      {CORE_CONCEPTS.map((conceptItem) =>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
    </ul>
    </Section>
    </>);



}