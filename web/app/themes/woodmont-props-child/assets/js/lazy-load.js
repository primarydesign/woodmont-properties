$( function () {
  $( '.lazy' )
    .Lazy( {
      // effect: "fadeIn",
      // effectTime: 1000,
      delay: 1000,
      onError: function ( element ) {
        console.log( 'image could not be loaded' );
      }
    } );

  $( '.staff__lazy-load, .prprty-type__lazy-load, .portfolio__lazy-load' )
    .Lazy( {
      delay: 1000,
      afterLoad: function ( element ) {
        element.css( 'background-size', 'cover' );
      },
      onError: function ( element ) {
        console.log( 'image could not be loaded' );
      }
    } )
} );
