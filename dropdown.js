/**
 * Created by manoj.kumar on 05-08-2016.
 */


$(document).ready(function(){
    $.prototype.dropDown =function(config){
      if (config.ddElements){
         var tags = ''
          config.ddElements.forEach(function(element){
              tags += '<option>'+element+'</option>'
          });
      }
        $(this).replaceWith('<Select><option>Select values</option>'+tags+'</Select><input type="search" >');
    };
    $('dropdownsearch').dropDown({caseSensitive:true, ddElements : ['manoj', 'raj','shantanu','vikas']})


    $(document).on('click','#search', function(){
        $(this).text('');
    });

    $(document).on('blur','#search', function(){
        $(this).text('Type to search');
    });


    $(document).on('keyup','#search',function(){
        var searchKey = $(this).text().toLowerCase();
        var itemList =  $('.item');
        debugger;
        itemList.hide().filter(function(element){
            return ( $(itemList[element]).text().toLowerCase().indexOf(searchKey) !== -1);
        }).show();

        setSelectedElement(searchKey);
    });

    function setSelectedElement(searchKey){
        var itemList =  $('.item');

        itemList.forEach(function(element){
           var value = $(element).text();
            var fromText = value.indexOf(searchKey);
            var toText = value.length;

        });



    }

});