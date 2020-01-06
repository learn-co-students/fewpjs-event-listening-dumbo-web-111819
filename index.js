function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
        // console.log('clicked')
        alert('I was clicked!');
    });
}

addingEventListener();