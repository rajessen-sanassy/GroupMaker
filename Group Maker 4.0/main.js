//Generate GROUPS
$('.btn-group').on('click', function(e) {
  e.preventDefault();

  if ($('.numgroups').val() > 0) {

  var namespergroup = ($('.pergroup').val()),
    allnames = $('.names').val().split('\n'),
    allnameslen = allnames.length;

  var numgroups = Math.ceil(allnameslen / namespergroup);
  
  if($('.numgroups').val()){
  numgroups = ($('.numgroups').val());
  namespergroup = allnameslen / numgroups;
  }

  $('.groups').empty();

  for (i = 0; i < numgroups; i++) {
    $('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
  }

  $('.group').each(function() {
    for (j = 0; j < namespergroup; j++) {
      var randname = Math.floor(Math.random() * allnames.length);
      if(allnames[randname]){
        $(this).append('<p>' + allnames[randname] + '</p>');
      }
      allnames.splice(randname, 1);
      console.log(allnames);
    }
  });
  }


if ($('.pergroup').val() > 0) {
var namespergroup = parseInt($('.pergroup').val()),
    allnames = $('.names').val().split('\n'),
    allnameslen = allnames.length;

  var numgroups = Math.ceil(allnameslen / namespergroup);
  

  $('.groups').empty();

  for (i = 0; i < numgroups; i++) {
    $('.groups').append('<div class="group" id="group' + (i+1) + '"><h2>Group ' + (i+1) + '</h2></div>');
  }

  $('.group').each(function() {
    for (j = 0; j < namespergroup; j++) {
      var randname = Math.floor(Math.random() * allnames.length);
      if(allnames[randname]){
        $(this).append('<p>' + allnames[randname] + '</p>');
      }
      allnames.splice(randname, 1);
      console.log(allnames);
    }
  });
}
});



$('.toggle-wrap a').on('click', function(e){
  e.preventDefault();
  $('.wrap').toggleClass('alt');
  output.innerHTML = 0;
  output1.innerHTML = 0;
  $('.pergroup-wrap, .numgroups-wrap').find('input').val('0');

});






//Students per Group
var slider = document.getElementById("Students");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//Number of Groups
var slider1 = document.getElementById("Groups");
var output1 = document.getElementById("demo1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;

}


//APEND LIST


$('.plus').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
});



var input_textarea = document.querySelector('.names');
  

$('.save').on('click', function() {
  updateOutput();
});

//AUTO SAVE
var checked = JSON.parse(localStorage.getItem("myonoffswitch"));
document.getElementById("myonoffswitch").checked = checked;

var checkbox = document.getElementById("myonoffswitch");
localStorage.setItem("myonoffswitch", checkbox.checked);

$('.onoffswitch').on('click', function(e) {
    var checkbox = document.getElementById("myonoffswitch");
    localStorage.setItem("myonoffswitch", checkbox.checked);
  });


//AUTO TIME
var checked5 = JSON.parse(localStorage.getItem("myonoffswitch5"));
document.getElementById("myonoffswitch5").checked = checked5;


$('.onoffswitch5').on('click', function(e) {
    var checkbox5 = document.getElementById("myonoffswitch5");
    localStorage.setItem("myonoffswitch5", checkbox5.checked);
  });



$('.clear').on('click', function() {
    var clear = document.querySelector('.names');
    clear.textContent = clear.textContent.replace(clear.textContent,"");
    var checkbox = document.getElementById("myonoffswitch");
    if (checkbox.checked == true)
      updateOutput();
    if ($('.names').val()) {
    var text = $(".names").val();   
    var lines = text.split("\n");
    var count = lines.length;
    console.log(count);
    var max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;
}   else {
    var max0 = document.getElementById("Groups").max = 0;
    var max1 = document.getElementById("Students").max = 0;
}
});


//APEND TEXT
$('.append').on('click', function(e) {
  if($('.plus').val()) {
    if($('.names').val()) 
      $('#students').append('\n');
    $('#students').append($('#plus').val());
    document.getElementById("plus").value = '';
    var checkbox = document.getElementById("myonoffswitch");
    if (checkbox.checked == true)
      updateOutput();

    if ($('.names').val()) {
  text = $(".names").val();   
    lines = text.split("\n");
    count = lines.length;
    console.log(count);
    max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;
}   else {
    max0 = document.getElementById("Groups").max = 0;
    max1 = document.getElementById("Students").max = 0;
}
  }
});

  input_textarea.textContent = localStorage.getItem('students');


function updateOutput() {
  localStorage.setItem('students', input_textarea.textContent);
}

//REMOVE TEXT
$('.remove').on('click', function() {
      if($('.plus').val()) {
        var word = document.getElementById("plus").value;
        var regex = new RegExp("^" + word + "$\n*", "gim");
        var minus = document.getElementById("students");
        minus.textContent = minus.value.replace(regex, "");
        minus.textContent = minus.value.replace(/\n*$/, "");
        if (minus.textContent == false)
          document.getElementById("plus").value = '';
        var checkbox = document.getElementById("myonoffswitch");
        if (checkbox.checked == true)
          updateOutput();

        if ($('.names').val()) {
    text = $(".names").val();   
    lines = text.split("\n");
    count = lines.length;
    console.log(count);
    max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;
}   else {
    max0 = document.getElementById("Groups").max = 0;
    max1 = document.getElementById("Students").max = 0;
}
        
      }
});







//MAX VALUE FOR SLIDER
  if ($('.names').val()) {
  var text = $(".names").val();   
    var lines = text.split("\n");
    var count = lines.length;
    console.log(count);
    var max0 = document.getElementById("Groups").max = count;
    var max1 = document.getElementById("Students").max = count;
}   else {
    var max0 = document.getElementById("Groups").max = 0;
    var max1 = document.getElementById("Students").max = 0;
}
