function revealSections(){

    document.querySelectorAll('.animated-section').forEach(section=>{
    
    const rect=section.getBoundingClientRect();
    
    if(rect.top < window.innerHeight - 80){
    section.classList.add('visible');
    }
    
    });
    
    }
    
    window.addEventListener("scroll",revealSections);
    
    window.addEventListener("load",revealSections);