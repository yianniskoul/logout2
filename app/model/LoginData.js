Ext.define( 'Sencha_mobile.model.LoginData', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: [
           // {name: 'clientID', type: 'string'},
            {name: 'Company', type: 'string'},
            {name: 'Companyname', type: 'string'},
            {name: 'Branch', type: 'string'},
            {name: 'Branchname', type: 'string'},
            {name: 'Module', type: 'string'},
            {name: 'Modulename', type: 'string'},
            {name: 'Refid', type: 'string'},
            {name: 'Refidname', type: 'string'}
        ]
			
	}
});

