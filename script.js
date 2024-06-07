document.addEventListener('DOMContentLoaded', function () { 

    // Smooth scrolling for navigation links 

    const navLinks = document.querySelectorAll('nav ul li a'); 

  

    navLinks.forEach(link => { 

        link.addEventListener('click', function (e) { 

            // Only apply smooth scroll for links with a hash 

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

    const navListItems = document.querySelectorAll('nav ul li'); 

  

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

            if (li.querySelector('a').hash.substring(1) === current) { 

                li.classList.add('active'); 

            } 

        }); 

    }); 

  

    // More interactive features can be added here 

}); 

 