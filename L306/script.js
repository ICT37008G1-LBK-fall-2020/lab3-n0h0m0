
let studentBase = ['გიორგი', 'ნიკა' , 'რამაზი' , 'მალხაზი' , 'გიო' , 'ნიკიტა'];

let input = document.getElementById('search');

input.addEventListener('input', function(){
    //console.log('input value changed');
    console.log('value: '+input.value);

    let filteredStudents = studentBase.filter(c => c.includes(input.value));

    //console.log(filteredStudents);

    displaySearchResults(filteredStudents);

});



function displaySearchResults(students){
    let container = document.getElementById('search-results');

    container.innerHTML = '';

    let divs = students.map(c => '<div>' + c + '</div>');
    
    let markup = divs.join('\r\n');
    //console.log(markup);
    container.innerHTML = markup;
}