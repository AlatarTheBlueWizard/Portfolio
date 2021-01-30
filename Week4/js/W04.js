function generateTOC() {
    let tableOfContents = document.getElementById("notesAndSamples");
    const links = [
        {
            label: "Notes",
            url: "Notes/NotesW04.html"
        },
        {
            label: "Code Samples",
            url: "Code Samples/codeSampleW04.html"
        },
        {
            label: "Challenges",
            url: "Challenges/Challenge_indexW04.html"
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