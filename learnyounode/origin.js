var sf=require('./showFiles.js')
sf(process.argv[2],process.argv[3],function(err,data){
  if (err){
    console.log(err.toString());
  }else{
    data.forEach(x => console.log(x));
  }
});
