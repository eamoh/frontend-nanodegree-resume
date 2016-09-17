// create bio object
var bio = {
    "name": "Ebenezer Amoh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1 (123) 456-7890",
        "email": "ebamoh@hotmail.com",
        "github": "eamoh",
        "twitter": "@EbenezerAmoh",
        "location": "New York"
    },
    "welcomeMsg": "Banker by day, web developer by night, my passion lies at the intersection of business and technology",
    "skills": ["Financial Modeling", "Valuation", "Statistics", "Bloomberg", "CapitalIQ", "HTML",
        "CSS", "JavaScript", "Python",
    ],
    "bioPic": "images/profile_pic.jpg"
};

//create education object
var education = {
    "schools": [{
        "name": "Brandeis University",
        "location": "Waltham, MA, US",
        "degree": "Masters",
        "majors": ["Economics", "Finance"],
        "dates": "2011-2013 ",
        "url": "www.brandeis.edu"
    }, {
        "name": "Oberlin College",
        "location": "Oberlin, OH, US",
        "degree": "BA",
        "majors": ["Economics"],
        "dates": "2007-2011 ",
        "url": "www.oberlin.edu"
    }],
    "onlineCourses": [{
        "title": "How to Use Git and GitHub",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
    }]
};

//create work object
var work = {
    "jobs": [{
        "employer": "Credit Suisse AG",
        "title": "Associate",
        "location": "New York, NY, US",
        "dates": "2015 - Present",
        "description": "Assess credit risk of counterparties in new loan originations; perform enterprise " +
            "value of counterpaties using valuation techniques such as discounted cash flow, peer company, and " +
            "peer transaction methods."
    }, {
        "employer": "PricewaterhouseCoopers LLC",
        "title": "Associate",
        "location": "Boston, US",
        "dates": "2013 - 2015",
        "description": "Performed valuations for corporate and private equity clients as they relate to " +
            "(a) M&A: business combinations / asset purchases; (b) private equity portfolio valuation; " +
            "(c) goodwill and in-process research and development impairment testing; (d) common stock valuation; " +
            "(e) tax valuation for tax reorganizations, intellectual property transfers, and other transactions."
    }]
};

// create projects object
var projects = {
    "projects": [{
        "title": "Mockup to Article",
        "dates": "2016",
        "description": "Convert mockup to web article using HTML",
        "images": ["images/proj_mockup.png"] // "images/197x148.gif"
    }, {
        "title": "Animal Trading Cards",
        "dates": "2016",
        "description": "Combine HTML and CSS techniques to create an animal trading card",
        "images": ["images/proj_animal_trading_cards.png"]
    }, {
        "title": "Building a Portfolio Site",
        "dates": "2016",
        "description": "Combine HTML, CSS, and Bootsrap techniques to build a portfolio website",
        "images": ["images/proj_portfolio_site.png"]
    }]
};

// function to display bio object content in resume
bio.display = function() {
    //intializing and adding header variables
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedbioPic);

    // intializing and adding contact variables
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    //adding contacts to header and footer
    var idStrings = ["#topContacts", "#footerContacts"];
    for (var i = 0, id; i < idStrings.length; i++) {
        id = idStrings[i];
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedGithub);
        $(id).append(formattedTwitter);
        $(id).append(formattedLocation);
    }

    // insert skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

// function to display work object content in resume
work.display = function() {
    for (var w = 0; w < work.jobs.length; w++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[w].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[w].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[w].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[w].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[w].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
    }
};

work.display();

// display projects
projects.display = function() {
    for (var p = 0; p < projects.projects.length; p++) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        if (projects.projects[p].images.length > 0) {
            for (var i = 0; i < projects.projects[p].images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

projects.display();

// display education
education.display = function() {
    $('#education').append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        formattedNameDegree = formattedName + formattedDegree;

        $('.education-entry:last').append(formattedNameDegree);
        //$('.education-entry:last').append(formattedDegree);
        $('.education-entry:last').append(formattedDates);
        $('.education-entry:last').append(formattedLocation);
        $('.education-entry:last').append(formattedMajor);
    }

    $('.education-entry:last').append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);

        $('.education-entry:last').append(formattedTitle);
        $('.education-entry:last').append(formattedSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedURL);
    }
};

education.display();

// display map of locations where I've worked
$('#mapDiv').append(googleMap);