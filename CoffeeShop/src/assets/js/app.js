import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// SWEET ALERT 2
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'



import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('#contact-form')
.on("invalid.zf.abide", function(ev,elem) {
    swal(
        'Oops...',
        'Something went wrong!',
        'error'
      )
})

// form validation passed, form will submit if submit event not returned false
.on("formvalid.zf.abide", function(ev,frm) {
    var form = $(this);

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {
            var result = data;
            var response = JSON.parse(result);
            console.log(response);
            swal(
                response.message,
                'Thank you, ' + response.name + ' for your reservation',
                'success'
            );
        }
    })
})
// to prevent form from submitting upon successful validation
.on("submit", function(ev) {
  ev.preventDefault();
  console.log("Submit for form id "+ev.target.id+" intercepted");
});
// You can bind field or form event selectively
$("#foo").on("invalid.zf.abide", function(ev,el) {
alert("Input field foo is invalid");
});
$("#bar").on("formvalid.zf.abide", function(ev,frm) {
alert("Form is valid, finally!");
// do something perhaps
});