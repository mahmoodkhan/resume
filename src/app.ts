// import './styles/main.scss';
import "./images.d.ts";
import "./styles/styles.css";
import 'font-awesome/css/font-awesome.min.css';
import me from "./assets/mk.jpeg";

type Skill = {
  name: string;
  level: string;
  percentage: number;
};

function populateSkills(): void {
  const skillsList: Skill[] = [
    { name: "Python, Pyramid, Django", level: "Expert", percentage: 90 },
    { name: "Java, Ruby, PHP, Perl, Shell", level: "Competent", percentage: 60 },
    { name: "Javascript, Typescript", level: "Advanced", percentage: 80 },
    { name: "React/Redux", level: "Advanced", percentage: 80 },
    { name: "GraphQL", level: "Competent", percentage: 60 },
    { name: "Terraform, Ansible", level: "Proficient", percentage: 65 },
    { name: "Docker, Kubernetes", level: "Competent", percentage: 55 },
    { name: "ArgoCD, Github Actions", level: "Beginner", percentage: 40 },
    { name: "Git, Jira, Agile/Scrum", level: "Expert", percentage: 90 },
    { name: "Splunk/SignalFX", level: "Proficient", percentage: 75 },
    { name: "SQL", level: "Proficient", percentage: 75 },
    { name: "Apache Kafka, OpenSearch", level: "competent", percentage: 55 },
    { name: "MySQL, PostgreSQL", level: "competent", percentage: 55 },
    { name: "MongoDB", level: "beginner", percentage: 30 },
    { name: "AWS Lambda/SNS/SQS/EC2", level: "competent", percentage: 40 },
  ];
  const skillsContainer: HTMLElement | null = document.querySelector(".skills-list");
  if (skillsContainer === null) {
    return;
  }
  const skills: string[] = skillsList.map(skill => ((`
    ${skill.name}
    <div class="skill-outer-wrapper">
      <div class="skill-inner-wrapper teal" style="width:${skill.percentage}%;">
        ${skill.level}
      </div>
    </div>`
  )));
  skillsContainer.innerHTML = skills.join("");
}

const myPicImgTag: HTMLImageElement | null = <HTMLImageElement>document.getElementById("myPic");
if (myPicImgTag !== null) {
  myPicImgTag.src = me;
}

populateSkills();
