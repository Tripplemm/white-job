document.addEventListener("DOMContentLoaded", function () {
    const reportForm = document.getElementById("reportForm");
    const reportResult = document.getElementById("reportResult");
    const locationOutput = document.getElementById("locationOutput");
    const dateOutput = document.getElementById("dateOutput");

    reportForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        locationOutput.textContent = "Location: " + location;
        dateOutput.textContent = "Date: " + date;
        reportResult.style.display = "block";
    });
});
