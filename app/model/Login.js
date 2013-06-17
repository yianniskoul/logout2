Ext.define('Sencha_mobile.model.Login', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'service',  type: 'string', defaultValue: 'login'},
            {name: 'username', type: 'string'},
            {name: 'password', type: 'string'},
            {name: 'appid', type: 'string'}
        ],
    
	
	  validations: [
            {type: 'length', field: 'service',     min: 1},
            {type: 'length', field: 'username',   min: 1},
            {type: 'length', field: 'password', min: 1},
            {type: 'length', field: 'appid', min: 1}
	  ]	
		
			
	}
});