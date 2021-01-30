function generateTOC() {
    let tableOfContents = document.getElementById("samples");
    const links = [
        {
            label: "Forms",
            url: "Forms/Form.html"
        },
        {
            label: "Object Oriented Programming",
            url: "Object Oriented Programming/OOP.html"
        },
        {
            label: "Modular JavaScript",
            url: "Modular Javascript/ModJS.html"
        }
    ]

    for (var i = 0; i < links.length; i++) {
        var week = links[i];
        var li = document.createElement('li');
        var text = document.createTextNode(week.label);
        var a = document.createElement('a');

        a.setAttribute('href', week.url);
        a.appendChild(text);
        li.appendChild(a);
        tableOfContents.appendChild(li);
    }
}

generateTOC();