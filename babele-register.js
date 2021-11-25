Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'scum-and-villainy-es-es',
			lang: 'es',
			dir: 'compendium'
		}); 
  } // END if(typeof Babele  
});
