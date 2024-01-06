(function (){
switch (new Date().getDay()) {
    case 0:
        var div = document.getElementById("sunday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-sunday").setAttribute("class", "nav-link active")
        break
    case 1:
        var div = document.getElementById("monday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-monday").setAttribute("class", "nav-link active")
        break
    case 2:
        var div = document.getElementById("tuesday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-tuesday").setAttribute("class", "nav-link active")
        break
    case 3:
        var div = document.getElementById("wednesday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-wednesday").setAttribute("class", "nav-link active")
        break
    case 4:
        var div = document.getElementById("thursday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-thursday").setAttribute("class", "nav-link active")
        break
    case 5:
        var div = document.getElementById("friday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-friday").setAttribute("class", "nav-link active")
        break
    case 6:
        var div = document.getElementById("saturday").setAttribute("class", "col-lg-9 tab-pane fade show active")
        var div = document.getElementById("tab-saturday").setAttribute("class", "nav-link active")
        break
}
})()
