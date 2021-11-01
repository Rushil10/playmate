const districts = [
  {
    label: "Anantapur",
    value: "Anantapur",
  },
  {
    label: "Chittoor",
    value: "Chittoor",
  },
  {
    label: "East Godavari",
    value: "East Godavari",
  },
  {
    label: "Guntur",
    value: "Guntur",
  },
  {
    label: "Krishna",
    value: "Krishna",
  },
  {
    label: "Kurnool",
    value: "Kurnool",
  },
  {
    label: "Nellore",
    value: "Nellore",
  },
  {
    label: "Prakasam",
    value: "Prakasam",
  },
  {
    label: "Srikakulam",
    value: "Srikakulam",
  },
  {
    label: "Visakhapatnam",
    value: "Visakhapatnam",
  },
  {
    label: "Vizianagaram",
    value: "Vizianagaram",
  },
  {
    label: "West Godavari",
    value: "West Godavari",
  },
  {
    label: "YSR Kadapa",
    value: "YSR Kadapa",
  },
  {
    label: "Tawang",
    value: "Tawang",
  },
  {
    label: "West Kameng",
    value: "West Kameng",
  },
  {
    label: "East Kameng",
    value: "East Kameng",
  },
  {
    label: "Papum Pare",
    value: "Papum Pare",
  },
  {
    label: "Kurung Kumey",
    value: "Kurung Kumey",
  },
  {
    label: "Kra Daadi",
    value: "Kra Daadi",
  },
  {
    label: "Lower Subansiri",
    value: "Lower Subansiri",
  },
  {
    label: "Upper Subansiri",
    value: "Upper Subansiri",
  },
  {
    label: "West Siang",
    value: "West Siang",
  },
  {
    label: "East Siang",
    value: "East Siang",
  },
  {
    label: "Siang",
    value: "Siang",
  },
  {
    label: "Upper Siang",
    value: "Upper Siang",
  },
  {
    label: "Lower Siang",
    value: "Lower Siang",
  },
  {
    label: "Lower Dibang Valley",
    value: "Lower Dibang Valley",
  },
  {
    label: "Dibang Valley",
    value: "Dibang Valley",
  },
  {
    label: "Anjaw",
    value: "Anjaw",
  },
  {
    label: "Lohit",
    value: "Lohit",
  },
  {
    label: "Namsai",
    value: "Namsai",
  },
  {
    label: "Changlang",
    value: "Changlang",
  },
  {
    label: "Tirap",
    value: "Tirap",
  },
  {
    label: "Longding",
    value: "Longding",
  },
  {
    label: "Baksa",
    value: "Baksa",
  },
  {
    label: "Barpeta",
    value: "Barpeta",
  },
  {
    label: "Biswanath",
    value: "Biswanath",
  },
  {
    label: "Bongaigaon",
    value: "Bongaigaon",
  },
  {
    label: "Cachar",
    value: "Cachar",
  },
  {
    label: "Charaideo",
    value: "Charaideo",
  },
  {
    label: "Chirang",
    value: "Chirang",
  },
  {
    label: "Darrang",
    value: "Darrang",
  },
  {
    label: "Dhemaji",
    value: "Dhemaji",
  },
  {
    label: "Dhubri",
    value: "Dhubri",
  },
  {
    label: "Dibrugarh",
    value: "Dibrugarh",
  },
  {
    label: "Goalpara",
    value: "Goalpara",
  },
  {
    label: "Golaghat",
    value: "Golaghat",
  },
  {
    label: "Hailakandi",
    value: "Hailakandi",
  },
  {
    label: "Hojai",
    value: "Hojai",
  },
  {
    label: "Jorhat",
    value: "Jorhat",
  },
  {
    label: "Kamrup Metropolitan",
    value: "Kamrup Metropolitan",
  },
  {
    label: "Kamrup",
    value: "Kamrup",
  },
  {
    label: "Karbi Anglong",
    value: "Karbi Anglong",
  },
  {
    label: "Karimganj",
    value: "Karimganj",
  },
  {
    label: "Kokrajhar",
    value: "Kokrajhar",
  },
  {
    label: "Lakhimpur",
    value: "Lakhimpur",
  },
  {
    label: "Majuli",
    value: "Majuli",
  },
  {
    label: "Morigaon",
    value: "Morigaon",
  },
  {
    label: "Nagaon",
    value: "Nagaon",
  },
  {
    label: "Nalbari",
    value: "Nalbari",
  },
  {
    label: "Dima Hasao",
    value: "Dima Hasao",
  },
  {
    label: "Sivasagar",
    value: "Sivasagar",
  },
  {
    label: "Sonitpur",
    value: "Sonitpur",
  },
  {
    label: "South Salmara-Mankachar",
    value: "South Salmara-Mankachar",
  },
  {
    label: "Tinsukia",
    value: "Tinsukia",
  },
  {
    label: "Udalguri",
    value: "Udalguri",
  },
  {
    label: "West Karbi Anglong",
    value: "West Karbi Anglong",
  },
  {
    label: "Araria",
    value: "Araria",
  },
  {
    label: "Arwal",
    value: "Arwal",
  },
  {
    label: "Aurangabad",
    value: "Aurangabad",
  },
  {
    label: "Banka",
    value: "Banka",
  },
  {
    label: "Begusarai",
    value: "Begusarai",
  },
  {
    label: "Bhagalpur",
    value: "Bhagalpur",
  },
  {
    label: "Bhojpur",
    value: "Bhojpur",
  },
  {
    label: "Buxar",
    value: "Buxar",
  },
  {
    label: "Darbhanga",
    value: "Darbhanga",
  },
  {
    label: "East Champaran (Motihari)",
    value: "East Champaran (Motihari)",
  },
  {
    label: "Gaya",
    value: "Gaya",
  },
  {
    label: "Gopalganj",
    value: "Gopalganj",
  },
  {
    label: "Jamui",
    value: "Jamui",
  },
  {
    label: "Jehanabad",
    value: "Jehanabad",
  },
  {
    label: "Kaimur (Bhabua)",
    value: "Kaimur (Bhabua)",
  },
  {
    label: "Katihar",
    value: "Katihar",
  },
  {
    label: "Khagaria",
    value: "Khagaria",
  },
  {
    label: "Kishanganj",
    value: "Kishanganj",
  },
  {
    label: "Lakhisarai",
    value: "Lakhisarai",
  },
  {
    label: "Madhepura",
    value: "Madhepura",
  },
  {
    label: "Madhubani",
    value: "Madhubani",
  },
  {
    label: "Munger (Monghyr)",
    value: "Munger (Monghyr)",
  },
  {
    label: "Muzaffarpur",
    value: "Muzaffarpur",
  },
  {
    label: "Nalanda",
    value: "Nalanda",
  },
  {
    label: "Nawada",
    value: "Nawada",
  },
  {
    label: "Patna",
    value: "Patna",
  },
  {
    label: "Purnia (Purnea)",
    value: "Purnia (Purnea)",
  },
  {
    label: "Rohtas",
    value: "Rohtas",
  },
  {
    label: "Saharsa",
    value: "Saharsa",
  },
  {
    label: "Samastipur",
    value: "Samastipur",
  },
  {
    label: "Saran",
    value: "Saran",
  },
  {
    label: "Sheikhpura",
    value: "Sheikhpura",
  },
  {
    label: "Sheohar",
    value: "Sheohar",
  },
  {
    label: "Sitamarhi",
    value: "Sitamarhi",
  },
  {
    label: "Siwan",
    value: "Siwan",
  },
  {
    label: "Supaul",
    value: "Supaul",
  },
  {
    label: "Vaishali",
    value: "Vaishali",
  },
  {
    label: "West Champaran",
    value: "West Champaran",
  },
  {
    label: "Chandigarh",
    value: "Chandigarh",
  },
  {
    label: "Balod",
    value: "Balod",
  },
  {
    label: "Baloda Bazar",
    value: "Baloda Bazar",
  },
  {
    label: "Balrampur",
    value: "Balrampur",
  },
  {
    label: "Bastar",
    value: "Bastar",
  },
  {
    label: "Bemetara",
    value: "Bemetara",
  },
  {
    label: "Bijapur",
    value: "Bijapur",
  },
  {
    label: "Bilaspur",
    value: "Bilaspur",
  },
  {
    label: "Dantewada (South Bastar)",
    value: "Dantewada (South Bastar)",
  },
  {
    label: "Dhamtari",
    value: "Dhamtari",
  },
  {
    label: "Durg",
    value: "Durg",
  },
  {
    label: "Gariyaband",
    value: "Gariyaband",
  },
  {
    label: "Janjgir-Champa",
    value: "Janjgir-Champa",
  },
  {
    label: "Jashpur",
    value: "Jashpur",
  },
  {
    label: "Kabirdham (Kawardha)",
    value: "Kabirdham (Kawardha)",
  },
  {
    label: "Kanker (North Bastar)",
    value: "Kanker (North Bastar)",
  },
  {
    label: "Kondagaon",
    value: "Kondagaon",
  },
  {
    label: "Korba",
    value: "Korba",
  },
  {
    label: "Korea (Koriya)",
    value: "Korea (Koriya)",
  },
  {
    label: "Mahasamund",
    value: "Mahasamund",
  },
  {
    label: "Mungeli",
    value: "Mungeli",
  },
  {
    label: "Narayanpur",
    value: "Narayanpur",
  },
  {
    label: "Raigarh",
    value: "Raigarh",
  },
  {
    label: "Raipur",
    value: "Raipur",
  },
  {
    label: "Rajnandgaon",
    value: "Rajnandgaon",
  },
  {
    label: "Sukma",
    value: "Sukma",
  },
  {
    label: "Surajpur  ",
    value: "Surajpur  ",
  },
  {
    label: "Surguja",
    value: "Surguja",
  },
  {
    label: "Dadra & Nagar Haveli",
    value: "Dadra & Nagar Haveli",
  },
  {
    label: "Daman",
    value: "Daman",
  },
  {
    label: "Diu",
    value: "Diu",
  },
  {
    label: "Central Delhi",
    value: "Central Delhi",
  },
  {
    label: "East Delhi",
    value: "East Delhi",
  },
  {
    label: "New Delhi",
    value: "New Delhi",
  },
  {
    label: "North Delhi",
    value: "North Delhi",
  },
  {
    label: "North East  Delhi",
    value: "North East  Delhi",
  },
  {
    label: "North West  Delhi",
    value: "North West  Delhi",
  },
  {
    label: "Shahdara",
    value: "Shahdara",
  },
  {
    label: "South Delhi",
    value: "South Delhi",
  },
  {
    label: "South East Delhi",
    value: "South East Delhi",
  },
  {
    label: "South West  Delhi",
    value: "South West  Delhi",
  },
  {
    label: "West Delhi",
    value: "West Delhi",
  },
  {
    label: "North Goa",
    value: "North Goa",
  },
  {
    label: "South Goa",
    value: "South Goa",
  },
  {
    label: "Ahmedabad",
    value: "Ahmedabad",
  },
  {
    label: "Amreli",
    value: "Amreli",
  },
  {
    label: "Anand",
    value: "Anand",
  },
  {
    label: "Aravalli",
    value: "Aravalli",
  },
  {
    label: "Banaskantha (Palanpur)",
    value: "Banaskantha (Palanpur)",
  },
  {
    label: "Bharuch",
    value: "Bharuch",
  },
  {
    label: "Bhavnagar",
    value: "Bhavnagar",
  },
  {
    label: "Botad",
    value: "Botad",
  },
  {
    label: "Chhota Udepur",
    value: "Chhota Udepur",
  },
  {
    label: "Dahod",
    value: "Dahod",
  },
  {
    label: "Dangs (Ahwa)",
    value: "Dangs (Ahwa)",
  },
  {
    label: "Devbhoomi Dwarka",
    value: "Devbhoomi Dwarka",
  },
  {
    label: "Gandhinagar",
    value: "Gandhinagar",
  },
  {
    label: "Gir Somnath",
    value: "Gir Somnath",
  },
  {
    label: "Jamnagar",
    value: "Jamnagar",
  },
  {
    label: "Junagadh",
    value: "Junagadh",
  },
  {
    label: "Kachchh",
    value: "Kachchh",
  },
  {
    label: "Kheda (Nadiad)",
    value: "Kheda (Nadiad)",
  },
  {
    label: "Mahisagar",
    value: "Mahisagar",
  },
  {
    label: "Mehsana",
    value: "Mehsana",
  },
  {
    label: "Morbi",
    value: "Morbi",
  },
  {
    label: "Narmada (Rajpipla)",
    value: "Narmada (Rajpipla)",
  },
  {
    label: "Navsari",
    value: "Navsari",
  },
  {
    label: "Panchmahal (Godhra)",
    value: "Panchmahal (Godhra)",
  },
  {
    label: "Patan",
    value: "Patan",
  },
  {
    label: "Porbandar",
    value: "Porbandar",
  },
  {
    label: "Rajkot",
    value: "Rajkot",
  },
  {
    label: "Sabarkantha (Himmatnagar)",
    value: "Sabarkantha (Himmatnagar)",
  },
  {
    label: "Surat",
    value: "Surat",
  },
  {
    label: "Surendranagar",
    value: "Surendranagar",
  },
  {
    label: "Tapi (Vyara)",
    value: "Tapi (Vyara)",
  },
  {
    label: "Vadodara",
    value: "Vadodara",
  },
  {
    label: "Valsad",
    value: "Valsad",
  },
  {
    label: "Ambala",
    value: "Ambala",
  },
  {
    label: "Bhiwani",
    value: "Bhiwani",
  },
  {
    label: "Charkhi Dadri",
    value: "Charkhi Dadri",
  },
  {
    label: "Faridabad",
    value: "Faridabad",
  },
  {
    label: "Fatehabad",
    value: "Fatehabad",
  },
  {
    label: "Gurgaon",
    value: "Gurgaon",
  },
  {
    label: "Hisar",
    value: "Hisar",
  },
  {
    label: "Jhajjar",
    value: "Jhajjar",
  },
  {
    label: "Jind",
    value: "Jind",
  },
  {
    label: "Kaithal",
    value: "Kaithal",
  },
  {
    label: "Karnal",
    value: "Karnal",
  },
  {
    label: "Kurukshetra",
    value: "Kurukshetra",
  },
  {
    label: "Mahendragarh",
    value: "Mahendragarh",
  },
  {
    label: "Mewat",
    value: "Mewat",
  },
  {
    label: "Palwal",
    value: "Palwal",
  },
  {
    label: "Panchkula",
    value: "Panchkula",
  },
  {
    label: "Panipat",
    value: "Panipat",
  },
  {
    label: "Rewari",
    value: "Rewari",
  },
  {
    label: "Rohtak",
    value: "Rohtak",
  },
  {
    label: "Sirsa",
    value: "Sirsa",
  },
  {
    label: "Sonipat",
    value: "Sonipat",
  },
  {
    label: "Yamunanagar",
    value: "Yamunanagar",
  },
  {
    label: "Bilaspur",
    value: "Bilaspur",
  },
  {
    label: "Chamba",
    value: "Chamba",
  },
  {
    label: "Hamirpur",
    value: "Hamirpur",
  },
  {
    label: "Kangra",
    value: "Kangra",
  },
  {
    label: "Kinnaur",
    value: "Kinnaur",
  },
  {
    label: "Kullu",
    value: "Kullu",
  },
  {
    label: "Lahaul &amp; Spiti",
    value: "Lahaul &amp; Spiti",
  },
  {
    label: "Mandi",
    value: "Mandi",
  },
  {
    label: "Shimla",
    value: "Shimla",
  },
  {
    label: "Sirmaur (Sirmour)",
    value: "Sirmaur (Sirmour)",
  },
  {
    label: "Solan",
    value: "Solan",
  },
  {
    label: "Una",
    value: "Una",
  },
  {
    label: "Anantnag",
    value: "Anantnag",
  },
  {
    label: "Bandipore",
    value: "Bandipore",
  },
  {
    label: "Baramulla",
    value: "Baramulla",
  },
  {
    label: "Budgam",
    value: "Budgam",
  },
  {
    label: "Doda",
    value: "Doda",
  },
  {
    label: "Ganderbal",
    value: "Ganderbal",
  },
  {
    label: "Jammu",
    value: "Jammu",
  },
  {
    label: "Kargil",
    value: "Kargil",
  },
  {
    label: "Kathua",
    value: "Kathua",
  },
  {
    label: "Kishtwar",
    value: "Kishtwar",
  },
  {
    label: "Kulgam",
    value: "Kulgam",
  },
  {
    label: "Kupwara",
    value: "Kupwara",
  },
  {
    label: "Leh",
    value: "Leh",
  },
  {
    label: "Poonch",
    value: "Poonch",
  },
  {
    label: "Pulwama",
    value: "Pulwama",
  },
  {
    label: "Rajouri",
    value: "Rajouri",
  },
  {
    label: "Ramban",
    value: "Ramban",
  },
  {
    label: "Reasi",
    value: "Reasi",
  },
  {
    label: "Samba",
    value: "Samba",
  },
  {
    label: "Shopian",
    value: "Shopian",
  },
  {
    label: "Srinagar",
    value: "Srinagar",
  },
  {
    label: "Udhampur",
    value: "Udhampur",
  },
  {
    label: "Bokaro",
    value: "Bokaro",
  },
  {
    label: "Chatra",
    value: "Chatra",
  },
  {
    label: "Deoghar",
    value: "Deoghar",
  },
  {
    label: "Dhanbad",
    value: "Dhanbad",
  },
  {
    label: "Dumka",
    value: "Dumka",
  },
  {
    label: "East Singhbhum",
    value: "East Singhbhum",
  },
  {
    label: "Garhwa",
    value: "Garhwa",
  },
  {
    label: "Giridih",
    value: "Giridih",
  },
  {
    label: "Godda",
    value: "Godda",
  },
  {
    label: "Gumla",
    value: "Gumla",
  },
  {
    label: "Hazaribag",
    value: "Hazaribag",
  },
  {
    label: "Jamtara",
    value: "Jamtara",
  },
  {
    label: "Khunti",
    value: "Khunti",
  },
  {
    label: "Koderma",
    value: "Koderma",
  },
  {
    label: "Latehar",
    value: "Latehar",
  },
  {
    label: "Lohardaga",
    value: "Lohardaga",
  },
  {
    label: "Pakur",
    value: "Pakur",
  },
  {
    label: "Palamu",
    value: "Palamu",
  },
  {
    label: "Ramgarh",
    value: "Ramgarh",
  },
  {
    label: "Ranchi",
    value: "Ranchi",
  },
  {
    label: "Sahibganj",
    value: "Sahibganj",
  },
  {
    label: "Seraikela-Kharsawan",
    value: "Seraikela-Kharsawan",
  },
  {
    label: "Simdega",
    value: "Simdega",
  },
  {
    label: "West Singhbhum",
    value: "West Singhbhum",
  },
  {
    label: "Bagalkot",
    value: "Bagalkot",
  },
  {
    label: "Ballari (Bellary)",
    value: "Ballari (Bellary)",
  },
  {
    label: "Belagavi (Belgaum)",
    value: "Belagavi (Belgaum)",
  },
  {
    label: "Bengaluru (Bangalore) Rural",
    value: "Bengaluru (Bangalore) Rural",
  },
  {
    label: "Bengaluru (Bangalore) Urban",
    value: "Bengaluru (Bangalore) Urban",
  },
  {
    label: "Bidar",
    value: "Bidar",
  },
  {
    label: "Chamarajanagar",
    value: "Chamarajanagar",
  },
  {
    label: "Chikballapur",
    value: "Chikballapur",
  },
  {
    label: "Chikkamagaluru (Chikmagalur)",
    value: "Chikkamagaluru (Chikmagalur)",
  },
  {
    label: "Chitradurga",
    value: "Chitradurga",
  },
  {
    label: "Dakshina Kannada",
    value: "Dakshina Kannada",
  },
  {
    label: "Davangere",
    value: "Davangere",
  },
  {
    label: "Dharwad",
    value: "Dharwad",
  },
  {
    label: "Gadag",
    value: "Gadag",
  },
  {
    label: "Hassan",
    value: "Hassan",
  },
  {
    label: "Haveri",
    value: "Haveri",
  },
  {
    label: "Kalaburagi (Gulbarga)",
    value: "Kalaburagi (Gulbarga)",
  },
  {
    label: "Kodagu",
    value: "Kodagu",
  },
  {
    label: "Kolar",
    value: "Kolar",
  },
  {
    label: "Koppal",
    value: "Koppal",
  },
  {
    label: "Mandya",
    value: "Mandya",
  },
  {
    label: "Mysuru (Mysore)",
    value: "Mysuru (Mysore)",
  },
  {
    label: "Raichur",
    value: "Raichur",
  },
  {
    label: "Ramanagara",
    value: "Ramanagara",
  },
  {
    label: "Shivamogga (Shimoga)",
    value: "Shivamogga (Shimoga)",
  },
  {
    label: "Tumakuru (Tumkur)",
    value: "Tumakuru (Tumkur)",
  },
  {
    label: "Udupi",
    value: "Udupi",
  },
  {
    label: "Uttara Kannada (Karwar)",
    value: "Uttara Kannada (Karwar)",
  },
  {
    label: "Vijayapura (Bijapur)",
    value: "Vijayapura (Bijapur)",
  },
  {
    label: "Yadgir",
    value: "Yadgir",
  },
  {
    label: "Alappuzha",
    value: "Alappuzha",
  },
  {
    label: "Ernakulam",
    value: "Ernakulam",
  },
  {
    label: "Idukki",
    value: "Idukki",
  },
  {
    label: "Kannur",
    value: "Kannur",
  },
  {
    label: "Kasaragod",
    value: "Kasaragod",
  },
  {
    label: "Kollam",
    value: "Kollam",
  },
  {
    label: "Kottayam",
    value: "Kottayam",
  },
  {
    label: "Kozhikode",
    value: "Kozhikode",
  },
  {
    label: "Malappuram",
    value: "Malappuram",
  },
  {
    label: "Palakkad",
    value: "Palakkad",
  },
  {
    label: "Pathanamthitta",
    value: "Pathanamthitta",
  },
  {
    label: "Thiruvananthapuram",
    value: "Thiruvananthapuram",
  },
  {
    label: "Thrissur",
    value: "Thrissur",
  },
  {
    label: "Wayanad",
    value: "Wayanad",
  },
  {
    label: "Agatti",
    value: "Agatti",
  },
  {
    label: "Amini",
    value: "Amini",
  },
  {
    label: "Androth",
    value: "Androth",
  },
  {
    label: "Bithra",
    value: "Bithra",
  },
  {
    label: "Chethlath",
    value: "Chethlath",
  },
  {
    label: "Kavaratti",
    value: "Kavaratti",
  },
  {
    label: "Kadmath",
    value: "Kadmath",
  },
  {
    label: "Kalpeni",
    value: "Kalpeni",
  },
  {
    label: "Kilthan",
    value: "Kilthan",
  },
  {
    label: "Minicoy",
    value: "Minicoy",
  },
  {
    label: "Agar Malwa",
    value: "Agar Malwa",
  },
  {
    label: "Alirajpur",
    value: "Alirajpur",
  },
  {
    label: "Anuppur",
    value: "Anuppur",
  },
  {
    label: "Ashoknagar",
    value: "Ashoknagar",
  },
  {
    label: "Balaghat",
    value: "Balaghat",
  },
  {
    label: "Barwani",
    value: "Barwani",
  },
  {
    label: "Betul",
    value: "Betul",
  },
  {
    label: "Bhind",
    value: "Bhind",
  },
  {
    label: "Bhopal",
    value: "Bhopal",
  },
  {
    label: "Burhanpur",
    value: "Burhanpur",
  },
  {
    label: "Chhatarpur",
    value: "Chhatarpur",
  },
  {
    label: "Chhindwara",
    value: "Chhindwara",
  },
  {
    label: "Damoh",
    value: "Damoh",
  },
  {
    label: "Datia",
    value: "Datia",
  },
  {
    label: "Dewas",
    value: "Dewas",
  },
  {
    label: "Dhar",
    value: "Dhar",
  },
  {
    label: "Dindori",
    value: "Dindori",
  },
  {
    label: "Guna",
    value: "Guna",
  },
  {
    label: "Gwalior",
    value: "Gwalior",
  },
  {
    label: "Harda",
    value: "Harda",
  },
  {
    label: "Hoshangabad",
    value: "Hoshangabad",
  },
  {
    label: "Indore",
    value: "Indore",
  },
  {
    label: "Jabalpur",
    value: "Jabalpur",
  },
  {
    label: "Jhabua",
    value: "Jhabua",
  },
  {
    label: "Katni",
    value: "Katni",
  },
  {
    label: "Khandwa",
    value: "Khandwa",
  },
  {
    label: "Khargone",
    value: "Khargone",
  },
  {
    label: "Mandla",
    value: "Mandla",
  },
  {
    label: "Mandsaur",
    value: "Mandsaur",
  },
  {
    label: "Morena",
    value: "Morena",
  },
  {
    label: "Narsinghpur",
    value: "Narsinghpur",
  },
  {
    label: "Neemuch",
    value: "Neemuch",
  },
  {
    label: "Panna",
    value: "Panna",
  },
  {
    label: "Raisen",
    value: "Raisen",
  },
  {
    label: "Rajgarh",
    value: "Rajgarh",
  },
  {
    label: "Ratlam",
    value: "Ratlam",
  },
  {
    label: "Rewa",
    value: "Rewa",
  },
  {
    label: "Sagar",
    value: "Sagar",
  },
  {
    label: "Satna",
    value: "Satna",
  },
  {
    label: "Sehore",
    value: "Sehore",
  },
  {
    label: "Seoni",
    value: "Seoni",
  },
  {
    label: "Shahdol",
    value: "Shahdol",
  },
  {
    label: "Shajapur",
    value: "Shajapur",
  },
  {
    label: "Sheopur",
    value: "Sheopur",
  },
  {
    label: "Shivpuri",
    value: "Shivpuri",
  },
  {
    label: "Sidhi",
    value: "Sidhi",
  },
  {
    label: "Singrauli",
    value: "Singrauli",
  },
  {
    label: "Tikamgarh",
    value: "Tikamgarh",
  },
  {
    label: "Ujjain",
    value: "Ujjain",
  },
  {
    label: "Umaria",
    value: "Umaria",
  },
  {
    label: "Vidisha",
    value: "Vidisha",
  },
  {
    label: "Ahmednagar",
    value: "Ahmednagar",
  },
  {
    label: "Akola",
    value: "Akola",
  },
  {
    label: "Amravati",
    value: "Amravati",
  },
  {
    label: "Aurangabad",
    value: "Aurangabad",
  },
  {
    label: "Beed",
    value: "Beed",
  },
  {
    label: "Bhandara",
    value: "Bhandara",
  },
  {
    label: "Buldhana",
    value: "Buldhana",
  },
  {
    label: "Chandrapur",
    value: "Chandrapur",
  },
  {
    label: "Dhule",
    value: "Dhule",
  },
  {
    label: "Gadchiroli",
    value: "Gadchiroli",
  },
  {
    label: "Gondia",
    value: "Gondia",
  },
  {
    label: "Hingoli",
    value: "Hingoli",
  },
  {
    label: "Jalgaon",
    value: "Jalgaon",
  },
  {
    label: "Jalna",
    value: "Jalna",
  },
  {
    label: "Kolhapur",
    value: "Kolhapur",
  },
  {
    label: "Latur",
    value: "Latur",
  },
  {
    label: "Mumbai City",
    value: "Mumbai City",
  },
  {
    label: "Mumbai Suburban",
    value: "Mumbai Suburban",
  },
  {
    label: "Nagpur",
    value: "Nagpur",
  },
  {
    label: "Nanded",
    value: "Nanded",
  },
  {
    label: "Nandurbar",
    value: "Nandurbar",
  },
  {
    label: "Nashik",
    value: "Nashik",
  },
  {
    label: "Osmanabad",
    value: "Osmanabad",
  },
  {
    label: "Palghar",
    value: "Palghar",
  },
  {
    label: "Parbhani",
    value: "Parbhani",
  },
  {
    label: "Pune",
    value: "Pune",
  },
  {
    label: "Raigad",
    value: "Raigad",
  },
  {
    label: "Ratnagiri",
    value: "Ratnagiri",
  },
  {
    label: "Sangli",
    value: "Sangli",
  },
  {
    label: "Satara",
    value: "Satara",
  },
  {
    label: "Sindhudurg",
    value: "Sindhudurg",
  },
  {
    label: "Solapur",
    value: "Solapur",
  },
  {
    label: "Thane",
    value: "Thane",
  },
  {
    label: "Wardha",
    value: "Wardha",
  },
  {
    label: "Washim",
    value: "Washim",
  },
  {
    label: "Yavatmal",
    value: "Yavatmal",
  },
  {
    label: "Bishnupur",
    value: "Bishnupur",
  },
  {
    label: "Chandel",
    value: "Chandel",
  },
  {
    label: "Churachandpur",
    value: "Churachandpur",
  },
  {
    label: "Imphal East",
    value: "Imphal East",
  },
  {
    label: "Imphal West",
    value: "Imphal West",
  },
  {
    label: "Jiribam",
    value: "Jiribam",
  },
  {
    label: "Kakching",
    value: "Kakching",
  },
  {
    label: "Kamjong",
    value: "Kamjong",
  },
  {
    label: "Kangpokpi",
    value: "Kangpokpi",
  },
  {
    label: "Noney",
    value: "Noney",
  },
  {
    label: "Pherzawl",
    value: "Pherzawl",
  },
  {
    label: "Senapati",
    value: "Senapati",
  },
  {
    label: "Tamenglong",
    value: "Tamenglong",
  },
  {
    label: "Tengnoupal",
    value: "Tengnoupal",
  },
  {
    label: "Thoubal",
    value: "Thoubal",
  },
  {
    label: "Ukhrul",
    value: "Ukhrul",
  },
  {
    label: "East Garo Hills",
    value: "East Garo Hills",
  },
  {
    label: "East Jaintia Hills",
    value: "East Jaintia Hills",
  },
  {
    label: "East Khasi Hills",
    value: "East Khasi Hills",
  },
  {
    label: "North Garo Hills",
    value: "North Garo Hills",
  },
  {
    label: "Ri Bhoi",
    value: "Ri Bhoi",
  },
  {
    label: "South Garo Hills",
    value: "South Garo Hills",
  },
  {
    label: "South West Garo Hills ",
    value: "South West Garo Hills ",
  },
  {
    label: "South West Khasi Hills",
    value: "South West Khasi Hills",
  },
  {
    label: "West Garo Hills",
    value: "West Garo Hills",
  },
  {
    label: "West Jaintia Hills",
    value: "West Jaintia Hills",
  },
  {
    label: "West Khasi Hills",
    value: "West Khasi Hills",
  },
  {
    label: "Aizawl",
    value: "Aizawl",
  },
  {
    label: "Champhai",
    value: "Champhai",
  },
  {
    label: "Kolasib",
    value: "Kolasib",
  },
  {
    label: "Lawngtlai",
    value: "Lawngtlai",
  },
  {
    label: "Lunglei",
    value: "Lunglei",
  },
  {
    label: "Mamit",
    value: "Mamit",
  },
  {
    label: "Saiha",
    value: "Saiha",
  },
  {
    label: "Serchhip",
    value: "Serchhip",
  },
  {
    label: "Dimapur",
    value: "Dimapur",
  },
  {
    label: "Kiphire",
    value: "Kiphire",
  },
  {
    label: "Kohima",
    value: "Kohima",
  },
  {
    label: "Longleng",
    value: "Longleng",
  },
  {
    label: "Mokokchung",
    value: "Mokokchung",
  },
  {
    label: "Mon",
    value: "Mon",
  },
  {
    label: "Peren",
    value: "Peren",
  },
  {
    label: "Phek",
    value: "Phek",
  },
  {
    label: "Tuensang",
    value: "Tuensang",
  },
  {
    label: "Wokha",
    value: "Wokha",
  },
  {
    label: "Zunheboto",
    value: "Zunheboto",
  },
  {
    label: "Angul",
    value: "Angul",
  },
  {
    label: "Balangir",
    value: "Balangir",
  },
  {
    label: "Balasore",
    value: "Balasore",
  },
  {
    label: "Bargarh",
    value: "Bargarh",
  },
  {
    label: "Bhadrak",
    value: "Bhadrak",
  },
  {
    label: "Boudh",
    value: "Boudh",
  },
  {
    label: "Cuttack",
    value: "Cuttack",
  },
  {
    label: "Deogarh",
    value: "Deogarh",
  },
  {
    label: "Dhenkanal",
    value: "Dhenkanal",
  },
  {
    label: "Gajapati",
    value: "Gajapati",
  },
  {
    label: "Ganjam",
    value: "Ganjam",
  },
  {
    label: "Jagatsinghapur",
    value: "Jagatsinghapur",
  },
  {
    label: "Jajpur",
    value: "Jajpur",
  },
  {
    label: "Jharsuguda",
    value: "Jharsuguda",
  },
  {
    label: "Kalahandi",
    value: "Kalahandi",
  },
  {
    label: "Kandhamal",
    value: "Kandhamal",
  },
  {
    label: "Kendrapara",
    value: "Kendrapara",
  },
  {
    label: "Kendujhar (Keonjhar)",
    value: "Kendujhar (Keonjhar)",
  },
  {
    label: "Khordha",
    value: "Khordha",
  },
  {
    label: "Koraput",
    value: "Koraput",
  },
  {
    label: "Malkangiri",
    value: "Malkangiri",
  },
  {
    label: "Mayurbhanj",
    value: "Mayurbhanj",
  },
  {
    label: "Nabarangpur",
    value: "Nabarangpur",
  },
  {
    label: "Nayagarh",
    value: "Nayagarh",
  },
  {
    label: "Nuapada",
    value: "Nuapada",
  },
  {
    label: "Puri",
    value: "Puri",
  },
  {
    label: "Rayagada",
    value: "Rayagada",
  },
  {
    label: "Sambalpur",
    value: "Sambalpur",
  },
  {
    label: "Sonepur",
    value: "Sonepur",
  },
  {
    label: "Sundargarh",
    value: "Sundargarh",
  },
  {
    label: "Karaikal",
    value: "Karaikal",
  },
  {
    label: "Mahe",
    value: "Mahe",
  },
  {
    label: "Pondicherry",
    value: "Pondicherry",
  },
  {
    label: "Yanam",
    value: "Yanam",
  },
  {
    label: "Amritsar",
    value: "Amritsar",
  },
  {
    label: "Barnala",
    value: "Barnala",
  },
  {
    label: "Bathinda",
    value: "Bathinda",
  },
  {
    label: "Faridkot",
    value: "Faridkot",
  },
  {
    label: "Fatehgarh Sahib",
    value: "Fatehgarh Sahib",
  },
  {
    label: "Fazilka",
    value: "Fazilka",
  },
  {
    label: "Ferozepur",
    value: "Ferozepur",
  },
  {
    label: "Gurdaspur",
    value: "Gurdaspur",
  },
  {
    label: "Hoshiarpur",
    value: "Hoshiarpur",
  },
  {
    label: "Jalandhar",
    value: "Jalandhar",
  },
  {
    label: "Kapurthala",
    value: "Kapurthala",
  },
  {
    label: "Ludhiana",
    value: "Ludhiana",
  },
  {
    label: "Mansa",
    value: "Mansa",
  },
  {
    label: "Moga",
    value: "Moga",
  },
  {
    label: "Muktsar",
    value: "Muktsar",
  },
  {
    label: "Nawanshahr (Shahid Bhagat Singh Nagar)",
    value: "Nawanshahr (Shahid Bhagat Singh Nagar)",
  },
  {
    label: "Pathankot",
    value: "Pathankot",
  },
  {
    label: "Patiala",
    value: "Patiala",
  },
  {
    label: "Rupnagar",
    value: "Rupnagar",
  },
  {
    label: "Sahibzada Ajit Singh Nagar (Mohali)",
    value: "Sahibzada Ajit Singh Nagar (Mohali)",
  },
  {
    label: "Sangrur",
    value: "Sangrur",
  },
  {
    label: "Tarn Taran",
    value: "Tarn Taran",
  },
  {
    label: "Ajmer",
    value: "Ajmer",
  },
  {
    label: "Alwar",
    value: "Alwar",
  },
  {
    label: "Banswara",
    value: "Banswara",
  },
  {
    label: "Baran",
    value: "Baran",
  },
  {
    label: "Barmer",
    value: "Barmer",
  },
  {
    label: "Bharatpur",
    value: "Bharatpur",
  },
  {
    label: "Bhilwara",
    value: "Bhilwara",
  },
  {
    label: "Bikaner",
    value: "Bikaner",
  },
  {
    label: "Bundi",
    value: "Bundi",
  },
  {
    label: "Chittorgarh",
    value: "Chittorgarh",
  },
  {
    label: "Churu",
    value: "Churu",
  },
  {
    label: "Dausa",
    value: "Dausa",
  },
  {
    label: "Dholpur",
    value: "Dholpur",
  },
  {
    label: "Dungarpur",
    value: "Dungarpur",
  },
  {
    label: "Hanumangarh",
    value: "Hanumangarh",
  },
  {
    label: "Jaipur",
    value: "Jaipur",
  },
  {
    label: "Jaisalmer",
    value: "Jaisalmer",
  },
  {
    label: "Jalore",
    value: "Jalore",
  },
  {
    label: "Jhalawar",
    value: "Jhalawar",
  },
  {
    label: "Jhunjhunu",
    value: "Jhunjhunu",
  },
  {
    label: "Jodhpur",
    value: "Jodhpur",
  },
  {
    label: "Karauli",
    value: "Karauli",
  },
  {
    label: "Kota",
    value: "Kota",
  },
  {
    label: "Nagaur",
    value: "Nagaur",
  },
  {
    label: "Pali",
    value: "Pali",
  },
  {
    label: "Pratapgarh",
    value: "Pratapgarh",
  },
  {
    label: "Rajsamand",
    value: "Rajsamand",
  },
  {
    label: "Sawai Madhopur",
    value: "Sawai Madhopur",
  },
  {
    label: "Sikar",
    value: "Sikar",
  },
  {
    label: "Sirohi",
    value: "Sirohi",
  },
  {
    label: "Sri Ganganagar",
    value: "Sri Ganganagar",
  },
  {
    label: "Tonk",
    value: "Tonk",
  },
  {
    label: "Udaipur",
    value: "Udaipur",
  },
  {
    label: "East Sikkim",
    value: "East Sikkim",
  },
  {
    label: "North Sikkim",
    value: "North Sikkim",
  },
  {
    label: "South Sikkim",
    value: "South Sikkim",
  },
  {
    label: "West Sikkim",
    value: "West Sikkim",
  },
  {
    label: "Ariyalur",
    value: "Ariyalur",
  },
  {
    label: "Chennai",
    value: "Chennai",
  },
  {
    label: "Coimbatore",
    value: "Coimbatore",
  },
  {
    label: "Cuddalore",
    value: "Cuddalore",
  },
  {
    label: "Dharmapuri",
    value: "Dharmapuri",
  },
  {
    label: "Dindigul",
    value: "Dindigul",
  },
  {
    label: "Erode",
    value: "Erode",
  },
  {
    label: "Kanchipuram",
    value: "Kanchipuram",
  },
  {
    label: "Kanyakumari",
    value: "Kanyakumari",
  },
  {
    label: "Karur",
    value: "Karur",
  },
  {
    label: "Krishnagiri",
    value: "Krishnagiri",
  },
  {
    label: "Madurai",
    value: "Madurai",
  },
  {
    label: "Nagapattinam",
    value: "Nagapattinam",
  },
  {
    label: "Namakkal",
    value: "Namakkal",
  },
  {
    label: "Nilgiris",
    value: "Nilgiris",
  },
  {
    label: "Perambalur",
    value: "Perambalur",
  },
  {
    label: "Pudukkottai",
    value: "Pudukkottai",
  },
  {
    label: "Ramanathapuram",
    value: "Ramanathapuram",
  },
  {
    label: "Salem",
    value: "Salem",
  },
  {
    label: "Sivaganga",
    value: "Sivaganga",
  },
  {
    label: "Thanjavur",
    value: "Thanjavur",
  },
  {
    label: "Theni",
    value: "Theni",
  },
  {
    label: "Thoothukudi (Tuticorin)",
    value: "Thoothukudi (Tuticorin)",
  },
  {
    label: "Tiruchirappalli",
    value: "Tiruchirappalli",
  },
  {
    label: "Tirunelveli",
    value: "Tirunelveli",
  },
  {
    label: "Tiruppur",
    value: "Tiruppur",
  },
  {
    label: "Tiruvallur",
    value: "Tiruvallur",
  },
  {
    label: "Tiruvannamalai",
    value: "Tiruvannamalai",
  },
  {
    label: "Tiruvarur",
    value: "Tiruvarur",
  },
  {
    label: "Vellore",
    value: "Vellore",
  },
  {
    label: "Viluppuram",
    value: "Viluppuram",
  },
  {
    label: "Virudhunagar",
    value: "Virudhunagar",
  },
  {
    label: "Adilabad",
    value: "Adilabad",
  },
  {
    label: "Bhadradri Kothagudem",
    value: "Bhadradri Kothagudem",
  },
  {
    label: "Hyderabad",
    value: "Hyderabad",
  },
  {
    label: "Jagtial",
    value: "Jagtial",
  },
  {
    label: "Jangaon",
    value: "Jangaon",
  },
  {
    label: "Jayashankar Bhoopalpally",
    value: "Jayashankar Bhoopalpally",
  },
  {
    label: "Jogulamba Gadwal",
    value: "Jogulamba Gadwal",
  },
  {
    label: "Kamareddy",
    value: "Kamareddy",
  },
  {
    label: "Karimnagar",
    value: "Karimnagar",
  },
  {
    label: "Khammam",
    value: "Khammam",
  },
  {
    label: "Komaram Bheem Asifabad",
    value: "Komaram Bheem Asifabad",
  },
  {
    label: "Mahabubabad",
    value: "Mahabubabad",
  },
  {
    label: "Mahabubnagar",
    value: "Mahabubnagar",
  },
  {
    label: "Mancherial",
    value: "Mancherial",
  },
  {
    label: "Medak",
    value: "Medak",
  },
  {
    label: "Medchal",
    value: "Medchal",
  },
  {
    label: "Nagarkurnool",
    value: "Nagarkurnool",
  },
  {
    label: "Nalgonda",
    value: "Nalgonda",
  },
  {
    label: "Nirmal",
    value: "Nirmal",
  },
  {
    label: "Nizamabad",
    value: "Nizamabad",
  },
  {
    label: "Peddapalli",
    value: "Peddapalli",
  },
  {
    label: "Rajanna Sircilla",
    value: "Rajanna Sircilla",
  },
  {
    label: "Rangareddy",
    value: "Rangareddy",
  },
  {
    label: "Sangareddy",
    value: "Sangareddy",
  },
  {
    label: "Siddipet",
    value: "Siddipet",
  },
  {
    label: "Suryapet",
    value: "Suryapet",
  },
  {
    label: "Vikarabad",
    value: "Vikarabad",
  },
  {
    label: "Wanaparthy",
    value: "Wanaparthy",
  },
  {
    label: "Warangal (Rural)",
    value: "Warangal (Rural)",
  },
  {
    label: "Warangal (Urban)",
    value: "Warangal (Urban)",
  },
  {
    label: "Yadadri Bhuvanagiri",
    value: "Yadadri Bhuvanagiri",
  },
  {
    label: "Dhalai",
    value: "Dhalai",
  },
  {
    label: "Gomati",
    value: "Gomati",
  },
  {
    label: "Khowai",
    value: "Khowai",
  },
  {
    label: "North Tripura",
    value: "North Tripura",
  },
  {
    label: "Sepahijala",
    value: "Sepahijala",
  },
  {
    label: "South Tripura",
    value: "South Tripura",
  },
  {
    label: "Unakoti",
    value: "Unakoti",
  },
  {
    label: "West Tripura",
    value: "West Tripura",
  },
  {
    label: "Almora",
    value: "Almora",
  },
  {
    label: "Bageshwar",
    value: "Bageshwar",
  },
  {
    label: "Chamoli",
    value: "Chamoli",
  },
  {
    label: "Champawat",
    value: "Champawat",
  },
  {
    label: "Dehradun",
    value: "Dehradun",
  },
  {
    label: "Haridwar",
    value: "Haridwar",
  },
  {
    label: "Nainital",
    value: "Nainital",
  },
  {
    label: "Pauri Garhwal",
    value: "Pauri Garhwal",
  },
  {
    label: "Pithoragarh",
    value: "Pithoragarh",
  },
  {
    label: "Rudraprayag",
    value: "Rudraprayag",
  },
  {
    label: "Tehri Garhwal",
    value: "Tehri Garhwal",
  },
  {
    label: "Udham Singh Nagar",
    value: "Udham Singh Nagar",
  },
  {
    label: "Uttarkashi",
    value: "Uttarkashi",
  },
  {
    label: "Agra",
    value: "Agra",
  },
  {
    label: "Aligarh",
    value: "Aligarh",
  },
  {
    label: "Allahabad",
    value: "Allahabad",
  },
  {
    label: "Ambedkar Nagar",
    value: "Ambedkar Nagar",
  },
  {
    label: "Amethi (Chatrapati Sahuji Mahraj Nagar)",
    value: "Amethi (Chatrapati Sahuji Mahraj Nagar)",
  },
  {
    label: "Amroha (J.P. Nagar)",
    value: "Amroha (J.P. Nagar)",
  },
  {
    label: "Auraiya",
    value: "Auraiya",
  },
  {
    label: "Azamgarh",
    value: "Azamgarh",
  },
  {
    label: "Baghpat",
    value: "Baghpat",
  },
  {
    label: "Bahraich",
    value: "Bahraich",
  },
  {
    label: "Ballia",
    value: "Ballia",
  },
  {
    label: "Balrampur",
    value: "Balrampur",
  },
  {
    label: "Banda",
    value: "Banda",
  },
  {
    label: "Barabanki",
    value: "Barabanki",
  },
  {
    label: "Bareilly",
    value: "Bareilly",
  },
  {
    label: "Basti",
    value: "Basti",
  },
  {
    label: "Bhadohi",
    value: "Bhadohi",
  },
  {
    label: "Bijnor",
    value: "Bijnor",
  },
  {
    label: "Budaun",
    value: "Budaun",
  },
  {
    label: "Bulandshahr",
    value: "Bulandshahr",
  },
  {
    label: "Chandauli",
    value: "Chandauli",
  },
  {
    label: "Chitrakoot",
    value: "Chitrakoot",
  },
  {
    label: "Deoria",
    value: "Deoria",
  },
  {
    label: "Etah",
    value: "Etah",
  },
  {
    label: "Etawah",
    value: "Etawah",
  },
  {
    label: "Faizabad",
    value: "Faizabad",
  },
  {
    label: "Farrukhabad",
    value: "Farrukhabad",
  },
  {
    label: "Fatehpur",
    value: "Fatehpur",
  },
  {
    label: "Firozabad",
    value: "Firozabad",
  },
  {
    label: "Gautam Buddha Nagar",
    value: "Gautam Buddha Nagar",
  },
  {
    label: "Ghaziabad",
    value: "Ghaziabad",
  },
  {
    label: "Ghazipur",
    value: "Ghazipur",
  },
  {
    label: "Gonda",
    value: "Gonda",
  },
  {
    label: "Gorakhpur",
    value: "Gorakhpur",
  },
  {
    label: "Hamirpur",
    value: "Hamirpur",
  },
  {
    label: "Hapur (Panchsheel Nagar)",
    value: "Hapur (Panchsheel Nagar)",
  },
  {
    label: "Hardoi",
    value: "Hardoi",
  },
  {
    label: "Hathras",
    value: "Hathras",
  },
  {
    label: "Jalaun",
    value: "Jalaun",
  },
  {
    label: "Jaunpur",
    value: "Jaunpur",
  },
  {
    label: "Jhansi",
    value: "Jhansi",
  },
  {
    label: "Kannauj",
    value: "Kannauj",
  },
  {
    label: "Kanpur Dehat",
    value: "Kanpur Dehat",
  },
  {
    label: "Kanpur Nagar",
    value: "Kanpur Nagar",
  },
  {
    label: "Kanshiram Nagar (Kasganj)",
    value: "Kanshiram Nagar (Kasganj)",
  },
  {
    label: "Kaushambi",
    value: "Kaushambi",
  },
  {
    label: "Kushinagar (Padrauna)",
    value: "Kushinagar (Padrauna)",
  },
  {
    label: "Lakhimpur - Kheri",
    value: "Lakhimpur - Kheri",
  },
  {
    label: "Lalitpur",
    value: "Lalitpur",
  },
  {
    label: "Lucknow",
    value: "Lucknow",
  },
  {
    label: "Maharajganj",
    value: "Maharajganj",
  },
  {
    label: "Mahoba",
    value: "Mahoba",
  },
  {
    label: "Mainpuri",
    value: "Mainpuri",
  },
  {
    label: "Mathura",
    value: "Mathura",
  },
  {
    label: "Mau",
    value: "Mau",
  },
  {
    label: "Meerut",
    value: "Meerut",
  },
  {
    label: "Mirzapur",
    value: "Mirzapur",
  },
  {
    label: "Moradabad",
    value: "Moradabad",
  },
  {
    label: "Muzaffarnagar",
    value: "Muzaffarnagar",
  },
  {
    label: "Pilibhit",
    value: "Pilibhit",
  },
  {
    label: "Pratapgarh",
    value: "Pratapgarh",
  },
  {
    label: "RaeBareli",
    value: "RaeBareli",
  },
  {
    label: "Rampur",
    value: "Rampur",
  },
  {
    label: "Saharanpur",
    value: "Saharanpur",
  },
  {
    label: "Sambhal (Bhim Nagar)",
    value: "Sambhal (Bhim Nagar)",
  },
  {
    label: "Sant Kabir Nagar",
    value: "Sant Kabir Nagar",
  },
  {
    label: "Shahjahanpur",
    value: "Shahjahanpur",
  },
  {
    label: "Shamali (Prabuddh Nagar)",
    value: "Shamali (Prabuddh Nagar)",
  },
  {
    label: "Shravasti",
    value: "Shravasti",
  },
  {
    label: "Siddharth Nagar",
    value: "Siddharth Nagar",
  },
  {
    label: "Sitapur",
    value: "Sitapur",
  },
  {
    label: "Sonbhadra",
    value: "Sonbhadra",
  },
  {
    label: "Sultanpur",
    value: "Sultanpur",
  },
  {
    label: "Unnao",
    value: "Unnao",
  },
  {
    label: "Varanasi",
    value: "Varanasi",
  },
  {
    label: "Alipurduar",
    value: "Alipurduar",
  },
  {
    label: "Bankura",
    value: "Bankura",
  },
  {
    label: "Birbhum",
    value: "Birbhum",
  },
  {
    label: "Burdwan (Bardhaman)",
    value: "Burdwan (Bardhaman)",
  },
  {
    label: "Cooch Behar",
    value: "Cooch Behar",
  },
  {
    label: "Dakshin Dinajpur (South Dinajpur)",
    value: "Dakshin Dinajpur (South Dinajpur)",
  },
  {
    label: "Darjeeling",
    value: "Darjeeling",
  },
  {
    label: "Hooghly",
    value: "Hooghly",
  },
  {
    label: "Howrah",
    value: "Howrah",
  },
  {
    label: "Jalpaiguri",
    value: "Jalpaiguri",
  },
  {
    label: "Kalimpong",
    value: "Kalimpong",
  },
  {
    label: "Kolkata",
    value: "Kolkata",
  },
  {
    label: "Malda",
    value: "Malda",
  },
  {
    label: "Murshidabad",
    value: "Murshidabad",
  },
  {
    label: "Nadia",
    value: "Nadia",
  },
  {
    label: "North 24 Parganas",
    value: "North 24 Parganas",
  },
  {
    label: "Paschim Medinipur (West Medinipur)",
    value: "Paschim Medinipur (West Medinipur)",
  },
  {
    label: "Purba Medinipur (East Medinipur)",
    value: "Purba Medinipur (East Medinipur)",
  },
  {
    label: "Purulia",
    value: "Purulia",
  },
  {
    label: "South 24 Parganas",
    value: "South 24 Parganas",
  },
  {
    label: "Uttar Dinajpur (North Dinajpur)",
    value: "Uttar Dinajpur (North Dinajpur)",
  },
];

export default districts;
