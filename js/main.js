function generateTOC() {
    let tableOfContents = document.getElementById("weeklyWork");
    const links = [
        {
            label: "Week 1",
            url: "Week1/W01.html"
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