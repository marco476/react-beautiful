# Beautiful - Boost up your Material components

Beautiful project add some **useful** feature to **[Material](https://material-ui.com/)** components **without touch the core base components**.

### Dialog
Dialog component accept **[all Material Dialog props](https://material-ui.com/api/dialog/)**, but you can pass other props for render a **complete Dialog** component without include many others components like [DialogContent](https://material-ui.com/api/dialog-content/), [DialogContentText](https://material-ui.com/api/dialog-content-text/) and so on. Moreover: this component enable full screen mode automatically for small screen (thanks to [withMobileDialog Material HOC](https://material-ui.com/demos/dialogs/#responsive-full-screen)) and provide an icon button for close the Dialog.

The new props are:
- **title**: set Dialog title by [DialogTitle](https://material-ui.com/api/dialog-title/) component. Accept **string** or **node**.
- **titleClassName**: set Dialog title class name. Accept **string**.
- **description**:  set Dialog description by [DialogContentText](https://material-ui.com/api/dialog-content-text/) component. Accept **string** or **node**.
- **descriptionClassName**: set Dialog description class name. Accept **string**.
- **footer**: set Dialog footer by [DialogActions](https://material-ui.com/api/dialog-actions/) component. Accept **string** or **node**.
- **footerClassName**: set Dialog description class name. Accept **string**.
- **showClose**: create a close icon by [Fab](https://material-ui.com/api/fab/) component. Accept a **boolean** value. Require **onClose** prop function.

### Snackbar
Snackbar component accept **[all Material Snackbar props](https://material-ui.com/api/snackbar/)**, but you can pass other props for render a **complete Snackbar** component.

The new props are:
- **variant**: set Snackbar style. The prop accept one of this values:
    - **success**: good for a success Snackbar
    - **fail**: good fos a fail/error Snackbar
- **showClose**: create a close icon by [IconButton](https://material-ui.com/api/icon-button/) component. Accept a **boolean** value. Require **onExited** prop function.