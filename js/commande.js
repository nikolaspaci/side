$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("#tablecom td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("#tablecom tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" list="listeref" class="form-control" name="ref" value="" id="refsearch" >'
			+'<datalist id="listeref">'+
			  '<option value="23">'+
			  '<option value="253">'+
			  '<option value="120">'+
			 ' <option value="45">'+
			'</datalist>'+'</td>' 
			+'<td><input type="text" class="form-control" list="listearticle" name="name" id="namesearch">   '         
			+'<datalist id="listearticle">'+
			  '<option value="Terrine de St Jacques">'+
			  '<option value="Bloc de foie gras oie">'+
			  '<option value="Terrine de canard">'+
			 ' <option value="Terrine de porc">'+
			'</datalist>'+'</td>' +
			'<td><input type="text" class="form-control" name="qte" id="newqte"></td>' +
			'<td><input type="text" class="form-control" name="pu" id="newpu"></td>' +
            '<td><input type="text" class="form-control" name="remise" id="newremise"></td>' +
            '<td><input type="text" class="form-control" name="tot" id="newtot"></td>' +
			'<td><input type="text" class="form-control" name="tva" id="newtva"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("#tablecom").append(row);		
		$("#tablecom tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();

    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
	


});