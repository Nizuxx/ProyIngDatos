db.usuario.insertMany(

  [

    {cod_user: 101, nombre: "Oliy Birt", correo:"obirt0@wix.com", passw: "MF8FhYCo", area: 1},
    
    {cod_user: 102, nombre: "Amalia Mustin", correo:"amustin1@parallels.com", passw: "H0YtW1uzz1t", area: 1},
    
    {cod_user: 103, nombre: "Bathsheba Hadigate", correo:"bhadigate2@youtu.be", passw: "7MureL1uC09b", area: 1},
    
    {cod_user: 104, nombre: "Clemens Ranscombe", correo:"cranscombe3@yelp.com", passw: "v4eAXI", area: 1},
    
    {cod_user: 105, nombre: "Martyn Sheehan", correo:"msheehan4@tamu.edu", passw: "gRIH7FQ", area: 1},
    
    {cod_user: 106, nombre: "Tymothy Silberschatz", correo:"tsilberschatz5@mozilla.org", passw: "dd79oQyQEl", area: 2},
    
    {cod_user: 107, nombre: "Winfield Geistbeck", correo:"wgeistbeck6@kickstarter.com", passw: "niE4dNpRb", area: 2},
    
    {cod_user: 108, nombre: "Livvy Alden", correo:"lalden7@amazonaws.com", passw: "UPeUqB", area: 2},
    
    {cod_user: 109, nombre: "Teddy Deighan", correo:"tdeighan8@istockphoto.com", passw: "kJYqrH", area: 1},
    
    {cod_user: 110, nombre: "Diana Rupke", correo:"drupke9@stumbleupon.com", passw: "2K3NezOAvt", area: 1}

   ] 

); 
    
db.usuario.find();

//buscar los nombres de los usuarios del area de Advisor
db.usuario.find({area: 2}, {nombre:1});

//muestra el correo de amalia
db.usuario.find({nombre: "Amalia Mustin"}, {correo:1});

//mostrar los usuarios con codigo mayor o igual que 105
db.usuario.find({cod_user: {$gte: 105}});

//update nombre de usuario
db.usuario.update({nombre: "Tymothy Silberschatz"}, {nombre: "Teodoro"});
db.usuario.find({nombre: "Teodoro"});


