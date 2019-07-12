
$('#popup-close').on('click', function () {
  $(".popup-all").fadeOut();
});

$('#add_change_deliver_info').on('click', function () {
  $('body').addClass('noscroll');

  if ($('#add_change_deliver_info').hasClass('changeBtnUpdate')) {    
    $('#see_results').html('Update');
  }


  $(".popup-all").fadeOut();
  $("#myModalProductCat").fadeIn(100);
});


$('#signmeUpModal').on('click', function () {  
  $(".popup-all").fadeOut();
  $("#signupUpdatesModal").fadeIn(100);
});

$('#popup-close, .close_all_mymodal ').on('click', function () {
  $(".popup-all").fadeOut();
});

$(".quantity_update").on("click", function() {

  var $button = $(this);
  var oldValue = $("#product_quantity").val();
  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $("#product_quantity").val(newVal);

});

$('document').ready(function(){

  /* --- Filter sub block display toggle ---- */
  $('#color-palet-subblockfilter').on('click', function () {

    showHideSearchFilter('color-palettes-list', 'styles-palettes-list', 'flower-type-types-list', 'color-palet-subblockfilter' );
    /*
    $("#filter-subblock-selected-block").show(); 
    $('#filter-subblock-selected-block').hide();
    $("#styles-palettes-list").hide();
    */
  });

  var selected_color_style_txtArr = [];
  $('.color-palet-items').on('click', function () {
    $('#filter-selected-clear').show();
    var cp_valset = $(this).closest('li').find('input');
    var cp_id = cp_valset.attr("id");
    var reset_count = $('#filt-reset-count').val();

    if ($('.cp-sel' + cp_id).length) {
      selected_color_style_txtArr.removeArrValue(cp_valset.val());
      console.log('ara->',selected_color_style_txtArr);
      //removeArrValue
      $('.cp-sel' + cp_id).remove();
      reset_count = $('#filt-reset-count').val();
      reset_count--;
      $('#filt-reset-count').val(reset_count);

    } else {
      var add_comma = "";
      var style_reset_count = $('#style-filt-reset-count').val();
      //       console.log((style_reset_count+reset_count));      
      if((reset_count+style_reset_count) > 0){ add_comma = ", ";}

      selected_color_style_txtArr.push(cp_valset.val());
      console.log('array->',selected_color_style_txtArr);

      var selected_texts = selected_color_style_txtArr.join(", ");

      $("#filter-selected-text").append("<span style='display:none' class=cp-sel" + cp_id + ">" + add_comma + cp_valset.val() + "</span>");
      reset_count = $('#filt-reset-count').val();
      reset_count++;
      $('#filt-reset-count').val(reset_count);
    }
    $("#common-filter-selected-text").html(selected_color_style_txtArr.join(', '));
    if(selected_color_style_txtArr.length == 0 ){
      $('#filter-selected-clear').hide();
    }

    $('#filter-subblock-selected-block').fadeIn(300);
    $('#styles-palettes-list').hide();

  });
  /* --- Filter select and display selected text ---- */

  /* --- Reset filter selected ---- */
  $('#filter-selected-clear').on('click', function () {
    $(".color-palettes-list input[type=checkbox]").prop('checked', false);
    $('#filter-selected-text').text("");
    $('#filt-reset-count').val(0);

    $("#styles-palettes-list input[type=checkbox]").prop('checked', false);
    $('#style-filter-selected-text').text("");
    $('#filt-reset-count').val(0);

    $("#flower-type-types-list input[type=checkbox]").prop('checked', false);
    $('#common-filter-selected-text').text("");
    $('#filt-reset-count').val(0);

    selected_color_style_txtArr = [];
    $('#common-filter-selected-text').text("");

    $(this).hide();
  });
  /* --- Reset filter selected ---- */

  /* --- Reset filter selected mobile ---- */

  $('#filter-subblock-button-clear-mob').on('click', function () {
    $(".color-palettes-list input[type=checkbox]").prop('checked', false);
    $('#filt-reset-count').val(0);

  });
  /* --- Reset filter selected mobile ---- */


  /* --- Filter Arrangement popup mobile ---- */
  $('#filter-arrang-btn').on('click', function () {
    $('#color-palet-filter-subblock').fadeIn(300);
  });

  $('#filt-subblock-close, #filter-selected-arrangments').on('click', function () {

    $('#color-palet-filter-subblock').fadeOut(300);
  });
  /* --- Filter Arrangement popup mobile ---- */

  /* --- Filter sub block display toggle ---- */
  $('body').on('click', '#styles-subblockfilter', function (e) {
    showHideSearchFilter('styles-palettes-list', 'flower-type-types-list', 'color-palettes-list', 'styles-subblockfilter' );
    /*
      $(".page-width.filter-subblock").fadeToggle(200);
      $('#color-palettes-list, .color-palettes-list').hide();
      $('#flower-type-types-list').hide();
      $('#color-palettes-list').hide();
      $('#styles-palettes-list').fadeToggle(200);
      */
  });

  //Style collection Filter start
  $('.style-fltr-items').on('click', function () {
    var style_val_checked_ele = $(this).closest('li').find('input');    
    var style_id = style_val_checked_ele.attr("id");
    var style_reset_count = $('#filt-reset-count').val();

    if ($('.style-sel' + style_id).length) {    

      selected_color_style_txtArr.removeArrValue(style_val_checked_ele.val());
      //       console.log(selected_color_style_txtArr);

      $('.style-sel' + style_id).remove();
      style_reset_count = $('#filt-reset-count').val();
      style_reset_count--;
      $('#filt-reset-count').val(style_reset_count);

    }else {      
      var add_comma = "";
      var reset_count = $('#filt-reset-count').val();
      //       console.log((style_reset_count+reset_count));

      selected_color_style_txtArr.push(style_val_checked_ele.val());
      //       console.log(selected_color_style_txtArr);

      if((style_reset_count+reset_count) > 0){ add_comma = ", ";}
      $("#style-filter-selected-text").append("<span style='display:none' class=style-sel" + style_id + ">" + add_comma + style_val_checked_ele.val() + "</span>");
      style_reset_count = $('#filt-reset-count').val();
      style_reset_count++;
      $('#filt-reset-count').val(style_reset_count);
    }

    if(selected_color_style_txtArr.length > 0){
      searchProductByStyles(selected_color_style_txtArr)
    }
    $("#common-filter-selected-text").html(selected_color_style_txtArr.join(', '));

    $('#filter-subblock-selected-block').fadeIn(300);
    //$('#styles-palettes-list').hide();

  });  
  //Style collection Filter end

  //Type filter start
  /* --- Filter sub block display toggle ---- */
  $('#type-subblockfilter').on('click', function () {

    showHideSearchFilter('flower-type-types-list', 'styles-palettes-list', 'color-palettes-list', 'type-subblockfilter' );
    /*
    $(".page-width.filter-subblock").fadeToggle(200);
    $('#color-palettes-list').hide();
    $('#styles-palettes-list').hide();
    $('#flower-type-types-list').fadeToggle(200);
    */
  });
  /* --- Filter sub block display toggle ---- */


  //To remove a value from an Array
  Array.prototype.removeArrValue = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };


  jQuery.ajax({
    type: 'GET',
    url: '/cart.json',
    dataType: 'jsonp',
    success: function(data) { 

      var item_count = data['item_count'];
      var total_price = data['total_price']/100;

      //If there are items in cart
      if (item_count > 0) {
        // cart count
        $('#CartCount').text('('+item_count+')');
        $('.checkout-btn').text('CHECK OUT ('+item_count+')');

        // mini cart data
        $('.mini-cart-subtotal .price').text('Subtotal $' + total_price.toFixed(2));

        var cart_list = [];

        for( var i = 0; i < data['items'].length ; i++ ){
          if ( data['items'][i]['id'] != null ) {
            var item_id = data['items'][i]['id'];
            var product_title = data['items'][i]['product_title'];
            // var product_title = data['items'][i]['title'];
            var product_handle = data['items'][i]['handle'];
            var quantity = data['items'][i]['quantity'];
            var line_price = data['items'][i]['price']/100;
            var url = data['items'][i]['url'];

            //  console.log('img',data['items'][i]['image']);
            if(data['items'][i]['image'] != null){
              var image_url = data['items'][i]['image'];
            }
            else{
              var image_url = 'https://cdn.shopify.com/s/assets/no-image-100-c91dd4bdb56513f2cbf4fc15436ca35e9d4ecd014546c8d421b1aece861dfecf_small.gif';
            }

            var variants = data['items'][i]['variant_options'];

            if ( product_title == 'Gift Wrap' ) {
              var product_url = product_title;
            } else {
              var product_url = '<a href="' + url + '">' + product_title + '</a>';
            }

            var options = [];
            for ( var o = 0; o < variants.length; o++ ) {
              var selected = data['items'][i]['variant_options'][o];
              if ( selected !== 'Default Title' ) {
                options.push( selected + '<br>' );
              }
            }
            var selected_options = options.join('');

            cart_list.push('<li><img src="' + image_url + '"  alt="' + product_title + '" /><div class="tablesession-description"><h3>' + product_url + '</h3><span>' + selected_options + '</span><b>$'+ line_price.toFixed(2) +'</b><div class="multi_mypanel celpad"><span class="cart_quantity_update" data-id="'+item_id+'" >-</span><input class="product-qty-update product-cart-qty-'+item_id+'" data-id="'+item_id+'" value="' + quantity + '" pattern="[0-9]*" name="select_quantity" type="number"><span class="cart_quantity_update" data-id="'+item_id+'">+</span><a href="javascript:void(0);" data-id="'+item_id+'" id="update-qty" class="btn update-qty">Update</a></div></div><input type="hidden" id="updates_' + item_id + '" value="' + quantity + '" /></li>');
          } //endif
        } // endfor
        $('.multi_footercart').css('display','block');
        $('.mini-cart-items ul').html( cart_list.join('') );
      }
    }
  });//end ajax

  $('body').on("click", ".dropdown-menu", function (e) {
    $(this).parent().is(".open") && e.stopPropagation();
  });

  $( ".close_minicart" ).on( "click", function() {
    $( "#cart-qantity .dropdown-toggle" ).trigger( "click" );
  });

  $("body").on("click", ".product-qty-update", function(e){
    var data_id = $(this).attr('data-id');
    $(".update-qty[data-id='"+data_id+"']").css('display','block');
  });

  $("body").on("click", ".cart_quantity_update", function(e){

    var button = $(this);
    var data_id = button.attr('data-id');
    var oldValue = $(".product-cart-qty-"+data_id).val();
    $(".update-qty[data-id='"+data_id+"']").css('display','block');
    if (button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $(".product-cart-qty-"+data_id).val(newVal);

  });

  $("body").on("click", "#update-qty", function(e){
    e.preventDefault();
    var elem = $(this);
    $(elem).prop("disabled", true);
    var product_id = elem.attr('data-id');
    var product_qty = $(".product-cart-qty-"+product_id).val();

    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      dataType: 'json',
      data: {'quantity': product_qty,'id': product_id},
      success: function(cart) {
        $('#AddToCart-product-template').prop("disabled", false);
        jQuery.getJSON('/cart.js', function(cart) {
          jQuery.ajax({
            type: 'GET',
            url: '/cart.json',
            dataType: 'jsonp',
            success: function(data) { 
              var item_count = data['item_count'];
              var total_price = data['total_price']/100;

              //If there are items in cart
              if (item_count > 0) {
                // cart count
                $('#CartCount').text('('+item_count+')');
                $('.checkout-btn').text('CHECK OUT ('+item_count+')');

                // mini cart data
                $('.mini-cart-subtotal .price').text('Subtotal $' + total_price.toFixed(2));

                var cart_list = [];

                for( var i = 0; i < data['items'].length ; i++ ){

                  if ( data['items'][i]['id'] != null ) {
                    var item_id = data['items'][i]['id'];
                    var product_title = data['items'][i]['product_title'];
                    // var product_title = data['items'][i]['title'];
                    var product_handle = data['items'][i]['handle'];
                    var quantity = data['items'][i]['quantity'];
                    var line_price = data['items'][i]['price']/100;
                    var url = data['items'][i]['url'];
                    if(data['items'][i]['image'] != null){
                      var image_url = data['items'][i]['image'];
                    }
                    else{
                      var image_url = 'https://cdn.shopify.com/s/assets/no-image-100-c91dd4bdb56513f2cbf4fc15436ca35e9d4ecd014546c8d421b1aece861dfecf_small.gif';
                    }
                    var variants = data['items'][i]['variant_options'];

                    if ( product_title == 'Gift Wrap' ) {
                      var product_url = product_title;
                    } else {
                      var product_url = '<a href="' + url + '">' + product_title + '</a>';
                    }

                    var options = [];
                    for ( var o = 0; o < variants.length; o++ ) {
                      var selected = data['items'][i]['variant_options'][o];
                      if ( selected !== 'Default Title' ) {
                        options.push( selected + '<br>' );
                      }
                    }
                    var selected_options = options.join('');

                    cart_list.push('<li><img src="' + image_url + '"  alt="' + product_title + '" /><div class="tablesession-description"><h3>' + product_url + '</h3><span>' + selected_options + '</span><b>$'+ line_price.toFixed(2) +'</b><div class="multi_mypanel celpad"><span class="cart_quantity_update" data-id="'+item_id+'" >-</span><input class="product-qty-update product-cart-qty-'+item_id+'" data-id="'+item_id+'" value="' + quantity + '" pattern="[0-9]*" name="select_quantity" type="number"><span class="cart_quantity_update" data-id="'+item_id+'">+</span><a href="javascript:void(0);" data-id="'+item_id+'" id="update-qty" class="btn update-qty">Update</a></div></div><input type="hidden" id="updates_' + item_id + '" value="' + quantity + '" /></li>');
                  } //endif
                } // endfor
                $('.multi_footercart').css('display','block');
                $('.mini-cart-items ul').html( cart_list.join('') );
                //display error
                $('.mycart-tablesession-header h2 img').css('display','inline-block');
                $('.mycart-tablesession-header h2 span').data('add', true);
                $('.mycart-tablesession-header h2 span').text('Updated to bag');
                setTimeout(function() {
                  $('.mycart-tablesession-header h2 span').text('My bag').data('add', false);
                  $('.mycart-tablesession-header h2 img').css('display','none');
                }, 3000);
              }else{
                var cart_list = [];
                cart_list.push('<li><div class="empty-cart"><span>Your bag is empty</span></div></li>');
                $('.mini-cart-items ul').html( cart_list.join('') );
                $('#CartCount').text('');
                $('.multi_footercart').css('display','none');
              }    
            }
          });//end inner ajax
        });
      },
      error: function(err) {
        $('#AddToCart-product-template').prop("disabled", false);
        alert(err.responseJSON.description);
      }
    });
  });

});  

//To show and hide colors page
$("#flower-type-expand").text("Show");
$(".flower-type-cont-expanded").hide();

$("#flower-type-expand").click(function() {

  var lable = $("#flower-type-expand").text().trim();

  if(lable == "Hide") {
    $("#flower-type-expand").text("Show");
    $(".flower-type-cont-expanded").fadeOut(100);
  }
  else {
    $("#flower-type-expand").text("Hide");
    $(".flower-type-cont-expanded").fadeIn(900);
  }

});

//Search by Style in Category page
function searchProductByStyles(stylesArr){
  //       console.log(stylesArr);

  var sort_by_val = $('#SortByAjax').val();
  var available_date = $('#available_date').val();  
  var output = '';
  var collection_title = $('#current_collection_name').val(); //'anniversary'; //'{{ collection.handle}}';
  //console.log(collection_title);
  //console.log(AppProductsArr);
  //console.log(ProductsSearchResultsArr);

  if(available_date == '' && sort_by_val == 'popular'){
    $.getJSON('/collections/popular/products.json', function(response) { 
      var popularProdArray = [];
      popularProdArray = response.products;
      //               console.log('HELLO');
      //               console.log(popularProdArray);

      //               console.log(ProductsSearchResultsArr);

      var validSearchPopularProducts = [];

      for (var index = 0; index < popularProdArray.length; ++index) {

        var prod = popularProdArray[index];

        var all_prod_count = ProductsSearchResultsArr.length;

        for (var j = 0; j < all_prod_count; j++) {
          //console.log(AppProductsArr[j])
          if(ProductsSearchResultsArr[j].id == prod.id){                      	 
            validSearchPopularProducts.push(ProductsSearchResultsArr[j]);
            //break;
          }                  
        }
      }
      //               console.log(validSearchPopularProducts);
      showSearchOutput(validSearchPopularProducts);

    });
  }


  if(available_date == '' && sort_by_val != '' && sort_by_val != 'popular'){        

    $.getJSON('/collections/'+collection_title+'/products.json', function(response) { 
      var ResponseAllProdArray = [];
      ResponseAllProdArray = response.products;			

      /*
          var filterProducts = [];
          var AllproductsLength = ResponseAllProdArray.length;
          for (var index = 0; index < AllproductsLength; ++index) {
            var prod = ResponseAllProdArray[index];
            var prodTags = prod.tags;

            var selectedStylsCount = stylesArr.length;
            for(var k=0; k < selectedStylsCount; k++){

              if(prodTags.includes(stylesArr[k])){              	
                filterProducts.push(prod);
              }else if(prod.product_type == stylesArr[k]){
              	filterProducts.push(prod);
              }
            }            
          }
          console.log(filterProducts);
          ResponseAllProdArray = filterProducts;
          */

      ResponseAllProdArray = styleFiltersCategory(ResponseAllProdArray, stylesArr);

      //console.log(ResponseAllProdArray);
      function compareTitleDesc(a, b) {
        // Use toUpperCase() to ignore character casing
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison * -1;
      }

      function compareTitleAsc(a, b) {
        // Use toUpperCase() to ignore character casing
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison;
      }          

      if(available_date == '' && sort_by_val == 'title-descending'){
        ResponseAllProdArray.sort(compareTitleDesc);
      }else if(available_date == '' && sort_by_val == 'title-ascending'){
        ResponseAllProdArray.sort(compareTitleAsc);
      }else if(available_date == '' && sort_by_val == 'created-descending'){
        ResponseAllProdArray.sort(function (a, b) {
          var key1 = new Date(a.created_at);
          var key2 = new Date(b.created_at);

          let comparison = 0;

          if (key1 < key2) {
            comparison = -1;
          } else if (key1 == key2) {
            comparison = 0;
          } 
          return comparison * -1;
        });
      }else if(available_date == '' && sort_by_val == 'created-ascending'){
        ResponseAllProdArray.sort(function (a, b) {
          var key1 = new Date(a.created_at);
          var key2 = new Date(b.created_at);

          if (key1 < key2) {
            return -1;
          } else if (key1 == key2) {
            return 0;
          } else {
            return 1;
          }
        });
      }else if(available_date == '' && sort_by_val == 'price-ascending'){
        ResponseAllProdArray.sort(function (a, b) {

          var key1 = Math.round(a.variants[0].price);
          var key2 = Math.round(b.variants[0].price);  

          if (key1 < key2) {
            return -1;
          } else if (key1 == key2) {
            return 0;
          } else {
            return 1;
          }
        });
      }else if(available_date == '' && sort_by_val == 'price-descending'){
        ResponseAllProdArray.sort(function (a, b) {

          var key1 = Math.round(a.variants[0].price);
          var key2 = Math.round(b.variants[0].price);

          //                   console.log(key1+'--'+key2);
          return key2 - key1;
          /*	
                  if (key1 < key2) {
                      return -1;
                  } else if (key1 == key2) {
                      return 0;
                  } else {
                      return -1;
                  }
                  */
        });
      }

      //console.log(ResponseAllProdArray );
      showSearchOutput(ResponseAllProdArray);

      //that.products = response;
    }); 
  } 

  if(available_date != ''){        
    var ResponseAllProdArray = [];
    ResponseAllProdArray = ProductsSearchResultsArr;

    var filterProducts = [];
    var AllproductsLength = ResponseAllProdArray.length;
    for (var index = 0; index < AllproductsLength; ++index) {

      var prod = ResponseAllProdArray[index];
      //           console.log(prod.tags);

      //                 var all_prod_count = AppProductsArr.length;

      //                 for (var j = 0; j < all_prod_count; j++) {
      //                   //console.log(AppProductsArr[j])
      //                   if(AppProductsArr[j].id == prod.id){                      	 
      //                     validSearchPopularProducts.push(AppProductsArr[j]);
      //                     //break;
      //                   }                  
      //                 }
    }


    if(sort_by_val == 'price-ascending'){
      ResponseAllProdArray.sort(function (a, b) {

        var key1 = Math.round(a.variants[0].price);
        var key2 = Math.round(b.variants[0].price);  

        if (key1 < key2) {
          return -1;
        } else if (key1 == key2) {
          return 0;
        } else {
          return 1;
        }
      });
    }else if(sort_by_val == 'price-descending'){
      ResponseAllProdArray.sort(function (a, b) {

        var key1 = Math.round(a.variants[0].price);
        var key2 = Math.round(b.variants[0].price);

        //                   console.log(key1+'--'+key2);
        return key2 - key1; 
      });
    }

    //console.log(ResponseAllProdArray );
    showSearchOutput(ResponseAllProdArray);

  }

  function showSearchOutput(validSearchProducts){
    if(validSearchProducts.length > 1){
      ProductsSearchResultsArr = validSearchProducts;
    }

    for (var i = 0; i < validSearchProducts.length; i++) {
      var addClass_load = " moreBox";
      if(i == 0){ var addClass_load = ""; }
      var hideClass_load = "";
      if(i >= pagination_limit){ var hideClass_load = "display:none"; }

      var cur_product = validSearchProducts[i];
      //console.log('');
      output += '<div class="col-md-6 col-sm-6 col-xs-12 product-display-block-each blogBox '+addClass_load+'" style="'+hideClass_load+'"><div class="product-image-cont"><div class="product-link-cont">';
      if(cur_product.images[0].src){
        var variant_id_1 = cur_product.variants[0].id;
        output += '<div id="" class="product-image-cont-inner"> <img src="'+cur_product.images[0].src+'" class="image-responsive product-img-display"><div class="visualizer-image-thumb"> <img class="orderdet-thumb-img" src="'+cur_product.images[0].src+'"><span>Visualizer</span></div> <div class="product-hover"><form id="add-item-'+variant_id_1+'" method="post" action="/cart/add" style="width:100%;text-align:center;"><input min="1" type="hidden" id="quantity" name="quantity" value="1" /><input id="product-select"  type="hidden" name="id" value="'+cur_product.variants[0].id+'" /><input type="submit" value="Add to cart" class="btn addtocart btn flora-primary-btn" id="'+variant_id_1+'" /><div id="cart-animation" style="display:none">1</div></form><a href="#" class="btn flora-primary-btn bg-white"> CUSTOMIZE THIS ARRANGEMENT </a></div>   </div>';
      }     

      var coll_url = $('#current_collection_name').val(); //"{{ collection.handle }}";
      output += '<div class="product-detail-text"><div class="product-detail-heading">';
      output += '<p><a href="/collections/'+coll_url+'/products/'+cur_product.handle+'">'+cur_product.title+'</a></p>';
      //output += '<div>'+cur_product.product_type+'</div>';
      //console.log(ProductsList[i].product_id); 
      //console.log(cur_product.variants);
      var prod_variants = cur_product.variants;
      var variantindex;
      for(variantindex = 0; variantindex< prod_variants.length; variantindex++){
        output += '<span>'+prod_variants[variantindex].title+' $'+ prod_variants[variantindex].price +'</span>';
      }
      output += '</div></div>';

      output += '<div class="product-detail-heading-desb">'+cur_product.body_html+'</div>';
      //flora_product_search_results
      output += '</div></div></div>';
    }
    // output += '</div></div>';
    if(validSearchProducts.length >= pagination_limit){
      output += '<div id="loadMore" style=""><a href="#" class="btn flora-primary-btn">Load More</a></div>';
    }

    $("#flora_product_search_results").show()
    $('#flora_product_default_results').html('');
    $("#flora_product_search_results").html(output);        

  } 
}

function styleFiltersCategory(ResponseAllProdArray, stylesArr){

  var filterProducts = [];
  var AllproductsLength = ResponseAllProdArray.length;
  for (var index = 0; index < AllproductsLength; ++index) {
    var prod = ResponseAllProdArray[index];
    var prodTags = prod.tags;

    var selectedStylsCount = stylesArr.length;
    for(var k=0; k < selectedStylsCount; k++){

      if(prodTags.includes(stylesArr[k])){              	
        filterProducts.push(prod);
      }else if(prod.product_type == stylesArr[k]){
        filterProducts.push(prod);
      }
    }            
  }
  //     console.log(filterProducts);
  return filterProducts;

}




/* Mobile Filter view script */

$('#color-filter-mob').on('click', function () {
  $(".filter-tabs-mobile-view button").removeClass("filt-active");
  $(".filter-tabs-mobile-view button").addClass("in-active");
  $(this).removeClass("in-active");
  // $(this).addClass("filt-active");
  $("#styles-palettes-list").hide();
  $("#flower-type-types-list").hide();
  $("#color-palettes-list").fadeIn(400);
});
$('#style-filter-mob').on('click', function () {
  $(".filter-tabs-mobile-view button").removeClass("filt-active");
  $(".filter-tabs-mobile-view button").addClass("in-active");
  $(this).removeClass("in-active");
  // $(this).addClass("filt-active");
  $("#color-palettes-list").hide();
  $("#flower-type-types-list").hide();
  $("#styles-palettes-list").fadeIn(400);
});
$('#type-filter-mob').on('click', function () {
  $(".filter-tabs-mobile-view button").removeClass("filt-active");
  $(".filter-tabs-mobile-view button").addClass("in-active");
  $(this).removeClass("in-active");
  // $(this).addClass("filt-active");
  $("#color-palettes-list").hide();
  $("#styles-palettes-list").hide();
  $("#flower-type-types-list").fadeIn(400);
});

/* Mobile Filter view script */

function showHideSearchFilter(current, other1, other2, clicked_btn){
  //   	console.log(current);	
  $(".page-width.filter-subblock").fadeIn(200);
  $(".filter-subblock-button").addClass("in-active");

  $('#'+other1).hide();
  $('#'+other2).hide();
  $('#'+current).fadeToggle();
  $('#'+clicked_btn).removeClass("in-active");
  //   $('#filter-subblock-selected-block').fadeToggle();
  //   $('#filter-subblock-selected-block').show();
}
