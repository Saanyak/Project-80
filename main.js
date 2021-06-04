var name_of_guests = [];

function submit() {
    var guest_name = document.getElementById("get_name").value;
    name_of_guests.push(guest_name);
    console.log (name_of_guests);
    console.log (guest_name);
    var length_of_names = name_of_guests.length;
    console.log (length_of_names);
    document.getElementById("display_names_with_commas").innerHTML=name_of_guests.toString();
}

function sorting() {
    name_of_guests.sort();
    var i = name_of_guests.join("<br>");
    console.log (name_of_guests);
    document.getElementById("sort_names").innerHTML=i.toString();
}

function show() {
    var i = name_of_guests.join("<br>");
    console.log (name_of_guests);
    document.getElementById("show_in_list").innerHTML=i.toString();
    document.getElementById("sorting_button").style.display="block";
}

function search() {
    var s = document.getElementById("search_name").value;
    var found = 0;
    var j;
    for (j=0, j<name_of_guests.length; j++;)
    {
        if (s == name_of_guests[j]){
            found = found+1;
        }
    }
    document.getElementById("found1").innerHTML="Name found " + found + " time(s)";
    console.log ("Name found " + found + " time(s)");
}