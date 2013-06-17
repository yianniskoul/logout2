Ext.define( 'Sencha_mobile.controller.Login_Controller', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.util.DelayedTask', 'Ext.data.Model', 'Ext.data.Store', 'Ext.data.proxy.LocalStorage'],

    //--
    config: {

        models: ['Login', 'LoginData'],//dilwnw ston controller ta models pou tha xrhsimopoiithoun apo ton controller

        views: ['Login'],//ta views pou tha xrhsimopoihthoun apo tin controller

        stores:['LoginData'],//ta stores pou tha xrhsimopoihthoun apo ton controller

        refs: {

            loginbtn: 'button#logInButton',//edw vazw ti eidos component einai ( diladi button) kai meta to id tou

        },

        control: {
            loginbtn: {
                tap: 'onLogInButtonTap'// i sinartisi pou to login button 
            }

        }
    },




    //genika sinartiseis oiu einai orismenes sto controller		
    //function pou energopoieitai sto tap tou button
    onLogInButtonTap: function ()
    {
       
     


            //oi treis autes metavlites vlepoune ta fields tis formas 
            var username = Ext.ComponentQuery.query( '#userNameTextField' )[0];
            var password = Ext.ComponentQuery.query( '#passwordTextField' )[0];
            var appid = Ext.ComponentQuery.query( '#appID' )[0];
            var label = Ext.ComponentQuery.query( '#signInFailedLabel' )[0];

            // oi treis parakatw metavlites kratane tis times twn textfields tis formas
            Sencha_mobile.app.login_username = username.getValue();
            Sencha_mobile.app.login_password = password.getValue();
            Sencha_mobile.app.login_appid = appid.getValue();


            //alliws gia na to parw opws apo panw ( me Ext.getCmp diladi) prepei na einai mesa se forma diavasa - na to dokimasw!



            // Using a delayed task in order to give the hide animation above
            // time to finish before executing the next steps.
            var task = Ext.create( 'Ext.util.DelayedTask', function ()
            {


                alert( Sencha_mobile.app.login_username );
                alert( Sencha_mobile.app.login_password );
                alert( Sencha_mobile.app.login_appid );


                var login_instance = Ext.create( 'Sencha_mobile.model.Login', {//ftiaxnw ena instance tou model - to model legetao Login
                    
                    service: 'login',
                    username: Sencha_mobile.app.login_username,
                    password: Sencha_mobile.app.login_password,
                    appid: Sencha_mobile.app.login_appid

                } );

                alert( Ext.JSON.encode( login_instance.raw ) );
           

                var errors = login_instance.validate();//tsekarw gia errors  - to model epi trexei validation sta instances tou

                 

                //parakatw tha kanw ena aplo validation gia to ean einai simplirwmena ta fields

                if ( errors.length > 0 )
                { //tsekarw ean einai simplirwmena ta pedia tis formas
                 
                    label.show();
                    label.setHtml( 'Πρέπει να συμπληρώσετε τα πεδία!' ); //an den einai simplirwmena - emfanizei to label kai tou orizei to error message

                }
                else
                { //ean einai simplirwmena kanw to request

                    var loginview = Ext.ComponentQuery.query( 'loginview' )[0];//edw vriskei to login view

                    loginview.setMasked( {//ki edw emfanizei to loading
                        xtype: 'loadmask',
                        message: 'Signing In...'
                    } );


        

                    Ext.Ajax.request( { //AJAX request gia to login. Stelnei sto server gia to login
                        url: 'http://localhost:81/s1services',
                        method: 'POST',
                        withCredentials: false,
                        useDefaultXhrHeader: false,
                        params: Ext.JSON.encode( login_instance.raw ), //edw kanw encode ta formfields kai ta dinw san parametrous -  kanei diladi encode to object se JSON string kai to pernaw san parametro
                        //	callback: function () { //edw apla vazw ki ena call back na ektelestei - den kserw ti tha to kanw tha dw

                        //		alert('callback is called!');

                        //	},
                        success: function ( response )
                        {//sto success tou ajax request kryvw to mask

   

                            var success_check = Ext.JSON.decode( response.responseText ); //kanw object to JSON string pou mou dinei to response tou AJAX request gia to login

                         

                            if ( success_check.success === true )//ean to response tou ajax call sto login itane epityximeno
                            {

                                loginview.setMasked( false ); //krivw to mask

                                var loggedin = success_check;


                                //parakatw ftiaxnw ena instance tou model LoginData
                                var LoginData = Ext.create( 'Sencha_mobile.model.LoginData' );

                                //Store - start - prospathw na ftiaksw ena store gia na apothikefsw ta stoixeia tou login kai na tra exw gia na ta koumpwnw meta se opoio ajax request thelw

                                var myStore = Ext.create( 'Sencha_mobile.store.LoginData' );
                                
                            
                       


                                //Store - end

                     

                                LoginData.clientID = success_check.clientID.toString();

                      


                                for ( x in success_check.objs )
                                {


                                    LoginData.Company = success_check.objs[x].COMPANY.toString();
                                    LoginData.Companyname = success_check.objs[x].COMPANYNAME.toString();
                                    LoginData.Branch = success_check.objs[x].BRANCH.toString();
                                    LoginData.Branchname = success_check.objs[x].BRANCHNAME.toString();
                                    LoginData.Module = success_check.objs[x].MODULE.toString();
                                    LoginData.Modulename = success_check.objs[x].MODULENAME.toString();
                                    LoginData.Refid = success_check.objs[x].REFID.toString();
                                    LoginData.Refidname = success_check.objs[x].REFIDNAME.toString();

                                    console.log( LoginData.clientID + " / " + LoginData.Company + " / " + LoginData.Companyname + " / " + LoginData.Branch + " / " + LoginData.Branchname + " / " + LoginData.Module + " / " + LoginData.Modulename + " / " + LoginData.Refid + " / " + LoginData.Refidname );

                                    //  var store_loginData = Ext.getStore( 'myStore' );
                                    //    console.log( myStore.data.all );
                                    //edw apo katw vazw mesa sto store
                                    myStore.add( { Company: LoginData.Company, Companyname: LoginData.Companyname, Branch: LoginData.Branch, Branchname: LoginData.Branchname, Module: LoginData.Module, Modulename: LoginData.Modulename, Refid: LoginData.Refid, Refidname: LoginData.Refidname } );
                                    myStore.sync();
                                
                              

                                }

                            
                                Sencha_mobile.app.client_ID_login = LoginData.clientID; //vazw to client id stin global metavliti gia na ti dw meta me tin getCachedData

                                var mainmenu = Ext.create( 'Sencha_mobile.view.MainMenu' );// kanw create ena isntance tis klassis - view pou onomazetai MainMenu

               
                                Ext.Viewport.setActiveItem( mainmenu );

                            
                         



                            }//if
                            else
                            {

                                loginview.setMasked( false );

                                label.show();
                                label.setHtml( success_check.error );

                                username.setValue( '' ); //kai adeiazw to error
                                password.setValue( '' );
                                appid.setValue( '' );

                            }



                            //console.log( response.responseText );

                        }//success function,



                    } );//ajax  request







                }//to else to prwto



                // label.setHtml('');

                // fireEvent('signInCommand', me, username, password);





            } );

            task.delay( 10 );

        }



} );//Ext.define
