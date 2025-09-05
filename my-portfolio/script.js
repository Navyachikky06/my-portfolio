
const projects = [
  {
    title: "Mini Project - Age and Gender Detection from Facial Images using CNN",
    description:
      "Developed a convolutional neural network model to predict age and gender from facial images, improving classification accuracy using advanced preprocessing and training techniques."
  },
  {
    title: "Real Time Project - Mental Health and Well-being Surveillance and Tracking Solution among Children",
    description:
      "Designed and implemented a system for monitoring and tracking children's mental health indicators in real time, integrating AI-based sentiment analysis and well-being assessments."
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  projectDiv.appendChild(title);
  projectDiv.appendChild(description);
  projectList.appendChild(projectDiv);
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! I’ll get back to you soon.");
});