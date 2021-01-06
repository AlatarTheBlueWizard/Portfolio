function generateTOC() {
    let tableOfContents = document.getElementById("weeklyWork");
    const links = [{
        label: "Week 1",
        url: "../Week1/notesW01.html"
    }]

    for (var i = 0; i < links.length; i++) {
        var week = links[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', week.url);
        li.innerHTML = week.label;
        a.innerHTML = li;
        tableOfContents.append(a, li);
    }
}

generateTOC();