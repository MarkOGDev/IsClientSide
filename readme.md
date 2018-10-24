
# IsClientSide

 

Use to check if JavaScript Code is on the client or server.

## Install
https://www.npmjs.com/package/is-client-side

```
npm install is-client-side
```

## Demo

[Demo Link](dist/demo/) 


## API

```javascript
IsClientSide.true()
```

* Return Type: Boolean 
* Action: Returns ***True*** if ***all*** our client side checks are true. Meaning code is executing on the client side (e.g. in the browser).

```javascript
IsClientSide.false()
```
* Return Type: Boolean 
* Action: Returns ***True*** if ***any*** client side checks are false. Meaning code is executing on the server side (e.g. in Node).
 
```javascript
IsClientSide.windowAvailable()
```
* Return Type: Boolean 
* Action: Returns ***True*** if Window Is available.
 
```javascript
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
 


 ## Typescript Building
 
We are using Webpack to compile typescript files and convert to Javascript that can run standard web browsers.

We don't want Visual Studio to compile the Typescript files.

Therefore we have we have both set the 'build action' of the Typescript files to 'None' 
and we have modified the project file IsClientSide.csproj to include a TypeScriptCompileBlocked element as below.

 ```xml
<PropertyGroup>
   <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>
   ...
<PropertyGroup/>
```