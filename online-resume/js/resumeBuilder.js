/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Athra Albahli",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "0543392955",
        "email": "athraalbahli@gmail.com",
        "github": "athraalbahli",
        "twitter": "athraalbahli",
        "location": "Dhahran",
    },
    "welcomeMessage": "welcome message" ,
    "skills": ["programming" , "comunication" , "leadreship" , "design" ],
    "biopic": "images/fry.jpg"
 }

 var work = {
 	"jobs": [
 		{ 	
 		"employer": "Yokogawa" ,
 	  	"title": "Software Configurator",
 		"location": "SA, Dhahran",
 		"dates": "2013 - 2015" ,
 		"description": "description description description description description description description description description description description description description description description description description description description description description description description description" 
 		} ,
 		{
 		"employer": "Innosoft" ,
 	  	"title": "Web Developer",
 		"location": "SA ,Dhahran",
 		"dates": "2015 - in progress" ,
 		"description": "description description description description description description description description description description description description description description description description description description description description description description description" 
 		} ,
 	]
 }

 var projects = {
 	"projects": [
 	{
        "title": "project title 1",
        "dates": "2014 - 2015",
        "description": "description description description description description description description description description description description description description description description description description description description description description description description",
        "images": ["images/197x148.gif","images/197x148.gif"]		
 	},
 	{
        "title": "project title 2",
        "dates": "2016 - 2017",
        "description": "description description description description description description description description description description description description description description description description description description description description description description description",
        "images": ["images/197x148.gif","images/197x148.gif"]		
 	},

    ]
 }

var education = {
    "schools" : [
        {
        "name": "University of Dammam",
        "location": "Dammam",
        "degree": "Bachelor",
        "majors": ["computer science"],
        "dates": "2006-2012",
        "url": "https://www.iau.edu.sa/en",
        }
    ],
    "onlineCourses" : [
        {
        "title" : "C#",
        "school" : "Udemy",
        "dates": "2017", 
        "url": "https://www.udemy.com/",
        },
        {
        "title" : "Front End",
        "school" : "Udacity",
        "dates": "2017", 
        "url": "https://www.Udacity.com/",
        }
    ]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
for (var skill in bio.skills ) {
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
}

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#workExperience").append(HTMLworkStart);
for (var job in work.jobs ) {
$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
$("a:last").append(HTMLworkTitle.replace("%data%",work.jobs[job].title ));
$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
}

$("#projects").append(HTMLprojectStart);
for ( var project in projects.projects) {
	$(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
	$(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
	$(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
    for ( var img in projects.projects[project].images )
    {
      $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
    }	
}

$("#education").append(HTMLschoolStart);
for ( var school in education.schools) {
    $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
    $("a:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
     for( var major in education.schools[school].majors) {
         $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
     }
}

 $("#education").append(HTMLonlineClasses);
 $("#education").append(HTMLschoolStart);
  for ( var course in education.onlineCourses) {
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
    $("a:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
 }

//$("#mapDiv").append(internationalizeButton);
$("#mapDiv").append(googleMap);


