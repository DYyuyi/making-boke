function clicktitle(){
    alert("谁让你点了")
}

document.addEventListener('DOMContentLoaded', function() {  
    const lightInput = document.getElementById('light-input');  
    lightInput.addEventListener('change', function() {  
        document.body.classList.toggle('dark', this.checked);  
    });  
}); 