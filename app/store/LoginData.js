Ext.define("Sencha_mobile.store.LoginData", {
        extend: "Ext.data.Store",
        requires: ['Sencha_mobile.model.LoginData', 'Ext.data.proxy.LocalStorage'
       
    ],
    config: {
        model: "Sencha_mobile.model.LoginData",
        storeId: 'logindataStore',
        proxy: {
            type: "localstorage",
            reader: {
                type: "json",
                rootProperty: "LoginData"
            }
        },
        autoLoad: true
    },
    count: function () //ti sinartisi auti tin orisa egw
    {
        return this.getCount();

    },
    total: function ()
    {
        return this.getTotalCount();
    }
    
    
} );