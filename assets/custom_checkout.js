
$(document).ready(function() {
  $("select#checkout_shipping_address_id").on("change", function() {
    var test =  $('option:selected', this).attr('data-properties');
    var test_obj = $.parseJSON(test);
    var companyType = test_obj['company'];
    test_obj['company'] = null;
    $('option:selected', this).attr('data-properties', JSON.stringify(test_obj));
  });
});


$( window ).load(function() {
  $('#checkout_shipping_address_company').val('');
  var temp = "";
  var str = $('.product-table tbody tr');
  //   console.log('str Lemgth:  : ', str.length-1);
  for (var k = 0; k <= str.length-1; k++) {
//     console.log( 'img',str[k],k);
    var test = $(str[k]).find('td.product__description span:nth-child(4)').text();
    var res = test.split(":");
    var finalRes = $.trim(res[1]);
    //         console.log('finalRes',finalRes);
    if(finalRes){
      temp = k;
//       console.log('k :  : ',k);
      $.ajax({ 
        "crossDomain": true,
        "url": "https://customize.floracracy.com/api/shopifyorderdata/?order_id="+finalRes+"",
        "method": "GET",
        success: function(data){
          console.log('data',data, k, temp);

          //           if(test){
          var item = data[0];
          var variantImage = item.variant_image;
          var variantDjangoid = item.order_id;
          if(variantDjangoid){
            $(str[temp]).find('td .product-thumbnail img.product-thumbnail__image').attr('src', variantImage);
            // 			  console.log( 'string',str[k],k);
            //               console.log($(str[k]).find('td .product-thumbnail img.product-thumbnail__image').attr('src'));
            temp=0;
          }

          //           }

        }
      });

    }
  }

  //    console.log('checkout',finalRes);
});

// jQuery(document).ready(function($) {

//  if(__st){
//     if(__st.cid){
//         // $.ajax({
//         //    "async": true,
//         //    "crossDomain": true,        
//         //    "url":"https://app.floracracy.com/index.php/webservice/api/mobile/checkoutrecipientlist.json" ,
//         //    "method": "POST",
//         //    "dataType": "json",
//         //    "data": { "customer_id": __st.cid },
//         //    success: function(data){
//         //         $('.section--shipping-address .section__content .fieldset').prepend(data);
//         //         // $('#checkout_shipping_address_id').hide();
//         //         // $('#checkout_shipping_address_first_name').hide();
//         //         // $('#checkout_shipping_address_last_name').hide();
//         //         // $('#checkout_shipping_address_company').hide();
//         //         // $('#checkout_shipping_address_address1').hide();
//         //         // $('#checkout_shipping_address_address2').hide();
//         //         // $('#checkout_shipping_address_city').hide();
//         //         // $('#checkout_shipping_address_province').hide();
//         //         // $('#checkout_shipping_address_country').hide();
//         //         // $('#checkout_shipping_address_zip').hide();
//         //    }
//         // });
//     }
//  }
// //   console.log(__st.cid);

// $('.section--shipping-address .section__content .fieldset').append('<div class="checkbox-wrapper" style="margin-top:15px;float: left;width: 100%;"><div class="checkbox__input"><input class="input-checkbox" type="checkbox" id="is-hosp-add" name="is-hosp-add""></div><label class="checkbox__label" for="is-hosp-add">This address is a hospital</label></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="field field--required field--show-floating-label field--eights"><div class="field__input-wrapper"><label class="field__label field__label--visible" for="hospital_name">Hospital Name</label><input placeholder="Hospital Name" class="field__input" aria-required="true" size="30" type="text" value="" name="hospital_name" id="hospital_name"></div><span class="error hospital_name"></span></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="field field--required field--show-floating-label field--quarter"><div class="field__input-wrapper"><label class="field__label field__label--visible" for="room_ward">Room/Ward</label><input placeholder="Room/Ward" class="field__input" aria-required="true" size="30" type="text" value="" name="room_ward" id="room_ward""></div><span class="error room_ward"></span></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="field field--required field--show-floating-label "><div class="field__input-wrapper"><label class="field__label field__label--visible" for="hospital_contact">Hospital phone number</label><input placeholder="Hospital Contact" class="field__input" aria-required="true" size="30" type="text" value="" name="hospital_contact" id="hospital_contact""></div><span class="error hospital_contact"></span></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="main-content-elements recipent-time-block" style=""><label class="flora-label" style="line-height:20px;">When do you want the flowers delivered to your recipient?</label>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="main-content-elements recipent-time" style=""><div class="field--half"><div class="checkbox__input"><input class="input-checkbox time_slot" value="1" type="checkbox" id="time-slot-1" name="time_slot"></div><label class="checkbox__label" for="time-slot-1">9am - 12 pm</label></div></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="main-content-elements recipent-time" style=""><div class="field--half"><div class="checkbox__input"><input class="input-checkbox time_slot" value="2" type="checkbox" id="time-slot-2" name="time_slot"></div><label class="checkbox__label" for="time-slot-2">12 pm - 3pm</label></div></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="main-content-elements recipent-time" style=""><div class="field--half"><div class="checkbox__input"><input class="input-checkbox time_slot" value="3" type="checkbox" id="time-slot-3" name="time_slot"></div><label class="checkbox__label" for="time-slot-3">3 pm - 6pm</label></div></div>');
// $('.section--shipping-address .section__content .fieldset').append('<span class="error time_slot"></span></div>');
// $('.section--shipping-address .section__content .fieldset').append('<div class="field field--optional field--show-floating-label"><div class="field__input-wrapper"><label class="field__label field__label--visible" for="custom_note">Add a handwritten note</label><textarea row="2" placeholder="Write a message for Floracracy to handwrite and deliver with your arrangement." class="field__input" aria-required="true" name="custom_note" id="custom_note" style="resize: vertical;"></textarea><span class="limit-text">250 charachters</span></div></div>');
// $('.step').append('<div role="contentinfo" aria-label="Footer"><p class="footer-text">We’re currently only serving the Chicagoland area but plan to expand soon! Want to get updates? <a href="">sign me up</a></p></div>');
//     var my_key_token = Shopify.Checkout.token;

//     $('.step__footer__continue-btn').click(function(e){
//         e.preventDefault();
//         action_type = $(this).attr('data-trekkie-id');
//         if(action_type == "continue_to_shipping_method_button"){
//             var elements = [];
//             if($('#is-hosp-add').is(":checked")){
//                 var hospital_name = $('#hospital_name').val();
//                 var room_ward = $('#room_ward').val();
//                 var hospital_contact = $('#hospital_contact').val();

//             }
//             var time_slot =''; 
//                 $("input:checkbox[name=time_slot]").each(function(){
//                     if($(this).is(":checked"))
//                       if(time_slot == ''){
//                         time_slot = $(this).val()+'|';
//                       } else{
//                         time_slot = time_slot + $(this).val()+'|';
//                       }
//                   });
//             var custom_note = $('#custom_note').val();
//                 elements.push({
//                     token:my_key_token,
//                     time_slot:time_slot,
//                     custom_note:custom_note,
//                     hospital_name: hospital_name,
//                     room_ward: room_ward,
//                     hospital_contact: hospital_contact,
//                 });

//             /*validation */
//               var status = true;
//               $.each( elements, function( key, values ) {
//                 $.each( values, function( key, value ) {
//                   if(value == ''){
//                     if((key == 'hospital_name') || (key == 'room_ward') || (key == 'hospital_contact')){
//                         if($('#is-hosp-add').is(":checked")){
//                             var class_name = '.error.'+key;
//                             status = false;
//                         }
//                     }
//                     if(key == 'time_slot'){
//                         var class_name = '.error.'+key;
//                         status = false;
//                     }                    

//                     $(class_name).css('display','block');
//                     $(class_name).html('Field is empty');

//                   }
//                 });
//               });

//             if(status)
//                 $.ajax({
//                     "async": true,
//                     "crossDomain": true,        
//                     "url": "https://app.floracracy.com/index.php/webservice/api/mobile/checkoutcustom.json",
//                     "method": "POST",
//                     "data": { "token": my_key_token, "elements": elements},
//                     success: function(response){
//                         $( ".edit_checkout" ).submit();
//                     }
//                 });
//         } else {
//             $( ".edit_checkout" ).submit();
//         }

//     });

//   var check_page =  $('.step').attr('data-step');
//   if(check_page == "payment_method"){
//     $('.main__content').css('width','85%');
//   }

// });