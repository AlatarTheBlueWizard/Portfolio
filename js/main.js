function generateTOC() {
    let tableOfContents = document.getElementById("weeklyWork");
    const links = [
        {
            label: "Week 1",
            url: "Week1/W01.html"
        },
        {
            label: "Week 2",
            url: "Week2/W02.html"
        },
        {
            label: "Week 3",
            url: "Week3/W03.html"
        },
        {
            label: "Week 4",
            url: "Week4/W04.html"
        },
        {
            label: "Week 5",
            url: "Week5/W05.html"
        },
        {
            label: "Week 6 (ToDo Challenge)",
            url: "Week6_ToDo_Challenge/index.html"
        },
        {
            label: "Week 7",
            url: "Week7/W07.html"
        },
        {
            label: "Week 8",
            url: "Week8/W08.html"
        },
        {
            label: "Week 9",
            url: "Week9/W09.html"
        },
        {
            label: "Week 10",
            url: "Week10/W10.html"
        },
        {
            label: "Block 2 Challenge: Pokedex",
            url: "CB2 Second Idea/index.html"
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