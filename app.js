
function populateSkills() {
  const skillsList = [
    { name: "Python, Pyramid, Django", level: "Expert", percentage: 90 },
    { name: "Java, Ruby, PHP, Perl, Shell", level: "Competent", percentage: 60 },
    { name: "Javascript, Typescript", level: "Advanced", percentage: 80 },
    { name: "React/Redux", level: "Advanced", percentage: 80 },
    { name: "Terraform, Ansible", level: "Proficient", percentage: 65 },
    { name: "Docker, Kubernetes", level: "Competent", percentage: 55 },
    { name: "ArgoCD, Github Action", level: "Beginner", percentage: 40 },
    { name: "GitHub Actions", level: "Beginner", percentage: 35 },
    { name: "Git, Jira, Agile/Scrum", level: "Expert", percentage: 90 },
    { name: "Splunk/SignalFX", level: "Proficient", percentage: 75 },
    { name: "SQL", level: "Proficient", percentage: 75 },
    { name: "Apache Kafka, OpenSearch", level: "competent", percentage: 55 },
    { name: "MySQL, PostgreSQL", level: "competent", percentage: 55 },
    { name: "MongoDB", level: "beginner", percentage: 30 },
  ]
  const skillsContainer = document.querySelector(".skills-list");
  const skills = skillsList.map(skill => ((`
    ${skill.name}
    <div class="skill-outer-wrapper">
      <div class="skill-inner-wrapper teal" style="width:${skill.percentage}%;">
        ${skill.level}
      </div>
    </div>`
  )));
  skillsContainer.innerHTML = skills.join("");
}

populateSkills();
