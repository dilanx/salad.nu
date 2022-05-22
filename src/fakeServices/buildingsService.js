const buildings = {
  "Fisk Hall 311": { lat: 42.050793, lon: -87.674174 },
  "McCormick Foundation Ctr 3107": { lat: 42.051381, lon: -87.674162 },
  "McCormick Foundation Ctr Forum": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall 308": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall B11": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 309": { lat: 42.050793, lon: -87.674174 },
  "McCormick Foundation Ctr 2111": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall 307": { lat: 42.050793, lon: -87.674174 },
  "Fisk Hall 206": { lat: 42.050793, lon: -87.674174 },
  "McCormick Foundation Ctr 4115": { lat: 42.051381, lon: -87.674162 },
  "Annenberg Hall G29": { lat: 42.056058, lon: -87.674515 },
  "McCormick Foundation Ctr 2131": { lat: 42.051381, lon: -87.674162 },
  "Fisk Hall 111": { lat: 42.050793, lon: -87.674174 },
  "Kresge Cent. Hall 2-380 Kaplan": { lat: 42.0516769, lon: -87.6750968 },
  "McCormick Foundation Ctr 2107": { lat: 42.051381, lon: -87.674162 },
  "Ford Hive Rm 2350": { lat: 42.05702096786832, lon: -87.67673253677064 },
  "Washington, DC Bureau": { lat: 38.88980656673977, lon: -77.00905115423366 },
  "555 Clark B03": { lat: 42.049555, lon: -87.677517 },
  "Fisk Hall 217": { lat: 42.050793, lon: -87.674174 },
  "Kellogg Global Hub 1420 & 1430": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Technological Institute L361": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M345": { lat: 42.057728, lon: -87.675869 },
  "Tech Institute Lecture Room 5": { lat: 42.057788, lon: -87.675893 },
  "Technological Institute F281": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M177": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M349": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute L150": { lat: 42.057728, lon: -87.675869 },
  "Frances Searle Building 2107": { lat: 42.0586351, lon: -87.6737228 },
  "Technological Institute L168": { lat: 42.057728, lon: -87.675869 },
  "2122 Sheridan Rd Classroom 250": {
    lat: 42.05692705390899,
    lon: -87.67787264856341,
  },
  "Technological Institute A110": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute L221": { lat: 42.057728, lon: -87.675869 },
  "Tech Institute Lecture Room 4": { lat: 42.057788, lon: -87.675893 },
  "Technological Institute M120": { lat: 42.057728, lon: -87.675869 },
  "Frances Searle Building 3220": { lat: 42.0586351, lon: -87.6737228 },
  "Frances Searle Building 1441": { lat: 42.0586351, lon: -87.6737228 },
  "Ford Eng Design Cntr SB335": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Technological Institute MG28": { lat: 42.057728, lon: -87.675869 },
  "Lunt Hall 105": { lat: 42.054803, lon: -87.676345 },
  "Technological Institute L251": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute A230": { lat: 42.057728, lon: -87.675869 },
  "University Hall 121": { lat: 42.051901, lon: -87.67596 },
  "Annenberg Hall G32": { lat: 42.056058, lon: -87.674515 },
  "Technological Institute M128": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute L158": { lat: 42.057728, lon: -87.675869 },
  "University Hall 122": { lat: 42.051901, lon: -87.67596 },
  "Technological Institute LG72": { lat: 42.057728, lon: -87.675869 },
  "Annenberg Hall G01": { lat: 42.056058, lon: -87.674515 },
  "Kresge Centennial Hall 2-415": { lat: 42.0516769, lon: -87.6750968 },
  "Technological Institute LG52": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute LG62": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute F280": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M166": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute L160": { lat: 42.057728, lon: -87.675869 },
  "Frances Searle Building 2407": { lat: 42.0586351, lon: -87.6737228 },
  "Tech Institute Lecture Room 2": { lat: 42.057788, lon: -87.675893 },
  "Technological Institute AUD": { lat: 42.057728, lon: -87.675869 },
  "Annenberg Hall G15": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall G21": { lat: 42.056058, lon: -87.674515 },
  "University Hall 102": { lat: 42.051901, lon: -87.67596 },
  "Garage Workspace Classroom 1": {
    lat: 42.05933911117707,
    lon: -87.67399242994759,
  },
  "Lutkin Hall": { lat: 42.051018, lon: -87.680259 },
  "Technological Institute L211": { lat: 42.057728, lon: -87.675869 },
  "Tech Institute Lecture Room 3": { lat: 42.057788, lon: -87.675893 },
  "Technological Institute M152": { lat: 42.057728, lon: -87.675869 },
  "Locy Hall 214": { lat: 42.051062, lon: -87.673933 },
  "Technological Institute M164": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute LG66": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute M228": { lat: 42.057728, lon: -87.675869 },
  "Ford Hive Annex 2340": { lat: 42.05702096786832, lon: -87.67673253677064 },
  "Ford Eng Design Cntr G-211": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Eng Design Cntr G-205": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Eng Design Cntr G-201": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Studio 3 Rm 3210": { lat: 42.05702096786832, lon: -87.67673253677064 },
  "Technological Institute MG47": { lat: 42.057728, lon: -87.675869 },
  "Ford Eng Design Cntr SB310": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Locy Hall 111": { lat: 42.051062, lon: -87.673933 },
  "Ford ITW Auditorium 1350": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Ford Design Studio 1 Rm 1230": {
    lat: 42.05702096786832,
    lon: -87.67673253677064,
  },
  "Technological Institute M416": { lat: 42.057728, lon: -87.675869 },
  "Lunt Hall 101": { lat: 42.054803, lon: -87.676345 },
  "Annenberg Hall G31": { lat: 42.056058, lon: -87.674515 },
  "Lunt Hall 102": { lat: 42.054803, lon: -87.676345 },
  "Parkes Hall 212": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "Annenberg Hall G30": { lat: 42.056058, lon: -87.674515 },
  "Technological Institute C135": { lat: 42.057728, lon: -87.675869 },
  "555 Clark B01": { lat: 42.049555, lon: -87.677517 },
  "Frances Searle Building 1421": { lat: 42.0586351, lon: -87.6737228 },
  "North Garage Krebs Room 1440": {
    lat: 42.05963149300605,
    lon: -87.6742308153558,
  },
  "North Garage Padula Room 1430": {
    lat: 42.05963149300605,
    lon: -87.6742308153558,
  },
  "University Hall 112": { lat: 42.051901, lon: -87.67596 },
  "Technological Institute LG68": { lat: 42.057728, lon: -87.675869 },
  "Pancoe Building Abbott Aud": {
    lat: 42.0571288720875,
    lon: -87.67356268193114,
  },
  "Technological Institute L170": { lat: 42.057728, lon: -87.675869 },
  "Kellogg Global Hub L070": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Locy Hall 301": { lat: 42.051062, lon: -87.673933 },
  "Frances Searle Building 2370": { lat: 42.0586351, lon: -87.6737228 },
  "RCMA Opera Theater 1-140": {
    lat: 42.05174777294826,
    lon: -87.67148823134536,
  },
  "Pick-Staiger Rehearsal Room": {
    lat: 42.05271257928584,
    lon: -87.67224454896055,
  },
  "Regenstein Hall of Music 011": { lat: 42.052194, lon: -87.671434 },
  "RCMA Choral Room 1-190": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "Parkes Hall Choir Room 034": {
    lat: 42.050071166764454,
    lon: -87.67723949641348,
  },
  "Pick-Staiger Concert Stage": {
    lat: 42.05271257928584,
    lon: -87.67224454896055,
  },
  "RCMA 1-180": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 1-168": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 1-164": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA Lower Level 111": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "Regenstein Hall of Music 143": { lat: 42.052194, lon: -87.671434 },
  "RCMA 4-136 Keyboard Lab": {
    lat: 42.05174777294826,
    lon: -87.67148823134536,
  },
  "RCMA 3-141 Studio": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 3-142 Studio": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "Regenstein Hall of Music 117": { lat: 42.052194, lon: -87.671434 },
  "Regenstein Hall of Music 119": { lat: 42.052194, lon: -87.671434 },
  "RCMA 1-176": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 1-172": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 1-160": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 4-138 Keyboard Lab": {
    lat: 42.05174777294826,
    lon: -87.67148823134536,
  },
  "Regenstein Hall of Music MCR": { lat: 42.052194, lon: -87.671434 },
  "RCMA Lower Level 115": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA Lower Level 113": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA Lower Level 121": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA 3-131": { lat: 42.05174777294826, lon: -87.67148823134536 },
  "RCMA Recital Hall 1-100": {
    lat: 42.05174777294826,
    lon: -87.67148823134536,
  },
  "Annenberg Hall 303": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall G02": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall 345": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall 317": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall G22": { lat: 42.056058, lon: -87.674515 },
  "Annenberg Hall 101": { lat: 42.056058, lon: -87.674515 },
  "Kresge Centennial Hall 2-425": { lat: 42.0516769, lon: -87.6750968 },
  "Wirtz Center STRUB": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Frances Searle Building 1483": { lat: 42.0586351, lon: -87.6737228 },
  "Locy Hall 106": { lat: 42.051062, lon: -87.673933 },
  "Frances Searle Building 2378": { lat: 42.0586351, lon: -87.6737228 },
  "Parkes Hall 215": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "CSD Sem Rm B302 - Frances Srle": { lat: 42.0586351, lon: -87.6737228 },
  "2315 Campus Dr Clinic 1620": {
    lat: 42.05922069424051,
    lon: -87.67456491973468,
  },
  "Frances Searle Building 3231": { lat: 42.0586351, lon: -87.6737228 },
  "2315 Campus Dr Clinic 1630": {
    lat: 42.05922069424051,
    lon: -87.67456491973468,
  },
  "Wirtz 215 Instruct Black Box 3": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 201 Performnce Black Box": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz Center Ballroom": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz Center SOUTH": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Frances Searle Building 3417": { lat: 42.0586351, lon: -87.6737228 },
  "AM Swift Krause Studio 103": {
    lat: 42.05233262666341,
    lon: -87.67506714321523,
  },
  "Wirtz 240 Seminar Room 2": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 230 Instruct Black Box 1": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 235 Seminar Room 1": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Louis Hall 119": { lat: 42.051513, lon: -87.673291 },
  "Block Pick-Laudati Auditorium": {
    lat: 42.05232587921215,
    lon: -87.67269952525008,
  },
  "Annie May Swift Hall 219": { lat: 42.052311, lon: -87.675093 },
  "Annie May Swift Hall 109": { lat: 42.052311, lon: -87.675093 },
  "Harris Hall L28": { lat: 42.051269, lon: -87.676279 },
  "University Hall 418": { lat: 42.051901, lon: -87.67596 },
  "University Hall 118": { lat: 42.051901, lon: -87.67596 },
  "Louis Hall 106": { lat: 42.051513, lon: -87.673291 },
  "Louis Hall 118": { lat: 42.051513, lon: -87.673291 },
  "Frances Searle 1101 SoundTank": { lat: 42.0586351, lon: -87.6737228 },
  "Frances Searle 1111 SoundTank": { lat: 42.0586351, lon: -87.6737228 },
  "Harris Hall L05": { lat: 42.051269, lon: -87.676279 },
  "University Hall 218": { lat: 42.051901, lon: -87.67596 },
  "University Library 4722": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Locy Hall 305": { lat: 42.051062, lon: -87.673933 },
  "Helmerich Auditorium": { lat: 42.052328701262205, lon: -87.67506146636171 },
  "Louis Hall 105": { lat: 42.051513, lon: -87.673291 },
  "Wirtz Center Cellar": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz Center BERGEN": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Wirtz 101 Performnce Black Box": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 220 Wet Design Studio": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 205 Dry Design Studio": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 225 Instruct Black Box 2": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz Center COSTUME SH": {
    lat: 42.05212198166667,
    lon: -87.67326580261454,
  },
  "Wirtz 206 Computer Lab": { lat: 42.05212198166667, lon: -87.67326580261454 },
  "Abbott Hall Wirtz Chicago 104": { lat: 41.89528, lon: -87.6167 },
  "Abbott Hall Wirtz Chicago 203": { lat: 41.89528, lon: -87.6167 },
  "Abbott Hall Wirtz Chicago 212": { lat: 41.89528, lon: -87.6167 },
  "Parkes Hall 214": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "Parkes Hall 224": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "Kresge Centennial Hall 3-410": { lat: 42.0516769, lon: -87.6750968 },
  "Locy Hall 318": { lat: 42.051062, lon: -87.673933 },
  "Parkes Hall 223": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "McGaw Pavilion 2-322 Kellerman": null,
  "University Library 5322": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Locy Hall 213": { lat: 42.051062, lon: -87.673933 },
  "University Library 4670": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "University Library 5746": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Fisk Hall 114": { lat: 42.050793, lon: -87.674174 },
  "University Library 3670": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "University Library 3622": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Harris Hall L06": { lat: 42.051269, lon: -87.676279 },
  "Kresge 5531 Comp Lit. Sem. Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "ANTHRO Sem Rm 104 - 1810 Hinmn": {
    lat: 42.04957332833163,
    lon: -87.67688651298036,
  },
  "University Hall 101": { lat: 42.051901, lon: -87.67596 },
  "University Hall 318": { lat: 42.051901, lon: -87.67596 },
  "Harris Hall 107": { lat: 42.051269, lon: -87.676279 },
  "University Hall 412": { lat: 42.051901, lon: -87.67596 },
  "ANTHRO Sem Rm B07 - 1810 Hinmn": {
    lat: 42.04957332833163,
    lon: -87.67688651298036,
  },
  "ANTHRO Lab A58 - 1810 Hinmn": {
    lat: 42.04957332833163,
    lon: -87.67688651298036,
  },
  "Crowe 4-130 Rel Studies Sem Rm": {
    lat: 42.051422529211436,
    lon: -87.67518303610152,
  },
  "Kresge Centennial Hall 4-410": { lat: 42.0516769, lon: -87.6750968 },
  "University Library 5722": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "University Library 3722": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "University Library 4770": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Kresge 1530 Art Studio": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1-345 Art Drawing Studi": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1335 Painting Studio": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1425 Sculpture Room": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1310 Photo Classroom": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-420": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1319 Art Room": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1305 Flex Seminar": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 1410 Art Flex/Seminar": { lat: 42.0516769, lon: -87.6750968 },
  "Locy Hall 011": { lat: 42.051062, lon: -87.673933 },
  "Allison Residential Comm 1021": { lat: 42.050435, lon: -87.67821 },
  "Kresge Centennial Hall 2-343": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge 4354 Art Hist. Sem. Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-331": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-410": { lat: 42.0516769, lon: -87.6750968 },
  "University Library 3322": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Kresge 4438 Asian LC Sem Rm": { lat: 42.0516769, lon: -87.6750968 },
  "Elder Hall 030 Seminar Room": {
    lat: 42.060905166225375,
    lon: -87.67758604178537,
  },
  "ISP Sem Rm 203 - 616 Noyes St": {
    lat: 42.05816724664198,
    lon: -87.67816294426228,
  },
  "Kresge Centennial Hall 2-435": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-319": { lat: 42.0516769, lon: -87.6750968 },
  "University Library 3370": { lat: 42.05282047408196, lon: -87.6744931804232 },
  "Kresge Centennial Hall 2-430": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-335": { lat: 42.0516769, lon: -87.6750968 },
  "Technological Institute F285": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute F491": { lat: 42.057728, lon: -87.675869 },
  "560 Lincoln St. Classroom 101A": {
    lat: 42.06137433094192,
    lon: -87.67565467799473,
  },
  "Annenberg Hall G28": { lat: 42.056058, lon: -87.674515 },
  "Harris Hall L07": { lat: 42.051269, lon: -87.676279 },
  "560 Lincoln St. Classroom 101B": {
    lat: 42.06137433094192,
    lon: -87.67565467799473,
  },
  "Kellogg Econ Classroom 1410": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Kellogg Econ Classroom 3301": {
    lat: 42.05743195787147,
    lon: -87.67194109025868,
  },
  "Parkes Hall 213": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "555 Clark 230": { lat: 42.049555, lon: -87.677517 },
  "University Hall 312": { lat: 42.051901, lon: -87.67596 },
  "University Hall 018 English": { lat: 42.051901, lon: -87.67596 },
  "Harris Hall L04": { lat: 42.051269, lon: -87.676279 },
  "Swift Hall 107": { lat: 42.055138, lon: -87.674953 },
  "Kresge Centennial Hall 2-325": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-329": { lat: 42.0516769, lon: -87.6750968 },
  "Kresge Centennial Hall 2-339": { lat: 42.0516769, lon: -87.6750968 },
  "Shepard Hall Classroom B05": {
    lat: 42.05088324175059,
    lon: -87.67892969641422,
  },
  "Locy Hall 303": { lat: 42.051062, lon: -87.673933 },
  "Lunt Hall 103": { lat: 42.054803, lon: -87.676345 },
  "Kresge 3354 German Seminar Rm.": { lat: 42.0516769, lon: -87.6750968 },
  "Parkes Hall 222": { lat: 42.050071166764454, lon: -87.67723949641348 },
  "Kresge 3438 Philosophy Sem. Rm": { lat: 42.0516769, lon: -87.6750968 },
  "Locy Hall 110": { lat: 42.051062, lon: -87.673933 },
  "Locy Hall 314": { lat: 42.051062, lon: -87.673933 },
  "Kresge 4364 Classics Sem Rm": { lat: 42.0516769, lon: -87.6750968 },
  "Swift Hall 210": { lat: 42.055138, lon: -87.674953 },
  "620 Lincoln St #218": { lat: 42.061367, lon: -87.678179 },
  "Cresap Laboratory 101": { lat: 42.054702, lon: -87.67496 },
  "Technological Institute MG51": { lat: 42.057728, lon: -87.675869 },
  "Locy Hall 109": { lat: 42.051062, lon: -87.673933 },
  "Lunt Hall 107": { lat: 42.054803, lon: -87.676345 },
  "Lunt Hall 104": { lat: 42.054803, lon: -87.676345 },
  "Hogan 2-112 Cell/Tissue Cultur": {
    lat: 42.057356277073595,
    lon: -87.6741509430629,
  },
  "Kresge Centennial Hall 2-440": { lat: 42.0516769, lon: -87.6750968 },
  "Scott Hall 201 Ripton Room": {
    lat: 42.05174703079395,
    lon: -87.67756770522155,
  },
  "Technological Institute MG32": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute MG35": { lat: 42.057728, lon: -87.675869 },
  "Technological Institute F242": { lat: 42.057728, lon: -87.675869 },
  "Kresge 3364 Slavic Seminar Rm": { lat: 42.0516769, lon: -87.6750968 },
  "Scott Hall 107 Burdick Room": {
    lat: 42.05174703079395,
    lon: -87.67756770522155,
  },
  "Scott Hall 212": { lat: 42.05174703079395, lon: -87.67756770522155 },
  "Swift Hall 231": { lat: 42.055138, lon: -87.674953 },
  "SOCIOL Sem Rm 107 - 1812 Chi": null,
  "STAT Sem Rm B02 - 2006 Sher": {
    lat: 42.054166279213405,
    lon: -87.6776413792364,
  },
};

export function getBuilding(buildingName) {
  return buildings[buildingName];
}
