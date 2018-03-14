# IsClientSide

 

Use to check if JavaScript Code is on the client or server.


## Methods

Name                    | Type     | Return Type            | Usage                             | Action
---                     |  ---     | ---                    | ---                               | ---
windowAvailable()       | Static   | Boolean                | IsClientSide.windowAvailable()    | Returns True if Window Is available
documentAvailable()     | Static   | Boolean                | IsClientSide.documentAvailable()  | Returns True if Document is Available
true()                  | Static   | Boolean                | IsClientSide.true()               | Returns ***True*** if ***all*** our client side checks are true.
false()                 | Static   | Boolean                | IsClientSide.false()              | Returns ***False*** if ***any*** client side checks are false.
 

 ## TypeScript Example

Usefull to stop client code executing on server side.

```javascript
if (IsClientSide.false()) { 
    return null;
}
```
 


