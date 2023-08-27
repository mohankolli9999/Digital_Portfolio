import mathgpt from "../../images/Malware.jpeg";
import mlmvpproject from "../../images/keysec.jpeg";
import kruskalmaze from "../../images/nessus.png"


const projects = [
    {
        name: "R&D Project",
        skills: "Google Colab, Bagging, Boosting, Random Forest",
        description: [
            "• Malware Detection using deep learning and ensemble learning models like CNN and Randomforest",
            "• Developed a model that predicts the probability of a file being malware based on its interactions with HPC's(Hardware Performance Counters) using the Bagging, Boosting, and Random Forest algorithms",
            "• We achieved a maximum accuracy of 99.8% on the test set and 99.9% on the training set in few combinations when CNN and Randomforest are ensembled",
        ],
        img: mathgpt,
        ghlink: "https://colab.research.google.com/drive/1O10OV0HXsKGpwicyt9zubIGf8JGUy_eL?usp=sharing",
    },
    {
        name: "Keysec",
        skills: "React,Javascript, Express, Node.js, MongoDB, HTML, CSS",
        description: [
            "• Developed an Webapplication that verifies the authenticity of the user by using their typing pattern",
            "• Integrated TypingDNA API to capture the typing pattern of the user and store it in the database",
        ],
        img: mlmvpproject,
        ghlink: "",
        gcollab: "",
    },
    {
        name: "Nessus Lab",
        skills: "Nessus",
        description: [
            "• Installed and configured Nessus on host machine",
            "• Created a windows virtualmachine and performed a vulnerability scan on it using Nessus",
            "• Created a VAPT report and submitted it to the professor",

        ],
        img: kruskalmaze,
        ghlink: "",
    },

]

export default projects;