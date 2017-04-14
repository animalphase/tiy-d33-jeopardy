// example category request:
// http://jservice.io/api/category?id=18418

export default function getCategory(id) {
  return  $.ajax({
    method: 'GET',
    url: `http://jservice.io/api/category?id=${id}`,
    dataType: 'json'
  }).then(function (response) {
    console.log(response);
  })
}
