// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "What I&#39;ve been up to these past few years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-bubble-factory-vertical-slice-part-2-ui-and-buildings",
        
          title: "Bubble factory vertical slice part 2, UI and buildings",
        
        description: "Creating a UI for the vertical slice and setting up buildings",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/devlog-bubble-3/";
          
        },
      },{id: "post-bubble-factory-vertical-slice",
        
          title: "Bubble factory vertical slice",
        
        description: "Building vertical slice for the basic game area",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/devlog-bubble-2/";
          
        },
      },{id: "post-introducing-my-game-bubble-factory",
        
          title: "Introducing my game Bubble factory",
        
        description: "Design of video game centered around bubble production",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/devlog-bubble-1/";
          
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/jjwasyl", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6A%77%61%73%79%6C.%6C%6F%6E%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jwasylkowski", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
