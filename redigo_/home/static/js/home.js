const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header")
let file;
  $('body')
  .on("click","#upload_file", function(e) {
    $('#file').trigger('click')
  })
  .on("click",'#login_btn', function(e) {
  })
  .on("input","#file", function(e) {
    var fileList = this.files;
    console.log(fileList)
    file=fileList[0]
    dropArea.classList.add("active");
  showFile()
  }).on('click','#extract_btn', function(e) {
   var files_length= document.getElementById('file').files.length
    if(files_length==0)
    {
      alert('no file is uploaded')
    }
    else{
      update_input_fields()
    }
   //console.log(files_length)
  //  debugger
  })
  .on("click","#review_btn", function(e) {
    disable_or_enable_inputs(false)
  })
  .on("click","#submit_btn", function(e) {
    var edited_data={}
    edited_data['Country_field'] = $("#Country_field").val();
    edited_data['local_brand_name'] = $("#local_brand_name").val();
    edited_data['Dosage'] = $("#Dosage").val();
    edited_data['Variation_Number'] = $("#Variation_Number").val();
    edited_data['Effective_date'] = $("#Effective_date").val();
    edited_data['CLP'] = $("#CLP").val();
    edited_data['Document_Type_1'] = $("#Document_Type_1").val();
    edited_data['Document_Type_2'] = $("#Document_Type_2").val();
    edited_data['Document_Language_1'] = $("#Document_Language_1").val();
    edited_data['Document_Language_2'] = $("#Document_Language_2").val();
    edited_data['New_NPI'] = $("#New_NPI").val();
    edited_data['Tracking_Number'] = $("#Tracking_Number").val();
    edited_data['HA_approved'] = $("#HA_approved").val();
    edited_data['New_or_existing'] = $("#New_or_existing").val();
    edited_data['file_name_1'] = $("#file_name_1").val();
    edited_data['file_name_2'] = $("#file_name_2").val();

    console.log('edited_data',edited_data)
    disable_or_enable_inputs(true)

  })
  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); 
    dropArea.classList.add("active");
    let header_tag = `<header>Release to Upload File</header>`; 
    dropArea.innerHTML = header_tag; 
    // dragText.textContent = "Release to Upload File";
  });
 
  dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    let header_tag = `<header><a id="upload_file" style="color: cornflowerblue;">Upload</a>/Drop your files here</header>`; 
    dropArea.innerHTML = header_tag; 
    // dragText.textContent = "Drag & Drop to Upload File";
  });

  dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); 
       file = event.dataTransfer.files[0];
       document.getElementById('file').files=event.dataTransfer.files
    showFile();
  });

  function showFile(){
    let fileType = file.type; 
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
    if(validExtensions.includes(fileType)){ 
      let fileReader = new FileReader(); 
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; 
        let imgTag = `<img src="${fileURL}" alt="image">`; 
        dropArea.innerHTML = imgTag; 
      }
      fileReader.readAsDataURL(file);
    }else{
        // console.log('fileType',fileType,file,file['name'])
      // alert("This is not an Image File!",fileType);
      dropArea.classList.remove("active");
      // dragText.textContent = file['name'];
      
let header_tag = `<header>${file['name']}</header>`; 
dropArea.innerHTML = header_tag; 
      console.log(dragText.textContent,file['name'])
    }
  }

function update_input_fields()
{
  var updated_val='updated'
$("#Country_field").val('updated');
$("#local_brand_name").val('updated');
$("#Dosage").val('updated');
$("#Variation_Number").val('updated');
$("#Effective_date").val('updated');
$("#CLP").val('updated');
$("#Document_Type_1").val('updated');
$("#Document_Type_2").val('updated');
$("#Document_Language_1").val('updated');
$("#Document_Language_2").val('updated');
$("#New_NPI").val('updated');
$("#Tracking_Number").val('updated');
$("#HA_approved").val('updated');
$("#New_or_existing").val('updated');
$("#file_name_1").val('updated');
$("#file_name_2").val('updated');

dropArea.classList.remove("active");
let header_tag = `<header><a id="upload_file" style="color: cornflowerblue;">Upload</a>/Drop your files here</header>`; 
dropArea.innerHTML = header_tag; 
// dragText.textContent='Upload/Drop your documents here'

}

function disable_or_enable_inputs(req_Val)
{
  $("#Country_field").prop("disabled", req_Val);
    $("#local_brand_name").prop("disabled", req_Val);
    $("#Dosage").prop("disabled", req_Val);
    $("#Variation_Number").prop("disabled", req_Val);
    $("#Effective_date").prop("disabled", req_Val);
    $("#CLP").prop("disabled", req_Val);
    $("#Document_Type_1").prop("disabled", req_Val);
    $("#Document_Type_2").prop("disabled", req_Val);
    $("#Document_Language_1").prop("disabled", req_Val);
    $("#Document_Language_2").prop("disabled", req_Val);
    $("#New_NPI").prop("disabled", req_Val);
    $("#Tracking_Number").prop("disabled", req_Val);
    $("#HA_approved").prop("disabled", req_Val);
    $("#New_or_existing").prop("disabled", req_Val);
    $("#file_name_1").prop("disabled", req_Val);
    $("#file_name_2").prop("disabled", req_Val);

}