/* alert('This is the resume page of Your Name') */

function showDescription(descript) {
    $("#description").html("Description:"+descript)
    }
function hideDescription() {
    $("#description").html("")
    }

function validate(){

    var zipcode = $("#zipcode").val();
    if  ((zipcode.length!=5) || isNAN(zipcode)){
        alert("Zip code is not valid. It needs to be 5 digits");
        return false;
    }
}

