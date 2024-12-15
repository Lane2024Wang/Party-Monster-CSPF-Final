let isRotating = false;  
let rotationTimeout = null;  

 
let hoverAnimationTimeout = null; 
let circleTimeout = null;  

function setupRectangles(containerId, rectanglesConfig) {
    const container = document.getElementById(containerId);

     
    const hoverCircle = document.createElement('div');
    hoverCircle.id = 'hover-circle';

     
    const hoverImage = document.createElement('img');
    hoverCircle.appendChild(hoverImage);
    container.parentElement.appendChild(hoverCircle);

     
    document.addEventListener('DOMContentLoaded', () => {
        const hoverCircle = document.getElementById('hover-circle');
        hoverCircle.classList.add('rotating');  
    });

     
    rectanglesConfig.forEach((config, index) => {
         
        const rectangle = document.createElement('div');
        rectangle.className = 'rectangle';
        rectangle.setAttribute('data-title', config.title);
        rectangle.setAttribute('data-desc', config.desc);
        rectangle.setAttribute('data-img-index', config.imgIndex);  

         
        rectangle.style.bottom = '-25px';
        rectangle.style.height = `${(index + 2) * 5 + 125}px`;  
        rectangle.style.right = `${index * 25 + 60}px`;  
        rectangle.style.zIndex = `${100 - index}`;  
        hoverCircle.style.right = '850px';

         
        const descriptionBox = document.createElement('div');
        descriptionBox.className = 'description-box';
        descriptionBox.textContent = config.desc;
        rectangle.appendChild(descriptionBox);

         
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
         
        imageContainer.style.overflow = 'hidden';  
        imageContainer.style.top = '0';  
        imageContainer.style.display = 'flex';
        imageContainer.style.flexDirection = 'column';  
        imageContainer.style.gap = '10px';  
        imageContainer.style.padding = '0px';  
         
        const folderName = `folder${index + 1}`;  
        for (let i = 1; i <= config.imgCount; i++) { 
            const img = document.createElement('img');
            img.src = `${folderName}/${i}.jpg`;  
            img.alt = `${config.title} - Image ${i}`;
            img.style.left = '25px';
            img.style.right = '25px';
            img.style.height = 'auto';  
            imageContainer.appendChild(img);   
        }
         
        rectangle.appendChild(imageContainer);

         
        rectangle.addEventListener('mouseenter', () => {

            rectangle.style.height = `${(index) * 5 + 700}px`;  
            descriptionBox.style.opacity = '1';  
            imageContainer.style.overflowY = 'scroll';  

            circleTimeout = setTimeout(() => {
                hoverCircle.style.right = '200px';  
                hoverCircle.style.opacity = '1';  
                hoverImage.src = `image${config.imgIndex}.jpg`;  
            }, 100);  
        });

        rectangle.addEventListener('mouseleave', () => {
            rectangle.style.height = `${(index + 2) * 5 + 125}px`;  
            descriptionBox.style.opacity = '0';  
            imageContainer.style.overflowY = 'hidden';  
            hoverCircle.style.right = '700px'; 

        });

        descriptionBox.addEventListener('mouseenter', () => {
             
            let infoBox = document.getElementById('info-box');
            if (!infoBox) {
                 
                infoBox = document.createElement('div');
                infoBox.id = 'info-box';
                infoBox.textContent = config.infoText;  
        
                 
                const outerContainer = document.getElementById('outer-container');
                outerContainer.appendChild(infoBox);
        
                 
                setTimeout(() => {
                    infoBox.classList.add('active');
                }, 0);
            }
        });
        
        descriptionBox.addEventListener('mouseleave', () => {
            const infoBox = document.getElementById('info-box');
            if (infoBox) {
                 
                infoBox.classList.remove('active');
        
                 
                setTimeout(() => {
                    if (infoBox.parentNode) {
                        infoBox.parentNode.removeChild(infoBox);
                    }
                }, 300);  
            }
        });
        

         
        container.appendChild(rectangle);
    });
}

function addElementsToOuterContainer() {
    const outerContainer = document.getElementById('outer-container');

     
    const topRightBox = document.createElement('div');
    topRightBox.id = 'top-right-box';
    topRightBox.textContent = 'Lane\nWang';  
    outerContainer.appendChild(topRightBox);

     
    const bottomRightBox = document.createElement('div');
    bottomRightBox.id = 'bottom-right-box';

     
    const img = document.createElement('img');
    img.src = 'title.png';  
    img.alt = 'Description';  
    bottomRightBox.appendChild(img);

     
    outerContainer.appendChild(bottomRightBox);
}

 
addElementsToOuterContainer();


 
const rectanglesConfig = [
    { title: 'Studio 54', 
        desc: 'In between 1977 and 1980, ...?', 
        imgIndex: 1, 
        imgCount: 3,
        infoText: 'By the late 1970s, the original nightclub had spurred the creation of Studio 54-themed jeans, a record label, an album, and a Japanese club. Architectural Digest magazine described Studio 54 as "the nightclub where the velvet rope was born", its impact evident long after the venue had been converted back to a theater. GQ magazine wrote in 2020: "When you want to designate a particular brand of louche elegance on a night-time scene, Studio 54 is the natural first port of comparative call."' 
    },
    
    { title: 'Palladium', 
        desc: 'In between 1985 and 1997, ...?', 
        imgIndex: 2, 
        imgCount: 10,
        infoText: "The Palladium was converted from a music venue into a nightclub by former Studio 54 owners Steve Rubell and Ian Schrager. They hired Danceteria DJ Richard Sweret, DJ Patrick Anastasi and DJ Luis Martinez who saw the possibility of a much larger audience for a downtown 'new wave music', Euro and house music-oriented club. Designed by architect Arata Isozaki, the Palladium featured commissioned art works by artists such as Keith Haring, Jean Michel Basquiat, and Francesco Clemente. "
    },

    { title: 'The Roxy', 
        desc: 'In between 1978 and 2007, ...?', 
        imgIndex: 3, 
        imgCount: 4,
        infoText: "Artists such as Madonna, Cher, Liza Minnelli, Chaka Khan, Donna Summer, Cyndi Lauper, Jorge Perez Evelyn,Grace Jones, Yoko Ono, LL Cool J, Lisa Marie Presley, Gloria Gaynor, and George Clinton and the P-Funk All-Stars all performed at the Roxy.The site of many 'dance floor tests' by recording artists, producers and remixers, the club's notoriously discerning, racially mixed clientele and cross cultural ethos was considered the ideal crowd to inspire on the dance floor."  
    },

    { title: 'The Tunnel', 
        desc: 'In between 1986 and 2001, ...?', 
        imgIndex: 4, 
        imgCount: 15, 
        infoText: 'Tunnel introduced young clubbers to talent including Danny Tenaglia, Jonny McGovern, and Cazwell (as Morplay). Renowned doorman Fernando Sarralha was the keeper of the velvet rope. While the club attracted primarily gay audiences, it also attracted members of the hip hop community. One advantage of the multiple rooms of the club was the ability to host different types of parties, with as many as five or more DJs spinning different styles of music to varying crowds.'
    },

    { title: 'Brilliant', 
        desc: 'In the 1990s, ...?', 
        imgIndex: 5, 
        imgCount: 6,
        infoText: "There was no hassle at the door. No dress code. No bottle service. Output was about the music. Soon after it opened in early 2013, the nightclub's come-as-you-are-attitude and world-class sound system earned it a loyal following and a global reputation. Output was Brooklyn's first fully-licensed venue dedicated to house and techno music. We asked readers to share their favorite memories of the club, some fans also sent images taken on the dance floor." 
    },

    { title: 'Irving Plaza', 
        desc: 'In between 1978 and 1988, ...?', 
        img: 'pomelo.jpg', 
        imgIndex: 6, 
        imgCount: 5,
        infoText: 'In 1978, the hall was converted to a rock music venue by future Peppermint Lounge promoters Tom Goodkind and Frank Roccio, who after a year began to share promotional efforts with a "Club 57" crew headed by Jane Friedman and Louis Tropia. Goodkind and Roccio brought in acts such as the B-52s, Talking Heads, the Ramones and, with Friedman and Tropia, a wealth of British bands, establishing the venue as a premier American location for punk and new wave.' 
    },

    { title: 'Building', 
        desc: 'In the 1990s, ...?', 
        imgIndex: 7, 
        imgCount: 4,
        infoText: "Once upon a time—1989, to be precise—in New York City, a nightclub called Building was born. Housed in a decommissioned Con Ed power station, the club was unlike anything else on the scene, the creation of a cast of players on the cutting edge of downtown nightlife.The club featured prominent House & Hip-Hop DJ's of the time. Artists such as De La Soul, A Tribe Called Quest, and Black Sheep all hosted parties there."
    },

    { title: 'Limelight', 
        desc: 'In between 1983 and 1998, ...?',  
        imgIndex: 8, 
        imgCount: 7,
        infoText: 'The New York Limelight originally started as a disco and rock club. In the 1990s, it became a prominent place to hear techno, goth, and industrial music. The club was attractive to the people of NYC because it was inclusive. Goths, drag queens, rockers, leather boys, and socialites could all be seen partying with each other in one night. There were approximately 15,000 people showing up to the Limelight per night. During this time, Gatien was named the Club King.'  
    },

    { title: 'Disco 2000*', 
        desc: 'Early 1990s in the Limelight, ...?', 
        imgIndex: 9, 
        imgCount: 6,
        infoText: "The artists who played in Limelight's Rock and Roll Church weren't exactly the Mormon Tabernacle Choir, either. Eichner shot a who's who of '90s stars from multiple genres: Fishbone, House of Pain, Madonna, TLC, Joe Strummer, Boy George, and RuPaul, to name a few. Meanwhile, over in the Limelight's Disco 2000, ravers dressed in outlandish drag dancing to throbbing beats also caught Eichner's eye as he wandered through the clubs colliding worlds, where anything could and did happen."
    },

    { title: 'Red Zone', 
        desc: 'In the 1990s, ...?', 
        imgIndex: 10, 
        imgCount: 7,
        infoText: "Red Zone was a well-known underground nightclub in New York City in the late 1980s and early 1990s. It was located at 440 W 54th St. and was known for its large crowds and parties featuring hip-hop and house music. The club was also known for attracting violence, including shootings, stabbings, drug feuds, and rap wars. The club featured master DJs like Dimitri (DeeLite), and Frankie Bones. They created Red Zone Remixes that played house beats through a large sound system." 
    },

    { title: 'Sound Factory', 
        desc: 'In between 1989 and 2004, ...?', 
        imgIndex: 11, 
        imgCount: 5,
        infoText: "“Sound Factory NYC is a temple. A place of worship for music, dance and good times.” -John Cain. I witnessed and was pivotal in one of Sound Factory NYC's rises and falls of the early 2000's.It was during my junior prom after party in 1999 that I attended experienced my first nightclub. A mega-club the size of a small city during its prime… Club Exit.Overwhelmed, ultra-stimulated and rolling face, I thought this whole “clubbing shit” was the pinnacle of human entertainment and pleasure."  
    },

    { title: "SOB's", 
        desc: 'From 1982 until Now, ...?',  
        imgIndex: 12, 
        imgCount: 3,
        infoText: "SOB's is a live world music venue and restaurant in the Hudson Square neighborhood of Manhattan. SOB.'s is an abbreviation of Sounds of Brazil. Larry Gold opened SOB's in June 1982 with the purpose of exposing the music of the Afro-Latino diaspora to as many people as possible. It has a standing capacity of 450, and a seating capacity of 160. In its early days, SOB's existed on a barren stretch at the corner of Varick Street and Houston Street, just above the Houston Street subway station."  
    },

    { title: 'Danceteria', 
        desc: 'In between 1980 and 1986, ...?', 
        imgIndex: 13,
        imgCount: 3,
        infoText: "A sensibility had been growing. It was punk and ironic; it was anti-conscriptive. We wanted to challenge people's expectations. I think Danceteria was a remarkable space, like Warhol's Factory or Max's Kansas City, or CBGBs. Jim Fouratt and Rudolf Piper had this amazing finesse to hire people that they believed in. Why were the Beastie Boys the cleaning crew? Why was Madonna one of the dancers? Why was Sade a bartender? You're talking about a magical moment, a magical space. — Mark Kamins"
    },

    { title: 'Maars', 
        desc: 'In Between 1989 and 1990, ...?', 
        imgIndex: 14, 
        imgCount: 10,
        infoText: "Mars Bar, located at the corner of East 1st Street and Second Avenue in New York City's East Village, was an iconic dive bar renowned for its gritty atmosphere and eclectic clientele. Established in the 1980s, it became a symbol of the neighborhood's punk rock heritage and countercultural spirit. The bar's interior was famously adorned with graffiti, reflecting the raw and unpolished character that patrons cherished."
    },

    { title: 'New Music Cafe', 
        desc: 'In the 1990s, ...?', 
        imgIndex: 15, 
        imgCount: 8,
        infoBox: "New Music Cafe, New York is one of more than 300 live performance venues listed in the Classic Posters Search by Venue Index. Each of the New Music Cafe concert posters, handbills, or other memorabilia items available at Classic Posters is described in detail; simply click the image to see the item detail page and all available information on that item, including the live concert or performance for which it was created, the artist who designed the artwork, as well as item availability, size, and condition details." 
    },
];

 
setupRectangles('container', rectanglesConfig);
