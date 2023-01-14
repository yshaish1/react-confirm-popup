<h1 align="center">
   <b>
        <a href="https://github.com/yshaish1/react-confirm-popup">React Confirm Popup</a><br>
    </b>
</h1>

<p align="center">React component for Confirm Popup</p>

<p align="center">
    <a href="https://github.com/yshaish1/react-confirm-popup"><b>Github</b></a> •
    <a href="https://www.npmjs.com/package/react-confirm-popup"><b>npm</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-confirm-popup.svg?style=flat-square)](https://www.npmjs.com/package/react-confirm-popup)
[![npm downloads](https://img.shields.io/npm/dm/react-confirm-popup.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-confirm-popup)
[![Known Vulnerabilities](https://snyk.io/test/npm/react-confirm-popup/badge.svg)](https://snyk.io/test/npm/react-confirm-popup)


![](https://github.com/yshaish1/react-confirm-popup/blob/main/package/react-confirm-popup.gif?raw=true)

</div>

## Features

- Create popup for confirm actions with React.js.
- Custom trigger button.
- Custom Confirm/Cancel functions.
- Modern UI

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

### Package manager

Using npm:

```bash
$ npm install react-confirm-popup
```

Using yarn:

```bash
$ yarn add react-confirm-popup
```

Once the package is installed, you can import the library using `import` approach:

```js
import ReactConfirmPopup from 'react-confirm-popup';
```
> **Note** `next.js` for next.js projects you need to add the this code to `next.config.js` 
> to make sure the project will build with no errors.

```js
if (typeof require !=== "undefined") {
  require.extensions[".css"] = (file) => {}
}
```

## Example

```js
import React from 'react';
import ReactConfirmPopup from 'react-confirm-popup';

function App() {
  return (
    <ReactConfirmPopup trigger={<button>Click Here</button>} />
  );
}

export default App;
```

Advanced use 

```js
<ReactConfirmPopup
    trigger={<button>Click Here</button>}
    title="Are you sure you want to delete?"
    text={
        <div className="">
        Are you sure you should delete these items permanently?
        </div>
    }
    confirmText="Yea! sure"
    cancelText="Nope!"
    onConfirmClicked={someConfirmHandleFunction}
    onCancelClicked={someCancelHandleFunction}
    />
```

## Credits

Thanks to my family and friends for the support all over the years

## License

[MIT](LICENSE)