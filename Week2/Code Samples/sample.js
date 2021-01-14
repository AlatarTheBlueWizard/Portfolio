function generateTOC() {
    let tableOfContents = document.getElementById("samples");
    const links = [
        {
            label: "Programming Basics",
            url: "Programming Basics/basics.html"
        },
        {
            label: "Arrays, Logic, and Loops",
            url: "Arrays, Logic, and Loops/array.html"
        },
        {
            label: "Functions",
            url: "Functions/function.html"
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