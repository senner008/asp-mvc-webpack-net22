
export default async function DynamicLoadjQuery(callback) {
    if ( !window.$ ) {
        import('jquery').then(jquery => {
          console.log('imported')
          window.jQuery = jquery.default;
          window.$ = jquery.default;
          callback()
        });
      }
    else {
        callback();
    }
}