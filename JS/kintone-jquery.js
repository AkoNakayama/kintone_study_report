/**
 * @author 中山 亜子
 */

$(function(){
	$('#ok')
	.on('click', function(){
		var $this = $(this);
		var formData = getFormData();
		var params = {
			"app":24,
			"record":{
				"firstName":{"value": formData.firstName},
				"schoolYear":{"value": formData.schoolYear},
				"sex":{"value": formData.sex}
			}
		};
		
	var kintoneProxyUrl = 'https://xx1ir.cybozu.com/k/v1/record.json';
	var kintoneApiToken = "LpsGVrvypwX7vVPOQoGZQyowlvFZmK7l1PehPQyc";

    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', kintoneProxyUrl, true);
    // xhr.setRequestHeader("X-Cybozu-API-Token","LpsGVrvypwX7vVPOQoGZQyowlvFZmK7l1PehPQyc");
    // xhr.responseType = 'json';
    // xhr.onload = function(e) {
        // if (this.status == 200) {
            // var result = this.response;
            // console.log(result);
        // }
    // };
//  
    // xhr.send(params);


	// var kintoneApi = new kintone.proxy(
										// kintoneProxyUrl,
										// 'POST',
										// {
										// 'X-Cybozu-API-Token':'LpsGVrvypwX7vVPOQoGZQyowlvFZmK7l1PehPQyc',
										// 'Content-Type': 'application/json'
										// },
										// params,
										// function(body, status, headers) {
											// console.log(status, params.parse(body));
										// });	

	$.ajax({
	    url : kintoneProxyUrl,
	    type : 'POST',
	    dataType : 'jsonp',
	    jsonp : "callbackChange",
	    cache: false,
	    headers: {
	    	"X-Cybozu-API-Token": 'LpsGVrvypwX7vVPOQoGZQyowlvFZmK7l1PehPQyc',
	    	"Content-Type" : "application/json"
	    },
	    data : {
				"app" : "24",
				"record":{
							"firstName":{"value": "ako"},
							"schoolYear":{"value": "3"},
							"sex":{"value": "女子"}					
						}
				} ,
	    success : alert("success"),
	        // ロード完了時にここが呼ばれる
	    error : function(XMLHttpRequest, textStatus, errorThrown) {
           // $("#XMLHttpRequest").html("XMLHttpRequest : " + XMLHttpRequest.status);
            // $("#textStatus").html("textStatus : " + textStatus);
 			alert(errorThrown.message + ":" + textStatus + ":" + XMLHttpRequest.status);
            // $("#errorThrown").html("errorThrown : " + errorThrown.message);
	    }
 
	});
	
	
		// kintone.api(
			// kintone.api.url('/k/v1/record',true),
			// 'POST',
			// params,
			// function(resp){
// 				
			// },
			// function(resp){
// 				
			// }
		// );



	});
	
	function getFormData(){
		var formDataObject = {
			firstName:$('#first_name').val(),
			sex:"男子",
			schoolYear:"3"
		};
		return formDataObject;
	}
});		
