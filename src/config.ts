export const siteConfig = {
    name: "Edward Owens",
    title: "Principal AI Data Scientist & Full Stack developer",
    description: "Portfolio website of Edward Owens",
    accentColor: "#1d4ed8",
    social: {
        email: "edwowe99@gmail.com",
        linkedin: "https://www.linkedin.com/in/edward-p-owens/",
        github: "https://github.com/edwowe99",
    },
    aboutMe:
        "I'm a Princiapl Data Scientist, leading on innovative applications of GenAI in government. I'm currently working for Department for Education, aiming to deliver savings and improve data quality using Agentic LLMs. I have full stack development skills and outside of work I am currently developing a line-learning app for actors. When not sat behind a computer I can be found playing the piano 🎹 or running 🏃‍♂️.",
    skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
    projects: [    {
      name: "Magic Meals",
      description:
        "Use AI to generate your weekly meal plan, with a quick one line prompt.\n\nA project I worked on to learn how to deploy a website, implement user authentication and  stripe payments.",
      link: "https://magic-meals.com/",
      skills: ["OpenAI", "React", "JavaScript", "MUI", "Python", "Django", "Firebase", "Stripe"],
    },],
    experience: [
        {
            company: "Department for Education",
            title: "Principal Data Scientist",
            dateRange: "Nov 2024 - Present",
            bullets: [
                "Led development of AI consultation and survey analysis, saving ~£50k per month on contracted thematic analysis.",
                "Leading on agentic AI enquiries automation, targetting FTE saving by automating call summarisation, CRM ticket triaging and response drafting.",
                "Line managing team of 2x Senior Data Scientists and 2x Data Scientists",
                ],
            expanded: true
            },
            {
            company: "Department for Education",
            title: "Senior Data Scientist - Children's Social Care",
            dateRange: "July 2023 - Nov 2024",
            bullets: [
                "Full stack development into production of an innovative 'Children\'s Social Care AI', an agentic LLM assistant that could answer natural language statistics questions using RAG and function calling.",
                "Distribution of a multi-billion pound funding settlement to Local Authorities for Children and Young Person's services, using a child-level, needs based, hierarchical regression model.",
            ],
            },
            {
            company: "Valuation Office Agency",
            title: "Senior Analyst",
            dateRange: "September 2022 - July 2023",
            bullets: [
                "Improved predictive power of an Automated Valuation Model model used to value properties in Wales for Council Tax bandings by Leading on “comparables” workstream",
                "Transformed a key function of the business by delivering Comparable Selection Tool, a web app that centralised data and streamlined the valuation process",
            ],
            },
            {
            company: "University of Bath",
            title: "Undergraduate Mathematics Tutor",
            dateRange: "September 2021 - May 2022",
            bullets: [
                "Taught python fundamentals to 1st year undergraduate Maths students",
                ],
            },
            {
            company: "Valuation Office Agency",
            title: "GORS Placement Analyst",
            dateRange: "July 2020 - August 2021",
            bullets: [
                "Increased address matching for Robotics Automation of Estates evaluation",
                "VBA solution to triage emails, allocate to agents and automated data flow to a Power BI monitoring dashboard."
                ],
            },
            {
            company: "Flatmatch",
            title: "Software Developer",
            dateRange: "February 2020 - December 2020",
            bullets: [
                "Backend and Frontend web development for an early stage proptech startup company",
                "Integration of Google Maps API, to display walking times to nearby stations and schools",
                "Designed and implemented an algorithm to match potential tenants based on personality factors"
                ],
            },

    ],
    education: [
        {
        school: "University of Bath",
        degree: "Mathematical Sciences (BSc)",
        dateRange: "2018 - 2022",
        achievements: [
            "Graduated with 1st class Honours ",
            "Programme average of 77%",
            "Modules included AI, Computer Vision, Applied Statistics, Bayesian Stastics, Corporate Finance",
        ],
        },
    ],
    blog: {
      // Blog config
        blogTitle: "Blog",
        blogDescription: "I share my thoughts and write articles on Medium.",
        blogUrl: "https://medium.com/@edwardowens_75290",
        blogFeedUrl: "https://medium.com/feed/@edwardowens_75290",
    }   
}