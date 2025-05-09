
function showReadme(){

    const readmeText = document.getElementById("readme_text");
  
    readmeText.classList.toggle("show");
  
  };
  
  function hideReadme(){
  
      const readmeText = document.getElementById("readme_text");
     
      readmeText.classList.toggle("show");
};


function showReadmeTwo(buchnummer) {


  const popUpListe = document.querySelectorAll(".PopUp");

  console.log(buchnummer)
  popUpListe[buchnummer].style.opacity = 1;

  }



  function hideReadmeTwo(buchnummer) {


    const popUpListe = document.querySelectorAll(".PopUp");
    
    console.log(buchnummer)
    popUpListe[buchnummer].style.opacity = 0;
  
    }