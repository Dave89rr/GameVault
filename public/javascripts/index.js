

window.addEventListener("DOMContentLoaded", async(event)=>{
    document.getElementById('new-collection').addEventListener('click', (e) => {
        const res = await fetch('/collections/new');
        return res;
        // window.location.href = '/collections/new';
    })

})
