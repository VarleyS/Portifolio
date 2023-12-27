const hardSkills = [
    {
      alt: "angular",
      height: 60,
      width: 60,
      src: "https://miro.medium.com/max/256/1*3H6_a9Srb655m3NiqlbbKQ.png",
      "data-aos": "fade-down",
      "data-aos-delay": 50
    },
    {
      alt: "Js",
      height: 50,
      width: 50,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
      "data-aos": "fade-down",
      "data-aos-delay": 100
    },
    {
      alt: "Js",
      height: 50,
      width: 50,
      src: "https://miro.medium.com/max/256/1*tYwniVWMqcytJ1AQ6zud7A.png",
      "data-aos": "fade-down",
      "data-aos-delay": 150
    },
    {
      alt: "HTML",
      height: 50,
      width: 50,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "data-aos": "fade-down",
      "data-aos-delay": 200
    },
    {
      alt: "CSS",
      height: 50,
      width: 50,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "data-aos": "fade-down",
      "data-aos-delay": 250
    },
    {
      alt: "Sass",
      height: 50,
      width: 50,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      "data-aos": "fade-down",
      "data-aos-delay": 300
    },
    {
      alt: "Bootstrap",
      height: 50,
      width: 50,
      src: "https://logospng.org/download/bootstrap/bootstrap-256.png",
      "data-aos": "fade-down",
      "data-aos-delay": 350
    },
    {
      alt: "Git",
      height: 50,
      width: 50,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "data-aos": "fade-down",
      "data-aos-delay": 400
    },
    {
      alt: "GitHub",
      height: 50,
      width: 50,
      src: "https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png",
      "data-aos": "fade-down",
      "data-aos-delay": 450
    },
    {
      alt: "CSharp",
      height: 50,
      width: 50,
      src: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
      "data-aos": "fade-down",
      "data-aos-delay": 500
    },
    {
      alt: "dotNet",
      height: 50,
      width: 50,
      src: "https://adrianwilczynski.gallerycdn.vsassets.io/extensions/adrianwilczynski/asp-net-core-snippet-pack/1.51.0/1586892181474/Microsoft.VisualStudio.Services.Icons.Default",
      "data-aos": "fade-down",
      "data-aos-delay": 550
    },
    {
      alt: "sql",
      height: 50,
      width: 50,
      src: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png",
      "data-aos": "fade-down",
      "data-aos-delay": 600
    },
    {
      alt: "scrum",
      height: 50,
      width: 50,
      src: "https://cdn-icons-png.flaticon.com/512/5108/5108922.png",
      "data-aos": "fade-down",
      "data-aos-delay": 650
    },
    {
      alt: "mysql",
      height: 50,
      width: 50,
      src: "https://cdn-icons-png.flaticon.com/512/1199/1199128.png",
      "data-aos": "fade-down",
      "data-aos-delay": 700
    },
    {
      alt: "react",
      height: 45,
      width: 45,
      src: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
      "data-aos": "fade-down",
      "data-aos-delay": 750
    },
    {
      alt: "styled-component",
      height: 45,
      width: 45,
      src: "https://blog.kakaocdn.net/dn/lkkIW/btqOc9QpJAQ/jR9kpyjrRSEW1RonVFrA7K/img.png",
      "data-aos": "fade-down",
      "data-aos-delay": 800
    },
    {
      alt: "storybook",
      height: 45,
      width: 45,
      src: "https://www.figma.com/community/plugin/1056265616080331589/icon",
      "data-aos": "fade-down",
      "data-aos-delay": 850
    }
  ];
  
  const imageContainer = document.querySelector(".hard-area");
  
    // Itera sobre a lista de imagens e cria elementos img
    hardSkills.forEach((imageInfo) => {
      const img = document.createElement("img");
      img.setAttribute("align", "center");
      img.setAttribute("alt", imageInfo.alt);
      img.setAttribute("height", imageInfo.height);
      img.setAttribute("width", imageInfo.width);
      img.setAttribute("src", imageInfo.src);
      img.setAttribute("data-aos", imageInfo["data-aos"]);
      img.setAttribute("data-aos-delay", imageInfo["data-aos-delay"]);
  
      // Adiciona a imagem à div
      imageContainer.appendChild(img);
    });