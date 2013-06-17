//Edw kanw enan controller gia na pataei kaneis sti forma ton kwdiko proiontos kai na trexei sti sinexeia tin calculate

Ext.define( 'Sencha_mobile.controller.Eidi_Controller', {
    extend: 'Ext.app.Controller',
    //   requires: ['Ext.util.DelayedTask', 'Ext.util.JSON', 'Ext.data.Model', 'Ext.data.Store', 'Ext.data.proxy.LocalStorage'],

    //--
    config: {


        views: ['Apografi'],


        refs: {

            elegxos_proiontos_btn: 'button#elegxos_proiontos_button',//edw vazw ti eidos component einai ( diladi button)
            kataxorisi_btn: 'button#kataxorisi_btn'

        },

        control: {
            elegxos_proiontos_btn: {
                tap: 'elegxos_proiontos_btnTap'
            },
            kataxorisi_btn: {
                tap: 'kataxotisi_btnTap'

            }

        }
    },
    kataxotisi_btnTap: function ()
    {

        var pos = Ext.ComponentQuery.query( '#posotita' )[0];

        var pos1 = pos.getValue();

        var select1 = Ext.ComponentQuery.query( '#select1' );//tsimpaw ta selece1 kai select2

        var select2 = Ext.ComponentQuery.query( '#select2' );

        var select1_value = select1[0].getValue();//kai sti sinexeia pairnw tis times tous

        var select2_value = select2[0].getValue();

      





        var set_data_params = { //OBJECT POU TO PERNAW SAN PARAMETRO GIA NA FERW TIS APOTHIKES
            "Service": "setData",
            "ClientID": Sencha_mobile.app.client_ID_auth,
            "Object": "ITEDOC",
            "Key": "",
            "data": {
                "FINDOC": [{ "Series": select1_value, "WHOUSE": select2_value }],
                "Itelines": Sencha_mobile.app.array_apo_items
            },
            "appId": "157"
        };







        Ext.Ajax.request( {// AUTO EINAI REQUEST GIA NA FERW TOYS APOTHIKEFTIKOUS XWROUS
            url: 'http://localhost:81/s1services',
            method: 'POST',
            withCredentials: false,
            useDefaultXhrHeader: false,
            params: Ext.JSON.encode( set_data_params ), //edw kanw encode ta formfields kai ta dinw san parametrous
            async: false,

            success: function ( response )
            {


                console.log( "setData:         "  +  response.responseText);


            }//success



        } );








    },
   
    elegxos_proiontos_btnTap: function ()//sinartisi gia to ti tha kanei to koumpi pou grafei Έλεγχος προϊόντος
    {

        //vriskw to component vivlio kwdikou
        var kwdikos = Ext.ComponentQuery.query( '#textfield_kwdikou' )[0];


        // kai pairnw tin timi tou
        var kwdikos_value = kwdikos.getValue();

        var select1 = Ext.ComponentQuery.query( '#select1' );//tsimpaw ta selece1 kai select2

        var select2 = Ext.ComponentQuery.query( '#select2' );

        var select1_value = select1[0].getValue();//kai sti sinexeia pairnw tis times tous

        var select2_value = select2[0].getValue();


       


        
       






        var calculate_data = { //OBJECT POU TO PERNAW SAN PARAMETRO GIA NA FERW TIS APOTHIKES
            "Service": "calculate",
            "ClientID": Sencha_mobile.app.client_ID_auth,
            "Object": "ITEDOC",
            "Key": "",
            "data": {
                "FINDOC": [{ "Series": select1_value, "Trdr": "", "WHOUSE": select2_value }],
                "Itelines": [{ "SRCHCODE": kwdikos_value, "Qty": "1" }]
            },
            "appId": "157"
        };


        

        //kanw ajax request to opoio mtha roufaei ton kwdiko pou tha grafw kai sti sinexeia tha kanei request ston server
        Ext.Ajax.request( {
            url: 'http://localhost:81/s1services',
            method: 'POST',
            withCredentials: false,
            useDefaultXhrHeader: false,
            params: Ext.JSON.encode( calculate_data ), //edw kanw encode ta formfields kai ta dinw san parametrous

            //	callback: function () { //edw apla vazw ki ena call back na ektelestei - den kserw ti tha to kanw tha dw

            //		alert('callback is called!');

            //	},
            success: function ( response )
            {

                console.log( response.responseText );


                /*

                var w = Ext.JSON.decode( response.responseText );


                if ( w.success === true )
                {

                    alert( w.data.ITEDOC.length);


                }
                        
                else
                {
                    Ext.Msg.alert( 'Error', 'Το προϊον δεν υπάρχει.', Ext.emptyFn );
                }


                */






                var w = Ext.JSON.decode( response.responseText );

               

                if ( w.success === true )
                {

                 
                    var overlay = new Ext.Panel( {
                        overlay: true,
                        centered: true,
                        width: 340,
                        height: 230,
                        layout: 'fit',
                        scrollable: true,
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        items: [
                            {
                                xtype: 'toolbar',
                                docked: 'bottom',
                                defaults: {
                                    ui: 'action'
                                },
                                items: [
                                    {
                                        text: 'OK',
                                        handler: function ()
                                        {
                                            var posotita = Ext.ComponentQuery.query( '#posotita' );

                                            var posotita1 = posotita[0].getValue();


                                            alert( posotita1 );

                                            var mtrl =  w.data.ITELINES[0].MTRL ;
                                            var qty = w.data.ITELINES[0].QTY ;
                                            var item_code = w.data.ITELINES[0].MTRL_ITEM_CODE ;
                                            var item_name = w.data.ITELINES[0].MTRL_ITEM_NAME;


                                            var object_gia_kataxorisi = {};

                                            object_gia_kataxorisi.mtrl = mtrl;
                                            object_gia_kataxorisi.qty = qty;
                                            object_gia_kataxorisi.item_code = item_code;
                                            object_gia_kataxorisi.item_name = item_name;
                                            object_gia_kataxorisi.qty1 = posotita1;


                                         //   proionta_gia_kataxorisi += "ΠΟΣΟΤΗΤΑ" + ":" + posotita1 + "," + "ΚΩΔΙΚΟΣ" + ":" + item_code + "," + "ΠΕΡΙΓΡΑΦΗ" + ":" + item_name;

                                       //     proionta_gia_kataxorisi += "}";

                                           

                                            Sencha_mobile.app.array_apo_items.push( object_gia_kataxorisi );

                                            console.log("------------------------------------------------------------");

                                            console.log( Sencha_mobile.app.array_apo_items );


                                        }
                                    },
                                    {
                                        text: 'Κλείσιμο',
                                        handler: function ()
                                        {
                                            overlay.hide();
                                        }
                                    }
                                ]
                            },
                            {
                                xtype: 'toolbar',
                                docked: 'top',
                                title: 'Το προϊόν βρέθηκε!'


                            },


                                    {
                                        id:"posotita",
                                        xtype: 'textfield',
                                        label: 'Ποσότητα:',
                                        centered: true
                                    }


                        ]
                    } );



                    var panel = Ext.ComponentQuery.query( '#test' );

                    panel[0].add( overlay );


                }
                else
                {
                    Ext.Msg.alert( 'Error', 'Το προϊον δεν υπάρχει.', Ext.emptyFn );
                }



             





            }//success



        } );//Ext.Ajax.Request gia apothikeftikous xwrous ( WHOUSE )





    }

} );
