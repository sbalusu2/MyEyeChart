// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBCpcCNRtp8X6eyq2w1TLgzw4u5uYAcdbE',
    authDomain: 'myeyechart.firebaseapp.com',
    databaseURL: 'https://myeyechart.firebaseio.com',
    projectId: 'myeyechart',
    storageBucket: 'myeyechart.appspot.com',
    messagingSenderId: '446371709729'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
