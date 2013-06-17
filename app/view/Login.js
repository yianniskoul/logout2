Ext.define('Sencha_mobile.view.Login', {
    extend: 'Ext.form.Panel',
    alias: "widget.loginview",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'Login',
        hideAnimation: 'slideOut',
        showAnimation: 'slideIn',

        items: [
                    {
						//arxika vazei ta images alla auta ta vlepei to index.html kai oxi to javascript arxeio	
                        xtype: 'image',
                        src:  'resources/images/LockOpen.png',
                        style:  'width:80px;height:80px;margin:auto'
                    },
                    {
                        xtype: 'label',//to error label to opoio to xrhsimopoiw gia na kanw to validation ean ta pedia einai simplirwmena
                        html: 'Login failed. Please enter the correct credentials.',
                        itemId: 'signInFailedLabel',
                        hidden: true,  // auto to error message einai hidden kai emfanizetai mono otan 
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        style: 'color:#990000;margin:5px 0px;'
                    },
                    {
                        xtype: 'fieldset',//i forma tis prwtis othonis pou exei 
                        title: 'Service Login',
                        items: [
                            {
                                xtype: 'textfield',//ena textfield gia to username
                                placeHolder: 'Username',
                                itemId: 'userNameTextField',
                                name: 'userNameTextField',
                                required: true
                            },
							{
                                xtype: 'textfield',//ena textfield gia to appid
                                placeHolder: 'AppID',
                                itemId: 'appID',
                                name: 'appID',
                                required: true
                            },
                            {
                                xtype: 'passwordfield',//ena password field
                                placeHolder: 'Password',
                                itemId: 'passwordTextField',
                                name: 'passwordTextField',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'button',//kai ena button gia na kanei login
                        itemId: 'logInButton',
                        ui: 'action',
//                      padding: '10px',
                        width: '200px',
                        margin: '5px auto',
                        text: 'Log In'

                    }
         ],

         
		 
	listeners: [{    //vazw listener sto login button kai exw anafora se auto me tin itemId idiotita tou  button
		id: 'logInButton',
		event: 'tap',
		fn: 'onLogInButtonTap'
				}]

    }
});






















/*






Ext.define('Sencha_mobile.view.Login', {
    extend: 'Ext.tab.Panel',
    xtype: 'login',
    requires: [
        'Ext.TitleBar',
        'Ext.form.*'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                id: 'fldLoginServer',
                items: [
                        {
                            xtype: 'urlfield',
                            id: 'loginServer',
                            name: 'loginServer',
                            label: 'Server',
                            listeners: {
                                change: function (field, newValue, oldValue) {
                                    var result = newValue;
                                    if (result.indexOf(".") == -1 && (!Ext.isEmpty(result))) {
                                        result = result + ".oncloud.gr"
                                    }

                                    field.setValue(result);

                                }
                            }
                        }
                    ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});


*/
