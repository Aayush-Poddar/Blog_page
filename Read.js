function getdata() {
    var user=document.getElementById("user").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('user/'+user).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().Blog1;

        //now we have data in variables
        //now show them in our html

        document.getElementById("blog1").innerHTML=blog1;

    })
}