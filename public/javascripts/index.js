$(document).ready(function(){
	$('#form').submit(function(){
		console.log("This is running")
		return true
	})
	
	$('.input-group.date').datepicker({
	    format: "dd/mm/yyyy",
	    todayBtn: true,
	    multidate: false,
	    todayHighlight: true,
	    datesDisabled: ['10/06/2016', '10/21/2016']
	});
	
	
	
	
	
	$("#flights #oneWay").click(function(){
		$("#retDate").hide();
		$("#flights #depDate").removeClass('col-sm-6')
		$("#flights #depDate").addClass('col-sm-12')
		$("#oneWay").addClass('btn-danger')
		$("#oneWay").removeClass('btn-default')
		$("#roundTrip").addClass('btn-default')
		$("#roundTrip").removeClass('btn-danger')
	});
	
	$("#flights #roundTrip").click(function(){
		$("#retDate").show();
		$("#flights #depDate").removeClass('col-sm-12')
		$("#flights #depDate").addClass('col-sm-6')
		$("#roundTrip").addClass('btn-danger')
		$("#roundTrip").removeClass('btn-default')
		$("#oneWay").addClass('btn-default')
		$("#oneWay").removeClass('btn-danger')
	});
	
	$("#flights #economy").click(function(){
		$("#economy").addClass('btn-danger')
		$("#economy").removeClass('btn-default')
		$("#business").addClass('btn-default')
		$("#business").removeClass('btn-danger')
		$("#firstClass").addClass('btn-default')
		$("#firstClass").removeClass('btn-danger')
	})
	
	$("#flights #business").click(function(){
		$("#business").addClass('btn-danger')
		$("#business").removeClass('btn-default')
		$("#firstClass").addClass('btn-default')
		$("#firstClass").removeClass('btn-danger')
		$("#economy").addClass('btn-default')
		$("#economy").removeClass('btn-danger')
		
	})
	
	$("#flights #firstClass").click(function(){
		$("#firstClass").addClass('btn-danger')
		$("#firstClass").removeClass('btn-default')
		$("#economy").addClass('btn-default')
		$("#economy").removeClass('btn-danger')
		$("#business").addClass('btn-default')
		$("#business").removeClass('btn-danger')
		
	})
	
	
	
	$("#trains #firstClass").click(function(){
		$("#trains #firstClass").addClass('btn-danger')
		$("#trains #firstClass").removeClass('btn-default')
		$("#secondClass").addClass('btn-default')
		$("#secondClass").removeClass('btn-danger')
		$("#thirdClass").addClass('btn-default')
		$("#thirdClass").removeClass('btn-danger')
		$("#sleeper").addClass('btn-default')
		$("#sleeper").removeClass('btn-danger')
		$("#general").addClass('btn-default')
		$("#general").removeClass('btn-danger')
		//$("#firstClass").prop(checked,false)
		//$("#flights #firstClassInput").prop('checked',true)
		//$("#flights #businessInput").prop('checked',false)
		
	})
	
	$("#trains #secondClass").click(function(){
		$("#secondClass").addClass('btn-danger')
		$("#secondClass").removeClass('btn-default')
		$("#trains #firstClass").addClass('btn-default')
		$("#trains #firstClass").removeClass('btn-danger')
		$("#thirdClass").addClass('btn-default')
		$("#thirdClass").removeClass('btn-danger')
		$("#sleeper").addClass('btn-default')
		$("#sleeper").removeClass('btn-danger')
		$("#general").addClass('btn-default')
		$("#general").removeClass('btn-danger')
		
	})
	
	$("#trains #thirdClass").click(function(){
		$("#thirdClass").addClass('btn-danger')
		$("#thirdClass").removeClass('btn-default')
		$("#secondClass").addClass('btn-default')
		$("#secondClass").removeClass('btn-danger')
		$("#trains #firstClass").addClass('btn-default')
		$("#trains #firstClass").removeClass('btn-danger')
		$("#sleeper").addClass('btn-default')
		$("#sleeper").removeClass('btn-danger')
		$("#general").addClass('btn-default')
		$("#general").removeClass('btn-danger')
		
	})
	
	$("#trains #general").click(function(){
		$("#general").addClass('btn-danger')
		$("#general").removeClass('btn-default')
		$("#secondClass").addClass('btn-default')
		$("#secondClass").removeClass('btn-danger')
		$("#thirdClass").addClass('btn-default')
		$("#thirdClass").removeClass('btn-danger')
		$("#sleeper").addClass('btn-default')
		$("#sleeper").removeClass('btn-danger')
		$("#trains #firstClass").addClass('btn-default')
		$("#trains #firstClass").removeClass('btn-danger')
		
	})
	
	$("#trains #sleeper").click(function(){
		$("#sleeper").addClass('btn-danger')
		$("#sleeper").removeClass('btn-default')
		$("#trains #firstClass").addClass('btn-default')
		$("#trains #firstClass").removeClass('btn-danger')
		$("#thirdClass").addClass('btn-default')
		$("#thirdClass").removeClass('btn-danger')
		$("#secondClass").addClass('btn-default')
		$("#secondClass").removeClass('btn-danger')
		$("#general").addClass('btn-default')
		$("#general").removeClass('btn-danger')
		
	})
	
	
	$("#flights #incrementPass").click(function(){
		if(parseFloat($("#flights #adult").val()) == 10){
			return;
		}
		$("#flights #adult").val(parseFloat($("#flights #adult").val()) + 1)
	})
	
	$("#flights #decrementPass").click(function(){
		if(parseFloat($("#flights #adult").val()) == 1){
			return;
		}
		$("#flights #adult").val(parseFloat($("#flights #adult").val()) - 1)
	})
	
	$("#trains #incrementPass").click(function(){
		if(parseFloat($("#trains #adult").val()) == 10){
			return;
		}
		$("#trains #adult").val(parseFloat($("#trains #adult").val()) + 1)
	})
	
	$("#trains #decrementPass").click(function(){
		if(parseFloat($("#trains #adult").val()) == 1){
			return;
		}
		$("#trains #adult").val(parseFloat($("#trains #adult").val()) - 1)
	})
	
	$("#buses #incrementPass").click(function(){
		if(parseFloat($("#buses #adult").val()) == 10){
			return;
		}
		$("#buses #adult").val(parseFloat($("#buses #adult").val()) + 1)
	})
	
	$("#buses #decrementPass").click(function(){
		if(parseFloat($("#buses #adult").val()) == 1){
			return;
		}
		$("#buses #adult").val(parseFloat($("#buses #adult").val()) - 1)
	})
	
	
	
	$("#buses #sleeper").click(function(){
		$("#buses #sleeper").addClass('btn-danger')
		$("#buses #sleeper").removeClass('btn-default')
		$("#buses #seater").addClass('btn-default')
		$("#buses #seater").removeClass('btn-danger')
	})
	
	$("#buses #seater").click(function(){
		$("#buses #seater").addClass('btn-danger')
		$("#buses #seater").removeClass('btn-default')
		$("#buses #sleeper").addClass('btn-default')
		$("#buses #sleeper").removeClass('btn-danger')
	})
	
})

$(function() {
    var availableTags = [
      "AMD",
      "CHN",
      "DEL",
      "MUM",
      "KAR",
      "HKG",
      "NYK",
      "KOL",
    ];
    $( "#flights #tagArr" ).autocomplete({
      source: availableTags
    });
	
	$( "#trains #tagArr").autocomplete({
		source: availableTags
	});
	
	$("#buses #tagArr").autocomplete({
		source: availableTags
	});
	
  });
  
  $(function() {
      var availableTags = [
        "AMD",
        "CHN",
        "DEL",
        "MUM",
        "KAR",
        "HKG",
        "NYK",
        "KOL",
      ];
      $( "#flights #tagDep" ).autocomplete({
        source: availableTags
      });
	  
      $( "#trains #tagDep" ).autocomplete({
        source: availableTags
      });
	  
      $( "#buses #tagDep" ).autocomplete({
        source: availableTags
      });
	  
	  
	  
    });
	
	
	
  

