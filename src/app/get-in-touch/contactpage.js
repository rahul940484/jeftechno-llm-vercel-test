"use client";

import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const GetInTouchForm = () => {

    const inputFields = [
        { label: 'First name', maxLength: 40 },
        { label: 'Last name', maxLength: 80 },
        { label: 'Business Email address', maxLength: 100, type: 'email', placeholder: 'name@mail.com' },
        { label: 'Company name', maxLength: 100 },
    ];

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [company, setCompany] = useState("");
    const [query, setQuery] = useState("");
    const [marketing, setMarketing] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);

    const name = `${firstname} ${lastname}`;

    const handleCountryChange = (e) => {
        const code = e.target.value;
        setCountryCode(code);
        setPhone(`${code}-${phone.split("-")[1] || ""}`);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(`${countryCode}-${value}`);
    };

    const handleMarketingChange = (event) => {
        setMarketing(event.target.value);
    };

    const toggleConfirmation = () => {
        setShowConfirmation(!showConfirmation);
    };

    const handleSubmitForm = async () => {

        if (!captchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        const contactformData = {
            name,
            email,
            mobile: phone,
            companyName: company,
            message: query,
            captchaToken,
        };

        try {
            const response = await axios.post(
                "/api/get-in-touch",
                contactformData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Server response:", response.data);

            toggleConfirmation();
            setTimeout(() => {
                const element = document.querySelector('.thank-you');
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const elementTop = elementRect.top + window.scrollY;
                    const centerPosition = elementTop - (window.innerHeight / 2) + (elementRect.height / 2);

                    window.scrollTo({
                        top: centerPosition,
                        behavior: 'smooth'
                    });
                }
            }, 0);

            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setCompany("");
            setQuery("");

        } catch (error) {
            console.error("Error sending data to server:", error);
            alert("Something went wrong or Captcha failed. Please try again.");
        }
    };

    const countries = [
        {
            "name": "Afghanistan",
            "dial_code": "+93",
            "code": "AF"
        },
        {
            "name": "Aland Islands",
            "dial_code": "+358",
            "code": "AX"
        },
        {
            "name": "Albania",
            "dial_code": "+355",
            "code": "AL"
        },
        {
            "name": "Algeria",
            "dial_code": "+213",
            "code": "DZ"
        },
        {
            "name": "AmericanSamoa",
            "dial_code": "+1684",
            "code": "AS"
        },
        {
            "name": "Andorra",
            "dial_code": "+376",
            "code": "AD"
        },
        {
            "name": "Angola",
            "dial_code": "+244",
            "code": "AO"
        },
        {
            "name": "Anguilla",
            "dial_code": "+1264",
            "code": "AI"
        },
        {
            "name": "Antarctica",
            "dial_code": "+672",
            "code": "AQ"
        },
        {
            "name": "Antigua and Barbuda",
            "dial_code": "+1268",
            "code": "AG"
        },
        {
            "name": "Argentina",
            "dial_code": "+54",
            "code": "AR"
        },
        {
            "name": "Armenia",
            "dial_code": "+374",
            "code": "AM"
        },
        {
            "name": "Aruba",
            "dial_code": "+297",
            "code": "AW"
        },
        {
            "name": "Australia",
            "dial_code": "+61",
            "code": "AU"
        },
        {
            "name": "Austria",
            "dial_code": "+43",
            "code": "AT"
        },
        {
            "name": "Azerbaijan",
            "dial_code": "+994",
            "code": "AZ"
        },
        {
            "name": "Bahamas",
            "dial_code": "+1242",
            "code": "BS"
        },
        {
            "name": "Bahrain",
            "dial_code": "+973",
            "code": "BH"
        },
        {
            "name": "Bangladesh",
            "dial_code": "+880",
            "code": "BD"
        },
        {
            "name": "Barbados",
            "dial_code": "+1246",
            "code": "BB"
        },
        {
            "name": "Belarus",
            "dial_code": "+375",
            "code": "BY"
        },
        {
            "name": "Belgium",
            "dial_code": "+32",
            "code": "BE"
        },
        {
            "name": "Belize",
            "dial_code": "+501",
            "code": "BZ"
        },
        {
            "name": "Benin",
            "dial_code": "+229",
            "code": "BJ"
        },
        {
            "name": "Bermuda",
            "dial_code": "+1441",
            "code": "BM"
        },
        {
            "name": "Bhutan",
            "dial_code": "+975",
            "code": "BT"
        },
        {
            "name": "Bolivia, Plurinational State of",
            "dial_code": "+591",
            "code": "BO"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dial_code": "+387",
            "code": "BA"
        },
        {
            "name": "Botswana",
            "dial_code": "+267",
            "code": "BW"
        },
        {
            "name": "Brazil",
            "dial_code": "+55",
            "code": "BR"
        },
        {
            "name": "British Indian Ocean Territory",
            "dial_code": "+246",
            "code": "IO"
        },
        {
            "name": "Brunei Darussalam",
            "dial_code": "+673",
            "code": "BN"
        },
        {
            "name": "Bulgaria",
            "dial_code": "+359",
            "code": "BG"
        },
        {
            "name": "Burkina Faso",
            "dial_code": "+226",
            "code": "BF"
        },
        {
            "name": "Burundi",
            "dial_code": "+257",
            "code": "BI"
        },
        {
            "name": "Cambodia",
            "dial_code": "+855",
            "code": "KH"
        },
        {
            "name": "Cameroon",
            "dial_code": "+237",
            "code": "CM"
        },
        {
            "name": "Canada",
            "dial_code": "+1",
            "code": "CA"
        },
        {
            "name": "Cape Verde",
            "dial_code": "+238",
            "code": "CV"
        },
        {
            "name": "Cayman Islands",
            "dial_code": "+ 345",
            "code": "KY"
        },
        {
            "name": "Central African Republic",
            "dial_code": "+236",
            "code": "CF"
        },
        {
            "name": "Chad",
            "dial_code": "+235",
            "code": "TD"
        },
        {
            "name": "Chile",
            "dial_code": "+56",
            "code": "CL"
        },
        {
            "name": "China",
            "dial_code": "+86",
            "code": "CN"
        },
        {
            "name": "Christmas Island",
            "dial_code": "+61",
            "code": "CX"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dial_code": "+61",
            "code": "CC"
        },
        {
            "name": "Colombia",
            "dial_code": "+57",
            "code": "CO"
        },
        {
            "name": "Comoros",
            "dial_code": "+269",
            "code": "KM"
        },
        {
            "name": "Congo",
            "dial_code": "+242",
            "code": "CG"
        },
        {
            "name": "Congo, The Democratic Republic of the Congo",
            "dial_code": "+243",
            "code": "CD"
        },
        {
            "name": "Cook Islands",
            "dial_code": "+682",
            "code": "CK"
        },
        {
            "name": "Costa Rica",
            "dial_code": "+506",
            "code": "CR"
        },
        {
            "name": "Cote d'Ivoire",
            "dial_code": "+225",
            "code": "CI"
        },
        {
            "name": "Croatia",
            "dial_code": "+385",
            "code": "HR"
        },
        {
            "name": "Cuba",
            "dial_code": "+53",
            "code": "CU"
        },
        {
            "name": "Cyprus",
            "dial_code": "+357",
            "code": "CY"
        },
        {
            "name": "Czech Republic",
            "dial_code": "+420",
            "code": "CZ"
        },
        {
            "name": "Denmark",
            "dial_code": "+45",
            "code": "DK"
        },
        {
            "name": "Djibouti",
            "dial_code": "+253",
            "code": "DJ"
        },
        {
            "name": "Dominica",
            "dial_code": "+1767",
            "code": "DM"
        },
        {
            "name": "Dominican Republic",
            "dial_code": "+1849",
            "code": "DO"
        },
        {
            "name": "Ecuador",
            "dial_code": "+593",
            "code": "EC"
        },
        {
            "name": "Egypt",
            "dial_code": "+20",
            "code": "EG"
        },
        {
            "name": "El Salvador",
            "dial_code": "+503",
            "code": "SV"
        },
        {
            "name": "Equatorial Guinea",
            "dial_code": "+240",
            "code": "GQ"
        },
        {
            "name": "Eritrea",
            "dial_code": "+291",
            "code": "ER"
        },
        {
            "name": "Estonia",
            "dial_code": "+372",
            "code": "EE"
        },
        {
            "name": "Ethiopia",
            "dial_code": "+251",
            "code": "ET"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dial_code": "+500",
            "code": "FK"
        },
        {
            "name": "Faroe Islands",
            "dial_code": "+298",
            "code": "FO"
        },
        {
            "name": "Fiji",
            "dial_code": "+679",
            "code": "FJ"
        },
        {
            "name": "Finland",
            "dial_code": "+358",
            "code": "FI"
        },
        {
            "name": "France",
            "dial_code": "+33",
            "code": "FR"
        },
        {
            "name": "French Guiana",
            "dial_code": "+594",
            "code": "GF"
        },
        {
            "name": "French Polynesia",
            "dial_code": "+689",
            "code": "PF"
        },
        {
            "name": "Gabon",
            "dial_code": "+241",
            "code": "GA"
        },
        {
            "name": "Gambia",
            "dial_code": "+220",
            "code": "GM"
        },
        {
            "name": "Georgia",
            "dial_code": "+995",
            "code": "GE"
        },
        {
            "name": "Germany",
            "dial_code": "+49",
            "code": "DE"
        },
        {
            "name": "Ghana",
            "dial_code": "+233",
            "code": "GH"
        },
        {
            "name": "Gibraltar",
            "dial_code": "+350",
            "code": "GI"
        },
        {
            "name": "Greece",
            "dial_code": "+30",
            "code": "GR"
        },
        {
            "name": "Greenland",
            "dial_code": "+299",
            "code": "GL"
        },
        {
            "name": "Grenada",
            "dial_code": "+1473",
            "code": "GD"
        },
        {
            "name": "Guadeloupe",
            "dial_code": "+590",
            "code": "GP"
        },
        {
            "name": "Guam",
            "dial_code": "+1671",
            "code": "GU"
        },
        {
            "name": "Guatemala",
            "dial_code": "+502",
            "code": "GT"
        },
        {
            "name": "Guernsey",
            "dial_code": "+44",
            "code": "GG"
        },
        {
            "name": "Guinea",
            "dial_code": "+224",
            "code": "GN"
        },
        {
            "name": "Guinea-Bissau",
            "dial_code": "+245",
            "code": "GW"
        },
        {
            "name": "Guyana",
            "dial_code": "+595",
            "code": "GY"
        },
        {
            "name": "Haiti",
            "dial_code": "+509",
            "code": "HT"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dial_code": "+379",
            "code": "VA"
        },
        {
            "name": "Honduras",
            "dial_code": "+504",
            "code": "HN"
        },
        {
            "name": "Hong Kong",
            "dial_code": "+852",
            "code": "HK"
        },
        {
            "name": "Hungary",
            "dial_code": "+36",
            "code": "HU"
        },
        {
            "name": "Iceland",
            "dial_code": "+354",
            "code": "IS"
        },
        {
            "name": "India",
            "dial_code": "+91",
            "code": "IN"
        },
        {
            "name": "Indonesia",
            "dial_code": "+62",
            "code": "ID"
        },
        {
            "name": "Iran, Islamic Republic of Persian Gulf",
            "dial_code": "+98",
            "code": "IR"
        },
        {
            "name": "Iraq",
            "dial_code": "+964",
            "code": "IQ"
        },
        {
            "name": "Ireland",
            "dial_code": "+353",
            "code": "IE"
        },
        {
            "name": "Isle of Man",
            "dial_code": "+44",
            "code": "IM"
        },
        {
            "name": "Israel",
            "dial_code": "+972",
            "code": "IL"
        },
        {
            "name": "Italy",
            "dial_code": "+39",
            "code": "IT"
        },
        {
            "name": "Jamaica",
            "dial_code": "+1876",
            "code": "JM"
        },
        {
            "name": "Japan",
            "dial_code": "+81",
            "code": "JP"
        },
        {
            "name": "Jersey",
            "dial_code": "+44",
            "code": "JE"
        },
        {
            "name": "Jordan",
            "dial_code": "+962",
            "code": "JO"
        },
        {
            "name": "Kazakhstan",
            "dial_code": "+77",
            "code": "KZ"
        },
        {
            "name": "Kenya",
            "dial_code": "+254",
            "code": "KE"
        },
        {
            "name": "Kiribati",
            "dial_code": "+686",
            "code": "KI"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dial_code": "+850",
            "code": "KP"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dial_code": "+82",
            "code": "KR"
        },
        {
            "name": "Kuwait",
            "dial_code": "+965",
            "code": "KW"
        },
        {
            "name": "Kyrgyzstan",
            "dial_code": "+996",
            "code": "KG"
        },
        {
            "name": "Laos",
            "dial_code": "+856",
            "code": "LA"
        },
        {
            "name": "Latvia",
            "dial_code": "+371",
            "code": "LV"
        },
        {
            "name": "Lebanon",
            "dial_code": "+961",
            "code": "LB"
        },
        {
            "name": "Lesotho",
            "dial_code": "+266",
            "code": "LS"
        },
        {
            "name": "Liberia",
            "dial_code": "+231",
            "code": "LR"
        },
        {
            "name": "Libyan Arab Jamahiriya",
            "dial_code": "+218",
            "code": "LY"
        },
        {
            "name": "Liechtenstein",
            "dial_code": "+423",
            "code": "LI"
        },
        {
            "name": "Lithuania",
            "dial_code": "+370",
            "code": "LT"
        },
        {
            "name": "Luxembourg",
            "dial_code": "+352",
            "code": "LU"
        },
        {
            "name": "Macao",
            "dial_code": "+853",
            "code": "MO"
        },
        {
            "name": "Macedonia",
            "dial_code": "+389",
            "code": "MK"
        },
        {
            "name": "Madagascar",
            "dial_code": "+261",
            "code": "MG"
        },
        {
            "name": "Malawi",
            "dial_code": "+265",
            "code": "MW"
        },
        {
            "name": "Malaysia",
            "dial_code": "+60",
            "code": "MY"
        },
        {
            "name": "Maldives",
            "dial_code": "+960",
            "code": "MV"
        },
        {
            "name": "Mali",
            "dial_code": "+223",
            "code": "ML"
        },
        {
            "name": "Malta",
            "dial_code": "+356",
            "code": "MT"
        },
        {
            "name": "Marshall Islands",
            "dial_code": "+692",
            "code": "MH"
        },
        {
            "name": "Martinique",
            "dial_code": "+596",
            "code": "MQ"
        },
        {
            "name": "Mauritania",
            "dial_code": "+222",
            "code": "MR"
        },
        {
            "name": "Mauritius",
            "dial_code": "+230",
            "code": "MU"
        },
        {
            "name": "Mayotte",
            "dial_code": "+262",
            "code": "YT"
        },
        {
            "name": "Mexico",
            "dial_code": "+52",
            "code": "MX"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dial_code": "+691",
            "code": "FM"
        },
        {
            "name": "Moldova",
            "dial_code": "+373",
            "code": "MD"
        },
        {
            "name": "Monaco",
            "dial_code": "+377",
            "code": "MC"
        },
        {
            "name": "Mongolia",
            "dial_code": "+976",
            "code": "MN"
        },
        {
            "name": "Montenegro",
            "dial_code": "+382",
            "code": "ME"
        },
        {
            "name": "Montserrat",
            "dial_code": "+1664",
            "code": "MS"
        },
        {
            "name": "Morocco",
            "dial_code": "+212",
            "code": "MA"
        },
        {
            "name": "Mozambique",
            "dial_code": "+258",
            "code": "MZ"
        },
        {
            "name": "Myanmar",
            "dial_code": "+95",
            "code": "MM"
        },
        {
            "name": "Namibia",
            "dial_code": "+264",
            "code": "NA"
        },
        {
            "name": "Nauru",
            "dial_code": "+674",
            "code": "NR"
        },
        {
            "name": "Nepal",
            "dial_code": "+977",
            "code": "NP"
        },
        {
            "name": "Netherlands",
            "dial_code": "+31",
            "code": "NL"
        },
        {
            "name": "Netherlands Antilles",
            "dial_code": "+599",
            "code": "AN"
        },
        {
            "name": "New Caledonia",
            "dial_code": "+687",
            "code": "NC"
        },
        {
            "name": "New Zealand",
            "dial_code": "+64",
            "code": "NZ"
        },
        {
            "name": "Nicaragua",
            "dial_code": "+505",
            "code": "NI"
        },
        {
            "name": "Niger",
            "dial_code": "+227",
            "code": "NE"
        },
        {
            "name": "Nigeria",
            "dial_code": "+234",
            "code": "NG"
        },
        {
            "name": "Niue",
            "dial_code": "+683",
            "code": "NU"
        },
        {
            "name": "Norfolk Island",
            "dial_code": "+672",
            "code": "NF"
        },
        {
            "name": "Northern Mariana Islands",
            "dial_code": "+1670",
            "code": "MP"
        },
        {
            "name": "Norway",
            "dial_code": "+47",
            "code": "NO"
        },
        {
            "name": "Oman",
            "dial_code": "+968",
            "code": "OM"
        },
        {
            "name": "Pakistan",
            "dial_code": "+92",
            "code": "PK"
        },
        {
            "name": "Palau",
            "dial_code": "+680",
            "code": "PW"
        },
        {
            "name": "Palestinian Territory, Occupied",
            "dial_code": "+970",
            "code": "PS"
        },
        {
            "name": "Panama",
            "dial_code": "+507",
            "code": "PA"
        },
        {
            "name": "Papua New Guinea",
            "dial_code": "+675",
            "code": "PG"
        },
        {
            "name": "Paraguay",
            "dial_code": "+595",
            "code": "PY"
        },
        {
            "name": "Peru",
            "dial_code": "+51",
            "code": "PE"
        },
        {
            "name": "Philippines",
            "dial_code": "+63",
            "code": "PH"
        },
        {
            "name": "Pitcairn",
            "dial_code": "+872",
            "code": "PN"
        },
        {
            "name": "Poland",
            "dial_code": "+48",
            "code": "PL"
        },
        {
            "name": "Portugal",
            "dial_code": "+351",
            "code": "PT"
        },
        {
            "name": "Puerto Rico",
            "dial_code": "+1939",
            "code": "PR"
        },
        {
            "name": "Qatar",
            "dial_code": "+974",
            "code": "QA"
        },
        {
            "name": "Romania",
            "dial_code": "+40",
            "code": "RO"
        },
        {
            "name": "Russia",
            "dial_code": "+7",
            "code": "RU"
        },
        {
            "name": "Rwanda",
            "dial_code": "+250",
            "code": "RW"
        },
        {
            "name": "Reunion",
            "dial_code": "+262",
            "code": "RE"
        },
        {
            "name": "Saint Barthelemy",
            "dial_code": "+590",
            "code": "BL"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dial_code": "+290",
            "code": "SH"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dial_code": "+1869",
            "code": "KN"
        },
        {
            "name": "Saint Lucia",
            "dial_code": "+1758",
            "code": "LC"
        },
        {
            "name": "Saint Martin",
            "dial_code": "+590",
            "code": "MF"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dial_code": "+508",
            "code": "PM"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dial_code": "+1784",
            "code": "VC"
        },
        {
            "name": "Samoa",
            "dial_code": "+685",
            "code": "WS"
        },
        {
            "name": "San Marino",
            "dial_code": "+378",
            "code": "SM"
        },
        {
            "name": "Sao Tome and Principe",
            "dial_code": "+239",
            "code": "ST"
        },
        {
            "name": "Saudi Arabia",
            "dial_code": "+966",
            "code": "SA"
        },
        {
            "name": "Senegal",
            "dial_code": "+221",
            "code": "SN"
        },
        {
            "name": "Serbia",
            "dial_code": "+381",
            "code": "RS"
        },
        {
            "name": "Seychelles",
            "dial_code": "+248",
            "code": "SC"
        },
        {
            "name": "Sierra Leone",
            "dial_code": "+232",
            "code": "SL"
        },
        {
            "name": "Singapore",
            "dial_code": "+65",
            "code": "SG"
        },
        {
            "name": "Slovakia",
            "dial_code": "+421",
            "code": "SK"
        },
        {
            "name": "Slovenia",
            "dial_code": "+386",
            "code": "SI"
        },
        {
            "name": "Solomon Islands",
            "dial_code": "+677",
            "code": "SB"
        },
        {
            "name": "Somalia",
            "dial_code": "+252",
            "code": "SO"
        },
        {
            "name": "South Africa",
            "dial_code": "+27",
            "code": "ZA"
        },
        {
            "name": "South Sudan",
            "dial_code": "+211",
            "code": "SS"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dial_code": "+500",
            "code": "GS"
        },
        {
            "name": "Spain",
            "dial_code": "+34",
            "code": "ES"
        },
        {
            "name": "Sri Lanka",
            "dial_code": "+94",
            "code": "LK"
        },
        {
            "name": "Sudan",
            "dial_code": "+249",
            "code": "SD"
        },
        {
            "name": "Suriname",
            "dial_code": "+597",
            "code": "SR"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dial_code": "+47",
            "code": "SJ"
        },
        {
            "name": "Swaziland",
            "dial_code": "+268",
            "code": "SZ"
        },
        {
            "name": "Sweden",
            "dial_code": "+46",
            "code": "SE"
        },
        {
            "name": "Switzerland",
            "dial_code": "+41",
            "code": "CH"
        },
        {
            "name": "Syrian Arab Republic",
            "dial_code": "+963",
            "code": "SY"
        },
        {
            "name": "Taiwan",
            "dial_code": "+886",
            "code": "TW"
        },
        {
            "name": "Tajikistan",
            "dial_code": "+992",
            "code": "TJ"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dial_code": "+255",
            "code": "TZ"
        },
        {
            "name": "Thailand",
            "dial_code": "+66",
            "code": "TH"
        },
        {
            "name": "Timor-Leste",
            "dial_code": "+670",
            "code": "TL"
        },
        {
            "name": "Togo",
            "dial_code": "+228",
            "code": "TG"
        },
        {
            "name": "Tokelau",
            "dial_code": "+690",
            "code": "TK"
        },
        {
            "name": "Tonga",
            "dial_code": "+676",
            "code": "TO"
        },
        {
            "name": "Trinidad and Tobago",
            "dial_code": "+1868",
            "code": "TT"
        },
        {
            "name": "Tunisia",
            "dial_code": "+216",
            "code": "TN"
        },
        {
            "name": "Turkey",
            "dial_code": "+90",
            "code": "TR"
        },
        {
            "name": "Turkmenistan",
            "dial_code": "+993",
            "code": "TM"
        },
        {
            "name": "Turks and Caicos Islands",
            "dial_code": "+1649",
            "code": "TC"
        },
        {
            "name": "Tuvalu",
            "dial_code": "+688",
            "code": "TV"
        },
        {
            "name": "Uganda",
            "dial_code": "+256",
            "code": "UG"
        },
        {
            "name": "Ukraine",
            "dial_code": "+380",
            "code": "UA"
        },
        {
            "name": "United Arab Emirates",
            "dial_code": "+971",
            "code": "AE"
        },
        {
            "name": "United Kingdom",
            "dial_code": "+44",
            "code": "GB"
        },
        {
            "name": "United States",
            "dial_code": "+1",
            "code": "US"
        },
        {
            "name": "Uruguay",
            "dial_code": "+598",
            "code": "UY"
        },
        {
            "name": "Uzbekistan",
            "dial_code": "+998",
            "code": "UZ"
        },
        {
            "name": "Vanuatu",
            "dial_code": "+678",
            "code": "VU"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dial_code": "+58",
            "code": "VE"
        },
        {
            "name": "Vietnam",
            "dial_code": "+84",
            "code": "VN"
        },
        {
            "name": "Virgin Islands, British",
            "dial_code": "+1284",
            "code": "VG"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dial_code": "+1340",
            "code": "VI"
        },
        {
            "name": "Wallis and Futuna",
            "dial_code": "+681",
            "code": "WF"
        },
        {
            "name": "Yemen",
            "dial_code": "+967",
            "code": "YE"
        },
        {
            "name": "Zambia",
            "dial_code": "+260",
            "code": "ZM"
        },
        {
            "name": "Zimbabwe",
            "dial_code": "+263",
            "code": "ZW"
        }
    ]

    return (
        <>
            <section className="flex p-5 py-32 overflow-hidden flex-col bg-[#232427]">
                <div className="flex flex-col self-center mt-24 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
                    <h1 className="pb-px w-full text-[28px] md:text-[36px] font-bold text-white tracking-[1px] uppercase mb-12">
                        JUST A FEW DETAILS TO GET STARTED
                    </h1>
                    {showConfirmation ? (
                        <div className='w-full flex flex-col items-start gap-12 thank-you mt-16 text-3xl leading-loose uppercase text-white tracking-[3.36px] max-md:max-w-full'>
                            <div className='leading-tight'>Thank You…!! </div>
                            <div className='leading-tight'>Our team has received your information, will get in touch with you within the next 24 hours to discuss how we can help bring your vision to life.</div>
                        </div>
                    ) : (
                        <form id="userDetailsForm"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmitForm();
                            }} className="flex flex-col mt-9 w-full max-md:max-w-full">
                            <div className="flex lg:gap-5 max-md:flex-col">
                                <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center lg:pb-10 min-h-32  max-md:max-w-full">
                                        <div className="flex flex-col w-full min-h-[93px] max-md:max-w-full">
                                            <div className="flex flex-col w-full max-md:max-w-full">
                                                <div className="flex relative gap-4 lg:gap-10 w-full text-xs max-md:max-w-full">
                                                    <label htmlFor="name" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                                                        <span className="text-[#FF0000] font-normal">FIRST NAME </span>
                                                        <span className="text-[#FF0000]">*</span>
                                                    </label>
                                                    <div className="absolute right-px self-start h-3 font-light tracking-wide leading-none min-h-[12px] text-gray-400">
                                                        40 characters
                                                    </div>
                                                </div>
                                                <input
                                                    value={firstname}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    type="text"
                                                    name="firstName"
                                                    className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-base font-normal  bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                                                    placeholder="Please type here"
                                                    maxLength={40}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center lg:pb-10 min-h-32  max-md:max-w-full">
                                        <div className="flex flex-col w-full min-h-[93px] max-md:max-w-full">
                                            <div className="flex flex-col w-full max-md:max-w-full">
                                                <div className="flex relative gap-4 lg:gap-10 w-full text-xs max-md:max-w-full">
                                                    <label htmlFor="name" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                                                        <span className="text-[#FF0000] font-normal">LAST NAME </span>
                                                        <span className="text-[#FF0000]">*</span>
                                                    </label>
                                                    <div className="absolute right-px self-start h-3 font-light tracking-wide leading-none min-h-[12px] text-gray-400">
                                                        80 characters
                                                    </div>
                                                </div>
                                                <input
                                                    value={lastname}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    type="text"
                                                    name="lastName"
                                                    className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-base font-normal  bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                                                    placeholder="Please type here"
                                                    maxLength={80}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-col w-full  max-md:max-w-full">
                                            <div className="flex flex-col w-full max-md:max-w-full">
                                                <div className="flex relative gap-10 w-full text-xs max-md:max-w-full">
                                                    <label htmlFor="email" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                                                        <span className="text-[#FF0000]">Business Email address </span>
                                                        <span className="text-[#FF0000]">*</span>
                                                    </label>
                                                    <div className="absolute -right-px self-start h-3 font-normal tracking-wide leading-none min-h-[12px] text-zinc-600">
                                                        100 characters
                                                    </div>
                                                </div>
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    id="email"
                                                    type="email"
                                                    className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-sm font-normal whitespace-nowrap bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                                                    placeholder="name@mail.com"
                                                    maxLength={100}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <div className="flex flex-wrap gap-1 items-start pb-px w-full text-xs max-md:max-w-full">
                                                <label htmlFor="phone" className="tracking-widest leading-tight uppercase text-[#FF0000]">
                                                    Phone number <span className="text-[#FF0000]">*</span>
                                                </label>
                                            </div>
                                            <div className="flex flex-wrap gap-5 justify-center mt-2.5 w-full text-sm font-thin max-md:max-w-full">
                                                <div className="flex gap-10 grow shrink bg-white rounded border border-gray-200 border-solid leading-10 text-center whitespace-nowrap text-stone-900 w-[116px]">
                                                    <select required value={countryCode}
                                                        onChange={handleCountryChange} className="flex h-[100%] gap-10 px-4 focus:outline-none justify-between items-center py-2.5 w-full ">
                                                        <option value="" disabled>Select</option>
                                                        {countries.map((country) => (
                                                            <option key={country.code} value={country.dial_code} className="text-black">
                                                                {country.name} ({country.dial_code})
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="flex flex-col grow shrink min-w-[240px] text-neutral-500 w-[436px] max-md:max-w-full">
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 w-full bg-white font-normal rounded border border-gray-200 border-solid max-md:max-w-full"
                                                        placeholder="Please type here"
                                                        value={phone.split("-")[1] || ""}
                                                        onChange={handlePhoneChange}
                                                        required
                                                        onKeyDown={(e) => {
                                                            if (
                                                                !/[0-9]/.test(e.key) &&
                                                                !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"].includes(e.key)
                                                            ) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-md:flex-col mt-[2%]">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow min-h-[126px] max-md:mt-10 max-md:max-w-full">
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <div className="flex relative gap-10 w-full text-xs max-md:max-w-full">
                                                <label htmlFor="company" className="tracking-widest leading-tight uppercase min-w-[240px] text-[#FF0000] w-[473px] max-md:max-w-full">
                                                    <span>Company name </span>
                                                    <span className="text-[#FF0000]">*</span>
                                                </label>
                                                <div className="absolute -right-px self-start h-3 font-normal tracking-wide leading-none min-h-[12px] text-zinc-600">
                                                    100 characters
                                                </div>
                                            </div>
                                            <input
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                id="company"
                                                type="text"
                                                className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-sm font-normal bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                                                placeholder="Please type here"
                                                maxLength={100}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow text-xs min-h-[126px]">
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <div className="flex relative gap-10 w-full max-md:max-w-full">
                                                <label htmlFor="query" className="tracking-widest leading-tight uppercase min-w-[240px] text-[#FF0000] w-[473px] max-md:max-w-full">
                                                    <span>Query </span>
                                                    <span className="text-[#FF0000]">*</span>
                                                </label>
                                                <div className="absolute -right-px self-start h-3 font-thin tracking-wide leading-none min-h-[12px] text-zinc-600">
                                                    1000 characters
                                                </div>
                                            </div>
                                            <textarea
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                id="query"
                                                className="flex p-4 text-base mt-2.5 w-full bg-white rounded border border-gray-200 border-solid min-h-[92px] max-md:max-w-full"
                                                maxLength={1000}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col py-0.5 mt-9 w-full max-md:max-w-full">
                                <div className="flex flex-col justify-center pb-2.5 w-full h-6 text-xs tracking-widest leading-tight uppercase max-md:max-w-full">
                                    <div className="flex flex-wrap gap-1 items-start w-full h-[15px] max-md:max-w-full">
                                        <div className="text-[#FF0000]">Marketing Permissions</div>
                                        <div className="text-[#FF0000]">*</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
                                    <div className="flex flex-wrap flex-auto gap-5 justify-start min-h-[90px] w-full md:w-auto">
                                        <div className="flex flex-col w-[200px]">
                                            <label className={`flex items-center p-5 bg-[#FFF0F0] rounded cursor-pointer border ${marketing === 'Yes' ? 'border-[#FF0000]' : 'border-transparent'}`}>
                                                <input
                                                    required
                                                    type="radio"
                                                    id="marketing-yes"
                                                    name="marketing"
                                                    value="Yes"
                                                    onChange={handleMarketingChange}
                                                    className="w-5 h-5 accent-brand"
                                                />
                                                <span className="ml-3 text-xs tracking-widest uppercase text-stone-600">Yes</span>
                                            </label>
                                        </div>
                                        <div className="flex flex-col w-[200px]">
                                            <label className={`flex items-center p-5 bg-[#FFF0F0] rounded cursor-pointer border ${marketing === 'No' ? 'border-[#FF0000]' : 'border-transparent'}`}>
                                                <input
                                                    required
                                                    type="radio"
                                                    id="marketing-no"
                                                    name="marketing"
                                                    value="No"
                                                    onChange={handleMarketingChange}
                                                    className="w-5 h-5 accent-brand"
                                                />
                                                <span className="ml-3 text-xs tracking-widest uppercase text-stone-600">No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex flex-col flex-1 grow shrink-0 text-sm font-normal leading-5 basis-0 min-h-[90px] text-white w-fit max-md:max-w-full">
                                        <p className="z-10 pt-0 pb-7 w-full max-md:max-w-full">
                                            By completing this form you are agreeing to being contacted by JEF, If you would also like to hear updates from other parts of JEF please select Yes. We will treat your information carefully. See our{" "}
                                            <a href="/termsandconditions" className="font-medium text-[#FF0000]">terms and Conditions</a>{" "}
                                            and <a href="/privacypolicy" className="font-medium text-[#FF0000]">privacy policy</a>{" "}
                                            for more details.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex lg:hidden flex-col flex-1 grow shrink-0 text-sm font-normal leading-5 basis-0 min-h-[90px] w-fit max-md:max-w-full">
                                    <p className="z-10 pt-0 pb-7 w-full max-md:max-w-full text-white" >
                                        By completing this form you are agreeing to being contacted by JEF, If you would also like to hear updates from other parts of JEF please select Yes. We will treat your information carefully. See our{" "}
                                        <a href="#" className="font-medium text-[#FF0000]">terms of use</a>{" "}
                                        and <a href="#" className="font-medium text-[#FF0000]">privacy policy</a>{" "}
                                        for more details.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-start mt-9 w-full max-md:max-w-full">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={(val) => setCaptchaToken(val)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start pt-1 mt-9 w-full text-lg font-extralight tracking-widest leading-none text-center text-white uppercase whitespace-nowrap max-md:max-w-full">
                                <button form="userDetailsForm" type="submit" className="flex overflow-hidden uppercase w-40 h-14 justify-center items-center self-center lg:self-stretch px-7 py-3.5 my-auto bg-[#FF0000] rounded-full ">
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
            <section>
                <OfficeLocations />
            </section>
        </>
    );
};

export function OfficeLocations() {
    const offices = [
        {
            title: "Our Global Head Office",
            address: "JEF Techno Solutions Pvt Ltd, KR Square, No.1073, 15th Cross, 30th Main, Banashankari 2nd Stage, Bengaluru-560070",
            phone: "+91 080 37569000",
            email: "marketing@jeftechno.com",
        },
        {
            title: "Middle East Headquarter",
            address: "Office no: 4-B, 4th floor, Prestige Tower 16, Mohammad Bin Zayed City, Abu Dhabi, UAE.",
            phone: "+971 552447290",
            email: "marketing@jeftechno.com",
        },
        {
            title: "UAE Office",
            address: "Ground Floor, Accelerator Building Masdar City, Abu Dhabi, UAE.",
            phone: "+971 552447290",
            email: "marketing@jeftechno.com",
        },
        {
            title: "Kingdom of Saudi Arabia - Regional Office",
            address: "Prince Turki St, PO Box-6140, Al Khobar Corniche, PC-34423, KSA.",
            phone: "+971 552447290",
            email: "marketing@jeftechno.com",
        },
        {
            title: "USA Office",
            address: "Street Address: 4512 Legacy Dr Ste 100 Plano TX 75024",
            phone: "+971 552447290",
            email: "marketing@jeftechno.com",
        }
    ];

    return (
        <main className="flex flex-col items-center bg-[#232427] px-5 sm:px-8 md:px-12 2xl:px-20 pt-10 xl:pt-0 pb-12 sm:pb-16 md:pb-20 ">
            <section className="w-full max-w-[1300px] mx-auto">
                <h1 className="text-3xl font-bold text-[#FF0000] text-center mb-16 uppercase tracking-[2px]">
                    JEF offices
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {offices.map((office, index) => (
                        <article
                            key={index}
                            className="flex flex-col rounded-lg bg-[#232427]"
                        >
                            <h2 className="text-sm font-bold text-[#FF0000] mb-6 uppercase min-h-[40px]">
                                {office.title}
                            </h2>
                            <p
                                className="text-[15px] font-light leading-relaxed text-white mb-8 min-h-[140px]"
                            >
                                {office.address}
                            </p>
                            <p className="text-[15px] font-light text-[#FF0000] mb-1">
                                Ph. No: {office.phone}
                            </p>
                            <p className="text-[15px] font-light text-[#FF0000]">
                                Email:{' '}
                                <a href={`mailto:${office.email}`} className="underline hover:text-white transition-colors">
                                    {office.email}
                                </a>
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[15px] font-medium text-white underline mt-4 bg-transparent hover:text-[#FF0000] transition-colors inline-block w-fit"
                            >
                                View on Map
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default GetInTouchForm;
