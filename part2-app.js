// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

// When the button to remove is clicked, remove each title and rating from the DOM.

let currentId = 0;

let moviesList = []

$(function() {
    $('form').on('click', 'button', function(event){
        event.preventDefault();
        let titleInput = $("input").eq(0).val()
        let ratingInput = $("input").eq(1).val()
    
        let movieData = { titleInput, ratingInput, currentId }
        const HTMLtoAppend = createMovieDataHTML(movieData)
    
        currentId++
        moviesList.push(movieData);
    
        $('table').append(HTMLtoAppend);
        $('table').trigger('reset')
    })
});

$('table').on('click', 'btn.btn-danger', function(e) {
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(e.target).data('deleteId'))
    console.log(e)
    moviesList.splice(indexToRemoveAt, 1)

    $(e.target)
        .closest('tr')
        .remove();
})

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.titleInput}</td>
        <td>${data.ratingInput}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }