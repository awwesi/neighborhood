// Create a map variable
var map, markers;
var locations = [{
   "federal_state": "Baden-Württemberg",
   "title": "Altes Schloss Meersburg",
   "long": "9.271359",
   "lat": "47.69377"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Auto & Technik Museum Sinsheim Sinsheim",
   "long": "8.8972",
   "lat": "49.239022"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Baumwipfelpfad Schwarzwald Bad Wildbad",
   "long": "8.536509",
   "lat": "48.7504"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "BEROLINO Kinderwelt Steißlingen",
   "long": "8.915115",
   "lat": "47.775007"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Burg Hohenzollern Burg Hohenzollern",
   "long": "8.967876",
   "lat": "48.32343"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Erlebnisgastronomie Lochmühle Eigeltingen",
   "long": "8.892911",
   "lat": "47.867038"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Europa-Park Rust",
   "long": "7.722093",
   "lat": "48.266012"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Freiburger Münster Freiburg im Breisgau",
   "long": "7.852661",
   "lat": "47.995509"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Heidelberger Schloss Heidelberg",
   "long": "8.715567",
   "lat": "49.410494"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Insel Mainau Mainau",
   "long": "9.195596",
   "lat": "47.70517"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Nationalparkzentrum Schwarzwald Seebach",
   "long": "8.221738",
   "lat": "48.561574"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Ravensburger Spieleland Meckenbeuren",
   "long": "9.595459",
   "lat": "47.71118"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Residenzschloss Ludwigsburg Bruchsal",
   "long": "9.198013",
   "lat": "48.89911"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Salzbergwerk Bad Friedrichshall",
   "long": "9.207345",
   "lat": "49.221374"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Vogtsbauernhöfe Gutach",
   "long": "8.199328",
   "lat": "48.271445"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Wild- und Freizeitpark Allensbach",
   "long": "9.044224",
   "lat": "47.742687"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Wilhelma Stuttgart",
   "long": "9.206564",
   "lat": "48.805662"
 },
 {
   "federal_state": "Baden-Württemberg",
   "title": "Zeppelinmuseum Friedrichshafen",
   "long": "9.483104",
   "lat": "47.650778"
 },
 {
   "federal_state": "Bayern",
   "title": "Basilika Waldsassen Waldsassen",
   "long": "12.307583",
   "lat": "50.004015"
 },
 {
   "federal_state": "Bayern",
   "title": "Bavaria Filmstadt Grünwald",
   "long": "11.551354",
   "lat": "48.066236"
 },
 {
   "federal_state": "Bayern",
   "title": "Bayerisches Eisenbahnmuseum Nördlingen",
   "long": "10.500248",
   "lat": "48.845351"
 },
 {
   "federal_state": "Bayern",
   "title": "Bayerwald-Tierpark Lohberg Lohberg",
   "long": "13.08778",
   "lat": "49.170018"
 },
 {
   "federal_state": "Bayern",
   "title": "Bayern Deutsches Museum München",
   "long": "11.583452",
   "lat": "48.12977"
 },
 {
   "federal_state": "Bayern",
   "title": "Englischer Garten München",
   "long": "11.607355",
   "lat": "48.164046"
 },
 {
   "federal_state": "Bayern",
   "title": "Erlebnisberg Ochsenkopf Fichtelberg",
   "long": "11.809113",
   "lat": "50.030173"
 },
 {
   "federal_state": "Bayern",
   "title": "Freizeitpark Ruhpolding Ruhpolding",
   "long": "12.616349",
   "lat": "47.740751"
 },
 {
   "federal_state": "Bayern",
   "title": "Fuggerei Augsburg",
   "long": "10.903942",
   "lat": "48.368916"
 },
 {
   "federal_state": "Bayern",
   "title": "Hafeneinfahrt Lindau Lindau",
   "long": "9.683694",
   "lat": "47.543057"
 },
 {
   "federal_state": "Bayern",
   "title": "Legoland Günzburg",
   "long": "10.300791",
   "lat": "48.424043"
 },
 {
   "federal_state": "Bayern",
   "title": "Mittelalterliches Kriminalmuseum Rothenburg ob der Tauber",
   "long": "10.179018",
   "lat": "49.375416"
 },
 {
   "federal_state": "Bayern",
   "title": "Nürnberger Burg Nürnberg",
   "long": "11.075846",
   "lat": "49.457904"
 },
 {
   "federal_state": "Bayern",
   "title": "PLAYMOBIL FunPark Zirndorf",
   "long": "10.942307",
   "lat": "49.430934"
 },
 {
   "federal_state": "Bayern",
   "title": "Regensburger Dom Regensburg",
   "long": "12.098346",
   "lat": "49.019536"
 },
 {
   "federal_state": "Bayern",
   "title": "Schloss Herrenchiemsee Herrenchiemsee",
   "long": "12.402036",
   "lat": "47.860299"
 },
 {
   "federal_state": "Bayern",
   "title": "Schloss Johannisburg Aschaffenburg",
   "long": "9.141863",
   "lat": "49.975821"
 },
 {
   "federal_state": "Bayern",
   "title": "Schloss Linderhof Ettal",
   "long": "10.961713",
   "lat": "47.571503"
 },
 {
   "federal_state": "Bayern",
   "title": "Schloß Mespelbrunn Mespelbrunn",
   "long": "9.307957",
   "lat": "49.905494"
 },
 {
   "federal_state": "Bayern",
   "title": "Schloss Neuschwanstein Schwangau",
   "long": "10.749843",
   "lat": "47.557559"
 },
 {
   "federal_state": "Bayern",
   "title": "St. Bartholomä am Königssee Schönau am Königssee",
   "long": "12.972335",
   "lat": "47.544684"
 },
 {
   "federal_state": "Bayern",
   "title": "Therme Erding Erding",
   "long": "11.886923",
   "lat": "48.289909"
 },
 {
   "federal_state": "Bayern",
   "title": "Walhalla Donaustauf",
   "long": "12.22393",
   "lat": "49.031466"
 },
 {
   "federal_state": "Bayern",
   "title": "Wendelsteinbahn Brannenburg",
   "long": "12.093158",
   "lat": "47.725178"
 },
 {
   "federal_state": "Bayern",
   "title": "Würzburger Residenz Würzburg",
   "long": "9.93929",
   "lat": "49.792673"
 },
 {
   "federal_state": "Bayern",
   "title": "Zoo Augsburg Augsburg",
   "long": "10.914841",
   "lat": "48.346723"
 },
 {
   "federal_state": "Bayern",
   "title": "Zugspitze Grainau",
   "long": "10.985451",
   "lat": "47.420861"
 },
 {
   "federal_state": "Berlin",
   "title": "Berliner Unterwelten Berlin",
   "long": "13.388963",
   "lat": "52.547868"
 },
 {
   "federal_state": "Berlin",
   "title": "Reichstagsgebäude Berlin",
   "long": "13.376187",
   "lat": "52.518503"
 },
 {
   "federal_state": "Berlin",
   "title": "Wohnungsmuseum Prenzlauer Berg Berlin",
   "long": "13.421369",
   "lat": "52.543561"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Haus des Waldes Heidesee",
   "long": "13.717831",
   "lat": "52.22778"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Natur-Erlebniszentrum Wanninchen Luckau",
   "long": "13.771696",
   "lat": "51.788031"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Optikpark mit Bismarckturm Rathenow",
   "long": "12.325856",
   "lat": "52.605794"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Schloß Königs Wusterhausen Wusterhausen",
   "long": "13.625218",
   "lat": "52.29825"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Spreewald-Museum Lübbenau (Spreewald)",
   "long": "13.965466",
   "lat": "51.869437"
 },
 {
   "federal_state": "Brandenburg",
   "title": "Wildpark Johannismühle Baruth",
   "long": "13.529253",
   "lat": "52.01532"
 },
 {
   "federal_state": "Bremen",
   "title": "Schnoor Viertel Bremen",
   "long": "8.809613",
   "lat": "53.072862"
 },
 {
   "federal_state": "Bremen",
   "title": "Universum Bremen Bremen",
   "long": "8.845159",
   "lat": "53.106681"
 },
 {
   "federal_state": "Bremen",
   "title": "Zoo am Meer Bremerhaven",
   "long": "8.570517",
   "lat": "53.544806"
 },
 {
   "federal_state": "Hamburg",
   "title": "Millerntor-Stadion Hamburg",
   "long": "9.967818",
   "lat": "53.554632"
 },
 {
   "federal_state": "Hamburg",
   "title": "Miniatur Wunderland Hamburg",
   "long": "9.988532",
   "lat": "53.543721"
 },
 {
   "federal_state": "Hamburg",
   "title": "St. Pauli-Landungsbrücken Hamburg",
   "long": "9.970756",
   "lat": "53.545965"
 },
 {
   "federal_state": "Hessen",
   "title": "Biosphärenreservat Rhön Gersfeld",
   "long": "9.947207",
   "lat": "50.491166"
 },
 {
   "federal_state": "Hessen",
   "title": "Burg Michelstadt Michelstadt",
   "long": "8.952002",
   "lat": "49.707555"
 },
 {
   "federal_state": "Hessen",
   "title": "Felsenmeer Lautertal",
   "long": "8.693425",
   "lat": "49.7212"
 },
 {
   "federal_state": "Hessen",
   "title": "Frankfurter Römer Frankfurt am Main",
   "long": "8.681691",
   "lat": "50.110421"
 },
 {
   "federal_state": "Hessen",
   "title": "Herkules Kassel",
   "long": "9.393536",
   "lat": "51.316072"
 },
 {
   "federal_state": "Hessen",
   "title": "Landgrafenschloss Marburg",
   "long": "8.767273",
   "lat": "50.810024"
 },
 {
   "federal_state": "Hessen",
   "title": "Regionalpark RheinMain Flörsheim am Main",
   "long": "8.444646",
   "lat": "50.052462"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Deutsches Meeresmuseum Stralsund",
   "long": "13.08709",
   "lat": "54.31269"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Eisenbahn & Technik Museum Binz",
   "long": "13.567791",
   "lat": "54.443759"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Heinrich-Schliemann Gedenkstätte Neubukow",
   "long": "11.669657",
   "lat": "54.031606"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Leuchtturm Buk Bastorf",
   "long": "11.693718",
   "lat": "54.131843"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Müritzeum Waren",
   "long": "12.683399",
   "lat": "53.514649"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Nationalpark Vorpommersche Boddenlandschaft Born am Darß",
   "long": "12.520262",
   "lat": "54.373358"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Nationalpark-Zentrum Königsstuhl Sassnitz",
   "long": "13.660496",
   "lat": "54.572993"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Otto-Lilienthal-Museum Anklam",
   "long": "13.704421",
   "lat": "53.853814"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Pommersches Landesmuseum Greifswald",
   "long": "13.382581",
   "lat": "54.094951"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Residenzviertel Neustrelitz",
   "long": "13.0621",
   "lat": "53.363097"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Rodelbahn & Affenwald Malchow",
   "long": "12.387579",
   "lat": "53.48832"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Schweriner Schloss Schwerin",
   "long": "11.418157",
   "lat": "53.624641"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Teepott und Leuchtturm Warnemünde",
   "long": "12.086129",
   "lat": "54.181432"
 },
 {
   "federal_state": "Mecklenburg-Vorpommern",
   "title": "Zoologischer Garten Rostock",
   "long": "12.079713",
   "lat": "54.079286"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Autostadt Wolfsburg",
   "long": "10.794739",
   "lat": "52.433216"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Deutsches Auswandererhaus Bremerhaven",
   "long": "8.574248",
   "lat": "53.545264"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Deutsches Marinemuseum Wilhelmshaven",
   "long": "8.141158",
   "lat": "53.513164"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Deutsches Salzmuseum Lüneburg",
   "long": "10.402092",
   "lat": "53.243969"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Dinosaurier-Park Münchehagen Rehburg-Loccum",
   "long": "9.200709",
   "lat": "52.441993"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Gustav-Adolf-Stabkirche Goslar",
   "long": "10.341155",
   "lat": "51.857103"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Heide Park Resort Soltau",
   "long": "9.878362",
   "lat": "53.02363"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Meyer Werft Papenburg",
   "long": "7.354951",
   "lat": "53.098508"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Museumsdorf Hösseringen",
   "long": "10.405828",
   "lat": "52.843869"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Neues Rathaus Hannover",
   "long": "9.7374",
   "lat": "52.367267"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Pilsumer Leuchtturm Pilsum",
   "long": "7.045574",
   "lat": "53.49781"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Residenzschloss und Französischer Garten Celle",
   "long": "10.077799",
   "lat": "52.623835"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Schloss und Benediktinerabtei Iburg Bad Iburg",
   "long": "8.042021",
   "lat": "52.15757"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Serengeti Park Hodenhagen",
   "long": "9.620987",
   "lat": "52.749756"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Soltau-Therme Soltau",
   "long": "9.841133",
   "lat": "52.991993"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Watt'n Bad Dorum-Neufeld",
   "long": "8.513978",
   "lat": "53.737742"
 },
 {
   "federal_state": "Niedersachsen",
   "title": "Weltvogelpark Walsrode",
   "long": "9.596739",
   "lat": "52.882812"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Atta-Höhle Attendorn",
   "long": "7.914361",
   "lat": "51.126248"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Burg Satzvey Mechernich",
   "long": "6.707078",
   "lat": "50.620077"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Doppelschloßanlage Harkotten Sassenberg",
   "long": "8.031175",
   "lat": "52.062008"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Kölner Dom Köln",
   "long": "6.958196",
   "lat": "50.941265"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "NaturZoo Rheine Rheine",
   "long": "7.42375",
   "lat": "52.296033"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Phantasialand Brühl",
   "long": "6.880899",
   "lat": "50.799282"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Rotes Haus Monschau",
   "long": "6.240959",
   "lat": "50.554799"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Schiffshebewerk Henrichenburg Waltrop",
   "long": "7.32587",
   "lat": "51.616667"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Schloss Benrath Düsseldorf",
   "long": "6.870815",
   "lat": "51.160919"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Wunderland Kalkar Kalkar",
   "long": "6.328383",
   "lat": "51.764234"
 },
 {
   "federal_state": "Nordrhein-Westfalen",
   "title": "Zeche Zollverein Essen",
   "long": "7.041825",
   "lat": "51.489981"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Burg Landshut Bernkastel-Kues",
   "long": "7.075285",
   "lat": "49.915324"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Eifel-Vulkanmuseum Daun",
   "long": "6.829604",
   "lat": "50.198092"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Festung Ehrenbreitstein Koblenz",
   "long": "7.614027",
   "lat": "50.364577"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Loreley St. Goarshausen",
   "long": "7.731709",
   "lat": "50.142603"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Nürburgring Nürburg",
   "long": "6.942542",
   "lat": "50.33363"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Porta Nigra Trier",
   "long": "6.644198",
   "lat": "49.759592"
 },
 {
   "federal_state": "Rheinland-Pfalz",
   "title": "Technik-Museum Speyer",
   "long": "8.447247",
   "lat": "49.311369"
 },
 {
   "federal_state": "Saarland",
   "title": "Gondwana - Das Praehistorium Schiffweiler",
   "long": "7.118245",
   "lat": "49.349898"
 },
 {
   "federal_state": "Saarland",
   "title": "Ludwigskirche Saarbrücken",
   "long": "6.986683",
   "lat": "49.232551"
 },
 {
   "federal_state": "Saarland",
   "title": "Römische Villa Borg Perl-Borg",
   "long": "6.459073",
   "lat": "49.497299"
 },
 {
   "federal_state": "Saarland",
   "title": "Saarschleife Mettlach",
   "long": "6.545148",
   "lat": "49.500737"
 },
 {
   "federal_state": "Saarland",
   "title": "Unesco-Weltkulturerbe Völklinger Hütte Völklingen",
   "long": "6.844088",
   "lat": "49.248375"
 },
 {
   "federal_state": "Sachsen",
   "title": "Basteibrücke Lohmen",
   "long": "14.073165",
   "lat": "50.961775"
 },
 {
   "federal_state": "Sachsen",
   "title": "Besucherbergwerk Bad Schlema Bad Schlema",
   "long": "12.65707",
   "lat": "50.600579"
 },
 {
   "federal_state": "Sachsen",
   "title": "Burg Kriebstein Kriebstein",
   "long": "13.01764",
   "lat": "51.042476"
 },
 {
   "federal_state": "Sachsen",
   "title": "Heilbad Actinon Bad Schlema",
   "long": "12.662657",
   "lat": "50.60049"
 },
 {
   "federal_state": "Sachsen",
   "title": "Semperoper Dresden",
   "long": "13.735276",
   "lat": "51.054473"
 },
 {
   "federal_state": "Sachsen-Anhalt",
   "title": "Kloster Jerichow Jerichow",
   "long": "12.015967",
   "lat": "52.502179"
 },
 {
   "federal_state": "Sachsen-Anhalt",
   "title": "Luthergedenkstätten Wittenberg",
   "long": "12.652018",
   "lat": "51.864466"
 },
 {
   "federal_state": "Sachsen-Anhalt",
   "title": "Nationalpark Harz / Brockenhaus Wernigerode",
   "long": "10.615726",
   "lat": "51.800337"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Hansapark Sierksdorf",
   "long": "10.780174",
   "lat": "54.075292"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Holstentor Lübeck",
   "long": "10.679841",
   "lat": "53.866119"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Leuchtturm St. Peter Böhl St. Peter-Ording",
   "long": "8.65196",
   "lat": "54.287248"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Leuchtturm Westerheversand Westerhever",
   "long": "8.639214",
   "lat": "54.373874"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "MEERESZENTRUM Fehmarn Fehmarn OT Burg",
   "long": "11.180664",
   "lat": "54.445597"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Multimar Wattforum Tönning",
   "long": "8.952766",
   "lat": "54.317621"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "NABU Wasservogelreservat Wallnau/Fehmarn",
   "long": "11.014081",
   "lat": "54.478346"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Schloss Gottorf Schleswig",
   "long": "9.541572",
   "lat": "54.512"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Seehundstation Friedrichskoog",
   "long": "8.87527",
   "lat": "54.000887"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Wikinger-Museum Haithabu Busdorf",
   "long": "9.569612",
   "lat": "54.49732"
 },
 {
   "federal_state": "Schleswig-Holstein",
   "title": "Wildpark Eekholt Großenaspe",
   "long": "10.030222",
   "lat": "53.948837"
 },
 {
   "federal_state": "Thüringen",
   "title": "Erfurter Dom Erfurt",
   "long": "11.023301",
   "lat": "50.975725"
 },
 {
   "federal_state": "Thüringen",
   "title": "Krämerbrücke Erfurt",
   "long": "11.030915",
   "lat": "50.978758"
 },
 {
   "federal_state": "Thüringen",
   "title": "Wartburg Eisenach",
   "long": "10.306085",
   "lat": "50.966329"
 } ];

// Function to initialize the map within the map div
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    //center of Germany
    center: {lat: 51.342329, lng: 10.510921},
    zoom: 6
  });

  //necessary, because of resize and load markers with knockout
  redrawMap();

  //necessary, whne resize brwoser
  window.addEventListener("resize", function() {
    redrawMap();
  });

  // pply bindings for knockout
  ko.applyBindings(new ViewModel());
}

//redraw map, necessary for resize browser
function redrawMap() {
  var divh = document.body.offsetHeight - 56;
  document.getElementById('map-container').style.height = divh + 'px';
  google.maps.event.trigger(map, 'resize');
};

// This function will loop through the markers and hide them all.
function hideListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

// this function set all markers to default icon
function setAllToDefaultMarker() {
  var defaultIcon = makeMarkerIcon('0091ff');
  for (var i = 0; i < markers.length; i++) {
    markers[i].setIcon(defaultIcon);
  }
}

//tis funtion show the infowindow, it is called from populateInfoWindow
function showInfoWindow(marker, infowindow, content){
  infowindow.marker = marker;
  infowindow.setContent(content);
  infowindow.open(map, marker);
  // Make sure the marker property is cleared if the infowindow is closed.
  infowindow.addListener('closeclick', function() {
    var defaultIcon = makeMarkerIcon('0091ff');
    infowindow.marker.setIcon(defaultIcon);
    infowindow.marker = null;
  });

}

// This function populates the infowindow when the marker is clicked. It is only allowed
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    //get content from wikipedia
    var content = '';
    var title = marker.title
    var searchText = "''" + title.replace(" ", "'AND'"); + "''";
    // load information from wikipedia asynchronous
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      type: 'GET',
      dataType: 'jsonp',
      data: {
      action: 'query',
      generator: 'search',
      gsrlimit: 1,
      prop: 'extracts|pageimages',
      pilimit: 1,
      exintro: '',
      explaintext: '',
      exsentences: 1,
      exlimit: 1,
      format: 'json',
      gsrsearch: searchText,
      formatversion: 2
    },
    success: function (data) {
      if (data.query) {
        if (data.query.pages[0].extract) {
          content = '<div>' + title + '</div>';
          content += '<div>'
          if (data.query.pages[0].thumbnail) {
            if (data.query.pages[0].thumbnail.source) {
              content += '<div class=boxWiki><img src="'+ data.query.pages[0].thumbnail.source + '" alt="Image of '+ title + '"></div>'
            };
          };
          content += '<div class=boxWiki>' + data.query.pages[0].extract + '</div>';
          content += '</div>'
        } else {
          content = '<div>' + title + '<p>No Wikipedia Information available.</div>';
        };
        showInfoWindow(marker, infowindow, content);
      } else {
        content = '<div>' + title + '<p>No Wikipedia Information available.</div>';
        showInfoWindow(marker, infowindow, content);
      };
    },
    error: function() {
      content = '<div>' + title + '<p>No Wikipedia Information available.</div>';
      showInfoWindow(marker, infowindow, content);
    }
    });
  }
};

// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}

// showplace item object
var showplace = function(data) {
  this.title = data.title;
  this.lat = data.lat;
  this.long = data.long;
};

var ViewModel = function() {
  var self = this;

  //empty string as start filter
  this.filterInput = ko.observable('');
  var showplacesList = [];

  markers = [];
  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var i = 0;

  //generate filtered list
  this.filterLocation = ko.computed(function() {
    var filterInput = self.filterInput();

    //hide all markers,before drawing new filtered markers
    if (markers.length > 0) {
      hideListings();
      markers = [];
    };

    showplacesList = [];
    //loop through all locations and filter them
    locations.forEach(function(place) {
      var itemShowplace = new showplace(place);

      // Get the position and title from the location array.
      var position = {lat: Number(itemShowplace.lat), lng: Number(itemShowplace.long)};
      var title = itemShowplace.title;

      //check, if location is in filter
      if ((filterInput == '') || (title.toLowerCase().includes(filterInput.toLowerCase()))) {
        var defaultIcon = makeMarkerIcon('0091ff');

        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        var highlightedIcon = makeMarkerIcon('FFFF24');

        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          icon: defaultIcon,
          id: i
        });
        markers.push(marker);
        itemShowplace.marker = marker
        showplacesList.push(itemShowplace);

        //set event for click an marker to populate infowindow
        marker.addListener('click', function() {
          setAllToDefaultMarker();
          populateInfoWindow(this, largeInfowindow);
        });

        // Two event listeners - one for mouseover, one for mouseout,
        // to change the colors back and forth.
        marker.addListener('mouseover', function() {
          this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
          this.setIcon(defaultIcon);
        });
        //google.maps.event.trigger(this.marker, 'click');
        //};

        //click event from listing of showplaces, binding with knockout
        self.showLocation = function() {
          setAllToDefaultMarker();

          //set highlighted marker
          this.marker.setIcon(highlightedIcon);
          //populate infowindow
          populateInfoWindow(this.marker, largeInfowindow);
        };

        //bound marker to bounds
        itemShowplace.marker.setMap(map);
        bounds.extend(itemShowplace.marker.position);
      };
      //increment i for Marker id
      i++;
    });

    //fit bounds to map
    map.fitBounds(bounds);

    //return filtered list
    return showplacesList;
  });
};
