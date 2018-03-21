# IsClientSide

 

Use to check if JavaScript Code is on the client or server.

# Install
https://www.npmjs.com/package/is-client-side

```
npm install is-client-side
```


## API

```
IsClientSide.true()
```

* Return Type: Boolean 
* Action: Returns ***True*** if ***all*** our client side checks are true. Meaning code is executing on the client side (e.g. in the browser).

```
IsClientSide.false()
```
* Return Type: Boolean 
* Action: Returns ***True*** if ***any*** client side checks are false. Meaning code is executing on the server side (e.g. in Node).
* 
```
IsClientSide.windowAvailable()
```
* Return Type: Boolean 
* Action: Returns ***True*** if Window Is available.
* 
```
IsClientSide.documentAvailable()
```
* Return Type: Boolean 
* Action:  Returns ***True*** if Document is Available.

 

 All functions return only True or False. No need to worry about 'undefined'. 

 You only really need the IsClientSide.false() function.
 

 ## Example 



Useful to stop client code executing on server side. 
 

```javascript
import { IsClientSide } from 'is-client-side';

if (IsClientSide.false()) { 
    return null;
}
```
 You can just put this snippet of code before client side conditional imports OR at the top of client only functions etc.
 


  