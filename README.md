# OneAcre

OneAcre is a mobile solution for farmers that allows them geotag their farmlands and get meterological data like weather and the likes on the geotagged space.

## Technologies Used

- React-Native

## Testing Locally

```bash
1. Git clone this repository `https://github.com/andrewinsoul/OneAcre.git`
2. Change your directory `cd OneAcre`
3. Install all dependencies by running "npm install"
4. Open two terminal windows, on one start your metro server by running "npx react-native start" and on the other terminal window build the files to run on Android platform by running "npx react-native run-android". Ensure you have your android device connected on your machine via USB and that debugging over USB is enabled on your android device
5. After these steps are completed, the application should load on your device.
```

N.B: Ensure you have a file called local.properties in the OneAcre/android folder with the following contents:

```
sdk.dir=PATH-TO-ANDROID-SDK-ON-YOUR-MACHINE
```

Click [here](https://reactnative.dev/docs/environment-setup) for instructions on how to install Android SDK and setup your machine for Android development

## Coding Style

- Airbnb: Airbnb is a coding style guide that guides developers to write clean codes
- Eslint - It was used to lint and enforce the Airbnb coding style
- ES6 Syntax - ES6 syntax is used and Babel is the transpiler that transpiles the code

## How to Contribute

````bash
- Fork this repository.
- Clone it.
- Create your feature branch on your local machine with ```git checkout -b your-feature-branch```
- Push your changes to your remote branch with ```git push origin your-feature-branch```
- Open a pull request to the develop branch, and describe how your feature works
````

Ensure your codes follow [AirBnB Javascript Styles Guide](https://github.com/airbnb/javascript)

## Features of application

- Users can geotag their faramland and the app automatically calculates the area of the farmland and get its meterological data
- Users can view the list of added farmlands
- Users can see a detailed view of a farmland
- Users can delete one/multiple farmlands. To delete a farmland, longpress that farmland and it will be marked. Tap the options to now delete the marked farmlands

## Author

- Andrew Okoye

## License

This project is licensed under the Apache License - see the [LICENSEWORD](LICENSE) file for details
