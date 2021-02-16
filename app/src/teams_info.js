const
    tID_sID = (tID) => {
        switch (tID) {
            case "102":
            case "201":
            case "301":
            case "401":
            case "502":
            case "601":
            case "701":
            case "801":
                return '001';
            case "402":
            case "802":
                return '002';
            case "202":
            case "302":
            case "403":
            case "602":
            case "702":
            case "803":
                return '003';
            case "103":
            case "203":
            case "303":
            case "404":
            case "503":
            case "603":
            case "703":
            case "804":
                return '004';
            case "405":
            case "805":
                return '005';
            case "204":
            case "304":
            case "406":
            case "604":
            case "704":
            case "806":
                return '006';
            case "105":
            case "305":
            case "407":
            case "505":
            case "705":
            case "807":
                return '007';
            case "408":
            case "808":
                return '008';
            case "104":
            case "205":
            case "504":
            case "605":
                return '009';
            case "206":
            case "409":
            case "606":
            case "809":
                return '010';
            case "106":
            case "207":
            case "410":
            case "506":
            case "607":
            case "810":
                return '011';
            case "208":
            case "411":
            case "608":
            case "811":
                return '012';
            case "101":
            case "209":
            case "306":
            case "412":
            case "501":
            case "609":
            case "706":
            case "812":
                return '013';
            case "210":
            case "610":
                return '014';
            case "211":
            case "611":
                return '015';
            case "107":
            case "212":
            case "307":
            case "413":
            case "507":
            case "612":
            case "707":
            case "813":
                return '016';
        
            default:
                return '000';
        }
    },
    school_info = {
        "000": { school_name: "To Be Determined", team_name: "TBD", abbr: "TBD", primary_color: "#D7282F", secondary_color: "#101820", logo_url: "/assets/school_logos/000.png" },
        "001": { school_name: "Carleton University", team_name: "Carleton Ravens", abbr: "CU", primary_color: "#00000D", secondary_color: "#FFFFFF", logo_url: "/assets/school_logos/001.png" },
        "002": { school_name: "Concordia University", team_name: "Concordia Esports", abbr: "CU", primary_color: "#BF2525", secondary_color: "#EDD968", logo_url: "/assets/school_logos/002.png" },
        "003": { school_name: "Conestoga College", team_name: "Conestoga Condors", abbr: "CC", primary_color: "#BC955C", secondary_color: "#FFFFFF", logo_url: "/assets/school_logos/003.png" },
        "004": { school_name: "Fanshawe College ", team_name: "Fanshawe Falcons", abbr: "FAN", primary_color: "#DA291C", secondary_color: "#000000", logo_url: "/assets/school_logos/004.png" },
        "005": { school_name: "Lambton College", team_name: "Lambton Lions Esports", abbr: "LC", primary_color: "#0A5688", secondary_color: "#FFFFFF", logo_url: "/assets/school_logos/005.png" },
        "006": { school_name: "Queen's University", team_name: "Queen's Gaels", abbr: "QU", primary_color: "#00305E", secondary_color: "#FEBE11", logo_url: "/assets/school_logos/006.png" },
        "007": { school_name: "Ryerson University", team_name: "Ryerson Rams", abbr: "RU", primary_color: "#004C9B", secondary_color: "#FFDC00", logo_url: "/assets/school_logos/007.png" },
        "008": { school_name: "Sault College", team_name: "Sault Cougers", abbr: "SC", primary_color: "#0055A4", secondary_color: "#FFFFFF", logo_url: "/assets/school_logos/008.png" },
        "009": { school_name: "St. Clair College", team_name: "St. Clair Saints", abbr: "SCC", primary_color: "#006937", secondary_color: "#FFC629", logo_url: "/assets/school_logos/009.png" },
        "010": { school_name: "Trent University", team_name: "Trent Excalibur", abbr: "TU", primary_color: "#003E2D", secondary_color: "#FFFFFF", logo_url: "/assets/school_logos/010.png" },
        "011": { school_name: "University of Ottawa", team_name: "uOttawa Gee-Gees Esports", abbr: "UO", primary_color: "#5A0123", secondary_color: "#A7A8AA", logo_url: "/assets/school_logos/011.png" },
        "012": { school_name: "University of Toronto", team_name: "University of Toronto Sport & Rec Esports", abbr: "UofT", primary_color: "#002A5C", secondary_color: "#008BB0", logo_url: "/assets/school_logos/012.png" },
        "013": { school_name: "University of Waterloo", team_name: "Waterloo Warriors", abbr: "WAT", primary_color: "#000000", secondary_color: "#FFD100", logo_url: "/assets/school_logos/013.png" },
        "014": { school_name: "University of Windsor", team_name: "Lancer Gaming", abbr: "UofW", primary_color: "#005596", secondary_color: "#FFCE00", logo_url: "/assets/school_logos/014.png" },
        "015": { school_name: "Western University", team_name: "Western Mustangs Esports", abbr: "WES", primary_color: "#4F2683", secondary_color: "#807F83", logo_url: "/assets/school_logos/015.png" },
        "016": { school_name: "York University", team_name: "York Lions", abbr: "YU", primary_color: "#E31837", secondary_color: "#000000", logo_url: "/assets/school_logos/016.png" }
    }

module.exports = { tID_sID, school_info };