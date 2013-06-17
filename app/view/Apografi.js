Ext.define( 'Sencha_mobile.view.Apografi', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.field.Select'],
    

    config: {
        id: 'test',
        scrollable: true,
        hideAnimation: 'slideOut',
        showAnimation: 'slideIn',
        items: [
                      {
                xtype: 'titlebar', //vazw ena titlebar panw
                docked: 'top',
                title: 'Απογραφή'
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
                          Ext.Viewport.remove( Ext.Viewport.getActiveItem(), true );//kanw destroy to active item
                          Ext.Viewport.setActiveItem( { xtype: 'loginview' } ); //ki edw allazei to view sto Apografi


                      }
                  }
                  ]
              }
        ]
    },
    initialize: function ()
    {

       

        var getCDobject = { //OBJECT POU TO PERNAW SAN PARAMETRO GIA NA FERW TIS SEIRES
            "Service": "getCacheData",
            "clientID": Sencha_mobile.app.client_ID_auth,
            "Table": "SERIES,SOSOURCE=1151",
            "DeviceId": null,
            "appId": "157"
        }

        var getCDobject2 = { //OBJECT POU TO PERNAW SAN PARAMETRO GIA NA FERW TIS APOTHIKES
            "Service": "getCacheData",
            "clientID": Sencha_mobile.app.client_ID_auth,
            "Table": "WHOUSE",
            "DeviceId": null,
            "appId": "157"
        }

     

        Ext.Ajax.request( {// AUTO EINAI REQUEST GIA NA FERW TIS SEIRES
            url: 'http://localhost:81/s1services',
            method: 'POST',
            withCredentials: false,
            useDefaultXhrHeader: false,
            params: Ext.JSON.encode( getCDobject ), //edw kanw encode ta formfields kai ta dinw san parametrous
            async: false,
           
 
            //	callback: function () { //edw apla vazw ki ena call back na ektelestei - den kserw ti tha to kanw tha dw

            //		alert('callback is called!');

            //	},
            success: function ( response )
            {




                var series = Ext.JSON.decode( response.responseText );


                var t = Ext.JSON.decode( JSON.stringify( series.data.SERIES ) );


                options_for_select = "[{ text:'', value:''},";


                for ( x in t )
                {
                   

                        options_for_select += "{ text:'" + t[x].NAME + "', value:'" + t[x].SERIES + "'},";


                    
                }

                options_for_select += ']';

             
               
                var panel = Ext.ComponentQuery.query( '#test' );
               
                var y = Ext.JSON.decode( options_for_select );



                panel[0].add( {
                    id: 'select1',
                    xtype: 'selectfield',
                    margin: 10,
                    label: 'Σειρά',
                    options: y,
                    showAnimation: 'slideIn'
          
                } );

                panel[0].add( {
                    id: 'kataxorisi_btn',
                    xtype: 'button',
                    ui: "action",
                    margin: 10,
                    showAnimation: 'slideIn',
                    text:"Καταχώρηση",
                    docked:"bottom"

                } );

                
            }



        } );//Ext.Ajax.Request


        Ext.Ajax.request( {// AUTO EINAI REQUEST GIA NA FERW TOYS APOTHIKEFTIKOUS XWROUS
            url: 'http://localhost:81/s1services',
            method: 'POST',
            withCredentials: false,
            useDefaultXhrHeader: false,
            params: Ext.JSON.encode( getCDobject2 ), //edw kanw encode ta formfields kai ta dinw san parametrous
            async: false,

            //	callback: function () { //edw apla vazw ki ena call back na ektelestei - den kserw ti tha to kanw tha dw

            //		alert('callback is called!');

            //	},
            success: function ( response )
            {




                var r = Ext.JSON.decode( response.responseText );


                var t = Ext.JSON.decode( JSON.stringify( r.data.WHOUSE ) );

               


                options_for_select = "[{ text:'', value:''},";


                for ( x in t )
                {
                    

                    options_for_select += "{ text:'" + t[x].NAME + "', value:'" + t[x].WHOUSE + "'},";

                }

                options_for_select += ']';



                var panel = Ext.ComponentQuery.query( '#test' );

                var y = Ext.JSON.decode( options_for_select );



                panel[0].add( {
                    id: 'select2',
                    xtype: 'selectfield',
                    margin: 10,
                    label: 'Αποθήκη',
                    options: y,
                    showAnimation: 'slideIn'
               
                } );

               
            }//success

            

        } );//Ext.Ajax.Request gia apothikeftikous xwrous ( WHOUSE )



        //edw kanw ena pseftovalidation - ean kanei validate tote tha emfanisw ena text field
       


        var form = Ext.ComponentQuery.query( '#test' )[0];
 
        form.add(  {
            xtype: 'button',
            margin: 10,
            text: 'Επιλογή σειράς και αποθήκης',
            docked:'bottom',
            handler: function ()
            {
                var form = Ext.ComponentQuery.query( '#test' )[0];//tsimpaw to panel
  
                var select1 = Ext.ComponentQuery.query( '#select1' );

                var select2 = Ext.ComponentQuery.query( '#select2' );

             
                
                if ( select1[0].getValue() === "" || select2[0].getValue() === "" )
                {
                    Ext.Msg.alert( "Alert", " Δεν έχετε επιλέξει τιμές." );
                    
                }
                else
                {

                    if ( !Ext.ComponentQuery.query( '#textfield_kwdikou' )[0] )
                    {
                        form.add( {
                            id: 'textfield_kwdikou',
                            xtype: 'textfield',
                            label: 'Κωδικός',
                            name: 'Κωδικός',
                            margin: '10',
                            showAnimation: "{ type: 'popIn', duration: 250, easing: 'ease-out' }"

                        } );

                        this.hide();//krivw to button pou leei 'Επιλογή σειράς και αποθήκης'

                        form.add( {//kai sti sinexeia koumpwnw ena allo koumpi sti thesi tou allou
                            id: 'elegxos_proiontos_button',
                            xtype: 'button',
                            margin: 10,
                            text: 'Έλεγχος προϊόντος',
                            docked: 'bottom',

                        } );

             



                    }//if !Ext.ComponentQuery.query( '#textfield_kwdikou' )[0] 
                }

        

            }
        } );



    } //initialize

        



} );
