document.addEventListener('DOMContentLoaded', addDetailsServerResponse);

function addDetailsServerResponse(event)
{
    const keys      = ["quantity", "color", "size", "totalPrice"];
    let contentHtml = "";

    contentHtml += "<p>Find below the details: </p>"
    contentHtml += "<ul>";

    keys.forEach( key =>
        {
          const value = localStorage.getItem(key);  
          contentHtml += `<li><strong>${toTitleCase(key)}:</strong> ${value}</li>`;
        });

    contentHtml += "</ul>"

    details.innerHTML += contentHtml;
}