const input = document.getElementById('searchbar');
const grid = document.getElementsByClassName('grid')[0];
console.log('huihuihui');

input,addEventListener('keydown',function(event){
    if(event.key === 'Enter')
    loadimg();
})

function loadimg(){
    removeimg();
    const url = 'https://api.unsplash.com//search/photos/?query='+input.value+'&per_page=98&client_id=Rtl7irCpuRmxtWgqapXoZ0VFePssYKam7bJlZvTvE44'
    fetch(url)
    .then(response =>{
        if(response.ok){
           return response.json();
        console.log(response);}
        else   
           throw new error(response.status);
        console.log(response);
          
    })
    .then(data => {
        const imgnodes = [];
        const results = data.results || data;
        for (let i = 0; i < results.length; i++) {          
            imgnodes[i] = document.createElement('div');
            imgnodes[i].className = 'img';
            imgnodes[i].style.backgroundImage = 'url('+results[i].urls.raw+')';
            imgnodes[i].addEventListener('dblclick',function(){
                window.open(results[i].links.download,'_blank');
            })
        grid.appendChild(imgnodes[i]);
        }
    })
    .catch(error => {
        console.error('Error fetching images:', error);
        alert('Error fetching images. Please try again.');
    });
    }
function removeimg(){
grid.innerHTML = ' ';
}
// result[0].link.download
