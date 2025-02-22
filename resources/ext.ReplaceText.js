( function () {
	'use strict';

	function invertSelections() {
		var form = document.getElementById( 'choose_pages' ),
			numElements = form.elements.length,
			i,
			curElement;

		for ( i = 0; i < numElements; i++ ) {
			curElement = form.elements[ i ];

			if ( curElement.type === 'checkbox' && curElement.id !== 'create-redirect' &&
				curElement.id !== 'watch-pages' && curElement.id !== 'doAnnounce' ) {
				curElement.checked = !curElement.checked;
			}
		}
	}

	$( function () {
		var $checkboxes = $( '#powersearch input[id^=mw-search-ns]' );

		$( '.mw-replacetext-invert' ).on( 'click', invertSelections );

		// Create check all/none button
		$( '#mw-search-togglebox' ).append(
			$( '<label>' )
				.text( mw.msg( 'powersearch-togglelabel' ) )
		).append(
			$( '<input>' ).attr( 'type', 'button' )
				.attr( 'id', 'mw-search-toggleall' )
				.prop( 'value', mw.msg( 'powersearch-toggleall' ) )
				.on( 'click', function () {
					$checkboxes.prop( 'checked', true );
				} )
		).append(
			$( '<input>' ).attr( 'type', 'button' )
				.attr( 'id', 'mw-search-togglenone' )
				.prop( 'value', mw.msg( 'powersearch-togglenone' ) )
				.on( 'click', function () {
					$checkboxes.prop( 'checked', false );
				} )
		);
	} );
}() );
