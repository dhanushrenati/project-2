var http=require('http')
http.createServer(
    function(req,res){
        res.write("kalki 2898 AD")
        res.end()
    }
).listen(8080)