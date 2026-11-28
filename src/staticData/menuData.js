let menuItems = [
    {
        panelOneHeading:"Home",
        link:'/'
    },
    {
        panelOneHeading:"Business to Business",
        id:1,
        dropdownItems:[
            {
                label:"Design Studio India",
                link:"/business-to-business/design-studio-india",
            },
            {
                label:"Design Studio Asia",
                link:'/business-to-business/design-studio-asia',
            }
        ]
    },
    {
        panelOneHeading:"Direct to Consumer",
        id:2,
        dropdownItems:[
            {
                label:"Aneka",
                link:'/direct-to-consumer/aneka',
            },
            {
                label:"Unsaid",
                link:'/direct-to-consumer/unsaid',
            },
        ]
    },
    {
        panelOneHeading:"Our Story",
        link:"/our-story",
    },
    {
        panelOneHeading:"Creative Process",
        link:"/creative-process/design-and-craftmanship",
    },
    {
        panelOneHeading:"Sustainability",
        id:4,
        dropdownItems:[
            {
                label:"Responsibility",
                link:"/our-story/responsiblity",
            },
            {
                label:"Compliance",
                link:"/Walking Tree Group -  Ethical Business Policies.pdf",
                download:true,
            },
        ]
    },
    {
        panelOneHeading:"People",
        id:3,
        dropdownItems:[
            {
                label:"Careers",
                link:"/people",
            },
            {
                label:"Internships",
                link:"/people/internship",
            },
            {
                label:"Internal Mobility",
                link:"/people/mobility",
            },
            {
                label:"Young Leadership",
                link:"/people/young-leadership",
            },
            {
                label:"See openings",
                link:"/people/job-openings/design-lead",
            },
        ]
    },
    {
        panelOneHeading:"Contact Us",
        link:"/contact-us",
    }
]

module.exports = {
    menuItems,
}