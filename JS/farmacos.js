new Grid({
  data: [
    ['Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com']
  ],
  columns: ['Name', 'Age', 'Email']
}).render(document.getElementById('wrapper'));
