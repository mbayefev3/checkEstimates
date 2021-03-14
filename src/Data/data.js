const countriesAndCode = [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
{ key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
{ key: 'al', value: 'al', flag: 'al', text: 'Albania' },
{ key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
{ key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
{ key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
{ key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
{ key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
{ key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
{ key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
{ key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
{ key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
{ key: 'au', value: 'au', flag: 'au', text: 'Australia' },
{ key: 'at', value: 'at', flag: 'at', text: 'Austria' },
{ key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
{ key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
{ key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
{ key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
{ key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
{ key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
{ key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
{ key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
{ key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
{ key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda' },
{ key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan' },
{ key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia' },
{ key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia' },
{ key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana' },
{ key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island' },
{ key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
{ key: 'vg', value: 'vg', flag: 'vg', text: 'British Virgin Islands' },
{ key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
{ key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
{ key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso' },
{ key: 'mm', value: 'mm', flag: 'mm', text: 'Burma' },
{ key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi' },
{ key: 'tc', value: 'tc', flag: 'tc', text: 'Caicos Islands' },
{ key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },
{ key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon' },
{ key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
{ key: 'cv', value: 'cv', flag: 'cv', text: 'Cape Verde' },
{ key: 'ky', value: 'ky', flag: 'ky', text: 'Cayman Islands' },
{ key: 'cf', value: 'cf', flag: 'cf', text: 'Central African Republic' },
{ key: 'td', value: 'td', flag: 'td', text: 'Chad' },
{ key: 'cl', value: 'cl', flag: 'cl', text: 'Chile' },
{ key: 'cn', value: 'cn', flag: 'cn', text: 'China' },
{ key: 'cx', value: 'cx', flag: 'cx', text: 'Christmas Island' },
{ key: 'cc', value: 'cc', flag: 'cc', text: 'Cocos Islands' },
{ key: 'co', value: 'co', flag: 'co', text: 'Colombia' },
{ key: 'km', value: 'km', flag: 'km', text: 'Comoros' },
{ key: 'cg', value: 'cg', flag: 'cg', text: 'Congo Brazzaville' },
{ key: 'cd', value: 'cd', flag: 'cd', text: 'Congo' },
{ key: 'ck', value: 'ck', flag: 'ck', text: 'Cook Islands' },
{ key: 'cr', value: 'cr', flag: 'cr', text: 'Costa Rica' },
{ key: 'ci', value: 'ci', flag: 'ci', text: 'Cote Divoire' },
{ key: 'hr', value: 'hr', flag: 'hr', text: 'Croatia' },
{ key: 'cu', value: 'cu', flag: 'cu', text: 'Cuba' },
{ key: 'cy', value: 'cy', flag: 'cy', text: 'Cyprus' },
{ key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic' },
{ key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark' },
{ key: 'dj', value: 'dj', flag: 'dj', text: 'Djibouti' },
{ key: 'dm', value: 'dm', flag: 'dm', text: 'Dominica' },
{ key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic' },
{ key: 'ec', value: 'ec', flag: 'ec', text: 'Ecuador' },
{ key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt' },
{ key: 'sv', value: 'sv', flag: 'sv', text: 'El Salvador' },
{ key: 'gb', value: 'gb', flag: 'gb', text: 'England' },
{ key: 'gq', value: 'gq', flag: 'gq', text: 'Equatorial Guinea' },
{ key: 'er', value: 'er', flag: 'er', text: 'Eritrea' },
{ key: 'ee', value: 'ee', flag: 'ee', text: 'Estonia' },
{ key: 'et', value: 'et', flag: 'et', text: 'Ethiopia' },
{ key: 'eu', value: 'eu', flag: 'eu', text: 'European Union' },
{ key: 'fk', value: 'fk', flag: 'fk', text: 'Falkland Islands' },
{ key: 'fo', value: 'fo', flag: 'fo', text: 'Faroe Islands' },
{ key: 'fj', value: 'fj', flag: 'fj', text: 'Fiji' },
{ key: 'fi', value: 'fi', flag: 'fi', text: 'Finland' },
{ key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
{ key: 'gf', value: 'gf', flag: 'gf', text: 'French Guiana' },
{ key: 'pf', value: 'pf', flag: 'pf', text: 'French Polynesia' },
{ key: 'tf', value: 'tf', flag: 'tf', text: 'French Territories' },
{ key: 'ga', value: 'ga', flag: 'ga', text: 'Gabon' },
{ key: 'gm', value: 'gm', flag: 'gm', text: 'Gambia' },
{ key: 'ge', value: 'ge', flag: 'ge', text: 'Georgia' },
{ key: 'de', value: 'de', flag: 'de', text: 'Germany' },
{ key: 'gh', value: 'gh', flag: 'gh', text: 'Ghana' },
{ key: 'gi', value: 'gi', flag: 'gi', text: 'Gibraltar' },
{ key: 'gr', value: 'gr', flag: 'gr', text: 'Greece' },
{ key: 'gl', value: 'gl', flag: 'gl', text: 'Greenland' },
{ key: 'gd', value: 'gd', flag: 'gd', text: 'Grenada' },
{ key: 'gp', value: 'gp', flag: 'gp', text: 'Guadeloupe' },
{ key: 'gu', value: 'gu', flag: 'gu', text: 'Guam' },
{ key: 'gt', value: 'gt', flag: 'gt', text: 'Guatemala' },
{ key: 'gw', value: 'gw', flag: 'gw', text: 'Guinea-Bissau' },
{ key: 'gn', value: 'gn', flag: 'gn', text: 'Guinea' },
{ key: 'gy', value: 'gy', flag: 'gy', text: 'Guyana' },
{ key: 'ht', value: 'ht', flag: 'ht', text: 'Haiti' },
{ key: 'hm', value: 'hm', flag: 'hm', text: 'Heard Island' },
{ key: 'hn', value: 'hn', flag: 'hn', text: 'Honduras' },
{ key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong' },
{ key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary' },
{ key: 'is', value: 'is', flag: 'is', text: 'Iceland' },
{ key: 'in', value: 'in', flag: 'in', text: 'India' },
{ key: 'io', value: 'io', flag: 'io', text: 'Indian Ocean Territory' },
{ key: 'id', value: 'id', flag: 'id', text: 'Indonesia' },
{ key: 'ir', value: 'ir', flag: 'ir', text: 'Iran' },
{ key: 'iq', value: 'iq', flag: 'iq', text: 'Iraq' },
{ key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland' },
{ key: 'il', value: 'il', flag: 'il', text: 'Israel' },
{ key: 'it', value: 'it', flag: 'it', text: 'Italy' },
{ key: 'jm', value: 'jm', flag: 'jm', text: 'Jamaica' },
{ key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' },
{ key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan' },
{ key: 'kz', value: 'kz', flag: 'kz', text: 'Kazakhstan' },
{ key: 'ke', value: 'ke', flag: 'ke', text: 'Kenya' },
{ key: 'ki', value: 'ki', flag: 'ki', text: 'Kiribati' },
{ key: 'kw', value: 'kw', flag: 'kw', text: 'Kuwait' },
{ key: 'kg', value: 'kg', flag: 'kg', text: 'Kyrgyzstan' },
{ key: 'la', value: 'la', flag: 'la', text: 'Laos' },
{ key: 'lv', value: 'lv', flag: 'lv', text: 'Latvia' },
{ key: 'lb', value: 'lb', flag: 'lb', text: 'Lebanon' },
{ key: 'ls', value: 'ls', flag: 'ls', text: 'Lesotho' },
{ key: 'lr', value: 'lr', flag: 'lr', text: 'Liberia' },
{ key: 'ly', value: 'ly', flag: 'ly', text: 'Libya' },
{ key: 'li', value: 'li', flag: 'li', text: 'Liechtenstein' },
{ key: 'lt', value: 'lt', flag: 'lt', text: 'Lithuania' },
{ key: 'lu', value: 'lu', flag: 'lu', text: 'Luxembourg' },
{ key: 'mo', value: 'mo', flag: 'mo', text: 'Macau' },
{ key: 'mk', value: 'mk', flag: 'mk', text: 'Macedonia' },
{ key: 'mg', value: 'mg', flag: 'mg', text: 'Madagascar' },
{ key: 'mw', value: 'mw', flag: 'mw', text: 'Malawi' },
{ key: 'my', value: 'my', flag: 'my', text: 'Malaysia' },
{ key: 'mv', value: 'mv', flag: 'mv', text: 'Maldives' },
{ key: 'ml', value: 'ml', flag: 'ml', text: 'Mali' },
{ key: 'mt', value: 'mt', flag: 'mt', text: 'Malta' },
{ key: 'mh', value: 'mh', flag: 'mh', text: 'Marshall Islands' },
{ key: 'mq', value: 'mq', flag: 'mq', text: 'Martinique' },
{ key: 'mr', value: 'mr', flag: 'mr', text: 'Mauritania' },
{ key: 'mu', value: 'mu', flag: 'mu', text: 'Mauritius' },
{ key: 'yt', value: 'yt', flag: 'yt', text: 'Mayotte' },
{ key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico' },
{ key: 'fm', value: 'fm', flag: 'fm', text: 'Micronesia' },
{ key: 'md', value: 'md', flag: 'md', text: 'Moldova' },
{ key: 'mc', value: 'mc', flag: 'mc', text: 'Monaco' },
{ key: 'mn', value: 'mn', flag: 'mn', text: 'Mongolia' },
{ key: 'me', value: 'me', flag: 'me', text: 'Montenegro' },
{ key: 'ms', value: 'ms', flag: 'ms', text: 'Montserrat' },
{ key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco' },
{ key: 'mz', value: 'mz', flag: 'mz', text: 'Mozambique' },
{ key: 'na', value: 'na', flag: 'na', text: 'Namibia' },
{ key: 'nr', value: 'nr', flag: 'nr', text: 'Nauru' },
{ key: 'np', value: 'np', flag: 'np', text: 'Nepal' },
{ key: 'an', value: 'an', flag: 'an', text: 'Netherlands Antilles' },
{ key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands' },
{ key: 'nc', value: 'nc', flag: 'nc', text: 'New Caledonia' },
{ key: 'pg', value: 'pg', flag: 'pg', text: 'New Guinea' },
{ key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand' },
{ key: 'ni', value: 'ni', flag: 'ni', text: 'Nicaragua' },
{ key: 'ne', value: 'ne', flag: 'ne', text: 'Niger' },
{ key: 'ng', value: 'ng', flag: 'ng', text: 'Nigeria' },
{ key: 'nu', value: 'nu', flag: 'nu', text: 'Niue' },
{ key: 'nf', value: 'nf', flag: 'nf', text: 'Norfolk Island' },
{ key: 'kp', value: 'kp', flag: 'kp', text: 'North Korea' },
{ key: 'mp', value: 'mp', flag: 'mp', text: 'Northern Mariana Islands' },
{ key: 'no', value: 'no', flag: 'no', text: 'Norway' },
{ key: 'om', value: 'om', flag: 'om', text: 'Oman' },
{ key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan' },
{ key: 'pw', value: 'pw', flag: 'pw', text: 'Palau' },
{ key: 'ps', value: 'ps', flag: 'ps', text: 'Palestine' },
{ key: 'pa', value: 'pa', flag: 'pa', text: 'Panama' },
{ key: 'py', value: 'py', flag: 'py', text: 'Paraguay' },
{ key: 'pe', value: 'pe', flag: 'pe', text: 'Peru' },
{ key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines' },
{ key: 'pn', value: 'pn', flag: 'pn', text: 'Pitcairn Islands' },
{ key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
{ key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal' },
{ key: 'pr', value: 'pr', flag: 'pr', text: 'Puerto Rico' },
{ key: 'qa', value: 'qa', flag: 'qa', text: 'Qatar' },
{ key: 're', value: 're', flag: 're', text: 'Reunion' },
{ key: 'ro', value: 'ro', flag: 'ro', text: 'Romania' },
{ key: 'ru', value: 'ru', flag: 'ru', text: 'Russia' },
{ key: 'rw', value: 'rw', flag: 'rw', text: 'Rwanda' },
{ key: 'sh', value: 'sh', flag: 'sh', text: 'Saint Helena' },
{ key: 'kn', value: 'kn', flag: 'kn', text: 'Saint Kitts and Nevis' },
{ key: 'lc', value: 'lc', flag: 'lc', text: 'Saint Lucia' },
{ key: 'pm', value: 'pm', flag: 'pm', text: 'Saint Pierre' },
{ key: 'vc', value: 'vc', flag: 'vc', text: 'Saint Vincent' },
{ key: 'ws', value: 'ws', flag: 'ws', text: 'Samoa' },
{ key: 'sm', value: 'sm', flag: 'sm', text: 'San Marino' },
{ key: 'gs', value: 'gs', flag: 'gs', text: 'Sandwich Islands' },
{ key: 'st', value: 'st', flag: 'st', text: 'Sao Tome' },
{ key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia' },
{ key: 'sn', value: 'sn', flag: 'sn', text: 'Senegal' },
{ key: 'cs', value: 'cs', flag: 'cs', text: 'Serbia' },
{ key: 'rs', value: 'rs', flag: 'rs', text: 'Serbia' },
{ key: 'sc', value: 'sc', flag: 'sc', text: 'Seychelles' },
{ key: 'sl', value: 'sl', flag: 'sl', text: 'Sierra Leone' },
{ key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore' },
{ key: 'sk', value: 'sk', flag: 'sk', text: 'Slovakia' },
{ key: 'si', value: 'si', flag: 'si', text: 'Slovenia' },
{ key: 'sb', value: 'sb', flag: 'sb', text: 'Solomon Islands' },
{ key: 'so', value: 'so', flag: 'so', text: 'Somalia' },
{ key: 'za', value: 'za', flag: 'za', text: 'South Africa' },
{ key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea' },
{ key: 'es', value: 'es', flag: 'es', text: 'Spain' },
{ key: 'lk', value: 'lk', flag: 'lk', text: 'Sri Lanka' },
{ key: 'sd', value: 'sd', flag: 'sd', text: 'Sudan' },
{ key: 'sr', value: 'sr', flag: 'sr', text: 'Suriname' },
{ key: 'sj', value: 'sj', flag: 'sj', text: 'Svalbard' },
{ key: 'sz', value: 'sz', flag: 'sz', text: 'Swaziland' },
{ key: 'se', value: 'se', flag: 'se', text: 'Sweden' },
{ key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' },
{ key: 'sy', value: 'sy', flag: 'sy', text: 'Syria' },
{ key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan' },
{ key: 'tj', value: 'tj', flag: 'tj', text: 'Tajikistan' },
{ key: 'tz', value: 'tz', flag: 'tz', text: 'Tanzania' },
{ key: 'th', value: 'th', flag: 'th', text: 'Thailand' },
{ key: 'tl', value: 'tl', flag: 'tl', text: 'Timorleste' },
{ key: 'tg', value: 'tg', flag: 'tg', text: 'Togo' },
{ key: 'tk', value: 'tk', flag: 'tk', text: 'Tokelau' },
{ key: 'to', value: 'to', flag: 'to', text: 'Tonga' },
{ key: 'tt', value: 'tt', flag: 'tt', text: 'Trinidad' },
{ key: 'tn', value: 'tn', flag: 'tn', text: 'Tunisia' },
{ key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey' },
{ key: 'tm', value: 'tm', flag: 'tm', text: 'Turkmenistan' },
{ key: 'tv', value: 'tv', flag: 'tv', text: 'Tuvalu' },
{ key: 'ug', value: 'ug', flag: 'ug', text: 'Uganda' },
{ key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine' },
{ key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates' },
{ key: 'us', value: 'us', flag: 'us', text: 'United States' },
{ key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay' },
{ key: 'um', value: 'um', flag: 'um', text: 'Us Minor Islands' },
{ key: 'vi', value: 'vi', flag: 'vi', text: 'Us Virgin Islands' },
{ key: 'uz', value: 'uz', flag: 'uz', text: 'Uzbekistan' },
{ key: 'vu', value: 'vu', flag: 'vu', text: 'Vanuatu' },
{ key: 'va', value: 'va', flag: 'va', text: 'Vatican City' },
{ key: 've', value: 've', flag: 've', text: 'Venezuela' },
{ key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnam' },
{ key: 'wf', value: 'wf', flag: 'wf', text: 'Wallis and Futuna' },
{ key: 'eh', value: 'eh', flag: 'eh', text: 'Western Sahara' },
{ key: 'ye', value: 'ye', flag: 'ye', text: 'Yemen' },
{ key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia' },
{ key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe' }]


const currencies = [
    { "BD": "BDT", "BE": "EUR", "BF": "XOF", "BG": "BGN", "BA": "BAM", "BB": "BBD", "WF": "XPF", "BL": "EUR", "BM": "BMD", "BN": "BND", "BO": "BOB", "BH": "BHD", "BI": "BIF", "BJ": "XOF", "BT": "BTN", "JM": "JMD", "BV": "NOK", "BW": "BWP", "WS": "WST", "BQ": "USD", "BR": "BRL", "BS": "BSD", "JE": "GBP", "BY": "BYR", "BZ": "BZD", "RU": "RUB", "RW": "RWF", "RS": "RSD", "TL": "USD", "RE": "EUR", "TM": "TMT", "TJ": "TJS", "RO": "RON", "TK": "NZD", "GW": "XOF", "GU": "USD", "GT": "GTQ", "GS": "GBP", "GR": "EUR", "GQ": "XAF", "GP": "EUR", "JP": "JPY", "GY": "GYD", "GG": "GBP", "GF": "EUR", "GE": "GEL", "GD": "XCD", "GB": "GBP", "GA": "XAF", "SV": "USD", "GN": "GNF", "GM": "GMD", "GL": "DKK", "GI": "GIP", "GH": "GHS", "OM": "OMR", "TN": "TND", "JO": "JOD", "HR": "HRK", "HT": "HTG", "HU": "HUF", "HK": "HKD", "HN": "HNL", "HM": "AUD", "VE": "VEF", "PR": "USD", "PS": "ILS", "PW": "USD", "PT": "EUR", "SJ": "NOK", "PY": "PYG", "IQ": "IQD", "PA": "PAB", "PF": "XPF", "PG": "PGK", "PE": "PEN", "PK": "PKR", "PH": "PHP", "PN": "NZD", "PL": "PLN", "PM": "EUR", "ZM": "ZMK", "EH": "MAD", "EE": "EUR", "EG": "EGP", "ZA": "ZAR", "EC": "USD", "IT": "EUR", "VN": "VND", "SB": "SBD", "ET": "ETB", "SO": "SOS", "ZW": "ZWL", "SA": "SAR", "ES": "EUR", "ER": "ERN", "ME": "EUR", "MD": "MDL", "MG": "MGA", "MF": "EUR", "MA": "MAD", "MC": "EUR", "UZ": "UZS", "MM": "MMK", "ML": "XOF", "MO": "MOP", "MN": "MNT", "MH": "USD", "MK": "MKD", "MU": "MUR", "MT": "EUR", "MW": "MWK", "MV": "MVR", "MQ": "EUR", "MP": "USD", "MS": "XCD", "MR": "MRO", "IM": "GBP", "UG": "UGX", "TZ": "TZS", "MY": "MYR", "MX": "MXN", "IL": "ILS", "FR": "EUR", "IO": "USD", "SH": "SHP", "FI": "EUR", "FJ": "FJD", "FK": "FKP", "FM": "USD", "FO": "DKK", "NI": "NIO", "NL": "EUR", "NO": "NOK", "NA": "NAD", "VU": "VUV", "NC": "XPF", "NE": "XOF", "NF": "AUD", "NG": "NGN", "NZ": "NZD", "NP": "NPR", "NR": "AUD", "NU": "NZD", "CK": "NZD", "XK": "EUR", "CI": "XOF", "CH": "CHF", "CO": "COP", "CN": "CNY", "CM": "XAF", "CL": "CLP", "CC": "AUD", "CA": "CAD", "CG": "XAF", "CF": "XAF", "CD": "CDF", "CZ": "CZK", "CY": "EUR", "CX": "AUD", "CR": "CRC", "CW": "ANG", "CV": "CVE", "CU": "CUP", "SZ": "SZL", "SY": "SYP", "SX": "ANG", "KG": "KGS", "KE": "KES", "SS": "SSP", "SR": "SRD", "KI": "AUD", "KH": "KHR", "KN": "XCD", "KM": "KMF", "ST": "STD", "SK": "EUR", "KR": "KRW", "SI": "EUR", "KP": "KPW", "KW": "KWD", "SN": "XOF", "SM": "EUR", "SL": "SLL", "SC": "SCR", "KZ": "KZT", "KY": "KYD", "SG": "SGD", "SE": "SEK", "SD": "SDG", "DO": "DOP", "DM": "XCD", "DJ": "DJF", "DK": "DKK", "VG": "USD", "DE": "EUR", "YE": "YER", "DZ": "DZD", "US": "USD", "UY": "UYU", "YT": "EUR", "UM": "USD", "LB": "LBP", "LC": "XCD", "LA": "LAK", "TV": "AUD", "TW": "TWD", "TT": "TTD", "TR": "TRY", "LK": "LKR", "LI": "CHF", "LV": "EUR", "TO": "TOP", "LT": "LTL", "LU": "EUR", "LR": "LRD", "LS": "LSL", "TH": "THB", "TF": "EUR", "TG": "XOF", "TD": "XAF", "TC": "USD", "LY": "LYD", "VA": "EUR", "VC": "XCD", "AE": "AED", "AD": "EUR", "AG": "XCD", "AF": "AFN", "AI": "XCD", "VI": "USD", "IS": "ISK", "IR": "IRR", "AM": "AMD", "AL": "ALL", "AO": "AOA", "AQ": "", "AS": "USD", "AR": "ARS", "AU": "AUD", "AT": "EUR", "AW": "AWG", "IN": "INR", "AX": "EUR", "AZ": "AZN", "IE": "EUR", "ID": "IDR", "UA": "UAH", "QA": "QAR", "MZ": "MZN" }
]

const currency = [
    {
        "country": "Afghanistan",
        "currency_code": "AFN"
    },
    {
        "country": "Albania",
        "currency_code": "ALL"
    },
    {
        "country": "Algeria",
        "currency_code": "DZD"
    },
    {
        "country": "American Samoa",
        "currency_code": "USD"
    },
    {
        "country": "Andorra",
        "currency_code": "EUR"
    },
    {
        "country": "Angola",
        "currency_code": "AOA"
    },
    {
        "country": "Anguilla",
        "currency_code": "XCD"
    },
    {
        "country": "Antarctica",
        "currency_code": "XCD"
    },
    {
        "country": "Antigua and Barbuda",
        "currency_code": "XCD"
    },
    {
        "country": "Argentina",
        "currency_code": "ARS"
    },
    {
        "country": "Armenia",
        "currency_code": "AMD"
    },
    {
        "country": "Aruba",
        "currency_code": "AWG"
    },
    {
        "country": "Australia",
        "currency_code": "AUD"
    },
    {
        "country": "Austria",
        "currency_code": "EUR"
    },
    {
        "country": "Azerbaijan",
        "currency_code": "AZN"
    },
    {
        "country": "Bahamas",
        "currency_code": "BSD"
    },
    {
        "country": "Bahrain",
        "currency_code": "BHD"
    },
    {
        "country": "Bangladesh",
        "currency_code": "BDT"
    },
    {
        "country": "Barbados",
        "currency_code": "BBD"
    },
    {
        "country": "Belarus",
        "currency_code": "BYR"
    },
    {
        "country": "Belgium",
        "currency_code": "EUR"
    },
    {
        "country": "Belize",
        "currency_code": "BZD"
    },
    {
        "country": "Benin",
        "currency_code": "XOF"
    },
    {
        "country": "Bermuda",
        "currency_code": "BMD"
    },
    {
        "country": "Bhutan",
        "currency_code": "BTN"
    },
    {
        "country": "Bolivia",
        "currency_code": "BOB"
    },
    {
        "country": "Bosnia and Herzegovina",
        "currency_code": "BAM"
    },
    {
        "country": "Botswana",
        "currency_code": "BWP"
    },
    {
        "country": "Bouvet Island",
        "currency_code": "NOK"
    },
    {
        "country": "Brazil",
        "currency_code": "BRL"
    },
    {
        "country": "British Indian Ocean Territory",
        "currency_code": "USD"
    },
    {
        "country": "Brunei",
        "currency_code": "BND"
    },
    {
        "country": "Bulgaria",
        "currency_code": "BGN"
    },
    {
        "country": "Burkina Faso",
        "currency_code": "XOF"
    },
    {
        "country": "Burundi",
        "currency_code": "BIF"
    },
    {
        "country": "Cambodia",
        "currency_code": "KHR"
    },
    {
        "country": "Cameroon",
        "currency_code": "XAF"
    },
    {
        "country": "Canada",
        "currency_code": "CAD"
    },
    {
        "country": "Cape Verde",
        "currency_code": "CVE"
    },
    {
        "country": "Cayman Islands",
        "currency_code": "KYD"
    },
    {
        "country": "Central African Republic",
        "currency_code": "XAF"
    },
    {
        "country": "Chad",
        "currency_code": "XAF"
    },
    {
        "country": "Chile",
        "currency_code": "CLP"
    },
    {
        "country": "China",
        "currency_code": "CNY"
    },
    {
        "country": "Christmas Island",
        "currency_code": "AUD"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "currency_code": "AUD"
    },
    {
        "country": "Colombia",
        "currency_code": "COP"
    },
    {
        "country": "Comoros",
        "currency_code": "KMF"
    },
    {
        "country": "Congo",
        "currency_code": "XAF"
    },
    {
        "country": "Cook Islands",
        "currency_code": "NZD"
    },
    {
        "country": "Costa Rica",
        "currency_code": "CRC"
    },
    {
        "country": "Croatia",
        "currency_code": "HRK"
    },
    {
        "country": "Cuba",
        "currency_code": "CUP"
    },
    {
        "country": "Cyprus",
        "currency_code": "EUR"
    },
    {
        "country": "Czech Republic",
        "currency_code": "CZK"
    },
    {
        "country": "Denmark",
        "currency_code": "DKK"
    },
    {
        "country": "Djibouti",
        "currency_code": "DJF"
    },
    {
        "country": "Dominica",
        "currency_code": "XCD"
    },
    {
        "country": "Dominican Republic",
        "currency_code": "DOP"
    },
    {
        "country": "East Timor",
        "currency_code": "USD"
    },
    {
        "country": "Ecuador",
        "currency_code": "ECS"
    },
    {
        "country": "Egypt",
        "currency_code": "EGP"
    },
    {
        "country": "El Salvador",
        "currency_code": "SVC"
    },
    {
        "country": "England",
        "currency_code": "GBP"
    },
    {
        "country": "Equatorial Guinea",
        "currency_code": "XAF"
    },
    {
        "country": "Eritrea",
        "currency_code": "ERN"
    },
    {
        "country": "Estonia",
        "currency_code": "EUR"
    },
    {
        "country": "Ethiopia",
        "currency_code": "ETB"
    },
    {
        "country": "Falkland Islands",
        "currency_code": "FKP"
    },
    {
        "country": "Faroe Islands",
        "currency_code": "DKK"
    },
    {
        "country": "Fiji Islands",
        "currency_code": "FJD"
    },
    {
        "country": "Finland",
        "currency_code": "EUR"
    },
    {
        "country": "France",
        "currency_code": "EUR"
    },
    {
        "country": "French Guiana",
        "currency_code": "EUR"
    },
    {
        "country": "French Polynesia",
        "currency_code": "XPF"
    },
    {
        "country": "French Southern territories",
        "currency_code": "EUR"
    },
    {
        "country": "Gabon",
        "currency_code": "XAF"
    },
    {
        "country": "Gambia",
        "currency_code": "GMD"
    },
    {
        "country": "Georgia",
        "currency_code": "GEL"
    },
    {
        "country": "Germany",
        "currency_code": "EUR"
    },
    {
        "country": "Ghana",
        "currency_code": "GHS"
    },
    {
        "country": "Gibraltar",
        "currency_code": "GIP"
    },
    {
        "country": "Greece",
        "currency_code": "EUR"
    },
    {
        "country": "Greenland",
        "currency_code": "DKK"
    },
    {
        "country": "Grenada",
        "currency_code": "XCD"
    },
    {
        "country": "Guadeloupe",
        "currency_code": "EUR"
    },
    {
        "country": "Guam",
        "currency_code": "USD"
    },
    {
        "country": "Guatemala",
        "currency_code": "QTQ"
    },
    {
        "country": "Guinea",
        "currency_code": "GNF"
    },
    {
        "country": "Guinea-Bissau",
        "currency_code": "CFA"
    },
    {
        "country": "Guyana",
        "currency_code": "GYD"
    },
    {
        "country": "Haiti",
        "currency_code": "HTG"
    },
    {
        "country": "Heard Island and McDonald Islands",
        "currency_code": "AUD"
    },
    {
        "country": "Holy See (Vatican City State)",
        "currency_code": "EUR"
    },
    {
        "country": "Honduras",
        "currency_code": "HNL"
    },
    {
        "country": "Hong Kong",
        "currency_code": "HKD"
    },
    {
        "country": "Hungary",
        "currency_code": "HUF"
    },
    {
        "country": "Iceland",
        "currency_code": "ISK"
    },
    {
        "country": "India",
        "currency_code": "INR"
    },
    {
        "country": "Indonesia",
        "currency_code": "IDR"
    },
    {
        "country": "Iran",
        "currency_code": "IRR"
    },
    {
        "country": "Iraq",
        "currency_code": "IQD"
    },
    {
        "country": "Ireland",
        "currency_code": "EUR"
    },
    {
        "country": "Israel",
        "currency_code": "ILS"
    },
    {
        "country": "Italy",
        "currency_code": "EUR"
    },
    {
        "country": "Ivory Coast",
        "currency_code": "XOF"
    },
    {
        "country": "Jamaica",
        "currency_code": "JMD"
    },
    {
        "country": "Japan",
        "currency_code": "JPY"
    },
    {
        "country": "Jordan",
        "currency_code": "JOD"
    },
    {
        "country": "Kazakhstan",
        "currency_code": "KZT"
    },
    {
        "country": "Kenya",
        "currency_code": "KES"
    },
    {
        "country": "Kiribati",
        "currency_code": "AUD"
    },
    {
        "country": "Kuwait",
        "currency_code": "KWD"
    },
    {
        "country": "Kyrgyzstan",
        "currency_code": "KGS"
    },
    {
        "country": "Laos",
        "currency_code": "LAK"
    },
    {
        "country": "Latvia",
        "currency_code": "LVL"
    },
    {
        "country": "Lebanon",
        "currency_code": "LBP"
    },
    {
        "country": "Lesotho",
        "currency_code": "LSL"
    },
    {
        "country": "Liberia",
        "currency_code": "LRD"
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "currency_code": "LYD"
    },
    {
        "country": "Liechtenstein",
        "currency_code": "CHF"
    },
    {
        "country": "Lithuania",
        "currency_code": "LTL"
    },
    {
        "country": "Luxembourg",
        "currency_code": "EUR"
    },
    {
        "country": "Macao",
        "currency_code": "MOP"
    },
    {
        "country": "North Macedonia",
        "currency_code": "MKD"
    },
    {
        "country": "Madagascar",
        "currency_code": "MGF"
    },
    {
        "country": "Malawi",
        "currency_code": "MWK"
    },
    {
        "country": "Malaysia",
        "currency_code": "MYR"
    },
    {
        "country": "Maldives",
        "currency_code": "MVR"
    },
    {
        "country": "Mali",
        "currency_code": "XOF"
    },
    {
        "country": "Malta",
        "currency_code": "EUR"
    },
    {
        "country": "Marshall Islands",
        "currency_code": "USD"
    },
    {
        "country": "Martinique",
        "currency_code": "EUR"
    },
    {
        "country": "Mauritania",
        "currency_code": "MRO"
    },
    {
        "country": "Mauritius",
        "currency_code": "MUR"
    },
    {
        "country": "Mayotte",
        "currency_code": "EUR"
    },
    {
        "country": "Mexico",
        "currency_code": "MXN"
    },
    {
        "country": "Micronesia, Federated States of",
        "currency_code": "USD"
    },
    {
        "country": "Moldova",
        "currency_code": "MDL"
    },
    {
        "country": "Monaco",
        "currency_code": "EUR"
    },
    {
        "country": "Mongolia",
        "currency_code": "MNT"
    },
    {
        "country": "Montserrat",
        "currency_code": "XCD"
    },
    {
        "country": "Morocco",
        "currency_code": "MAD"
    },
    {
        "country": "Mozambique",
        "currency_code": "MZN"
    },
    {
        "country": "Myanmar",
        "currency_code": "MMR"
    },
    {
        "country": "Namibia",
        "currency_code": "NAD"
    },
    {
        "country": "Nauru",
        "currency_code": "AUD"
    },
    {
        "country": "Nepal",
        "currency_code": "NPR"
    },
    {
        "country": "Netherlands",
        "currency_code": "EUR"
    },
    {
        "country": "Netherlands Antilles",
        "currency_code": "ANG"
    },
    {
        "country": "New Caledonia",
        "currency_code": "XPF"
    },
    {
        "country": "New Zealand",
        "currency_code": "NZD"
    },
    {
        "country": "Nicaragua",
        "currency_code": "NIO"
    },
    {
        "country": "Niger",
        "currency_code": "XOF"
    },
    {
        "country": "Nigeria",
        "currency_code": "NGN"
    },
    {
        "country": "Niue",
        "currency_code": "NZD"
    },
    {
        "country": "Norfolk Island",
        "currency_code": "AUD"
    },
    {
        "country": "North Korea",
        "currency_code": "KPW"
    },
    {
        "country": "Northern Ireland",
        "currency_code": "GBP"
    },
    {
        "country": "Northern Mariana Islands",
        "currency_code": "USD"
    },
    {
        "country": "Norway",
        "currency_code": "NOK"
    },
    {
        "country": "Oman",
        "currency_code": "OMR"
    },
    {
        "country": "Pakistan",
        "currency_code": "PKR"
    },
    {
        "country": "Palau",
        "currency_code": "USD"
    },
    {
        "country": "Palestine",
        "currency_code": null
    },
    {
        "country": "Panama",
        "currency_code": "PAB"
    },
    {
        "country": "Papua New Guinea",
        "currency_code": "PGK"
    },
    {
        "country": "Paraguay",
        "currency_code": "PYG"
    },
    {
        "country": "Peru",
        "currency_code": "PEN"
    },
    {
        "country": "Philippines",
        "currency_code": "PHP"
    },
    {
        "country": "Pitcairn",
        "currency_code": "NZD"
    },
    {
        "country": "Poland",
        "currency_code": "PLN"
    },
    {
        "country": "Portugal",
        "currency_code": "EUR"
    },
    {
        "country": "Puerto Rico",
        "currency_code": "USD"
    },
    {
        "country": "Qatar",
        "currency_code": "QAR"
    },
    {
        "country": "Reunion",
        "currency_code": "EUR"
    },
    {
        "country": "Romania",
        "currency_code": "RON"
    },
    {
        "country": "Russian Federation",
        "currency_code": "RUB"
    },
    {
        "country": "Rwanda",
        "currency_code": "RWF"
    },
    {
        "country": "Saint Helena",
        "currency_code": "SHP"
    },
    {
        "country": "Saint Kitts and Nevis",
        "currency_code": "XCD"
    },
    {
        "country": "Saint Lucia",
        "currency_code": "XCD"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "currency_code": "EUR"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "currency_code": "XCD"
    },
    {
        "country": "Samoa",
        "currency_code": "WST"
    },
    {
        "country": "San Marino",
        "currency_code": "EUR"
    },
    {
        "country": "Sao Tome and Principe",
        "currency_code": "STD"
    },
    {
        "country": "Saudi Arabia",
        "currency_code": "SAR"
    },
    {
        "country": "Scotland",
        "currency_code": "GBP"
    },
    {
        "country": "Senegal",
        "currency_code": "XOF"
    },
    {
        "country": "Serbia",
        "currency_code": "RSD"
    },
    {
        "country": "Seychelles",
        "currency_code": "SCR"
    },
    {
        "country": "Sierra Leone",
        "currency_code": "SLL"
    },
    {
        "country": "Singapore",
        "currency_code": "SGD"
    },
    {
        "country": "Slovakia",
        "currency_code": "EUR"
    },
    {
        "country": "Slovenia",
        "currency_code": "EUR"
    },
    {
        "country": "Solomon Islands",
        "currency_code": "SBD"
    },
    {
        "country": "Somalia",
        "currency_code": "SOS"
    },
    {
        "country": "South Africa",
        "currency_code": "ZAR"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "currency_code": "GBP"
    },
    {
        "country": "South Korea",
        "currency_code": "KRW"
    },
    {
        "country": "South Sudan",
        "currency_code": "SSP"
    },
    {
        "country": "Spain",
        "currency_code": "EUR"
    },
    {
        "country": "SriLanka",
        "currency_code": "LKR"
    },
    {
        "country": "Sudan",
        "currency_code": "SDG"
    },
    {
        "country": "Suriname",
        "currency_code": "SRD"
    },
    {
        "country": "Svalbard and Jan Mayen",
        "currency_code": "NOK"
    },
    {
        "country": "Swaziland",
        "currency_code": "SZL"
    },
    {
        "country": "Sweden",
        "currency_code": "SEK"
    },
    {
        "country": "Switzerland",
        "currency_code": "CHF"
    },
    {
        "country": "Syria",
        "currency_code": "SYP"
    },
    {
        "country": "Tajikistan",
        "currency_code": "TJS"
    },
    {
        "country": "Tanzania",
        "currency_code": "TZS"
    },
    {
        "country": "Thailand",
        "currency_code": "THB"
    },
    {
        "country": "The Democratic Republic of Congo",
        "currency_code": "CDF"
    },
    {
        "country": "Togo",
        "currency_code": "XOF"
    },
    {
        "country": "Tokelau",
        "currency_code": "NZD"
    },
    {
        "country": "Tonga",
        "currency_code": "TOP"
    },
    {
        "country": "Trinidad and Tobago",
        "currency_code": "TTD"
    },
    {
        "country": "Tunisia",
        "currency_code": "TND"
    },
    {
        "country": "Turkey",
        "currency_code": "TRY"
    },
    {
        "country": "Turkmenistan",
        "currency_code": "TMT"
    },
    {
        "country": "Turks and Caicos Islands",
        "currency_code": "USD"
    },
    {
        "country": "Tuvalu",
        "currency_code": "AUD"
    },
    {
        "country": "Uganda",
        "currency_code": "UGX"
    },
    {
        "country": "Ukraine",
        "currency_code": "UAH"
    },
    {
        "country": "United Arab Emirates",
        "currency_code": "AED"
    },
    {
        "country": "United Kingdom",
        "currency_code": "GBP"
    },
    {
        "country": "United States",
        "currency_code": "USD"
    },
    {
        "country": "United States Minor Outlying Islands",
        "currency_code": "USD"
    },
    {
        "country": "Uruguay",
        "currency_code": "UYU"
    },
    {
        "country": "Uzbekistan",
        "currency_code": "UZS"
    },
    {
        "country": "Vanuatu",
        "currency_code": "VUV"
    },
    {
        "country": "Venezuela",
        "currency_code": "VEF"
    },
    {
        "country": "Vietnam",
        "currency_code": "VND"
    },
    {
        "country": "Virgin Islands, British",
        "currency_code": "USD"
    },
    {
        "country": "Virgin Islands, U.S.",
        "currency_code": "USD"
    },
    {
        "country": "Wales",
        "currency_code": "GBP"
    },
    {
        "country": "Wallis and Futuna",
        "currency_code": "XPF"
    },
    {
        "country": "Western Sahara",
        "currency_code": "MAD"
    },
    {
        "country": "Yemen",
        "currency_code": "YER"
    },
    {
        "country": "Zambia",
        "currency_code": "ZMW"
    },
    {
        "country": "Zimbabwe",
        "currency_code": "ZWD"
    }
]
export { countriesAndCode, currencies, currency }