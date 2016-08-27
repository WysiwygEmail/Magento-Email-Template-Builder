// 
// EN - English Language Pack
//
function en_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/en/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}

// 
// DE - German Language Pack
//
function de_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/de/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}


// 
// NL - Duch Language Pack
//
function nl_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/nl/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}

// 
// ES - Spanish Language Pack
//
function es_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/es/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}

// 
// PT - Portugles Language Pack
//
function pt_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/pt/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}

// 
// IT - Italian Language Pack
//
function it_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/it/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}


// 
// RU - Russian Language Pack
//
function ru_lang_load() {
    
    $('#lang_container').load('wp-content/themes/wysiwyg/editor/magento/app/email.lang.container.html', function() {
        
        $( "#loader" ).addClass( "loader" );
        
        $( "#creditmemo_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/creditmemo_new.html" );

        $( "#creditmemo_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/creditmemo_new_guest.html " );

        $( "#creditmemo_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/creditmemo_update.html" );

        $( "#creditmemo_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/creditmemo_update_guest.html" );

        $( "#invoice_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/invoice_new.html" );

        $( "#invoice_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/invoice_new_guest.html" );

        $( "#invoice_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/invoice_update.html" );

        $( "#invoice_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/invoice_update_guest.html");

        $( "#order_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/order_new.html" );

        $( "#order_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/order_new_guest.html" );

        $( "#order_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/order_update.html" );

        $( "#order_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/order_update_guest.html" ); 

        $( "#shipment_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/shipment_new.html" );

        $( "#shipment_new_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/shipment_new_guest.html" );

        $( "#shipment_update" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/shipment_update.html" );

        $( "#shipment_update_guest" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sales/shipment_update_guest.html" );    

        $( "#account_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/account_new.html" );

        $( "#account_new_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/account_new_confirmation.html" );

        $( "#account_new_confirmed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/account_new_confirmed.html" );

        $( "#account_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/account_password_reset_confirmation.html" );

        $( "#admin_password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/admin_password_new.html" );

        $( "#admin_password_reset_confirmation" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/admin_password_reset_confirmation.html" );

        $( "#contact_form" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/contact_form.html" );

        $( "#currency_update_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/currency_update_warning.html" );

        $( "#log_clean_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/log_clean_warning.html" );

        $( "#moneybookers_activateemail" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/moneybookers_activateemail.html" );

        $( "#newsletter_subscr_confirm" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/newsletter_subscr_confirm.html" );

        $( "#newsletter_subscr_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/newsletter_subscr_success.html" );

        $( "#newsletter_unsub_success" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/newsletter_unsub_success.html" );

        $( "#password_new" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/password_new.html" );

        $( "#payment_failed" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/payment_failed.html" );

        $( "#product_alert_cron_error" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/product_alert_cron_error.html" );

        $( "#product_price_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/product_price_alert.html" );

        $( "#product_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/product_share.html" );

        $( "#product_stock_alert" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/product_stock_alert.html" );

        $( "#sitemap_generate_warning" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/sitemap_generate_warning.html" );

        $( "#token" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/token.html" );

        $( "#wishlist_share" ).load( "wp-content/themes/wysiwyg/editor/magento/lang/ru/wishlist_share.html", function() { 
            //klikne na aplikovať inline štýl pri načítaní jazykových súborov
            $("#apply-inline-style").click();
            $("#loader").removeClass( "loader" );
            });
   });

}