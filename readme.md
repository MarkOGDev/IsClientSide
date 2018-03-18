# IsClientSide

 

Use to check if JavaScript Code is on the client or server.


## Methods

Name                    | Type     | Return Type            | Usage                             | Action
---                     |  ---     | ---                    | ---                               | ---
true()                  | Static   | Boolean                | IsClientSide.true()               | Returns ***True*** if ***all*** our client side checks are true. Meaning code is executing on the client side (e.g. in the browser).
false()                 | Static   | Boolean                | IsClientSide.false()              | Returns ***True*** if ***any*** client side checks are false. Meaning code is executing on the server side (e.g. in Node).
windowAvailable()       | Static   | Boolean                | IsClientSide.windowAvailable()    | Returns ***True*** if Window Is available.
documentAvailable()     | Static   | Boolean                | IsClientSide.documentAvailable()  | Returns ***True*** if Document is Available.



 All functions return only True or False. No need to worry about 'undefined'. 

 You only really need the IsClientSide.false() function.



 ## TODO: Add Import statement  example

 ## Example 


Useful to stop client code executing on server side. 
 

```javascript
if (IsClientSide.false()) { 
    return null;
}
```
 You can just put this snippet of code before client side conditional imports OR at the top of client only functions etc.
 


  