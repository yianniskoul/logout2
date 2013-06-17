/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Sencha_mobile': 'app'
});
//</debug>

Ext.application({
    name: 'Sencha_mobile',
    phoneStartupScreen: 'resources/images/start.jpg',
    tabletStartupScreen: 'resources/images/start.jpg',
    client_ID_login: 'start_id',
    client_ID_auth: 'start_id',
    login_username:'',
    login_password:'',
    login_appid:'',
    array_apo_items: [],


    requires: [
        'Ext.MessageBox',
    ],


    views: [	//exw dilwsei to Login view
        'Login', 'MainMenu', 'Apografi'
    ],
	
	controllers: [  //exw dilwsei kai to controller pou eftiaksa gia to login - prepei na dilwnontai ta panta mesa sto app.js
		'Login_Controller', 'Eidi_Controller'
	],
	
models: [
	'Login', 'LoginData'
],

stores: [
'LoginData'
],
	
	/*
	profiles: [ //edw orizw profiles gia na fainetai diaforetika se thlefwno i se tablet
		'Phone', 
		'Tablet'
		
	],
	*/

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function ()
    {


      

			Ext.Viewport.add([
	
              { xtype: 'loginview' }
            
			]);//Ext.Viewport.add



	},



    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
