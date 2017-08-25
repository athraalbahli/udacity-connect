/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Athra Albahli",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "+966543392955",
        "email": "athraalbahli@gmail.com",
        "github": "athraalbahli",
        "twitter": "athraalbahli",
        "location": "Dhahran",
    },
    "welcomeMessage": "Welcome to my online resume" ,
    "skills": ["Programming" , "Comunication" , "Teamwork" , "Design" ],
    "biopic": "images/avatar.png",
    display: function(){
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
        bio.skills.forEach(function(skill){
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
     }
 };

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
 	],
    display: function () {
        work.jobs.forEach(function(job){
            $(".work-entry").append(HTMLworkEmployer.replace("%data%", job.employer));
            $("a:last").append(HTMLworkTitle.replace("%data%",job.title ));
            $(".work-entry").append(HTMLworkDates.replace("%data%", job.dates));
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry").append(HTMLworkDescription.replace("%data%", job.description));
        });
    }
 };

var projects = {
    "projects": [
    {
        "title": "Animal Trading Cards",
        "dates": "2017",
        "description": "Lorem ipsum dolor sit amet, est vehicula sapien vestibulum tellus amet nec, arcu curabitur, at elit consectetuer orci wisi molestie, cras eu eget non erat, cursus vivamus non dignissim. Nunc turpis ac eget wisi erat",
        "images": ["images/resume.png"]       
    },
    {
        "title": "Portfilio site",
        "dates": "2017",
        "description": "Volutpat lobortis adipiscing, odio condimentum adipiscing pretium porttitor odio. Praesent litora lacinia velit, eu et diam elit est. Doloribus lectus maecenas eleifend massa ut duis",
        "images": ["images/portfilio.jpg"]       
    },
    ],
    
    display: function() {
        projects.projects.forEach(function(project){
            $(".project-entry").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry").append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function(image){
                $(".project-entry").append(HTMLprojectImage.replace("%data%", image));
            });  
        });
    }
 };

var education = {
    "schools" : [
        {
        "name": "University of Dammam",
        "location": "Dammam",
        "degree": "Bachelor",
        "majors": ["Computer Science"],
        "dates": "2006 - 2012",
        "url": "https://www.iau.edu.sa/en",
        }
    ],
    "onlineCourses" : [
        {
        "title" : " C# Fundamentals",
        "school" : "Udemy",
        "dates": "2016 - 2017", 
        "url": "https://www.udemy.com/csharp-tutorial-for-beginners/learn/",
        },
        {
        "title" : "Frontend Web Development Nanodegrees",
        "school" : "Udacity",
        "dates": "2017", 
        "url": "https://www.Udacity.com/",
        }
    ] ,
    display: function () {
        education.schools.forEach(function(school){
            $(".education-entry").append(HTMLschoolName.replace("%data%", school.name));
            $("a:last").append(HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry").append(HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry").append(HTMLschoolLocation.replace("%data%", school.location));
            school.majors.forEach(function(major){
                $(".education-entry").append(HTMLschoolMajor.replace("%data%", major));
            });
        });
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        education.onlineCourses.forEach(function(course) {
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title));
            $("a:last").append(HTMLonlineSchool.replace("%data%", course.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
        });
    }
};

bio.display();

$("#workExperience").append(HTMLworkStart);
work.display();
        $("#projects").append(HTMLprojectStart);
projects.display();

$("#education").append(HTMLschoolStart);
education.display();

//$("#mapDiv").append(internationalizeButton);
$("#mapDiv").append(googleMap);


