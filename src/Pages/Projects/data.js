class Project {
    constructor(title,description,websiteLink,repoLink){
        this.title = title
        this.description = description
        this.websiteLink = websiteLink
        this.repoLink = repoLink
    }
}

export const projectData = [
   new Project("Project 1", "It was dope", "www.google.com", "www.reddit.com"),
   new Project("Project 2", "It was cool", "www.google.com", "www.reddit.com"),
   new Project("Project 3", "It was bad", "www.google.com", "www.reddit.com"),
   new Project("Code Quiz", "Javascript code exercise", "www.codequiz.com", "www.github.com/drew")
]