  const titles = [
    "Software Engineer",
    "Performance Advocate",
    "UX Design Enthusiast",
    "Civil Engineer ;)"
  ];
  const devEl = document.querySelector("#dev");
  let currentTitle = 0;

  setTimeout(() => {
    animate(titles[currentTitle]);
    currentTitle++;

    window.setInterval(() => {
      animate(titles[currentTitle]);
      currentTitle = currentTitle < titles.length - 1 ? currentTitle + 1 : 0;
    }, 4000);
  }, 1000);



  function animate(newTitle) {
    let letter = 1;
    const id = setInterval(() => {
      requestAnimationFrame(() => {
        devEl.innerHTML = newTitle.substr(0, letter);
        letter++;
        if (letter > newTitle.length) {
          clearInterval(id);
        }
      });
    }, 40);
  }
