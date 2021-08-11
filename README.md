# sample-widget-bundle

This repo holds a sample widget bundle. It's implemented with Parcel (v1). 

#### Widget Registration

Bundle root imports a `CustomWidget.js` component, which uses host application Browser API to register the widget instance:

```javascript
PremiumPortal.Dashboard.registerWidget(CustomWidget, { ... });
```

#### Dependency Sharing

Custom Widgets have to use the same exact React/ReactDOM version as the host application. This is achieved by using `parcel-plugin-externals`:
```javascript
// package.json
{
  // ...
  "externals": {
    "react": "window.PremiumPortal.React",
    "react-dom": "window.PremiumPortal.ReactDOM"
  }
  // ...
}
```