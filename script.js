document.addEventListener('DOMContentLoaded', function () { 

    // Smooth scrolling for navigation links 

    const navLinks = document.querySelectorAll('nav ul li a'); 

  

    navLinks.forEach(link => { 

        link.addEventListener('click', function (e) { 

            if (this.hash !== '') { 

                e.preventDefault(); 

                const targetId = this.hash.substring(1); 

                const targetElement = document.getElementById(targetId); 

  

                window.scrollTo({ 

                    top: targetElement.offsetTop, 

                    behavior: 'smooth' 

                }); 

  

                // Update the URL hash without jumping 

                history.pushState(null, null, this.hash); 

            } 

        }); 

    }); 

  

    // Highlight current section in navigation 

    const sections = document.querySelectorAll('section'); 

    const navListItems = document.querySelectorAll('nav ul li a'); 

  

    window.addEventListener('scroll', () => { 

        let current = ''; 

  

        sections.forEach(section => { 

            const sectionTop = section.offsetTop; 

            if (pageYOffset >= sectionTop - 50) { 

                current = section.getAttribute('id'); 

            } 

        }); 

  

        navListItems.forEach(li => { 

            li.classList.remove('active'); 

            if (li.hash.substring(1) === current) { 

                li.classList.add('active'); 

            } 

        }); 

    }); 

}); 

 