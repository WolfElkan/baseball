var roster_csv = `
team,pos,dob,B/T,height,weight,first,middle,last,suffix,jersey
CIN,P,1999-06-01,L/L,72,192,Andrew,,Abbott,,41
WSH,I,2000-10-03,L/R,74,191,C,J,Abrams,,5
HOU,P,1997-04-22,R/R,73,230,Bryan,,Abreu,,52
HOU,I,1987-01-29,R/R,75,250,Jos&#233;,,Abreu,,79
BOS,O,1999-06-24,L/L,70,215,Wilyer,,Abreu,,52
ATL,O,1997-12-18,R/R,72,205,Ronald,,Acu&#241;a,Jr,13
TBR,P,1991-08-04,R/R,75,229,Jason,,Adam,,47
MIL,I,1995-09-02,R/R,73,219,Willy,,Adames,,27
OAK,P,1991-05-05,R/R,75,220,Austin,,Adams,,29
WSH,C,1996-06-26,R/R,76,263,Riley,,Adams,,15
LAA,O,1999-04-08,R/R,75,215,Jo,,Adell,,7
LAA,I,1989-08-21,S/R,73,198,Ehire,,Adrianza,,13
SFG,I,1990-03-15,R/R,74,201,Nick,,Ahmed,,16
BAL,P,1995-04-01,L/L,72,240,Keegan,,Akin,,45
ARI,I,1999-06-11,R/R,71,160,Blaze,,Alexander,,9
TBR,P,1994-07-14,R/L,74,203,Tyler,,Alexander,,14
CLE,P,1998-09-05,R/L,72,190,Logan,,Allen,,41
ARI,P,1997-05-23,R/L,75,200,Logan,,Allen,,22
OAK,I,1998-10-08,R/R,68,166,Nick,,Allen,,10
CHC,P,1994-06-04,R/R,77,223,Yency,,Almonte,,25
NYM,I,1994-12-07,R/R,75,245,Pete,,Alonso,,20
HOU,I,1990-05-06,R/R,66,167,Jose,,Altuve,,27
PHI,P,1995-05-21,L/L,74,245,Jos&#233;,,Alvarado,,46
HOU,O,1997-06-27,L/R,77,237,Yordan,,Alvarez,,44
CHC,P,1995-03-01,R/R,73,208,Adbert,,Alzolay,,73
CHC,C,1999-03-09,R/R,72,230,Miguel,,Amaya,,9
BOS,P,1987-11-30,R/R,73,210,Chase,,Anderson,,48
KCR,P,1990-07-05,R/R,76,205,Nick,,Anderson,,63
MIA,I,1993-06-23,R/R,73,185,Tim,,Anderson,,7
LAA,P,1989-12-30,L/L,74,220,Tyler,,Anderson,,31
ATL,I,1994-08-04,R/R,72,187,Orlando,,Arcia,,11
STL,I,1991-04-16,R/R,74,215,Nolan,,Arenado,,28
CLE,I,2000-02-27,R/R,73,217,Gabriel,,Arias,,13
TBR,P,1990-09-11,R/R,74,225,Shawn,,Armstrong,,64
TBR,O,1995-02-28,R/R,71,185,Randy,,Arozarena,,56
MIA,I,1997-04-09,L/R,70,175,Luis,,Arraez,,3
HOU,P,2000-01-02,R/R,74,186,Spencer,,Arrighetti,,41
CIN,P,1998-02-11,L/R,74,248,Graham,,Ashcraft,,51
CHC,P,1997-07-30,R/R,73,200,Javier,,Assad,,72
CLE,P,1997-01-14,R/R,71,210,Pedro,,Avila,,60
SDP,O,1996-05-11,R/R,71,181,Jos&#233;,,Azocar,,28
NYM,O,1994-06-03,R/R,72,210,Harrison,,Bader,,44
SFG,C,1999-05-29,S/R,72,210,Patrick,,Bailey,,14
CWS,P,1991-10-24,R/L,73,205,Tanner,,Banks,,57
TOR,I,1999-11-12,L/R,72,210,Addison,,Barger,,47
CLE,P,1992-12-18,R/R,75,210,Scott,,Barlow,,58
LAD,C,1989-12-28,R/R,70,187,Austin,,Barnes,,15
WSH,P,1990-04-14,R/R,74,231,Jacob,,Barnes,,59
WSH,P,1990-06-17,R/R,76,208,Matt,,Barnes,,41
ARI,C,1991-01-07,L/R,71,192,Tucker,,Barnhart,,16
PIT,C,1996-12-15,R/R,74,238,Joey,,Bart,,14
TOR,P,1989-02-22,R/R,77,217,Chris,,Bassitt,,40
SDP,I,1995-06-22,R/R,70,180,Matthew,,Batten,,17
NYM,I,1999-11-13,L/R,75,210,Brett,,Baty,,22
MIL,I,1995-10-06,L/L,71,213,Jake,,Bauers,,9
BAL,P,1995-09-10,R/R,76,240,Mike,,Baumann,,53
PIT,P,1994-10-10,L/R,72,225,David,,Bednar,,51
CLE,P,1993-05-23,R/R,74,216,Tyler,,Beede,,46
COL,P,1993-07-10,L/L,71,215,Jalen,,Beeks,,68
MIA,I,1992-08-14,S/R,76,261,Josh,,Bell,,9
CHC,O,1995-07-13,L/L,76,203,Cody,,Bellinger,,24
MIA,P,1995-02-03,R/R,76,205,Anthony,,Bender,,37
CWS,O,1994-07-06,L/L,69,180,Andrew,,Benintendi,,23
CIN,O,1998-06-16,L/L,77,230,Will,,Benson,,30
BOS,P,1992-01-15,L/L,76,180,Brennan,,Bernardino,,83
TOR,P,1994-05-27,R/R,72,205,Jos&#233;,,Berr&#237;os,,17
MIA,C,1991-09-02,R/R,75,205,Christian,,Bethancourt,,25
LAD,I,1992-10-07,R/R,69,180,Mookie,,Betts,,50
DET,I,1992-12-01,R/R,72,190,Javier,,B&#225;ez,,28
CLE,P,1999-03-05,R/R,74,205,Tanner,,Bibee,,28
TOR,I,1998-03-05,R/R,72,190,Bo,,Bichette,,11
HOU,P,1996-04-02,L/R,74,221,Brandon,,Bielak,,64
TOR,I,1995-04-11,L/R,74,200,Cavan,,Biggio,,8
COL,P,1995-12-04,R/R,75,200,Jake,,Bird,,59
COL,P,1990-10-20,R/L,73,215,Ty,,Blach,,50
OAK,P,1993-12-04,R/R,73,196,Paul,,Blackburn,,58
COL,O,1986-07-01,L/L,75,221,Charlie,,Blackmon,,19
KCR,O,1993-04-26,R/R,71,200,Dairon,,Blanco,,44
HOU,P,1993-08-31,R/R,75,265,Ronel,,Blanco,,56
OAK,O,1997-11-10,L/L,73,205,J,J,Bleday,,33
SDP,I,1992-10-01,R/R,74,218,Xander,,Bogaerts,,2
PHI,I,1996-08-03,R/R,77,218,Alec,,Bohm,,28
SEA,P,1998-06-19,R/R,74,210,Cody,,Bolton,,67
BOS,P,1992-05-04,L/L,75,225,Cam,,Booser,,71
COL,O,1996-05-16,R/R,75,215,Sean,,Bouchard,,12
MIN,P,1991-05-31,R/R,72,185,Matt,,Bowman,,51
OAK,P,1999-08-14,R/R,79,240,Joe,,Boyle,,35
LAD,P,1987-08-26,R/R,72,223,Ryan,,Brasier,,57
CWS,P,1990-05-30,L/R,73,205,John,,Brebbia,,59
HOU,I,1994-03-30,R/R,72,190,Alex,,Bregman,,2
CLE,O,1998-02-02,L/L,72,200,Will,,Brennan,,17
CHC,P,1992-10-29,R/R,76,222,Colten,,Brewer,,54
SDP,P,1998-02-17,R/R,74,210,Jhony,,Brito,,76
CHC,P,1999-09-09,R/R,78,210,Ben,,Brown,,32
HOU,P,1998-08-29,R/R,74,220,Hunter,,Brown,,58
OAK,O,1992-07-13,L/L,73,223,Seth,,Brown,,15
MIA,I,1998-02-09,S/R,70,180,Vidal,,Bruj&#225;n,,17
ATL,P,1993-09-21,L/L,75,215,Aaron,,Bummer,,49
STL,O,1998-11-25,L/L,74,225,Alec,,Burleson,,41
BAL,P,1994-10-22,R/R,75,246,Corbin,,Burnes,,39
CHC,I,1997-11-09,L/R,73,210,Michael,,Busch,,29
OAK,O,2000-07-10,L/R,75,210,Lawrence,,Butler,,4
NYM,P,1998-03-19,R/R,73,202,Jos&#233;,,Butt&#243;,,70
MIN,O,1993-12-18,R/R,74,190,Byron,,Buxton,,25
TBR,I,1996-08-30,R/R,69,185,Jos&#233;,,Caballero,,7
MIA,P,1998-04-13,R/R,77,217,Edward,,Cabrera,,27
TOR,P,1996-10-10,L/L,74,180,G&#233;nesis,,Cabrera,,92
NYY,I,1999-03-01,S/R,71,200,Oswaldo,,Cabrera,,95
SDP,C,1998-09-29,R/R,71,232,Luis,,Campusano,,12
CHC,O,2000-05-07,R/R,71,165,Alexander,,Canario,,4
CIN,I,1993-11-24,S/R,74,222,Jeimer,,Candelario,,3
DET,O,1989-02-15,R/R,74,209,Mark,,Canha,,21
LAA,P,1996-05-11,R/R,74,180,Griffin,,Canning,,47
CWS,P,2000-07-19,R/R,78,225,Jonathan,,Cannon,,48
BAL,P,1994-03-09,R/R,76,245,Yennier,,Cano,,78
HOU,C,1993-08-17,S/R,71,225,Victor,,Caratini,,17
DET,O,1997-09-02,L/R,74,220,Kerry,,Carpenter,,30
CLE,P,1987-03-21,R/R,76,224,Carlos,,Carrasco,,59
ARI,O,2000-08-21,L/L,70,165,Corbin,,Carroll,,7
TEX,O,2002-08-29,L/R,74,190,Evan,,Carter,,32
PHI,O,1992-03-04,R/R,76,203,Nick,,Castellanos,,8
SEA,P,1992-12-12,R/R,74,200,Luis,,Castillo,,58
MIN,I,1997-04-24,S/R,73,206,Willi,,Castro,,50
COL,O,1992-12-04,L/L,72,200,Jake,,Cave,,11
SDP,P,1995-12-28,R/R,74,200,Dylan,,Cease,,84
ARI,P,1999-06-24,R/R,76,219,Slade,,Cecconi,,43
DET,P,1990-06-17,R/L,74,235,Andrew,,Chafin,,17
PIT,P,1988-02-28,L/L,76,235,Aroldis,,Chapman,,45
SFG,I,1993-04-28,R/R,72,215,Matt,,Chapman,,26
ATL,P,1983-08-21,R/R,73,180,Jesse,,Chavez,,60
MIA,O,1998-02-01,L/R,71,184,Jazz,,Chisholm,Jr,2
MIL,O,2004-03-11,R/R,72,198,Jackson,,Chourio,,11
LAA,P,1990-08-15,R/R,75,195,Adam,,Cimber,,90
LAA,P,1989-04-11,R/R,75,258,Jos&#233;,,Cisnero,,67
TBR,P,1995-06-12,R/R,74,215,Aaron,,Civale,,34
CLE,P,1998-03-18,R/R,74,206,Emmanuel,,Clase,,48
SEA,O,2002-05-23,S/R,69,150,Jonatan,,Clase,,5
TBR,P,1994-04-23,R/L,73,220,Garrett,,Cleavinger,,60
PHI,I,1996-05-15,L/R,73,200,Kody,,Clemens,,2
TOR,I,1996-03-22,R/R,72,170,Ernie,,Clement,,28
SFG,O,1993-03-01,L/R,73,215,Michael,,Conforto,,8
PIT,P,1999-11-07,R/R,73,205,Roansy,,Contreras,,59
MIL,C,1997-12-24,R/R,71,212,William,,Contreras,,24
STL,C,1992-05-13,R/R,73,240,Willson,,Contreras,,40
WSH,P,1989-07-19,L/L,76,225,Patrick,,Corbin,,46
NYY,P,1994-12-10,R/L,71,210,Nestor,,Cortes,,65
SDP,P,1996-06-14,L/L,74,190,Tom,,Cosgrove,,59
BAL,P,1989-10-26,L/L,70,190,Danny,,Coulombe,,54
BAL,O,2000-03-20,L/R,74,220,Colton,,Cowser,,17
STL,I,1987-01-21,L/R,73,223,Brandon,,Crawford,,35
SEA,I,1995-01-11,L/R,74,202,J,P,Crawford,,3
BOS,P,1996-04-01,R/R,73,195,Kutter,,Crawford,,50
BOS,P,1996-07-24,R/R,78,200,Cooper,,Criswell,,64
CWS,P,1999-06-21,L/L,78,245,Garrett,,Crochet,,45
SDP,I,1994-01-21,L/R,72,187,Jake,,Cronenworth,,9
MIA,P,1997-09-24,R/R,76,225,Declan,,Cronin,,51
CIN,P,1990-03-28,R/R,74,237,Fernando,,Cruz,,63
PIT,I,1998-10-04,L/R,79,215,Oneil,,Cruz,,15
BOS,I,1995-06-29,R/R,76,225,Bobby,,Dalbec,,29
ATL,C,1989-02-10,R/R,74,210,Travis,,d'Arnaud,,16
PIT,C,1999-09-21,R/R,72,210,Henry,,Davis,,32
CIN,P,1996-09-28,R/R,74,224,Alexis,,D&#237;az,,43
NYM,P,1994-03-22,R/R,75,165,Edwin,,D&#237;az,,39
COL,C,1990-11-17,R/R,73,223,Elias,,D&#237;az,,35
TBR,I,1991-08-08,R/R,74,215,Yandy,,D&#237;az,,2
CWS,I,1993-08-02,R/R,72,205,Paul,,DeJong,,29
MIA,O,1996-12-16,R/R,74,175,Bryan,,De La Cruz,,14
CIN,I,2002-01-11,S/R,77,200,Elly,,De La Cruz,,44
SDP,P,1995-12-25,R/R,75,235,Enyel,,De Los Santos,,62
LAA,P,1999-07-08,L/L,74,210,Reid,,Detmers,,48
TBR,P,1990-11-13,R/R,75,211,Chris,,Devenski,,48
BOS,I,1996-10-24,L/R,72,235,Rafael,,Devers,,11
HOU,C,1998-09-21,R/R,72,195,Yainer,,Diaz,,21
NYM,P,1987-01-21,R/L,76,195,Jake,,Diekman,,30
PHI,P,1994-11-25,R/R,73,225,Seranthony,,Dom&#237;nguez,,58
STL,O,1997-01-16,L/R,73,210,Brendan,,Donovan,,33
SFG,P,1997-07-04,R/R,74,185,Camilo,,Doval,,75
COL,O,1998-05-14,R/R,74,200,Brenton,,Doyle,,9
LAA,I,1992-08-21,R/R,74,230,Brandon,,Drury,,23
HOU,P,1995-09-06,R/R,72,164,Shawn,,Dubin,,66
HOU,O,1994-07-19,R/R,72,173,Mauricio,,Dub&#243;n,,14
KCR,P,1990-12-27,R/R,75,220,Tyler,,Duffey,,21
MIL,I,1997-09-02,L/R,70,198,Oliver,,Dunn,,15
TEX,P,1994-12-20,R/R,76,225,Dane,,Dunning,,33
TEX,I,1999-05-22,R/R,71,185,Ezequiel,,Duran,,20
BOS,O,1996-09-05,L/R,74,205,Jarren,,Duran,,16
ATL,O,1988-09-04,R/R,73,233,Adam,,Duvall,,14
TBR,P,1994-04-08,R/R,78,220,Zach,,Eflin,,24
ATL,P,1999-05-19,R/R,74,220,Bryce,,Elder,,55
CIN,I,1999-12-01,R/R,72,224,Christian,,Encarnacion-Strand,,33
TEX,P,1990-02-13,R/R,74,217,Nathan,,Eovaldi,,17
OAK,P,1995-05-01,L/R,74,214,Lucas,,Erceg,,70
CIN,I,1994-11-13,R/R,70,185,Santiago,,Espinal,,4
SFG,I,1996-02-22,R/R,70,185,Thairo,,Estrada,,39
LAA,P,1992-12-28,R/R,78,277,Carlos,,Est&#233;vez,,53
DET,P,1995-11-12,R/R,77,225,Alex,,Faedo,,49
CIN,O,1996-03-17,R/R,72,205,Stuart,,Fairchild,,17
PIT,P,1997-04-24,R/L,76,175,Bailey,,Falter,,26
CIN,P,1991-02-20,L/R,76,243,Buck,,Farmer,,46
MIN,I,1990-08-17,R/R,72,205,Kyle,,Farmer,,12
MIA,P,1995-09-22,R/R,73,190,Calvin,,Faucher,,53
CWS,P,1993-02-25,R/R,76,205,Erick,,Fedde,,20
COL,P,1996-09-02,R/R,76,190,Ryan,,Feltner,,18
NYY,P,1996-07-02,R/L,75,226,Caleb,,Ferguson,,64
KCR,C,1995-05-16,R/R,69,200,Freddy,,Fermin,,34
STL,I,1999-03-29,R/R,69,198,Jos&#233;,,Ferm&#237;n,,15
STL,P,1998-06-11,R/R,72,200,Ryan,,Fernandez,,64
WSH,P,1991-09-04,R/R,74,198,Kyle,,Finnegan,,67
SFG,I,1997-09-15,R/R,73,205,Tyler,,Fitzgerald,,49
DET,P,1995-10-15,R/R,76,225,Jack,,Flaherty,,9
PIT,P,1996-05-18,L/L,74,220,Josh,,Fleming,,28
ATL,I,1994-05-31,R/R,69,185,David,,Fletcher,,22
CWS,O,1997-09-02,L/L,66,195,Dominic,,Fletcher,,7
CWS,P,1994-07-01,R/R,75,220,Chris,,Flexen,,77
SFG,I,1991-08-06,R/R,74,213,Wilmer,,Flores,,41
CLE,O,1997-11-25,L/R,73,195,Estevan,,Florial,,90
WSH,P,1990-12-27,L/R,74,212,Dylan,,Floro,,44
DET,P,1995-11-01,R/R,76,215,Jason,,Foley,,68
MIA,C,1996-11-11,R/R,71,198,Nick,,Fortes,,4
CIN,O,1995-05-25,L/L,72,206,Jake,,Fraley,,27
HOU,P,1995-04-04,R/R,72,198,J,P,France,,68
SEA,I,1994-07-13,R/R,71,215,Ty,,France,,23
TOR,P,1996-04-22,R/R,77,220,Bowden,,Francis,,44
KCR,I,1991-12-14,L/R,70,180,Adam,,Frazier,,26
LAD,I,1989-09-12,L/R,77,220,Freddie,,Freeman,,5
CLE,O,1999-05-21,R/R,72,190,Tyler,,Freeman,,2
MIL,O,2000-04-19,L/R,68,185,Sal,,Frelick,,10
ATL,P,1994-01-18,L/L,76,190,Max,,Fried,,54
CLE,I,1995-11-20,R/R,72,215,David,,Fry,,6
LAA,P,1993-12-13,R/R,72,210,Carson,,Fulmer,,41
MIN,P,1996-11-27,L/L,76,230,Kody,,Funderburk,,55
CLE,P,1998-04-09,R/R,78,260,Hunter,,Gaddis,,33
STL,P,1991-08-14,R/R,74,205,Giovanny,,Gallegos,,65
ARI,P,1995-08-03,R/R,74,189,Zac,,Gallen,,23
WSH,I,1993-11-19,L/R,77,249,Joey,,Gallo,,24
TEX,O,1993-03-02,R/R,73,205,Adolis,,Garc&#237;a,,53
MIA,O,1991-06-12,R/R,76,250,Avisa&#237;l,,Garc&#237;a,,24
CWS,P,1999-05-19,R/R,69,190,Deivi,,Garc&#237;a,,64
LAA,P,1987-01-30,R/R,74,240,Luis,,Garc&#237;a,,66
WSH,I,2000-05-16,L/R,74,216,Luis,,Garc&#237;a,Jr,2
TOR,P,1990-08-18,R/R,73,230,Yimi,,Garc&#237;a,,93
KCR,I,2000-03-03,R/R,72,180,Maikel,,Garcia,,11
NYM,P,1993-01-02,R/R,74,195,Reed,,Garrett,,75
SEA,D,1991-01-15,R/R,73,220,Mitch,,Garver,,18
TOR,P,1991-01-06,L/R,74,205,Kevin,,Gausman,,34
OAK,I,1999-10-19,R/R,74,205,Zack,,Gelof,,20
STL,P,1987-10-23,R/R,78,200,Kyle,,Gibson,,44
NYY,P,1998-06-03,R/R,74,185,Luis,,Gil,,81
SEA,P,1997-05-05,R/R,78,215,Logan,,Gilbert,,36
CLE,I,1998-09-04,L/R,71,161,Andr&#233;s,,Gim&#233;nez,,0
ARI,P,1994-03-24,L/R,76,235,Kevin,,Ginkel,,37
LAD,P,1993-08-23,L/R,80,225,Tyler,,Glasnow,,31
STL,I,1987-09-10,R/R,75,225,Paul,,Goldschmidt,,46
COL,P,1993-11-23,L/L,77,220,Austin,,Gomber,,26
CHC,C,1987-07-19,R/R,74,212,Yan,,Gomes,,15
NYY,P,1995-11-16,L/L,72,180,Victor,,Gonz&#225;lez,,47
COL,C,1999-10-08,R/R,71,210,Hunter,,Goodman,,15
TBR,I,1992-02-28,S/R,75,220,Niko,,Goodrum,,0
MIA,O,1995-10-24,L/R,72,160,Nick,,Gordon,,1
WSH,P,1999-02-24,L/L,74,193,MacKenzie,,Gore,,1
STL,I,2000-05-10,L/R,73,225,Nolan,,Gorman,,16
TEX,P,1991-11-05,R/R,76,225,Jon,,Gray,,22
STL,P,1989-11-07,R/R,70,190,Sonny,,Gray,,54
CIN,P,1999-08-06,R/R,77,242,Hunter,,Greene,,21
DET,O,2000-09-28,L/L,75,200,Riley,,Greene,,31
ARI,O,1991-08-13,R/R,74,216,Randal,,Grichuk,,15
NYY,O,1996-11-01,L/L,71,224,Trent,,Grisham,,12
CWS,O,1989-09-16,S/L,72,209,Robbie,,Grossman,,30
LAD,P,1996-12-18,R/R,75,200,Michael,,Grove,,78
TOR,I,1999-03-16,R/R,74,245,Vladimir,,Guerrero,Jr,27
ATL,I,1994-09-27,L/R,70,190,Luis,,Guillorme,,15
ARI,O,1993-10-10,R/R,76,215,Lourdes,,Gurriel,Jr,12
HOU,P,1994-04-07,L/L,75,188,Josh,,Hader,,71
BOS,I,1997-09-29,L/R,70,188,David,,Hamilton,,70
NYY,P,1995-06-16,R/R,73,200,Ian,,Hamilton,,71
KCR,O,1994-10-10,R/R,71,196,Garrett,,Hampson,,2
SEA,P,1999-05-31,R/R,76,213,Emerson,,Hancock,,62
SEA,O,1990-12-23,R/R,74,214,Mitch,,Haniger,,17
CHC,O,1994-08-12,S/R,72,205,Ian,,Happ,,8
ATL,O,2001-03-07,L/L,72,195,Michael,,Harris,II,23
SFG,P,2001-08-12,R/L,74,200,Kyle,,Harrison,,45
WSH,P,1994-12-09,R/R,75,233,Hunter,,Harvey,,73
PIT,I,1997-01-28,R/R,71,195,Ke'Bryan,,Hayes,,13
TEX,P,1991-06-05,L/L,74,200,Andrew,,Heaney,,44
CLE,C,1992-08-18,R/R,73,220,Austin,,Hedges,,27
TEX,C,1995-06-27,S/R,76,220,Jonah,,Heim,,28
STL,P,1994-07-18,R/R,74,235,Ryan,,Helsley,,56
BAL,I,2001-06-29,L/R,75,220,Gunnar,,Henderson,,2
MIN,P,2000-06-20,R/R,70,155,Ronny,,Henriquez,,31
ARI,P,1997-07-29,L/L,75,205,Tommy,,Henry,,47
LAD,O,1991-08-24,R/R,71,195,Enrique,,Hern&#225;ndez,,8
TEX,P,1996-07-06,R/R,75,190,Jonathan,,Hern&#225;ndez,,72
LAD,O,1992-10-15,R/R,74,215,Teoscar,,Hern&#225;ndez,,37
STL,C,2000-06-01,R/R,71,220,Iv&#225;n,,Herrera,,48
CLE,P,1996-10-08,L/L,78,230,Tim,,Herrin,,29
LAA,O,1989-10-02,S/R,73,205,Aaron,,Hicks,,12
SFG,P,1996-09-06,R/R,74,220,Jordan,,Hicks,,12
SDP,C,1990-04-20,R/R,73,202,Kyle,,Higashioka,,20
CWS,P,1990-02-10,R/L,76,210,Tim,,Hill,,54
SFG,P,1997-05-07,R/R,83,228,Sean,,Hjelle,,64
MIA,P,1996-10-19,R/R,78,210,Bryan,,Hoeing,,78
CHC,I,1997-05-13,R/R,73,200,Nico,,Hoerner,,2
PHI,P,1993-01-08,R/R,77,235,Jeff,,Hoffman,,23
PIT,P,1995-10-08,R/R,76,230,Colin,,Holderman,,35
BAL,I,2003-12-04,L/R,72,185,Jackson,,Holliday,,7
NYY,P,1993-03-27,R/R,77,245,Clay,,Holmes,,35
DET,P,1996-06-13,L/L,74,200,Tyler,,Holton,,87
MIL,I,1993-03-17,R/R,76,240,Rhys,,Hoskins,,12
BOS,P,1996-06-29,R/R,77,226,Tanner,,Houck,,89
NYM,P,1993-02-02,R/R,75,242,Adrian,,Houser,,35
MIL,P,1997-05-08,L/L,80,220,Bryan,,Hudson,,52
COL,P,1994-09-15,R/R,77,215,Dakota,,Hudson,,32
LAD,P,1987-03-09,R/R,75,215,Daniel,,Hudson,,41
ATL,P,1990-01-04,R/R,74,190,Raisel,,Iglesias,,26
CHC,P,1993-09-01,L/L,70,175,Shota,,Imanaga,,18
CIN,I,1996-12-15,R/R,72,200,Jonathan,,India,,6
BAL,P,1994-01-31,L/L,76,225,Cole,,Irvin,,19
WSH,P,1997-02-18,R/R,78,234,Jake,,Irvin,,27
KCR,O,1997-03-03,L/R,71,190,Kyle,,Isbel,,28
MIN,P,1987-10-27,R/R,73,195,Jay,,Jackson,,32
SFG,P,1991-08-24,R/R,74,210,Luke,,Jackson,,77
TEX,O,1991-06-15,L/R,74,190,Travis,,Jankowski,,16
TOR,C,1995-04-15,R/R,74,215,Danny,,Jansen,,9
BOS,P,1987-09-30,S/R,77,265,Kenley,,Jansen,,74
ARI,P,1997-12-26,L/R,74,195,Bryce,,Jarvis,,40
MIN,P,1994-11-22,R/R,74,195,Griffin,,Jax,,22
MIN,C,1997-06-03,R/R,76,235,Ryan,,Jeffers,,27
OAK,P,1993-12-23,R/R,73,182,Dany,,Jim&#233;nez,,56
CWS,D,1996-11-27,R/R,76,250,Eloy,,Jim&#233;nez,,74
ATL,P,1995-01-17,R/R,75,277,Joe,,Jim&#233;nez,,77
PIT,O,1992-08-16,R/R,72,205,Connor,,Joe,,2
ATL,P,1991-05-10,R/R,74,202,Pierce,,Johnson,,38
NYY,I,1997-08-04,R/R,71,210,Jahmai,,Jones,,14
PIT,P,2001-08-06,L/R,73,190,Jared,,Jones,,37
COL,O,1998-05-07,L/R,76,195,Nolan,,Jones,,22
NYY,O,1992-04-26,R/R,79,282,Aaron,,Judge,,99
MIN,I,1999-04-30,L/R,72,195,Edouard,,Julien,,47
DET,I,2001-08-14,L/R,74,211,Colt,,Keith,,33
ATL,O,1999-07-16,L/L,73,206,Jarred,,Kelenic,,24
PIT,P,1996-04-04,R/R,75,220,Mitch,,Keller,,23
DET,C,1994-07-14,R/R,74,212,Carson,,Kelly,,15
LAD,P,1988-06-09,R/R,73,174,Joe,,Kelly,,99
TBR,P,1997-11-28,R/R,74,200,Kevin,,Kelly,,49
OAK,P,1992-09-06,R/R,76,185,Michael,,Kelly,,47
BOS,P,1995-03-03,R/R,75,231,Zack,,Kelly,,76
DET,I,1998-10-05,R/R,69,190,Buddy,,Kennedy,,40
MIN,O,1993-02-10,L/L,76,225,Max,,Kepler,,26
PHI,P,2001-04-04,R/R,74,204,Orion,,Kerkering,,50
HOU,I,1997-08-25,R/R,74,204,Grae,,Kessinger,,16
TOR,P,1991-06-17,L/L,72,210,Yusei,,Kikuchi,,16
SDP,I,1995-10-17,R/R,69,168,Ha-Seong,,Kim,,7
BAL,P,1988-05-28,R/R,72,215,Craig,,Kimbrel,,46
TOR,I,1995-03-23,R/R,71,190,Isiah,,Kiner-Falefa,,7
STL,P,1994-09-14,L/L,74,215,John,,King,,47
SDP,P,1995-05-25,R/R,75,210,Michael,,King,,34
COL,P,1991-01-31,R/R,76,220,Tyler,,Kinley,,40
SEA,P,1998-02-04,R/R,76,215,George,,Kirby,,68
MIN,O,1997-11-09,L/L,74,195,Alex,,Kirilloff,,19
TOR,C,1998-11-06,R/R,68,245,Alejandro,,Kirk,,30
STL,P,1990-03-17,R/R,73,230,Andrew,,Kittredge,,27
BAL,O,1999-02-12,L/R,75,205,Heston,,Kjerstad,,13
LAD,P,1997-07-15,L/R,74,220,Landon,,Knack,,96
TEX,C,1995-02-03,R/R,72,225,Andrew,,Knizner,,12
MIL,P,1994-01-24,R/L,77,235,Jared,,Koenig,,47
SDP,P,1997-04-18,R/R,75,210,Stephen,,Kolek,,32
CWS,P,1996-04-30,R/R,75,220,Michael,,Kopech,,34
BAL,P,1996-01-07,R/R,74,210,Dean,,Kremer,,64
CLE,O,1997-09-05,L/L,69,170,Steven,,Kwan,,38
COL,P,1997-04-18,R/R,74,208,Peter,,Lambert,,20
DET,P,1995-10-02,R/R,75,202,Alex,,Lange,,55
OAK,C,1997-11-18,R/R,72,205,Shea,,Langeliers,,23
TEX,O,2001-11-15,R/R,72,225,Wyatt,,Langford,,36
MIN,O,1997-02-26,L/R,76,223,Trevor,,Larnach,,9
TEX,P,1996-04-08,R/L,74,185,Jacob,,Latz,,67
CLE,O,1994-07-15,R/R,71,203,Ram&#243;n,,Laureano,,10
WSH,P,1990-09-14,R/R,75,225,Derek,,Law,,58
COL,P,1994-11-25,R/R,75,213,Justin,,Lawrence,,61
CWS,P,1998-08-15,R/R,75,220,Jordan,,Leasure,,49
TEX,P,1993-12-19,R/R,72,195,Jos&#233;,,Leclerc,,25
ATL,P,1994-08-01,L/L,75,214,Dylan,,Lee,,52
SFG,O,1998-08-20,L/R,73,192,Jung,Hoo,Lee,,51
CWS,C,1998-07-25,R/R,74,220,Korey,,Lee,,26
CHC,P,1991-03-13,R/R,72,210,Mark,,Leiter,Jr,38
CWS,P,1991-10-26,R/R,70,215,Dominic,,Leone,,55
STL,P,1999-11-06,L/L,76,215,Matthew,,Liberatore,,52
NYM,I,1993-11-14,S/R,71,190,Francisco,,Lindor,,12
WSH,I,2000-06-14,R/R,75,202,Trey,,Lipscomb,,21
TBR,P,1995-10-05,R/R,76,220,Zack,,Littell,,52
CHC,P,2000-08-30,L/L,80,220,Luke,,Little,,43
CLE,P,1992-03-05,R/R,76,235,Ben,,Lively,,39
CIN,P,1998-02-05,L/L,78,216,Nick,,Lodolo,,40
CWS,I,1995-03-13,L/R,71,185,Nicky,,Lopez,,8
MIA,I,1998-10-01,R/R,70,185,Otto,,Lopez,,61
TEX,P,1992-01-04,R/R,75,217,Michael,,Lorenzen,,23
TEX,I,1995-07-07,L/R,76,220,Nathaniel,,Lowe,,30
NYM,P,1993-02-10,R/R,75,200,Jorge,,L&#243;pez,,52
MIN,P,1996-03-07,L/R,76,225,Pablo,,L&#243;pez,,49
ATL,P,1994-01-04,R/R,73,225,Reynaldo,,L&#243;pez,,40
KCR,P,1989-11-17,R/R,76,225,Seth,,Lugo,,67
LAD,I,1997-11-23,L/R,74,190,Gavin,,Lux,,9
MIA,P,1997-09-30,L/L,72,218,Jes&#250;s,,Luzardo,,44
STL,P,1987-05-12,S/R,77,280,Lance,,Lynn,,31
CHC,I,1997-03-05,R/R,68,175,Nick,,Madrigal,,1
DET,P,1988-04-11,R/R,73,185,Kenta,,Maeda,,18
CIN,C,1991-02-06,R/R,75,225,Luke,,Maile,,22
CWS,C,1986-08-16,R/R,72,230,Mart&#237;n,,Maldonado,,15
NYM,P,1992-02-01,R/L,77,245,Sean,,Manaea,,59
ARI,P,1991-03-01,R/L,76,219,Joe,,Mantiply,,35
MIN,O,1994-09-28,R/R,71,180,Manuel,,Margot,,13
NYY,P,1995-07-01,R/R,74,205,Ron,,Marinaccio,,97
KCR,P,1998-05-14,R/R,74,220,Alec,,Marsh,,48
PHI,O,1997-12-18,L/R,76,215,Brandon,,Marsh,,16
ARI,I,1993-10-12,S/R,73,210,Ketel,,Marte,,4
NYM,O,1988-10-09,R/R,73,195,Starling,,Marte,,6
PHI,P,1995-02-02,R/R,74,180,Yunior,,Marte,,43
MIN,O,1999-03-23,R/R,71,185,Austin,,Martin,,82
BOS,P,1986-06-02,R/R,80,224,Chris,,Martin,,55
ARI,P,2001-07-30,R/R,75,180,Justin,,Martinez,,63
CIN,P,1990-08-05,L/R,73,200,Nick,,Martinez,,28
HOU,P,1994-08-29,R/R,74,193,Seth,,Martinez,,61
CIN,O,1990-06-27,L/L,71,205,Nick,,Martini,,23
KCR,I,1998-03-22,L/R,72,195,Michael,,Massey,,19
BAL,I,1995-06-23,R/R,73,200,Jorge,,Mateo,,3
TBR,P,1993-03-25,R/R,74,206,Phil,,Maton,,88
SDP,P,1995-10-30,L/L,68,165,Yuki,,Matsui,,1
STL,P,1991-05-29,R/L,74,205,Steven,,Matz,,32
ATL,P,1990-10-19,L/L,75,230,Tyler,,Matzek,,68
TOR,P,1992-01-15,L/L,75,215,Tim,,Mayza,,58
KCR,P,1996-12-11,R/R,79,230,James,,McArthur,,66
BAL,C,1990-06-13,R/R,75,235,James,,McCann,,27
OAK,C,1997-12-02,L/R,74,217,Kyle,,McCann,,52
ARI,O,1997-07-30,L/L,74,215,Jake,,McCarthy,,31
HOU,O,1995-04-19,R/L,72,208,Chas,,McCormick,,20
PIT,D,1986-10-10,R/R,70,190,Andrew,,McCutchen,,22
OAK,P,1989-06-08,L/L,75,200,T,J,McFarland,,48
ARI,P,1989-10-31,R/R,71,190,Scott,,McGough,,30
BOS,C,1995-03-02,L/R,72,233,Reese,,McGuire,,3
CLE,P,1997-08-02,R/R,77,165,Triston,,McKenzie,,24
DET,I,1995-04-29,L/R,72,180,Zach,,McKinstry,,39
COL,I,1994-12-14,L/R,74,219,Ryan,,McMahon,,24
NYM,I,1992-04-08,L/R,73,195,Jeff,,McNeil,,1
TBR,I,2000-10-26,R/R,72,171,Curtis,,Mead,,25
DET,O,1999-11-02,L/R,77,205,Parker,,Meadows,,22
COL,P,1996-10-07,R/R,74,200,Nick,,Mears,,46
MIL,P,1993-12-05,L/R,80,255,Trevor,,Megill,,29
KCR,O,1998-11-29,L/R,73,190,M,J,Melendez,,1
CWS,I,1993-09-28,R/R,70,195,Danny,,Mendick,,0
WSH,I,1992-05-06,R/R,75,235,Joey,,Meneses,,45
PHI,O,1989-01-24,R/R,73,195,Whit,,Merrifield,,9
SDP,O,2003-04-19,L/R,75,195,Jackson,,Merrill,,3
CHC,I,1998-04-16,L/R,74,225,Matt,,Mervis,,22
HOU,O,1996-06-18,R/L,72,200,Jake,,Meyers,,6
STL,P,1988-08-23,R/R,76,230,Miles,,Mikolas,,39
WSH,C,1998-01-15,S/R,72,204,Drew,,Millas,,81
SEA,P,1998-08-23,R/R,74,200,Bryce,,Miller,,50
SFG,P,1998-02-13,L/L,77,240,Erik,,Miller,,68
OAK,P,1998-08-24,R/R,77,200,Mason,,Miller,,19
MIL,I,1996-11-15,R/R,71,197,Owen,,Miller,,6
DET,P,1990-10-10,R/R,75,225,Shelby,,Miller,,7
SEA,P,1995-07-29,R/R,77,220,Tyson,,Miller,,49
MIL,P,1991-01-13,L/L,75,187,Hoby,,Milner,,55
ATL,P,1993-09-02,L/L,72,215,A,J,Minter,,33
MIN,I,1998-06-29,R/R,74,210,Jose,,Miranda,,64
DET,P,1997-05-01,R/R,75,212,Casey,,Mize,,12
COL,P,2002-01-12,R/R,73,170,Anthony,,Molina,,43
CIN,P,1992-01-03,L/L,69,190,Sam,,Moll,,50
LAA,O,1998-05-13,L/R,74,195,Mickey,,Moniak,,16
COL,I,1998-08-17,R/R,75,235,Elehuris,,Montero,,44
HOU,P,1990-10-17,R/R,72,193,Rafael,,Montero,,47
ARI,P,1992-12-27,L/L,78,228,Jordan,,Montgomery,,52
SEA,O,1992-08-02,R/R,72,205,Dylan,,Moore,,25
LAA,P,1989-06-18,L/L,75,210,Matt,,Moore,,55
SDP,P,1999-02-27,L/L,71,224,Adrian,,Morejon,,50
CHC,I,1999-06-24,R/R,71,145,Christopher,,Morel,,5
ARI,C,2000-02-14,R/R,71,195,Gabriel,,Moreno,,14
NYY,P,1996-11-04,R/R,76,205,Cody,,Morris,,82
ATL,P,1983-11-12,R/R,77,215,Charlie,,Morton,,50
BAL,I,1997-02-18,R/R,76,220,Ryan,,Mountcastle,,6
OAK,P,1997-10-07,R/L,79,250,Kyle,,Muller,,39
BAL,O,1994-10-01,L/L,69,175,Cedric,,Mullins,,31
LAD,I,1990-08-25,L/R,72,215,Max,,Muncy,,13
SEA,P,1999-01-16,R/R,74,222,Andr&#233;s,,Mu&#241;oz,,75
SFG,C,1991-04-03,R/R,73,206,Tom,,Murphy,,19
SDP,P,1992-12-04,R/R,77,230,Joe,,Musgrove,,44
MIL,P,1998-08-05,R/R,73,217,Tobias,,Myers,,36
MIA,P,1998-08-18,L/L,75,215,Andrew,,Nardi,,43
NYM,C,1992-02-10,L/R,71,220,Omar,,Narv&#225;ez,,2
CLE,C,2000-02-21,L/R,72,205,Bo,,Naylor,,23
CLE,I,1997-06-22,L/L,71,250,Josh,,Naylor,,22
CHC,P,1989-06-14,R/R,74,227,H&#233;ctor,,Neris,,51
LAA,I,2001-01-31,R/R,72,185,Zach,,Neto,,9
OAK,O,1997-05-29,R/R,76,225,Tyler,,Nevin,,26
ARI,I,1993-08-04,R/R,73,195,Kevin,,Newman,,18
NYM,C,1994-04-12,R/R,71,211,Tom&#225;s,,Nido,,3
NYM,O,1993-03-27,L/R,75,206,Brandon,,Nimmo,,9
OAK,I,1996-03-30,L/L,75,217,Ryan,,Noda,,49
PHI,P,1993-06-04,R/R,74,200,Aaron,,Nola,,27
STL,O,1997-09-08,L/R,75,205,Lars,,Nootbaar,,21
WSH,I,2000-08-18,S/R,69,165,Nasim,,Nu&#241;ez,,26
MIN,P,1995-07-12,R/R,81,260,Bailey,,Ober,,17
BAL,I,1993-07-26,L/L,75,220,Ryan,,O'Hearn,,32
LAA,C,2000-02-09,R/R,74,185,Logan,,O'Hoppe,,14
LAD,T,1994-07-05,L/R,76,210,Shohei,,Ohtani,,17
MIN,P,1991-07-09,L/L,74,202,Steven,,Okert,,16
PIT,O,1996-03-06,R/R,74,190,Edward,,Olivares,,38
ATL,I,1994-03-29,L/R,77,225,Matt,,Olson,,28
DET,P,1999-07-31,R/R,73,160,Reese,,Olson,,45
BOS,O,1995-06-22,R/R,71,200,Tyler,,O'Neill,,17
MIL,I,1998-07-14,R/R,69,183,Joey,,Ortiz,,3
PIT,P,1999-01-27,R/R,74,235,Luis,L,Ortiz,,48
NYM,P,1985-11-22,S/R,77,246,Adam,,Ottavino,,0
LAD,O,1997-05-14,L/R,75,215,James,,Outman,,33
ATL,D,1990-11-12,R/R,73,225,Marcell,,Ozuna,,20
PHI,O,1998-11-19,R/R,74,215,Cristian,,Pache,,19
MIN,P,1996-01-08,R/R,77,217,Chris,,Paddack,,20
LAD,O,2000-12-08,R/R,72,212,Andy,,Pages,,84
CIN,P,1991-05-07,L/R,74,208,Emilio,,Pag&#225;n,,15
STL,I,1998-09-17,R/R,73,245,Pedro,,Pag&#233;s,,43
TBR,O,1997-05-16,L/R,70,180,Richie,,Palacios,,1
TBR,I,1999-02-18,R/R,71,213,Isaac,,Paredes,,17
WSH,P,1999-09-27,L/L,76,239,Mitchell,,Parker,,70
KCR,I,1997-10-10,L/L,76,245,Vinnie,,Pasquantino,,9
SDP,I,2000-09-24,L/R,73,200,Graham,,Pauley,,22
LAD,P,1988-11-06,L/L,76,212,James,,Paxton,,65
MIL,P,1994-04-07,R/R,74,220,Joel,,Payamps,,31
HOU,I,1997-09-22,R/R,72,202,Jeremy,,Pe&#241;a,,3
TOR,P,1996-08-20,R/R,78,255,Nate,,Pearson,,24
ARI,D,1992-04-21,L/L,73,220,Joc,,Pederson,,3
MIL,P,1997-03-20,R/R,77,241,Elvis,,Peguero,,59
TBR,P,1997-08-21,R/R,75,215,Ryan,,Pepiot,,44
MIL,P,1996-06-04,R/R,72,202,Freddy,,Peralta,,51
SDP,P,1991-07-27,L/L,72,227,Wandy,,Peralta,,58
KCR,C,1990-05-10,R/R,75,255,Salvador,,Perez,,13
MIL,O,1996-09-10,S/R,72,208,Blake,,Perkins,,16
ARI,P,1998-10-15,R/R,76,220,Brandon,,Pfaadt,,32
LAD,P,1994-09-11,R/R,74,215,Evan,,Phillips,,59
CWS,O,1989-01-04,R/R,72,210,Kevin,,Pillar,,12
TBR,C,1996-11-02,R/R,70,195,Ren&#233;,,Pinto,,50
PHI,P,1994-01-20,R/R,72,195,Ricardo,,Pinto,,51
TBR,P,1994-01-17,L/L,75,225,Colin,,Poche,,38
SEA,I,1993-07-05,S/R,71,208,Jorge,,Polanco,,7
HOU,P,1988-12-15,R/R,74,207,Ryan,,Pressly,,55
PIT,P,1991-04-04,L/L,72,200,Mart&#237;n,,P&#233;rez,,54
DET,O,1999-10-30,S/R,70,203,Wenceel,,P&#233;rez,,46
PIT,P,2000-09-16,R/R,75,210,Quinn,,Priester,,46
SDP,O,1993-02-20,S/R,72,184,Jurickson,,Profar,,10
TEX,P,1989-08-31,R/R,70,185,Austin,,Pruitt,,49
COL,P,1995-02-10,L/R,75,195,Cal,,Quantrill,,47
NYM,P,1989-01-24,R/L,73,220,Jose,,Quintana,,62
BOS,O,2000-09-18,R/R,69,165,Ceddanne,,Rafaela,,43
KCR,P,1997-12-12,L/L,76,190,Cole,,Ragans,,55
WSH,P,1992-12-25,R/R,74,247,Tanner,,Rainey,,21
SEA,C,1996-11-26,S/R,75,235,Cal,,Raleigh,,29
SEA,O,1994-09-19,L/R,76,235,Luke,,Raley,,20
LAD,P,1989-08-01,L/L,76,232,Nick,,Ramirez,,64
TBR,P,1990-05-02,R/R,72,220,Erasmo,,Ram&#237;rez,,61
TBR,O,1994-09-06,R/R,70,232,Harold,,Ram&#237;rez,,43
CLE,I,1992-09-17,S/R,69,190,Jos&#233;,,Ram&#237;rez,,11
BAL,P,1995-05-06,R/R,76,212,Yohan,,Ram&#237;rez,,48
MIL,P,1990-07-01,R/R,77,220,Colin,,Rea,,48
PHI,C,1991-03-18,R/R,73,212,J,T,Realmuto,,10
BOS,O,1991-03-26,R/R,72,203,Rob,,Refsnyder,,30
NYM,P,1995-08-30,R/R,75,230,Sean,,Reid-Foley,,71
KCR,O,1992-01-28,R/R,73,230,Hunter,,Renfroe,,16
LAA,I,1997-02-26,S/R,70,195,Luis,,Rengifo,,2
BOS,I,1993-09-05,R/R,68,175,Pablo,,Reyes,,19
PIT,O,1995-01-27,S/R,74,205,Bryan,,Reynolds,,10
TOR,P,1993-05-15,R/R,74,205,Trevor,,Richards,,33
ATL,I,1997-04-02,R/R,75,240,Austin,,Riley,,27
MIA,I,1996-06-29,R/R,74,225,Emmanuel,,Rivera,,15
NYY,I,1989-08-08,L/L,75,240,Anthony,,Rizzo,,48
TEX,P,1985-04-09,R/R,71,195,David,,Robertson,,37
STL,P,1998-07-16,R/R,78,235,Nick,,Robertson,,29
CLE,I,2001-01-13,S/R,70,170,Brayan,,Rocchio,,4
COL,I,1996-08-09,R/R,72,204,Brendan,,Rodgers,,7
NYY,P,1992-12-10,L/L,74,255,Carlos,,Rod&#243;n,,55
BOS,P,1991-11-14,L/L,73,223,Joely,,Rodr&#237;guez,,56
SEA,O,2000-12-29,R/R,75,228,Julio,,Rodr&#237;guez,,44
TOR,P,1997-03-10,R/R,72,165,Yariel,,Rodr&#237;guez,,29
BAL,P,1999-11-16,L/R,77,230,Grayson,,Rodriguez,,30
DET,C,1995-04-18,R/R,73,201,Jake,,Rogers,,34
SFG,P,1990-12-17,L/L,75,190,Taylor,,Rogers,,33
MIA,P,1997-11-13,L/L,77,217,Trevor,,Rogers,,28
SFG,P,1990-12-17,R/R,75,181,Tyler,,Rogers,,71
PHI,O,2000-08-14,R/R,71,165,Johan,,Rojas,,18
SEA,I,1994-06-30,L/R,73,207,Josh,,Rojas,,4
LAD,I,1989-02-24,R/R,72,188,Miguel,,Rojas,,11
TOR,P,1993-04-21,R/R,77,210,Jordan,,Romano,,68
STL,P,1996-09-09,L/L,71,215,JoJo,,Romero,,59
OAK,O,1994-11-01,R/R,75,225,Brent,,Rooker,,25
TBR,C,1997-09-25,L/R,69,191,Ben,,Rortvedt,,30
TBR,O,1995-11-20,R/R,74,190,Amed,,Rosario,,10
WSH,O,1991-09-28,L/R,73,180,Eddie,,Rosario,,8
SDP,I,1999-08-25,R/R,67,150,Eguy,,Rosario,,5
MIL,P,1993-05-21,R/R,76,243,Joe,,Ross,,41
SFG,P,1998-09-10,R/R,74,205,Landen,,Roupp,,65
OAK,O,1999-02-15,R/R,72,169,Esteury,,Ruiz,,1
BAL,C,1998-02-06,S/R,74,230,Adley,,Rutschman,,35
MIN,P,1996-06-05,R/R,74,205,Joe,,Ryan,,41
PIT,P,1995-05-11,R/R,74,205,Ryder,,Ryan,,72
ARI,P,1997-08-18,L/L,75,205,Andrew,,Saalfrank,,27
ATL,P,1989-03-30,L/L,78,180,Chris,,Sale,,51
LAA,D,1993-05-11,R/R,76,272,Miguel,,San&#243;,,22
CLE,P,1997-01-10,R/R,71,175,Nick,,Sandlin,,52
LAA,P,1996-10-18,L/L,75,190,Patrick,,Sandoval,,43
MIN,P,1997-07-17,R/R,75,215,Cole,,Sands,,44
MIN,I,1986-04-08,S/R,71,210,Carlos,,Santana,,30
NYY,P,1996-04-12,R/R,74,190,Dennis,,Santana,,53
BAL,O,1994-10-19,S/R,74,230,Anthony,,Santander,,25
SEA,P,1993-06-18,L/L,76,205,Tayler,,Saucedo,,60
KCR,P,1999-01-21,R/R,76,230,Matt,,Sauer,,65
LAA,I,2002-02-14,L/R,76,220,Nolan,,Schanuel,,18
NYY,P,1996-02-20,R/R,73,200,Clarke,,Schmidt,,36
TOR,O,1999-01-26,R/R,69,190,Davis,,Schneider,,36
KCR,P,1994-03-05,R/R,74,224,John,,Schreiber,,46
OAK,I,1997-06-11,R/R,71,186,Max,,Schuemann,,12
PHI,D,1993-03-05,L/R,72,229,Kyle,,Schwarber,,12
MIA,P,1994-07-22,R/L,72,235,Tanner,,Scott,,66
HOU,P,1992-06-01,R/R,75,185,Tayler,,Scott,,50
TEX,I,1994-04-27,L/R,76,215,Corey,,Seager,,5
OAK,P,1996-02-19,R/L,71,180,J,P,Sears,,38
TEX,I,1990-09-17,R/R,72,195,Marcus,,Semien,,2
WSH,I,1995-06-29,R/R,73,217,Nick,,Senzel,,13
NYM,P,1994-02-20,R/R,74,218,Luis,,Severino,,40
CWS,I,1996-04-23,L/L,77,235,Gavin,,Sheets,,32
TBR,I,1998-01-22,L/R,72,205,Austin,,Shenton,,54
CWS,I,1997-11-19,L/R,75,200,Braden,,Shewmake,,17
NYM,I,1995-05-29,R/R,70,180,Zack,,Short,,21
STL,O,1999-07-16,L/L,73,195,Michael,,Siani,,63
CIN,P,1994-05-10,R/R,74,213,Lucas,,Sims,,39
KCR,P,1996-08-04,R/R,77,215,Brady,,Singer,,51
HOU,I,1991-09-18,L/L,72,256,Jon,,Singleton,,28
TBR,O,1995-07-22,R/R,74,210,Jose,,Siri,,22
DET,P,1996-11-20,R/L,75,240,Tarik,,Skubal,,29
BOS,P,1997-09-15,R/R,76,222,Justin,,Slaten,,63
SFG,O,1992-12-13,R/R,73,204,Austin,,Slater,,13
MIA,P,1990-04-12,R/R,76,225,Burch,,Smith,,20
CLE,P,1999-05-09,R/R,77,230,Cade,,Smith,,36
NYM,P,1993-09-24,R/R,74,190,Drew,,Smith,,33
TEX,I,1997-08-07,L/R,70,172,Josh,,Smith,,8
ARI,I,1996-02-06,L/L,74,208,Pavin,,Smith,,26
KCR,P,1989-07-10,R/L,77,255,Will,,Smith,,31
LAD,C,1995-03-28,R/R,70,195,Will,,Smith,,16
PHI,P,1996-12-12,L/L,73,165,Cristopher,,S&#225;nchez,,61
MIL,C,1992-12-02,R/R,74,258,Gary,,S&#225;nchez,,99
MIA,O,1997-10-07,L/R,75,222,Jes&#250;s,,S&#225;nchez,,12
MIA,P,1998-07-29,R/R,72,234,Sixto,,S&#225;nchez,,18
SFG,D,1992-02-25,R/R,76,235,Jorge,,Soler,,2
LAA,P,1998-10-20,R/R,75,220,Jos&#233;,,Soriano,,59
CWS,P,1997-08-04,R/R,77,250,Michael,,Soroka,,40
PHI,I,1996-03-06,R/R,72,210,Edmundo,,Sosa,,33
PHI,P,1995-02-11,L/L,73,234,Gregory,,Soto,,30
NYY,O,1998-10-25,L/L,74,224,Juan,,Soto,,22
SEA,P,1995-04-12,L/L,71,200,Gabe,,Speier,,55
OAK,P,1998-05-06,R/R,73,185,Mitch,,Spence,,40
TOR,O,1989-09-19,R/R,75,220,George,,Springer,,4
COL,C,1989-12-22,R/R,77,225,Jacob,,Stallings,,25
SEA,P,1991-07-26,R/R,76,226,Ryne,,Stanek,,45
NYY,D,1989-11-08,R/R,78,245,Giancarlo,,Stanton,,27
CIN,O,1997-12-07,R/R,71,185,Spencer,,Steer,,7
CIN,C,1996-08-16,R/R,76,225,Tyler,,Stephenson,,37
MIN,P,1991-10-03,L/R,75,220,Brock,,Stewart,,61
NYM,O,1993-11-30,L/R,72,210,D,J,Stewart,,29
LAD,P,1998-10-15,R/R,73,175,Gavin,,Stone,,71
PHI,I,1997-10-06,L/R,75,200,Bryson,,Stott,,5
PHI,P,1991-11-12,R/L,74,190,Matt,,Strahm,,25
KCR,P,1990-08-22,R/R,74,205,Chris,,Stratton,,35
PIT,P,1996-11-17,R/R,76,225,Hunter,,Stratton,,63
LAA,P,1988-09-24,R/R,75,225,Hunter,,Strickland,,61
OAK,P,1989-11-23,R/R,73,215,Ross,,Stripling,,36
NYY,P,1991-05-01,R/R,67,180,Marcus,,Stroman,,0
PHI,C,1993-05-26,L/R,70,170,Garrett,,Stubbs,,21
LAA,P,1998-01-03,L/L,70,225,Jos&#233;,,Suarez,,54
SDP,P,1991-03-01,R/R,74,210,Robert,,Suarez,,75
BAL,P,1989-10-08,R/R,75,235,Albert,,Su&#225;rez,,49
ARI,I,1991-07-18,R/R,71,213,Eugenio,,Su&#225;rez,,28
PHI,P,1995-08-26,L/L,73,217,Ranger,,Su&#225;rez,,55
CIN,P,1989-08-29,L/L,76,213,Brent,,Suter,,31
PIT,O,1998-07-29,L/L,74,215,Jack,,Suwinski,,65
CHC,I,1994-02-11,R/R,73,190,Dansby,,Swanson,,7
TOR,P,1993-09-04,R/R,75,225,Erik,,Swanson,,50
CHC,P,1991-11-18,R/R,77,230,Jameson,,Taillon,,50
BAL,P,1994-05-01,R/R,74,190,Dillon,,Tate,,55
SDP,O,1999-01-02,R/R,75,217,Fernando,,Tatis,Jr,23
CHC,O,1990-12-03,L/L,73,220,Mike,,Tauchman,,40
TEX,O,1998-09-08,S/R,74,195,Leody,,Taveras,,3
LAD,O,1990-08-29,R/R,73,196,Chris,,Taylor,,3
PIT,O,1991-03-26,R/R,76,215,Michael,A,Taylor,,18
NYM,O,1994-01-22,R/R,73,218,Tyrone,,Taylor,,15
PIT,I,1995-03-16,L/L,76,270,Rowdy,,Tellez,,44
LAA,C,1995-05-06,L/R,72,215,Matt,,Thaiss,,21
MIN,P,1987-01-31,R/L,72,205,Caleb,,Thielbar,,56
CIN,O,1998-06-09,R/R,74,197,Bubba,,Thompson,,12
CHC,P,1995-03-13,R/R,73,210,Keegan,,Thompson,,71
ARI,P,1992-06-26,R/R,77,210,Ryan,,Thompson,,81
SEA,P,1993-09-30,R/R,72,190,Trent,,Thornton,,46
DET,I,1999-08-26,R/R,73,220,Spencer,,Torkelson,,20
OAK,I,1996-12-20,S/R,72,223,Abraham,,Toro,,31
NYY,I,1996-12-13,R/R,73,205,Gleyber,,Torres,,25
COL,I,2001-08-01,R/R,72,162,Ezequiel,,Tovar,,14
NYY,O,1997-09-13,L/L,74,220,Taylor,,Trammell,,33
COL,I,1996-05-30,R/R,74,205,Alan,,Trejo,,13
NYY,C,1992-11-28,R/R,70,215,Jose,,Trevino,,39
PIT,I,1998-02-08,R/R,75,210,Jared,,Triolo,,19
ATL,C,1995-03-21,R/R,68,221,Chadwick,,Tromp,,45
LAA,O,1991-08-07,R/R,74,235,Mike,,Trout,,27
HOU,O,1997-01-17,L/R,76,212,Kyle,,Tucker,,30
MIL,I,1999-11-21,L/R,72,188,Brice,,Turang,,2
PHI,P,1992-09-18,R/R,75,210,Spencer,,Turnbull,,22
TOR,I,1984-11-23,R/R,71,208,Justin,,Turner,,2
PHI,I,1993-06-30,R/R,74,185,Trea,,Turner,,7
MIA,P,1996-12-27,R/R,72,200,Kyle,,Tyler,,73
SEA,I,1997-06-03,R/R,70,202,Luis,,Ur&#237;as,,16
BAL,I,1994-06-03,R/R,70,185,Ram&#243;n,,Ur&#237;as,,29
TEX,P,1991-09-12,R/R,74,208,Jos&#233;,,Ure&#241;a,,54
MIL,P,2000-06-20,R/R,75,215,Abner,,Uribe,,45
BOS,I,1998-12-28,L/R,68,191,Enmanuel,,Valdez,,47
WSH,I,1991-07-16,S/R,72,202,Ildemaro,,Vargas,,14
TOR,O,1996-07-02,L/R,68,207,Daulton,,Varsho,,25
CWS,I,1998-04-03,R/R,72,215,Andrew,,Vaughn,,25
KCR,O,1998-12-26,R/R,72,190,Nelson,,Vel&#225;zquez,,17
NYY,O,1996-05-15,L/L,72,209,Alex,,Verdugo,,24
HOU,P,1983-02-20,R/R,77,235,Justin,,Verlander,,35
LAD,P,1996-04-11,L/L,73,209,Alex,,Vesia,,51
DET,P,1995-06-06,R/R,72,180,Will,,Vest,,19
MIL,P,1993-01-07,R/R,75,259,Thyago,,Vieira,,49
DET,O,1996-09-16,R/R,75,205,Matt,,Vierling,,8
COL,P,1999-10-09,R/R,72,200,Victor,,Vodnik,,38
TOR,D,1992-12-17,L/R,72,270,Daniel,,Vogelbach,,20
NYY,I,2001-04-28,R/R,69,180,Anthony,,Volpe,,11
SEA,P,1992-06-26,R/R,74,215,Austin,,Voth,,30
SDP,P,1998-11-03,R/R,72,165,Randy,,V&#225;squez,,98
MIN,C,1990-08-21,R/R,69,205,Christian,,V&#225;zquez,,8
KCR,P,1991-07-01,R/R,78,215,Michael,,Wacha,,52
SFG,I,1994-01-01,L/L,73,205,LaMonte,,Wade,Jr,31
SDP,I,1994-11-23,L/R,73,188,Tyler,,Wade,,14
SDP,P,1996-09-26,R/R,74,185,Matt,,Waldron,,61
ARI,I,1991-03-28,R/R,72,208,Christian,,Walker,,53
NYM,P,1994-12-01,L/L,78,225,Josh,,Walker,,91
SFG,P,1995-11-26,R/R,74,200,Ryan,,Walker,,74
LAA,O,1993-12-14,R/R,73,200,Taylor,,Ward,,3
MIA,P,1999-12-17,R/L,73,230,Ryan,,Weathers,,60
NYY,P,1993-08-21,R/R,74,183,Luke,,Weaver,,30
BAL,P,1993-08-15,R/R,74,210,Jacob,,Webb,,71
SFG,P,1996-11-18,R/R,73,220,Logan,,Webb,,62
WSH,P,1992-11-07,L/R,76,211,Jordan,,Weems,,51
BOS,P,1995-02-04,R/R,74,235,Greg,,Weissert,,57
NYY,C,1999-07-12,L/R,74,220,Austin,,Wells,,28
NYM,I,1990-04-26,L/R,73,195,Joey,,Wendle,,13
TEX,I,1997-05-23,R/R,71,206,Davis,,Wendzel,,38
DET,P,1997-10-06,L/L,77,220,Joey,,Wentz,,43
CHC,P,1997-12-05,R/R,75,210,Hayden,,Wesneski,,19
BAL,I,1999-02-18,R/R,74,210,Jordan,,Westburg,,11
PHI,P,1990-05-30,L/R,76,195,Zack,,Wheeler,,45
SFG,P,1994-12-28,R/R,75,210,Mitch,,White,,54
CHC,P,1999-09-01,L/L,75,220,Jordan,,Wicks,,36
MIL,O,1999-02-11,R/R,76,226,Joey,,Wiemer,,28
PIT,I,1999-03-12,R/R,73,180,Alika,,Williams,,25
ATL,I,1996-08-09,R/R,73,186,Luke,,Williams,,65
WSH,P,1992-04-25,R/R,75,231,Trevor,,Williams,,32
MIL,P,1997-12-20,R/R,74,272,Bryse,,Wilson,,46
CIN,P,1987-08-18,L/L,74,205,Justin,,Wilson,,32
CWS,P,1994-08-24,R/R,75,221,Steven,,Wilson,,36
BOS,P,1998-06-28,R/R,76,215,Josh,,Winckowski,,25
WSH,O,1993-08-17,L/L,74,206,Jesse,,Winker,,6
TEX,P,1999-11-25,R/R,74,190,Cole,,Winn,,60
SFG,P,1998-02-20,R/R,76,238,Keaton,,Winn,,67
STL,I,2002-03-21,R/R,71,185,Masyn,,Winn,,0
CHC,O,1991-08-27,R/R,74,220,Patrick,,Wisdom,,16
KCR,I,2000-06-14,R/R,73,200,Bobby,,Witt,Jr,7
BOS,C,1996-05-19,R/R,73,190,Connor,,Wong,,12
OAK,P,1991-01-12,R/L,76,215,Alex,,Wood,,57
LAD,P,1998-08-17,R/R,70,176,Yoshinobu,,Yamamoto,,18
LAD,P,1991-12-31,R/L,77,215,Ryan,,Yarbrough,,56
SFG,O,1990-08-23,L/L,70,178,Mike,,Yastrzemski,,5
TEX,P,1987-03-25,L/R,70,205,Kirby,,Yates,,39
BOS,O,1993-07-15,L/R,68,192,Masataka,,Yoshida,,7
WSH,O,1999-07-27,R/R,71,192,Jacob,,Young,,30
SEA,C,1993-08-28,R/R,71,205,Seby,,Zavala,,33
KCR,P,1999-09-27,L/L,72,220,Angel,,Zerpa,,61
`