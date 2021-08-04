# sb_41-01-07_ReactRouterIntroductionExercise
 
## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

A vending machine with four possible selections and page swaps via react router. 

`VendingMachine` is the 'main' component and all vending item components -- `Candy`, `Chips`, `Soda`, and `Water` -- go back to the `VendingMachine` component.

`VendingMachineNav` is rendered by `App`. The 5 route links are defined in the `VendingMachineNav` component. `VendingMachineNav` renders `VendingMachine` by default because the `VendingMachine` component is at the url root, `/`.

Different backgrounds and changes to the navigation text and hover color were changed on each item's page.

## Additional Details

**Enhancements**
- Stayed with the basic assignment. Initial version actually had a NavBar on all the pages too but it was removed.

**Difficulties**
- Getting used to the heirarchy on this one. CSS styling of the components felt like a lot of repeated bits. 
- When there is no `id` for the main item `div`, the first `div` found by react -- the one in candy -- and it's css were used by the rest of the items.

 