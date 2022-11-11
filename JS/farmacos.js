new Grid({
  data: [
    ['Mike', 33, 'mike@murphy.com'],
    ['John', 82, 'john@conway.com'],
    ['Sara', 26, 'sara@keegan.com']
  ],
  columns: ['Name', 'Age', 'Email']
})

$(function() {
 
    $("#jsGrid").jsGrid({
        height: "90%",
        width: "100%",
 
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
 
        pageSize: 15,
        pageButtonCount: 5,
 
        deleteConfirm: "Do you really want to delete the client?",
 
        controller: db,
 
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
            { type: "control" }
        ]
    });
 
}).render(document.getElementById('wrapper'));
