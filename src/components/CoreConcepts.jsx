import { CORE_CONCEPTS } from "../data-with-examples";
import CoreConcept from "./CoreConcept";
export default function CoreConcepts(){


return(<> <section id='core-concepts'>
    <h2>core concept</h2>
    <ul>
      {CORE_CONCEPTS.map((conceptItem) =>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
    </ul>
    </section></>);



}