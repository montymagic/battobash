    function read(){
    setTimeout(jQuery.get('now.txt',function(data){
    document.write(data);}),1000);
    }
