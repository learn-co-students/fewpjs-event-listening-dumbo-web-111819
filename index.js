function addingEventListener() {
const input = document.getElementById('input');
input.addEventListener('click', function(event) {
    console.log('I was clicked!');
});
}
//the function addingEventListener() has to be called in the console for it to work.
//the block without the function will run on the console automatically. 