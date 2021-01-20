function generateTOC() {
    let tableOfContents = document.getElementById("samples");
    const links = [
        {
            label: "Objects",
            url: "Objects/object.html"
        },
        {
            label: "Document Object Model",
            url: "DOM/dom.html"
        },
        {
            label: "Events",
            url: "Events/events.html"
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