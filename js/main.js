function generateTOC() {
    let tableOfContents = document.getElementById("weeklyWork");
    const links = [{
        label: "Week 1",
        url: "../Week1/notesW01.html"
    }]

    for (var i = 0; i < links.length; i++) {
        tableOfContents.append('<li>' + links[i] + '</li>');
    }
}