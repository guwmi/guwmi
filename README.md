# Guwmi UI

Yup, you guessed it... Guwmi UI is yet another React UI component library. It is intended to be different in its uncomplicated implementation, super lightweight unpacked size, and zero additional required dependencies.

## Get started
### Documentation
Full documentation can be found at [https://www.guwmi.com](https://www.guwmi.com).
### Peer dependencies
Please note that `react` and `react-dom` are peer dependencies, meaning they must be installed before using Guwmi UI.
```
"peerDependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```
### Install
```
npm install @guwmi/ui@beta
```
### Implement
```
// import the components
import { Accordion, AccordionItem } from '@guwmi/ui';

export function AccordionComponent() { 
  return (
    <Accordion>
      <AccordionItem title="Item One" id="item-one">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </AccordionItem>
      <AccordionItem title="Item Two" id="item-two">
        <p>Lorem ipsum dolor in scelerisque nisl mi non ligula.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </AccordionItem>
    </Accordion>
  )
}
```