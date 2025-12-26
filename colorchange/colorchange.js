const cells=document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        console.log(cell.querySelector('.cell-text').textContent + ' hovering');
    });
});
cells.forEach(cell => {
    cell.addEventListener('mouseleave', () => {
        console.log(cell.querySelector('.cell-text').textContent + ' left');
    });
});
