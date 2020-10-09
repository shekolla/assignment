let ready = $(document).ready(function () {
    $(".show-form-for-electric-vehicles").hide();

    var form_count = 1, form_count_form, next_form, total_forms;
    total_forms = $("fieldset").length;
    console.log("form count=" + total_forms);


    // code for keyup for making form dynamic of people in Dwelling
    $('#number-of-people').keyup(function (e) {
        
        $(".show-form-for-people-details").html('');
        if($('#number-of-people').val()  > 10){
            $("#error-number-of-people").html("<p class='error-msg' >maximum 10 children allowed.</p>").show().fadeOut(1500);
            return false;
        }
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message   
        $("#error-number-of-people").html("<p class='error-msg' >Please enter number only.</p>");
        $("#error-number-of-people").show().fadeOut(1500)
               return false;
        }

        $('#number-of-people').val();
        var length = ($('#number-of-people').val());
        for (i = 0; i < length; i++) {
            let html_data = `								<div class="col-id-6">
            <b>Please fill Person ${i + 1} Detail</b>
            <div class="col-id-12 ">
                <label for="your_given_name_${i}">Given Name </label><div id="error-given-name-${i}"></div>
                <input type="text" class="form-control" id="given-name-${i}"  name="given_name_${i}" placeholder="please enter given name" required>
            </div>

            <div class="col-id-12 ">
                <label for="your_family_name_${i}">Family Name </label><div id="error-family-name-${i}"></div>
                <input type="text" class="form-control" id="family-name-${i}"  name="family_name_${i}" placeholder="please enter family name" required>
            </div>

            <div class="col-id-12">
            <label for="gender_${i}">Gender</label>	<div id="error-gender-${i}"></div>
            <input type="radio" name="gender_${i}" value="male" checked>Male
            <input type="radio" name="gender_${i}" value="female">Female
            </div>

            <div class="col-id-12">
                <label for="dob_${i}">Date Of Birth</label>	<div id="error-dob-${i}"></div>
                <input type="date" class="form-control" id="ÿour-dob-${i}"  name="your_dob-${i}" placeholder="Date of birth" required>
            </div>

            <div class="col-id-12">
                <label for="country_of_birth_${i}">Country Of Birth</label>	<div id="error-country-of-birth-${i}"></div>
                <input type="radio" name="country_of_birth_${i}" value="Australia" checked>Australia<br>
                <input type="radio" name="country_of_birth_${i}" value="New Zealand">New Zealand<br>
                <input type="radio" name="country_of_birth_${i}" value="Fiji">Fiji<br>
                <input type="radio" name="country_of_birth_${i}" value="" >Other <input type="text" name="other_country_${i}" />
            </div>
                
            <div class="col-id-12">
                <label for="arrival_year_${i}">In what year did you arrive in Australia?</label><div id="error-arrival-year-${i}"></div>
                <input type="text" class="form-control" id="ÿour-arrival-year-${i}"  name="arrival_year_${i}" placeholder="please enter your arrival year" required>
            </div>
            <div class="col-id-12">
            <label for="australian_citizen_${i}">Are you an Australian Citizen?</label>	<div id="error-australian-citizen-${i}"></div>
            <input type="radio" name="australian_citizen_${i}" value="yes" checked>Yes
            <input type="radio" name="australian_citizen_${i}" value="no">No
            </div>
        <div class="col-id-12">
            <label for="language_${i}">Do you speak a Language other than English?</label> <br>

            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" id="EnglishOnly-${i}" value="EnglishOnly" checked>&nbsp;English Only&nbsp;&nbsp;
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="Mandarin">&nbsp;Mandarin&nbsp;&nbsp;
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="Italian">&nbsp;Italian&nbsp;&nbsp;
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="Arabic">&nbsp;Arabic&nbsp;&nbsp;<br/>
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="Cantonese">&nbsp;Cantonese&nbsp;&nbsp;
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="Greek">&nbsp;Greek&nbsp;&nbsp;
            <input type="checkbox" name="language_${i}" class="language_checkbox_${i}" value="" >Other <input type="text" name="others_languages_${i}" />
        </div>

        <div class="col-id-12">
            <label for="speaking_ability_${i}">How well do you speak English?</label> <br>

            <input type="radio" name="speaking_ability_${i}" value="VeryWell" checked>&nbsp;Very Well&nbsp;&nbsp;
            <input type="radio" name="speaking_ability_${i}" value="Well">&nbsp;Well&nbsp;&nbsp;
            <input type="radio" name="speaking_ability_${i}" value="Not Well">&nbsp;Not Well&nbsp;&nbsp;
            <input type="radio" name="speaking_ability_${i}" value="Not At All">&nbsp;Not At All&nbsp;&nbsp;<br/>
        </div>
        <div class="col-id-12 ">
            <label for="secondary_school_${i}"> What is the highest year of secondary school the person has completed?</label><br>

             <select id="secondary-school" name="secondary_school_${i}" class="form-control">
                <option value="year 7" selected="">year 7</option>
                <option value="year 8">year 8</option>
                <option value="year 9">year 9</option>
                <option value="year 10">year 10</option>
                <option value="year 11">year 11</option>
                <option value="year 12">year 12</option>
                <option value="Did not go to high school">Did not go to high school</option>
             </select>
        </div>
        <div class="col-id-12 ">
            <label for="highest_qualification_${i}"> What is the highest year of secondary school the person has completed?</label><br>

            <select id="highest-qualification" name="highest_qualification_${i}" class="form-control">
                <option value="Cert. I" selected="">Cert. I</option>
                <option value="Cert. II">Cert. II</option>
                <option value="Cert. III">Cert. III</option>
                <option value="Cert. IV">Cert. IV</option>
                <option value="Bachelor Degree">Bachelor Degree</option>
                <option value="Associate Diploma">Associate Diploma</option>
                <option value="Diploma">Diploma</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
                <option value="Do not have any highest qualification">Do not have any highest qualification</option>
            </select>
        </div>
            <div class="col-id-12">
                <label for="main_field_${i}">What is the main field of study of your Highest Qualification?</label><div id="error-main-field-${i}"></div>
                <input type="text" class="form-control" id="main-field-${i}"  name="main_field_${i}" placeholder="please enter your main field" required>
            </div>
        </div>`;

            $('.show-form-for-people-details').append(html_data)
        }
    });

    //  function after clicking next button. shows next fieldset and hide previos field
    $(".next").click(function () {
        console.log("i am form " + form_count);
        form_count_form = $(this).parent();
        var validation, next_step;

        validation = true;
        next_step=true;
        console.log("next form value" + next_form);
        console.log($('#number-of-people').val());
        if (validation) {
            if(form_count==1){
                next_step=true;
                console.log('i am in' +form_count);
                let noOfPeople = $('#number-of-people').val();
                if (noOfPeople < 1) {
                    $(`#error-number-of-people`).html("<p class='error-msg' >Number of People should be atleast one</p>");
                    next_step=false;
                }
                for (let peopleNo = 0; peopleNo < noOfPeople; peopleNo += 1) {

                    console.log('i am inside validation', peopleNo);

                    let givenName = $(`#given-name-${peopleNo}`).val() || '';
                    // validating givenName
                    if(givenName=="") {
                        $(`#error-given-name-${peopleNo}`).html("<p class='error-msg' >Given Name is required.</p>");
                        $(`#error-given-name-${peopleNo}`).show();
                        next_step=false;
                    }else if(givenName.length > 30 ) {
                        $(`#error-given-name-${peopleNo}`).html("<p class='error-msg' >Maximum 30 characters allowed</p>");

                        next_step=false;

                    }else{
                        $(`#error-given-name-${peopleNo}`).hide();
                    }

                    let familyName = $(`#family-name-${peopleNo}`).val() || '';
                    // validating FamilyName
                    if(familyName=="") {
                        $(`#error-family-name-${peopleNo}`).html("<p class='error-msg' >Family Name is required.</p>");
                        $(`#error-family-name-${peopleNo}`).show();
                        next_step=false;
                    }else if(familyName.length > 30 ) {
                        $(`#error-family-name-${peopleNo}`).html("<p class='error-msg' >Maximum 30 characters allowed</p>");

                        next_step=false;

                    }else{
                        $(`#error-family-name-${peopleNo}`).hide();
                    }



                    //validating date of birth  field
                    let your_dob=$(`#ÿour-dob-${peopleNo}`).val() || '';
                    if(your_dob=="") {
                        $(`#error-dob-${peopleNo}`).html("<p class='error-msg' >Date of birth is required.</p>");
                        next_step=false;
                    }else{
                        $(`#error-dob-${peopleNo}`).hide();
                    }

    
                    //validating year of arrival  field
                    let your_arrival = $(`#ÿour-arrival-year-${peopleNo}`).val() || '';
                    console.log($(`ÿour-arrival-year-${peopleNo}`).val());
                    console.log(your_arrival);

                    if(your_arrival=="") {
                        $(`#error-arrival-year-${peopleNo}`).html("<p class='error-msg' >Year of Arrival is required.</p>");
                        next_step=false;
                    }else{
                        $(`#error-arrival-year-${peopleNo}`).hide();
                    }


                    //validating Main field
                    let main_field = $(`#main-field-${peopleNo}`).val() || '';

                    if(main_field=="") {
                        $(`#error-main-field-${peopleNo}`).html("<p class='error-msg' >Main Field is required.</p>");
                        next_step=false;
                    }else{
                        $(`#error-main-field-${peopleNo}`).hide();
                    }

                    // // For removing others checks when checkedOn EnglishOnly
                    // $(`input:checkbox[name="language_${peopleNo}"]`).change(
                    //     function(){
                    //         if ($(this).is(':checked') && $(this).val() == 'EnglishOnly') {
                    //             $(`.language_checkbox_${peopleNo}`).prop('checked', false);
                    //             $(`#EnglishOnly-${peopleNo}`).prop("checked", true);
                    //         }
                    //     });
                }
            }
            if(form_count==2){
                console.log(next_step);
                next_step=true;
                console.log('i am in'+ form_count);
                    // validating monthly download field
                    let monthly_download=$('#monthly-download').val() || '';
                    if(monthly_download=="") {
                        $('#error-monthly-download').html("<p class='error-msg' >Please Enter Monthly Download if no internet enter 0</p>");
                        next_step=false;
                    }else{
                        $('#error-monthly-download').hide();
                    }

                    // validating monthly download field
                    let no_of_bedrooms=$('#bedrooms').val() || '';
                    if(no_of_bedrooms=="") {
                        $('#error-bedrooms').html("<p class='error-msg' >Please Enter No of Bedrooms</p>");
                        next_step=false;
                    }else{
                        $('#error-bedrooms').hide();
                    }

                    let electric_vehicles_check = $("input[name='electric_vehicles']:checked").val() || '';
                    if(electric_vehicles_check=="") {
                        $('#error-electric-vehicles').html("<p class='error-msg' >Please select a Yes or No</p>");
                        next_step=false;
                    }else{
                        $('#error-electric-vehicles').hide();
                    }
            }
            


            // Display error if any else go to next form
            if (next_step==false) {

                return false;
            } else {

             

                form_count_form = $(this).parent();

                console.log("form count"+form_count_form+ "next form value" + next_form + "next_step status"+next_step);
                var next_form = $(this).parent().next();

                console.log(next_form);
                next_form.show();
                form_count_form.hide();
                // console.log("form count text" + form_count_form);

                setProgressBar(++form_count);
                console.log('form count' + form_count);



            }



        }


    });

    // previous function : shows previous form with dynamic progress bar value
    $(".previous").click(function () {
        form_count_form = $(this).parent();
        next_form = $(this).parent().prev();
        next_form.show();
        form_count_form.hide();
        setProgressBar(--form_count);
    });

    setProgressBar(form_count);

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / total_forms) * curStep;
        percent = percent.toFixed();
        $("percentage_text").text(percent);
        $(".progress-bar")
            .css("width", percent + "%")
            .html(percent + "%");
    }

    // Handle form submit and validation
  $( "#user_form" ).submit(function(event) {    

            var selectValue = $("#countryselector option:selected").val();
            console.log("value of select"+selectValue);

            if(selectValue==""){
             $('#error-countryselector').html("<p class='error-msg' >travel date is required.</p>");
             event.preventDefault();

               return false;
            }else{
                return true;
            }

   
  });  

  // For Showing electri vehicles is checked yes
  $('input:radio[name="electric_vehicles"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'yes') {
            $(".show-form-for-electric-vehicles").show();
        } else {
            $(".show-form-for-electric-vehicles").hide();
        }
    });

    // help section with toogle functionality
    $('.first-help-section').click(function () {
        var radioValue = $("input[name='first_help_section']:checked").val();

        if(radioValue){
            $("#display-first-help-section").css("display","block");
        }else{

            $("#display-first-help-section").css("display","none");


        }
    })

    // help section with toogle functionality

    $('.second-help-section').click(function () {
        var radioValue = $("input[name='second_help_section']:checked").val();

        if(radioValue){
            $("#display-second-help-section").css("display","block");
        }else{

            $("#display-second-help-section").css("display","none");


        }
    })
    // help section with toogle functionality

    $('.third-help-section').click(function () {
        var radioValue = $("input[name='third_help_section']:checked").val();

        if(radioValue){
            $("#display-third-help-section").css("display","block");
        }else{

            $("#display-third-help-section").css("display","none");


        }
    })
});
