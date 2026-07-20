document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const archive = JSON.parse(localStorage.getItem("archive")) || [];

    archive.push({
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        date: new Date().toLocaleString("ja-JP")
    });

    localStorage.setItem("archive", JSON.stringify(archive));

    location.href = "hagino.html";

});