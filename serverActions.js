// Inside your JavaScript file (databasejs.js)
document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');
    table.addEventListener('click', (event) => {
        if (event.target.classList.contains('toggle-button')) {
            // Get the row containing the button
            const row = event.target.closest('tr');
            // Toggle the live status (assuming it's in the second <td>)
            const liveStatusCell = row.querySelector('td:nth-child(2)');
            liveStatusCell.textContent = liveStatusCell.textContent === 'true' ? 'false' : 'true';
        }
    });
});
