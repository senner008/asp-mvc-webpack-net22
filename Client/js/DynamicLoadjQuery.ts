
// export default async function DynamicLoadjQuery(callback: () => void) {
//     if ( !window.$ ) {
//         require('jquery').then(jquery => {
//           // console.log('imported')
//           window.jQuery = jquery.default;
//           window.$ = jquery.default;
//           callback();
//         });
//       }
//     else {
//         callback();
//     }
// }