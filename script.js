function uploadCSV() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a CSV file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const csvData = event.target.result;
        const lines = csvData.split('\n');

        // Remove the header line if it exists
        lines.shift();

        const tableBody = document.getElementById('productTableBody');

        lines.forEach(line => {
            const row = document.createElement('tr');

            const columns = line.split(',');

            // Check if the line has the correct number of columns
            if (columns.length === 7) {



                row.innerHTML = `
                    <td>${columns[0]}</td>
                    <td>${columns[1]}</td>
                    <td><img src="${columns[3]}" class="image"> <span>${columns[2]}</span></td>
                    <td>${columns[4]}</td>
                    <td>${columns[5]}</td>
                    <td ><div class="prix-container">
                        <div class="prix">${columns[6]}</div> <svg style="stroke:blueviolet;"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-history"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 8l0 4l2 2" /><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                    </div> </td>`;
                  
                
                
                

                // Append the new row to the table body
                tableBody.appendChild(row);
            }
        });
    };

    reader.onerror = function() {
        alert("Error reading file.");
    };

    reader.readAsText(file);
}
