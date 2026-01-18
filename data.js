const enrollmentData = [
  {
    "state": "West Bengal",
    "district": "24 Paraganas North",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 540,
    "age_5_17": 399,
    "age_18_greater": 111
  },
  {
    "state": "West Bengal",
    "district": "24 Paraganas North",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2637,
    "age_5_17": 2059,
    "age_18_greater": 401
  },
  {
    "state": "West Bengal",
    "district": "24 Paraganas South",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 364,
    "age_5_17": 104,
    "age_18_greater": 22
  },
  {
    "state": "Odisha",
    "district": "ANGUL",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "ANUGUL",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "ANUGUL",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "ANUGUL",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "ANUGUL",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 523,
    "age_5_17": 131,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1022,
    "age_5_17": 189,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 236,
    "age_5_17": 71,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 574,
    "age_5_17": 101,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 286,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 577,
    "age_5_17": 121,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 92,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Adilabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 344,
    "age_5_17": 56,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Agar Malwa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 392,
    "age_5_17": 186,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Agar Malwa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 275,
    "age_5_17": 65,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Agar Malwa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 868,
    "age_5_17": 86,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Agar Malwa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 552,
    "age_5_17": 84,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 280,
    "age_5_17": 494,
    "age_18_greater": 132
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 832,
    "age_5_17": 568,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1550,
    "age_5_17": 967,
    "age_18_greater": 60
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1775,
    "age_5_17": 1860,
    "age_18_greater": 154
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2371,
    "age_5_17": 2123,
    "age_18_greater": 75
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3078,
    "age_5_17": 2629,
    "age_18_greater": 57
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1652,
    "age_5_17": 1236,
    "age_18_greater": 64
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2709,
    "age_5_17": 1766,
    "age_18_greater": 62
  },
  {
    "state": "Uttar Pradesh",
    "district": "Agra",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2067,
    "age_5_17": 1048,
    "age_18_greater": 264
  },
  {
    "state": "Maharashtra",
    "district": "Ahilyanagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 12,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 685,
    "age_5_17": 480,
    "age_18_greater": 60
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2714,
    "age_5_17": 1590,
    "age_18_greater": 180
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 231,
    "age_5_17": 115,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 91,
    "age_5_17": 36,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 259,
    "age_5_17": 70,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Ahmadabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 125,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Ahmadnagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 71,
    "age_5_17": 15,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Ahmadnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2167,
    "age_5_17": 1260,
    "age_18_greater": 33
  },
  {
    "state": "Maharashtra",
    "district": "Ahmadnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1334,
    "age_5_17": 331,
    "age_18_greater": 22
  },
  {
    "state": "Maharashtra",
    "district": "Ahmadnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1706,
    "age_5_17": 383,
    "age_18_greater": 58
  },
  {
    "state": "Maharashtra",
    "district": "Ahmadnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4091,
    "age_5_17": 349,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Ahmed Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 56,
    "age_5_17": 26,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Ahmed Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 43,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Ahmed Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 53,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Ahmed Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 125,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 77,
    "age_5_17": 26,
    "age_18_greater": 19
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 756,
    "age_5_17": 347,
    "age_18_greater": 97
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 397,
    "age_5_17": 389,
    "age_18_greater": 36
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3946,
    "age_5_17": 2033,
    "age_18_greater": 72
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1587,
    "age_5_17": 744,
    "age_18_greater": 77
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3702,
    "age_5_17": 1499,
    "age_18_greater": 168
  },
  {
    "state": "Gujarat",
    "district": "Ahmedabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2379,
    "age_5_17": 641,
    "age_18_greater": 138
  },
  {
    "state": "Maharashtra",
    "district": "Ahmednagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 182,
    "age_5_17": 158,
    "age_18_greater": 28
  },
  {
    "state": "Mizoram",
    "district": "Aizawl",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 262,
    "age_5_17": 92,
    "age_18_greater": 11
  },
  {
    "state": "Mizoram",
    "district": "Aizawl",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 198,
    "age_5_17": 85,
    "age_18_greater": 45
  },
  {
    "state": "Mizoram",
    "district": "Aizawl",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 237,
    "age_5_17": 51,
    "age_18_greater": 4
  },
  {
    "state": "Mizoram",
    "district": "Aizawl",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 65,
    "age_5_17": 8,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1007,
    "age_5_17": 196,
    "age_18_greater": 36
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 673,
    "age_5_17": 241,
    "age_18_greater": 18
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3125,
    "age_5_17": 980,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1146,
    "age_5_17": 404,
    "age_18_greater": 5
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1972,
    "age_5_17": 550,
    "age_18_greater": 66
  },
  {
    "state": "Rajasthan",
    "district": "Ajmer",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1277,
    "age_5_17": 416,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Akola",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 390,
    "age_5_17": 205,
    "age_18_greater": 42
  },
  {
    "state": "Maharashtra",
    "district": "Akola",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1261,
    "age_5_17": 241,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Akola",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 688,
    "age_5_17": 72,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Akola",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 928,
    "age_5_17": 122,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Akola",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 699,
    "age_5_17": 53,
    "age_18_greater": 1
  },
  {
    "state": "Kerala",
    "district": "Alappuzha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 713,
    "age_5_17": 275,
    "age_18_greater": 5
  },
  {
    "state": "Kerala",
    "district": "Alappuzha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 614,
    "age_5_17": 230,
    "age_18_greater": 27
  },
  {
    "state": "Kerala",
    "district": "Alappuzha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 753,
    "age_5_17": 253,
    "age_18_greater": 57
  },
  {
    "state": "Kerala",
    "district": "Alappuzha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 456,
    "age_5_17": 134,
    "age_18_greater": 42
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 226,
    "age_5_17": 353,
    "age_18_greater": 44
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1066,
    "age_5_17": 643,
    "age_18_greater": 58
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1564,
    "age_5_17": 1159,
    "age_18_greater": 103
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1247,
    "age_5_17": 1291,
    "age_18_greater": 97
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3024,
    "age_5_17": 3256,
    "age_18_greater": 128
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2267,
    "age_5_17": 2037,
    "age_18_greater": 51
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1213,
    "age_5_17": 983,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1632,
    "age_5_17": 1280,
    "age_18_greater": 50
  },
  {
    "state": "Uttar Pradesh",
    "district": "Aligarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1591,
    "age_5_17": 774,
    "age_18_greater": 18
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 38,
    "age_5_17": 63,
    "age_18_greater": 27
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 42,
    "age_5_17": 112,
    "age_18_greater": 43
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 207,
    "age_5_17": 352,
    "age_18_greater": 74
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 646,
    "age_5_17": 840,
    "age_18_greater": 145
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 240,
    "age_5_17": 120,
    "age_18_greater": 17
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 108,
    "age_5_17": 82,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 136,
    "age_5_17": 93,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Alipurduar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 104,
    "age_5_17": 52,
    "age_18_greater": 127
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 134,
    "age_5_17": 105,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 66,
    "age_5_17": 42,
    "age_18_greater": 25
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 376,
    "age_5_17": 586,
    "age_18_greater": 84
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 498,
    "age_5_17": 884,
    "age_18_greater": 93
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 481,
    "age_5_17": 729,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 514,
    "age_5_17": 313,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 621,
    "age_5_17": 421,
    "age_18_greater": 24
  },
  {
    "state": "Madhya Pradesh",
    "district": "Alirajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 561,
    "age_5_17": 310,
    "age_18_greater": 113
  },
  {
    "state": "Uttar Pradesh",
    "district": "Allahabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2828,
    "age_5_17": 2582,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Allahabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1392,
    "age_5_17": 1289,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Allahabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1794,
    "age_5_17": 1421,
    "age_18_greater": 24
  },
  {
    "state": "Uttar Pradesh",
    "district": "Allahabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1240,
    "age_5_17": 654,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Alluri Sitharama Raju",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 332,
    "age_5_17": 47,
    "age_18_greater": 8
  },
  {
    "state": "Andhra Pradesh",
    "district": "Alluri Sitharama Raju",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 265,
    "age_5_17": 26,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Alluri Sitharama Raju",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 280,
    "age_5_17": 32,
    "age_18_greater": 14
  },
  {
    "state": "Andhra Pradesh",
    "district": "Alluri Sitharama Raju",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 228,
    "age_5_17": 11,
    "age_18_greater": 8
  },
  {
    "state": "Uttarakhand",
    "district": "Almora",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 355,
    "age_5_17": 45,
    "age_18_greater": 3
  },
  {
    "state": "Uttarakhand",
    "district": "Almora",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 262,
    "age_5_17": 33,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Almora",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 358,
    "age_5_17": 34,
    "age_18_greater": 3
  },
  {
    "state": "Uttarakhand",
    "district": "Almora",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 253,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 784,
    "age_5_17": 209,
    "age_18_greater": 39
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 610,
    "age_5_17": 179,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 670,
    "age_5_17": 240,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1837,
    "age_5_17": 879,
    "age_18_greater": 41
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5235,
    "age_5_17": 2311,
    "age_18_greater": 41
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2103,
    "age_5_17": 1129,
    "age_18_greater": 38
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2676,
    "age_5_17": 1462,
    "age_18_greater": 88
  },
  {
    "state": "Rajasthan",
    "district": "Alwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1849,
    "age_5_17": 905,
    "age_18_greater": 35
  },
  {
    "state": "Haryana",
    "district": "Ambala",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 245,
    "age_5_17": 23,
    "age_18_greater": 13
  },
  {
    "state": "Haryana",
    "district": "Ambala",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 699,
    "age_5_17": 40,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Ambala",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 614,
    "age_5_17": 22,
    "age_18_greater": 8
  },
  {
    "state": "Haryana",
    "district": "Ambala",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 974,
    "age_5_17": 30,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Ambala",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 531,
    "age_5_17": 7,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ambedkar Nagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 159,
    "age_5_17": 143,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ambedkar Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1387,
    "age_5_17": 1778,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ambedkar Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 782,
    "age_5_17": 845,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ambedkar Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 923,
    "age_5_17": 855,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ambedkar Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 605,
    "age_5_17": 475,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1436,
    "age_5_17": 1468,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 769,
    "age_5_17": 722,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 938,
    "age_5_17": 606,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amethi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 747,
    "age_5_17": 455,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 280,
    "age_5_17": 77,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 523,
    "age_5_17": 148,
    "age_18_greater": 13
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1841,
    "age_5_17": 431,
    "age_18_greater": 19
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 929,
    "age_5_17": 127,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1080,
    "age_5_17": 136,
    "age_18_greater": 44
  },
  {
    "state": "Maharashtra",
    "district": "Amravati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1130,
    "age_5_17": 106,
    "age_18_greater": 2
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 174,
    "age_5_17": 21,
    "age_18_greater": 43
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 558,
    "age_5_17": 151,
    "age_18_greater": 60
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 893,
    "age_5_17": 226,
    "age_18_greater": 35
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 291,
    "age_5_17": 39,
    "age_18_greater": 41
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 778,
    "age_5_17": 88,
    "age_18_greater": 40
  },
  {
    "state": "Gujarat",
    "district": "Amreli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 766,
    "age_5_17": 62,
    "age_18_greater": 27
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 14,
    "age_5_17": 15,
    "age_18_greater": 20
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 959,
    "age_5_17": 209,
    "age_18_greater": 54
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 664,
    "age_5_17": 284,
    "age_18_greater": 26
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1293,
    "age_5_17": 400,
    "age_18_greater": 24
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1862,
    "age_5_17": 337,
    "age_18_greater": 21
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 866,
    "age_5_17": 165,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1315,
    "age_5_17": 271,
    "age_18_greater": 40
  },
  {
    "state": "Punjab",
    "district": "Amritsar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 660,
    "age_5_17": 94,
    "age_18_greater": 48
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 434,
    "age_5_17": 135,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 329,
    "age_5_17": 240,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1460,
    "age_5_17": 720,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 921,
    "age_5_17": 437,
    "age_18_greater": 9
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1364,
    "age_5_17": 526,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Amroha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1097,
    "age_5_17": 418,
    "age_18_greater": 16
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anakapalli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 146,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anakapalli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 86,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anakapalli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 169,
    "age_5_17": 4,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anakapalli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 122,
    "age_5_17": 0,
    "age_18_greater": 4
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 136,
    "age_5_17": 30,
    "age_18_greater": 75
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 111,
    "age_5_17": 22,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 148,
    "age_5_17": 57,
    "age_18_greater": 24
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 802,
    "age_5_17": 192,
    "age_18_greater": 115
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1545,
    "age_5_17": 249,
    "age_18_greater": 29
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 555,
    "age_5_17": 65,
    "age_18_greater": 82
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1315,
    "age_5_17": 131,
    "age_18_greater": 75
  },
  {
    "state": "Gujarat",
    "district": "Anand",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1004,
    "age_5_17": 82,
    "age_18_greater": 126
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anantapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1266,
    "age_5_17": 122,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anantapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 979,
    "age_5_17": 80,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anantapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1232,
    "age_5_17": 88,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Anantapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 612,
    "age_5_17": 36,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 521,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 418,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 476,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 428,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapuramu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 917,
    "age_5_17": 52,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapuramu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 669,
    "age_5_17": 42,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapuramu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 829,
    "age_5_17": 41,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Ananthapuramu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 603,
    "age_5_17": 24,
    "age_18_greater": 2
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 860,
    "age_5_17": 103,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 646,
    "age_5_17": 83,
    "age_18_greater": 3
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 836,
    "age_5_17": 102,
    "age_18_greater": 25
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Anantnag",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 633,
    "age_5_17": 52,
    "age_18_greater": 6
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "Andamans",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 23,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "Andamans",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 15,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "Andamans",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 13,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "Andamans",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 19,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Angul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1188,
    "age_5_17": 199,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Angul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 371,
    "age_5_17": 72,
    "age_18_greater": 8
  },
  {
    "state": "Odisha",
    "district": "Angul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 460,
    "age_5_17": 70,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Angul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 563,
    "age_5_17": 72,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Anjaw",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Anjaw",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Anjaw",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 4,
    "age_18_greater": 3
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Anjaw",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Annamayya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 244,
    "age_5_17": 14,
    "age_18_greater": 48
  },
  {
    "state": "Andhra Pradesh",
    "district": "Annamayya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 164,
    "age_5_17": 15,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "Annamayya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 250,
    "age_5_17": 11,
    "age_18_greater": 30
  },
  {
    "state": "Andhra Pradesh",
    "district": "Annamayya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 210,
    "age_5_17": 8,
    "age_18_greater": 21
  },
  {
    "state": "Odisha",
    "district": "Anugal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Anugal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 63,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 11,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 8,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 23,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 9,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 20,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Anugul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Anuppur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 542,
    "age_5_17": 117,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Anuppur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 527,
    "age_5_17": 67,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Anuppur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1016,
    "age_5_17": 84,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Anuppur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 779,
    "age_5_17": 81,
    "age_18_greater": 1
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 850,
    "age_5_17": 787,
    "age_18_greater": 39
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 166,
    "age_5_17": 108,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2770,
    "age_5_17": 1398,
    "age_18_greater": 17
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2809,
    "age_5_17": 1382,
    "age_18_greater": 24
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1602,
    "age_5_17": 986,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Araria",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1742,
    "age_5_17": 854,
    "age_18_greater": 17
  },
  {
    "state": "Tamil Nadu",
    "district": "Ariyalur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 657,
    "age_5_17": 97,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Ariyalur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 392,
    "age_5_17": 90,
    "age_18_greater": 24
  },
  {
    "state": "Tamil Nadu",
    "district": "Ariyalur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 550,
    "age_5_17": 180,
    "age_18_greater": 39
  },
  {
    "state": "Tamil Nadu",
    "district": "Ariyalur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 328,
    "age_5_17": 38,
    "age_18_greater": 17
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 144,
    "age_5_17": 32,
    "age_18_greater": 30
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 476,
    "age_5_17": 103,
    "age_18_greater": 22
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 490,
    "age_5_17": 98,
    "age_18_greater": 4
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 152,
    "age_5_17": 18,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 308,
    "age_5_17": 47,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Arvalli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 382,
    "age_5_17": 24,
    "age_18_greater": 24
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 43,
    "age_5_17": 156,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 60,
    "age_5_17": 432,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 215,
    "age_5_17": 866,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 183,
    "age_5_17": 571,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 177,
    "age_5_17": 573,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Arwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 134,
    "age_5_17": 422,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 342,
    "age_5_17": 139,
    "age_18_greater": 50
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 161,
    "age_5_17": 40,
    "age_18_greater": 19
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1537,
    "age_5_17": 604,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 326,
    "age_5_17": 116,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 754,
    "age_5_17": 209,
    "age_18_greater": 55
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashok Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 606,
    "age_5_17": 177,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashoknagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 437,
    "age_5_17": 408,
    "age_18_greater": 23
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ashoknagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1157,
    "age_5_17": 915,
    "age_18_greater": 71
  },
  {
    "state": "Uttar Pradesh",
    "district": "Auraiya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 840,
    "age_5_17": 649,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Auraiya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 372,
    "age_5_17": 233,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Auraiya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 618,
    "age_5_17": 371,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Auraiya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 339,
    "age_5_17": 294,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 196,
    "age_5_17": 103,
    "age_18_greater": 46
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 584,
    "age_5_17": 154,
    "age_18_greater": 53
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2262,
    "age_5_17": 1549,
    "age_18_greater": 24
  },
  {
    "state": "Bihar",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 885,
    "age_5_17": 2232,
    "age_18_greater": 8
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3457,
    "age_5_17": 1519,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 645,
    "age_5_17": 1603,
    "age_18_greater": 21
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1663,
    "age_5_17": 477,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 816,
    "age_5_17": 2028,
    "age_18_greater": 8
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2354,
    "age_5_17": 689,
    "age_18_greater": 16
  },
  {
    "state": "Bihar",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 655,
    "age_5_17": 1233,
    "age_18_greater": 36
  },
  {
    "state": "Maharashtra",
    "district": "Aurangabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1858,
    "age_5_17": 383,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(BH)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(BH)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(BH)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(bh)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 22,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(bh)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(bh)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 10,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Aurangabad(bh)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 38,
    "age_5_17": 32,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 262,
    "age_5_17": 324,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 298,
    "age_5_17": 111,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 136,
    "age_5_17": 60,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 193,
    "age_5_17": 68,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ayodhya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 100,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 231,
    "age_5_17": 332,
    "age_18_greater": 26
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 109,
    "age_5_17": 333,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1034,
    "age_5_17": 2456,
    "age_18_greater": 77
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1883,
    "age_5_17": 4129,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1131,
    "age_5_17": 2428,
    "age_18_greater": 51
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1325,
    "age_5_17": 2557,
    "age_18_greater": 64
  },
  {
    "state": "Uttar Pradesh",
    "district": "Azamgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1004,
    "age_5_17": 1342,
    "age_18_greater": 35
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Badgam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 473,
    "age_5_17": 85,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Badgam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 319,
    "age_5_17": 42,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Badgam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Badgam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 425,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Badgam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 457,
    "age_5_17": 22,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2055,
    "age_5_17": 384,
    "age_18_greater": 34
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1080,
    "age_5_17": 189,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1289,
    "age_5_17": 192,
    "age_18_greater": 30
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1734,
    "age_5_17": 135,
    "age_18_greater": 13
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 77,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 51,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 53,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bagalkot *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 37,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Bageshwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 219,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Bageshwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 143,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Bageshwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 217,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Bageshwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 96,
    "age_5_17": 13,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 311,
    "age_5_17": 224,
    "age_18_greater": 18
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 61,
    "age_5_17": 171,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 118,
    "age_5_17": 280,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1096,
    "age_5_17": 1184,
    "age_18_greater": 34
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 613,
    "age_5_17": 491,
    "age_18_greater": 28
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 738,
    "age_5_17": 538,
    "age_18_greater": 43
  },
  {
    "state": "Uttar Pradesh",
    "district": "Baghpat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 545,
    "age_5_17": 315,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bagpat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 69,
    "age_5_17": 241,
    "age_18_greater": 61
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1748,
    "age_5_17": 1784,
    "age_18_greater": 281
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1485,
    "age_5_17": 1891,
    "age_18_greater": 193
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1183,
    "age_5_17": 2599,
    "age_18_greater": 287
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3919,
    "age_5_17": 6096,
    "age_18_greater": 532
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2606,
    "age_5_17": 4385,
    "age_18_greater": 381
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1409,
    "age_5_17": 2436,
    "age_18_greater": 292
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1286,
    "age_5_17": 1704,
    "age_18_greater": 225
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bahraich",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 969,
    "age_5_17": 1224,
    "age_18_greater": 52
  },
  {
    "state": "Assam",
    "district": "Bajali",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Bajali",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Bajali",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 3,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Bajali",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 11,
    "age_5_17": 14,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 408,
    "age_5_17": 483,
    "age_18_greater": 187
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 37,
    "age_5_17": 25,
    "age_18_greater": 20
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 28,
    "age_5_17": 12,
    "age_18_greater": 12
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 110,
    "age_5_17": 71,
    "age_18_greater": 39
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 493,
    "age_5_17": 215,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 408,
    "age_5_17": 128,
    "age_18_greater": 90
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 322,
    "age_5_17": 138,
    "age_18_greater": 25
  },
  {
    "state": "Assam",
    "district": "Baksa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 303,
    "age_5_17": 93,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Balaghat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 288,
    "age_5_17": 40,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Balaghat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1901,
    "age_5_17": 205,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Balaghat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1091,
    "age_5_17": 71,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Balaghat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1742,
    "age_5_17": 126,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Balaghat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1215,
    "age_5_17": 98,
    "age_18_greater": 7
  },
  {
    "state": "Odisha",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1767,
    "age_5_17": 381,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 156,
    "age_5_17": 47,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 859,
    "age_5_17": 219,
    "age_18_greater": 23
  },
  {
    "state": "Orissa",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 64,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 732,
    "age_5_17": 173,
    "age_18_greater": 31
  },
  {
    "state": "Orissa",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 59,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 896,
    "age_5_17": 151,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Balangir",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 49,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 275,
    "age_5_17": 84,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 131,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 147,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 86,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 132,
    "age_5_17": 45,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 66,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 87,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baleshwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 54,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2177,
    "age_5_17": 465,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1032,
    "age_5_17": 268,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 922,
    "age_5_17": 256,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 733,
    "age_5_17": 158,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Baleswar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Ballari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 893,
    "age_5_17": 114,
    "age_18_greater": 24
  },
  {
    "state": "Karnataka",
    "district": "Ballari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 425,
    "age_5_17": 52,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Ballari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 618,
    "age_5_17": 53,
    "age_18_greater": 24
  },
  {
    "state": "Karnataka",
    "district": "Ballari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 514,
    "age_5_17": 48,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ballia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1401,
    "age_5_17": 2137,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ballia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 856,
    "age_5_17": 1209,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ballia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1083,
    "age_5_17": 1618,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ballia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 739,
    "age_5_17": 896,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Balod",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 507,
    "age_5_17": 25,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Balod",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 324,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Balod",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 432,
    "age_5_17": 21,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Balod",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 340,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Baloda Bazar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 492,
    "age_5_17": 35,
    "age_18_greater": 17
  },
  {
    "state": "Chhattisgarh",
    "district": "Baloda Bazar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1207,
    "age_5_17": 194,
    "age_18_greater": 8
  },
  {
    "state": "Chhattisgarh",
    "district": "Baloda Bazar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 791,
    "age_5_17": 81,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Baloda Bazar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1115,
    "age_5_17": 189,
    "age_18_greater": 6
  },
  {
    "state": "Chhattisgarh",
    "district": "Baloda Bazar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 744,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Balotra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 429,
    "age_5_17": 642,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 150,
    "age_5_17": 497,
    "age_18_greater": 16
  },
  {
    "state": "Chhattisgarh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1344,
    "age_5_17": 579,
    "age_18_greater": 65
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 500,
    "age_5_17": 1822,
    "age_18_greater": 58
  },
  {
    "state": "Chhattisgarh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1275,
    "age_5_17": 403,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 849,
    "age_5_17": 1598,
    "age_18_greater": 13
  },
  {
    "state": "Chhattisgarh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 614,
    "age_5_17": 152,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 615,
    "age_5_17": 1216,
    "age_18_greater": 52
  },
  {
    "state": "Chhattisgarh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 787,
    "age_5_17": 269,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 898,
    "age_5_17": 1219,
    "age_18_greater": 40
  },
  {
    "state": "Chhattisgarh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 573,
    "age_5_17": 125,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Balrampur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 740,
    "age_5_17": 913,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 408,
    "age_5_17": 223,
    "age_18_greater": 175
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1459,
    "age_5_17": 1675,
    "age_18_greater": 156
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3990,
    "age_5_17": 4787,
    "age_18_greater": 451
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 49,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Banas Kantha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 25,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1685,
    "age_5_17": 1358,
    "age_18_greater": 1001
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1146,
    "age_5_17": 724,
    "age_18_greater": 178
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2546,
    "age_5_17": 2150,
    "age_18_greater": 91
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 739,
    "age_5_17": 378,
    "age_18_greater": 151
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1803,
    "age_5_17": 685,
    "age_18_greater": 139
  },
  {
    "state": "Gujarat",
    "district": "Banaskantha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2025,
    "age_5_17": 486,
    "age_18_greater": 75
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 31,
    "age_5_17": 24,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 458,
    "age_5_17": 340,
    "age_18_greater": 43
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 730,
    "age_5_17": 804,
    "age_18_greater": 70
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 324,
    "age_5_17": 451,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 401,
    "age_5_17": 753,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 979,
    "age_5_17": 1472,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 548,
    "age_5_17": 655,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 811,
    "age_5_17": 674,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Banda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 543,
    "age_5_17": 390,
    "age_18_greater": 15
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Bandipore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 366,
    "age_5_17": 101,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Bandipore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 317,
    "age_5_17": 81,
    "age_18_greater": 8
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Bandipore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 329,
    "age_5_17": 75,
    "age_18_greater": 31
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Bandipore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 276,
    "age_5_17": 51,
    "age_18_greater": 2
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Bandipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Bandipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bangalore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1661,
    "age_5_17": 354,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bangalore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1218,
    "age_5_17": 318,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Bangalore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1649,
    "age_5_17": 346,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bangalore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1248,
    "age_5_17": 218,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bangalore Rural",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 176,
    "age_5_17": 35,
    "age_18_greater": 29
  },
  {
    "state": "Karnataka",
    "district": "Bangalore Rural",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 568,
    "age_5_17": 62,
    "age_18_greater": 27
  },
  {
    "state": "Karnataka",
    "district": "Bangalore Rural",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 413,
    "age_5_17": 52,
    "age_18_greater": 31
  },
  {
    "state": "Karnataka",
    "district": "Bangalore Rural",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 524,
    "age_5_17": 61,
    "age_18_greater": 37
  },
  {
    "state": "Karnataka",
    "district": "Bangalore Rural",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 570,
    "age_5_17": 57,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 397,
    "age_5_17": 542,
    "age_18_greater": 36
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 148,
    "age_5_17": 269,
    "age_18_greater": 11
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1531,
    "age_5_17": 1263,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1330,
    "age_5_17": 870,
    "age_18_greater": 20
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1552,
    "age_5_17": 994,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Banka",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1240,
    "age_5_17": 859,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Bankura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2931,
    "age_5_17": 851,
    "age_18_greater": 43
  },
  {
    "state": "West Bengal",
    "district": "Bankura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1844,
    "age_5_17": 385,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Bankura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2984,
    "age_5_17": 564,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Bankura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1324,
    "age_5_17": 322,
    "age_18_greater": 104
  },
  {
    "state": "Rajasthan",
    "district": "Banswara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1902,
    "age_5_17": 1318,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Banswara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 533,
    "age_5_17": 408,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Banswara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1038,
    "age_5_17": 770,
    "age_18_greater": 21
  },
  {
    "state": "Rajasthan",
    "district": "Banswara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 730,
    "age_5_17": 534,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "Bapatla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 113,
    "age_5_17": 18,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Bapatla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 75,
    "age_5_17": 11,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Bapatla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 133,
    "age_5_17": 13,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "Bapatla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 100,
    "age_5_17": 13,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bara Banki",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 172,
    "age_5_17": 72,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bara Banki",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2168,
    "age_5_17": 1422,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bara Banki",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 951,
    "age_5_17": 581,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bara Banki",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1384,
    "age_5_17": 714,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bara Banki",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1101,
    "age_5_17": 429,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Barabanki",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1040,
    "age_5_17": 692,
    "age_18_greater": 52
  },
  {
    "state": "Uttar Pradesh",
    "district": "Barabanki",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 152,
    "age_5_17": 118,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Barabanki",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 70,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Barabanki",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 77,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Barabanki",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 62,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 136,
    "age_5_17": 39,
    "age_18_greater": 12
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 768,
    "age_5_17": 162,
    "age_18_greater": 3
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 480,
    "age_5_17": 103,
    "age_18_greater": 6
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 9,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 750,
    "age_5_17": 147,
    "age_18_greater": 42
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Baramula",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1021,
    "age_5_17": 77,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 379,
    "age_5_17": 60,
    "age_18_greater": 25
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 336,
    "age_5_17": 91,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1575,
    "age_5_17": 646,
    "age_18_greater": 14
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 450,
    "age_5_17": 175,
    "age_18_greater": 6
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1001,
    "age_5_17": 366,
    "age_18_greater": 19
  },
  {
    "state": "Rajasthan",
    "district": "Baran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 791,
    "age_5_17": 320,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Barddhaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5014,
    "age_5_17": 1159,
    "age_18_greater": 5
  },
  {
    "state": "West Bengal",
    "district": "Barddhaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2610,
    "age_5_17": 637,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Barddhaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3224,
    "age_5_17": 786,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Barddhaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1968,
    "age_5_17": 424,
    "age_18_greater": 6
  },
  {
    "state": "Goa",
    "district": "Bardez",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Goa",
    "district": "Bardez",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Bardhaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 534,
    "age_5_17": 165,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Bardhaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 286,
    "age_5_17": 83,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Bardhaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 344,
    "age_5_17": 120,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Bardhaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 60,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 3176,
    "age_5_17": 1025,
    "age_18_greater": 63
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1306,
    "age_5_17": 574,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1242,
    "age_5_17": 1198,
    "age_18_greater": 75
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1671,
    "age_5_17": 1356,
    "age_18_greater": 45
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3019,
    "age_5_17": 2296,
    "age_18_greater": 43
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1924,
    "age_5_17": 1187,
    "age_18_greater": 167
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2921,
    "age_5_17": 1561,
    "age_18_greater": 137
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bareilly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1928,
    "age_5_17": 820,
    "age_18_greater": 28
  },
  {
    "state": "Odisha",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1861,
    "age_5_17": 358,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 47,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 876,
    "age_5_17": 171,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 16,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 823,
    "age_5_17": 163,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 769,
    "age_5_17": 126,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Bargarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Barmer",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 684,
    "age_5_17": 259,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Barmer",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4413,
    "age_5_17": 2236,
    "age_18_greater": 18
  },
  {
    "state": "Rajasthan",
    "district": "Barmer",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1430,
    "age_5_17": 705,
    "age_18_greater": 4
  },
  {
    "state": "Rajasthan",
    "district": "Barmer",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2342,
    "age_5_17": 1158,
    "age_18_greater": 41
  },
  {
    "state": "Rajasthan",
    "district": "Barmer",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1653,
    "age_5_17": 875,
    "age_18_greater": 23
  },
  {
    "state": "Punjab",
    "district": "Barnala",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 309,
    "age_5_17": 32,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Barnala",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 218,
    "age_5_17": 12,
    "age_18_greater": 2
  },
  {
    "state": "Punjab",
    "district": "Barnala",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 263,
    "age_5_17": 25,
    "age_18_greater": 5
  },
  {
    "state": "Punjab",
    "district": "Barnala",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 136,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 24,
    "age_5_17": 34,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 138,
    "age_5_17": 54,
    "age_18_greater": 23
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 90,
    "age_5_17": 83,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 699,
    "age_5_17": 376,
    "age_18_greater": 104
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3310,
    "age_5_17": 895,
    "age_18_greater": 184
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2848,
    "age_5_17": 843,
    "age_18_greater": 11
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1303,
    "age_5_17": 408,
    "age_18_greater": 25
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1286,
    "age_5_17": 394,
    "age_18_greater": 158
  },
  {
    "state": "Assam",
    "district": "Barpeta",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 847,
    "age_5_17": 219,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 497,
    "age_5_17": 313,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 2114,
    "age_5_17": 1005,
    "age_18_greater": 55
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1067,
    "age_5_17": 1106,
    "age_18_greater": 60
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3561,
    "age_5_17": 3348,
    "age_18_greater": 310
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2115,
    "age_5_17": 1441,
    "age_18_greater": 92
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 869,
    "age_5_17": 371,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1264,
    "age_5_17": 437,
    "age_18_greater": 83
  },
  {
    "state": "Madhya Pradesh",
    "district": "Barwani",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1314,
    "age_5_17": 334,
    "age_18_greater": 53
  },
  {
    "state": "Chhattisgarh",
    "district": "Bastar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1151,
    "age_5_17": 366,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Bastar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 595,
    "age_5_17": 309,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Bastar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1056,
    "age_5_17": 753,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Bastar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1992,
    "age_5_17": 380,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Basti",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 140,
    "age_5_17": 139,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Basti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1486,
    "age_5_17": 1760,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Basti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 972,
    "age_5_17": 1230,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Basti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1336,
    "age_5_17": 1278,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Basti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 889,
    "age_5_17": 809,
    "age_18_greater": 15
  },
  {
    "state": "Punjab",
    "district": "Bathinda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 952,
    "age_5_17": 123,
    "age_18_greater": 2
  },
  {
    "state": "Punjab",
    "district": "Bathinda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 466,
    "age_5_17": 60,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Bathinda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 604,
    "age_5_17": 77,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "Bathinda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 366,
    "age_5_17": 38,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 57,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 30,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 28,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 23,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Baudh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Beawar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 379,
    "age_5_17": 52,
    "age_18_greater": 19
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 366,
    "age_5_17": 63,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 659,
    "age_5_17": 294,
    "age_18_greater": 46
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1472,
    "age_5_17": 739,
    "age_18_greater": 72
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1545,
    "age_5_17": 741,
    "age_18_greater": 25
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 904,
    "age_5_17": 215,
    "age_18_greater": 7
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1248,
    "age_5_17": 264,
    "age_18_greater": 68
  },
  {
    "state": "Maharashtra",
    "district": "Beed",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 881,
    "age_5_17": 93,
    "age_18_greater": 18
  },
  {
    "state": "Bihar",
    "district": "Begusarai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 377,
    "age_5_17": 372,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Begusarai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2338,
    "age_5_17": 1516,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Begusarai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1526,
    "age_5_17": 969,
    "age_18_greater": 23
  },
  {
    "state": "Bihar",
    "district": "Begusarai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1886,
    "age_5_17": 1100,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Begusarai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1979,
    "age_5_17": 1088,
    "age_18_greater": 4
  },
  {
    "state": "Karnataka",
    "district": "Belagavi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2418,
    "age_5_17": 254,
    "age_18_greater": 25
  },
  {
    "state": "Karnataka",
    "district": "Belagavi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1387,
    "age_5_17": 134,
    "age_18_greater": 30
  },
  {
    "state": "Karnataka",
    "district": "Belagavi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1806,
    "age_5_17": 125,
    "age_18_greater": 58
  },
  {
    "state": "Karnataka",
    "district": "Belagavi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1452,
    "age_5_17": 109,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Belgaum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2097,
    "age_5_17": 363,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Belgaum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1127,
    "age_5_17": 186,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Belgaum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1463,
    "age_5_17": 201,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Belgaum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1174,
    "age_5_17": 130,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bellary",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1407,
    "age_5_17": 285,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bellary",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 645,
    "age_5_17": 130,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bellary",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 750,
    "age_5_17": 109,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bellary",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 821,
    "age_5_17": 72,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Bemetara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 654,
    "age_5_17": 88,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Bemetara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 460,
    "age_5_17": 63,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Bemetara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 792,
    "age_5_17": 112,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Bemetara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 552,
    "age_5_17": 39,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 5774,
    "age_5_17": 1026,
    "age_18_greater": 1047
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 2659,
    "age_5_17": 1723,
    "age_18_greater": 869
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3557,
    "age_5_17": 1001,
    "age_18_greater": 559
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2486,
    "age_5_17": 849,
    "age_18_greater": 413
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3349,
    "age_5_17": 1292,
    "age_18_greater": 706
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2616,
    "age_5_17": 841,
    "age_18_greater": 213
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Rural",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 511,
    "age_5_17": 312,
    "age_18_greater": 311
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Rural",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 927,
    "age_5_17": 417,
    "age_18_greater": 310
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Rural",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Rural",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru South",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru South",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru South",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 96,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru South",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 6,
    "age_5_17": 60,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 309,
    "age_5_17": 192,
    "age_18_greater": 231
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 5062,
    "age_5_17": 3223,
    "age_18_greater": 1838
  },
  {
    "state": "Karnataka",
    "district": "Bengaluru Urban",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 6740,
    "age_5_17": 3752,
    "age_18_greater": 1727
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 193,
    "age_5_17": 20,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 713,
    "age_5_17": 212,
    "age_18_greater": 43
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1815,
    "age_5_17": 413,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1041,
    "age_5_17": 140,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1753,
    "age_5_17": 270,
    "age_18_greater": 30
  },
  {
    "state": "Madhya Pradesh",
    "district": "Betul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1314,
    "age_5_17": 152,
    "age_18_greater": 18
  },
  {
    "state": "Bihar",
    "district": "Bhabua",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Bhabua",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Bhabua",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Bhabua",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bhadohi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 106,
    "age_5_17": 102,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bhadohi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 54,
    "age_5_17": 78,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bhadohi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 63,
    "age_5_17": 50,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bhadohi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 42,
    "age_5_17": 47,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Bhadradri Kothagudem",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 507,
    "age_5_17": 109,
    "age_18_greater": 23
  },
  {
    "state": "Telangana",
    "district": "Bhadradri Kothagudem",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 688,
    "age_5_17": 189,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Bhadradri Kothagudem",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 549,
    "age_5_17": 187,
    "age_18_greater": 13
  },
  {
    "state": "Telangana",
    "district": "Bhadradri Kothagudem",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 478,
    "age_5_17": 144,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Bhadradri Kothagudem",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 268,
    "age_5_17": 53,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1490,
    "age_5_17": 540,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 156,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 736,
    "age_5_17": 242,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 70,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 678,
    "age_5_17": 216,
    "age_18_greater": 11
  },
  {
    "state": "Orissa",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 66,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 465,
    "age_5_17": 139,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Bhadrak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 40,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 13,
    "age_5_17": 40,
    "age_18_greater": 18
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 678,
    "age_5_17": 534,
    "age_18_greater": 26
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1500,
    "age_5_17": 1363,
    "age_18_greater": 85
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1407,
    "age_5_17": 2293,
    "age_18_greater": 150
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 184,
    "age_5_17": 358,
    "age_18_greater": 15
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1902,
    "age_5_17": 2031,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1281,
    "age_5_17": 1106,
    "age_18_greater": 61
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2131,
    "age_5_17": 1533,
    "age_18_greater": 8
  },
  {
    "state": "Bihar",
    "district": "Bhagalpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1360,
    "age_5_17": 971,
    "age_18_greater": 5
  },
  {
    "state": "Maharashtra",
    "district": "Bhandara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 596,
    "age_5_17": 36,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Bhandara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 252,
    "age_5_17": 6,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Bhandara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 456,
    "age_5_17": 8,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Bhandara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 538,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 240,
    "age_5_17": 37,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1219,
    "age_5_17": 758,
    "age_18_greater": 21
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3996,
    "age_5_17": 2505,
    "age_18_greater": 37
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1363,
    "age_5_17": 972,
    "age_18_greater": 16
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2149,
    "age_5_17": 1429,
    "age_18_greater": 79
  },
  {
    "state": "Rajasthan",
    "district": "Bharatpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1269,
    "age_5_17": 942,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 138,
    "age_5_17": 50,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 303,
    "age_5_17": 69,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1178,
    "age_5_17": 121,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 447,
    "age_5_17": 61,
    "age_18_greater": 9
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 894,
    "age_5_17": 117,
    "age_18_greater": 21
  },
  {
    "state": "Gujarat",
    "district": "Bharuch",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 785,
    "age_5_17": 90,
    "age_18_greater": 14
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 567,
    "age_5_17": 36,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 189,
    "age_5_17": 39,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1614,
    "age_5_17": 403,
    "age_18_greater": 127
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2316,
    "age_5_17": 430,
    "age_18_greater": 89
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 694,
    "age_5_17": 89,
    "age_18_greater": 87
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1846,
    "age_5_17": 213,
    "age_18_greater": 73
  },
  {
    "state": "Gujarat",
    "district": "Bhavnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1194,
    "age_5_17": 99,
    "age_18_greater": 33
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 430,
    "age_5_17": 117,
    "age_18_greater": 20
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 477,
    "age_5_17": 332,
    "age_18_greater": 22
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3141,
    "age_5_17": 1068,
    "age_18_greater": 25
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 959,
    "age_5_17": 391,
    "age_18_greater": 20
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1751,
    "age_5_17": 611,
    "age_18_greater": 72
  },
  {
    "state": "Rajasthan",
    "district": "Bhilwara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1107,
    "age_5_17": 516,
    "age_18_greater": 24
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 54,
    "age_5_17": 33,
    "age_18_greater": 22
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 732,
    "age_5_17": 228,
    "age_18_greater": 91
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 670,
    "age_5_17": 238,
    "age_18_greater": 48
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 507,
    "age_5_17": 328,
    "age_18_greater": 50
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2108,
    "age_5_17": 1743,
    "age_18_greater": 204
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1435,
    "age_5_17": 948,
    "age_18_greater": 108
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 610,
    "age_5_17": 321,
    "age_18_greater": 33
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1367,
    "age_5_17": 596,
    "age_18_greater": 76
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhind",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1000,
    "age_5_17": 410,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Bhiwani",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 937,
    "age_5_17": 55,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Bhiwani",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 715,
    "age_5_17": 34,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Bhiwani",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 963,
    "age_5_17": 34,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Bhiwani",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 706,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Bhojpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 184,
    "age_5_17": 626,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Bhojpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 835,
    "age_5_17": 2653,
    "age_18_greater": 15
  },
  {
    "state": "Bihar",
    "district": "Bhojpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 657,
    "age_5_17": 2244,
    "age_18_greater": 22
  },
  {
    "state": "Bihar",
    "district": "Bhojpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 797,
    "age_5_17": 2561,
    "age_18_greater": 38
  },
  {
    "state": "Bihar",
    "district": "Bhojpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 663,
    "age_5_17": 2031,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 316,
    "age_5_17": 47,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 690,
    "age_5_17": 115,
    "age_18_greater": 28
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 918,
    "age_5_17": 198,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3101,
    "age_5_17": 458,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1658,
    "age_5_17": 196,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2570,
    "age_5_17": 308,
    "age_18_greater": 46
  },
  {
    "state": "Madhya Pradesh",
    "district": "Bhopal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2003,
    "age_5_17": 130,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Bid",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 137,
    "age_5_17": 62,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Bid",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 112,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Bid",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 105,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Bid",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 85,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bidar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 107,
    "age_5_17": 52,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Bidar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1237,
    "age_5_17": 367,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Bidar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 790,
    "age_5_17": 155,
    "age_18_greater": 8
  },
  {
    "state": "Karnataka",
    "district": "Bidar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1045,
    "age_5_17": 220,
    "age_18_greater": 36
  },
  {
    "state": "Karnataka",
    "district": "Bidar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 781,
    "age_5_17": 102,
    "age_18_greater": 4
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 66,
    "age_5_17": 31,
    "age_18_greater": 63
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 397,
    "age_5_17": 135,
    "age_18_greater": 126
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 275,
    "age_5_17": 180,
    "age_18_greater": 155
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 205,
    "age_5_17": 254,
    "age_18_greater": 173
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 802,
    "age_5_17": 346,
    "age_18_greater": 243
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 377,
    "age_5_17": 237,
    "age_18_greater": 196
  },
  {
    "state": "Karnataka",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1375,
    "age_5_17": 440,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 242,
    "age_5_17": 176,
    "age_18_greater": 74
  },
  {
    "state": "Karnataka",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 592,
    "age_5_17": 190,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 476,
    "age_5_17": 208,
    "age_18_greater": 184
  },
  {
    "state": "Karnataka",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 669,
    "age_5_17": 175,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 761,
    "age_5_17": 194,
    "age_18_greater": 148
  },
  {
    "state": "Karnataka",
    "district": "Bijapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 660,
    "age_5_17": 125,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Bijapur(KAR)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Bijapur(KAR)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bijnor",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1351,
    "age_5_17": 432,
    "age_18_greater": 39
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bijnor",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3164,
    "age_5_17": 1300,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bijnor",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2918,
    "age_5_17": 791,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bijnor",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3559,
    "age_5_17": 884,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bijnor",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1943,
    "age_5_17": 436,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 552,
    "age_5_17": 261,
    "age_18_greater": 16
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 421,
    "age_5_17": 164,
    "age_18_greater": 20
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 721,
    "age_5_17": 539,
    "age_18_greater": 33
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 763,
    "age_5_17": 452,
    "age_18_greater": 30
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2186,
    "age_5_17": 1865,
    "age_18_greater": 32
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 739,
    "age_5_17": 655,
    "age_18_greater": 16
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1164,
    "age_5_17": 876,
    "age_18_greater": 36
  },
  {
    "state": "Rajasthan",
    "district": "Bikaner",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 918,
    "age_5_17": 808,
    "age_18_greater": 16
  },
  {
    "state": "Chhattisgarh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1156,
    "age_5_17": 309,
    "age_18_greater": 11
  },
  {
    "state": "Chhattisgarh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2203,
    "age_5_17": 375,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 254,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1429,
    "age_5_17": 269,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 222,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1625,
    "age_5_17": 316,
    "age_18_greater": 5
  },
  {
    "state": "Himachal Pradesh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 305,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1077,
    "age_5_17": 163,
    "age_18_greater": 1
  },
  {
    "state": "Himachal Pradesh",
    "district": "Bilaspur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 204,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 204,
    "age_5_17": 61,
    "age_18_greater": 13
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 139,
    "age_5_17": 65,
    "age_18_greater": 17
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 575,
    "age_5_17": 159,
    "age_18_greater": 35
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3927,
    "age_5_17": 580,
    "age_18_greater": 8
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2952,
    "age_5_17": 460,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3418,
    "age_5_17": 472,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Birbhum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2146,
    "age_5_17": 244,
    "age_18_greater": 33
  },
  {
    "state": "Manipur",
    "district": "Bishnupur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 76,
    "age_5_17": 79,
    "age_18_greater": 30
  },
  {
    "state": "Manipur",
    "district": "Bishnupur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 136,
    "age_5_17": 178,
    "age_18_greater": 8
  },
  {
    "state": "Manipur",
    "district": "Bishnupur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 107,
    "age_5_17": 114,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Bishnupur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 128,
    "age_5_17": 130,
    "age_18_greater": 3
  },
  {
    "state": "Manipur",
    "district": "Bishnupur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 69,
    "age_5_17": 58,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Biswanath",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 104,
    "age_5_17": 114,
    "age_18_greater": 32
  },
  {
    "state": "Assam",
    "district": "Biswanath",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 215,
    "age_5_17": 120,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Biswanath",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 148,
    "age_5_17": 72,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Biswanath",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 203,
    "age_5_17": 100,
    "age_18_greater": 33
  },
  {
    "state": "Assam",
    "district": "Biswanath",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 119,
    "age_5_17": 58,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1061,
    "age_5_17": 845,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 624,
    "age_5_17": 415,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1101,
    "age_5_17": 661,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 719,
    "age_5_17": 357,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Bokaro *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 25,
    "age_5_17": 33,
    "age_18_greater": 31
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 221,
    "age_5_17": 87,
    "age_18_greater": 61
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 110,
    "age_5_17": 41,
    "age_18_greater": 15
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 33,
    "age_5_17": 14,
    "age_18_greater": 14
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 236,
    "age_5_17": 51,
    "age_18_greater": 16
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 734,
    "age_5_17": 161,
    "age_18_greater": 6
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 313,
    "age_5_17": 81,
    "age_18_greater": 28
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 385,
    "age_5_17": 95,
    "age_18_greater": 14
  },
  {
    "state": "Assam",
    "district": "Bongaigaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 267,
    "age_5_17": 63,
    "age_18_greater": 40
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 291,
    "age_5_17": 21,
    "age_18_greater": 20
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 289,
    "age_5_17": 64,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 800,
    "age_5_17": 246,
    "age_18_greater": 44
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 370,
    "age_5_17": 78,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 71,
    "age_5_17": 15,
    "age_18_greater": 21
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 300,
    "age_5_17": 37,
    "age_18_greater": 50
  },
  {
    "state": "Gujarat",
    "district": "Botad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 13,
    "age_18_greater": 17
  },
  {
    "state": "Odisha",
    "district": "Boudh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 556,
    "age_5_17": 92,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Boudh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 256,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Boudh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 193,
    "age_5_17": 50,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Boudh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 172,
    "age_5_17": 36,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 480,
    "age_5_17": 267,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 222,
    "age_5_17": 228,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 210,
    "age_5_17": 353,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1617,
    "age_5_17": 1656,
    "age_18_greater": 53
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2091,
    "age_5_17": 2180,
    "age_18_greater": 104
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 770,
    "age_5_17": 855,
    "age_18_greater": 61
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1480,
    "age_5_17": 1104,
    "age_18_greater": 53
  },
  {
    "state": "Uttar Pradesh",
    "district": "Budaun",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 903,
    "age_5_17": 764,
    "age_18_greater": 42
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Budgam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 218,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Budgam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 174,
    "age_5_17": 10,
    "age_18_greater": 3
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Budgam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 211,
    "age_5_17": 17,
    "age_18_greater": 9
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Budgam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 190,
    "age_5_17": 8,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 40,
    "age_5_17": 26,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 33,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 32,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 19,
    "age_5_17": 32,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 612,
    "age_5_17": 527,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 166,
    "age_5_17": 297,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 604,
    "age_5_17": 749,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2691,
    "age_5_17": 2361,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1495,
    "age_5_17": 1024,
    "age_18_greater": 35
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2070,
    "age_5_17": 1503,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Bulandshahr",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1498,
    "age_5_17": 1028,
    "age_18_greater": 21
  },
  {
    "state": "Maharashtra",
    "district": "Buldana",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 389,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Buldana",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 199,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Buldana",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 195,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Buldana",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 180,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 306,
    "age_5_17": 51,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1103,
    "age_5_17": 276,
    "age_18_greater": 83
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1758,
    "age_5_17": 456,
    "age_18_greater": 19
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 806,
    "age_5_17": 120,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 908,
    "age_5_17": 113,
    "age_18_greater": 13
  },
  {
    "state": "Maharashtra",
    "district": "Buldhana",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 968,
    "age_5_17": 77,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 337,
    "age_5_17": 93,
    "age_18_greater": 35
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 121,
    "age_5_17": 85,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1257,
    "age_5_17": 410,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 379,
    "age_5_17": 175,
    "age_18_greater": 4
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 690,
    "age_5_17": 324,
    "age_18_greater": 49
  },
  {
    "state": "Rajasthan",
    "district": "Bundi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 630,
    "age_5_17": 247,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Burdwan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 547,
    "age_5_17": 155,
    "age_18_greater": 100
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 724,
    "age_5_17": 179,
    "age_18_greater": 29
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1142,
    "age_5_17": 574,
    "age_18_greater": 61
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1706,
    "age_5_17": 1124,
    "age_18_greater": 146
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 737,
    "age_5_17": 370,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 423,
    "age_5_17": 124,
    "age_18_greater": 16
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 615,
    "age_5_17": 138,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Burhanpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 648,
    "age_5_17": 95,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Buxar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 856,
    "age_5_17": 1621,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Buxar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 561,
    "age_5_17": 1141,
    "age_18_greater": 29
  },
  {
    "state": "Bihar",
    "district": "Buxar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 595,
    "age_5_17": 1077,
    "age_18_greater": 20
  },
  {
    "state": "Bihar",
    "district": "Buxar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 516,
    "age_5_17": 809,
    "age_18_greater": 8
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 988,
    "age_5_17": 461,
    "age_18_greater": 299
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 847,
    "age_5_17": 584,
    "age_18_greater": 201
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 4026,
    "age_5_17": 1357,
    "age_18_greater": 490
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2579,
    "age_5_17": 871,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1150,
    "age_5_17": 427,
    "age_18_greater": 304
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1167,
    "age_5_17": 540,
    "age_18_greater": 177
  },
  {
    "state": "Assam",
    "district": "Cachar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 717,
    "age_5_17": 273,
    "age_18_greater": 43
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 80,
    "age_5_17": 41,
    "age_18_greater": 12
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 208,
    "age_5_17": 105,
    "age_18_greater": 20
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 134,
    "age_5_17": 49,
    "age_18_greater": 11
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 773,
    "age_5_17": 328,
    "age_18_greater": 51
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 494,
    "age_5_17": 195,
    "age_18_greater": 36
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 287,
    "age_5_17": 74,
    "age_18_greater": 15
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 446,
    "age_5_17": 134,
    "age_18_greater": 40
  },
  {
    "state": "Delhi",
    "district": "Central Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 339,
    "age_5_17": 67,
    "age_18_greater": 8
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 72,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 55,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 77,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 28,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamarajanagar *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Chamba",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 360,
    "age_5_17": 23,
    "age_18_greater": 1
  },
  {
    "state": "Himachal Pradesh",
    "district": "Chamba",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 355,
    "age_5_17": 13,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Chamba",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 579,
    "age_5_17": 18,
    "age_18_greater": 3
  },
  {
    "state": "Himachal Pradesh",
    "district": "Chamba",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 292,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Chamoli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 336,
    "age_5_17": 35,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Chamoli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 210,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Chamoli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 231,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Chamoli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 229,
    "age_5_17": 8,
    "age_18_greater": 4
  },
  {
    "state": "Uttarakhand",
    "district": "Champawat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 280,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Champawat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 200,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Champawat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 177,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Champawat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 112,
    "age_5_17": 11,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 275,
    "age_5_17": 76,
    "age_18_greater": 17
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 86,
    "age_5_17": 26,
    "age_18_greater": 26
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 95,
    "age_5_17": 57,
    "age_18_greater": 20
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 117,
    "age_5_17": 38,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 136,
    "age_5_17": 22,
    "age_18_greater": 19
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 78,
    "age_5_17": 34,
    "age_18_greater": 7
  },
  {
    "state": "Mizoram",
    "district": "Champhai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 18,
    "age_5_17": 16,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Chamrajanagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 594,
    "age_5_17": 88,
    "age_18_greater": 8
  },
  {
    "state": "Karnataka",
    "district": "Chamrajanagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 442,
    "age_5_17": 49,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Chamrajanagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 620,
    "age_5_17": 59,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Chamrajanagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 332,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamrajnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 96,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamrajnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 75,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamrajnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 102,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chamrajnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 83,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 195,
    "age_5_17": 192,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 214,
    "age_5_17": 191,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 138,
    "age_5_17": 314,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 609,
    "age_5_17": 949,
    "age_18_greater": 47
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1329,
    "age_5_17": 1488,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 506,
    "age_5_17": 510,
    "age_18_greater": 7
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 973,
    "age_5_17": 922,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chandauli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 441,
    "age_5_17": 420,
    "age_18_greater": 9
  },
  {
    "state": "Manipur",
    "district": "Chandel",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 109,
    "age_5_17": 244,
    "age_18_greater": 2
  },
  {
    "state": "Manipur",
    "district": "Chandel",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 32,
    "age_5_17": 101,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Chandel",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 69,
    "age_5_17": 91,
    "age_18_greater": 2
  },
  {
    "state": "Manipur",
    "district": "Chandel",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 34,
    "age_5_17": 74,
    "age_18_greater": 0
  },
  {
    "state": "Chandigarh",
    "district": "Chandigarh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 86,
    "age_5_17": 21,
    "age_18_greater": 10
  },
  {
    "state": "Chandigarh",
    "district": "Chandigarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 775,
    "age_5_17": 79,
    "age_18_greater": 1
  },
  {
    "state": "Chandigarh",
    "district": "Chandigarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 429,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Chandigarh",
    "district": "Chandigarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 672,
    "age_5_17": 36,
    "age_18_greater": 17
  },
  {
    "state": "Chandigarh",
    "district": "Chandigarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 511,
    "age_5_17": 31,
    "age_18_greater": 8
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 193,
    "age_5_17": 18,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 198,
    "age_5_17": 24,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 306,
    "age_5_17": 86,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1204,
    "age_5_17": 113,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 512,
    "age_5_17": 36,
    "age_18_greater": 9
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 814,
    "age_5_17": 52,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Chandrapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 787,
    "age_5_17": 46,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Changlang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 288,
    "age_5_17": 136,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Changlang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 76,
    "age_5_17": 117,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Changlang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 66,
    "age_5_17": 45,
    "age_18_greater": 7
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Changlang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 56,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 91,
    "age_5_17": 50,
    "age_18_greater": 164
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 29,
    "age_5_17": 11,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 202,
    "age_5_17": 97,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 106,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 144,
    "age_5_17": 80,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Charaideo",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 87,
    "age_5_17": 35,
    "age_18_greater": 19
  },
  {
    "state": "Haryana",
    "district": "Charkhi Dadri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 253,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Charkhi Dadri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 146,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Charkhi Dadri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 300,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Charkhi Dadri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 140,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 246,
    "age_5_17": 218,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 330,
    "age_5_17": 161,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 954,
    "age_5_17": 760,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 498,
    "age_5_17": 362,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 902,
    "age_5_17": 851,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Chatra",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 518,
    "age_5_17": 467,
    "age_18_greater": 5
  },
  {
    "state": "Maharashtra",
    "district": "Chatrapati Sambhaji Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 34,
    "age_5_17": 28,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Chatrapati Sambhaji Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 20,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Chatrapati Sambhaji Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 35,
    "age_5_17": 20,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Chatrapati Sambhaji Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 24,
    "age_5_17": 13,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 138,
    "age_5_17": 62,
    "age_18_greater": 26
  },
  {
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 272,
    "age_5_17": 57,
    "age_18_greater": 16
  },
  {
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 141,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 179,
    "age_5_17": 113,
    "age_18_greater": 13
  },
  {
    "state": "Tamil Nadu",
    "district": "Chengalpattu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 132,
    "age_5_17": 46,
    "age_18_greater": 17
  },
  {
    "state": "Tamil Nadu",
    "district": "Chennai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 231,
    "age_5_17": 136,
    "age_18_greater": 33
  },
  {
    "state": "Tamil Nadu",
    "district": "Chennai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2418,
    "age_5_17": 711,
    "age_18_greater": 27
  },
  {
    "state": "Tamil Nadu",
    "district": "Chennai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1439,
    "age_5_17": 418,
    "age_18_greater": 13
  },
  {
    "state": "Tamil Nadu",
    "district": "Chennai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2257,
    "age_5_17": 645,
    "age_18_greater": 81
  },
  {
    "state": "Tamil Nadu",
    "district": "Chennai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1341,
    "age_5_17": 249,
    "age_18_greater": 44
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 555,
    "age_5_17": 255,
    "age_18_greater": 40
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 394,
    "age_5_17": 313,
    "age_18_greater": 30
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 272,
    "age_5_17": 401,
    "age_18_greater": 41
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1628,
    "age_5_17": 1844,
    "age_18_greater": 114
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2816,
    "age_5_17": 1375,
    "age_18_greater": 24
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1036,
    "age_5_17": 466,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2385,
    "age_5_17": 741,
    "age_18_greater": 33
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhatarpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2418,
    "age_5_17": 570,
    "age_18_greater": 68
  },
  {
    "state": "Maharashtra",
    "district": "Chhatrapati Sambhajinagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 148,
    "age_5_17": 171,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Chhatrapati Sambhajinagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 71,
    "age_5_17": 68,
    "age_18_greater": 135
  },
  {
    "state": "Maharashtra",
    "district": "Chhatrapati Sambhajinagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 100,
    "age_5_17": 75,
    "age_18_greater": 81
  },
  {
    "state": "Maharashtra",
    "district": "Chhatrapati Sambhajinagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 92,
    "age_5_17": 51,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhindwara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2443,
    "age_5_17": 288,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhindwara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1687,
    "age_5_17": 105,
    "age_18_greater": 25
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhindwara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2365,
    "age_5_17": 132,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Chhindwara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1813,
    "age_5_17": 100,
    "age_18_greater": 2
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 242,
    "age_5_17": 121,
    "age_18_greater": 119
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 127,
    "age_5_17": 61,
    "age_18_greater": 28
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 97,
    "age_5_17": 34,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 815,
    "age_5_17": 816,
    "age_18_greater": 231
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 278,
    "age_5_17": 128,
    "age_18_greater": 18
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 92,
    "age_5_17": 35,
    "age_18_greater": 37
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 269,
    "age_5_17": 66,
    "age_18_greater": 119
  },
  {
    "state": "Gujarat",
    "district": "Chhotaudepur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 295,
    "age_5_17": 42,
    "age_18_greater": 27
  },
  {
    "state": "Karnataka",
    "district": "Chickmagalur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 326,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chickmagalur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 226,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chickmagalur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 319,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chickmagalur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 258,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikkaballapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 903,
    "age_5_17": 94,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Chikkaballapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 594,
    "age_5_17": 68,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikkaballapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 707,
    "age_5_17": 78,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikkaballapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 638,
    "age_5_17": 56,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Chikkamagaluru",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 294,
    "age_5_17": 28,
    "age_18_greater": 19
  },
  {
    "state": "Karnataka",
    "district": "Chikkamagaluru",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 207,
    "age_5_17": 19,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Chikkamagaluru",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 302,
    "age_5_17": 29,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Chikkamagaluru",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 215,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikmagalur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 37,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikmagalur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 32,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikmagalur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 40,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Chikmagalur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 36,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 12,
    "age_5_17": 29,
    "age_18_greater": 15
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 189,
    "age_5_17": 199,
    "age_18_greater": 179
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 893,
    "age_5_17": 364,
    "age_18_greater": 52
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 335,
    "age_5_17": 175,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 145,
    "age_5_17": 83,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 223,
    "age_5_17": 135,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Chirang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 216,
    "age_5_17": 86,
    "age_18_greater": 14
  },
  {
    "state": "Karnataka",
    "district": "Chitradurga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1053,
    "age_5_17": 94,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Chitradurga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 804,
    "age_5_17": 74,
    "age_18_greater": 15
  },
  {
    "state": "Karnataka",
    "district": "Chitradurga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 872,
    "age_5_17": 72,
    "age_18_greater": 17
  },
  {
    "state": "Karnataka",
    "district": "Chitradurga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1313,
    "age_5_17": 86,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chitrakoot",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 924,
    "age_5_17": 796,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chitrakoot",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 659,
    "age_5_17": 547,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chitrakoot",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 683,
    "age_5_17": 567,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Chitrakoot",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 685,
    "age_5_17": 526,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Chittaurgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 138,
    "age_5_17": 31,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Chittaurgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 28,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Chittaurgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 81,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Chittaurgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 39,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2314,
    "age_5_17": 246,
    "age_18_greater": 12
  },
  {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1618,
    "age_5_17": 165,
    "age_18_greater": 5
  },
  {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2143,
    "age_5_17": 170,
    "age_18_greater": 13
  },
  {
    "state": "Andhra Pradesh",
    "district": "Chittoor",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1418,
    "age_5_17": 78,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Chittorgarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 835,
    "age_5_17": 701,
    "age_18_greater": 40
  },
  {
    "state": "Rajasthan",
    "district": "Chittorgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1361,
    "age_5_17": 689,
    "age_18_greater": 28
  },
  {
    "state": "Rajasthan",
    "district": "Chittorgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 316,
    "age_5_17": 178,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Chittorgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 667,
    "age_5_17": 307,
    "age_18_greater": 45
  },
  {
    "state": "Rajasthan",
    "district": "Chittorgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 519,
    "age_5_17": 285,
    "age_18_greater": 12
  },
  {
    "state": "Nagaland",
    "district": "Chumukedima",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 16,
    "age_5_17": 57,
    "age_18_greater": 13
  },
  {
    "state": "Nagaland",
    "district": "Chumukedima",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 13,
    "age_18_greater": 19
  },
  {
    "state": "Nagaland",
    "district": "Chumukedima",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 10,
    "age_18_greater": 2
  },
  {
    "state": "Nagaland",
    "district": "Chumukedima",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 11,
    "age_18_greater": 16
  },
  {
    "state": "Nagaland",
    "district": "Chumukedima",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 130,
    "age_5_17": 476,
    "age_18_greater": 26
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 91,
    "age_5_17": 499,
    "age_18_greater": 13
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 348,
    "age_5_17": 1265,
    "age_18_greater": 13
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 238,
    "age_5_17": 400,
    "age_18_greater": 12
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 172,
    "age_5_17": 282,
    "age_18_greater": 15
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 164,
    "age_5_17": 239,
    "age_18_greater": 13
  },
  {
    "state": "Manipur",
    "district": "Churachandpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 113,
    "age_5_17": 113,
    "age_18_greater": 16
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 316,
    "age_5_17": 141,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 253,
    "age_5_17": 269,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1072,
    "age_5_17": 1028,
    "age_18_greater": 50
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2645,
    "age_5_17": 1315,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 978,
    "age_5_17": 560,
    "age_18_greater": 8
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1495,
    "age_5_17": 796,
    "age_18_greater": 57
  },
  {
    "state": "Rajasthan",
    "district": "Churu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1129,
    "age_5_17": 623,
    "age_18_greater": 8
  },
  {
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 59,
    "age_5_17": 19,
    "age_18_greater": 11
  },
  {
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2466,
    "age_5_17": 566,
    "age_18_greater": 12
  },
  {
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1520,
    "age_5_17": 382,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2013,
    "age_5_17": 572,
    "age_18_greater": 9
  },
  {
    "state": "Tamil Nadu",
    "district": "Coimbatore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1081,
    "age_5_17": 265,
    "age_18_greater": 11
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 297,
    "age_5_17": 156,
    "age_18_greater": 32
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 991,
    "age_5_17": 606,
    "age_18_greater": 77
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2203,
    "age_5_17": 997,
    "age_18_greater": 44
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1823,
    "age_5_17": 714,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1317,
    "age_5_17": 546,
    "age_18_greater": 6
  },
  {
    "state": "West Bengal",
    "district": "Cooch Behar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 631,
    "age_5_17": 201,
    "age_18_greater": 84
  },
  {
    "state": "West Bengal",
    "district": "Coochbehar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 19,
    "age_5_17": 12,
    "age_18_greater": 19
  },
  {
    "state": "West Bengal",
    "district": "Coochbehar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 47,
    "age_5_17": 46,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Coochbehar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2074,
    "age_5_17": 2029,
    "age_18_greater": 152
  },
  {
    "state": "Tamil Nadu",
    "district": "Cuddalore",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 120,
    "age_5_17": 11,
    "age_18_greater": 10
  },
  {
    "state": "Tamil Nadu",
    "district": "Cuddalore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2753,
    "age_5_17": 364,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Cuddalore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1264,
    "age_5_17": 206,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Cuddalore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2140,
    "age_5_17": 392,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Cuddalore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1216,
    "age_5_17": 120,
    "age_18_greater": 32
  },
  {
    "state": "Andhra Pradesh",
    "district": "Cuddapah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1561,
    "age_5_17": 162,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Cuddapah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1206,
    "age_5_17": 83,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Cuddapah",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1604,
    "age_5_17": 115,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Cuddapah",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1148,
    "age_5_17": 53,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1654,
    "age_5_17": 454,
    "age_18_greater": 4
  },
  {
    "state": "Orissa",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 93,
    "age_5_17": 26,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 792,
    "age_5_17": 195,
    "age_18_greater": 4
  },
  {
    "state": "Orissa",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 66,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 759,
    "age_5_17": 195,
    "age_18_greater": 4
  },
  {
    "state": "Orissa",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 55,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 835,
    "age_5_17": 181,
    "age_18_greater": 3
  },
  {
    "state": "Orissa",
    "district": "Cuttack",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 51,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Dadra & Nagar Haveli",
    "district": "Dadra & Nagar Haveli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 9,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Dadra & Nagar Haveli",
    "district": "Dadra & Nagar Haveli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Dadra & Nagar Haveli",
    "district": "Dadra & Nagar Haveli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 7,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Dadra & Nagar Haveli",
    "district": "Dadra & Nagar Haveli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "The Dadra And Nagar Haveli And Daman And Diu",
    "district": "Dadra And Nagar Haveli",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 188,
    "age_5_17": 49,
    "age_18_greater": 12
  },
  {
    "state": "The Dadra And Nagar Haveli And Daman And Diu",
    "district": "Dadra And Nagar Haveli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 360,
    "age_5_17": 92,
    "age_18_greater": 15
  },
  {
    "state": "Dadra and Nagar Haveli",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 322,
    "age_5_17": 36,
    "age_18_greater": 1
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 29,
    "age_5_17": 8,
    "age_18_greater": 2
  },
  {
    "state": "Dadra and Nagar Haveli",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 97,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 10,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 150,
    "age_5_17": 14,
    "age_18_greater": 1
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 100,
    "age_5_17": 8,
    "age_18_greater": 2
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Dadra and Nagar Haveli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 12,
    "age_5_17": 1,
    "age_18_greater": 6
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 855,
    "age_5_17": 782,
    "age_18_greater": 434
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 710,
    "age_5_17": 717,
    "age_18_greater": 653
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1358,
    "age_5_17": 1182,
    "age_18_greater": 36
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 464,
    "age_5_17": 225,
    "age_18_greater": 82
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1297,
    "age_5_17": 762,
    "age_18_greater": 63
  },
  {
    "state": "Gujarat",
    "district": "Dahod",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 657,
    "age_5_17": 223,
    "age_18_greater": 9
  },
  {
    "state": "Chhattisgarh",
    "district": "Dakshin Bastar Dantewada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 101,
    "age_5_17": 34,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Dakshin Bastar Dantewada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 69,
    "age_5_17": 32,
    "age_18_greater": 17
  },
  {
    "state": "Chhattisgarh",
    "district": "Dakshin Bastar Dantewada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 554,
    "age_5_17": 69,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Dakshin Bastar Dantewada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 304,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Dakshin Dinajpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 179,
    "age_5_17": 42,
    "age_18_greater": 14
  },
  {
    "state": "West Bengal",
    "district": "Dakshin Dinajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2345,
    "age_5_17": 452,
    "age_18_greater": 39
  },
  {
    "state": "West Bengal",
    "district": "Dakshin Dinajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1176,
    "age_5_17": 221,
    "age_18_greater": 7
  },
  {
    "state": "West Bengal",
    "district": "Dakshin Dinajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1004,
    "age_5_17": 235,
    "age_18_greater": 8
  },
  {
    "state": "West Bengal",
    "district": "Dakshin Dinajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 654,
    "age_5_17": 119,
    "age_18_greater": 31
  },
  {
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1658,
    "age_5_17": 119,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1262,
    "age_5_17": 152,
    "age_18_greater": 42
  },
  {
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1659,
    "age_5_17": 176,
    "age_18_greater": 30
  },
  {
    "state": "Karnataka",
    "district": "Dakshina Kannada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1317,
    "age_5_17": 83,
    "age_18_greater": 2
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 19,
    "age_5_17": 2,
    "age_18_greater": 2
  },
  {
    "state": "Daman & Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman & Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Daman & Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 7
  },
  {
    "state": "Daman & Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Daman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Damoh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1802,
    "age_5_17": 399,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Damoh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 931,
    "age_5_17": 180,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Damoh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1381,
    "age_5_17": 225,
    "age_18_greater": 32
  },
  {
    "state": "Madhya Pradesh",
    "district": "Damoh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 967,
    "age_5_17": 134,
    "age_18_greater": 1
  },
  {
    "state": "Gujarat",
    "district": "Dang",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 222,
    "age_5_17": 72,
    "age_18_greater": 70
  },
  {
    "state": "Gujarat",
    "district": "Dang",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 309,
    "age_5_17": 107,
    "age_18_greater": 92
  },
  {
    "state": "Chhattisgarh",
    "district": "Dantewada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 51,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dantewada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 38,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dantewada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 359,
    "age_5_17": 66,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dantewada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 136,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Darbhanga",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 255,
    "age_5_17": 183,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Darbhanga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3286,
    "age_5_17": 1960,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Darbhanga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2224,
    "age_5_17": 1266,
    "age_18_greater": 32
  },
  {
    "state": "Bihar",
    "district": "Darbhanga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2436,
    "age_5_17": 1433,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Darbhanga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1816,
    "age_5_17": 835,
    "age_18_greater": 5
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 383,
    "age_5_17": 200,
    "age_18_greater": 75
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 297,
    "age_5_17": 223,
    "age_18_greater": 78
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 203,
    "age_5_17": 316,
    "age_18_greater": 166
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 607,
    "age_5_17": 694,
    "age_18_greater": 184
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 896,
    "age_5_17": 450,
    "age_18_greater": 56
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 450,
    "age_5_17": 232,
    "age_18_greater": 24
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 663,
    "age_5_17": 302,
    "age_18_greater": 8
  },
  {
    "state": "West Bengal",
    "district": "Darjeeling",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 468,
    "age_5_17": 162,
    "age_18_greater": 182
  },
  {
    "state": "West Bengal",
    "district": "Darjiling",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 232,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Darjiling",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 131,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Darjiling",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 124,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Darjiling",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 48,
    "age_5_17": 25,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 654,
    "age_5_17": 340,
    "age_18_greater": 270
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 87,
    "age_5_17": 53,
    "age_18_greater": 308
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 63,
    "age_5_17": 25,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 190,
    "age_5_17": 56,
    "age_18_greater": 11
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1221,
    "age_5_17": 556,
    "age_18_greater": 7
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 672,
    "age_5_17": 306,
    "age_18_greater": 107
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 762,
    "age_5_17": 325,
    "age_18_greater": 575
  },
  {
    "state": "Assam",
    "district": "Darrang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 741,
    "age_5_17": 253,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 237,
    "age_5_17": 55,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 435,
    "age_5_17": 384,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1388,
    "age_5_17": 721,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 378,
    "age_5_17": 138,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 912,
    "age_5_17": 306,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Datia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 645,
    "age_5_17": 201,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Dausa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1824,
    "age_5_17": 643,
    "age_18_greater": 5
  },
  {
    "state": "Rajasthan",
    "district": "Dausa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 674,
    "age_5_17": 317,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dausa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1120,
    "age_5_17": 512,
    "age_18_greater": 39
  },
  {
    "state": "Rajasthan",
    "district": "Dausa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 659,
    "age_5_17": 335,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Davanagere",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 161,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Davanagere",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 68,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Davanagere",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 114,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Davanagere",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 94,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Davangere",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1316,
    "age_5_17": 111,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Davangere",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 738,
    "age_5_17": 92,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Davangere",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 849,
    "age_5_17": 84,
    "age_18_greater": 26
  },
  {
    "state": "Karnataka",
    "district": "Davangere",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1513,
    "age_5_17": 65,
    "age_18_greater": 3
  },
  {
    "state": "Odisha",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 301,
    "age_5_17": 36,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 133,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 111,
    "age_5_17": 13,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 231,
    "age_5_17": 21,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Debagarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Deeg",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Deeg",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 12,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Deeg",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Deeg\u00a0",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Deeg\u00a0",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Deeg\u00a0",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 123,
    "age_5_17": 43,
    "age_18_greater": 10
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 510,
    "age_5_17": 138,
    "age_18_greater": 26
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 477,
    "age_5_17": 135,
    "age_18_greater": 12
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 160,
    "age_5_17": 80,
    "age_18_greater": 54
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1298,
    "age_5_17": 323,
    "age_18_greater": 10
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1918,
    "age_5_17": 301,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1054,
    "age_5_17": 206,
    "age_18_greater": 4
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1356,
    "age_5_17": 236,
    "age_18_greater": 11
  },
  {
    "state": "Uttarakhand",
    "district": "Dehradun",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 901,
    "age_5_17": 92,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 12,
    "age_5_17": 25,
    "age_18_greater": 18
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 371,
    "age_5_17": 342,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1050,
    "age_5_17": 993,
    "age_18_greater": 16
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 768,
    "age_5_17": 661,
    "age_18_greater": 60
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1384,
    "age_5_17": 1069,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Deoghar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 933,
    "age_5_17": 589,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 384,
    "age_5_17": 503,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 130,
    "age_5_17": 240,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1694,
    "age_5_17": 1899,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 723,
    "age_5_17": 915,
    "age_18_greater": 28
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1013,
    "age_5_17": 1184,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Deoria",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 756,
    "age_5_17": 702,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 186,
    "age_5_17": 44,
    "age_18_greater": 54
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 167,
    "age_5_17": 26,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 359,
    "age_5_17": 163,
    "age_18_greater": 55
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 477,
    "age_5_17": 98,
    "age_18_greater": 17
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 135,
    "age_5_17": 22,
    "age_18_greater": 44
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 274,
    "age_5_17": 42,
    "age_18_greater": 22
  },
  {
    "state": "Gujarat",
    "district": "Devbhumi Dwarka",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 247,
    "age_5_17": 27,
    "age_18_greater": 8
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 427,
    "age_5_17": 65,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 518,
    "age_5_17": 87,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 544,
    "age_5_17": 292,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1737,
    "age_5_17": 758,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1158,
    "age_5_17": 227,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2576,
    "age_5_17": 319,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dewas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1433,
    "age_5_17": 210,
    "age_18_greater": 19
  },
  {
    "state": "Tripura",
    "district": "Dhalai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 60,
    "age_5_17": 87,
    "age_18_greater": 20
  },
  {
    "state": "Tripura",
    "district": "Dhalai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 258,
    "age_5_17": 199,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Dhalai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 107,
    "age_5_17": 83,
    "age_18_greater": 5
  },
  {
    "state": "Tripura",
    "district": "Dhalai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 187,
    "age_5_17": 159,
    "age_18_greater": 10
  },
  {
    "state": "Tripura",
    "district": "Dhalai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 165,
    "age_5_17": 79,
    "age_18_greater": 1
  },
  {
    "state": "Tripura",
    "district": "Dhalai  *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Dhalai  *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Dhalai  *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Dhalai  *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dhamtari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 614,
    "age_5_17": 26,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Dhamtari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 350,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dhamtari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 554,
    "age_5_17": 33,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Dhamtari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 358,
    "age_5_17": 13,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Dhanbad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 782,
    "age_5_17": 722,
    "age_18_greater": 34
  },
  {
    "state": "Jharkhand",
    "district": "Dhanbad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1983,
    "age_5_17": 1346,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Dhanbad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1394,
    "age_5_17": 580,
    "age_18_greater": 7
  },
  {
    "state": "Jharkhand",
    "district": "Dhanbad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1928,
    "age_5_17": 1040,
    "age_18_greater": 23
  },
  {
    "state": "Jharkhand",
    "district": "Dhanbad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 791,
    "age_5_17": 373,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 396,
    "age_5_17": 116,
    "age_18_greater": 107
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 892,
    "age_5_17": 570,
    "age_18_greater": 65
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 518,
    "age_5_17": 380,
    "age_18_greater": 24
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1993,
    "age_5_17": 1123,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1203,
    "age_5_17": 402,
    "age_18_greater": 123
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1952,
    "age_5_17": 532,
    "age_18_greater": 70
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dhar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1780,
    "age_5_17": 430,
    "age_18_greater": 24
  },
  {
    "state": "Maharashtra",
    "district": "Dharashiv",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 28,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Dharashiv",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 19,
    "age_5_17": 6,
    "age_18_greater": 13
  },
  {
    "state": "Maharashtra",
    "district": "Dharashiv",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 7,
    "age_18_greater": 14
  },
  {
    "state": "Maharashtra",
    "district": "Dharashiv",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 24,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Dharmapuri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1472,
    "age_5_17": 253,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Dharmapuri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 999,
    "age_5_17": 172,
    "age_18_greater": 14
  },
  {
    "state": "Tamil Nadu",
    "district": "Dharmapuri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1549,
    "age_5_17": 289,
    "age_18_greater": 9
  },
  {
    "state": "Tamil Nadu",
    "district": "Dharmapuri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 820,
    "age_5_17": 137,
    "age_18_greater": 25
  },
  {
    "state": "Karnataka",
    "district": "Dharwad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1536,
    "age_5_17": 111,
    "age_18_greater": 3
  },
  {
    "state": "Karnataka",
    "district": "Dharwad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 986,
    "age_5_17": 104,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Dharwad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1341,
    "age_5_17": 94,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Dharwad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 870,
    "age_5_17": 42,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dhaulpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dhaulpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dhaulpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 28,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dhaulpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 20,
    "age_5_17": 46,
    "age_18_greater": 19
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 179,
    "age_5_17": 176,
    "age_18_greater": 52
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 264,
    "age_5_17": 174,
    "age_18_greater": 153
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 135,
    "age_5_17": 126,
    "age_18_greater": 55
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1625,
    "age_5_17": 576,
    "age_18_greater": 337
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 566,
    "age_5_17": 274,
    "age_18_greater": 66
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 267,
    "age_5_17": 140,
    "age_18_greater": 257
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 441,
    "age_5_17": 175,
    "age_18_greater": 211
  },
  {
    "state": "Assam",
    "district": "Dhemaji",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 367,
    "age_5_17": 159,
    "age_18_greater": 41
  },
  {
    "state": "Odisha",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1027,
    "age_5_17": 255,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 36,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 375,
    "age_5_17": 87,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 22,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 349,
    "age_5_17": 87,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 607,
    "age_5_17": 96,
    "age_18_greater": 7
  },
  {
    "state": "Orissa",
    "district": "Dhenkanal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 31,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 947,
    "age_5_17": 347,
    "age_18_greater": 50
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 467,
    "age_5_17": 247,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2045,
    "age_5_17": 844,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 614,
    "age_5_17": 363,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1021,
    "age_5_17": 539,
    "age_18_greater": 77
  },
  {
    "state": "Rajasthan",
    "district": "Dholpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 625,
    "age_5_17": 371,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 89,
    "age_5_17": 229,
    "age_18_greater": 98
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 998,
    "age_5_17": 654,
    "age_18_greater": 80
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 323,
    "age_5_17": 198,
    "age_18_greater": 24
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 774,
    "age_5_17": 306,
    "age_18_greater": 27
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2776,
    "age_5_17": 1048,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1260,
    "age_5_17": 458,
    "age_18_greater": 108
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1264,
    "age_5_17": 592,
    "age_18_greater": 22
  },
  {
    "state": "Assam",
    "district": "Dhubri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 948,
    "age_5_17": 364,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 118,
    "age_5_17": 46,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 793,
    "age_5_17": 484,
    "age_18_greater": 211
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1410,
    "age_5_17": 1107,
    "age_18_greater": 127
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2028,
    "age_5_17": 2152,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 788,
    "age_5_17": 384,
    "age_18_greater": 62
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1156,
    "age_5_17": 390,
    "age_18_greater": 63
  },
  {
    "state": "Maharashtra",
    "district": "Dhule",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 951,
    "age_5_17": 279,
    "age_18_greater": 12
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Dibang Valley",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Dibang Valley",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Dibang Valley",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Dibang Valley",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 10,
    "age_5_17": 12,
    "age_18_greater": 14
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 179,
    "age_5_17": 149,
    "age_18_greater": 186
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 140,
    "age_5_17": 95,
    "age_18_greater": 149
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 413,
    "age_5_17": 127,
    "age_18_greater": 134
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1455,
    "age_5_17": 488,
    "age_18_greater": 541
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 652,
    "age_5_17": 306,
    "age_18_greater": 52
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 362,
    "age_5_17": 174,
    "age_18_greater": 144
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 409,
    "age_5_17": 226,
    "age_18_greater": 218
  },
  {
    "state": "Assam",
    "district": "Dibrugarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 275,
    "age_5_17": 98,
    "age_18_greater": 54
  },
  {
    "state": "Rajasthan",
    "district": "Didwana-Kuchaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 33,
    "age_5_17": 28,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 83,
    "age_5_17": 51,
    "age_18_greater": 14
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 10,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 7,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Dima Hasao",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 249,
    "age_5_17": 454,
    "age_18_greater": 80
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 155,
    "age_5_17": 207,
    "age_18_greater": 22
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 105,
    "age_5_17": 240,
    "age_18_greater": 32
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 246,
    "age_5_17": 456,
    "age_18_greater": 82
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 121,
    "age_5_17": 210,
    "age_18_greater": 22
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 115,
    "age_5_17": 125,
    "age_18_greater": 8
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 107,
    "age_5_17": 77,
    "age_18_greater": 29
  },
  {
    "state": "Nagaland",
    "district": "Dimapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 20,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Dinajpur Dakshin",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 707,
    "age_5_17": 256,
    "age_18_greater": 34
  },
  {
    "state": "West Bengal",
    "district": "Dinajpur Uttar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 26,
    "age_5_17": 18,
    "age_18_greater": 27
  },
  {
    "state": "West Bengal",
    "district": "Dinajpur Uttar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1295,
    "age_5_17": 1253,
    "age_18_greater": 118
  },
  {
    "state": "West Bengal",
    "district": "Dinajpur Uttar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 5157,
    "age_5_17": 3588,
    "age_18_greater": 189
  },
  {
    "state": "Tamil Nadu",
    "district": "Dindigul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1809,
    "age_5_17": 526,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Dindigul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 805,
    "age_5_17": 251,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Dindigul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1318,
    "age_5_17": 458,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Dindigul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 746,
    "age_5_17": 158,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dindori",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 762,
    "age_5_17": 111,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dindori",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 447,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dindori",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 424,
    "age_5_17": 51,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Dindori",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 776,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 3
  },
  {
    "state": "Daman & Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 11,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman & Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 14,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Daman & Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Daman & Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Daman and Diu",
    "district": "Diu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 16,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu And Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 261,
    "age_5_17": 260,
    "age_18_greater": 17
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 270,
    "age_5_17": 145,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1178,
    "age_5_17": 261,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 858,
    "age_5_17": 272,
    "age_18_greater": 10
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Doda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 880,
    "age_5_17": 85,
    "age_18_greater": 5
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 32,
    "age_5_17": 37,
    "age_18_greater": 41
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1162,
    "age_5_17": 1835,
    "age_18_greater": 191
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2702,
    "age_5_17": 4861,
    "age_18_greater": 438
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 414,
    "age_5_17": 277,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 151,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 382,
    "age_5_17": 219,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Dohad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 160,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Dr. B. R. Ambedkar Konaseema",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 199,
    "age_5_17": 12,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Dr. B. R. Ambedkar Konaseema",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 99,
    "age_5_17": 9,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Dr. B. R. Ambedkar Konaseema",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 179,
    "age_5_17": 7,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Dr. B. R. Ambedkar Konaseema",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 141,
    "age_5_17": 2,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 34,
    "age_5_17": 32,
    "age_18_greater": 23
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 74,
    "age_5_17": 110,
    "age_18_greater": 14
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 61,
    "age_5_17": 117,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 827,
    "age_5_17": 963,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 496,
    "age_5_17": 533,
    "age_18_greater": 13
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 817,
    "age_5_17": 850,
    "age_18_greater": 16
  },
  {
    "state": "Jharkhand",
    "district": "Dumka",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 434,
    "age_5_17": 391,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Dungarpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 66,
    "age_5_17": 83,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Dungarpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1620,
    "age_5_17": 1149,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Dungarpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 563,
    "age_5_17": 365,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Dungarpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 917,
    "age_5_17": 635,
    "age_18_greater": 35
  },
  {
    "state": "Rajasthan",
    "district": "Dungarpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 703,
    "age_5_17": 417,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 336,
    "age_5_17": 38,
    "age_18_greater": 10
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 385,
    "age_5_17": 94,
    "age_18_greater": 16
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 946,
    "age_5_17": 162,
    "age_18_greater": 12
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 355,
    "age_5_17": 50,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 843,
    "age_5_17": 115,
    "age_18_greater": 7
  },
  {
    "state": "Chhattisgarh",
    "district": "Durg",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 663,
    "age_5_17": 61,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "East",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 90,
    "age_5_17": 83,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "East",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 41,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "East",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 69,
    "age_5_17": 37,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "East",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 15,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1528,
    "age_5_17": 2371,
    "age_18_greater": 153
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1445,
    "age_5_17": 2871,
    "age_18_greater": 192
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2554,
    "age_5_17": 4580,
    "age_18_greater": 128
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1268,
    "age_5_17": 2409,
    "age_18_greater": 127
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1788,
    "age_5_17": 3445,
    "age_18_greater": 147
  },
  {
    "state": "Bihar",
    "district": "East Champaran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1564,
    "age_5_17": 2695,
    "age_18_greater": 58
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 676,
    "age_5_17": 221,
    "age_18_greater": 15
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 969,
    "age_5_17": 342,
    "age_18_greater": 67
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 660,
    "age_5_17": 299,
    "age_18_greater": 26
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1319,
    "age_5_17": 504,
    "age_18_greater": 55
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1578,
    "age_5_17": 459,
    "age_18_greater": 22
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 855,
    "age_5_17": 198,
    "age_18_greater": 11
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1168,
    "age_5_17": 301,
    "age_18_greater": 21
  },
  {
    "state": "Delhi",
    "district": "East Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 830,
    "age_5_17": 134,
    "age_18_greater": 6
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 491,
    "age_5_17": 1124,
    "age_18_greater": 293
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 180,
    "age_5_17": 448,
    "age_18_greater": 267
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 70,
    "age_5_17": 469,
    "age_18_greater": 341
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 73,
    "age_5_17": 606,
    "age_18_greater": 387
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 136,
    "age_5_17": 464,
    "age_18_greater": 185
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 26,
    "age_5_17": 135,
    "age_18_greater": 78
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 33,
    "age_5_17": 99,
    "age_18_greater": 117
  },
  {
    "state": "Meghalaya",
    "district": "East Garo Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 21,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "East Godavari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2291,
    "age_5_17": 209,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "East Godavari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1361,
    "age_5_17": 126,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "East Godavari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2041,
    "age_5_17": 116,
    "age_18_greater": 5
  },
  {
    "state": "Andhra Pradesh",
    "district": "East Godavari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1468,
    "age_5_17": 56,
    "age_18_greater": 1
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 434,
    "age_5_17": 765,
    "age_18_greater": 283
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 125,
    "age_5_17": 248,
    "age_18_greater": 256
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 96,
    "age_5_17": 414,
    "age_18_greater": 308
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 200,
    "age_5_17": 571,
    "age_18_greater": 516
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 64,
    "age_5_17": 173,
    "age_18_greater": 171
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 38,
    "age_5_17": 85,
    "age_18_greater": 105
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 75,
    "age_18_greater": 143
  },
  {
    "state": "Meghalaya",
    "district": "East Jaintia Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 23,
    "age_18_greater": 14
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Kameng",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 47,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Kameng",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 18,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Kameng",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 14,
    "age_5_17": 16,
    "age_18_greater": 14
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Kameng",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 44,
    "age_5_17": 92,
    "age_18_greater": 164
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1437,
    "age_5_17": 4688,
    "age_18_greater": 1673
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 768,
    "age_5_17": 2259,
    "age_18_greater": 1867
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 287,
    "age_5_17": 1875,
    "age_18_greater": 978
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 756,
    "age_5_17": 3426,
    "age_18_greater": 2404
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 406,
    "age_5_17": 1031,
    "age_18_greater": 885
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 236,
    "age_5_17": 527,
    "age_18_greater": 638
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 225,
    "age_5_17": 517,
    "age_18_greater": 1106
  },
  {
    "state": "Meghalaya",
    "district": "East Khasi Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 99,
    "age_5_17": 191,
    "age_18_greater": 233
  },
  {
    "state": "West Bengal",
    "district": "East Midnapore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 640,
    "age_5_17": 134,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "East Midnapore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 457,
    "age_5_17": 72,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "East Midnapore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 503,
    "age_5_17": 85,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "East Midnapore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 196,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "East Midnapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "East Nimar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 189,
    "age_5_17": 254,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "East Nimar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 686,
    "age_5_17": 574,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "East Nimar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 392,
    "age_5_17": 268,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "East Nimar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 563,
    "age_5_17": 237,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "East Nimar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 508,
    "age_5_17": 167,
    "age_18_greater": 4
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Siang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 29,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Siang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Siang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 23,
    "age_5_17": 29,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "East Siang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "East Sikkim",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 67,
    "age_5_17": 77,
    "age_18_greater": 7
  },
  {
    "state": "Sikkim",
    "district": "East Sikkim",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 40,
    "age_5_17": 26,
    "age_18_greater": 5
  },
  {
    "state": "Sikkim",
    "district": "East Sikkim",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 50,
    "age_5_17": 26,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "East Sikkim",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 27,
    "age_5_17": 7,
    "age_18_greater": 6
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 55,
    "age_5_17": 54,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 180,
    "age_5_17": 100,
    "age_18_greater": 13
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1572,
    "age_5_17": 808,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 985,
    "age_5_17": 322,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1598,
    "age_5_17": 540,
    "age_18_greater": 36
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbhum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1593,
    "age_5_17": 285,
    "age_18_greater": 18
  },
  {
    "state": "Jharkhand",
    "district": "East Singhbum",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 848,
    "age_5_17": 546,
    "age_18_greater": 53
  },
  {
    "state": "Meghalaya",
    "district": "Eastern West Khasi Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 102,
    "age_18_greater": 2
  },
  {
    "state": "Meghalaya",
    "district": "Eastern West Khasi Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 63,
    "age_18_greater": 2
  },
  {
    "state": "Meghalaya",
    "district": "Eastern West Khasi Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 45,
    "age_18_greater": 0
  },
  {
    "state": "Meghalaya",
    "district": "Eastern West Khasi Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 16,
    "age_18_greater": 585
  },
  {
    "state": "Andhra Pradesh",
    "district": "Eluru",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 165,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Eluru",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 100,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Eluru",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 180,
    "age_5_17": 13,
    "age_18_greater": 10
  },
  {
    "state": "Andhra Pradesh",
    "district": "Eluru",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 123,
    "age_5_17": 6,
    "age_18_greater": 4
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 70,
    "age_5_17": 58,
    "age_18_greater": 11
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 87,
    "age_5_17": 111,
    "age_18_greater": 26
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1092,
    "age_5_17": 559,
    "age_18_greater": 17
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1013,
    "age_5_17": 369,
    "age_18_greater": 38
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1244,
    "age_5_17": 467,
    "age_18_greater": 153
  },
  {
    "state": "Kerala",
    "district": "Ernakulam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 679,
    "age_5_17": 243,
    "age_18_greater": 87
  },
  {
    "state": "Tamil Nadu",
    "district": "Erode",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1879,
    "age_5_17": 320,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Erode",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 966,
    "age_5_17": 243,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Erode",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1350,
    "age_5_17": 346,
    "age_18_greater": 5
  },
  {
    "state": "Tamil Nadu",
    "district": "Erode",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 769,
    "age_5_17": 136,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 724,
    "age_5_17": 354,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1092,
    "age_5_17": 457,
    "age_18_greater": 48
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2059,
    "age_5_17": 1625,
    "age_18_greater": 48
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 956,
    "age_5_17": 686,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 479,
    "age_5_17": 332,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 835,
    "age_5_17": 582,
    "age_18_greater": 24
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etah",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 615,
    "age_5_17": 309,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 348,
    "age_5_17": 226,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 551,
    "age_5_17": 456,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1155,
    "age_5_17": 994,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 581,
    "age_5_17": 378,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 906,
    "age_5_17": 512,
    "age_18_greater": 26
  },
  {
    "state": "Uttar Pradesh",
    "district": "Etawah",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 632,
    "age_5_17": 299,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Faizabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1576,
    "age_5_17": 1293,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Faizabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 841,
    "age_5_17": 572,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Faizabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 956,
    "age_5_17": 636,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Faizabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 679,
    "age_5_17": 370,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 80,
    "age_5_17": 60,
    "age_18_greater": 10
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1291,
    "age_5_17": 290,
    "age_18_greater": 25
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1358,
    "age_5_17": 311,
    "age_18_greater": 32
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1698,
    "age_5_17": 483,
    "age_18_greater": 83
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2678,
    "age_5_17": 733,
    "age_18_greater": 54
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1712,
    "age_5_17": 486,
    "age_18_greater": 34
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1018,
    "age_5_17": 216,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1839,
    "age_5_17": 471,
    "age_18_greater": 70
  },
  {
    "state": "Haryana",
    "district": "Faridabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 933,
    "age_5_17": 175,
    "age_18_greater": 8
  },
  {
    "state": "Punjab",
    "district": "Faridkot",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 339,
    "age_5_17": 41,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Faridkot",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 108,
    "age_5_17": 22,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Faridkot",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 205,
    "age_5_17": 24,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Faridkot",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 141,
    "age_5_17": 12,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Farrukhabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 73,
    "age_5_17": 102,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Farrukhabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 843,
    "age_5_17": 1069,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Farrukhabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 444,
    "age_5_17": 551,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Farrukhabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 792,
    "age_5_17": 730,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Farrukhabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 692,
    "age_5_17": 492,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Fatehabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 572,
    "age_5_17": 35,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Fatehabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 648,
    "age_5_17": 20,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Fatehabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 768,
    "age_5_17": 24,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Fatehabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 522,
    "age_5_17": 13,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Fatehgarh Sahib",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 361,
    "age_5_17": 38,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Fatehgarh Sahib",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 163,
    "age_5_17": 37,
    "age_18_greater": 5
  },
  {
    "state": "Punjab",
    "district": "Fatehgarh Sahib",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 234,
    "age_5_17": 43,
    "age_18_greater": 4
  },
  {
    "state": "Punjab",
    "district": "Fatehgarh Sahib",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 133,
    "age_5_17": 26,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 166,
    "age_5_17": 136,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 274,
    "age_5_17": 224,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 251,
    "age_5_17": 344,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1271,
    "age_5_17": 1283,
    "age_18_greater": 86
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1641,
    "age_5_17": 1516,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 855,
    "age_5_17": 709,
    "age_18_greater": 44
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1185,
    "age_5_17": 856,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Fatehpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 883,
    "age_5_17": 514,
    "age_18_greater": 6
  },
  {
    "state": "Punjab",
    "district": "Fazilka",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 756,
    "age_5_17": 123,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Fazilka",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 281,
    "age_5_17": 48,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Fazilka",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 344,
    "age_5_17": 51,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Fazilka",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 249,
    "age_5_17": 49,
    "age_18_greater": 5
  },
  {
    "state": "Punjab",
    "district": "Ferozepur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 555,
    "age_5_17": 46,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Ferozepur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 227,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Ferozepur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 327,
    "age_5_17": 19,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Ferozepur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 153,
    "age_5_17": 19,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 93,
    "age_5_17": 77,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1568,
    "age_5_17": 809,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1940,
    "age_5_17": 1040,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1380,
    "age_5_17": 1269,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 645,
    "age_5_17": 532,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 887,
    "age_5_17": 670,
    "age_18_greater": 35
  },
  {
    "state": "Uttar Pradesh",
    "district": "Firozabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 737,
    "age_5_17": 529,
    "age_18_greater": 5
  },
  {
    "state": "Punjab",
    "district": "Firozpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 185,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Firozpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 47,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Firozpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 68,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Firozpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 47,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1786,
    "age_5_17": 141,
    "age_18_greater": 19
  },
  {
    "state": "Karnataka",
    "district": "Gadag",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 591,
    "age_5_17": 53,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Gadag",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1059,
    "age_5_17": 104,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 652,
    "age_5_17": 51,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 59,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 16,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 39,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gadag *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 21,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gadchiroli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 815,
    "age_5_17": 148,
    "age_18_greater": 7
  },
  {
    "state": "Maharashtra",
    "district": "Gadchiroli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 267,
    "age_5_17": 30,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Gadchiroli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 408,
    "age_5_17": 42,
    "age_18_greater": 12
  },
  {
    "state": "Maharashtra",
    "district": "Gadchiroli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 594,
    "age_5_17": 48,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 803,
    "age_5_17": 165,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 281,
    "age_5_17": 49,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 361,
    "age_5_17": 53,
    "age_18_greater": 9
  },
  {
    "state": "Orissa",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 213,
    "age_5_17": 51,
    "age_18_greater": 5
  },
  {
    "state": "Orissa",
    "district": "Gajapati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ganderbal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 246,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ganderbal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 140,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ganderbal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 216,
    "age_5_17": 17,
    "age_18_greater": 8
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ganderbal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 171,
    "age_5_17": 5,
    "age_18_greater": 2
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 495,
    "age_5_17": 138,
    "age_18_greater": 156
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 251,
    "age_5_17": 28,
    "age_18_greater": 16
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 204,
    "age_5_17": 67,
    "age_18_greater": 41
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 322,
    "age_5_17": 96,
    "age_18_greater": 129
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 941,
    "age_5_17": 184,
    "age_18_greater": 46
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 311,
    "age_5_17": 77,
    "age_18_greater": 38
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 903,
    "age_5_17": 160,
    "age_18_greater": 189
  },
  {
    "state": "Gujarat",
    "district": "Gandhinagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 648,
    "age_5_17": 87,
    "age_18_greater": 123
  },
  {
    "state": "Rajasthan",
    "district": "Ganganagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1464,
    "age_5_17": 551,
    "age_18_greater": 9
  },
  {
    "state": "Rajasthan",
    "district": "Ganganagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 578,
    "age_5_17": 178,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Ganganagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 852,
    "age_5_17": 266,
    "age_18_greater": 26
  },
  {
    "state": "Rajasthan",
    "district": "Ganganagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1292,
    "age_5_17": 281,
    "age_18_greater": 5
  },
  {
    "state": "Odisha",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2415,
    "age_5_17": 403,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 109,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1324,
    "age_5_17": 188,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 86,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1577,
    "age_5_17": 230,
    "age_18_greater": 5
  },
  {
    "state": "Orissa",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 89,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1393,
    "age_5_17": 175,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Ganjam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 70,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1431,
    "age_5_17": 565,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 771,
    "age_5_17": 263,
    "age_18_greater": 7
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1453,
    "age_5_17": 471,
    "age_18_greater": 7
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 868,
    "age_5_17": 236,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 87,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 71,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 99,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Garhwa *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 57,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Garhwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 18,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Garhwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Garhwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Garhwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Gariyaband",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 446,
    "age_5_17": 75,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Gariyaband",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 244,
    "age_5_17": 38,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Gariyaband",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 371,
    "age_5_17": 77,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Gariyaband",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 246,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurela-pendra-marwahi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 41,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurela-pendra-marwahi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 28,
    "age_5_17": 8,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurela-pendra-marwahi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 28,
    "age_5_17": 3,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurela-pendra-marwahi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 18,
    "age_5_17": 1,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurella Pendra Marwahi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 403,
    "age_5_17": 185,
    "age_18_greater": 43
  },
  {
    "state": "Chhattisgarh",
    "district": "Gaurella Pendra Marwahi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 220,
    "age_5_17": 105,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 175,
    "age_5_17": 636,
    "age_18_greater": 72
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1192,
    "age_5_17": 1186,
    "age_18_greater": 113
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 867,
    "age_5_17": 915,
    "age_18_greater": 52
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 805,
    "age_5_17": 1017,
    "age_18_greater": 87
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1392,
    "age_5_17": 1633,
    "age_18_greater": 150
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1489,
    "age_5_17": 1627,
    "age_18_greater": 54
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 988,
    "age_5_17": 725,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1320,
    "age_5_17": 1022,
    "age_18_greater": 45
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gautam Buddha Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 774,
    "age_5_17": 557,
    "age_18_greater": 37
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 437,
    "age_5_17": 1371,
    "age_18_greater": 54
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 452,
    "age_5_17": 1796,
    "age_18_greater": 69
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 515,
    "age_5_17": 1341,
    "age_18_greater": 37
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 546,
    "age_5_17": 2601,
    "age_18_greater": 65
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1467,
    "age_5_17": 4143,
    "age_18_greater": 42
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 996,
    "age_5_17": 3134,
    "age_18_greater": 104
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1039,
    "age_5_17": 2688,
    "age_18_greater": 25
  },
  {
    "state": "Bihar",
    "district": "Gaya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1270,
    "age_5_17": 3170,
    "age_18_greater": 39
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 129,
    "age_5_17": 471,
    "age_18_greater": 89
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 882,
    "age_5_17": 747,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1145,
    "age_5_17": 1293,
    "age_18_greater": 42
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1776,
    "age_5_17": 1881,
    "age_18_greater": 59
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2979,
    "age_5_17": 2524,
    "age_18_greater": 71
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1473,
    "age_5_17": 1156,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2356,
    "age_5_17": 1753,
    "age_18_greater": 51
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghaziabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1244,
    "age_5_17": 868,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghazipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1772,
    "age_5_17": 3069,
    "age_18_greater": 26
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghazipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 769,
    "age_5_17": 1305,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghazipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1018,
    "age_5_17": 1636,
    "age_18_greater": 18
  },
  {
    "state": "Uttar Pradesh",
    "district": "Ghazipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 764,
    "age_5_17": 884,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1262,
    "age_5_17": 265,
    "age_18_greater": 179
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 181,
    "age_5_17": 53,
    "age_18_greater": 26
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1000,
    "age_5_17": 287,
    "age_18_greater": 57
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 675,
    "age_5_17": 184,
    "age_18_greater": 22
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 252,
    "age_5_17": 49,
    "age_18_greater": 53
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 582,
    "age_5_17": 104,
    "age_18_greater": 19
  },
  {
    "state": "Gujarat",
    "district": "Gir Somnath",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 423,
    "age_5_17": 33,
    "age_18_greater": 17
  },
  {
    "state": "Jharkhand",
    "district": "Giridih",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 871,
    "age_5_17": 921,
    "age_18_greater": 27
  },
  {
    "state": "Jharkhand",
    "district": "Giridih",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2033,
    "age_5_17": 1714,
    "age_18_greater": 21
  },
  {
    "state": "Jharkhand",
    "district": "Giridih",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1258,
    "age_5_17": 1108,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Giridih",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2101,
    "age_5_17": 1839,
    "age_18_greater": 19
  },
  {
    "state": "Jharkhand",
    "district": "Giridih",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1432,
    "age_5_17": 944,
    "age_18_greater": 4
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 587,
    "age_5_17": 294,
    "age_18_greater": 283
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 412,
    "age_5_17": 253,
    "age_18_greater": 116
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 17,
    "age_5_17": 43,
    "age_18_greater": 20
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2119,
    "age_5_17": 590,
    "age_18_greater": 189
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1671,
    "age_5_17": 448,
    "age_18_greater": 29
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 750,
    "age_5_17": 224,
    "age_18_greater": 22
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 794,
    "age_5_17": 244,
    "age_18_greater": 48
  },
  {
    "state": "Assam",
    "district": "Goalpara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 531,
    "age_5_17": 124,
    "age_18_greater": 90
  },
  {
    "state": "Jharkhand",
    "district": "Godda",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 79,
    "age_5_17": 46,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Godda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 995,
    "age_5_17": 765,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Godda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 507,
    "age_5_17": 373,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Godda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1067,
    "age_5_17": 652,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Godda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 590,
    "age_5_17": 299,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 568,
    "age_5_17": 501,
    "age_18_greater": 144
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 807,
    "age_5_17": 826,
    "age_18_greater": 230
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 561,
    "age_5_17": 502,
    "age_18_greater": 202
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1617,
    "age_5_17": 1002,
    "age_18_greater": 850
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 907,
    "age_5_17": 457,
    "age_18_greater": 64
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 297,
    "age_5_17": 223,
    "age_18_greater": 216
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 434,
    "age_5_17": 347,
    "age_18_greater": 212
  },
  {
    "state": "Assam",
    "district": "Golaghat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 346,
    "age_5_17": 189,
    "age_18_greater": 3
  },
  {
    "state": "Tripura",
    "district": "Gomati",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 69,
    "age_5_17": 45,
    "age_18_greater": 10
  },
  {
    "state": "Tripura",
    "district": "Gomati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 122,
    "age_5_17": 52,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Gomati",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 55,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "Tripura",
    "district": "Gomati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 95,
    "age_5_17": 55,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Gomati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 123,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 392,
    "age_5_17": 260,
    "age_18_greater": 50
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1120,
    "age_5_17": 1506,
    "age_18_greater": 96
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2144,
    "age_5_17": 2479,
    "age_18_greater": 66
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1111,
    "age_5_17": 1213,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1629,
    "age_5_17": 1273,
    "age_18_greater": 24
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gonda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1049,
    "age_5_17": 763,
    "age_18_greater": 69
  },
  {
    "state": "Maharashtra",
    "district": "Gondia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 5,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 5,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1022,
    "age_5_17": 58,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 483,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 704,
    "age_5_17": 22,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 571,
    "age_5_17": 15,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 18,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 13,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 13,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Gondiya *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 385,
    "age_5_17": 495,
    "age_18_greater": 27
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 577,
    "age_5_17": 1145,
    "age_18_greater": 51
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 882,
    "age_5_17": 1961,
    "age_18_greater": 48
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1132,
    "age_5_17": 1917,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 764,
    "age_5_17": 1426,
    "age_18_greater": 31
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 794,
    "age_5_17": 1420,
    "age_18_greater": 24
  },
  {
    "state": "Bihar",
    "district": "Gopalganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 769,
    "age_5_17": 1285,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 13,
    "age_5_17": 36,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 378,
    "age_5_17": 727,
    "age_18_greater": 86
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 129,
    "age_5_17": 352,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 213,
    "age_5_17": 572,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1187,
    "age_5_17": 2262,
    "age_18_greater": 130
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1898,
    "age_5_17": 3260,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1117,
    "age_5_17": 1669,
    "age_18_greater": 52
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1534,
    "age_5_17": 2063,
    "age_18_greater": 29
  },
  {
    "state": "Uttar Pradesh",
    "district": "Gorakhpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 985,
    "age_5_17": 1149,
    "age_18_greater": 8
  },
  {
    "state": "Karnataka",
    "district": "Gulbarga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1151,
    "age_5_17": 235,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gulbarga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 741,
    "age_5_17": 145,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Gulbarga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 960,
    "age_5_17": 208,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Gulbarga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 798,
    "age_5_17": 115,
    "age_18_greater": 2
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 228,
    "age_5_17": 131,
    "age_18_greater": 10
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 383,
    "age_5_17": 286,
    "age_18_greater": 23
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1281,
    "age_5_17": 927,
    "age_18_greater": 2
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 628,
    "age_5_17": 398,
    "age_18_greater": 26
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 881,
    "age_5_17": 518,
    "age_18_greater": 15
  },
  {
    "state": "Jharkhand",
    "district": "Gumla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 682,
    "age_5_17": 264,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 633,
    "age_5_17": 120,
    "age_18_greater": 31
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 637,
    "age_5_17": 423,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2653,
    "age_5_17": 878,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 784,
    "age_5_17": 223,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1410,
    "age_5_17": 313,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Guna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1379,
    "age_5_17": 292,
    "age_18_greater": 19
  },
  {
    "state": "Andhra Pradesh",
    "district": "Guntur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2402,
    "age_5_17": 337,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Guntur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1514,
    "age_5_17": 219,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Guntur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2698,
    "age_5_17": 257,
    "age_18_greater": 14
  },
  {
    "state": "Andhra Pradesh",
    "district": "Guntur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2155,
    "age_5_17": 112,
    "age_18_greater": 11
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 233,
    "age_5_17": 36,
    "age_18_greater": 49
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 114,
    "age_5_17": 20,
    "age_18_greater": 13
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 549,
    "age_5_17": 99,
    "age_18_greater": 10
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1298,
    "age_5_17": 152,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 726,
    "age_5_17": 79,
    "age_18_greater": 12
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 984,
    "age_5_17": 113,
    "age_18_greater": 33
  },
  {
    "state": "Punjab",
    "district": "Gurdaspur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 532,
    "age_5_17": 59,
    "age_18_greater": 6
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 494,
    "age_5_17": 192,
    "age_18_greater": 36
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 512,
    "age_5_17": 143,
    "age_18_greater": 13
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1395,
    "age_5_17": 311,
    "age_18_greater": 53
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 866,
    "age_5_17": 169,
    "age_18_greater": 8
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1387,
    "age_5_17": 297,
    "age_18_greater": 43
  },
  {
    "state": "Haryana",
    "district": "Gurgaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 763,
    "age_5_17": 135,
    "age_18_greater": 44
  },
  {
    "state": "Haryana",
    "district": "Gurugram",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 18,
    "age_5_17": 19,
    "age_18_greater": 13
  },
  {
    "state": "Haryana",
    "district": "Gurugram",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 534,
    "age_5_17": 207,
    "age_18_greater": 81
  },
  {
    "state": "Haryana",
    "district": "Gurugram",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1252,
    "age_5_17": 399,
    "age_18_greater": 113
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 179,
    "age_5_17": 86,
    "age_18_greater": 62
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 855,
    "age_5_17": 370,
    "age_18_greater": 113
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 338,
    "age_5_17": 108,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1064,
    "age_5_17": 789,
    "age_18_greater": 77
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2413,
    "age_5_17": 1821,
    "age_18_greater": 175
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2608,
    "age_5_17": 1077,
    "age_18_greater": 30
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 961,
    "age_5_17": 330,
    "age_18_greater": 38
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2245,
    "age_5_17": 599,
    "age_18_greater": 260
  },
  {
    "state": "Madhya Pradesh",
    "district": "Gwalior",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1447,
    "age_5_17": 422,
    "age_18_greater": 57
  },
  {
    "state": "WEST BENGAL",
    "district": "HOOGHLY",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "HOOGHLY",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "WEST BENGAL",
    "district": "HOOGHLY",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "WESTBENGAL",
    "district": "HOOGHLY",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "HOOGHLY",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "HOWRAH",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "HOWRAH",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 242,
    "age_5_17": 143,
    "age_18_greater": 78
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 683,
    "age_5_17": 287,
    "age_18_greater": 46
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1295,
    "age_5_17": 468,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 562,
    "age_5_17": 176,
    "age_18_greater": 116
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 665,
    "age_5_17": 219,
    "age_18_greater": 45
  },
  {
    "state": "Assam",
    "district": "Hailakandi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 379,
    "age_5_17": 148,
    "age_18_greater": 25
  },
  {
    "state": "Himachal Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 271,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 777,
    "age_5_17": 584,
    "age_18_greater": 10
  },
  {
    "state": "Himachal Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 292,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 306,
    "age_5_17": 260,
    "age_18_greater": 8
  },
  {
    "state": "Himachal Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 389,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 572,
    "age_5_17": 357,
    "age_18_greater": 5
  },
  {
    "state": "Himachal Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 229,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hamirpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 385,
    "age_5_17": 197,
    "age_18_greater": 4
  },
  {
    "state": "Telangana",
    "district": "Hanumakonda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 333,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Hanumakonda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 227,
    "age_5_17": 30,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Hanumakonda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 228,
    "age_5_17": 29,
    "age_18_greater": 4
  },
  {
    "state": "Telangana",
    "district": "Hanumakonda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 128,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Hanumangarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 456,
    "age_5_17": 284,
    "age_18_greater": 11
  },
  {
    "state": "Rajasthan",
    "district": "Hanumangarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1368,
    "age_5_17": 384,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Hanumangarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 493,
    "age_5_17": 180,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Hanumangarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 706,
    "age_5_17": 222,
    "age_18_greater": 19
  },
  {
    "state": "Rajasthan",
    "district": "Hanumangarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 605,
    "age_5_17": 201,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Haora",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 788,
    "age_5_17": 368,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Haora",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 463,
    "age_5_17": 222,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Haora",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 511,
    "age_5_17": 228,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Haora",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 99,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 681,
    "age_5_17": 450,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1010,
    "age_5_17": 770,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 904,
    "age_5_17": 553,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 554,
    "age_5_17": 338,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 679,
    "age_5_17": 366,
    "age_18_greater": 7
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 622,
    "age_5_17": 294,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 666,
    "age_5_17": 203,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 240,
    "age_5_17": 52,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 412,
    "age_5_17": 76,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 415,
    "age_5_17": 52,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 221,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 79,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 132,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Harda *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 71,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1123,
    "age_5_17": 1368,
    "age_18_greater": 44
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 4089,
    "age_5_17": 4330,
    "age_18_greater": 75
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2670,
    "age_5_17": 2696,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1424,
    "age_5_17": 1237,
    "age_18_greater": 53
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1929,
    "age_5_17": 1741,
    "age_18_greater": 63
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hardoi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1356,
    "age_5_17": 918,
    "age_18_greater": 28
  },
  {
    "state": "Uttarakhand",
    "district": "Hardwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 33,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Hardwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 35,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Hardwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 36,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Hardwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 17,
    "age_5_17": 15,
    "age_18_greater": 28
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 565,
    "age_5_17": 156,
    "age_18_greater": 11
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1185,
    "age_5_17": 407,
    "age_18_greater": 8
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 967,
    "age_5_17": 209,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1105,
    "age_5_17": 258,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Haridwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 849,
    "age_5_17": 170,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Hasan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 266,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Hasan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 180,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Hasan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 261,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Hasan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 237,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Hassan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 728,
    "age_5_17": 33,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Hassan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 462,
    "age_5_17": 29,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Hassan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 625,
    "age_5_17": 53,
    "age_18_greater": 16
  },
  {
    "state": "Karnataka",
    "district": "Hassan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 518,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 478,
    "age_5_17": 319,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 174,
    "age_5_17": 282,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1017,
    "age_5_17": 796,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 497,
    "age_5_17": 328,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 827,
    "age_5_17": 503,
    "age_18_greater": 24
  },
  {
    "state": "Uttar Pradesh",
    "district": "Hathras",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 822,
    "age_5_17": 368,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Haveri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1233,
    "age_5_17": 118,
    "age_18_greater": 22
  },
  {
    "state": "Karnataka",
    "district": "Haveri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 730,
    "age_5_17": 52,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Haveri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1015,
    "age_5_17": 58,
    "age_18_greater": 17
  },
  {
    "state": "Karnataka",
    "district": "Haveri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 939,
    "age_5_17": 38,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Haveri *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 30,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Haveri *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 23,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Haveri *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 27,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Haveri *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 31,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hawrah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hawrah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribag",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 120,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribag",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 77,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribag",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 107,
    "age_5_17": 73,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribag",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 54,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribagh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 169,
    "age_5_17": 65,
    "age_18_greater": 14
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribagh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1234,
    "age_5_17": 717,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribagh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 766,
    "age_5_17": 447,
    "age_18_greater": 2
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribagh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1239,
    "age_5_17": 559,
    "age_18_greater": 15
  },
  {
    "state": "Jharkhand",
    "district": "Hazaribagh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 717,
    "age_5_17": 260,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 913,
    "age_5_17": 95,
    "age_18_greater": 136
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 246,
    "age_5_17": 31,
    "age_18_greater": 34
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 261,
    "age_5_17": 62,
    "age_18_greater": 14
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2245,
    "age_5_17": 649,
    "age_18_greater": 112
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1009,
    "age_5_17": 352,
    "age_18_greater": 31
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 504,
    "age_5_17": 101,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 635,
    "age_5_17": 107,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 546,
    "age_5_17": 60,
    "age_18_greater": 9
  },
  {
    "state": "Maharashtra",
    "district": "Hingoli *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Hisar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 350,
    "age_5_17": 46,
    "age_18_greater": 10
  },
  {
    "state": "Haryana",
    "district": "Hisar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1327,
    "age_5_17": 84,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Hisar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1096,
    "age_5_17": 56,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Hisar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1324,
    "age_5_17": 88,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Hisar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 830,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Hnahthial",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Hnahthial",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 27,
    "age_5_17": 42,
    "age_18_greater": 20
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 763,
    "age_5_17": 253,
    "age_18_greater": 100
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 277,
    "age_5_17": 76,
    "age_18_greater": 11
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1750,
    "age_5_17": 350,
    "age_18_greater": 23
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1102,
    "age_5_17": 352,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 539,
    "age_5_17": 196,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 524,
    "age_5_17": 221,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Hojai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 306,
    "age_5_17": 117,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghiy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 177,
    "age_5_17": 111,
    "age_18_greater": 12
  },
  {
    "state": "West  Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 8,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "West Bangal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3970,
    "age_5_17": 1534,
    "age_18_greater": 82
  },
  {
    "state": "Westbengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bangal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2693,
    "age_5_17": 767,
    "age_18_greater": 3
  },
  {
    "state": "Westbengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West  Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bangal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2642,
    "age_5_17": 931,
    "age_18_greater": 10
  },
  {
    "state": "Westbengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West  Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bangal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1650,
    "age_5_17": 510,
    "age_18_greater": 235
  },
  {
    "state": "Westbengal",
    "district": "Hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Hoshangabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 179,
    "age_5_17": 90,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Hoshangabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2154,
    "age_5_17": 329,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Hoshangabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 733,
    "age_5_17": 140,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Hoshangabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1171,
    "age_5_17": 149,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Hoshangabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 921,
    "age_5_17": 104,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 267,
    "age_5_17": 35,
    "age_18_greater": 34
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 197,
    "age_5_17": 48,
    "age_18_greater": 18
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 234,
    "age_5_17": 59,
    "age_18_greater": 20
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 277,
    "age_5_17": 66,
    "age_18_greater": 22
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 902,
    "age_5_17": 67,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 472,
    "age_5_17": 40,
    "age_18_greater": 11
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 744,
    "age_5_17": 60,
    "age_18_greater": 41
  },
  {
    "state": "Punjab",
    "district": "Hoshiarpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 422,
    "age_5_17": 26,
    "age_18_greater": 69
  },
  {
    "state": "West Bengal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 149,
    "age_5_17": 200,
    "age_18_greater": 12
  },
  {
    "state": "West Bangal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3043,
    "age_5_17": 1156,
    "age_18_greater": 33
  },
  {
    "state": "West Bangal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1906,
    "age_5_17": 706,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2053,
    "age_5_17": 720,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Howrah",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 986,
    "age_5_17": 342,
    "age_18_greater": 97
  },
  {
    "state": "West Bengal",
    "district": "Hugli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 59,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hugli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 26,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hugli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 31,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Hugli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 32,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 252,
    "age_5_17": 32,
    "age_18_greater": 22
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 736,
    "age_5_17": 154,
    "age_18_greater": 21
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 690,
    "age_5_17": 479,
    "age_18_greater": 49
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 5199,
    "age_5_17": 1820,
    "age_18_greater": 233
  },
  {
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1151,
    "age_5_17": 339,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3790,
    "age_5_17": 1074,
    "age_18_greater": 78
  },
  {
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 967,
    "age_5_17": 280,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3289,
    "age_5_17": 740,
    "age_18_greater": 58
  },
  {
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1083,
    "age_5_17": 284,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3632,
    "age_5_17": 821,
    "age_18_greater": 139
  },
  {
    "state": "Andhra Pradesh",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 630,
    "age_5_17": 105,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Hyderabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2133,
    "age_5_17": 480,
    "age_18_greater": 69
  },
  {
    "state": "Kerala",
    "district": "Idukki",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 415,
    "age_5_17": 94,
    "age_18_greater": 1
  },
  {
    "state": "Kerala",
    "district": "Idukki",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 339,
    "age_5_17": 69,
    "age_18_greater": 7
  },
  {
    "state": "Kerala",
    "district": "Idukki",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 423,
    "age_5_17": 64,
    "age_18_greater": 15
  },
  {
    "state": "Kerala",
    "district": "Idukki",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 222,
    "age_5_17": 44,
    "age_18_greater": 5
  },
  {
    "state": "Manipur",
    "district": "Imphal East",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 151,
    "age_5_17": 154,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Imphal East",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 115,
    "age_5_17": 160,
    "age_18_greater": 4
  },
  {
    "state": "Manipur",
    "district": "Imphal East",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 169,
    "age_5_17": 150,
    "age_18_greater": 4
  },
  {
    "state": "Manipur",
    "district": "Imphal East",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 124,
    "age_5_17": 100,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Imphal West",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 44,
    "age_5_17": 37,
    "age_18_greater": 25
  },
  {
    "state": "Manipur",
    "district": "Imphal West",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 146,
    "age_5_17": 152,
    "age_18_greater": 3
  },
  {
    "state": "Manipur",
    "district": "Imphal West",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 125,
    "age_5_17": 111,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Imphal West",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 186,
    "age_5_17": 169,
    "age_18_greater": 3
  },
  {
    "state": "Manipur",
    "district": "Imphal West",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 144,
    "age_5_17": 90,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 830,
    "age_5_17": 205,
    "age_18_greater": 48
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 519,
    "age_5_17": 111,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 411,
    "age_5_17": 138,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3340,
    "age_5_17": 1547,
    "age_18_greater": 107
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3434,
    "age_5_17": 1158,
    "age_18_greater": 139
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2066,
    "age_5_17": 581,
    "age_18_greater": 107
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3386,
    "age_5_17": 818,
    "age_18_greater": 97
  },
  {
    "state": "Madhya Pradesh",
    "district": "Indore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2699,
    "age_5_17": 451,
    "age_18_greater": 81
  },
  {
    "state": "Odisha",
    "district": "JAJPUR",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 697,
    "age_5_17": 220,
    "age_18_greater": 3
  },
  {
    "state": "Odisha",
    "district": "JAJPUR",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 355,
    "age_5_17": 87,
    "age_18_greater": 13
  },
  {
    "state": "Odisha",
    "district": "JAJPUR",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 529,
    "age_5_17": 76,
    "age_18_greater": 31
  },
  {
    "state": "Odisha",
    "district": "JAJPUR",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 386,
    "age_5_17": 73,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 125,
    "age_5_17": 23,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 361,
    "age_5_17": 87,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3260,
    "age_5_17": 674,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1909,
    "age_5_17": 340,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2787,
    "age_5_17": 368,
    "age_18_greater": 28
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jabalpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2211,
    "age_5_17": 221,
    "age_18_greater": 46
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 737,
    "age_5_17": 124,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1128,
    "age_5_17": 73,
    "age_18_greater": 9
  },
  {
    "state": "Orissa",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 506,
    "age_5_17": 64,
    "age_18_greater": 14
  },
  {
    "state": "Orissa",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 450,
    "age_5_17": 43,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Jagatsinghapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 6,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 176,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 196,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 132,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jagatsinghpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 122,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jagitial",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 562,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jagitial",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 355,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jagitial",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 285,
    "age_5_17": 22,
    "age_18_greater": 9
  },
  {
    "state": "Telangana",
    "district": "Jagitial",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 286,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Meghalaya",
    "district": "Jaintia Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 2601,
    "age_5_17": 671,
    "age_18_greater": 162
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 120,
    "age_5_17": 70,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2242,
    "age_5_17": 1110,
    "age_18_greater": 86
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6530,
    "age_5_17": 2576,
    "age_18_greater": 25
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2359,
    "age_5_17": 1156,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4561,
    "age_5_17": 1840,
    "age_18_greater": 391
  },
  {
    "state": "Rajasthan",
    "district": "Jaipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3023,
    "age_5_17": 1553,
    "age_18_greater": 47
  },
  {
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 46,
    "age_5_17": 74,
    "age_18_greater": 14
  },
  {
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 751,
    "age_5_17": 500,
    "age_18_greater": 8
  },
  {
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 271,
    "age_5_17": 165,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 336,
    "age_5_17": 217,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Jaisalmer",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 279,
    "age_5_17": 164,
    "age_18_greater": 5
  },
  {
    "state": "Odisha",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 739,
    "age_5_17": 216,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 32,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 405,
    "age_5_17": 112,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 18,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 488,
    "age_5_17": 76,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 24,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 382,
    "age_5_17": 77,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jajapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 19,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Jalandhar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1242,
    "age_5_17": 234,
    "age_18_greater": 10
  },
  {
    "state": "Punjab",
    "district": "Jalandhar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 770,
    "age_5_17": 179,
    "age_18_greater": 21
  },
  {
    "state": "Punjab",
    "district": "Jalandhar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 870,
    "age_5_17": 204,
    "age_18_greater": 28
  },
  {
    "state": "Punjab",
    "district": "Jalandhar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 432,
    "age_5_17": 115,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 221,
    "age_5_17": 102,
    "age_18_greater": 26
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 228,
    "age_5_17": 277,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 756,
    "age_5_17": 986,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 389,
    "age_5_17": 400,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 726,
    "age_5_17": 583,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jalaun",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 471,
    "age_5_17": 293,
    "age_18_greater": 27
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 360,
    "age_5_17": 53,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 506,
    "age_5_17": 92,
    "age_18_greater": 43
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1065,
    "age_5_17": 343,
    "age_18_greater": 55
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3346,
    "age_5_17": 1387,
    "age_18_greater": 25
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1392,
    "age_5_17": 269,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2036,
    "age_5_17": 252,
    "age_18_greater": 44
  },
  {
    "state": "Maharashtra",
    "district": "Jalgaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1749,
    "age_5_17": 183,
    "age_18_greater": 39
  },
  {
    "state": "Maharashtra",
    "district": "Jalna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1723,
    "age_5_17": 504,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Jalna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 877,
    "age_5_17": 149,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Jalna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1051,
    "age_5_17": 181,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Jalna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 976,
    "age_5_17": 110,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Jalor",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1186,
    "age_5_17": 672,
    "age_18_greater": 124
  },
  {
    "state": "Rajasthan",
    "district": "Jalor",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3095,
    "age_5_17": 1889,
    "age_18_greater": 8
  },
  {
    "state": "Rajasthan",
    "district": "Jalor",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 920,
    "age_5_17": 801,
    "age_18_greater": 5
  },
  {
    "state": "Rajasthan",
    "district": "Jalor",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1674,
    "age_5_17": 1349,
    "age_18_greater": 89
  },
  {
    "state": "Rajasthan",
    "district": "Jalor",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1007,
    "age_5_17": 1164,
    "age_18_greater": 8
  },
  {
    "state": "Rajasthan",
    "district": "Jalore",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 296,
    "age_5_17": 181,
    "age_18_greater": 13
  },
  {
    "state": "Rajasthan",
    "district": "Jalore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jalore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 194,
    "age_5_17": 62,
    "age_18_greater": 36
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 493,
    "age_5_17": 413,
    "age_18_greater": 74
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 74,
    "age_5_17": 176,
    "age_18_greater": 65
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 234,
    "age_5_17": 344,
    "age_18_greater": 65
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1783,
    "age_5_17": 1409,
    "age_18_greater": 65
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 849,
    "age_5_17": 720,
    "age_18_greater": 22
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1219,
    "age_5_17": 774,
    "age_18_greater": 17
  },
  {
    "state": "West Bengal",
    "district": "Jalpaiguri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 828,
    "age_5_17": 544,
    "age_18_greater": 194
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 55,
    "age_5_17": 16,
    "age_18_greater": 10
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 15,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1158,
    "age_5_17": 309,
    "age_18_greater": 10
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 16,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 795,
    "age_5_17": 184,
    "age_18_greater": 8
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 868,
    "age_5_17": 208,
    "age_18_greater": 5
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Jammu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 821,
    "age_5_17": 108,
    "age_18_greater": 3
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 240,
    "age_5_17": 43,
    "age_18_greater": 33
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 410,
    "age_5_17": 77,
    "age_18_greater": 67
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 764,
    "age_5_17": 195,
    "age_18_greater": 55
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1253,
    "age_5_17": 242,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 614,
    "age_5_17": 70,
    "age_18_greater": 9
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 973,
    "age_5_17": 117,
    "age_18_greater": 78
  },
  {
    "state": "Gujarat",
    "district": "Jamnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 744,
    "age_5_17": 55,
    "age_18_greater": 14
  },
  {
    "state": "Jharkhand",
    "district": "Jamtara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1140,
    "age_5_17": 424,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Jamtara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 650,
    "age_5_17": 308,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "Jamtara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 849,
    "age_5_17": 379,
    "age_18_greater": 6
  },
  {
    "state": "Jharkhand",
    "district": "Jamtara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 521,
    "age_5_17": 163,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1015,
    "age_5_17": 647,
    "age_18_greater": 30
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 245,
    "age_5_17": 292,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 323,
    "age_5_17": 426,
    "age_18_greater": 23
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1014,
    "age_5_17": 1266,
    "age_18_greater": 21
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 905,
    "age_5_17": 946,
    "age_18_greater": 50
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 987,
    "age_5_17": 904,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Jamui",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 704,
    "age_5_17": 548,
    "age_18_greater": 9
  },
  {
    "state": "Telangana",
    "district": "Jangaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 19,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 25,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 13,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangoan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 365,
    "age_5_17": 56,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangoan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 221,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangoan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 201,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jangoan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 105,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir - Champa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir - Champa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir - Champa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir - Champa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir Champa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir Champa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir Champa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir Champa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir-champa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1361,
    "age_5_17": 241,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir-champa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 828,
    "age_5_17": 115,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir-champa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1097,
    "age_5_17": 140,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Janjgir-champa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 780,
    "age_5_17": 76,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Jashpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 551,
    "age_5_17": 126,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Jashpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 295,
    "age_5_17": 134,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Jashpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 456,
    "age_5_17": 374,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Jashpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 364,
    "age_5_17": 241,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 70,
    "age_5_17": 213,
    "age_18_greater": 51
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 662,
    "age_5_17": 800,
    "age_18_greater": 64
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 262,
    "age_5_17": 766,
    "age_18_greater": 38
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1516,
    "age_5_17": 3510,
    "age_18_greater": 9
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 943,
    "age_5_17": 1942,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1079,
    "age_5_17": 1984,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jaunpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 868,
    "age_5_17": 1022,
    "age_18_greater": 14
  },
  {
    "state": "Telangana",
    "district": "Jayashankar Bhupalpally",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 238,
    "age_5_17": 60,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jayashankar Bhupalpally",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 185,
    "age_5_17": 51,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jayashankar Bhupalpally",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 166,
    "age_5_17": 39,
    "age_18_greater": 4
  },
  {
    "state": "Telangana",
    "district": "Jayashankar Bhupalpally",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 81,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 78,
    "age_5_17": 292,
    "age_18_greater": 48
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 27,
    "age_5_17": 219,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 235,
    "age_5_17": 1054,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 195,
    "age_5_17": 829,
    "age_18_greater": 49
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 181,
    "age_5_17": 835,
    "age_18_greater": 19
  },
  {
    "state": "Bihar",
    "district": "Jehanabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 199,
    "age_5_17": 598,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 466,
    "age_5_17": 372,
    "age_18_greater": 48
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 308,
    "age_5_17": 316,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 261,
    "age_5_17": 628,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 908,
    "age_5_17": 1760,
    "age_18_greater": 93
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1716,
    "age_5_17": 1543,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 688,
    "age_5_17": 651,
    "age_18_greater": 94
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1215,
    "age_5_17": 892,
    "age_18_greater": 30
  },
  {
    "state": "Madhya Pradesh",
    "district": "Jhabua",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1024,
    "age_5_17": 408,
    "age_18_greater": 29
  },
  {
    "state": "Haryana",
    "district": "Jhajjar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 804,
    "age_5_17": 36,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Jhajjar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 587,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Jhajjar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 665,
    "age_5_17": 27,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Jhajjar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 459,
    "age_5_17": 15,
    "age_18_greater": 3
  },
  {
    "state": "Haryana",
    "district": "Jhajjar *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhalawar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 112,
    "age_5_17": 49,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Jhalawar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2269,
    "age_5_17": 762,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Jhalawar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 577,
    "age_5_17": 302,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Jhalawar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1223,
    "age_5_17": 491,
    "age_18_greater": 33
  },
  {
    "state": "Rajasthan",
    "district": "Jhalawar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 797,
    "age_5_17": 398,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jhansi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 78,
    "age_5_17": 76,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jhansi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1477,
    "age_5_17": 1050,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jhansi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 706,
    "age_5_17": 401,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jhansi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1369,
    "age_5_17": 651,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jhansi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 940,
    "age_5_17": 341,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Jhargram",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 40,
    "age_5_17": 10,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Jhargram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 270,
    "age_5_17": 69,
    "age_18_greater": 10
  },
  {
    "state": "West Bengal",
    "district": "Jhargram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 143,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Jhargram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 184,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Jhargram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 104,
    "age_5_17": 26,
    "age_18_greater": 27
  },
  {
    "state": "Odisha",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 420,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 243,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 230,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 178,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Jharsuguda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 92,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 35,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 44,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 39,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunun",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2456,
    "age_5_17": 756,
    "age_18_greater": 16
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunun",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1011,
    "age_5_17": 330,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunun",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1368,
    "age_5_17": 391,
    "age_18_greater": 51
  },
  {
    "state": "Rajasthan",
    "district": "Jhunjhunun",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 914,
    "age_5_17": 299,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Jind",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1245,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Jind",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 847,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Jind",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 978,
    "age_5_17": 32,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Jind",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 659,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Jiribam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 19,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Jiribam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 13,
    "age_5_17": 38,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Jiribam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 24,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Jiribam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1624,
    "age_5_17": 565,
    "age_18_greater": 87
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 595,
    "age_5_17": 190,
    "age_18_greater": 15
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 520,
    "age_5_17": 204,
    "age_18_greater": 27
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1722,
    "age_5_17": 828,
    "age_18_greater": 66
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4211,
    "age_5_17": 2111,
    "age_18_greater": 119
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1505,
    "age_5_17": 702,
    "age_18_greater": 9
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2303,
    "age_5_17": 1211,
    "age_18_greater": 498
  },
  {
    "state": "Rajasthan",
    "district": "Jodhpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2083,
    "age_5_17": 913,
    "age_18_greater": 107
  },
  {
    "state": "Telangana",
    "district": "Jogulamba Gadwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 547,
    "age_5_17": 79,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jogulamba Gadwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 436,
    "age_5_17": 99,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Jogulamba Gadwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 397,
    "age_5_17": 87,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Jogulamba Gadwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 163,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 210,
    "age_5_17": 156,
    "age_18_greater": 154
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 17,
    "age_5_17": 24,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 24,
    "age_5_17": 19,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 633,
    "age_5_17": 323,
    "age_18_greater": 415
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 597,
    "age_5_17": 229,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 493,
    "age_5_17": 136,
    "age_18_greater": 119
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 626,
    "age_5_17": 152,
    "age_18_greater": 119
  },
  {
    "state": "Assam",
    "district": "Jorhat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 305,
    "age_5_17": 83,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Junagadh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 250,
    "age_5_17": 27,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Junagadh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1725,
    "age_5_17": 246,
    "age_18_greater": 18
  },
  {
    "state": "Gujarat",
    "district": "Junagadh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 565,
    "age_5_17": 72,
    "age_18_greater": 7
  },
  {
    "state": "Gujarat",
    "district": "Junagadh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1309,
    "age_5_17": 161,
    "age_18_greater": 51
  },
  {
    "state": "Gujarat",
    "district": "Junagadh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1027,
    "age_5_17": 62,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jyotiba Phule Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 17,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jyotiba Phule Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 16,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jyotiba Phule Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 17,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Jyotiba Phule Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.V.Rangareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 26,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.V.Rangareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 11,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.V.Rangareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.V.Rangareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 6,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 159,
    "age_5_17": 25,
    "age_18_greater": 28
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4459,
    "age_5_17": 1269,
    "age_18_greater": 41
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 5,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3359,
    "age_5_17": 958,
    "age_18_greater": 24
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3395,
    "age_5_17": 1034,
    "age_18_greater": 39
  },
  {
    "state": "Andhra Pradesh",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "K.v. Rangareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2192,
    "age_5_17": 395,
    "age_18_greater": 32
  },
  {
    "state": "West Bengal",
    "district": "KOLKATA",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kabeerdham",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 276,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kabeerdham",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 183,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kabeerdham",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 211,
    "age_5_17": 36,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Kabeerdham",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 190,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 33,
    "age_5_17": 13,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 587,
    "age_5_17": 242,
    "age_18_greater": 78
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 59,
    "age_5_17": 79,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 73,
    "age_5_17": 49,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 870,
    "age_5_17": 944,
    "age_18_greater": 115
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1221,
    "age_5_17": 530,
    "age_18_greater": 45
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 617,
    "age_5_17": 156,
    "age_18_greater": 41
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1572,
    "age_5_17": 380,
    "age_18_greater": 176
  },
  {
    "state": "Gujarat",
    "district": "Kachchh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1144,
    "age_5_17": 212,
    "age_18_greater": 33
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 146,
    "age_5_17": 199,
    "age_18_greater": 12
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 273,
    "age_5_17": 642,
    "age_18_greater": 22
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 165,
    "age_5_17": 536,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 264,
    "age_5_17": 420,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 778,
    "age_5_17": 1343,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 465,
    "age_5_17": 606,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 517,
    "age_5_17": 496,
    "age_18_greater": 8
  },
  {
    "state": "Bihar",
    "district": "Kaimur (Bhabua)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 425,
    "age_5_17": 465,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Kaithal",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 406,
    "age_5_17": 19,
    "age_18_greater": 10
  },
  {
    "state": "Haryana",
    "district": "Kaithal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 790,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Kaithal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 441,
    "age_5_17": 19,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Kaithal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 760,
    "age_5_17": 17,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Kaithal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 497,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Kakching",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 12,
    "age_5_17": 25,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Kakching",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Kakching",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 14,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Kakching",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kakinada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 238,
    "age_5_17": 24,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kakinada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 169,
    "age_5_17": 28,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kakinada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 246,
    "age_5_17": 19,
    "age_18_greater": 11
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kakinada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 205,
    "age_5_17": 13,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Kalaburagi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 560,
    "age_5_17": 31,
    "age_18_greater": 17
  },
  {
    "state": "Karnataka",
    "district": "Kalaburagi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1093,
    "age_5_17": 215,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Kalaburagi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 726,
    "age_5_17": 92,
    "age_18_greater": 4
  },
  {
    "state": "Karnataka",
    "district": "Kalaburagi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 976,
    "age_5_17": 164,
    "age_18_greater": 53
  },
  {
    "state": "Karnataka",
    "district": "Kalaburagi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 741,
    "age_5_17": 100,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1559,
    "age_5_17": 488,
    "age_18_greater": 8
  },
  {
    "state": "Orissa",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 760,
    "age_5_17": 251,
    "age_18_greater": 22
  },
  {
    "state": "Orissa",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 588,
    "age_5_17": 212,
    "age_18_greater": 18
  },
  {
    "state": "Orissa",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kalahandi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 443,
    "age_5_17": 120,
    "age_18_greater": 16
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 12,
    "age_5_17": 39,
    "age_18_greater": 27
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 78,
    "age_5_17": 77,
    "age_18_greater": 34
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 34,
    "age_5_17": 28,
    "age_18_greater": 22
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Kalimpong",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 9,
    "age_18_greater": 70
  },
  {
    "state": "Tamil Nadu",
    "district": "Kallakurichi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 165,
    "age_5_17": 55,
    "age_18_greater": 23
  },
  {
    "state": "Tamil Nadu",
    "district": "Kallakurichi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 213,
    "age_5_17": 26,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Kallakurichi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 152,
    "age_5_17": 18,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Kallakurichi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 216,
    "age_5_17": 37,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Kallakurichi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 131,
    "age_5_17": 13,
    "age_18_greater": 10
  },
  {
    "state": "Telangana",
    "district": "Kamareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 680,
    "age_5_17": 65,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Kamareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 453,
    "age_5_17": 36,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Kamareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 509,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Kamareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 220,
    "age_5_17": 16,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kamle",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kamle",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kamle",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 5,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kamle",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 13,
    "age_5_17": 20,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 741,
    "age_5_17": 404,
    "age_18_greater": 179
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 813,
    "age_5_17": 580,
    "age_18_greater": 264
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 133,
    "age_5_17": 51,
    "age_18_greater": 23
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2813,
    "age_5_17": 736,
    "age_18_greater": 255
  },
  {
    "state": "Meghalaya",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 13,
    "age_5_17": 71,
    "age_18_greater": 59
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1802,
    "age_5_17": 686,
    "age_18_greater": 12
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1015,
    "age_5_17": 344,
    "age_18_greater": 166
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1109,
    "age_5_17": 345,
    "age_18_greater": 29
  },
  {
    "state": "Assam",
    "district": "Kamrup",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 872,
    "age_5_17": 204,
    "age_18_greater": 44
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 276,
    "age_5_17": 396,
    "age_18_greater": 213
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 67,
    "age_5_17": 42,
    "age_18_greater": 53
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 55,
    "age_5_17": 54,
    "age_18_greater": 65
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 259,
    "age_5_17": 168,
    "age_18_greater": 82
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 597,
    "age_5_17": 602,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 421,
    "age_5_17": 290,
    "age_18_greater": 384
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 573,
    "age_5_17": 399,
    "age_18_greater": 503
  },
  {
    "state": "Assam",
    "district": "Kamrup Metro",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 406,
    "age_5_17": 104,
    "age_18_greater": 32
  },
  {
    "state": "Tamil Nadu",
    "district": "Kancheepuram",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 229,
    "age_5_17": 75,
    "age_18_greater": 24
  },
  {
    "state": "Tamil Nadu",
    "district": "Kancheepuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3306,
    "age_5_17": 1071,
    "age_18_greater": 16
  },
  {
    "state": "Tamil Nadu",
    "district": "Kancheepuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1746,
    "age_5_17": 703,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Kancheepuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2583,
    "age_5_17": 1065,
    "age_18_greater": 18
  },
  {
    "state": "Tamil Nadu",
    "district": "Kancheepuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1765,
    "age_5_17": 440,
    "age_18_greater": 7
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanchipuram",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 12,
    "age_5_17": 12,
    "age_18_greater": 10
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanchipuram",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 264,
    "age_5_17": 76,
    "age_18_greater": 11
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanchipuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanchipuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1348,
    "age_5_17": 224,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 464,
    "age_5_17": 80,
    "age_18_greater": 7
  },
  {
    "state": "Orissa",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 452,
    "age_5_17": 74,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 339,
    "age_5_17": 60,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Kandhamal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kangra",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1190,
    "age_5_17": 35,
    "age_18_greater": 6
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kangra",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 901,
    "age_5_17": 15,
    "age_18_greater": 4
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kangra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1165,
    "age_5_17": 20,
    "age_18_greater": 8
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kangra",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 613,
    "age_5_17": 5,
    "age_18_greater": 4
  },
  {
    "state": "Chhattisgarh",
    "district": "Kanker",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 464,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kanker",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 255,
    "age_5_17": 43,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kanker",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 370,
    "age_5_17": 69,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kanker",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 337,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kannauj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 425,
    "age_5_17": 628,
    "age_18_greater": 29
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kannauj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1040,
    "age_5_17": 1194,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kannauj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 444,
    "age_5_17": 491,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kannauj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 715,
    "age_5_17": 757,
    "age_18_greater": 18
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kannauj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 459,
    "age_5_17": 385,
    "age_18_greater": 6
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanniyakumari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 816,
    "age_5_17": 51,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanniyakumari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 444,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanniyakumari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 535,
    "age_5_17": 34,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanniyakumari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 344,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Kannur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 17,
    "age_5_17": 38,
    "age_18_greater": 15
  },
  {
    "state": "Kerala",
    "district": "Kannur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1039,
    "age_5_17": 553,
    "age_18_greater": 33
  },
  {
    "state": "Kerala",
    "district": "Kannur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 869,
    "age_5_17": 357,
    "age_18_greater": 43
  },
  {
    "state": "Kerala",
    "district": "Kannur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1334,
    "age_5_17": 528,
    "age_18_greater": 76
  },
  {
    "state": "Kerala",
    "district": "Kannur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 754,
    "age_5_17": 246,
    "age_18_greater": 63
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 469,
    "age_5_17": 364,
    "age_18_greater": 75
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 803,
    "age_5_17": 1060,
    "age_18_greater": 48
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1028,
    "age_5_17": 1043,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 444,
    "age_5_17": 397,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 748,
    "age_5_17": 569,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Dehat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 540,
    "age_5_17": 369,
    "age_18_greater": 18
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 47,
    "age_5_17": 138,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1405,
    "age_5_17": 1363,
    "age_18_greater": 222
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 835,
    "age_5_17": 854,
    "age_18_greater": 57
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 347,
    "age_5_17": 597,
    "age_18_greater": 39
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1289,
    "age_5_17": 1946,
    "age_18_greater": 85
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2581,
    "age_5_17": 3142,
    "age_18_greater": 71
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1436,
    "age_5_17": 1347,
    "age_18_greater": 67
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2186,
    "age_5_17": 2114,
    "age_18_greater": 66
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kanpur Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1301,
    "age_5_17": 1105,
    "age_18_greater": 45
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanyakumari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 660,
    "age_5_17": 32,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanyakumari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 421,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanyakumari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 505,
    "age_5_17": 29,
    "age_18_greater": 14
  },
  {
    "state": "Tamil Nadu",
    "district": "Kanyakumari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 310,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 302,
    "age_5_17": 65,
    "age_18_greater": 305
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 233,
    "age_5_17": 67,
    "age_18_greater": 96
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 182,
    "age_5_17": 67,
    "age_18_greater": 68
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 324,
    "age_5_17": 74,
    "age_18_greater": 177
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 380,
    "age_5_17": 64,
    "age_18_greater": 64
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 182,
    "age_5_17": 33,
    "age_18_greater": 109
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 314,
    "age_5_17": 47,
    "age_18_greater": 234
  },
  {
    "state": "Punjab",
    "district": "Kapurthala",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 150,
    "age_5_17": 29,
    "age_18_greater": 160
  },
  {
    "state": "Pondicherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 64,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 146,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 32,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 79,
    "age_5_17": 10,
    "age_18_greater": 2
  },
  {
    "state": "Pondicherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 41,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 86,
    "age_5_17": 6,
    "age_18_greater": 7
  },
  {
    "state": "Pondicherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 17,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Karaikal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 52,
    "age_5_17": 3,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 348,
    "age_5_17": 105,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 612,
    "age_5_17": 323,
    "age_18_greater": 11
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2050,
    "age_5_17": 813,
    "age_18_greater": 9
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 722,
    "age_5_17": 369,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1373,
    "age_5_17": 647,
    "age_18_greater": 72
  },
  {
    "state": "Rajasthan",
    "district": "Karauli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 752,
    "age_5_17": 413,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 543,
    "age_5_17": 1030,
    "age_18_greater": 323
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 446,
    "age_5_17": 1537,
    "age_18_greater": 175
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 814,
    "age_5_17": 537,
    "age_18_greater": 240
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 327,
    "age_5_17": 325,
    "age_18_greater": 174
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 521,
    "age_5_17": 500,
    "age_18_greater": 127
  },
  {
    "state": "Assam",
    "district": "Karbi Anglong",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 267,
    "age_5_17": 178,
    "age_18_greater": 43
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 101,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 101,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 57,
    "age_5_17": 41,
    "age_18_greater": 1
  },
  {
    "state": "Ladakh",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 43,
    "age_5_17": 36,
    "age_18_greater": 3
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 100,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 100,
    "age_5_17": 28,
    "age_18_greater": 3
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 128,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Kargil",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 121,
    "age_5_17": 12,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karim Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 20,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karim Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karim Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karim Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 508,
    "age_5_17": 426,
    "age_18_greater": 91
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 286,
    "age_5_17": 282,
    "age_18_greater": 193
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 253,
    "age_5_17": 277,
    "age_18_greater": 97
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1931,
    "age_5_17": 1057,
    "age_18_greater": 183
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2809,
    "age_5_17": 1192,
    "age_18_greater": 8
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1003,
    "age_5_17": 490,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1476,
    "age_5_17": 728,
    "age_18_greater": 15
  },
  {
    "state": "Assam",
    "district": "Karimganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1070,
    "age_5_17": 451,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 225,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1866,
    "age_5_17": 288,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 143,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1365,
    "age_5_17": 191,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 119,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1188,
    "age_5_17": 142,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 65,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Karimnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 696,
    "age_5_17": 65,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Karnal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1285,
    "age_5_17": 66,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Karnal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 781,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Karnal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 943,
    "age_5_17": 45,
    "age_18_greater": 4
  },
  {
    "state": "Haryana",
    "district": "Karnal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 852,
    "age_5_17": 33,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Karur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1309,
    "age_5_17": 248,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Karur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 593,
    "age_5_17": 117,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Karur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 874,
    "age_5_17": 219,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Karur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 586,
    "age_5_17": 70,
    "age_18_greater": 2
  },
  {
    "state": "Kerala",
    "district": "Kasaragod",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 662,
    "age_5_17": 239,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Kasaragod",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 577,
    "age_5_17": 186,
    "age_18_greater": 33
  },
  {
    "state": "Kerala",
    "district": "Kasaragod",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 849,
    "age_5_17": 240,
    "age_18_greater": 23
  },
  {
    "state": "Kerala",
    "district": "Kasaragod",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 607,
    "age_5_17": 133,
    "age_18_greater": 6
  },
  {
    "state": "Kerala",
    "district": "Kasargod",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 64,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Kasargod",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 72,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Kasargod",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 62,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Kasargod",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 53,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kasganj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1047,
    "age_5_17": 1168,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kasganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 654,
    "age_5_17": 653,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kasganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 388,
    "age_5_17": 323,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kasganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 639,
    "age_5_17": 519,
    "age_18_greater": 18
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kasganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 478,
    "age_5_17": 314,
    "age_18_greater": 26
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 473,
    "age_5_17": 91,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 394,
    "age_5_17": 67,
    "age_18_greater": 4
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 922,
    "age_5_17": 97,
    "age_18_greater": 4
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kathua",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 846,
    "age_5_17": 55,
    "age_18_greater": 1
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 270,
    "age_5_17": 215,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 488,
    "age_5_17": 463,
    "age_18_greater": 34
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3631,
    "age_5_17": 1724,
    "age_18_greater": 6
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2521,
    "age_5_17": 916,
    "age_18_greater": 23
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2413,
    "age_5_17": 892,
    "age_18_greater": 32
  },
  {
    "state": "Bihar",
    "district": "Katihar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2009,
    "age_5_17": 693,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 53,
    "age_5_17": 42,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 353,
    "age_5_17": 40,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 195,
    "age_5_17": 88,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 441,
    "age_5_17": 264,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2223,
    "age_5_17": 670,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1580,
    "age_5_17": 385,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1915,
    "age_5_17": 455,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Katni",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1653,
    "age_5_17": 466,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 133,
    "age_5_17": 109,
    "age_18_greater": 25
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 583,
    "age_5_17": 509,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1109,
    "age_5_17": 1033,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 689,
    "age_5_17": 486,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1076,
    "age_5_17": 580,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kaushambi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 766,
    "age_5_17": 321,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kawardha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 585,
    "age_5_17": 74,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kawardha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 395,
    "age_5_17": 52,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kawardha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 552,
    "age_5_17": 75,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kawardha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 352,
    "age_5_17": 56,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1189,
    "age_5_17": 352,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 602,
    "age_5_17": 137,
    "age_18_greater": 42
  },
  {
    "state": "Orissa",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 11,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 604,
    "age_5_17": 140,
    "age_18_greater": 5
  },
  {
    "state": "Orissa",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 766,
    "age_5_17": 124,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Kendrapara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 16,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Kendrapara *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1848,
    "age_5_17": 490,
    "age_18_greater": 3
  },
  {
    "state": "Orissa",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 18,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 689,
    "age_5_17": 161,
    "age_18_greater": 4
  },
  {
    "state": "Orissa",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 5,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 668,
    "age_5_17": 179,
    "age_18_greater": 3
  },
  {
    "state": "Orissa",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1125,
    "age_5_17": 202,
    "age_18_greater": 5
  },
  {
    "state": "Orissa",
    "district": "Kendujhar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Khagaria",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1480,
    "age_5_17": 1497,
    "age_18_greater": 30
  },
  {
    "state": "Bihar",
    "district": "Khagaria",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 817,
    "age_5_17": 729,
    "age_18_greater": 12
  },
  {
    "state": "Bihar",
    "district": "Khagaria",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 842,
    "age_5_17": 773,
    "age_18_greater": 17
  },
  {
    "state": "Bihar",
    "district": "Khagaria",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1209,
    "age_5_17": 780,
    "age_18_greater": 10
  },
  {
    "state": "Chhattisgarh",
    "district": "Khairagarh Chhuikhadan Gandai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Khairagarh Chhuikhadan Gandai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 33,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Khairagarh Chhuikhadan Gandai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 72,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Khairagarh Chhuikhadan Gandai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 33,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 340,
    "age_5_17": 119,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 985,
    "age_5_17": 629,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 201,
    "age_5_17": 59,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 690,
    "age_5_17": 179,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 227,
    "age_5_17": 72,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 733,
    "age_5_17": 210,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 101,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Khammam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 392,
    "age_5_17": 61,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 271,
    "age_5_17": 133,
    "age_18_greater": 16
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 47,
    "age_5_17": 21,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 586,
    "age_5_17": 233,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 731,
    "age_5_17": 385,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 384,
    "age_5_17": 184,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 638,
    "age_5_17": 170,
    "age_18_greater": 23
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khandwa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 550,
    "age_5_17": 106,
    "age_18_greater": 18
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 695,
    "age_5_17": 188,
    "age_18_greater": 52
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 304,
    "age_5_17": 131,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 242,
    "age_5_17": 258,
    "age_18_greater": 26
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2569,
    "age_5_17": 1929,
    "age_18_greater": 226
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2219,
    "age_5_17": 1066,
    "age_18_greater": 87
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 974,
    "age_5_17": 305,
    "age_18_greater": 39
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1443,
    "age_5_17": 429,
    "age_18_greater": 27
  },
  {
    "state": "Madhya Pradesh",
    "district": "Khargone",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1424,
    "age_5_17": 357,
    "age_18_greater": 36
  },
  {
    "state": "Mizoram",
    "district": "Khawzawl",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Khawzawl",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 20
  },
  {
    "state": "Mizoram",
    "district": "Khawzawl",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 4
  },
  {
    "state": "Mizoram",
    "district": "Khawzawl",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 425,
    "age_5_17": 80,
    "age_18_greater": 150
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 89,
    "age_5_17": 18,
    "age_18_greater": 33
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 444,
    "age_5_17": 200,
    "age_18_greater": 38
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1620,
    "age_5_17": 502,
    "age_18_greater": 73
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 604,
    "age_5_17": 97,
    "age_18_greater": 79
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1758,
    "age_5_17": 219,
    "age_18_greater": 103
  },
  {
    "state": "Gujarat",
    "district": "Kheda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 886,
    "age_5_17": 108,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 523,
    "age_5_17": 548,
    "age_18_greater": 31
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 832,
    "age_5_17": 687,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 358,
    "age_5_17": 491,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2068,
    "age_5_17": 2463,
    "age_18_greater": 98
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2812,
    "age_5_17": 3982,
    "age_18_greater": 110
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1382,
    "age_5_17": 1700,
    "age_18_greater": 61
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1984,
    "age_5_17": 1954,
    "age_18_greater": 58
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kheri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1323,
    "age_5_17": 1016,
    "age_18_greater": 31
  },
  {
    "state": "Odisha",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1282,
    "age_5_17": 255,
    "age_18_greater": 4
  },
  {
    "state": "Odisha",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 650,
    "age_5_17": 131,
    "age_18_greater": 60
  },
  {
    "state": "Orissa",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 847,
    "age_5_17": 169,
    "age_18_greater": 61
  },
  {
    "state": "Odisha",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 717,
    "age_5_17": 99,
    "age_18_greater": 40
  },
  {
    "state": "Orissa",
    "district": "Khorda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 37,
    "age_5_17": 37,
    "age_18_greater": 13
  },
  {
    "state": "Odisha",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 112,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 258,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 64,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 111,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 85,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 138,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 87,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Khordha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 122,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Khowai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 51,
    "age_5_17": 36,
    "age_18_greater": 12
  },
  {
    "state": "Tripura",
    "district": "Khowai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 44,
    "age_5_17": 12,
    "age_18_greater": 8
  },
  {
    "state": "Tripura",
    "district": "Khowai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 56,
    "age_5_17": 33,
    "age_18_greater": 18
  },
  {
    "state": "Tripura",
    "district": "Khowai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 45,
    "age_5_17": 18,
    "age_18_greater": 6
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 91,
    "age_5_17": 148,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 146,
    "age_5_17": 196,
    "age_18_greater": 14
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 376,
    "age_5_17": 320,
    "age_18_greater": 9
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 256,
    "age_5_17": 158,
    "age_18_greater": 7
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 351,
    "age_5_17": 249,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Khunti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 206,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kinnaur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 38,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kinnaur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 26,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kinnaur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 42,
    "age_5_17": 4,
    "age_18_greater": 4
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kinnaur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 31,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Kiphire",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 46,
    "age_5_17": 233,
    "age_18_greater": 26
  },
  {
    "state": "Nagaland",
    "district": "Kiphire",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 44,
    "age_5_17": 148,
    "age_18_greater": 9
  },
  {
    "state": "Nagaland",
    "district": "Kiphire",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 40,
    "age_5_17": 182,
    "age_18_greater": 5
  },
  {
    "state": "Nagaland",
    "district": "Kiphire",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 28,
    "age_5_17": 115,
    "age_18_greater": 11
  },
  {
    "state": "Nagaland",
    "district": "Kiphire",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 15,
    "age_18_greater": 1
  },
  {
    "state": "Bihar",
    "district": "Kishanganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2368,
    "age_5_17": 664,
    "age_18_greater": 3
  },
  {
    "state": "Bihar",
    "district": "Kishanganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2017,
    "age_5_17": 536,
    "age_18_greater": 6
  },
  {
    "state": "Bihar",
    "district": "Kishanganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1436,
    "age_5_17": 348,
    "age_18_greater": 11
  },
  {
    "state": "Bihar",
    "district": "Kishanganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1136,
    "age_5_17": 234,
    "age_18_greater": 5
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kishtwar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 181,
    "age_5_17": 45,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kishtwar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 227,
    "age_5_17": 59,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kishtwar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 337,
    "age_5_17": 68,
    "age_18_greater": 4
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kishtwar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 313,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Koch Bihar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 871,
    "age_5_17": 489,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Koch Bihar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 677,
    "age_5_17": 288,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Koch Bihar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 534,
    "age_5_17": 229,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Koch Bihar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 145,
    "age_5_17": 105,
    "age_18_greater": 3
  },
  {
    "state": "Karnataka",
    "district": "Kodagu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 262,
    "age_5_17": 20,
    "age_18_greater": 12
  },
  {
    "state": "Karnataka",
    "district": "Kodagu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 230,
    "age_5_17": 27,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Kodagu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 300,
    "age_5_17": 18,
    "age_18_greater": 20
  },
  {
    "state": "Karnataka",
    "district": "Kodagu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 303,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Kodarma",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 59,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Kodarma",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 42,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Kodarma",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 57,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Kodarma",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 26,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Koderma",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 767,
    "age_5_17": 401,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Koderma",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 350,
    "age_5_17": 235,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "Koderma",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 575,
    "age_5_17": 303,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Koderma",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 404,
    "age_5_17": 175,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 212,
    "age_5_17": 385,
    "age_18_greater": 49
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 74,
    "age_5_17": 154,
    "age_18_greater": 11
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 140,
    "age_5_17": 231,
    "age_18_greater": 13
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 69,
    "age_5_17": 116,
    "age_18_greater": 8
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 50,
    "age_5_17": 48,
    "age_18_greater": 26
  },
  {
    "state": "Nagaland",
    "district": "Kohima",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 17,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 91,
    "age_5_17": 169,
    "age_18_greater": 80
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 301,
    "age_5_17": 238,
    "age_18_greater": 25
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 249,
    "age_5_17": 237,
    "age_18_greater": 32
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 155,
    "age_5_17": 115,
    "age_18_greater": 17
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 284,
    "age_5_17": 173,
    "age_18_greater": 119
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 494,
    "age_5_17": 237,
    "age_18_greater": 35
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 255,
    "age_5_17": 132,
    "age_18_greater": 113
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 339,
    "age_5_17": 187,
    "age_18_greater": 97
  },
  {
    "state": "Assam",
    "district": "Kokrajhar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 351,
    "age_5_17": 84,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Kolar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1129,
    "age_5_17": 103,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Kolar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 698,
    "age_5_17": 67,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Kolar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1305,
    "age_5_17": 94,
    "age_18_greater": 15
  },
  {
    "state": "Karnataka",
    "district": "Kolar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 709,
    "age_5_17": 50,
    "age_18_greater": 3
  },
  {
    "state": "Mizoram",
    "district": "Kolasib",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 44,
    "age_5_17": 21,
    "age_18_greater": 20
  },
  {
    "state": "Mizoram",
    "district": "Kolasib",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 53,
    "age_5_17": 13,
    "age_18_greater": 8
  },
  {
    "state": "Mizoram",
    "district": "Kolasib",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 41,
    "age_5_17": 11,
    "age_18_greater": 3
  },
  {
    "state": "Mizoram",
    "district": "Kolasib",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 38,
    "age_5_17": 6,
    "age_18_greater": 4
  },
  {
    "state": "Mizoram",
    "district": "Kolasib",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 13,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Kolhapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1989,
    "age_5_17": 470,
    "age_18_greater": 5
  },
  {
    "state": "Maharashtra",
    "district": "Kolhapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1332,
    "age_5_17": 181,
    "age_18_greater": 54
  },
  {
    "state": "Maharashtra",
    "district": "Kolhapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1773,
    "age_5_17": 212,
    "age_18_greater": 12
  },
  {
    "state": "Maharashtra",
    "district": "Kolhapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1329,
    "age_5_17": 122,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 21,
    "age_5_17": 10,
    "age_18_greater": 23
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 247,
    "age_5_17": 222,
    "age_18_greater": 34
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 221,
    "age_5_17": 328,
    "age_18_greater": 87
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 277,
    "age_5_17": 407,
    "age_18_greater": 131
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1479,
    "age_5_17": 1289,
    "age_18_greater": 100
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 975,
    "age_5_17": 768,
    "age_18_greater": 20
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1148,
    "age_5_17": 1076,
    "age_18_greater": 46
  },
  {
    "state": "West Bengal",
    "district": "Kolkata",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 660,
    "age_5_17": 510,
    "age_18_greater": 282
  },
  {
    "state": "Kerala",
    "district": "Kollam",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 34,
    "age_5_17": 12,
    "age_18_greater": 10
  },
  {
    "state": "Kerala",
    "district": "Kollam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1069,
    "age_5_17": 322,
    "age_18_greater": 24
  },
  {
    "state": "Kerala",
    "district": "Kollam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 864,
    "age_5_17": 248,
    "age_18_greater": 60
  },
  {
    "state": "Kerala",
    "district": "Kollam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1151,
    "age_5_17": 287,
    "age_18_greater": 93
  },
  {
    "state": "Kerala",
    "district": "Kollam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 696,
    "age_5_17": 173,
    "age_18_greater": 26
  },
  {
    "state": "Telangana",
    "district": "Komaram Bheem",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 386,
    "age_5_17": 85,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Komaram Bheem",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 201,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Komaram Bheem",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 207,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Komaram Bheem",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 123,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Kondagaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 612,
    "age_5_17": 267,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kondagaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 403,
    "age_5_17": 210,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Kondagaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 468,
    "age_5_17": 304,
    "age_18_greater": 7
  },
  {
    "state": "Chhattisgarh",
    "district": "Kondagaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 492,
    "age_5_17": 273,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Koppal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1395,
    "age_5_17": 278,
    "age_18_greater": 11
  },
  {
    "state": "Karnataka",
    "district": "Koppal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 793,
    "age_5_17": 136,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Koppal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1447,
    "age_5_17": 140,
    "age_18_greater": 15
  },
  {
    "state": "Karnataka",
    "district": "Koppal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1117,
    "age_5_17": 96,
    "age_18_greater": 14
  },
  {
    "state": "Odisha",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1692,
    "age_5_17": 594,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 43,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 568,
    "age_5_17": 236,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 13,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 481,
    "age_5_17": 181,
    "age_18_greater": 22
  },
  {
    "state": "Orissa",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 25,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 431,
    "age_5_17": 154,
    "age_18_greater": 22
  },
  {
    "state": "Orissa",
    "district": "Koraput",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 13,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Korba",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1088,
    "age_5_17": 159,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Korba",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 726,
    "age_5_17": 155,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Korba",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 692,
    "age_5_17": 111,
    "age_18_greater": 4
  },
  {
    "state": "Chhattisgarh",
    "district": "Korba",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 534,
    "age_5_17": 64,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Koriya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 431,
    "age_5_17": 148,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Koriya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 287,
    "age_5_17": 138,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Koriya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 264,
    "age_5_17": 148,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Koriya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 276,
    "age_5_17": 70,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Kota",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 37,
    "age_5_17": 17,
    "age_18_greater": 14
  },
  {
    "state": "Rajasthan",
    "district": "Kota",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2012,
    "age_5_17": 756,
    "age_18_greater": 37
  },
  {
    "state": "Rajasthan",
    "district": "Kota",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 776,
    "age_5_17": 314,
    "age_18_greater": 12
  },
  {
    "state": "Rajasthan",
    "district": "Kota",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1637,
    "age_5_17": 496,
    "age_18_greater": 40
  },
  {
    "state": "Rajasthan",
    "district": "Kota",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1083,
    "age_5_17": 293,
    "age_18_greater": 1
  },
  {
    "state": "Kerala",
    "district": "Kottayam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 690,
    "age_5_17": 221,
    "age_18_greater": 4
  },
  {
    "state": "Kerala",
    "district": "Kottayam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 607,
    "age_5_17": 200,
    "age_18_greater": 12
  },
  {
    "state": "Kerala",
    "district": "Kottayam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 642,
    "age_5_17": 232,
    "age_18_greater": 35
  },
  {
    "state": "Kerala",
    "district": "Kottayam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 526,
    "age_5_17": 151,
    "age_18_greater": 1
  },
  {
    "state": "Kerala",
    "district": "Kozhikode",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1208,
    "age_5_17": 606,
    "age_18_greater": 11
  },
  {
    "state": "Kerala",
    "district": "Kozhikode",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 921,
    "age_5_17": 421,
    "age_18_greater": 47
  },
  {
    "state": "Kerala",
    "district": "Kozhikode",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1473,
    "age_5_17": 582,
    "age_18_greater": 118
  },
  {
    "state": "Kerala",
    "district": "Kozhikode",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 985,
    "age_5_17": 305,
    "age_18_greater": 27
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kra Daadi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kra Daadi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kra Daadi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 9,
    "age_18_greater": 4
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kra Daadi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Krishna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1995,
    "age_5_17": 207,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "Krishna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1127,
    "age_5_17": 140,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Krishna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1741,
    "age_5_17": 128,
    "age_18_greater": 18
  },
  {
    "state": "Andhra Pradesh",
    "district": "Krishna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1300,
    "age_5_17": 65,
    "age_18_greater": 6
  },
  {
    "state": "Tamil Nadu",
    "district": "Krishnagiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1447,
    "age_5_17": 224,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Krishnagiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 741,
    "age_5_17": 170,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Krishnagiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1070,
    "age_5_17": 346,
    "age_18_greater": 5
  },
  {
    "state": "Tamil Nadu",
    "district": "Krishnagiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 899,
    "age_5_17": 170,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kulgam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 245,
    "age_5_17": 62,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kulgam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 206,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kulgam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 283,
    "age_5_17": 76,
    "age_18_greater": 9
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kulgam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 236,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kullu",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 57,
    "age_5_17": 24,
    "age_18_greater": 33
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kullu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 178,
    "age_5_17": 20,
    "age_18_greater": 11
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kullu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 215,
    "age_5_17": 14,
    "age_18_greater": 18
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kullu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 392,
    "age_5_17": 39,
    "age_18_greater": 35
  },
  {
    "state": "Himachal Pradesh",
    "district": "Kullu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 180,
    "age_5_17": 14,
    "age_18_greater": 9
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 671,
    "age_5_17": 160,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 573,
    "age_5_17": 112,
    "age_18_greater": 5
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 676,
    "age_5_17": 113,
    "age_18_greater": 35
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Kupwara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 472,
    "age_5_17": 58,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3164,
    "age_5_17": 308,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2561,
    "age_5_17": 212,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2965,
    "age_5_17": 194,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "Kurnool",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2233,
    "age_5_17": 109,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Kurukshetra",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 72,
    "age_5_17": 10,
    "age_18_greater": 11
  },
  {
    "state": "Haryana",
    "district": "Kurukshetra",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 639,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Kurukshetra",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 499,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Kurukshetra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 704,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Kurukshetra",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 401,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kurung Kumey",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kurung Kumey",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kurung Kumey",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 12,
    "age_18_greater": 12
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Kurung Kumey",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushi Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 779,
    "age_5_17": 777,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 170,
    "age_5_17": 229,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1561,
    "age_5_17": 2351,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 681,
    "age_5_17": 1016,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1169,
    "age_5_17": 1547,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 868,
    "age_5_17": 989,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Kushinagar *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahaul and Spiti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahaul and Spiti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul & Spiti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 13,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul & Spiti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul & Spiti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 15,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul & Spiti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul and Spiti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul and Spiti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul and Spiti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 10,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Lahul and Spiti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 25,
    "age_5_17": 34,
    "age_18_greater": 42
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 400,
    "age_5_17": 221,
    "age_18_greater": 93
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 404,
    "age_5_17": 216,
    "age_18_greater": 127
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 207,
    "age_5_17": 181,
    "age_18_greater": 63
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 536,
    "age_5_17": 216,
    "age_18_greater": 159
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1317,
    "age_5_17": 448,
    "age_18_greater": 8
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 629,
    "age_5_17": 190,
    "age_18_greater": 55
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 562,
    "age_5_17": 186,
    "age_18_greater": 53
  },
  {
    "state": "Assam",
    "district": "Lakhimpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 646,
    "age_5_17": 133,
    "age_18_greater": 48
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 298,
    "age_5_17": 478,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 607,
    "age_5_17": 972,
    "age_18_greater": 29
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 523,
    "age_5_17": 622,
    "age_18_greater": 6
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 247,
    "age_5_17": 285,
    "age_18_greater": 17
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 588,
    "age_5_17": 672,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Lakhisarai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 401,
    "age_5_17": 394,
    "age_18_greater": 2
  },
  {
    "state": "Lakshadweep",
    "district": "Lakshadweep",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 60,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Lakshadweep",
    "district": "Lakshadweep",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 42,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Lakshadweep",
    "district": "Lakshadweep",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 59,
    "age_5_17": 4,
    "age_18_greater": 1
  },
  {
    "state": "Lakshadweep",
    "district": "Lakshadweep",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 31,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lalitpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 138,
    "age_5_17": 71,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lalitpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1070,
    "age_5_17": 557,
    "age_18_greater": 24
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lalitpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 475,
    "age_5_17": 175,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lalitpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1037,
    "age_5_17": 326,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lalitpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 656,
    "age_5_17": 176,
    "age_18_greater": 15
  },
  {
    "state": "Jharkhand",
    "district": "Latehar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 600,
    "age_5_17": 384,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Latehar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 202,
    "age_5_17": 103,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "Latehar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 507,
    "age_5_17": 305,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Latehar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 366,
    "age_5_17": 131,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 229,
    "age_5_17": 42,
    "age_18_greater": 23
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 390,
    "age_5_17": 140,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 566,
    "age_5_17": 225,
    "age_18_greater": 28
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1719,
    "age_5_17": 695,
    "age_18_greater": 30
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 913,
    "age_5_17": 188,
    "age_18_greater": 12
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1174,
    "age_5_17": 235,
    "age_18_greater": 36
  },
  {
    "state": "Maharashtra",
    "district": "Latur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 837,
    "age_5_17": 106,
    "age_18_greater": 4
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 280,
    "age_5_17": 62,
    "age_18_greater": 29
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 119,
    "age_5_17": 43,
    "age_18_greater": 11
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 240,
    "age_5_17": 59,
    "age_18_greater": 31
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 144,
    "age_5_17": 97,
    "age_18_greater": 13
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 66,
    "age_5_17": 17,
    "age_18_greater": 12
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 116,
    "age_5_17": 57,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Lawngtlai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 199,
    "age_5_17": 46,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 32,
    "age_5_17": 12,
    "age_18_greater": 1
  },
  {
    "state": "Ladakh",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 23,
    "age_5_17": 2,
    "age_18_greater": 5
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 48,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 23,
    "age_5_17": 4,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 53,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 35,
    "age_5_17": 4,
    "age_18_greater": 3
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 30,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Ladakh",
    "district": "Leh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 20,
    "age_5_17": 3,
    "age_18_greater": 1
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Leh (ladakh)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Leh (ladakh)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Leparada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Leparada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Leparada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 187,
    "age_5_17": 104,
    "age_18_greater": 17
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 165,
    "age_5_17": 174,
    "age_18_greater": 21
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 388,
    "age_5_17": 277,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 220,
    "age_5_17": 126,
    "age_18_greater": 6
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 421,
    "age_5_17": 153,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Lohardaga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 603,
    "age_5_17": 85,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lohit",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 30,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lohit",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 18,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lohit",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 17,
    "age_5_17": 11,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lohit",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 37,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Longding",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 46,
    "age_5_17": 322,
    "age_18_greater": 33
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Longding",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 61,
    "age_5_17": 269,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Longding",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 12,
    "age_5_17": 59,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Longding",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 17,
    "age_5_17": 63,
    "age_18_greater": 4
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Longding",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 131,
    "age_5_17": 226,
    "age_18_greater": 12
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 47,
    "age_5_17": 284,
    "age_18_greater": 20
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 17,
    "age_5_17": 82,
    "age_18_greater": 7
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 18,
    "age_18_greater": 9
  },
  {
    "state": "Nagaland",
    "district": "Longleng",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Dibang Valley",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 24,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Dibang Valley",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 17,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Dibang Valley",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 7,
    "age_5_17": 14,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Dibang Valley",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Siang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Siang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Siang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 7,
    "age_18_greater": 3
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Siang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Subansiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 19,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Subansiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Subansiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Lower Subansiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 23,
    "age_5_17": 102,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1235,
    "age_5_17": 1253,
    "age_18_greater": 125
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 608,
    "age_5_17": 560,
    "age_18_greater": 48
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 81,
    "age_5_17": 123,
    "age_18_greater": 19
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1340,
    "age_5_17": 1322,
    "age_18_greater": 88
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3575,
    "age_5_17": 2913,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2405,
    "age_5_17": 1806,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2678,
    "age_5_17": 1910,
    "age_18_greater": 108
  },
  {
    "state": "Uttar Pradesh",
    "district": "Lucknow",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1794,
    "age_5_17": 1332,
    "age_18_greater": 21
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 104,
    "age_5_17": 13,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1841,
    "age_5_17": 734,
    "age_18_greater": 184
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 876,
    "age_5_17": 458,
    "age_18_greater": 49
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1095,
    "age_5_17": 645,
    "age_18_greater": 90
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2012,
    "age_5_17": 1133,
    "age_18_greater": 221
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2521,
    "age_5_17": 597,
    "age_18_greater": 40
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1230,
    "age_5_17": 273,
    "age_18_greater": 56
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1629,
    "age_5_17": 485,
    "age_18_greater": 108
  },
  {
    "state": "Punjab",
    "district": "Ludhiana",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 901,
    "age_5_17": 235,
    "age_18_greater": 70
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 136,
    "age_5_17": 31,
    "age_18_greater": 16
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 83,
    "age_5_17": 32,
    "age_18_greater": 20
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 78,
    "age_5_17": 20,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 90,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 125,
    "age_5_17": 19,
    "age_18_greater": 25
  },
  {
    "state": "Mizoram",
    "district": "Lunglei",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 29,
    "age_5_17": 3,
    "age_18_greater": 7
  },
  {
    "state": "West Bengal",
    "district": "MALDA",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "MALDA",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "MALDA",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Madhepura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1368,
    "age_5_17": 1485,
    "age_18_greater": 15
  },
  {
    "state": "Bihar",
    "district": "Madhepura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 981,
    "age_5_17": 1028,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Madhepura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1002,
    "age_5_17": 830,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Madhepura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1220,
    "age_5_17": 1074,
    "age_18_greater": 7
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 46,
    "age_5_17": 235,
    "age_18_greater": 49
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 388,
    "age_5_17": 485,
    "age_18_greater": 60
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 874,
    "age_5_17": 995,
    "age_18_greater": 102
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 876,
    "age_5_17": 1379,
    "age_18_greater": 170
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 858,
    "age_5_17": 1181,
    "age_18_greater": 102
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2590,
    "age_5_17": 2425,
    "age_18_greater": 86
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2477,
    "age_5_17": 2035,
    "age_18_greater": 125
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2373,
    "age_5_17": 2207,
    "age_18_greater": 77
  },
  {
    "state": "Bihar",
    "district": "Madhubani",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2116,
    "age_5_17": 1592,
    "age_18_greater": 27
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 94,
    "age_5_17": 10,
    "age_18_greater": 11
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 62,
    "age_5_17": 14,
    "age_18_greater": 12
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3504,
    "age_5_17": 367,
    "age_18_greater": 6
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1623,
    "age_5_17": 202,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2381,
    "age_5_17": 314,
    "age_18_greater": 7
  },
  {
    "state": "Tamil Nadu",
    "district": "Madurai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1211,
    "age_5_17": 117,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabub Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 472,
    "age_5_17": 200,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabub Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 270,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabub Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 231,
    "age_5_17": 106,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabub Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 106,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 457,
    "age_5_17": 83,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Mahabubabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 329,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 329,
    "age_5_17": 71,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 134,
    "age_5_17": 32,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3115,
    "age_5_17": 994,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1889,
    "age_5_17": 671,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1744,
    "age_5_17": 570,
    "age_18_greater": 11
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mahabubnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 941,
    "age_5_17": 228,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 54,
    "age_5_17": 181,
    "age_18_greater": 47
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 873,
    "age_5_17": 977,
    "age_18_greater": 79
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 500,
    "age_5_17": 791,
    "age_18_greater": 40
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 95,
    "age_5_17": 362,
    "age_18_greater": 31
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1186,
    "age_5_17": 2920,
    "age_18_greater": 103
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1239,
    "age_5_17": 2556,
    "age_18_greater": 35
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 639,
    "age_5_17": 1104,
    "age_18_greater": 54
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 916,
    "age_5_17": 1459,
    "age_18_greater": 58
  },
  {
    "state": "Uttar Pradesh",
    "district": "Maharajganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 630,
    "age_5_17": 915,
    "age_18_greater": 27
  },
  {
    "state": "Chhattisgarh",
    "district": "Mahasamund",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 998,
    "age_5_17": 194,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Mahasamund",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 577,
    "age_5_17": 138,
    "age_18_greater": 5
  },
  {
    "state": "Chhattisgarh",
    "district": "Mahasamund",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 779,
    "age_5_17": 154,
    "age_18_greater": 14
  },
  {
    "state": "Chhattisgarh",
    "district": "Mahasamund",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 419,
    "age_5_17": 77,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahbubnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 202,
    "age_5_17": 85,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahbubnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 124,
    "age_5_17": 65,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahbubnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 129,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Mahbubnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 56,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Mahendragarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 783,
    "age_5_17": 56,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Mahendragarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 517,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Mahendragarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 710,
    "age_5_17": 38,
    "age_18_greater": 22
  },
  {
    "state": "Haryana",
    "district": "Mahendragarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 565,
    "age_5_17": 31,
    "age_18_greater": 1
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 433,
    "age_5_17": 55,
    "age_18_greater": 65
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 178,
    "age_5_17": 26,
    "age_18_greater": 13
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 821,
    "age_5_17": 269,
    "age_18_greater": 67
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1232,
    "age_5_17": 255,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 438,
    "age_5_17": 63,
    "age_18_greater": 48
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1314,
    "age_5_17": 161,
    "age_18_greater": 16
  },
  {
    "state": "Gujarat",
    "district": "Mahesana",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 873,
    "age_5_17": 79,
    "age_18_greater": 61
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 110,
    "age_5_17": 12,
    "age_18_greater": 16
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 106,
    "age_5_17": 37,
    "age_18_greater": 18
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 369,
    "age_5_17": 162,
    "age_18_greater": 33
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 547,
    "age_5_17": 83,
    "age_18_greater": 19
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 187,
    "age_5_17": 30,
    "age_18_greater": 22
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 405,
    "age_5_17": 51,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Mahisagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 312,
    "age_5_17": 22,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahoba",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 699,
    "age_5_17": 539,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahoba",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 336,
    "age_5_17": 154,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahoba",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 544,
    "age_5_17": 181,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahoba",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 400,
    "age_5_17": 155,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahrajganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahrajganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahrajganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 5,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mahrajganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Maihar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 118,
    "age_5_17": 8,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Maihar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 79,
    "age_5_17": 6,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Maihar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 90,
    "age_5_17": 2,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Maihar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 91,
    "age_5_17": 4,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 348,
    "age_5_17": 313,
    "age_18_greater": 46
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 327,
    "age_5_17": 443,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 958,
    "age_5_17": 1349,
    "age_18_greater": 56
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1193,
    "age_5_17": 1907,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 620,
    "age_5_17": 805,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 903,
    "age_5_17": 1023,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mainpuri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 707,
    "age_5_17": 643,
    "age_18_greater": 25
  },
  {
    "state": "Assam",
    "district": "Majuli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 154,
    "age_5_17": 45,
    "age_18_greater": 11
  },
  {
    "state": "Assam",
    "district": "Majuli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 101,
    "age_5_17": 64,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Majuli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 32,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Majuli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 19,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Majuli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 41,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Malappuram",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 135,
    "age_5_17": 121,
    "age_18_greater": 10
  },
  {
    "state": "Kerala",
    "district": "Malappuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2367,
    "age_5_17": 1187,
    "age_18_greater": 31
  },
  {
    "state": "Kerala",
    "district": "Malappuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2035,
    "age_5_17": 997,
    "age_18_greater": 73
  },
  {
    "state": "Kerala",
    "district": "Malappuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3086,
    "age_5_17": 1169,
    "age_18_greater": 101
  },
  {
    "state": "Kerala",
    "district": "Malappuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2582,
    "age_5_17": 642,
    "age_18_greater": 31
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 306,
    "age_5_17": 80,
    "age_18_greater": 10
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 115,
    "age_5_17": 127,
    "age_18_greater": 10
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4325,
    "age_5_17": 1412,
    "age_18_greater": 19
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2807,
    "age_5_17": 914,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2196,
    "age_5_17": 848,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Malda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2026,
    "age_5_17": 575,
    "age_18_greater": 42
  },
  {
    "state": "West Bengal",
    "district": "Maldah",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 456,
    "age_5_17": 242,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Maldah",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 305,
    "age_5_17": 111,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Maldah",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 276,
    "age_5_17": 140,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Maldah",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 153,
    "age_5_17": 73,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Malerkotla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 262,
    "age_5_17": 56,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Malerkotla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 138,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Malerkotla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 181,
    "age_5_17": 42,
    "age_18_greater": 4
  },
  {
    "state": "Punjab",
    "district": "Malerkotla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 130,
    "age_5_17": 15,
    "age_18_greater": 3
  },
  {
    "state": "Odisha",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1365,
    "age_5_17": 286,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 18,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 286,
    "age_5_17": 86,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 401,
    "age_5_17": 69,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 281,
    "age_5_17": 45,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Malkangiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mamit",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 46,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mamit",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 37,
    "age_5_17": 9,
    "age_18_greater": 3
  },
  {
    "state": "Mizoram",
    "district": "Mamit",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 44,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mamit",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mammit",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mammit",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 19,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mammit",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 24,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Mammit",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 12,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mancherial",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 329,
    "age_5_17": 69,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Mancherial",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 235,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mancherial",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 206,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mancherial",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 154,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Mandi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 669,
    "age_5_17": 17,
    "age_18_greater": 3
  },
  {
    "state": "Himachal Pradesh",
    "district": "Mandi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 563,
    "age_5_17": 12,
    "age_18_greater": 3
  },
  {
    "state": "Himachal Pradesh",
    "district": "Mandi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 745,
    "age_5_17": 10,
    "age_18_greater": 5
  },
  {
    "state": "Himachal Pradesh",
    "district": "Mandi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 483,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1298,
    "age_5_17": 117,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 855,
    "age_5_17": 50,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1310,
    "age_5_17": 62,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1182,
    "age_5_17": 32,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandsaur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1547,
    "age_5_17": 323,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandsaur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1291,
    "age_5_17": 113,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandsaur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3253,
    "age_5_17": 225,
    "age_18_greater": 9
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mandsaur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1353,
    "age_5_17": 147,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Mandya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 832,
    "age_5_17": 45,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Mandya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 706,
    "age_5_17": 29,
    "age_18_greater": 29
  },
  {
    "state": "Karnataka",
    "district": "Mandya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1000,
    "age_5_17": 42,
    "age_18_greater": 13
  },
  {
    "state": "Karnataka",
    "district": "Mandya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 863,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Manendragarh\u2013Chirmiri\u2013Bharatpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 58,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Manendragarh\u2013Chirmiri\u2013Bharatpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 51,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Manendragarh\u2013Chirmiri\u2013Bharatpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 41,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Manendragarh\u2013Chirmiri\u2013Bharatpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 38,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "Mangan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "Mangan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "Mangan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Mansa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 394,
    "age_5_17": 49,
    "age_18_greater": 2
  },
  {
    "state": "Punjab",
    "district": "Mansa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 204,
    "age_5_17": 19,
    "age_18_greater": 5
  },
  {
    "state": "Punjab",
    "district": "Mansa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 241,
    "age_5_17": 28,
    "age_18_greater": 2
  },
  {
    "state": "Punjab",
    "district": "Mansa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 159,
    "age_5_17": 11,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 117,
    "age_5_17": 184,
    "age_18_greater": 245
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 540,
    "age_5_17": 457,
    "age_18_greater": 96
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 130,
    "age_5_17": 219,
    "age_18_greater": 29
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 412,
    "age_5_17": 250,
    "age_18_greater": 118
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1737,
    "age_5_17": 646,
    "age_18_greater": 123
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1645,
    "age_5_17": 502,
    "age_18_greater": 58
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 666,
    "age_5_17": 231,
    "age_18_greater": 52
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 673,
    "age_5_17": 279,
    "age_18_greater": 82
  },
  {
    "state": "Assam",
    "district": "Marigaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 815,
    "age_5_17": 160,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 39,
    "age_5_17": 40,
    "age_18_greater": 42
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 467,
    "age_5_17": 890,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 133,
    "age_5_17": 151,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1646,
    "age_5_17": 1798,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 943,
    "age_5_17": 932,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1497,
    "age_5_17": 1258,
    "age_18_greater": 17
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mathura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1126,
    "age_5_17": 697,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mau",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 963,
    "age_5_17": 2152,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mau",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 524,
    "age_5_17": 1086,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mau",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 666,
    "age_5_17": 1134,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mau",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 437,
    "age_5_17": 570,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mauganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 127,
    "age_5_17": 21,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mauganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 104,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mauganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 73,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Mauganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 75,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Mayiladuthurai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 180,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Mayiladuthurai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 88,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Mayiladuthurai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 100,
    "age_5_17": 20,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Mayiladuthurai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 69,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3027,
    "age_5_17": 877,
    "age_18_greater": 4
  },
  {
    "state": "Orissa",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 13,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1290,
    "age_5_17": 392,
    "age_18_greater": 25
  },
  {
    "state": "Orissa",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1192,
    "age_5_17": 369,
    "age_18_greater": 6
  },
  {
    "state": "Orissa",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 11,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 718,
    "age_5_17": 222,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Mayurbhanj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 465,
    "age_5_17": 84,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2228,
    "age_5_17": 558,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 277,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1697,
    "age_5_17": 400,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 288,
    "age_5_17": 66,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1481,
    "age_5_17": 334,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 146,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 752,
    "age_5_17": 87,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medchal Malkajgiri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 159,
    "age_5_17": 119,
    "age_18_greater": 20
  },
  {
    "state": "Telangana",
    "district": "Medchal Malkajgiri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 250,
    "age_5_17": 146,
    "age_18_greater": 10
  },
  {
    "state": "Telangana",
    "district": "Medchal-malkajgiri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 76,
    "age_5_17": 25,
    "age_18_greater": 15
  },
  {
    "state": "Telangana",
    "district": "Medchal-malkajgiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 905,
    "age_5_17": 277,
    "age_18_greater": 16
  },
  {
    "state": "Telangana",
    "district": "Medchal-malkajgiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 791,
    "age_5_17": 234,
    "age_18_greater": 24
  },
  {
    "state": "Telangana",
    "district": "Medchal-malkajgiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 774,
    "age_5_17": 240,
    "age_18_greater": 40
  },
  {
    "state": "Telangana",
    "district": "Medchal-malkajgiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 518,
    "age_5_17": 124,
    "age_18_greater": 11
  },
  {
    "state": "Telangana",
    "district": "Medchal?malkajgiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medchal?malkajgiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medchal\u2212malkajgiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 135,
    "age_5_17": 37,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Medchal\u2212malkajgiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 126,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medchal\u2212malkajgiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 119,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Medchal\u2212malkajgiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 65,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Medinipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 8,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Medinipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Medinipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Medinipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Medinipur West",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 45,
    "age_5_17": 67,
    "age_18_greater": 10
  },
  {
    "state": "West Bengal",
    "district": "Medinipur West",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 280,
    "age_5_17": 233,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1370,
    "age_5_17": 650,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1663,
    "age_5_17": 1146,
    "age_18_greater": 38
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 79,
    "age_5_17": 168,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2293,
    "age_5_17": 1831,
    "age_18_greater": 60
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2889,
    "age_5_17": 2090,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1952,
    "age_5_17": 1325,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2600,
    "age_5_17": 1574,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Meerut",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1331,
    "age_5_17": 814,
    "age_18_greater": 18
  },
  {
    "state": "Nagaland",
    "district": "Meluri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Meluri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Meluri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 6,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Mewat",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1169,
    "age_5_17": 147,
    "age_18_greater": 11
  },
  {
    "state": "Haryana",
    "district": "Mewat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1281,
    "age_5_17": 117,
    "age_18_greater": 3
  },
  {
    "state": "Haryana",
    "district": "Mewat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1347,
    "age_5_17": 90,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Mewat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1739,
    "age_5_17": 116,
    "age_18_greater": 3
  },
  {
    "state": "Haryana",
    "district": "Mewat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1453,
    "age_5_17": 80,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mirzapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1387,
    "age_5_17": 1782,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mirzapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 626,
    "age_5_17": 726,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mirzapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 909,
    "age_5_17": 1046,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Mirzapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 614,
    "age_5_17": 547,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Moga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 590,
    "age_5_17": 75,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Moga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 217,
    "age_5_17": 23,
    "age_18_greater": 21
  },
  {
    "state": "Punjab",
    "district": "Moga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 327,
    "age_5_17": 44,
    "age_18_greater": 17
  },
  {
    "state": "Punjab",
    "district": "Moga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 201,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohalla-Manpur-Ambagarh Chowki",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohalla-Manpur-Ambagarh Chowki",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohalla-Manpur-Ambagarh Chowki",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohla-Manpur-Ambagarh Chouki",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 49,
    "age_5_17": 35,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohla-Manpur-Ambagarh Chouki",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 36,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohla-Manpur-Ambagarh Chouki",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 59,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mohla-Manpur-Ambagarh Chouki",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 18,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Nagaland",
    "district": "Mokokchung",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 73,
    "age_5_17": 134,
    "age_18_greater": 13
  },
  {
    "state": "Nagaland",
    "district": "Mokokchung",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 31,
    "age_5_17": 88,
    "age_18_greater": 13
  },
  {
    "state": "Nagaland",
    "district": "Mokokchung",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 44,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Mokokchung",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 5,
    "age_5_17": 29,
    "age_18_greater": 13
  },
  {
    "state": "Nagaland",
    "district": "Mokokchung",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 20,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 39,
    "age_5_17": 121,
    "age_18_greater": 14
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 258,
    "age_5_17": 676,
    "age_18_greater": 69
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 130,
    "age_5_17": 225,
    "age_18_greater": 30
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 114,
    "age_5_17": 246,
    "age_18_greater": 15
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 65,
    "age_5_17": 119,
    "age_18_greater": 41
  },
  {
    "state": "Nagaland",
    "district": "Mon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 12,
    "age_5_17": 47,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Monghyr",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 8,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Monghyr",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Monghyr",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 13,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Monghyr",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1519,
    "age_5_17": 510,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1673,
    "age_5_17": 793,
    "age_18_greater": 79
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1067,
    "age_5_17": 731,
    "age_18_greater": 28
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2722,
    "age_5_17": 1295,
    "age_18_greater": 34
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2568,
    "age_5_17": 1027,
    "age_18_greater": 19
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1677,
    "age_5_17": 579,
    "age_18_greater": 9
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2710,
    "age_5_17": 780,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Moradabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1260,
    "age_5_17": 416,
    "age_18_greater": 12
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 36,
    "age_5_17": 12,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 818,
    "age_5_17": 178,
    "age_18_greater": 175
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 389,
    "age_5_17": 88,
    "age_18_greater": 46
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 777,
    "age_5_17": 366,
    "age_18_greater": 26
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1789,
    "age_5_17": 825,
    "age_18_greater": 215
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 638,
    "age_5_17": 141,
    "age_18_greater": 49
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 276,
    "age_5_17": 46,
    "age_18_greater": 63
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 499,
    "age_5_17": 88,
    "age_18_greater": 37
  },
  {
    "state": "Gujarat",
    "district": "Morbi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 326,
    "age_5_17": 59,
    "age_18_greater": 19
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1027,
    "age_5_17": 459,
    "age_18_greater": 82
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 709,
    "age_5_17": 313,
    "age_18_greater": 44
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1327,
    "age_5_17": 872,
    "age_18_greater": 70
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3228,
    "age_5_17": 2669,
    "age_18_greater": 176
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2231,
    "age_5_17": 1311,
    "age_18_greater": 66
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1104,
    "age_5_17": 453,
    "age_18_greater": 110
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2342,
    "age_5_17": 913,
    "age_18_greater": 70
  },
  {
    "state": "Madhya Pradesh",
    "district": "Morena",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2096,
    "age_5_17": 657,
    "age_18_greater": 52
  },
  {
    "state": "Punjab",
    "district": "Muktsar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 142,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Muktsar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 47,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Muktsar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 71,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Muktsar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 46,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mulugu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 261,
    "age_5_17": 88,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mulugu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 165,
    "age_5_17": 79,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Mulugu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 172,
    "age_5_17": 42,
    "age_18_greater": 4
  },
  {
    "state": "Telangana",
    "district": "Mulugu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 102,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 537,
    "age_5_17": 344,
    "age_18_greater": 50
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2758,
    "age_5_17": 1496,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1943,
    "age_5_17": 689,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3256,
    "age_5_17": 900,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2100,
    "age_5_17": 452,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai City",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 609,
    "age_5_17": 188,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai City",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 479,
    "age_5_17": 69,
    "age_18_greater": 24
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai City",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 754,
    "age_5_17": 120,
    "age_18_greater": 114
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai City",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 472,
    "age_5_17": 72,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 389,
    "age_5_17": 109,
    "age_18_greater": 44
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 882,
    "age_5_17": 457,
    "age_18_greater": 230
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3187,
    "age_5_17": 2177,
    "age_18_greater": 207
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2283,
    "age_5_17": 848,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1479,
    "age_5_17": 365,
    "age_18_greater": 62
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2508,
    "age_5_17": 624,
    "age_18_greater": 156
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai Suburban",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1752,
    "age_5_17": 366,
    "age_18_greater": 65
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai( Sub Urban )",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 95,
    "age_5_17": 26,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai( Sub Urban )",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 56,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai( Sub Urban )",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 120,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Mumbai( Sub Urban )",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 69,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mungeli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 801,
    "age_5_17": 112,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Mungeli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 590,
    "age_5_17": 95,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Mungeli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 738,
    "age_5_17": 107,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Mungeli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 471,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 191,
    "age_5_17": 278,
    "age_18_greater": 22
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 117,
    "age_5_17": 279,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 241,
    "age_5_17": 445,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 640,
    "age_5_17": 964,
    "age_18_greater": 11
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 377,
    "age_5_17": 470,
    "age_18_greater": 21
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 495,
    "age_5_17": 589,
    "age_18_greater": 27
  },
  {
    "state": "Bihar",
    "district": "Munger",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 384,
    "age_5_17": 509,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Murshidabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 12270,
    "age_5_17": 1592,
    "age_18_greater": 15
  },
  {
    "state": "West Bengal",
    "district": "Murshidabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7844,
    "age_5_17": 1135,
    "age_18_greater": 6
  },
  {
    "state": "West Bengal",
    "district": "Murshidabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 7291,
    "age_5_17": 1133,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Murshidabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4037,
    "age_5_17": 523,
    "age_18_greater": 62
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 680,
    "age_5_17": 308,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1025,
    "age_5_17": 604,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1794,
    "age_5_17": 1196,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1211,
    "age_5_17": 898,
    "age_18_greater": 35
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1667,
    "age_5_17": 1146,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Muzaffarnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 873,
    "age_5_17": 423,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 24,
    "age_5_17": 40,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1159,
    "age_5_17": 865,
    "age_18_greater": 65
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 2161,
    "age_5_17": 2046,
    "age_18_greater": 159
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1562,
    "age_5_17": 2080,
    "age_18_greater": 140
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 892,
    "age_5_17": 1217,
    "age_18_greater": 40
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2712,
    "age_5_17": 2717,
    "age_18_greater": 15
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1648,
    "age_5_17": 1596,
    "age_18_greater": 111
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2197,
    "age_5_17": 2123,
    "age_18_greater": 17
  },
  {
    "state": "Bihar",
    "district": "Muzaffarpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1732,
    "age_5_17": 1419,
    "age_18_greater": 108
  },
  {
    "state": "Karnataka",
    "district": "Mysore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 739,
    "age_5_17": 63,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Mysore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 681,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Mysore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 760,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Mysore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 677,
    "age_5_17": 46,
    "age_18_greater": 1
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 456,
    "age_5_17": 19,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 349,
    "age_5_17": 138,
    "age_18_greater": 80
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 871,
    "age_5_17": 132,
    "age_18_greater": 77
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 655,
    "age_5_17": 51,
    "age_18_greater": 17
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 709,
    "age_5_17": 75,
    "age_18_greater": 60
  },
  {
    "state": "Karnataka",
    "district": "Mysuru",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 610,
    "age_5_17": 48,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "N. T. R",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 242,
    "age_5_17": 36,
    "age_18_greater": 17
  },
  {
    "state": "Andhra Pradesh",
    "district": "N. T. R",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 149,
    "age_5_17": 20,
    "age_18_greater": 5
  },
  {
    "state": "Andhra Pradesh",
    "district": "N. T. R",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 218,
    "age_5_17": 31,
    "age_18_greater": 18
  },
  {
    "state": "Andhra Pradesh",
    "district": "N. T. R",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 10,
    "age_18_greater": 6
  },
  {
    "state": "West Bengal",
    "district": "NADIA",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "NADIA",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "ODISHA",
    "district": "NUAPADA",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "NUAPADA",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 19,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "NUAPADA",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "NUAPADA",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "NUAPADA",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 182,
    "age_5_17": 82,
    "age_18_greater": 12
  },
  {
    "state": "Odisha",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2043,
    "age_5_17": 981,
    "age_18_greater": 2
  },
  {
    "state": "Odisha",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 868,
    "age_5_17": 404,
    "age_18_greater": 8
  },
  {
    "state": "Orissa",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 578,
    "age_5_17": 345,
    "age_18_greater": 8
  },
  {
    "state": "Odisha",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 503,
    "age_5_17": 178,
    "age_18_greater": 35
  },
  {
    "state": "Orissa",
    "district": "Nabarangapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nabarangpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 327,
    "age_5_17": 103,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 204,
    "age_5_17": 33,
    "age_18_greater": 11
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 478,
    "age_5_17": 108,
    "age_18_greater": 50
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 280,
    "age_5_17": 176,
    "age_18_greater": 72
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1312,
    "age_5_17": 556,
    "age_18_greater": 187
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4036,
    "age_5_17": 998,
    "age_18_greater": 100
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2539,
    "age_5_17": 710,
    "age_18_greater": 21
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2770,
    "age_5_17": 722,
    "age_18_greater": 34
  },
  {
    "state": "West Bengal",
    "district": "Nadia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1625,
    "age_5_17": 320,
    "age_18_greater": 368
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 19,
    "age_5_17": 15,
    "age_18_greater": 22
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 504,
    "age_5_17": 236,
    "age_18_greater": 36
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 24,
    "age_5_17": 67,
    "age_18_greater": 65
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1553,
    "age_5_17": 735,
    "age_18_greater": 132
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3157,
    "age_5_17": 1088,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1261,
    "age_5_17": 513,
    "age_18_greater": 57
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1319,
    "age_5_17": 509,
    "age_18_greater": 65
  },
  {
    "state": "Assam",
    "district": "Nagaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1165,
    "age_5_17": 315,
    "age_18_greater": 15
  },
  {
    "state": "Tamil Nadu",
    "district": "Nagapattinam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1256,
    "age_5_17": 261,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Nagapattinam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 594,
    "age_5_17": 146,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Nagapattinam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 923,
    "age_5_17": 234,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Nagapattinam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 542,
    "age_5_17": 91,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nagarkurnool",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 467,
    "age_5_17": 111,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nagarkurnool",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 230,
    "age_5_17": 71,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nagarkurnool",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 248,
    "age_5_17": 67,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Nagarkurnool",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 132,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 563,
    "age_5_17": 278,
    "age_18_greater": 32
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 554,
    "age_5_17": 363,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 870,
    "age_5_17": 660,
    "age_18_greater": 21
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4461,
    "age_5_17": 1747,
    "age_18_greater": 19
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1384,
    "age_5_17": 611,
    "age_18_greater": 18
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2277,
    "age_5_17": 1012,
    "age_18_greater": 104
  },
  {
    "state": "Rajasthan",
    "district": "Nagaur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1509,
    "age_5_17": 770,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 468,
    "age_5_17": 50,
    "age_18_greater": 48
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 243,
    "age_5_17": 28,
    "age_18_greater": 22
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 904,
    "age_5_17": 225,
    "age_18_greater": 37
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3027,
    "age_5_17": 501,
    "age_18_greater": 33
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1458,
    "age_5_17": 213,
    "age_18_greater": 12
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2376,
    "age_5_17": 353,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Nagpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1617,
    "age_5_17": 132,
    "age_18_greater": 63
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 46,
    "age_5_17": 18,
    "age_18_greater": 11
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 488,
    "age_5_17": 66,
    "age_18_greater": 48
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 886,
    "age_5_17": 139,
    "age_18_greater": 4
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 709,
    "age_5_17": 105,
    "age_18_greater": 4
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 846,
    "age_5_17": 87,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Nainital",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 442,
    "age_5_17": 43,
    "age_18_greater": 8
  },
  {
    "state": "Delhi",
    "district": "Najafgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 9,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "Najafgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "Najafgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "Najafgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 307,
    "age_5_17": 1153,
    "age_18_greater": 37
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 434,
    "age_5_17": 1587,
    "age_18_greater": 37
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 912,
    "age_5_17": 2759,
    "age_18_greater": 16
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 619,
    "age_5_17": 1894,
    "age_18_greater": 26
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 695,
    "age_5_17": 1850,
    "age_18_greater": 11
  },
  {
    "state": "Bihar",
    "district": "Nalanda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 709,
    "age_5_17": 1520,
    "age_18_greater": 9
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 55,
    "age_5_17": 49,
    "age_18_greater": 77
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 134,
    "age_5_17": 75,
    "age_18_greater": 37
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 962,
    "age_5_17": 394,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 605,
    "age_5_17": 194,
    "age_18_greater": 34
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 604,
    "age_5_17": 157,
    "age_18_greater": 28
  },
  {
    "state": "Assam",
    "district": "Nalbari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 349,
    "age_5_17": 108,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 385,
    "age_5_17": 99,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2041,
    "age_5_17": 470,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 240,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1389,
    "age_5_17": 348,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 226,
    "age_5_17": 53,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1350,
    "age_5_17": 327,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 100,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nalgonda",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 625,
    "age_5_17": 101,
    "age_18_greater": 9
  },
  {
    "state": "Tamil Nadu",
    "district": "Namakkal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1827,
    "age_5_17": 161,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Namakkal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 776,
    "age_5_17": 126,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Namakkal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1034,
    "age_5_17": 234,
    "age_18_greater": 4
  },
  {
    "state": "Tamil Nadu",
    "district": "Namakkal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 620,
    "age_5_17": 85,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Namakkal   *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "Namchi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 4,
    "age_18_greater": 6
  },
  {
    "state": "Sikkim",
    "district": "Namchi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 3
  },
  {
    "state": "Sikkim",
    "district": "Namchi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "Namchi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 4
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Namsai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 32,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Namsai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 15,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Namsai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 22,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Namsai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 21,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 462,
    "age_5_17": 89,
    "age_18_greater": 56
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 383,
    "age_5_17": 80,
    "age_18_greater": 39
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 432,
    "age_5_17": 124,
    "age_18_greater": 28
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1295,
    "age_5_17": 462,
    "age_18_greater": 46
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2729,
    "age_5_17": 968,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1197,
    "age_5_17": 256,
    "age_18_greater": 47
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1242,
    "age_5_17": 274,
    "age_18_greater": 83
  },
  {
    "state": "Maharashtra",
    "district": "Nanded",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1424,
    "age_5_17": 194,
    "age_18_greater": 27
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 237,
    "age_5_17": 35,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 251,
    "age_5_17": 134,
    "age_18_greater": 21
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2031,
    "age_5_17": 994,
    "age_18_greater": 75
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2041,
    "age_5_17": 854,
    "age_18_greater": 63
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1078,
    "age_5_17": 243,
    "age_18_greater": 27
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1229,
    "age_5_17": 272,
    "age_18_greater": 35
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 782,
    "age_5_17": 98,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 19,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 23,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 20,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Nandurbar *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 18,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nandyal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 221,
    "age_5_17": 6,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nandyal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 194,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nandyal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 264,
    "age_5_17": 12,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nandyal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 5,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Narayanpet",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 441,
    "age_5_17": 76,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Narayanpet",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 267,
    "age_5_17": 73,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Narayanpet",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 240,
    "age_5_17": 48,
    "age_18_greater": 4
  },
  {
    "state": "Telangana",
    "district": "Narayanpet",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 134,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Narayanpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 140,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Narayanpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 79,
    "age_5_17": 54,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Narayanpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 119,
    "age_5_17": 100,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Narayanpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 110,
    "age_5_17": 50,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Narmada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 470,
    "age_5_17": 35,
    "age_18_greater": 1
  },
  {
    "state": "Gujarat",
    "district": "Narmada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 135,
    "age_5_17": 23,
    "age_18_greater": 9
  },
  {
    "state": "Gujarat",
    "district": "Narmada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 296,
    "age_5_17": 23,
    "age_18_greater": 14
  },
  {
    "state": "Gujarat",
    "district": "Narmada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 254,
    "age_5_17": 15,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narmadapuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 243,
    "age_5_17": 28,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narmadapuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 97,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narmadapuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 136,
    "age_5_17": 31,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narmadapuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 132,
    "age_5_17": 22,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsimhapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 386,
    "age_5_17": 100,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsimhapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 130,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsimhapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 271,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsimhapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 179,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsinghpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 312,
    "age_5_17": 189,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsinghpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1438,
    "age_5_17": 528,
    "age_18_greater": 31
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsinghpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 437,
    "age_5_17": 143,
    "age_18_greater": 19
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsinghpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 924,
    "age_5_17": 208,
    "age_18_greater": 23
  },
  {
    "state": "Madhya Pradesh",
    "district": "Narsinghpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 749,
    "age_5_17": 154,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 97,
    "age_5_17": 14,
    "age_18_greater": 45
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2729,
    "age_5_17": 1775,
    "age_18_greater": 111
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4980,
    "age_5_17": 2054,
    "age_18_greater": 32
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2162,
    "age_5_17": 584,
    "age_18_greater": 33
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3479,
    "age_5_17": 923,
    "age_18_greater": 79
  },
  {
    "state": "Maharashtra",
    "district": "Nashik",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2815,
    "age_5_17": 452,
    "age_18_greater": 4
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 133,
    "age_5_17": 10,
    "age_18_greater": 33
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 122,
    "age_5_17": 21,
    "age_18_greater": 15
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 191,
    "age_5_17": 47,
    "age_18_greater": 19
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 736,
    "age_5_17": 59,
    "age_18_greater": 6
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 228,
    "age_5_17": 12,
    "age_18_greater": 20
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 733,
    "age_5_17": 33,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Navsari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 310,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Nawada",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 616,
    "age_5_17": 2933,
    "age_18_greater": 123
  },
  {
    "state": "Bihar",
    "district": "Nawada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 724,
    "age_5_17": 3664,
    "age_18_greater": 68
  },
  {
    "state": "Bihar",
    "district": "Nawada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 489,
    "age_5_17": 2508,
    "age_18_greater": 64
  },
  {
    "state": "Bihar",
    "district": "Nawada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 450,
    "age_5_17": 1815,
    "age_18_greater": 27
  },
  {
    "state": "Bihar",
    "district": "Nawada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 463,
    "age_5_17": 1460,
    "age_18_greater": 9
  },
  {
    "state": "Punjab",
    "district": "Nawanshahr",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 55,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Nawanshahr",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 37,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Nawanshahr",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 49,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Nawanshahr",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 28,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 849,
    "age_5_17": 119,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 33,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 429,
    "age_5_17": 53,
    "age_18_greater": 3
  },
  {
    "state": "Orissa",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 22,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 401,
    "age_5_17": 65,
    "age_18_greater": 7
  },
  {
    "state": "Orissa",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 26,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 401,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Nayagarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1093,
    "age_5_17": 355,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 654,
    "age_5_17": 109,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1697,
    "age_5_17": 170,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Neemuch",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 739,
    "age_5_17": 130,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nellore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1477,
    "age_5_17": 292,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nellore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 884,
    "age_5_17": 174,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nellore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1311,
    "age_5_17": 202,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nellore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 939,
    "age_5_17": 86,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 212,
    "age_5_17": 100,
    "age_18_greater": 51
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 581,
    "age_5_17": 354,
    "age_18_greater": 156
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 40,
    "age_5_17": 16,
    "age_18_greater": 4
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 22,
    "age_5_17": 3,
    "age_18_greater": 3
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 36,
    "age_5_17": 13,
    "age_18_greater": 3
  },
  {
    "state": "Delhi",
    "district": "New Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 27,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "Nicobar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 41,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "Nicobar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "Nicobar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "Nicobar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "Nicobars",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nirmal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 531,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nirmal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 270,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Nirmal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 325,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Nirmal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 166,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Niuland",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Niuland",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 8,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Niuland",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Niuland",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Niwari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 29,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Niwari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 15,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Niwari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 47,
    "age_5_17": 8,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Niwari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 26,
    "age_5_17": 1,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 167,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2344,
    "age_5_17": 203,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 138,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1595,
    "age_5_17": 148,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 104,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1344,
    "age_5_17": 162,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 44,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Nizamabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 702,
    "age_5_17": 70,
    "age_18_greater": 4
  },
  {
    "state": "Nagaland",
    "district": "Noklak",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 47,
    "age_5_17": 65,
    "age_18_greater": 16
  },
  {
    "state": "Nagaland",
    "district": "Noklak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 18,
    "age_18_greater": 5
  },
  {
    "state": "Nagaland",
    "district": "Noklak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 12,
    "age_5_17": 61,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Noklak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 7,
    "age_5_17": 72,
    "age_18_greater": 14
  },
  {
    "state": "Nagaland",
    "district": "Noklak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 10,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 10,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 126,
    "age_5_17": 67,
    "age_18_greater": 39
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 494,
    "age_5_17": 195,
    "age_18_greater": 37
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 8255,
    "age_5_17": 2149,
    "age_18_greater": 238
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4564,
    "age_5_17": 1284,
    "age_18_greater": 29
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4974,
    "age_5_17": 1304,
    "age_18_greater": 55
  },
  {
    "state": "West Bengal",
    "district": "North 24 Parganas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3104,
    "age_5_17": 742,
    "age_18_greater": 950
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "North And Middle Andaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 38,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "North And Middle Andaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "North And Middle Andaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 31,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "North And Middle Andaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 39,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 130,
    "age_5_17": 179,
    "age_18_greater": 99
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 25,
    "age_5_17": 39,
    "age_18_greater": 13
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 110,
    "age_5_17": 68,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 99,
    "age_5_17": 54,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 85,
    "age_5_17": 58,
    "age_18_greater": 21
  },
  {
    "state": "Assam",
    "district": "North Cachar Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 52,
    "age_5_17": 22,
    "age_18_greater": 1
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 332,
    "age_5_17": 244,
    "age_18_greater": 22
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 563,
    "age_5_17": 309,
    "age_18_greater": 29
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 631,
    "age_5_17": 250,
    "age_18_greater": 11
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 373,
    "age_5_17": 112,
    "age_18_greater": 3
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 726,
    "age_5_17": 199,
    "age_18_greater": 14
  },
  {
    "state": "Delhi",
    "district": "North Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 523,
    "age_5_17": 116,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "North Dinajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 91,
    "age_5_17": 33,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North Dinajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 55,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North Dinajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 63,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North Dinajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 54,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North East",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 452,
    "age_5_17": 163,
    "age_18_greater": 2
  },
  {
    "state": "Delhi",
    "district": "North East",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 261,
    "age_5_17": 82,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North East",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 344,
    "age_5_17": 108,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North East",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 271,
    "age_5_17": 55,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North East   *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 998,
    "age_5_17": 569,
    "age_18_greater": 10
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2868,
    "age_5_17": 1583,
    "age_18_greater": 31
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1472,
    "age_5_17": 614,
    "age_18_greater": 6
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 954,
    "age_5_17": 374,
    "age_18_greater": 3
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1168,
    "age_5_17": 397,
    "age_18_greater": 9
  },
  {
    "state": "Delhi",
    "district": "North East Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 839,
    "age_5_17": 212,
    "age_18_greater": 6
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 205,
    "age_5_17": 1048,
    "age_18_greater": 242
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 65,
    "age_5_17": 168,
    "age_18_greater": 91
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 22,
    "age_5_17": 97,
    "age_18_greater": 125
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 107,
    "age_5_17": 332,
    "age_18_greater": 37
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 17,
    "age_5_17": 87,
    "age_18_greater": 46
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 32,
    "age_5_17": 89,
    "age_18_greater": 71
  },
  {
    "state": "Meghalaya",
    "district": "North Garo Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 33,
    "age_18_greater": 146
  },
  {
    "state": "Goa",
    "district": "North Goa",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 21,
    "age_5_17": 10,
    "age_18_greater": 11
  },
  {
    "state": "Goa",
    "district": "North Goa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 410,
    "age_5_17": 64,
    "age_18_greater": 40
  },
  {
    "state": "Goa",
    "district": "North Goa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 216,
    "age_5_17": 23,
    "age_18_greater": 6
  },
  {
    "state": "Goa",
    "district": "North Goa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 296,
    "age_5_17": 37,
    "age_18_greater": 25
  },
  {
    "state": "Goa",
    "district": "North Goa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 166,
    "age_5_17": 12,
    "age_18_greater": 17
  },
  {
    "state": "Sikkim",
    "district": "North Sikkim",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 15,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North Sikkim",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 12,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North Sikkim",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "North Sikkim",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "North Tripura",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 124,
    "age_5_17": 75,
    "age_18_greater": 17
  },
  {
    "state": "Tripura",
    "district": "North Tripura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 319,
    "age_5_17": 125,
    "age_18_greater": 4
  },
  {
    "state": "Tripura",
    "district": "North Tripura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 135,
    "age_5_17": 59,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "North Tripura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 265,
    "age_5_17": 87,
    "age_18_greater": 3
  },
  {
    "state": "Tripura",
    "district": "North Tripura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 203,
    "age_5_17": 70,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "North Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 485,
    "age_5_17": 157,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "North Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 304,
    "age_5_17": 84,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 304,
    "age_5_17": 107,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "North Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 133,
    "age_5_17": 51,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 35,
    "age_5_17": 15,
    "age_18_greater": 10
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 903,
    "age_5_17": 349,
    "age_18_greater": 54
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 368,
    "age_5_17": 251,
    "age_18_greater": 25
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 588,
    "age_5_17": 184,
    "age_18_greater": 26
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 858,
    "age_5_17": 267,
    "age_18_greater": 46
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2929,
    "age_5_17": 877,
    "age_18_greater": 74
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1657,
    "age_5_17": 409,
    "age_18_greater": 37
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2820,
    "age_5_17": 620,
    "age_18_greater": 73
  },
  {
    "state": "Delhi",
    "district": "North West Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2237,
    "age_5_17": 321,
    "age_18_greater": 10
  },
  {
    "state": "Odisha",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 865,
    "age_5_17": 204,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 319,
    "age_5_17": 76,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 258,
    "age_5_17": 62,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Nuapada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 224,
    "age_5_17": 71,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Nuh",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1251,
    "age_5_17": 213,
    "age_18_greater": 42
  },
  {
    "state": "Maharashtra",
    "district": "Osmanabad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 275,
    "age_5_17": 105,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Osmanabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 971,
    "age_5_17": 332,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Osmanabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 590,
    "age_5_17": 105,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Osmanabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 751,
    "age_5_17": 94,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Osmanabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 716,
    "age_5_17": 77,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pakaur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 105,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pakaur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 29,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pakaur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 50,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pakaur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 13,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Pakke Kessang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Pakke Kessang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Pakke Kessang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 579,
    "age_5_17": 372,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 501,
    "age_5_17": 590,
    "age_18_greater": 16
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 994,
    "age_5_17": 1023,
    "age_18_greater": 11
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1005,
    "age_5_17": 662,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 229,
    "age_5_17": 106,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 469,
    "age_5_17": 106,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Pakur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 194,
    "age_5_17": 49,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Palakkad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1208,
    "age_5_17": 433,
    "age_18_greater": 3
  },
  {
    "state": "Kerala",
    "district": "Palakkad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1122,
    "age_5_17": 363,
    "age_18_greater": 60
  },
  {
    "state": "Kerala",
    "district": "Palakkad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1526,
    "age_5_17": 373,
    "age_18_greater": 82
  },
  {
    "state": "Kerala",
    "district": "Palakkad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1318,
    "age_5_17": 212,
    "age_18_greater": 24
  },
  {
    "state": "Jharkhand",
    "district": "Palamau",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 78,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Palamau",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Palamau",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 96,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Palamau",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 25,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Palamu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1933,
    "age_5_17": 642,
    "age_18_greater": 18
  },
  {
    "state": "Jharkhand",
    "district": "Palamu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 984,
    "age_5_17": 295,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Palamu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2473,
    "age_5_17": 764,
    "age_18_greater": 27
  },
  {
    "state": "Jharkhand",
    "district": "Palamu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1158,
    "age_5_17": 293,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 174,
    "age_5_17": 90,
    "age_18_greater": 16
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 162,
    "age_5_17": 155,
    "age_18_greater": 14
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 252,
    "age_5_17": 252,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 584,
    "age_5_17": 607,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1966,
    "age_5_17": 983,
    "age_18_greater": 47
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1144,
    "age_5_17": 359,
    "age_18_greater": 23
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1821,
    "age_5_17": 467,
    "age_18_greater": 19
  },
  {
    "state": "Maharashtra",
    "district": "Palghar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1240,
    "age_5_17": 278,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Pali",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 138,
    "age_5_17": 38,
    "age_18_greater": 11
  },
  {
    "state": "Rajasthan",
    "district": "Pali",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2731,
    "age_5_17": 1112,
    "age_18_greater": 24
  },
  {
    "state": "Rajasthan",
    "district": "Pali",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 887,
    "age_5_17": 411,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Pali",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1596,
    "age_5_17": 680,
    "age_18_greater": 61
  },
  {
    "state": "Rajasthan",
    "district": "Pali",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 948,
    "age_5_17": 455,
    "age_18_greater": 15
  },
  {
    "state": "Andhra Pradesh",
    "district": "Palnadu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 239,
    "age_5_17": 34,
    "age_18_greater": 11
  },
  {
    "state": "Andhra Pradesh",
    "district": "Palnadu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 148,
    "age_5_17": 17,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Palnadu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 167,
    "age_5_17": 14,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "Palnadu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 205,
    "age_5_17": 11,
    "age_18_greater": 6
  },
  {
    "state": "Haryana",
    "district": "Palwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1117,
    "age_5_17": 125,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Palwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 864,
    "age_5_17": 61,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Palwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1490,
    "age_5_17": 86,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Palwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 896,
    "age_5_17": 60,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Panch Mahals",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 789,
    "age_5_17": 434,
    "age_18_greater": 100
  },
  {
    "state": "Gujarat",
    "district": "Panch Mahals",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 28,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Panch Mahals",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Panch Mahals",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 21,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Panch Mahals",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Panchkula",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 308,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Panchkula",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 269,
    "age_5_17": 17,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Panchkula",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 434,
    "age_5_17": 31,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Panchkula",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 276,
    "age_5_17": 13,
    "age_18_greater": 1
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 574,
    "age_5_17": 145,
    "age_18_greater": 183
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 311,
    "age_5_17": 83,
    "age_18_greater": 61
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1431,
    "age_5_17": 388,
    "age_18_greater": 47
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 629,
    "age_5_17": 125,
    "age_18_greater": 9
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1152,
    "age_5_17": 263,
    "age_18_greater": 18
  },
  {
    "state": "Gujarat",
    "district": "Panchmahals",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 731,
    "age_5_17": 118,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Pandhurna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 1,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Pandhurna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 1,
    "age_18_greater": 23
  },
  {
    "state": "Madhya Pradesh",
    "district": "Pandhurna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 20,
    "age_5_17": 0,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Pandhurna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 23,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 776,
    "age_5_17": 87,
    "age_18_greater": 14
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1344,
    "age_5_17": 169,
    "age_18_greater": 10
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1076,
    "age_5_17": 108,
    "age_18_greater": 6
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 677,
    "age_5_17": 44,
    "age_18_greater": 6
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 990,
    "age_5_17": 98,
    "age_18_greater": 10
  },
  {
    "state": "Haryana",
    "district": "Panipat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 635,
    "age_5_17": 37,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 107,
    "age_5_17": 33,
    "age_18_greater": 19
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 140,
    "age_5_17": 71,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 301,
    "age_5_17": 173,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2714,
    "age_5_17": 916,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1153,
    "age_5_17": 407,
    "age_18_greater": 19
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1432,
    "age_5_17": 493,
    "age_18_greater": 16
  },
  {
    "state": "Madhya Pradesh",
    "district": "Panna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 960,
    "age_5_17": 311,
    "age_18_greater": 31
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Papum Pare",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 72,
    "age_5_17": 87,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Papum Pare",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 56,
    "age_5_17": 66,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Papum Pare",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 49,
    "age_5_17": 63,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Papum Pare",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 24,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 17,
    "age_5_17": 14,
    "age_18_greater": 37
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 135,
    "age_5_17": 10,
    "age_18_greater": 16
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 425,
    "age_5_17": 90,
    "age_18_greater": 32
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1476,
    "age_5_17": 446,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 957,
    "age_5_17": 171,
    "age_18_greater": 23
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1220,
    "age_5_17": 190,
    "age_18_greater": 77
  },
  {
    "state": "Maharashtra",
    "district": "Parbhani",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 832,
    "age_5_17": 90,
    "age_18_greater": 10
  },
  {
    "state": "Andhra Pradesh",
    "district": "Parvathipuram Manyam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 162,
    "age_5_17": 11,
    "age_18_greater": 4
  },
  {
    "state": "Andhra Pradesh",
    "district": "Parvathipuram Manyam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 103,
    "age_5_17": 14,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Parvathipuram Manyam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 106,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Parvathipuram Manyam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 93,
    "age_5_17": 2,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 330,
    "age_5_17": 129,
    "age_18_greater": 22
  },
  {
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 160,
    "age_5_17": 73,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 239,
    "age_5_17": 77,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Paschim Bardhaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 136,
    "age_5_17": 39,
    "age_18_greater": 65
  },
  {
    "state": "West Bengal",
    "district": "Paschim Medinipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5425,
    "age_5_17": 1590,
    "age_18_greater": 28
  },
  {
    "state": "West Bengal",
    "district": "Paschim Medinipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3354,
    "age_5_17": 787,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Paschim Medinipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3439,
    "age_5_17": 841,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "Paschim Medinipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2022,
    "age_5_17": 477,
    "age_18_greater": 119
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 25,
    "age_5_17": 88,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1969,
    "age_5_17": 4299,
    "age_18_greater": 239
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3018,
    "age_5_17": 6314,
    "age_18_greater": 310
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 21,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Pashchim Champaran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pashchimi Singhbhum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 91,
    "age_5_17": 96,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Pashchimi Singhbhum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 69,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pashchimi Singhbhum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 124,
    "age_5_17": 70,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Pashchimi Singhbhum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 62,
    "age_5_17": 36,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 141,
    "age_5_17": 26,
    "age_18_greater": 23
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 800,
    "age_5_17": 173,
    "age_18_greater": 225
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 225,
    "age_5_17": 53,
    "age_18_greater": 25
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 207,
    "age_5_17": 80,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1741,
    "age_5_17": 1178,
    "age_18_greater": 232
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1184,
    "age_5_17": 396,
    "age_18_greater": 71
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 317,
    "age_5_17": 77,
    "age_18_greater": 39
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 911,
    "age_5_17": 170,
    "age_18_greater": 65
  },
  {
    "state": "Gujarat",
    "district": "Patan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 497,
    "age_5_17": 75,
    "age_18_greater": 25
  },
  {
    "state": "Kerala",
    "district": "Pathanamthitta",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 413,
    "age_5_17": 142,
    "age_18_greater": 14
  },
  {
    "state": "Kerala",
    "district": "Pathanamthitta",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 329,
    "age_5_17": 102,
    "age_18_greater": 24
  },
  {
    "state": "Kerala",
    "district": "Pathanamthitta",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 352,
    "age_5_17": 126,
    "age_18_greater": 21
  },
  {
    "state": "Kerala",
    "district": "Pathanamthitta",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 304,
    "age_5_17": 110,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "Pathankot",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 339,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Pathankot",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 154,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Pathankot",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 297,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Pathankot",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 243,
    "age_5_17": 5,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 456,
    "age_5_17": 125,
    "age_18_greater": 23
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 766,
    "age_5_17": 237,
    "age_18_greater": 18
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1290,
    "age_5_17": 157,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 602,
    "age_5_17": 95,
    "age_18_greater": 23
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 703,
    "age_5_17": 100,
    "age_18_greater": 2
  },
  {
    "state": "Punjab",
    "district": "Patiala",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 481,
    "age_5_17": 55,
    "age_18_greater": 17
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 12,
    "age_5_17": 52,
    "age_18_greater": 16
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 723,
    "age_5_17": 2303,
    "age_18_greater": 373
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 105,
    "age_5_17": 347,
    "age_18_greater": 22
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 320,
    "age_5_17": 1009,
    "age_18_greater": 38
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 508,
    "age_5_17": 1551,
    "age_18_greater": 51
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1692,
    "age_5_17": 4715,
    "age_18_greater": 18
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 921,
    "age_5_17": 2146,
    "age_18_greater": 159
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1161,
    "age_5_17": 2757,
    "age_18_greater": 28
  },
  {
    "state": "Bihar",
    "district": "Patna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1303,
    "age_5_17": 2271,
    "age_18_greater": 43
  },
  {
    "state": "Uttarakhand",
    "district": "Pauri Garhwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 551,
    "age_5_17": 58,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Pauri Garhwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 438,
    "age_5_17": 39,
    "age_18_greater": 5
  },
  {
    "state": "Uttarakhand",
    "district": "Pauri Garhwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 388,
    "age_5_17": 39,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Pauri Garhwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 300,
    "age_5_17": 29,
    "age_18_greater": 6
  },
  {
    "state": "Telangana",
    "district": "Peddapalli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 197,
    "age_5_17": 31,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Peddapalli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 120,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Peddapalli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 125,
    "age_5_17": 10,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Peddapalli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 71,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Perambalur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 703,
    "age_5_17": 72,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Perambalur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 375,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Perambalur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 505,
    "age_5_17": 88,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Perambalur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 315,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 201,
    "age_5_17": 331,
    "age_18_greater": 12
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 148,
    "age_5_17": 119,
    "age_18_greater": 15
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 37,
    "age_5_17": 141,
    "age_18_greater": 10
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 36,
    "age_5_17": 105,
    "age_18_greater": 18
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 47,
    "age_5_17": 90,
    "age_18_greater": 12
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 23,
    "age_5_17": 52,
    "age_18_greater": 12
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 11,
    "age_5_17": 5,
    "age_18_greater": 21
  },
  {
    "state": "Nagaland",
    "district": "Peren",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Phek",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 157,
    "age_5_17": 268,
    "age_18_greater": 22
  },
  {
    "state": "Nagaland",
    "district": "Phek",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 50,
    "age_5_17": 174,
    "age_18_greater": 8
  },
  {
    "state": "Nagaland",
    "district": "Phek",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 42,
    "age_5_17": 147,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Phek",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 58,
    "age_5_17": 98,
    "age_18_greater": 6
  },
  {
    "state": "Nagaland",
    "district": "Phek",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Pherzawl",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Pherzawl",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Pherzawl",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Pherzawl",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 598,
    "age_5_17": 260,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1367,
    "age_5_17": 640,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1026,
    "age_5_17": 628,
    "age_18_greater": 25
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1622,
    "age_5_17": 1108,
    "age_18_greater": 36
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1483,
    "age_5_17": 800,
    "age_18_greater": 22
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 720,
    "age_5_17": 438,
    "age_18_greater": 32
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1155,
    "age_5_17": 521,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pilibhit",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 820,
    "age_5_17": 236,
    "age_18_greater": 20
  },
  {
    "state": "Uttarakhand",
    "district": "Pithoragarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 376,
    "age_5_17": 48,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Pithoragarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 209,
    "age_5_17": 41,
    "age_18_greater": 3
  },
  {
    "state": "Uttarakhand",
    "district": "Pithoragarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 252,
    "age_5_17": 36,
    "age_18_greater": 3
  },
  {
    "state": "Uttarakhand",
    "district": "Pithoragarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 228,
    "age_5_17": 21,
    "age_18_greater": 1
  },
  {
    "state": "Pondicherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 416,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 180,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 310,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 109,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Pondicherry",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 267,
    "age_5_17": 38,
    "age_18_greater": 44
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 209,
    "age_5_17": 57,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 450,
    "age_5_17": 89,
    "age_18_greater": 56
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 404,
    "age_5_17": 73,
    "age_18_greater": 20
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 149,
    "age_5_17": 22,
    "age_18_greater": 21
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 290,
    "age_5_17": 41,
    "age_18_greater": 20
  },
  {
    "state": "Gujarat",
    "district": "Porbandar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 237,
    "age_5_17": 12,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Prakasam",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 91,
    "age_5_17": 108,
    "age_18_greater": 38
  },
  {
    "state": "Andhra Pradesh",
    "district": "Prakasam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2197,
    "age_5_17": 479,
    "age_18_greater": 13
  },
  {
    "state": "Andhra Pradesh",
    "district": "Prakasam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1290,
    "age_5_17": 217,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Prakasam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1633,
    "age_5_17": 246,
    "age_18_greater": 5
  },
  {
    "state": "Andhra Pradesh",
    "district": "Prakasam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1194,
    "age_5_17": 107,
    "age_18_greater": 3
  },
  {
    "state": "Rajasthan",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1229,
    "age_5_17": 540,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2127,
    "age_5_17": 1927,
    "age_18_greater": 11
  },
  {
    "state": "Rajasthan",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 284,
    "age_5_17": 141,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1291,
    "age_5_17": 1004,
    "age_18_greater": 23
  },
  {
    "state": "Rajasthan",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 661,
    "age_5_17": 256,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1473,
    "age_5_17": 878,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 469,
    "age_5_17": 196,
    "age_18_greater": 2
  },
  {
    "state": "Uttar Pradesh",
    "district": "Pratapgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 975,
    "age_5_17": 577,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 23,
    "age_5_17": 45,
    "age_18_greater": 19
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 503,
    "age_5_17": 540,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 326,
    "age_5_17": 249,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 171,
    "age_5_17": 147,
    "age_18_greater": 91
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 240,
    "age_5_17": 177,
    "age_18_greater": 36
  },
  {
    "state": "Uttar Pradesh",
    "district": "Prayagraj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 165,
    "age_5_17": 97,
    "age_18_greater": 5
  },
  {
    "state": "Puducherry",
    "district": "Puducherry",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 401,
    "age_5_17": 31,
    "age_18_greater": 10
  },
  {
    "state": "Puducherry",
    "district": "Puducherry",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 222,
    "age_5_17": 20,
    "age_18_greater": 1
  },
  {
    "state": "Puducherry",
    "district": "Puducherry",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 372,
    "age_5_17": 21,
    "age_18_greater": 8
  },
  {
    "state": "Puducherry",
    "district": "Puducherry",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 218,
    "age_5_17": 13,
    "age_18_greater": 13
  },
  {
    "state": "Tamil Nadu",
    "district": "Pudukkottai",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 143,
    "age_5_17": 34,
    "age_18_greater": 13
  },
  {
    "state": "Tamil Nadu",
    "district": "Pudukkottai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2009,
    "age_5_17": 574,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Pudukkottai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 918,
    "age_5_17": 289,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Pudukkottai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1405,
    "age_5_17": 563,
    "age_18_greater": 4
  },
  {
    "state": "Tamil Nadu",
    "district": "Pudukkottai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 864,
    "age_5_17": 210,
    "age_18_greater": 15
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 457,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 426,
    "age_5_17": 30,
    "age_18_greater": 12
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 450,
    "age_5_17": 32,
    "age_18_greater": 2
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Pulwama",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 405,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 142,
    "age_5_17": 59,
    "age_18_greater": 10
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 352,
    "age_5_17": 142,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 401,
    "age_5_17": 118,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 536,
    "age_5_17": 171,
    "age_18_greater": 6
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Punch",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 632,
    "age_5_17": 58,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 39,
    "age_5_17": 11,
    "age_18_greater": 19
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 328,
    "age_5_17": 97,
    "age_18_greater": 61
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 142,
    "age_5_17": 83,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3645,
    "age_5_17": 1552,
    "age_18_greater": 291
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5891,
    "age_5_17": 1905,
    "age_18_greater": 81
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3896,
    "age_5_17": 849,
    "age_18_greater": 144
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 5677,
    "age_5_17": 1275,
    "age_18_greater": 360
  },
  {
    "state": "Maharashtra",
    "district": "Pune",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4470,
    "age_5_17": 764,
    "age_18_greater": 172
  },
  {
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 28,
    "age_5_17": 18,
    "age_18_greater": 12
  },
  {
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 932,
    "age_5_17": 123,
    "age_18_greater": 22
  },
  {
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 567,
    "age_5_17": 64,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 649,
    "age_5_17": 120,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Purba Bardhaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 347,
    "age_5_17": 65,
    "age_18_greater": 86
  },
  {
    "state": "Bihar",
    "district": "Purba Champaran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purba Champaran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 14,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purba Champaran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purba Champaran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 15,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Purba Medinipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5084,
    "age_5_17": 514,
    "age_18_greater": 17
  },
  {
    "state": "West Bengal",
    "district": "Purba Medinipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2852,
    "age_5_17": 294,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "Purba Medinipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3170,
    "age_5_17": 352,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Purba Medinipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1848,
    "age_5_17": 150,
    "age_18_greater": 37
  },
  {
    "state": "Bihar",
    "district": "Purbi Champaran",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 60,
    "age_5_17": 241,
    "age_18_greater": 35
  },
  {
    "state": "Bihar",
    "district": "Purbi Champaran",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1549,
    "age_5_17": 4314,
    "age_18_greater": 335
  },
  {
    "state": "Bihar",
    "district": "Purbi Champaran",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2391,
    "age_5_17": 5516,
    "age_18_greater": 430
  },
  {
    "state": "Jharkhand",
    "district": "Purbi Singhbhum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 271,
    "age_5_17": 70,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Purbi Singhbhum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 209,
    "age_5_17": 36,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Purbi Singhbhum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 228,
    "age_5_17": 47,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Purbi Singhbhum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 106,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1138,
    "age_5_17": 233,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 71,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 565,
    "age_5_17": 117,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 35,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 704,
    "age_5_17": 117,
    "age_18_greater": 2
  },
  {
    "state": "Orissa",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 45,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 552,
    "age_5_17": 81,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Puri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 43,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purnea",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 60,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purnea",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 33,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purnea",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 49,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purnea",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 27,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 517,
    "age_5_17": 276,
    "age_18_greater": 21
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 620,
    "age_5_17": 741,
    "age_18_greater": 57
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 872,
    "age_5_17": 1017,
    "age_18_greater": 35
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3333,
    "age_5_17": 2028,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3070,
    "age_5_17": 1471,
    "age_18_greater": 24
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1654,
    "age_5_17": 1061,
    "age_18_greater": 20
  },
  {
    "state": "Bihar",
    "district": "Purnia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2129,
    "age_5_17": 1127,
    "age_18_greater": 13
  },
  {
    "state": "West Bengal",
    "district": "Purulia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 237,
    "age_5_17": 92,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Purulia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 108,
    "age_5_17": 56,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Purulia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 114,
    "age_5_17": 66,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Purulia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 80,
    "age_5_17": 29,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "Puruliya",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3952,
    "age_5_17": 1353,
    "age_18_greater": 40
  },
  {
    "state": "West Bengal",
    "district": "Puruliya",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1963,
    "age_5_17": 690,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Puruliya",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2413,
    "age_5_17": 891,
    "age_18_greater": 4
  },
  {
    "state": "West Bengal",
    "district": "Puruliya",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1346,
    "age_5_17": 478,
    "age_18_greater": 89
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rae Bareli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1849,
    "age_5_17": 1499,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rae Bareli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1317,
    "age_5_17": 896,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rae Bareli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1506,
    "age_5_17": 825,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rae Bareli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1140,
    "age_5_17": 655,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Raebareli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Raebareli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Raichur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 290,
    "age_5_17": 127,
    "age_18_greater": 11
  },
  {
    "state": "Karnataka",
    "district": "Raichur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2095,
    "age_5_17": 730,
    "age_18_greater": 28
  },
  {
    "state": "Karnataka",
    "district": "Raichur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1553,
    "age_5_17": 400,
    "age_18_greater": 20
  },
  {
    "state": "Karnataka",
    "district": "Raichur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1918,
    "age_5_17": 487,
    "age_18_greater": 27
  },
  {
    "state": "Karnataka",
    "district": "Raichur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1763,
    "age_5_17": 312,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 242,
    "age_5_17": 72,
    "age_18_greater": 21
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 845,
    "age_5_17": 296,
    "age_18_greater": 25
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 496,
    "age_5_17": 139,
    "age_18_greater": 9
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 305,
    "age_5_17": 62,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 392,
    "age_5_17": 106,
    "age_18_greater": 31
  },
  {
    "state": "Maharashtra",
    "district": "Raigad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 305,
    "age_5_17": 68,
    "age_18_greater": 16
  },
  {
    "state": "Chhattisgarh",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1318,
    "age_5_17": 181,
    "age_18_greater": 23
  },
  {
    "state": "Chhattisgarh",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1282,
    "age_5_17": 166,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1475,
    "age_5_17": 395,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 547,
    "age_5_17": 82,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 845,
    "age_5_17": 135,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 710,
    "age_5_17": 104,
    "age_18_greater": 7
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1160,
    "age_5_17": 189,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 437,
    "age_5_17": 92,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 934,
    "age_5_17": 96,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh(MH)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 21,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh(MH)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 15,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh(MH)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Raigarh(MH)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 24,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 49,
    "age_5_17": 15,
    "age_18_greater": 36
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 299,
    "age_5_17": 12,
    "age_18_greater": 11
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1877,
    "age_5_17": 209,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1071,
    "age_5_17": 168,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1949,
    "age_5_17": 306,
    "age_18_greater": 6
  },
  {
    "state": "Chhattisgarh",
    "district": "Raipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 960,
    "age_5_17": 69,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Raisen",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 410,
    "age_5_17": 83,
    "age_18_greater": 22
  },
  {
    "state": "Madhya Pradesh",
    "district": "Raisen",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2252,
    "age_5_17": 589,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Raisen",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 887,
    "age_5_17": 178,
    "age_18_greater": 35
  },
  {
    "state": "Madhya Pradesh",
    "district": "Raisen",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1194,
    "age_5_17": 171,
    "age_18_greater": 40
  },
  {
    "state": "Madhya Pradesh",
    "district": "Raisen",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1472,
    "age_5_17": 209,
    "age_18_greater": 15
  },
  {
    "state": "Telangana",
    "district": "Rajanna Sircilla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 262,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Rajanna Sircilla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 250,
    "age_5_17": 11,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Rajanna Sircilla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 194,
    "age_5_17": 12,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Rajanna Sircilla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 128,
    "age_5_17": 7,
    "age_18_greater": 1
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Rajauri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Rajauri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rajgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1685,
    "age_5_17": 679,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rajgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 651,
    "age_5_17": 202,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rajgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1493,
    "age_5_17": 345,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rajgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2713,
    "age_5_17": 368,
    "age_18_greater": 14
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1398,
    "age_5_17": 338,
    "age_18_greater": 231
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1375,
    "age_5_17": 312,
    "age_18_greater": 221
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 114,
    "age_5_17": 194,
    "age_18_greater": 16
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2567,
    "age_5_17": 1437,
    "age_18_greater": 200
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2225,
    "age_5_17": 651,
    "age_18_greater": 50
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 979,
    "age_5_17": 231,
    "age_18_greater": 82
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2363,
    "age_5_17": 385,
    "age_18_greater": 93
  },
  {
    "state": "Gujarat",
    "district": "Rajkot",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1398,
    "age_5_17": 184,
    "age_18_greater": 26
  },
  {
    "state": "Chhattisgarh",
    "district": "Rajnandgaon",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1061,
    "age_5_17": 132,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Rajnandgaon",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 699,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Rajnandgaon",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1281,
    "age_5_17": 141,
    "age_18_greater": 22
  },
  {
    "state": "Chhattisgarh",
    "district": "Rajnandgaon",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 750,
    "age_5_17": 59,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Rajouri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 513,
    "age_5_17": 166,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Rajouri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 313,
    "age_5_17": 121,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Rajouri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 728,
    "age_5_17": 221,
    "age_18_greater": 7
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Rajouri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 517,
    "age_5_17": 86,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Rajsamand",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1293,
    "age_5_17": 590,
    "age_18_greater": 2
  },
  {
    "state": "Rajasthan",
    "district": "Rajsamand",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 464,
    "age_5_17": 243,
    "age_18_greater": 4
  },
  {
    "state": "Rajasthan",
    "district": "Rajsamand",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 839,
    "age_5_17": 337,
    "age_18_greater": 19
  },
  {
    "state": "Rajasthan",
    "district": "Rajsamand",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 482,
    "age_5_17": 235,
    "age_18_greater": 4
  },
  {
    "state": "Karnataka",
    "district": "Ramanagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 950,
    "age_5_17": 255,
    "age_18_greater": 4
  },
  {
    "state": "Karnataka",
    "district": "Ramanagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 488,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Ramanagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 668,
    "age_5_17": 46,
    "age_18_greater": 7
  },
  {
    "state": "Karnataka",
    "district": "Ramanagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 453,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Ramanagara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 168,
    "age_5_17": 24,
    "age_18_greater": 12
  },
  {
    "state": "Tamil Nadu",
    "district": "Ramanathapuram",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 92,
    "age_5_17": 38,
    "age_18_greater": 22
  },
  {
    "state": "Tamil Nadu",
    "district": "Ramanathapuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1095,
    "age_5_17": 163,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Ramanathapuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 621,
    "age_5_17": 148,
    "age_18_greater": 5
  },
  {
    "state": "Tamil Nadu",
    "district": "Ramanathapuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 934,
    "age_5_17": 236,
    "age_18_greater": 6
  },
  {
    "state": "Tamil Nadu",
    "district": "Ramanathapuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 576,
    "age_5_17": 59,
    "age_18_greater": 10
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ramban",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 204,
    "age_5_17": 132,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ramban",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 300,
    "age_5_17": 157,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ramban",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 329,
    "age_5_17": 212,
    "age_18_greater": 5
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Ramban",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 484,
    "age_5_17": 96,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Ramgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 581,
    "age_5_17": 392,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Ramgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 391,
    "age_5_17": 223,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Ramgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 632,
    "age_5_17": 296,
    "age_18_greater": 6
  },
  {
    "state": "Jharkhand",
    "district": "Ramgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 298,
    "age_5_17": 155,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 894,
    "age_5_17": 333,
    "age_18_greater": 19
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1304,
    "age_5_17": 700,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 694,
    "age_5_17": 751,
    "age_18_greater": 21
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3375,
    "age_5_17": 2652,
    "age_18_greater": 127
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1741,
    "age_5_17": 1247,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1252,
    "age_5_17": 690,
    "age_18_greater": 7
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1709,
    "age_5_17": 898,
    "age_18_greater": 50
  },
  {
    "state": "Uttar Pradesh",
    "district": "Rampur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1082,
    "age_5_17": 486,
    "age_18_greater": 24
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 552,
    "age_5_17": 481,
    "age_18_greater": 87
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 259,
    "age_5_17": 273,
    "age_18_greater": 34
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 792,
    "age_5_17": 682,
    "age_18_greater": 121
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1954,
    "age_5_17": 1079,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1394,
    "age_5_17": 687,
    "age_18_greater": 26
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3402,
    "age_5_17": 1083,
    "age_18_greater": 7
  },
  {
    "state": "Jharkhand",
    "district": "Ranchi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 965,
    "age_5_17": 328,
    "age_18_greater": 51
  },
  {
    "state": "Telangana",
    "district": "Ranga Reddy",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 181,
    "age_5_17": 93,
    "age_18_greater": 10
  },
  {
    "state": "Andhra Pradesh",
    "district": "Rangareddi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 502,
    "age_5_17": 132,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Rangareddi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 355,
    "age_5_17": 120,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Rangareddi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 375,
    "age_5_17": 122,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Rangareddi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 246,
    "age_5_17": 31,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Rangareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 79,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Rangareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 60,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Rangareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 52,
    "age_5_17": 21,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Rangareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 46,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Ranipet",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 30,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Ranipet",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 19,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Ranipet",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 32,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Ranipet",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 16,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ratlam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1847,
    "age_5_17": 637,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ratlam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 953,
    "age_5_17": 212,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ratlam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2668,
    "age_5_17": 457,
    "age_18_greater": 45
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ratlam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 959,
    "age_5_17": 172,
    "age_18_greater": 25
  },
  {
    "state": "Maharashtra",
    "district": "Ratnagiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 665,
    "age_5_17": 102,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Ratnagiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 536,
    "age_5_17": 36,
    "age_18_greater": 2
  },
  {
    "state": "Maharashtra",
    "district": "Ratnagiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 642,
    "age_5_17": 49,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Ratnagiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 509,
    "age_5_17": 32,
    "age_18_greater": 9
  },
  {
    "state": "Odisha",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1331,
    "age_5_17": 325,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 86,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 399,
    "age_5_17": 135,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 17,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 402,
    "age_5_17": 131,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 29,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 238,
    "age_5_17": 81,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Rayagada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 14,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Reasi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 242,
    "age_5_17": 113,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Reasi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 215,
    "age_5_17": 120,
    "age_18_greater": 3
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Reasi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 348,
    "age_5_17": 249,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Reasi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 331,
    "age_5_17": 88,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rewa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3014,
    "age_5_17": 622,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rewa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2152,
    "age_5_17": 309,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rewa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2416,
    "age_5_17": 341,
    "age_18_greater": 10
  },
  {
    "state": "Madhya Pradesh",
    "district": "Rewa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1764,
    "age_5_17": 191,
    "age_18_greater": 12
  },
  {
    "state": "Haryana",
    "district": "Rewari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 630,
    "age_5_17": 62,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Rewari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 501,
    "age_5_17": 28,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Rewari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 753,
    "age_5_17": 45,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Rewari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 445,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 30,
    "age_5_17": 11,
    "age_18_greater": 26
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 319,
    "age_5_17": 1500,
    "age_18_greater": 514
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 243,
    "age_5_17": 733,
    "age_18_greater": 633
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 69,
    "age_5_17": 398,
    "age_18_greater": 316
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 318,
    "age_5_17": 1160,
    "age_18_greater": 946
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 167,
    "age_5_17": 376,
    "age_18_greater": 261
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 65,
    "age_5_17": 135,
    "age_18_greater": 260
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 111,
    "age_5_17": 222,
    "age_18_greater": 329
  },
  {
    "state": "Meghalaya",
    "district": "Ri Bhoi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 16,
    "age_5_17": 63,
    "age_18_greater": 87
  },
  {
    "state": "Haryana",
    "district": "Rohtak",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 420,
    "age_5_17": 56,
    "age_18_greater": 52
  },
  {
    "state": "Haryana",
    "district": "Rohtak",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 829,
    "age_5_17": 47,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Rohtak",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 580,
    "age_5_17": 28,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Rohtak",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 810,
    "age_5_17": 39,
    "age_18_greater": 7
  },
  {
    "state": "Haryana",
    "district": "Rohtak",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 522,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Rohtas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 847,
    "age_5_17": 1800,
    "age_18_greater": 11
  },
  {
    "state": "Bihar",
    "district": "Rohtas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 474,
    "age_5_17": 962,
    "age_18_greater": 44
  },
  {
    "state": "Bihar",
    "district": "Rohtas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 740,
    "age_5_17": 1273,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Rohtas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 680,
    "age_5_17": 1085,
    "age_18_greater": 10
  },
  {
    "state": "Uttarakhand",
    "district": "Rudraprayag",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 279,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Rudraprayag",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 192,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Rudraprayag",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 225,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Rudraprayag",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 178,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Chandigarh",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 437,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 159,
    "age_5_17": 16,
    "age_18_greater": 3
  },
  {
    "state": "Chandigarh",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 363,
    "age_5_17": 24,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Rupnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 12,
    "age_18_greater": 7
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 193,
    "age_5_17": 75,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 300,
    "age_5_17": 89,
    "age_18_greater": 34
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar(Mohali)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 93,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar(Mohali)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 42,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar(Mohali)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 62,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "S.A.S Nagar(Mohali)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 44,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "SAS Nagar (Mohali)",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 204,
    "age_5_17": 65,
    "age_18_greater": 11
  },
  {
    "state": "Punjab",
    "district": "SAS Nagar (Mohali)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 818,
    "age_5_17": 177,
    "age_18_greater": 14
  },
  {
    "state": "Punjab",
    "district": "SAS Nagar (Mohali)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 409,
    "age_5_17": 78,
    "age_18_greater": 13
  },
  {
    "state": "Punjab",
    "district": "SAS Nagar (Mohali)",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 623,
    "age_5_17": 101,
    "age_18_greater": 15
  },
  {
    "state": "Punjab",
    "district": "SAS Nagar (Mohali)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 344,
    "age_5_17": 72,
    "age_18_greater": 9
  },
  {
    "state": "Gujarat",
    "district": "Sabar Kantha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 951,
    "age_5_17": 1169,
    "age_18_greater": 157
  },
  {
    "state": "Gujarat",
    "district": "Sabar Kantha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Sabar Kantha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 16,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Sabar Kantha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 43,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Sabar Kantha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 28,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 389,
    "age_5_17": 197,
    "age_18_greater": 110
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 90,
    "age_5_17": 41,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1205,
    "age_5_17": 560,
    "age_18_greater": 82
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 400,
    "age_5_17": 102,
    "age_18_greater": 36
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 793,
    "age_5_17": 159,
    "age_18_greater": 60
  },
  {
    "state": "Gujarat",
    "district": "Sabarkantha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 726,
    "age_5_17": 114,
    "age_18_greater": 40
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 183,
    "age_5_17": 26,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 131,
    "age_5_17": 53,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1201,
    "age_5_17": 320,
    "age_18_greater": 51
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3017,
    "age_5_17": 658,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1594,
    "age_5_17": 233,
    "age_18_greater": 86
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3049,
    "age_5_17": 310,
    "age_18_greater": 152
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2397,
    "age_5_17": 282,
    "age_18_greater": 57
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 91,
    "age_5_17": 152,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1499,
    "age_5_17": 533,
    "age_18_greater": 29
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 929,
    "age_5_17": 585,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2054,
    "age_5_17": 852,
    "age_18_greater": 14
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2694,
    "age_5_17": 1165,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1896,
    "age_5_17": 646,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2678,
    "age_5_17": 868,
    "age_18_greater": 8
  },
  {
    "state": "Uttar Pradesh",
    "district": "Saharanpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1867,
    "age_5_17": 558,
    "age_18_greater": 6
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 334,
    "age_5_17": 295,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 319,
    "age_5_17": 487,
    "age_18_greater": 20
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 569,
    "age_5_17": 627,
    "age_18_greater": 42
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1673,
    "age_5_17": 1812,
    "age_18_greater": 39
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1087,
    "age_5_17": 1193,
    "age_18_greater": 34
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1219,
    "age_5_17": 1180,
    "age_18_greater": 39
  },
  {
    "state": "Bihar",
    "district": "Saharsa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1080,
    "age_5_17": 983,
    "age_18_greater": 18
  },
  {
    "state": "Jharkhand",
    "district": "Sahebganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 977,
    "age_5_17": 893,
    "age_18_greater": 9
  },
  {
    "state": "Jharkhand",
    "district": "Sahebganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 591,
    "age_5_17": 402,
    "age_18_greater": 1
  },
  {
    "state": "Jharkhand",
    "district": "Sahebganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1386,
    "age_5_17": 1075,
    "age_18_greater": 2
  },
  {
    "state": "Jharkhand",
    "district": "Sahebganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 682,
    "age_5_17": 300,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Sahibganj",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 53,
    "age_5_17": 68,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Sahibganj",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 52,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Sahibganj",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 65,
    "age_5_17": 67,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Sahibganj",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 17,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 59,
    "age_5_17": 61,
    "age_18_greater": 63
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 87,
    "age_5_17": 48,
    "age_18_greater": 18
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 117,
    "age_5_17": 28,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 47,
    "age_5_17": 18,
    "age_18_greater": 5
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 31,
    "age_5_17": 13,
    "age_18_greater": 15
  },
  {
    "state": "Mizoram",
    "district": "Saiha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 33,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Saitual",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 0,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Saitual",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 5
  },
  {
    "state": "Mizoram",
    "district": "Saitual",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Saitual",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sakti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 135,
    "age_5_17": 40,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Sakti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 63,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sakti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 110,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sakti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 65,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Salem",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 335,
    "age_5_17": 95,
    "age_18_greater": 64
  },
  {
    "state": "Tamil Nadu",
    "district": "Salem",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2872,
    "age_5_17": 457,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Salem",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1609,
    "age_5_17": 311,
    "age_18_greater": 17
  },
  {
    "state": "Tamil Nadu",
    "district": "Salem",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2012,
    "age_5_17": 490,
    "age_18_greater": 95
  },
  {
    "state": "Tamil Nadu",
    "district": "Salem",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1589,
    "age_5_17": 255,
    "age_18_greater": 46
  },
  {
    "state": "Rajasthan",
    "district": "Salumbar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Samastipur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 513,
    "age_5_17": 488,
    "age_18_greater": 13
  },
  {
    "state": "Bihar",
    "district": "Samastipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3151,
    "age_5_17": 2323,
    "age_18_greater": 31
  },
  {
    "state": "Bihar",
    "district": "Samastipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2262,
    "age_5_17": 1433,
    "age_18_greater": 42
  },
  {
    "state": "Bihar",
    "district": "Samastipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2805,
    "age_5_17": 1917,
    "age_18_greater": 31
  },
  {
    "state": "Bihar",
    "district": "Samastipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2558,
    "age_5_17": 1626,
    "age_18_greater": 14
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Samba",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 150,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Samba",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 110,
    "age_5_17": 16,
    "age_18_greater": 2
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Samba",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 143,
    "age_5_17": 12,
    "age_18_greater": 7
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Samba",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 129,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 840,
    "age_5_17": 130,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 454,
    "age_5_17": 55,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 483,
    "age_5_17": 82,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 457,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sambalpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sambhal",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 339,
    "age_5_17": 200,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sambhal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1571,
    "age_5_17": 1476,
    "age_18_greater": 42
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sambhal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 781,
    "age_5_17": 539,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sambhal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1133,
    "age_5_17": 875,
    "age_18_greater": 25
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sambhal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 920,
    "age_5_17": 726,
    "age_18_greater": 27
  },
  {
    "state": "Bihar",
    "district": "Samstipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 12,
    "age_5_17": 12,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Samstipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 11,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Samstipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Samstipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Sangareddy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 729,
    "age_5_17": 154,
    "age_18_greater": 3
  },
  {
    "state": "Telangana",
    "district": "Sangareddy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 596,
    "age_5_17": 150,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Sangareddy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 595,
    "age_5_17": 118,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Sangareddy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 304,
    "age_5_17": 46,
    "age_18_greater": 5
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 160,
    "age_5_17": 45,
    "age_18_greater": 20
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 240,
    "age_5_17": 105,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 958,
    "age_5_17": 588,
    "age_18_greater": 48
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1434,
    "age_5_17": 658,
    "age_18_greater": 21
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 795,
    "age_5_17": 134,
    "age_18_greater": 24
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1157,
    "age_5_17": 189,
    "age_18_greater": 8
  },
  {
    "state": "Maharashtra",
    "district": "Sangli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 953,
    "age_5_17": 83,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Sangrur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 145,
    "age_5_17": 11,
    "age_18_greater": 10
  },
  {
    "state": "Punjab",
    "district": "Sangrur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 837,
    "age_5_17": 87,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Sangrur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 339,
    "age_5_17": 29,
    "age_18_greater": 3
  },
  {
    "state": "Punjab",
    "district": "Sangrur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 460,
    "age_5_17": 52,
    "age_18_greater": 26
  },
  {
    "state": "Punjab",
    "district": "Sangrur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 306,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Kabir Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 758,
    "age_5_17": 1215,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Kabir Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 657,
    "age_5_17": 733,
    "age_18_greater": 9
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Kabir Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 793,
    "age_5_17": 880,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Kabir Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 581,
    "age_5_17": 515,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 636,
    "age_5_17": 1034,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 411,
    "age_5_17": 520,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 491,
    "age_5_17": 600,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 331,
    "age_5_17": 393,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar Bhadohi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 14,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar Bhadohi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 8,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar Bhadohi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 10,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sant Ravidas Nagar Bhadohi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 143,
    "age_5_17": 174,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 222,
    "age_5_17": 864,
    "age_18_greater": 25
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 607,
    "age_5_17": 1872,
    "age_18_greater": 52
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1970,
    "age_5_17": 4355,
    "age_18_greater": 44
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1566,
    "age_5_17": 3234,
    "age_18_greater": 32
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1598,
    "age_5_17": 3207,
    "age_18_greater": 27
  },
  {
    "state": "Bihar",
    "district": "Saran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1486,
    "age_5_17": 2701,
    "age_18_greater": 29
  },
  {
    "state": "Chhattisgarh",
    "district": "Sarangarh-Bilaigarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 22,
    "age_5_17": 4,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Sarangarh-Bilaigarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 29,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sarangarh-Bilaigarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 41,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sarangarh-Bilaigarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 67,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 192,
    "age_5_17": 26,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 150,
    "age_5_17": 32,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 136,
    "age_5_17": 55,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 327,
    "age_5_17": 116,
    "age_18_greater": 16
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1074,
    "age_5_17": 221,
    "age_18_greater": 26
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 797,
    "age_5_17": 89,
    "age_18_greater": 18
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1180,
    "age_5_17": 105,
    "age_18_greater": 33
  },
  {
    "state": "Maharashtra",
    "district": "Satara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1292,
    "age_5_17": 73,
    "age_18_greater": 25
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 368,
    "age_5_17": 55,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 488,
    "age_5_17": 121,
    "age_18_greater": 20
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3932,
    "age_5_17": 765,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2028,
    "age_5_17": 397,
    "age_18_greater": 13
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2537,
    "age_5_17": 327,
    "age_18_greater": 22
  },
  {
    "state": "Madhya Pradesh",
    "district": "Satna",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1845,
    "age_5_17": 281,
    "age_18_greater": 58
  },
  {
    "state": "Rajasthan",
    "district": "Sawai Madhopur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 593,
    "age_5_17": 307,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Sawai Madhopur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1717,
    "age_5_17": 685,
    "age_18_greater": 9
  },
  {
    "state": "Rajasthan",
    "district": "Sawai Madhopur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 612,
    "age_5_17": 326,
    "age_18_greater": 26
  },
  {
    "state": "Rajasthan",
    "district": "Sawai Madhopur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1057,
    "age_5_17": 438,
    "age_18_greater": 41
  },
  {
    "state": "Rajasthan",
    "district": "Sawai Madhopur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 596,
    "age_5_17": 327,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sehore",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1151,
    "age_5_17": 496,
    "age_18_greater": 26
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sehore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 993,
    "age_5_17": 312,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sehore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 511,
    "age_5_17": 107,
    "age_18_greater": 8
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sehore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 943,
    "age_5_17": 172,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sehore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1557,
    "age_5_17": 221,
    "age_18_greater": 5
  },
  {
    "state": "Manipur",
    "district": "Senapati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 252,
    "age_5_17": 292,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Senapati",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 207,
    "age_5_17": 183,
    "age_18_greater": 4
  },
  {
    "state": "Manipur",
    "district": "Senapati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 207,
    "age_5_17": 151,
    "age_18_greater": 7
  },
  {
    "state": "Manipur",
    "district": "Senapati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 98,
    "age_5_17": 95,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Seoni",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2063,
    "age_5_17": 234,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Seoni",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 836,
    "age_5_17": 84,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Seoni",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1322,
    "age_5_17": 101,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Seoni",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1337,
    "age_5_17": 94,
    "age_18_greater": 1
  },
  {
    "state": "Tripura",
    "district": "Sepahijala",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 166,
    "age_5_17": 144,
    "age_18_greater": 15
  },
  {
    "state": "Tripura",
    "district": "Sepahijala",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 255,
    "age_5_17": 132,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Sepahijala",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 189,
    "age_5_17": 79,
    "age_18_greater": 2
  },
  {
    "state": "Tripura",
    "district": "Sepahijala",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 275,
    "age_5_17": 113,
    "age_18_greater": 10
  },
  {
    "state": "Tripura",
    "district": "Sepahijala",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 236,
    "age_5_17": 109,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-Kharsawan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 671,
    "age_5_17": 337,
    "age_18_greater": 3
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-Kharsawan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 444,
    "age_5_17": 189,
    "age_18_greater": 19
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-Kharsawan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 735,
    "age_5_17": 286,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-Kharsawan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 548,
    "age_5_17": 149,
    "age_18_greater": 4
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-kharsawan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 149,
    "age_5_17": 99,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-kharsawan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 103,
    "age_5_17": 53,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-kharsawan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 194,
    "age_5_17": 109,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Seraikela-kharsawan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 99,
    "age_5_17": 55,
    "age_18_greater": 0
  },
  {
    "state": "Mizoram",
    "district": "Serchhip",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 33,
    "age_5_17": 7,
    "age_18_greater": 2
  },
  {
    "state": "Mizoram",
    "district": "Serchhip",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 5,
    "age_18_greater": 3
  },
  {
    "state": "Mizoram",
    "district": "Serchhip",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 4,
    "age_18_greater": 1
  },
  {
    "state": "Mizoram",
    "district": "Serchhip",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 208,
    "age_5_17": 98,
    "age_18_greater": 13
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 66,
    "age_5_17": 47,
    "age_18_greater": 20
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 545,
    "age_5_17": 239,
    "age_18_greater": 15
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 121,
    "age_5_17": 55,
    "age_18_greater": 8
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 45,
    "age_5_17": 16,
    "age_18_greater": 2
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 84,
    "age_5_17": 36,
    "age_18_greater": 4
  },
  {
    "state": "Delhi",
    "district": "Shahdara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 52,
    "age_5_17": 24,
    "age_18_greater": 2
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shahdol",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1270,
    "age_5_17": 341,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shahdol",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 766,
    "age_5_17": 168,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shahdol",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 915,
    "age_5_17": 143,
    "age_18_greater": 42
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shahdol",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1459,
    "age_5_17": 176,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Shaheed Bhagat Singh Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 310,
    "age_5_17": 39,
    "age_18_greater": 1
  },
  {
    "state": "Punjab",
    "district": "Shaheed Bhagat Singh Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 124,
    "age_5_17": 15,
    "age_18_greater": 10
  },
  {
    "state": "Punjab",
    "district": "Shaheed Bhagat Singh Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 248,
    "age_5_17": 36,
    "age_18_greater": 30
  },
  {
    "state": "Punjab",
    "district": "Shaheed Bhagat Singh Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 119,
    "age_5_17": 11,
    "age_18_greater": 3
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1402,
    "age_5_17": 852,
    "age_18_greater": 63
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1274,
    "age_5_17": 987,
    "age_18_greater": 51
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 736,
    "age_5_17": 918,
    "age_18_greater": 55
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 4039,
    "age_5_17": 3765,
    "age_18_greater": 121
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1948,
    "age_5_17": 1902,
    "age_18_greater": 57
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 948,
    "age_5_17": 925,
    "age_18_greater": 28
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1520,
    "age_5_17": 1161,
    "age_18_greater": 55
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shahjahanpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 944,
    "age_5_17": 523,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shajapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1499,
    "age_5_17": 484,
    "age_18_greater": 8
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shajapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 918,
    "age_5_17": 154,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shajapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2048,
    "age_5_17": 232,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shajapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1472,
    "age_5_17": 200,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Shamator",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 145,
    "age_18_greater": 9
  },
  {
    "state": "Nagaland",
    "district": "Shamator",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Shamator",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 23,
    "age_18_greater": 14
  },
  {
    "state": "Nagaland",
    "district": "Shamator",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shamli",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 374,
    "age_5_17": 151,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shamli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1407,
    "age_5_17": 833,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shamli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1038,
    "age_5_17": 506,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shamli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1678,
    "age_5_17": 754,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shamli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1033,
    "age_5_17": 369,
    "age_18_greater": 15
  },
  {
    "state": "Bihar",
    "district": "Sheikhpura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 462,
    "age_5_17": 761,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Sheikhpura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 258,
    "age_5_17": 505,
    "age_18_greater": 5
  },
  {
    "state": "Bihar",
    "district": "Sheikhpura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 291,
    "age_5_17": 391,
    "age_18_greater": 9
  },
  {
    "state": "Bihar",
    "district": "Sheikhpura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 233,
    "age_5_17": 277,
    "age_18_greater": 3
  },
  {
    "state": "Bihar",
    "district": "Sheikpura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Sheikpura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Sheikpura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Sheikpura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Sheohar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 498,
    "age_5_17": 334,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Sheohar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 470,
    "age_5_17": 230,
    "age_18_greater": 1
  },
  {
    "state": "Bihar",
    "district": "Sheohar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 498,
    "age_5_17": 284,
    "age_18_greater": 2
  },
  {
    "state": "Bihar",
    "district": "Sheohar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 601,
    "age_5_17": 336,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 209,
    "age_5_17": 163,
    "age_18_greater": 24
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 368,
    "age_5_17": 430,
    "age_18_greater": 11
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 757,
    "age_5_17": 969,
    "age_18_greater": 27
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 676,
    "age_5_17": 718,
    "age_18_greater": 50
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 246,
    "age_5_17": 172,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 580,
    "age_5_17": 398,
    "age_18_greater": 23
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sheopur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 929,
    "age_5_17": 476,
    "age_18_greater": 3
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Shi-yomi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Shi-yomi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Shi-yomi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 15,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Shi-yomi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Shimla",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 374,
    "age_5_17": 69,
    "age_18_greater": 1
  },
  {
    "state": "Himachal Pradesh",
    "district": "Shimla",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 375,
    "age_5_17": 35,
    "age_18_greater": 10
  },
  {
    "state": "Himachal Pradesh",
    "district": "Shimla",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 495,
    "age_5_17": 36,
    "age_18_greater": 7
  },
  {
    "state": "Himachal Pradesh",
    "district": "Shimla",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 244,
    "age_5_17": 21,
    "age_18_greater": 3
  },
  {
    "state": "Karnataka",
    "district": "Shimoga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 648,
    "age_5_17": 58,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Shimoga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 368,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Shimoga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 560,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Shimoga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 535,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Shivamogga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 636,
    "age_5_17": 75,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Shivamogga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 380,
    "age_5_17": 30,
    "age_18_greater": 16
  },
  {
    "state": "Karnataka",
    "district": "Shivamogga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 462,
    "age_5_17": 43,
    "age_18_greater": 23
  },
  {
    "state": "Karnataka",
    "district": "Shivamogga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 526,
    "age_5_17": 34,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 499,
    "age_5_17": 259,
    "age_18_greater": 111
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 326,
    "age_5_17": 430,
    "age_18_greater": 27
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 617,
    "age_5_17": 705,
    "age_18_greater": 42
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2330,
    "age_5_17": 1770,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 574,
    "age_5_17": 353,
    "age_18_greater": 325
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1257,
    "age_5_17": 638,
    "age_18_greater": 206
  },
  {
    "state": "Madhya Pradesh",
    "district": "Shivpuri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1524,
    "age_5_17": 712,
    "age_18_greater": 19
  },
  {
    "state": "Jammu And Kashmir",
    "district": "Shopian",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 308,
    "age_5_17": 84,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shravasti",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 326,
    "age_5_17": 564,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shravasti",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 541,
    "age_5_17": 1006,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 207,
    "age_5_17": 307,
    "age_18_greater": 11
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 279,
    "age_5_17": 445,
    "age_18_greater": 28
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 524,
    "age_5_17": 1056,
    "age_18_greater": 46
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 235,
    "age_5_17": 429,
    "age_18_greater": 26
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 312,
    "age_5_17": 529,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Shrawasti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 259,
    "age_5_17": 385,
    "age_18_greater": 9
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Shupiyan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 141,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Shupiyan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 108,
    "age_5_17": 27,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Shupiyan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 108,
    "age_5_17": 45,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Shupiyan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 180,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Siang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 31,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Siang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Siang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 6,
    "age_18_greater": 4
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Siang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 220,
    "age_5_17": 83,
    "age_18_greater": 276
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 95,
    "age_5_17": 43,
    "age_18_greater": 87
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 404,
    "age_5_17": 129,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 314,
    "age_5_17": 95,
    "age_18_greater": 190
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 419,
    "age_5_17": 126,
    "age_18_greater": 108
  },
  {
    "state": "Assam",
    "district": "Sibsagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 109,
    "age_5_17": 38,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharth Nagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 103,
    "age_5_17": 278,
    "age_18_greater": 12
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharth Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1500,
    "age_5_17": 2308,
    "age_18_greater": 140
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 804,
    "age_5_17": 1006,
    "age_18_greater": 68
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 603,
    "age_5_17": 1073,
    "age_18_greater": 47
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1326,
    "age_5_17": 2270,
    "age_18_greater": 130
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 541,
    "age_5_17": 1348,
    "age_18_greater": 52
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 900,
    "age_5_17": 1893,
    "age_18_greater": 68
  },
  {
    "state": "Uttar Pradesh",
    "district": "Siddharthnagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 701,
    "age_5_17": 1149,
    "age_18_greater": 34
  },
  {
    "state": "Telangana",
    "district": "Siddipet",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 596,
    "age_5_17": 49,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Siddipet",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 467,
    "age_5_17": 49,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Siddipet",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 430,
    "age_5_17": 57,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Siddipet",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 208,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sidhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1652,
    "age_5_17": 298,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sidhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1391,
    "age_5_17": 126,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sidhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1393,
    "age_5_17": 119,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Sidhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1170,
    "age_5_17": 128,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 41,
    "age_5_17": 36,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 251,
    "age_5_17": 62,
    "age_18_greater": 22
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 461,
    "age_5_17": 178,
    "age_18_greater": 11
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3566,
    "age_5_17": 1238,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1092,
    "age_5_17": 444,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1717,
    "age_5_17": 555,
    "age_18_greater": 113
  },
  {
    "state": "Rajasthan",
    "district": "Sikar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1035,
    "age_5_17": 548,
    "age_18_greater": 2
  },
  {
    "state": "Jharkhand",
    "district": "Simdega",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 622,
    "age_5_17": 288,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Simdega",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 286,
    "age_5_17": 97,
    "age_18_greater": 0
  },
  {
    "state": "Jharkhand",
    "district": "Simdega",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 353,
    "age_5_17": 148,
    "age_18_greater": 13
  },
  {
    "state": "Jharkhand",
    "district": "Simdega",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 211,
    "age_5_17": 61,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Sindhudurg",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 344,
    "age_5_17": 21,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Sindhudurg",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 211,
    "age_5_17": 7,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Sindhudurg",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 373,
    "age_5_17": 19,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Sindhudurg",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 193,
    "age_5_17": 12,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Singrauli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1673,
    "age_5_17": 318,
    "age_18_greater": 7
  },
  {
    "state": "Madhya Pradesh",
    "district": "Singrauli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1315,
    "age_5_17": 207,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Singrauli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1289,
    "age_5_17": 188,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Singrauli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1392,
    "age_5_17": 146,
    "age_18_greater": 11
  },
  {
    "state": "Himachal Pradesh",
    "district": "Sirmaur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 480,
    "age_5_17": 30,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Sirmaur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 289,
    "age_5_17": 13,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Sirmaur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 498,
    "age_5_17": 11,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Sirmaur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 243,
    "age_5_17": 13,
    "age_18_greater": 1
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 349,
    "age_5_17": 210,
    "age_18_greater": 67
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 246,
    "age_5_17": 301,
    "age_18_greater": 10
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 216,
    "age_5_17": 289,
    "age_18_greater": 28
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1174,
    "age_5_17": 1471,
    "age_18_greater": 72
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1471,
    "age_5_17": 1084,
    "age_18_greater": 7
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 508,
    "age_5_17": 420,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 896,
    "age_5_17": 585,
    "age_18_greater": 160
  },
  {
    "state": "Rajasthan",
    "district": "Sirohi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 640,
    "age_5_17": 493,
    "age_18_greater": 18
  },
  {
    "state": "Haryana",
    "district": "Sirsa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 811,
    "age_5_17": 66,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Sirsa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 684,
    "age_5_17": 45,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Sirsa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 974,
    "age_5_17": 53,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Sirsa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 666,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 336,
    "age_5_17": 696,
    "age_18_greater": 303
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 2452,
    "age_5_17": 1625,
    "age_18_greater": 487
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 2961,
    "age_5_17": 2387,
    "age_18_greater": 348
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 2839,
    "age_5_17": 3126,
    "age_18_greater": 511
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3852,
    "age_5_17": 4519,
    "age_18_greater": 746
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2426,
    "age_5_17": 2048,
    "age_18_greater": 127
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1814,
    "age_5_17": 1317,
    "age_18_greater": 62
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2063,
    "age_5_17": 1701,
    "age_18_greater": 86
  },
  {
    "state": "Bihar",
    "district": "Sitamarhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1936,
    "age_5_17": 1437,
    "age_18_greater": 27
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1928,
    "age_5_17": 1053,
    "age_18_greater": 87
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 802,
    "age_5_17": 540,
    "age_18_greater": 31
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 998,
    "age_5_17": 1134,
    "age_18_greater": 87
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 4236,
    "age_5_17": 3712,
    "age_18_greater": 168
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3166,
    "age_5_17": 3284,
    "age_18_greater": 102
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1306,
    "age_5_17": 1262,
    "age_18_greater": 107
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2013,
    "age_5_17": 1695,
    "age_18_greater": 131
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sitapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1788,
    "age_5_17": 1189,
    "age_18_greater": 35
  },
  {
    "state": "Tamil Nadu",
    "district": "Sivaganga",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 70,
    "age_5_17": 13,
    "age_18_greater": 10
  },
  {
    "state": "Tamil Nadu",
    "district": "Sivaganga",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1314,
    "age_5_17": 168,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Sivaganga",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 687,
    "age_5_17": 118,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Sivaganga",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1027,
    "age_5_17": 312,
    "age_18_greater": 9
  },
  {
    "state": "Tamil Nadu",
    "district": "Sivaganga",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 642,
    "age_5_17": 74,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Sivasagar",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 37,
    "age_5_17": 33,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Sivasagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 167,
    "age_5_17": 80,
    "age_18_greater": 95
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 269,
    "age_5_17": 384,
    "age_18_greater": 12
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 185,
    "age_5_17": 298,
    "age_18_greater": 21
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 192,
    "age_5_17": 414,
    "age_18_greater": 12
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1652,
    "age_5_17": 2631,
    "age_18_greater": 14
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1327,
    "age_5_17": 1856,
    "age_18_greater": 42
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1492,
    "age_5_17": 2104,
    "age_18_greater": 30
  },
  {
    "state": "Bihar",
    "district": "Siwan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1032,
    "age_5_17": 1338,
    "age_18_greater": 6
  },
  {
    "state": "Himachal Pradesh",
    "district": "Solan",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 303,
    "age_5_17": 29,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Solan",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 246,
    "age_5_17": 16,
    "age_18_greater": 2
  },
  {
    "state": "Himachal Pradesh",
    "district": "Solan",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 372,
    "age_5_17": 12,
    "age_18_greater": 1
  },
  {
    "state": "Himachal Pradesh",
    "district": "Solan",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 184,
    "age_5_17": 8,
    "age_18_greater": 3
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 548,
    "age_5_17": 67,
    "age_18_greater": 45
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 473,
    "age_5_17": 97,
    "age_18_greater": 51
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 355,
    "age_5_17": 172,
    "age_18_greater": 34
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2315,
    "age_5_17": 1054,
    "age_18_greater": 20
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1528,
    "age_5_17": 330,
    "age_18_greater": 20
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2258,
    "age_5_17": 454,
    "age_18_greater": 50
  },
  {
    "state": "Maharashtra",
    "district": "Solapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2060,
    "age_5_17": 321,
    "age_18_greater": 40
  },
  {
    "state": "Odisha",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 624,
    "age_5_17": 112,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 9,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 238,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 230,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 174,
    "age_5_17": 26,
    "age_18_greater": 1
  },
  {
    "state": "Orissa",
    "district": "Sonapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sonbhadra",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1322,
    "age_5_17": 963,
    "age_18_greater": 5
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sonbhadra",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 441,
    "age_5_17": 289,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sonbhadra",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 724,
    "age_5_17": 506,
    "age_18_greater": 4
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sonbhadra",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 511,
    "age_5_17": 265,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Sonipat",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 360,
    "age_5_17": 46,
    "age_18_greater": 23
  },
  {
    "state": "Haryana",
    "district": "Sonipat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1190,
    "age_5_17": 74,
    "age_18_greater": 6
  },
  {
    "state": "Haryana",
    "district": "Sonipat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 795,
    "age_5_17": 43,
    "age_18_greater": 4
  },
  {
    "state": "Haryana",
    "district": "Sonipat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1241,
    "age_5_17": 74,
    "age_18_greater": 3
  },
  {
    "state": "Haryana",
    "district": "Sonipat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 728,
    "age_5_17": 31,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 10,
    "age_5_17": 28,
    "age_18_greater": 43
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 138,
    "age_5_17": 169,
    "age_18_greater": 65
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 55,
    "age_5_17": 160,
    "age_18_greater": 38
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 97,
    "age_5_17": 110,
    "age_18_greater": 77
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 641,
    "age_5_17": 279,
    "age_18_greater": 110
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1544,
    "age_5_17": 712,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1080,
    "age_5_17": 467,
    "age_18_greater": 5
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1192,
    "age_5_17": 505,
    "age_18_greater": 161
  },
  {
    "state": "Assam",
    "district": "Sonitpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 744,
    "age_5_17": 293,
    "age_18_greater": 472
  },
  {
    "state": "Sikkim",
    "district": "South",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 58,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "South",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 11,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "South",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 29,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "South",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South 24 Pargana",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South 24 Pargana",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South 24 Parganas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6981,
    "age_5_17": 2419,
    "age_18_greater": 59
  },
  {
    "state": "West Bengal",
    "district": "South 24 Parganas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7486,
    "age_5_17": 2338,
    "age_18_greater": 14
  },
  {
    "state": "West Bengal",
    "district": "South 24 Parganas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6570,
    "age_5_17": 2258,
    "age_18_greater": 10
  },
  {
    "state": "West Bengal",
    "district": "South 24 Parganas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4002,
    "age_5_17": 1182,
    "age_18_greater": 221
  },
  {
    "state": "West Bengal",
    "district": "South 24 parganas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 15,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 54,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 7,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 26,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 45,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Andaman & Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andaman and Nicobar Islands",
    "district": "South Andaman",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 53,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 404,
    "age_5_17": 137,
    "age_18_greater": 22
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 217,
    "age_5_17": 88,
    "age_18_greater": 28
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 619,
    "age_5_17": 249,
    "age_18_greater": 43
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 794,
    "age_5_17": 321,
    "age_18_greater": 139
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2445,
    "age_5_17": 761,
    "age_18_greater": 73
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1599,
    "age_5_17": 382,
    "age_18_greater": 32
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2345,
    "age_5_17": 557,
    "age_18_greater": 90
  },
  {
    "state": "Delhi",
    "district": "South Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1715,
    "age_5_17": 285,
    "age_18_greater": 50
  },
  {
    "state": "West Bengal",
    "district": "South Dinajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 166,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South Dinajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 80,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South Dinajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 77,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South Dinajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 52,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "South East Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 12,
    "age_5_17": 4,
    "age_18_greater": 1
  },
  {
    "state": "Delhi",
    "district": "South East Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 3,
    "age_18_greater": 1
  },
  {
    "state": "Delhi",
    "district": "South East Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 18,
    "age_5_17": 1,
    "age_18_greater": 3
  },
  {
    "state": "Delhi",
    "district": "South East Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 13,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 231,
    "age_5_17": 820,
    "age_18_greater": 367
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 105,
    "age_5_17": 388,
    "age_18_greater": 192
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 42,
    "age_5_17": 197,
    "age_18_greater": 312
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 44,
    "age_5_17": 206,
    "age_18_greater": 236
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 81,
    "age_5_17": 486,
    "age_18_greater": 166
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 29,
    "age_5_17": 206,
    "age_18_greater": 14
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 35,
    "age_5_17": 107,
    "age_18_greater": 159
  },
  {
    "state": "Meghalaya",
    "district": "South Garo Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Goa",
    "district": "South Goa",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 282,
    "age_5_17": 41,
    "age_18_greater": 34
  },
  {
    "state": "Goa",
    "district": "South Goa",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 159,
    "age_5_17": 24,
    "age_18_greater": 4
  },
  {
    "state": "Goa",
    "district": "South Goa",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 256,
    "age_5_17": 31,
    "age_18_greater": 20
  },
  {
    "state": "Goa",
    "district": "South Goa",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 108,
    "age_5_17": 12,
    "age_18_greater": 6
  },
  {
    "state": "Assam",
    "district": "South Salmara Mankachar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 176,
    "age_5_17": 102,
    "age_18_greater": 30
  },
  {
    "state": "Assam",
    "district": "South Salmara Mankachar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 364,
    "age_5_17": 114,
    "age_18_greater": 2
  },
  {
    "state": "Assam",
    "district": "South Salmara Mankachar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 207,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "South Salmara Mankachar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 216,
    "age_5_17": 76,
    "age_18_greater": 14
  },
  {
    "state": "Assam",
    "district": "South Salmara Mankachar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 99,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 15,
    "age_5_17": 23,
    "age_18_greater": 11
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 100,
    "age_5_17": 147,
    "age_18_greater": 13
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 32,
    "age_5_17": 38,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 9,
    "age_5_17": 18,
    "age_18_greater": 1
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 26,
    "age_5_17": 18,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "South Sikkim",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "South Tripura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 416,
    "age_5_17": 256,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "South Tripura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 227,
    "age_5_17": 152,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "South Tripura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 353,
    "age_5_17": 268,
    "age_18_greater": 4
  },
  {
    "state": "Tripura",
    "district": "South Tripura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 352,
    "age_5_17": 128,
    "age_18_greater": 2
  },
  {
    "state": "West Bengal",
    "district": "South Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 797,
    "age_5_17": 316,
    "age_18_greater": 3
  },
  {
    "state": "West Bengal",
    "district": "South Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 913,
    "age_5_17": 325,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "South Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 892,
    "age_5_17": 351,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "South Twenty Four Parganas",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 376,
    "age_5_17": 133,
    "age_18_greater": 0
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 558,
    "age_5_17": 209,
    "age_18_greater": 58
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 448,
    "age_5_17": 188,
    "age_18_greater": 48
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 202,
    "age_5_17": 90,
    "age_18_greater": 29
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 468,
    "age_5_17": 207,
    "age_18_greater": 29
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1772,
    "age_5_17": 505,
    "age_18_greater": 64
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 995,
    "age_5_17": 225,
    "age_18_greater": 35
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1363,
    "age_5_17": 329,
    "age_18_greater": 62
  },
  {
    "state": "Delhi",
    "district": "South West Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1145,
    "age_5_17": 192,
    "age_18_greater": 34
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 991,
    "age_5_17": 610,
    "age_18_greater": 174
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 392,
    "age_5_17": 240,
    "age_18_greater": 167
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 264,
    "age_5_17": 209,
    "age_18_greater": 145
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 370,
    "age_5_17": 272,
    "age_18_greater": 173
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 223,
    "age_5_17": 176,
    "age_18_greater": 104
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 88,
    "age_5_17": 76,
    "age_18_greater": 42
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 76,
    "age_5_17": 61,
    "age_18_greater": 59
  },
  {
    "state": "Meghalaya",
    "district": "South West Garo Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 13,
    "age_5_17": 12,
    "age_18_greater": 19
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 241,
    "age_5_17": 535,
    "age_18_greater": 212
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 135,
    "age_5_17": 192,
    "age_18_greater": 200
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 54,
    "age_5_17": 184,
    "age_18_greater": 146
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 137,
    "age_5_17": 283,
    "age_18_greater": 326
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 55,
    "age_5_17": 86,
    "age_18_greater": 109
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 45,
    "age_5_17": 78,
    "age_18_greater": 49
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 112,
    "age_5_17": 158,
    "age_18_greater": 60
  },
  {
    "state": "Meghalaya",
    "district": "South West Khasi Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 27,
    "age_18_greater": 12
  },
  {
    "state": "Andhra Pradesh",
    "district": "Spsr Nellore",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 43,
    "age_5_17": 44,
    "age_18_greater": 29
  },
  {
    "state": "Andhra Pradesh",
    "district": "Spsr Nellore",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 742,
    "age_5_17": 405,
    "age_18_greater": 201
  },
  {
    "state": "Andhra Pradesh",
    "district": "Spsr Nellore",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 382,
    "age_5_17": 264,
    "age_18_greater": 73
  },
  {
    "state": "Punjab",
    "district": "Sri Muktsar Sahib",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 515,
    "age_5_17": 62,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Sri Muktsar Sahib",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 162,
    "age_5_17": 25,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Sri Muktsar Sahib",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 310,
    "age_5_17": 43,
    "age_18_greater": 6
  },
  {
    "state": "Punjab",
    "district": "Sri Muktsar Sahib",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 170,
    "age_5_17": 20,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 251,
    "age_5_17": 224,
    "age_18_greater": 83
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 128,
    "age_5_17": 134,
    "age_18_greater": 70
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 195,
    "age_5_17": 187,
    "age_18_greater": 103
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Potti Sriramulu Nellore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 115,
    "age_5_17": 77,
    "age_18_greater": 47
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Sathya Sai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 240,
    "age_5_17": 14,
    "age_18_greater": 9
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Sathya Sai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 200,
    "age_5_17": 9,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Sathya Sai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 239,
    "age_5_17": 13,
    "age_18_greater": 3
  },
  {
    "state": "Andhra Pradesh",
    "district": "Sri Sathya Sai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 200,
    "age_5_17": 4,
    "age_18_greater": 6
  },
  {
    "state": "Assam",
    "district": "Sribhumi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 32,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Sribhumi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 5,
    "age_18_greater": 1
  },
  {
    "state": "Assam",
    "district": "Sribhumi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 43,
    "age_5_17": 14,
    "age_18_greater": 10
  },
  {
    "state": "Assam",
    "district": "Sribhumi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 20,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Srikakulam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1339,
    "age_5_17": 53,
    "age_18_greater": 5
  },
  {
    "state": "Andhra Pradesh",
    "district": "Srikakulam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 861,
    "age_5_17": 34,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Srikakulam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1185,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Srikakulam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 772,
    "age_5_17": 14,
    "age_18_greater": 2
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1011,
    "age_5_17": 82,
    "age_18_greater": 1
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 653,
    "age_5_17": 66,
    "age_18_greater": 33
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 685,
    "age_5_17": 80,
    "age_18_greater": 87
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Srinagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 502,
    "age_5_17": 42,
    "age_18_greater": 14
  },
  {
    "state": "Odisha",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 166,
    "age_5_17": 30,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 67,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 63,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Subarnapur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 43,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 267,
    "age_5_17": 69,
    "age_18_greater": 45
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 178,
    "age_5_17": 55,
    "age_18_greater": 19
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 151,
    "age_5_17": 178,
    "age_18_greater": 34
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 146,
    "age_5_17": 150,
    "age_18_greater": 11
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 120,
    "age_5_17": 79,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 140,
    "age_5_17": 109,
    "age_18_greater": 3
  },
  {
    "state": "Chhattisgarh",
    "district": "Sukma",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 254,
    "age_5_17": 164,
    "age_18_greater": 7
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 262,
    "age_5_17": 195,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 209,
    "age_5_17": 205,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 130,
    "age_5_17": 223,
    "age_18_greater": 10
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 471,
    "age_5_17": 652,
    "age_18_greater": 41
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1472,
    "age_5_17": 2058,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1018,
    "age_5_17": 1037,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1199,
    "age_5_17": 947,
    "age_18_greater": 9
  },
  {
    "state": "Uttar Pradesh",
    "district": "Sultanpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 704,
    "age_5_17": 520,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 200,
    "age_5_17": 47,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 42,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 86,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 29,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 112,
    "age_5_17": 23,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 29,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 88,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Orissa",
    "district": "Sundargarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 21,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sundergarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1504,
    "age_5_17": 302,
    "age_18_greater": 8
  },
  {
    "state": "Orissa",
    "district": "Sundergarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "Sundergarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 608,
    "age_5_17": 123,
    "age_18_greater": 6
  },
  {
    "state": "Odisha",
    "district": "Sundergarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 633,
    "age_5_17": 127,
    "age_18_greater": 1
  },
  {
    "state": "Odisha",
    "district": "Sundergarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 596,
    "age_5_17": 88,
    "age_18_greater": 4
  },
  {
    "state": "Bihar",
    "district": "Supaul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1425,
    "age_5_17": 1155,
    "age_18_greater": 54
  },
  {
    "state": "Bihar",
    "district": "Supaul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1698,
    "age_5_17": 1275,
    "age_18_greater": 46
  },
  {
    "state": "Bihar",
    "district": "Supaul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1387,
    "age_5_17": 1216,
    "age_18_greater": 34
  },
  {
    "state": "Bihar",
    "district": "Supaul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1181,
    "age_5_17": 917,
    "age_18_greater": 23
  },
  {
    "state": "Chhattisgarh",
    "district": "Surajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 823,
    "age_5_17": 177,
    "age_18_greater": 2
  },
  {
    "state": "Chhattisgarh",
    "district": "Surajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 450,
    "age_5_17": 136,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Surajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 493,
    "age_5_17": 236,
    "age_18_greater": 1
  },
  {
    "state": "Chhattisgarh",
    "district": "Surajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 484,
    "age_5_17": 171,
    "age_18_greater": 4
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 2932,
    "age_5_17": 976,
    "age_18_greater": 280
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1396,
    "age_5_17": 542,
    "age_18_greater": 48
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2694,
    "age_5_17": 1581,
    "age_18_greater": 81
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3848,
    "age_5_17": 1392,
    "age_18_greater": 39
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1371,
    "age_5_17": 441,
    "age_18_greater": 68
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4025,
    "age_5_17": 1000,
    "age_18_greater": 80
  },
  {
    "state": "Gujarat",
    "district": "Surat",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2146,
    "age_5_17": 467,
    "age_18_greater": 62
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 436,
    "age_5_17": 159,
    "age_18_greater": 91
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 250,
    "age_5_17": 172,
    "age_18_greater": 21
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1681,
    "age_5_17": 725,
    "age_18_greater": 55
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 564,
    "age_5_17": 172,
    "age_18_greater": 63
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1079,
    "age_5_17": 289,
    "age_18_greater": 62
  },
  {
    "state": "Gujarat",
    "district": "Surendra Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 843,
    "age_5_17": 148,
    "age_18_greater": 45
  },
  {
    "state": "Gujarat",
    "district": "Surendranagar",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 658,
    "age_5_17": 574,
    "age_18_greater": 78
  },
  {
    "state": "Gujarat",
    "district": "Surendranagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 42,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Surendranagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 14,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Surendranagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 31,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Surendranagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 26,
    "age_5_17": 3,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Surguja",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1128,
    "age_5_17": 225,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Surguja",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 517,
    "age_5_17": 96,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Surguja",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 658,
    "age_5_17": 223,
    "age_18_greater": 11
  },
  {
    "state": "Chhattisgarh",
    "district": "Surguja",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 563,
    "age_5_17": 135,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Suryapet",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 641,
    "age_5_17": 137,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Suryapet",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 480,
    "age_5_17": 79,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Suryapet",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 424,
    "age_5_17": 60,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Suryapet",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 198,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Tamenglong",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 81,
    "age_5_17": 200,
    "age_18_greater": 2
  },
  {
    "state": "Manipur",
    "district": "Tamenglong",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 78,
    "age_5_17": 175,
    "age_18_greater": 16
  },
  {
    "state": "Manipur",
    "district": "Tamenglong",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 94,
    "age_5_17": 163,
    "age_18_greater": 11
  },
  {
    "state": "Manipur",
    "district": "Tamenglong",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 44,
    "age_5_17": 96,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Tamulpur District",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 11,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Tamulpur District",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 8,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Tamulpur District",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "Tamulpur District",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 6,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Tapi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 68,
    "age_5_17": 12,
    "age_18_greater": 13
  },
  {
    "state": "Gujarat",
    "district": "Tapi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 918,
    "age_5_17": 116,
    "age_18_greater": 7
  },
  {
    "state": "Gujarat",
    "district": "Tapi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 217,
    "age_5_17": 24,
    "age_18_greater": 8
  },
  {
    "state": "Gujarat",
    "district": "Tapi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 421,
    "age_5_17": 38,
    "age_18_greater": 97
  },
  {
    "state": "Gujarat",
    "district": "Tapi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 232,
    "age_5_17": 15,
    "age_18_greater": 26
  },
  {
    "state": "Punjab",
    "district": "Tarn Taran",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 341,
    "age_5_17": 34,
    "age_18_greater": 11
  },
  {
    "state": "Punjab",
    "district": "Tarn Taran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 878,
    "age_5_17": 95,
    "age_18_greater": 0
  },
  {
    "state": "Punjab",
    "district": "Tarn Taran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 487,
    "age_5_17": 55,
    "age_18_greater": 4
  },
  {
    "state": "Punjab",
    "district": "Tarn Taran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 656,
    "age_5_17": 62,
    "age_18_greater": 4
  },
  {
    "state": "Punjab",
    "district": "Tarn Taran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 284,
    "age_5_17": 27,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tawang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 56,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tawang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 20,
    "age_5_17": 10,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tawang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 13,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tawang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 12,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Tehri Garhwal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 745,
    "age_5_17": 122,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Tehri Garhwal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 460,
    "age_5_17": 60,
    "age_18_greater": 5
  },
  {
    "state": "Uttarakhand",
    "district": "Tehri Garhwal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 700,
    "age_5_17": 81,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Tehri Garhwal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 539,
    "age_5_17": 61,
    "age_18_greater": 6
  },
  {
    "state": "Tamil Nadu",
    "district": "Tenkasi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 380,
    "age_5_17": 43,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tenkasi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 231,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tenkasi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 342,
    "age_5_17": 39,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tenkasi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 197,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 19,
    "age_5_17": 13,
    "age_18_greater": 15
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 2371,
    "age_5_17": 913,
    "age_18_greater": 150
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1437,
    "age_5_17": 799,
    "age_18_greater": 96
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 2432,
    "age_5_17": 1767,
    "age_18_greater": 222
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 4036,
    "age_5_17": 3165,
    "age_18_greater": 142
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5713,
    "age_5_17": 3003,
    "age_18_greater": 64
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3651,
    "age_5_17": 1238,
    "age_18_greater": 53
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 5723,
    "age_5_17": 1865,
    "age_18_greater": 96
  },
  {
    "state": "Maharashtra",
    "district": "Thane",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 3710,
    "age_5_17": 866,
    "age_18_greater": 129
  },
  {
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 35,
    "age_5_17": 10,
    "age_18_greater": 11
  },
  {
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2152,
    "age_5_17": 517,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1025,
    "age_5_17": 275,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1517,
    "age_5_17": 407,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Thanjavur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1152,
    "age_5_17": 262,
    "age_18_greater": 4
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 85,
    "age_5_17": 13,
    "age_18_greater": 22
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 174,
    "age_5_17": 49,
    "age_18_greater": 38
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 361,
    "age_5_17": 73,
    "age_18_greater": 3
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 135,
    "age_5_17": 21,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 207,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "The Dangs",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 106,
    "age_5_17": 9,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "The Nilgiris",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 469,
    "age_5_17": 114,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "The Nilgiris",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 257,
    "age_5_17": 102,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "The Nilgiris",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 345,
    "age_5_17": 139,
    "age_18_greater": 4
  },
  {
    "state": "Tamil Nadu",
    "district": "The Nilgiris",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 208,
    "age_5_17": 75,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Theni",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1060,
    "age_5_17": 197,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Theni",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 608,
    "age_5_17": 109,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Theni",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 771,
    "age_5_17": 189,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Theni",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 469,
    "age_5_17": 68,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvallur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 261,
    "age_5_17": 75,
    "age_18_greater": 10
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvallur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 58,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvallur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 46,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvallur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 54,
    "age_5_17": 26,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvallur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 42,
    "age_5_17": 7,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 32,
    "age_5_17": 15,
    "age_18_greater": 11
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 54,
    "age_5_17": 67,
    "age_18_greater": 59
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1239,
    "age_5_17": 404,
    "age_18_greater": 14
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1226,
    "age_5_17": 330,
    "age_18_greater": 49
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1433,
    "age_5_17": 349,
    "age_18_greater": 259
  },
  {
    "state": "Kerala",
    "district": "Thiruvananthapuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 852,
    "age_5_17": 229,
    "age_18_greater": 41
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvarur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1170,
    "age_5_17": 296,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvarur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 551,
    "age_5_17": 120,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvarur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 948,
    "age_5_17": 284,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Thiruvarur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 677,
    "age_5_17": 116,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thoothukkudi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1458,
    "age_5_17": 229,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thoothukkudi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 922,
    "age_5_17": 230,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Thoothukkudi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1201,
    "age_5_17": 277,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Thoothukkudi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 858,
    "age_5_17": 141,
    "age_18_greater": 0
  },
  {
    "state": "Manipur",
    "district": "Thoubal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 125,
    "age_5_17": 169,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Thoubal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 90,
    "age_5_17": 129,
    "age_18_greater": 3
  },
  {
    "state": "Manipur",
    "district": "Thoubal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 117,
    "age_5_17": 205,
    "age_18_greater": 2
  },
  {
    "state": "Manipur",
    "district": "Thoubal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 91,
    "age_5_17": 135,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Thrissur",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 15,
    "age_5_17": 22,
    "age_18_greater": 10
  },
  {
    "state": "Kerala",
    "district": "Thrissur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1184,
    "age_5_17": 538,
    "age_18_greater": 19
  },
  {
    "state": "Kerala",
    "district": "Thrissur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1320,
    "age_5_17": 444,
    "age_18_greater": 62
  },
  {
    "state": "Kerala",
    "district": "Thrissur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1644,
    "age_5_17": 383,
    "age_18_greater": 380
  },
  {
    "state": "Kerala",
    "district": "Thrissur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 751,
    "age_5_17": 285,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Tikamgarh",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1706,
    "age_5_17": 683,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Tikamgarh",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 854,
    "age_5_17": 229,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "Tikamgarh",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1607,
    "age_5_17": 364,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Tikamgarh",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1507,
    "age_5_17": 263,
    "age_18_greater": 8
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 84,
    "age_5_17": 170,
    "age_18_greater": 101
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 339,
    "age_5_17": 391,
    "age_18_greater": 261
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 213,
    "age_5_17": 216,
    "age_18_greater": 171
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1074,
    "age_5_17": 827,
    "age_18_greater": 606
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 690,
    "age_5_17": 445,
    "age_18_greater": 9
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 385,
    "age_5_17": 238,
    "age_18_greater": 9
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 603,
    "age_5_17": 382,
    "age_18_greater": 57
  },
  {
    "state": "Assam",
    "district": "Tinsukia",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 496,
    "age_5_17": 198,
    "age_18_greater": 419
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tirap",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tirap",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 19,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tirap",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 20,
    "age_5_17": 14,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Tirap",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3430,
    "age_5_17": 491,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1467,
    "age_5_17": 364,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2029,
    "age_5_17": 514,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruchirappalli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1470,
    "age_5_17": 162,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2835,
    "age_5_17": 468,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1826,
    "age_5_17": 321,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2159,
    "age_5_17": 444,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirunelveli",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1483,
    "age_5_17": 137,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirupathur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Tirupati",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 223,
    "age_5_17": 310,
    "age_18_greater": 84
  },
  {
    "state": "Andhra Pradesh",
    "district": "Tirupati",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 130,
    "age_5_17": 83,
    "age_18_greater": 20
  },
  {
    "state": "Andhra Pradesh",
    "district": "Tirupati",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 223,
    "age_5_17": 209,
    "age_18_greater": 76
  },
  {
    "state": "Andhra Pradesh",
    "district": "Tirupati",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 226,
    "age_5_17": 87,
    "age_18_greater": 48
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirupattur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 301,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirupattur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 191,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirupattur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 245,
    "age_5_17": 37,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Tirupattur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 207,
    "age_5_17": 24,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruppur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1849,
    "age_5_17": 350,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruppur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 966,
    "age_5_17": 228,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruppur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1390,
    "age_5_17": 381,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruppur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 873,
    "age_5_17": 150,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvallur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2922,
    "age_5_17": 772,
    "age_18_greater": 9
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvallur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1603,
    "age_5_17": 554,
    "age_18_greater": 5
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvallur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2541,
    "age_5_17": 1014,
    "age_18_greater": 24
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvallur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1646,
    "age_5_17": 325,
    "age_18_greater": 20
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvannamalai",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2449,
    "age_5_17": 274,
    "age_18_greater": 4
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvannamalai",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1228,
    "age_5_17": 140,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvannamalai",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1827,
    "age_5_17": 210,
    "age_18_greater": 21
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvannamalai",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1052,
    "age_5_17": 53,
    "age_18_greater": 8
  },
  {
    "state": "Tamil Nadu",
    "district": "Tiruvarur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Tonk",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 635,
    "age_5_17": 332,
    "age_18_greater": 19
  },
  {
    "state": "Rajasthan",
    "district": "Tonk",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1555,
    "age_5_17": 533,
    "age_18_greater": 4
  },
  {
    "state": "Rajasthan",
    "district": "Tonk",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 535,
    "age_5_17": 187,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Tonk",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 992,
    "age_5_17": 368,
    "age_18_greater": 17
  },
  {
    "state": "Rajasthan",
    "district": "Tonk",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 481,
    "age_5_17": 236,
    "age_18_greater": 4
  },
  {
    "state": "Nagaland",
    "district": "Tseminyu",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2,
    "age_5_17": 4,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Tseminyu",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 3,
    "age_5_17": 7,
    "age_18_greater": 1
  },
  {
    "state": "Nagaland",
    "district": "Tseminyu",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 3,
    "age_18_greater": 6
  },
  {
    "state": "Nagaland",
    "district": "Tseminyu",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 173,
    "age_5_17": 296,
    "age_18_greater": 34
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 96,
    "age_5_17": 385,
    "age_18_greater": 30
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 73,
    "age_5_17": 138,
    "age_18_greater": 8
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 95,
    "age_5_17": 82,
    "age_18_greater": 4
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 66,
    "age_5_17": 61,
    "age_18_greater": 8
  },
  {
    "state": "Nagaland",
    "district": "Tuensang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 9,
    "age_5_17": 21,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Tumakuru",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 811,
    "age_5_17": 48,
    "age_18_greater": 24
  },
  {
    "state": "Karnataka",
    "district": "Tumakuru",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 586,
    "age_5_17": 33,
    "age_18_greater": 20
  },
  {
    "state": "Karnataka",
    "district": "Tumakuru",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 633,
    "age_5_17": 47,
    "age_18_greater": 3
  },
  {
    "state": "Karnataka",
    "district": "Tumakuru",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 762,
    "age_5_17": 33,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Tumkur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 798,
    "age_5_17": 57,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Tumkur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 629,
    "age_5_17": 37,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Tumkur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 667,
    "age_5_17": 50,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Tumkur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 660,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tuticorin",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Tuticorin",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 70,
    "age_5_17": 47,
    "age_18_greater": 15
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 511,
    "age_5_17": 323,
    "age_18_greater": 21
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3271,
    "age_5_17": 2205,
    "age_18_greater": 8
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1245,
    "age_5_17": 965,
    "age_18_greater": 14
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2217,
    "age_5_17": 1514,
    "age_18_greater": 125
  },
  {
    "state": "Rajasthan",
    "district": "Udaipur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1327,
    "age_5_17": 1019,
    "age_18_greater": 9
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 10,
    "age_5_17": 46,
    "age_18_greater": 34
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 447,
    "age_5_17": 364,
    "age_18_greater": 319
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 221,
    "age_5_17": 162,
    "age_18_greater": 164
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 616,
    "age_5_17": 260,
    "age_18_greater": 4
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 479,
    "age_5_17": 181,
    "age_18_greater": 29
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 546,
    "age_5_17": 185,
    "age_18_greater": 25
  },
  {
    "state": "Assam",
    "district": "Udalguri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 339,
    "age_5_17": 124,
    "age_18_greater": 10
  },
  {
    "state": "Uttarakhand",
    "district": "Udham Singh Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1834,
    "age_5_17": 397,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Udham Singh Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 991,
    "age_5_17": 222,
    "age_18_greater": 1
  },
  {
    "state": "Uttarakhand",
    "district": "Udham Singh Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1253,
    "age_5_17": 231,
    "age_18_greater": 8
  },
  {
    "state": "Uttarakhand",
    "district": "Udham Singh Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1014,
    "age_5_17": 135,
    "age_18_greater": 7
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 494,
    "age_5_17": 95,
    "age_18_greater": 4
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 343,
    "age_5_17": 72,
    "age_18_greater": 4
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 827,
    "age_5_17": 127,
    "age_18_greater": 3
  },
  {
    "state": "Jammu & Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "Udhampur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 782,
    "age_5_17": 55,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Udupi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1413,
    "age_5_17": 61,
    "age_18_greater": 9
  },
  {
    "state": "Karnataka",
    "district": "Udupi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 708,
    "age_5_17": 60,
    "age_18_greater": 13
  },
  {
    "state": "Karnataka",
    "district": "Udupi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 611,
    "age_5_17": 60,
    "age_18_greater": 15
  },
  {
    "state": "Karnataka",
    "district": "Udupi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 606,
    "age_5_17": 29,
    "age_18_greater": 6
  },
  {
    "state": "Karnataka",
    "district": "Udupi *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3626,
    "age_5_17": 695,
    "age_18_greater": 6
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2110,
    "age_5_17": 274,
    "age_18_greater": 14
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 4115,
    "age_5_17": 490,
    "age_18_greater": 70
  },
  {
    "state": "Madhya Pradesh",
    "district": "Ujjain",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2599,
    "age_5_17": 304,
    "age_18_greater": 5
  },
  {
    "state": "Manipur",
    "district": "Ukhrul",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 91,
    "age_5_17": 148,
    "age_18_greater": 1
  },
  {
    "state": "Manipur",
    "district": "Ukhrul",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 84,
    "age_5_17": 113,
    "age_18_greater": 5
  },
  {
    "state": "Manipur",
    "district": "Ukhrul",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 127,
    "age_5_17": 133,
    "age_18_greater": 5
  },
  {
    "state": "Manipur",
    "district": "Ukhrul",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 41,
    "age_5_17": 30,
    "age_18_greater": 3
  },
  {
    "state": "Madhya Pradesh",
    "district": "Umaria",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1452,
    "age_5_17": 417,
    "age_18_greater": 5
  },
  {
    "state": "Madhya Pradesh",
    "district": "Umaria",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 803,
    "age_5_17": 157,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "Umaria",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1003,
    "age_5_17": 161,
    "age_18_greater": 8
  },
  {
    "state": "Madhya Pradesh",
    "district": "Umaria",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1102,
    "age_5_17": 171,
    "age_18_greater": 21
  },
  {
    "state": "Himachal Pradesh",
    "district": "Una",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 336,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Una",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 327,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Una",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 345,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Himachal Pradesh",
    "district": "Una",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 218,
    "age_5_17": 4,
    "age_18_greater": 0
  },
  {
    "state": "Tripura",
    "district": "Unakoti",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 19,
    "age_5_17": 16,
    "age_18_greater": 15
  },
  {
    "state": "Tripura",
    "district": "Unakoti",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 119,
    "age_5_17": 56,
    "age_18_greater": 1
  },
  {
    "state": "Tripura",
    "district": "Unakoti",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 102,
    "age_5_17": 25,
    "age_18_greater": 7
  },
  {
    "state": "Tripura",
    "district": "Unakoti",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 116,
    "age_5_17": 42,
    "age_18_greater": 3
  },
  {
    "state": "Tripura",
    "district": "Unakoti",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 77,
    "age_5_17": 40,
    "age_18_greater": 1
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 34,
    "age_5_17": 136,
    "age_18_greater": 33
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 937,
    "age_5_17": 547,
    "age_18_greater": 30
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 865,
    "age_5_17": 726,
    "age_18_greater": 37
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 497,
    "age_5_17": 892,
    "age_18_greater": 57
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1408,
    "age_5_17": 1887,
    "age_18_greater": 49
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1789,
    "age_5_17": 1863,
    "age_18_greater": 74
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 952,
    "age_5_17": 1014,
    "age_18_greater": 25
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2384,
    "age_5_17": 1063,
    "age_18_greater": 50
  },
  {
    "state": "Uttar Pradesh",
    "district": "Unnao",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 972,
    "age_5_17": 815,
    "age_18_greater": 12
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Siang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 10,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Siang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 9,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Siang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 5,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Siang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Subansiri",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 34,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Subansiri",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 14,
    "age_5_17": 16,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Subansiri",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 11,
    "age_5_17": 11,
    "age_18_greater": 11
  },
  {
    "state": "Arunachal Pradesh",
    "district": "Upper Subansiri",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 17,
    "age_5_17": 6,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Uttar Bastar Kanker",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 207,
    "age_5_17": 46,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Uttar Bastar Kanker",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 123,
    "age_5_17": 35,
    "age_18_greater": 8
  },
  {
    "state": "Chhattisgarh",
    "district": "Uttar Bastar Kanker",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 181,
    "age_5_17": 41,
    "age_18_greater": 0
  },
  {
    "state": "Chhattisgarh",
    "district": "Uttar Bastar Kanker",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 207,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1264,
    "age_5_17": 333,
    "age_18_greater": 116
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 2101,
    "age_5_17": 1479,
    "age_18_greater": 97
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5458,
    "age_5_17": 2585,
    "age_18_greater": 40
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 4513,
    "age_5_17": 1796,
    "age_18_greater": 22
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3081,
    "age_5_17": 1326,
    "age_18_greater": 27
  },
  {
    "state": "West Bengal",
    "district": "Uttar Dinajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1980,
    "age_5_17": 608,
    "age_18_greater": 66
  },
  {
    "state": "Karnataka",
    "district": "Uttara Kannada",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 906,
    "age_5_17": 67,
    "age_18_greater": 4
  },
  {
    "state": "Karnataka",
    "district": "Uttara Kannada",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 661,
    "age_5_17": 49,
    "age_18_greater": 5
  },
  {
    "state": "Karnataka",
    "district": "Uttara Kannada",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1018,
    "age_5_17": 75,
    "age_18_greater": 19
  },
  {
    "state": "Karnataka",
    "district": "Uttara Kannada",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 634,
    "age_5_17": 30,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Uttarkashi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 208,
    "age_5_17": 44,
    "age_18_greater": 2
  },
  {
    "state": "Uttarakhand",
    "district": "Uttarkashi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 196,
    "age_5_17": 29,
    "age_18_greater": 3
  },
  {
    "state": "Uttarakhand",
    "district": "Uttarkashi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 317,
    "age_5_17": 42,
    "age_18_greater": 0
  },
  {
    "state": "Uttarakhand",
    "district": "Uttarkashi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 257,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 36,
    "age_5_17": 43,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 788,
    "age_5_17": 216,
    "age_18_greater": 180
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 158,
    "age_5_17": 78,
    "age_18_greater": 10
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 334,
    "age_5_17": 139,
    "age_18_greater": 37
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 507,
    "age_5_17": 217,
    "age_18_greater": 60
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2210,
    "age_5_17": 744,
    "age_18_greater": 82
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1159,
    "age_5_17": 241,
    "age_18_greater": 19
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2560,
    "age_5_17": 512,
    "age_18_greater": 111
  },
  {
    "state": "Gujarat",
    "district": "Vadodara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1554,
    "age_5_17": 243,
    "age_18_greater": 36
  },
  {
    "state": "Bihar",
    "district": "Vaishali",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 270,
    "age_5_17": 217,
    "age_18_greater": 10
  },
  {
    "state": "Bihar",
    "district": "Vaishali",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2562,
    "age_5_17": 3417,
    "age_18_greater": 5
  },
  {
    "state": "Bihar",
    "district": "Vaishali",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1964,
    "age_5_17": 2249,
    "age_18_greater": 20
  },
  {
    "state": "Bihar",
    "district": "Vaishali",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1807,
    "age_5_17": 2246,
    "age_18_greater": 6
  },
  {
    "state": "Bihar",
    "district": "Vaishali",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1654,
    "age_5_17": 1569,
    "age_18_greater": 11
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 618,
    "age_5_17": 186,
    "age_18_greater": 100
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 277,
    "age_5_17": 101,
    "age_18_greater": 20
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 581,
    "age_5_17": 261,
    "age_18_greater": 30
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1455,
    "age_5_17": 373,
    "age_18_greater": 13
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 499,
    "age_5_17": 100,
    "age_18_greater": 14
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1324,
    "age_5_17": 279,
    "age_18_greater": 34
  },
  {
    "state": "Gujarat",
    "district": "Valsad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1064,
    "age_5_17": 106,
    "age_18_greater": 13
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 527,
    "age_5_17": 733,
    "age_18_greater": 81
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 574,
    "age_5_17": 849,
    "age_18_greater": 23
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 297,
    "age_5_17": 602,
    "age_18_greater": 15
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 2392,
    "age_5_17": 3993,
    "age_18_greater": 268
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1948,
    "age_5_17": 3218,
    "age_18_greater": 16
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1157,
    "age_5_17": 1423,
    "age_18_greater": 6
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1496,
    "age_5_17": 1703,
    "age_18_greater": 20
  },
  {
    "state": "Uttar Pradesh",
    "district": "Varanasi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1088,
    "age_5_17": 883,
    "age_18_greater": 22
  },
  {
    "state": "Tamil Nadu",
    "district": "Vellore",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 367,
    "age_5_17": 102,
    "age_18_greater": 41
  },
  {
    "state": "Tamil Nadu",
    "district": "Vellore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2703,
    "age_5_17": 359,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Vellore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1572,
    "age_5_17": 225,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Vellore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2176,
    "age_5_17": 460,
    "age_18_greater": 11
  },
  {
    "state": "Tamil Nadu",
    "district": "Vellore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1453,
    "age_5_17": 163,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 670,
    "age_5_17": 119,
    "age_18_greater": 42
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 209,
    "age_5_17": 43,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 1227,
    "age_5_17": 626,
    "age_18_greater": 58
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2295,
    "age_5_17": 709,
    "age_18_greater": 17
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 773,
    "age_5_17": 174,
    "age_18_greater": 15
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1317,
    "age_5_17": 267,
    "age_18_greater": 12
  },
  {
    "state": "Madhya Pradesh",
    "district": "Vidisha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1507,
    "age_5_17": 268,
    "age_18_greater": 11
  },
  {
    "state": "Karnataka",
    "district": "Vijayanagara",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 662,
    "age_5_17": 106,
    "age_18_greater": 22
  },
  {
    "state": "Karnataka",
    "district": "Vijayanagara",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 345,
    "age_5_17": 52,
    "age_18_greater": 12
  },
  {
    "state": "Karnataka",
    "district": "Vijayanagara",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 434,
    "age_5_17": 51,
    "age_18_greater": 12
  },
  {
    "state": "Karnataka",
    "district": "Vijayanagara",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 381,
    "age_5_17": 32,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Vijayapura",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 363,
    "age_5_17": 77,
    "age_18_greater": 10
  },
  {
    "state": "Karnataka",
    "district": "Vijayapura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1785,
    "age_5_17": 364,
    "age_18_greater": 29
  },
  {
    "state": "Karnataka",
    "district": "Vijayapura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 735,
    "age_5_17": 152,
    "age_18_greater": 17
  },
  {
    "state": "Karnataka",
    "district": "Vijayapura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 999,
    "age_5_17": 148,
    "age_18_greater": 19
  },
  {
    "state": "Karnataka",
    "district": "Vijayapura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 780,
    "age_5_17": 101,
    "age_18_greater": 17
  },
  {
    "state": "Telangana",
    "district": "Vikarabad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 764,
    "age_5_17": 185,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Vikarabad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 510,
    "age_5_17": 152,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Vikarabad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 560,
    "age_5_17": 125,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Vikarabad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 251,
    "age_5_17": 44,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Villupuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1833,
    "age_5_17": 282,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Villupuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 986,
    "age_5_17": 209,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Villupuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2251,
    "age_5_17": 356,
    "age_18_greater": 2
  },
  {
    "state": "Tamil Nadu",
    "district": "Villupuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 784,
    "age_5_17": 68,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Viluppuram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1398,
    "age_5_17": 244,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Viluppuram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 757,
    "age_5_17": 160,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Viluppuram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1598,
    "age_5_17": 302,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Viluppuram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 588,
    "age_5_17": 75,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Virudhunagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1692,
    "age_5_17": 198,
    "age_18_greater": 1
  },
  {
    "state": "Tamil Nadu",
    "district": "Virudhunagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 833,
    "age_5_17": 136,
    "age_18_greater": 0
  },
  {
    "state": "Tamil Nadu",
    "district": "Virudhunagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1351,
    "age_5_17": 226,
    "age_18_greater": 3
  },
  {
    "state": "Tamil Nadu",
    "district": "Virudhunagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 893,
    "age_5_17": 67,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "Visakhapatanam",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 186,
    "age_5_17": 28,
    "age_18_greater": 12
  },
  {
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2358,
    "age_5_17": 185,
    "age_18_greater": 8
  },
  {
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1525,
    "age_5_17": 88,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2065,
    "age_5_17": 124,
    "age_18_greater": 14
  },
  {
    "state": "Andhra Pradesh",
    "district": "Visakhapatnam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1740,
    "age_5_17": 63,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "Vizianagaram",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1220,
    "age_5_17": 72,
    "age_18_greater": 2
  },
  {
    "state": "Andhra Pradesh",
    "district": "Vizianagaram",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 739,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Vizianagaram",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1012,
    "age_5_17": 33,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Vizianagaram",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 724,
    "age_5_17": 13,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Wanaparthy",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 443,
    "age_5_17": 120,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Wanaparthy",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 294,
    "age_5_17": 122,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Wanaparthy",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 346,
    "age_5_17": 125,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Wanaparthy",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 183,
    "age_5_17": 34,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 329,
    "age_5_17": 60,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 920,
    "age_5_17": 201,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 231,
    "age_5_17": 63,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 643,
    "age_5_17": 125,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 193,
    "age_5_17": 58,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 599,
    "age_5_17": 113,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 105,
    "age_5_17": 20,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 300,
    "age_5_17": 51,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal (urban)",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 3,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal (urban)",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal (urban)",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal Rural",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 216,
    "age_5_17": 19,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal Rural",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 164,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal Rural",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 169,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Warangal Rural",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 111,
    "age_5_17": 10,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Warangal Urban",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 217,
    "age_5_17": 22,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Warangal Urban",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 148,
    "age_5_17": 19,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Warangal Urban",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 145,
    "age_5_17": 24,
    "age_18_greater": 2
  },
  {
    "state": "Telangana",
    "district": "Warangal Urban",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 75,
    "age_5_17": 7,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Wardha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 679,
    "age_5_17": 41,
    "age_18_greater": 1
  },
  {
    "state": "Maharashtra",
    "district": "Wardha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 298,
    "age_5_17": 22,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Wardha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 343,
    "age_5_17": 11,
    "age_18_greater": 4
  },
  {
    "state": "Maharashtra",
    "district": "Wardha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 539,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 198,
    "age_5_17": 20,
    "age_18_greater": 10
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 378,
    "age_5_17": 68,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 691,
    "age_5_17": 113,
    "age_18_greater": 11
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 469,
    "age_5_17": 37,
    "age_18_greater": 7
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 505,
    "age_5_17": 29,
    "age_18_greater": 6
  },
  {
    "state": "Maharashtra",
    "district": "Washim",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 800,
    "age_5_17": 33,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Washim *",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 9,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Washim *",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 6,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Washim *",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Washim *",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Kerala",
    "district": "Wayanad",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 296,
    "age_5_17": 75,
    "age_18_greater": 3
  },
  {
    "state": "Kerala",
    "district": "Wayanad",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 276,
    "age_5_17": 68,
    "age_18_greater": 3
  },
  {
    "state": "Kerala",
    "district": "Wayanad",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 512,
    "age_5_17": 67,
    "age_18_greater": 9
  },
  {
    "state": "Kerala",
    "district": "Wayanad",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 181,
    "age_5_17": 23,
    "age_18_greater": 3
  },
  {
    "state": "Sikkim",
    "district": "West",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 39,
    "age_5_17": 54,
    "age_18_greater": 2
  },
  {
    "state": "Sikkim",
    "district": "West",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 25,
    "age_5_17": 21,
    "age_18_greater": 2
  },
  {
    "state": "Sikkim",
    "district": "West",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 22,
    "age_5_17": 32,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "West",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 6,
    "age_5_17": 4,
    "age_18_greater": 1
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 2826,
    "age_5_17": 3724,
    "age_18_greater": 159
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1934,
    "age_5_17": 2875,
    "age_18_greater": 157
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2356,
    "age_5_17": 3709,
    "age_18_greater": 133
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1305,
    "age_5_17": 2492,
    "age_18_greater": 149
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1500,
    "age_5_17": 2831,
    "age_18_greater": 143
  },
  {
    "state": "Bihar",
    "district": "West Champaran",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1664,
    "age_5_17": 2439,
    "age_18_greater": 42
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 146,
    "age_5_17": 87,
    "age_18_greater": 75
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1249,
    "age_5_17": 440,
    "age_18_greater": 183
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 1411,
    "age_5_17": 493,
    "age_18_greater": 172
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 1582,
    "age_5_17": 587,
    "age_18_greater": 245
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 3799,
    "age_5_17": 1364,
    "age_18_greater": 189
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 2027,
    "age_5_17": 571,
    "age_18_greater": 46
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1028,
    "age_5_17": 254,
    "age_18_greater": 23
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1562,
    "age_5_17": 393,
    "age_18_greater": 57
  },
  {
    "state": "Delhi",
    "district": "West Delhi",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1196,
    "age_5_17": 216,
    "age_18_greater": 19
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 1215,
    "age_5_17": 1761,
    "age_18_greater": 727
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 683,
    "age_5_17": 994,
    "age_18_greater": 708
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 521,
    "age_5_17": 992,
    "age_18_greater": 854
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 893,
    "age_5_17": 1870,
    "age_18_greater": 1534
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 439,
    "age_5_17": 527,
    "age_18_greater": 168
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 290,
    "age_5_17": 282,
    "age_18_greater": 242
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 385,
    "age_5_17": 282,
    "age_18_greater": 276
  },
  {
    "state": "Meghalaya",
    "district": "West Garo Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 119,
    "age_5_17": 82,
    "age_18_greater": 31
  },
  {
    "state": "Andhra Pradesh",
    "district": "West Godavari",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1871,
    "age_5_17": 128,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "West Godavari",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1015,
    "age_5_17": 91,
    "age_18_greater": 6
  },
  {
    "state": "Andhra Pradesh",
    "district": "West Godavari",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1579,
    "age_5_17": 89,
    "age_18_greater": 7
  },
  {
    "state": "Andhra Pradesh",
    "district": "West Godavari",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1103,
    "age_5_17": 35,
    "age_18_greater": 5
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 315,
    "age_5_17": 53,
    "age_18_greater": 142
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 712,
    "age_5_17": 1478,
    "age_18_greater": 727
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 558,
    "age_5_17": 909,
    "age_18_greater": 734
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 192,
    "age_5_17": 1017,
    "age_18_greater": 634
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 224,
    "age_5_17": 1089,
    "age_18_greater": 883
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 200,
    "age_5_17": 498,
    "age_18_greater": 295
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 81,
    "age_5_17": 203,
    "age_18_greater": 93
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 75,
    "age_5_17": 149,
    "age_18_greater": 285
  },
  {
    "state": "Meghalaya",
    "district": "West Jaintia Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 25,
    "age_5_17": 240,
    "age_18_greater": 5
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Kameng",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 43,
    "age_5_17": 30,
    "age_18_greater": 10
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Kameng",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 46,
    "age_5_17": 35,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Kameng",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 32,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Kameng",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 20,
    "age_5_17": 19,
    "age_18_greater": 7
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Kameng",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 16,
    "age_5_17": 5,
    "age_18_greater": 0
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 94,
    "age_5_17": 344,
    "age_18_greater": 45
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 39,
    "age_5_17": 216,
    "age_18_greater": 11
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 52,
    "age_5_17": 133,
    "age_18_greater": 110
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 116,
    "age_5_17": 148,
    "age_18_greater": 118
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 36,
    "age_5_17": 57,
    "age_18_greater": 86
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 12,
    "age_5_17": 40,
    "age_18_greater": 46
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 30,
    "age_5_17": 44,
    "age_18_greater": 57
  },
  {
    "state": "Assam",
    "district": "West Karbi Anglong",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 11,
    "age_5_17": 5,
    "age_18_greater": 34
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "March",
    "age_0_5": 118,
    "age_5_17": 113,
    "age_18_greater": 442
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 896,
    "age_5_17": 2670,
    "age_18_greater": 1129
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 406,
    "age_5_17": 1103,
    "age_18_greater": 923
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "June",
    "age_0_5": 129,
    "age_5_17": 1296,
    "age_18_greater": 752
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 442,
    "age_5_17": 1998,
    "age_18_greater": 1179
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 207,
    "age_5_17": 496,
    "age_18_greater": 323
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 118,
    "age_5_17": 223,
    "age_18_greater": 297
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 75,
    "age_5_17": 204,
    "age_18_greater": 181
  },
  {
    "state": "Meghalaya",
    "district": "West Khasi Hills",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 19,
    "age_5_17": 75,
    "age_18_greater": 84
  },
  {
    "state": "West Bengal",
    "district": "West Medinipur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "West Midnapore",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 626,
    "age_5_17": 221,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "West Midnapore",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 391,
    "age_5_17": 125,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "West Midnapore",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 423,
    "age_5_17": 128,
    "age_18_greater": 1
  },
  {
    "state": "West Bengal",
    "district": "West Midnapore",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 207,
    "age_5_17": 66,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "West Nimar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 228,
    "age_5_17": 54,
    "age_18_greater": 4
  },
  {
    "state": "Madhya Pradesh",
    "district": "West Nimar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 117,
    "age_5_17": 29,
    "age_18_greater": 1
  },
  {
    "state": "Madhya Pradesh",
    "district": "West Nimar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 139,
    "age_5_17": 28,
    "age_18_greater": 0
  },
  {
    "state": "Madhya Pradesh",
    "district": "West Nimar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 134,
    "age_5_17": 25,
    "age_18_greater": 1
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Siang",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 45,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Siang",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 27,
    "age_5_17": 16,
    "age_18_greater": 0
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Siang",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 21,
    "age_5_17": 21,
    "age_18_greater": 2
  },
  {
    "state": "Arunachal Pradesh",
    "district": "West Siang",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 17,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 52,
    "age_5_17": 65,
    "age_18_greater": 10
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 48,
    "age_5_17": 108,
    "age_18_greater": 15
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 50,
    "age_5_17": 42,
    "age_18_greater": 4
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 21,
    "age_5_17": 19,
    "age_18_greater": 3
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 27,
    "age_5_17": 20,
    "age_18_greater": 2
  },
  {
    "state": "Sikkim",
    "district": "West Sikkim",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 2,
    "age_18_greater": 5
  },
  {
    "state": "Jharkhand",
    "district": "West Singhbhum",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 320,
    "age_5_17": 440,
    "age_18_greater": 16
  },
  {
    "state": "Jharkhand",
    "district": "West Singhbhum",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1122,
    "age_5_17": 579,
    "age_18_greater": 12
  },
  {
    "state": "Jharkhand",
    "district": "West Singhbhum",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 811,
    "age_5_17": 503,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "West Singhbhum",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1189,
    "age_5_17": 691,
    "age_18_greater": 8
  },
  {
    "state": "Jharkhand",
    "district": "West Singhbhum",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 769,
    "age_5_17": 376,
    "age_18_greater": 4
  },
  {
    "state": "Tripura",
    "district": "West Tripura",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 146,
    "age_5_17": 65,
    "age_18_greater": 25
  },
  {
    "state": "Tripura",
    "district": "West Tripura",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 471,
    "age_5_17": 215,
    "age_18_greater": 5
  },
  {
    "state": "Tripura",
    "district": "West Tripura",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 380,
    "age_5_17": 148,
    "age_18_greater": 27
  },
  {
    "state": "Tripura",
    "district": "West Tripura",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 588,
    "age_5_17": 222,
    "age_18_greater": 15
  },
  {
    "state": "Tripura",
    "district": "West Tripura",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 378,
    "age_5_17": 114,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Wokha",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 40,
    "age_5_17": 191,
    "age_18_greater": 17
  },
  {
    "state": "Nagaland",
    "district": "Wokha",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 44,
    "age_5_17": 145,
    "age_18_greater": 7
  },
  {
    "state": "Nagaland",
    "district": "Wokha",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 17,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Nagaland",
    "district": "Wokha",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 12,
    "age_5_17": 19,
    "age_18_greater": 6
  },
  {
    "state": "Nagaland",
    "district": "Wokha",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 5,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Andhra Pradesh",
    "district": "Y. S. R",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 213,
    "age_5_17": 30,
    "age_18_greater": 8
  },
  {
    "state": "Andhra Pradesh",
    "district": "Y. S. R",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 151,
    "age_5_17": 6,
    "age_18_greater": 1
  },
  {
    "state": "Andhra Pradesh",
    "district": "Y. S. R",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 228,
    "age_5_17": 13,
    "age_18_greater": 10
  },
  {
    "state": "Andhra Pradesh",
    "district": "Y. S. R",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 146,
    "age_5_17": 3,
    "age_18_greater": 14
  },
  {
    "state": "Telangana",
    "district": "Yadadri.",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 537,
    "age_5_17": 103,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Yadadri.",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 309,
    "age_5_17": 40,
    "age_18_greater": 0
  },
  {
    "state": "Telangana",
    "district": "Yadadri.",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 338,
    "age_5_17": 48,
    "age_18_greater": 1
  },
  {
    "state": "Telangana",
    "district": "Yadadri.",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 196,
    "age_5_17": 14,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "Yadgir",
    "Year": "2025",
    "Month_Name": "April",
    "age_0_5": 536,
    "age_5_17": 89,
    "age_18_greater": 21
  },
  {
    "state": "Karnataka",
    "district": "Yadgir",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1390,
    "age_5_17": 452,
    "age_18_greater": 11
  },
  {
    "state": "Karnataka",
    "district": "Yadgir",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 965,
    "age_5_17": 235,
    "age_18_greater": 2
  },
  {
    "state": "Karnataka",
    "district": "Yadgir",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1082,
    "age_5_17": 297,
    "age_18_greater": 72
  },
  {
    "state": "Karnataka",
    "district": "Yadgir",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 874,
    "age_5_17": 227,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Yamuna Nagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 959,
    "age_5_17": 46,
    "age_18_greater": 2
  },
  {
    "state": "Haryana",
    "district": "Yamuna Nagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 613,
    "age_5_17": 15,
    "age_18_greater": 1
  },
  {
    "state": "Haryana",
    "district": "Yamuna Nagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1032,
    "age_5_17": 34,
    "age_18_greater": 5
  },
  {
    "state": "Haryana",
    "district": "Yamuna Nagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 674,
    "age_5_17": 15,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Yamunanagar",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 16,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Yamunanagar",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 14,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Yamunanagar",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 16,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Haryana",
    "district": "Yamunanagar",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 10,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 6,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 5,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 6,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Puducherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Pondicherry",
    "district": "Yanam",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 7,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "May",
    "age_0_5": 281,
    "age_5_17": 72,
    "age_18_greater": 30
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 858,
    "age_5_17": 405,
    "age_18_greater": 39
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1749,
    "age_5_17": 440,
    "age_18_greater": 16
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 995,
    "age_5_17": 174,
    "age_18_greater": 20
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 908,
    "age_5_17": 128,
    "age_18_greater": 58
  },
  {
    "state": "Maharashtra",
    "district": "Yavatmal",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1263,
    "age_5_17": 120,
    "age_18_greater": 38
  },
  {
    "state": "Nagaland",
    "district": "Zunheboto",
    "Year": "2025",
    "Month_Name": "July",
    "age_0_5": 48,
    "age_5_17": 277,
    "age_18_greater": 24
  },
  {
    "state": "Nagaland",
    "district": "Zunheboto",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 27,
    "age_5_17": 88,
    "age_18_greater": 11
  },
  {
    "state": "Nagaland",
    "district": "Zunheboto",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 31,
    "age_5_17": 129,
    "age_18_greater": 3
  },
  {
    "state": "Nagaland",
    "district": "Zunheboto",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 17,
    "age_5_17": 81,
    "age_18_greater": 9
  },
  {
    "state": "Nagaland",
    "district": "Zunheboto",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 8,
    "age_5_17": 8,
    "age_18_greater": 0
  },
  {
    "state": "andhra pradesh",
    "district": "chittoor",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "andhra pradesh",
    "district": "chittoor",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "andhra pradesh",
    "district": "chittoor",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 0,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 3,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West bengal",
    "district": "hooghly",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 2,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "jajpur",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 7,
    "age_5_17": 2,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "jajpur",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "jajpur",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 2,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Odisha",
    "district": "jajpur",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 4,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "nadia",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "West Bengal",
    "district": "nadia",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 1,
    "age_5_17": 1,
    "age_18_greater": 0
  },
  {
    "state": "Jammu and Kashmir",
    "district": "punch",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "andhra pradesh",
    "district": "rangareddi",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 1,
    "age_5_17": 0,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "yadgir",
    "Year": "2025",
    "Month_Name": "September",
    "age_0_5": 214,
    "age_5_17": 48,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "yadgir",
    "Year": "2025",
    "Month_Name": "October",
    "age_0_5": 126,
    "age_5_17": 17,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "yadgir",
    "Year": "2025",
    "Month_Name": "November",
    "age_0_5": 156,
    "age_5_17": 35,
    "age_18_greater": 0
  },
  {
    "state": "Karnataka",
    "district": "yadgir",
    "Year": "2025",
    "Month_Name": "December",
    "age_0_5": 77,
    "age_5_17": 16,
    "age_18_greater": 0
  }
];