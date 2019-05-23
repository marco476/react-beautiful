# Beautiful - Boost up your React components

Beautiful project create **new react component** and add some **useful** feature to [Material](https://material-ui.com/) components **without touch the core base components**.
If you want try the components, you can see **the demo** on **[official website](http://react-beautiful.marcocante.xyz/)**!

### Dialog
Dialog component accept [all Material Dialog props](https://material-ui.com/api/dialog/), but you can pass other props for render a **complete Dialog** component without include many others components like [DialogContent](https://material-ui.com/api/dialog-content/), [DialogContentText](https://material-ui.com/api/dialog-content-text/) and so on. Moreover: this component enable full screen mode automatically for small screen (thanks to [withMobileDialog Material HOC](https://material-ui.com/demos/dialogs/#responsive-full-screen)) and provide an icon button for close the Dialog.

The new props are:
- **title**: set Dialog title by [DialogTitle](https://material-ui.com/api/dialog-title/) component. Accept **string** or **node**.
- **titleClassName**: set Dialog title class name. Accept **string**.
- **description**:  set Dialog description by [DialogContentText](https://material-ui.com/api/dialog-content-text/) component. Accept **string** or **node**.
- **descriptionClassName**: set Dialog description class name. Accept **string**.
- **footer**: set Dialog footer by [DialogActions](https://material-ui.com/api/dialog-actions/) component. Accept **string** or **node**.
- **footerClassName**: set Dialog description class name. Accept **string**.
- **showClose**: create a close icon by [Fab](https://material-ui.com/api/fab/) component. Accept a **boolean** value. Require **onClose** prop function.

See [**the demo**](http://react-beautiful.marcocante.xyz/dialog)!

### Image
Image component is an easy and useful component for create a responsive image box with optionally grayed filter. The component's props are:
- **height**: set image height. Accept a **number**.
- **src**: set image url like *src* attribute on `img` html tag. Accept a **string**.
- **grayed**: set gray filter. The filter will be remove on hover/focus. Accept a **boolean**.
- **persistent**: you can remove the responsive behaviour with this prop. Accept a **boolean**.

See [**the demo**](http://react-beautiful.marcocante.xyz/image)!

### Snackbar
Snackbar component accept **[all Material Snackbar props](https://material-ui.com/api/snackbar/)**, but you can pass other props for render a **complete Snackbar** component.

The new props are:
- **variant**: set Snackbar style. The prop accept one of this values:
    - **success**: good for a success Snackbar
    - **fail**: good fos a fail/error Snackbar
- **showClose**: create a close icon by [IconButton](https://material-ui.com/api/icon-button/) component. Accept a **boolean** value. Require **onExited** prop function.

See [**the demo**](http://react-beautiful.marcocante.xyz/snackbar)!


### Highlight Card
Highlight Card component is a horizontal card with all you need to show a consistent and clear card. The component's props are:
- **className**: set card className. Accept a **string**.
- **color**: set card background color. Accept a **string** or a map with **800** and **600** keys, like **[Material colors](https://v3-9-0.material-ui.com/style/color/)**.
- **icon**: set card icon on left side. Accept a **node**.
- **value**: set card value on the right side. Accept a **node** or a **string**.
- **label**: set label value on the right side. Accept a **node** or a **string**.
- **size**: set size card and change _value_ and _label_ font size if you passed strings for them.

See [**the demo**](http://react-beautiful.marcocante.xyz/highlight-card)!
