var names = [ 
    'Ollie', 'Marty', 'Ezra', 'Elio', 'Luca', 'Oliver','Jasper','Percy','Leo','Felix','Lucius','Sailor','Lucia','Axel','Armie','Pharoah','Darby','Juniper','Levi','Finn','Jonah','Seba','Hazel','Zeke','Leila','Silas','Josiah','Arlo','August','Oriah','Louie','Lou','Odie','Moses','Reef','Shade','Freddie','Persia','Santi','Scout','Navy','Trip','Rohan','Ace','Pilot','Rio','Sol','Steele','Arbor','Ranger','Jet','Canyon','Fable','Flint','Ghost','Khal','Ramsay','Stark','Osha','Shagga','Ryder','Rayder','Arki','Nymph','Alexei','Denis','Russel','Sergei','Misha','Sochi','Miska','Aspen','Malak','Nova','River','Sky','Spirit','Storm','Kaskae','Jiro','Aro','Savik','Picco','Bruno','Gio','Tito','Bacio','Nero','Hiro','Leone','Enzo','Dante','Slate','Denver','Merle','Bowie','Zigi','Sterling','Taji','Ska','Dunne','Colby','Coby','Francis','Pongo','Pete','Petey','Pooch','Winnie','Latch','Lenny','Delgato','Nash','Sheldon','Emile','Bailey','Todd'
]
  
 
function newName() {
    var randomNumber = Math.floor(Math.random() * (names.length));    document. getElementById('nameDisplay').innerHTML = names[randomNumber];

}
                             
