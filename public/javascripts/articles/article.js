window.addEventListener('DOMContentLoaded', () => {
  go();
});
function go() {
  const elements = document.querySelectorAll('.btn-danger');
  const articleContainer = document.querySelector('#article-list-container');

  elements.forEach((e) => {
    e.addEventListener('click', ($event) => {
      const articleId = $event.target.getAttribute('articleId');
      axios
        .delete('/articles/' + articleId)
        .then(function (response) {
          articleContainer.innerHTML = response.data;
          go();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
