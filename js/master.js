/* JavaScript Master File */
	var Hamburger = {
		navToggle: document .querySelector( '#search .menu-bar' ),
		nav: document .querySelector( 'header nav.dropdown' ),
      mq768: '',
      displayed: false,

      init: function() {
         if( matchMedia ) {
            this .mq768 = window .matchMedia( "( min-width: 768px )" );
            this .mq768 .addListener( Hamburger .mqChange );
            Hamburger .mqChange( this .mq768 );
         }
      },
      mqChange: function( mq ) {
         // Media Query Change
         if ( mq .matches ) {
            // window width is at least 768px
            Hamburger .show();
            this .displayed = true;
            console .log( 'Show Menu', this .displayed );
         } else {
            // window width is less than 768px
            Hamburger .hide();
            this .displayed = false;
            console .log( 'Hide Menu', this .displayed );
         }
      },
		hide: function() {
			this .nav .style .display = 'none';
		},
      show: function() {
			this .nav .style .display = 'flex';
		},
      changeState: function() {
         if( this .displayed ) {
            this .displayed = false;
         }
         else {
            this .displayed = true;
         }
      },
      action: function( e ) {
         e .preventDefault();

         if( this .displayed ) {
            Hamburger .show( e );
         }
         else {
            Hamburger .hide( e );
         }
      }

	};

   window .onload = function() {
      Hamburger .init();
      Hamburger .navToggle .addEventListener( 'click', function( e ) {
         Hamburger .changeState();
         console .log( 'Click!', Hamburger .displayed );
         Hamburger .action( e );
      });
      Hamburger .nav .addEventListener( 'click', function( e ) {
         e .preventDefault();
         Hamburger .changeState();
         console .log( 'Click! Item Main Menu', Hamburger .displayed );
         Hamburger .hide();
      });
   }
