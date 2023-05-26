// $(document).ready(() => {

$('#nextBtn').hide();
$('#preBtn').hide();
$('#loading').hide();

var nextUrl;
var perUrl;


let list = [];



function doList(url) {

    $('#loading').show();
    $('#title').text = '';
 // select from array
 // if char is in string
 // compare two string
 // position char in string

    $.get(url, (res) => {


        res.results.forEach(element => {
            list.push(element.name);
        });


        if (res.next !== null) {
            doList(res.next);
        }


        $('#res').empty();
        $.each(list.results, (key, names) => {
            let a = list.results[key].name !== undefined ? list.results[key].name : list.results[key].title
            $('#res').append('<li>' + a + '</li>');
        });

        perUrl = list.previous;
        nextUrl = list.next;

        if (list.previous !== null) {
            $('#preBtn').show();
        } else {
            $('#preBtn').hide();
        }

        if (list.next !== null) {
            $('#nextBtn').show();
        } else {
            $('#nextBtn').hide();
        }
        $('#loading').hide();

    })

}

function seeList(url) {
    $.get(url, (list) => {

        console.log(list);
    });
}

$('#see').on('click', function (e) {

    list = doList();

    seeList('https://swapi.dev/api/');
    console.log('Here is the foo');

});

$('#nextBtn').on('click', function (e) {

    doList(nextUrl);

});



$('#preBtn').on('click', function (e) {

    console.log(perUrl);

    doList(perUrl);

})


$('#showPeople').on('click', () => {

    doList('https://swapi.dev/api/people/?page=1');
    $('#title').text('People');
    $('#res').empty();

});

$('#showFilm').on('click', () => {

    doList('https://swapi.dev/api/films/?page=1');
    $('#title').text('films');
    $('#res').empty();

});

$('#showPlanet').on('click', () => {

    doList('https://swapi.dev/api/planets/?page=1');
    $('#title').text('Planets');
    $('#res').empty();


});

$('#showSpec').on('click', () => {

    doList('https://swapi.dev/api/species/?page=1');
    $('#title').text('Species');
    $('#res').empty();


});
$('#showStarShip').on('click', () => {

    doList('https://swapi.dev/api/starships/?page=1');
    $('#title').text('Star Ships');
    $('#res').empty();

});
$('#showVehicle').on('click', () => {

    doList('https://swapi.dev/api/vehicles/?page=1');
    $('#title').text('Vehicles');
    $('#res').empty();

});
// });