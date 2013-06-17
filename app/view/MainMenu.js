Ext.define( 'Sencha_mobile.view.MainMenu', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar', 'Ext.data.Store', 'Ext.List', 'Sencha_mobile.store.LoginData', 'Sencha_mobile.view.Apografi', 'Sencha_mobile.view.Login'],
    alias: "widget.mmview",
    config: {
       
       
        hideAnimation: 'slideOut',
        showAnimation: 'slideIn',
        scrollable: true,
        layout: 'vbox',

        items: [{  //arxika vazw 2 titlebars mia panw
           layout:'vbox',
        }, {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Μενού'

        },
       {
           xtype: 'toolbar',//kai mia titlebar katw
           docked: 'bottom',
           items: [
           {
               text: 'Log Out',
               handler: function ()  //edw einai o handler gia to logout button
               {
                 
                   
                   Sencha_mobile.app.client_ID_login = 'start_id';
                   Sencha_mobile.app.client_ID_auth = 'start_id';
                   Sencha_mobile.app.login_username = '';
                   Sencha_mobile.app.login_password = '';
                   Sencha_mobile.app.login_appid = '';
                 
               

                   Ext.Viewport.setActiveItem( { xtype: 'loginview' } ); //ki edw allazei to view sto Apografi
                  
               
                   
      
               }
           }
           ]
       },
      
                            {
                                xtype: 'button',
                                html: 'Απογραφή',
                                margin: 10,
                                text: 'MyButton',
                                handler: function ()
                                {
                                    var apografi = Ext.create( 'Sencha_mobile.view.Apografi' );

                       

                                    Ext.Viewport.setActiveItem( apografi ); //ki edw allazei to view sto Apografi

                                }
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 1',
                                margin: 10,
                                text: 'MyButton'
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 2',
                                margin: 10,
                                text: 'MyButton'
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 3',
                                margin: 10,
                                text: 'MyButton'
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 4',
                                margin: 10,
                                text: 'MyButton'
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 5',
                                margin: 10,
                                text: 'MyButton'
                            },
                            {
                                xtype: 'button',
                                html: 'Menu item 6',
                                margin: 10,
                                text: 'MyButton'
                            },
                           
     



        ]

        


    },

    constructor: function ()
    {

           this.callParent( arguments );


    },


    initialize: function ()
    {
        
/*
        this.add( {
            xtype: 'button', text: 'Εταιρία 1', flex: '1', width: '200px', height:'30px', style: { 'max-height':'30px' }, //koumpi gia to Etairia 1
            margin: '5px auto', ui: 'round',
            handler: function ()//Ston handler tou koumpiou autou kane ajax request gia na parw cilent_ID authenticate kai sti sinexeia orizw mia klasi kai tin kanw energo view molia pathithei to koumpi
            {
                
                */
               
   
                
                var authObj = {  //kai ftiaxnw ena object pou to pernaw san parametro gia na parw authenticate client ID
                    "service": "authenticate",
                    "clientID": Sencha_mobile.app.client_ID_login,
                    "COMPANY": "1000",
                    "BRANCH": "1000",
                    "MODULE": "0",
                    "REFID": "1",
                    "USERID": "1"
                };

              
              

                
                //AJAX request gia authenticate client_ID
                Ext.Ajax.request( {
                    url: 'http://localhost:81/s1services',
                    method: 'POST',
                    withCredentials: false,
                    useDefaultXhrHeader: false,
                    params: Ext.JSON.encode( authObj ), //edw kanw encode ta formfields kai ta dinw san parametrous
                    //	callback: function () { //edw apla vazw ki ena call back na ektelestei - den kserw ti tha to kanw tha dw

                    //		alert('callback is called!');

                    //	},
                    success: function ( response )
                    {

                    

                        var auth_check = Ext.JSON.decode( response.responseText );

                        Sencha_mobile.app.client_ID_auth =  auth_check.clientID ;    //kai vazw stin global metavliti auth to client_ID

               

                    }

                } );//AJAX request

                


                
            

               




 //           }//handler
    //    } );


        /*

        to idio me to apo panw - eftiaksa ena to panw

        this.add( {
            xtype: 'button', text: 'Εταιρία 2', flex: '1', width: '200px', style: { 'max-height': '30px' }, 
            margin: '5px auto', ui: 'round',
            handler: function ()
            {
                alert( 'You clicked the button with id ' + this.getId() );
            }
        } );

        */

       // this.homeButton.on( 'tap', this.onMyButtonTap, this );


        /*

        //Edw kalw to store apla den mporei na mou ferei to swsto arithmo effrafwn sto store.

        var store1 = Ext.getStore( 'logindataStore' );

        store1.sync();

        var a = store1.count();

        console.log( a );
        */




       // store1.load( console.log( store1.getTotalCount() ) );






   //    this.down( '#dokimi' ).setLabel( "eleos" );------> simantiko!
      

        /* auto einai para poly kalo, mporw na vazw mesa sto panel pragmata, oti thelw  
        this.add( {
            xtype: 'emailfield',
            name: 'email',
            label: 'pr'
        } );
      */
    },


    

   









} );









