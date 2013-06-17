Ext.define('Sencha_mobile.view.Nav', {
    extend: 'Ext.navigation.View',
    xtype: 'navigationview',
    config: {
        itemId:'NavView',
        title: 'Settings',
        iconCls: 'settings',
        layout: {
              type: 'card',
              animation: {
              type: 'slide',
              direction: 'left',
              duration: 1000
              }
          },
        //we only give it one item by default, which will be the only item in the 'stack' when it loads
        items: [

            
            {
                //items can have titles
                title: 'Login Screen',
                padding: 10,
                xtype: 'loginview'//kai tou vazw to loginview
             }

                   
                ]
            }
        
    }
);