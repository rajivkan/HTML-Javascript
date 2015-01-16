var arrayData = [];
		function insertData(){
			//debugger;
			if(document.getElementById("btnSubmit").value == "Submit"){
				var objForm = {};
				objForm.studentId = Math.random();
				objForm.name = document.getElementById("txtName").value;
				objForm.email = document.getElementById("txtEmail").value;
				objForm.password = document.getElementById("txtPassword").value;
				objForm.mobile = document.getElementById("txtMobile").value;
				arrayData.push(objForm);
			}
			else{
				editRecord.name = document.getElementById("txtName").value;
				editRecord.email = document.getElementById("txtEmail").value;
				editRecord.password = document.getElementById("txtPassword").value;
				editRecord.mobile = document.getElementById("txtMobile").value;
			}
		}
		
		function formDisplay(){
			//alert("Form Display ");
			//document.getElementById("formDisplay").innerHTML = arrayData;
			//document.getElementById("formDisplay").value = arrayData;
			//document.getElementById("formDisplay").value = objForm;
			//alert("Form Display TEST");
			var strRecord = "<tr><td style='color:#ff0000'>Name</td><td style='color:#ff0000'>Email</td><td>Action</td></tr>";
			for(var i=0; i < arrayData.length; i++){
				strRecord = strRecord + '<tr><td>'+arrayData[i].name+'</td><td>'+arrayData[i].email+'</td><td><button onclick="onDeleteRecord('+ arrayData[i].studentId +')">Delete</button> <button onclick="onEditRecord('+ arrayData[i].studentId +')">Edit</button></td></tr>';
				//strRecord += "<tr><td>"+arrayData[i].name+"</td><td>"+arrayData[i].email+"</td></tr>";
			}

			document.getElementById("tblData").innerHTML = strRecord;
		}

		function onDeleteRecord(studentId){
			if(confirm("Are you sure you want to delete this record?")){
				for(var i=0; i < arrayData.length; i++){
					if(arrayData[i].studentId == studentId){
						arrayData.splice(i, 1);
						break;
					}
				}
				formDisplay();
			}
		}
		var editRecord = {};
		function onEditRecord(studentId){
			for(var i=0; i < arrayData.length; i++){
				if(arrayData[i].studentId == studentId){
					editRecord = arrayData[i];
					document.getElementById("txtName").value = editRecord.name;
					document.getElementById("txtEmail").value = editRecord.email;
					document.getElementById("txtPassword").value = editRecord.password;
					document.getElementById("txtMobile").value = editRecord.mobile;

					document.getElementById("btnSubmit").value = "Edit";
					break;
				}
			}
		}

		function resetForm(){
			// for(var i=0; i < document.getElementsByClassName("text-box").length; i++){
			// 	document.getElementsByClassName("text-box")[i].value = "";
			// }
			document.getElementById("form1").reset();
			document.getElementById("btnSubmit").value = "Submit";
		}
		function submitForm(){
			if(document.getElementById("txtName").value == ""){
				alert("Name is required.");
				document.getElementById("txtName").focus();
				return false;
			}
			if(document.getElementById("txtEmail").value == ""){
				alert("Email is required.");
				document.getElementById("txtEmail").focus();
				return false;
			}
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!filter.test(document.getElementById("txtEmail").value)) {
		    	alert('Please provide a valid email address');
		    	document.getElementById("txtEmail").focus();
				return false;
		    }
		    if(document.getElementById("txtMobile").value == ""){
				alert("Mobile is required.");
				document.getElementById("txtMobile").focus();
				return false;
			}
			var mob = document.getElementById("txtMobile").value.match(/\d/g);
			if(mob == null || mob.join("").length < 2){
				alert("Please provide a valid mobile number.");
				document.getElementById("txtMobile").focus();
				return false;
			}
			if(document.getElementById("txtPassword").value == ""){
				alert("Password is required.");
				document.getElementById("txtPassword").focus();
				return false;
			}
			//alert("Form Complete");
			//
			insertData();
			//
			formDisplay();
			//
			resetForm();
		}