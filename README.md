# React Beautiful - Boost up your React components
This project create **new React components** and add some **useful** feature to [Material](https://material-ui.com/) components **without touch the core base components**.

#Demo
If you want try the components, you can see **the demo** on **[official website](http://react-beautiful.marcocante.xyz/)**!
I'm working on **live demo** based on **Storybook**, give me little more time :)

## Installation
React beautiful is available as an [npm package](https://www.npmjs.com/package/react-beautiful).

```sh
// With npm
npm install react-beautiful

// With yarn
yarn add react-beautiful
```

## Usage
You can use destructuring or tree shaking approach.
Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Dialog, Image } from 'react-beautiful';

function App() {
  return (
    <React.Fragment>
      <Image height={180} src="http://..." grayed />
      <Dialog
        open
        title="Custom title"
        description="Custom description"
        showClose
      />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Components
React Beautiful have several components:

### Dialog
You can use all [Material Dialog props](https://material-ui.com/api/dialog/), but you can pass other props for render a complete Dialog component without include many others components like [DialogContent](https://material-ui.com/api/dialog-content/), [DialogContentText](https://material-ui.com/api/dialog-content-text/) and so on. Moreover: this component enable full screen mode automatically for small screen (thanks to [withMobileDialog Material HOC](https://material-ui.com/demos/dialogs/#responsive-full-screen)) and provide an icon button for close the Dialog. The props are:

Property | Type | Description
---|---|---
`title` | `string` or `node` | Set Dialog title by [DialogTitle](https://material-ui.com/api/dialog-title/) component
`titleClassName` | `string` | Set Dialog title class name
`description` | `string` or `node` | Set Dialog description by [DialogContentText](https://material-ui.com/api/dialog-content-text/) component
`descriptionClassName` | `string` | Set Dialog description class name
`footer` | `string` or `node` | Set Dialog footer by [DialogActions](https://material-ui.com/api/dialog-actions/) component. Accept string or node.
`footerClassName` | `string` | Set Dialog description class name
`showClose` | `boolean` | Create a close icon by [Fab](https://material-ui.com/api/fab/) component. Require `onClose` prop function

See [the demo!](http://react-beautiful.marcocante.xyz/dialog).

### Image
Image component is an easy and useful component for create a responsive image box with optionally grayed filter. The component's props are:

Property | Type | Description
---|---|---
`height` | `number` | Set image height
`src` | `string` | Set image url like `src` attribute on `img` html tag
`grayed` | `boolean` | Set gray filter. The filter will be remove on hover/focus
`persistent` | `boolean` | You can remove the responsive behaviour with this prop

See [the demo!](http://react-beautiful.marcocante.xyz/image).

### Snackbar
Snackbar component accept all [Material Snackbar props](https://material-ui.com/api/snackbar/), but you can pass other props for render a complete Snackbar component:

Property | Type | Description
---|---|---
`variant` | string `success` or `fail` | Set Snackbar style
`showClose` | `boolean` | Show a close icon by [IconButton](https://material-ui.com/api/icon-button/) component. Require `onClose` prop function

See [the demo!](http://react-beautiful.marcocante.xyz/snackbar).

### Highlight Card
Highlight Card component is a horizontal card with all you need to show a consistent and clear card. The component's props are:

Property | Type | Description
---|---|---
`className` |  `string` | Set card className
`primaryColor` |  `string` | Set primary card background color
`secondaryColor` |  `string` | Set secondary card background color
`icon` |  `node` | Set card icon on left side
`value` |  `string` or `node` |  Set card value on the right side
`label` |  `string` or `node` |  Set label value on the right side
`size` |  one of `large`, `normal` (default) or `small` |  Set size card and change value and label font size if you passed strings for them

See [the demo!](http://react-beautiful.marcocante.xyz/highlight-card).

