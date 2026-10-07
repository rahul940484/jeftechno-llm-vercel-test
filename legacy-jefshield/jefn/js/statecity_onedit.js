var citiesByState = {
Andaman_Island: ["Cape Comorin","Port Blair"],
Andhra_Pradesh: ["Kalingapatnam","Vishakapatnam","Rentichintala","Masulipatnam","Ongole","Kurnool","Anantpur","Nellore"],
Assam: ["Dhubri","Tezpur","Dibrugarh","Sibsagar","Silchar"],
Bihar: ["Motihari","Darbhanga","Patna","Gaya","Purnea","Sabour"],
Chhattisgarh: ["Ambikapur","Pendadah","Raipur","Kanker","Jagdalpur"],
Delhi: ["Delhi"],
Gujarat: ["Deesa","Dwarka","Jamnagar","Rajkot","Ahmedabad","Dohad","Porbandar","Veraval","Bhavnagar","Vadodara","Surat"],
Haryana: ["Hissar"],
Himachal_Pradesh: ["Mandi","Dharmasala","Simla"],
Jammu_and_Kashmir: ["Gilgit","Skardu","Gulmarg","Srinagar","Dras","Kargil","Leh","Jammu"],
Jharkhand: ["Daltonganj","Hazaribagh","Ranchi","Chaibasa","Dumka"],
Karnataka: ["Bidar","Gulbarga","Bijapur","Belgaum","Raichur","Gadag","Bellary","Karwat","Honavar","Chikalthana","Mangalore","Hassan","Bengaluru","Mysuru"],
Kerala: ["Kozhikode","Palghat","Kochi","Alleppey","Thiruvananthapuram"],
Lakshadweep: ["Minicoy I"],
Madhya_Pradesh: ["Neemuch","Gwalior","Guna","Nowgong","Satna","Sagar","Bhopal","Jabalpur","Umaria","Indore","Hoshangabad","Panchmarhi","Seoni","Chhindwara"],
Maharashtra: ["Dahanu","Nasik","Malegaon","Akola","Amraoti","Nagpur","Gondia","Aurangabad","Mumbai","Alibag","Ahmadnagar","Parbhani","Pune","Mahabaleshwar","Ratnagiri","Sholapur","Miraj","Vengurla"],
Manipur: ["Imphal"],
Meghalaya: ["Shillong","Cherrapunji"],
Nagaland: ["Kohima"],
Nepal: ["Katmandu"],
Nicobar: ["Car Nicobar I"],
Orissa: ["Balasore","Chandbali","Angul","Bhubaneshwar","Puri","Gopalpur","Jharsuguda","Sambalpur","Titlagarh","Rajgangpur","Dahanu"],
Punjab: ["Amritsar","Pathankot","Ludhiana","Patiala","Ambala"],
Rajasthan: ["Bikaner","Phalodi","Sikar","Barmer","Jodhpur","Ajmer","Jaipur","Kankroli","Mount Abu","Udaipur","Kota","Jhalawar"],
Tamil_Nadu: ["Vellore","Chennai","Udhagamandalam","Salem","Cuddalore","Coimbatore","Trichchirapalli","Nagapattinam","Kodaikanal","Madurai","Pamban","Tuticorin"],
Telangana: ["Nizambad","Hnamkonda","Hyderabad","Khammam"],
Uttar_Pradesh: ["Najibabad","Bareilly","Aligarh","Agra","Manipuri","Bahraich","Gonda","Lucknow","Kanpur","Fatehpur","Jhansi","Allahabad","Varanasi","Azamgarh","Gorakhpur"],
Uttarakhand: ["Mussorie","Roorkee","Mukteswar"],
West_Bengal: ["Jamshedpur","Darjeeling","Jalpaiguri","Malda","Asansol","Burdwan","Kharagpur","Kolkata","Sagar Island"]
}

function makeSubmenu(value) {
    console.log(value);
    if(value.length==0) document.getElementById("validationCustom03").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for(cityId in citiesByState[value]) {
            citiesOptions+="<option id='"+citiesByState[value][cityId]+"'>"+citiesByState[value][cityId]+"</option>";
        }
        document.getElementById("validationCustom03").innerHTML = citiesOptions;
    }
}

function displaySelected() { var country = document.getElementById("countrySelect").value;
var city = document.getElementById("citySelect").value;
alert(country+"\n"+city);
}
function resetSelection() {
document.getElementById("countrySelect").selectedIndex = 0;
document.getElementById("citySelect").selectedIndex = 0;
}
