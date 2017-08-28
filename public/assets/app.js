//FORM VALIDATION
var $form = $('.ui.form');

var validation = {
    fields: {
        first_name: {
            identifier: 'first_name',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your first name'
                }
            ]
        },
        last_name: {
            identifier: 'last_name',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your name'
                }
            ]
        },
        email: {
            identifier: 'email',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter a valid email'
                }
            ]
        },
        phone: {
            identifier: 'phone',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter a phone number'
                }
            ]
        },
        message: {
            identifier: 'message',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter a valid message'
                },
            ]
        },
    }
};

//ON SUBMIT EVENT
var settings = {
    inline: true,
    onSuccess: function () {
        alert('passed');

        console.log($form.form('get values'));
    },
    onFailure: function () {
        console.log('no pass');
    }
};

$form.form(validation, settings);
$('#confirmation').hide();
$('.login-submit').on('click', function () {
    $form.form('submit');
    $('#confirmation').show();
});
