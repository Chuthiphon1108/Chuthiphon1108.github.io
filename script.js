let noClickCount = 0;

function changeImage(newSrc) {
  const mainImage = document.getElementById("mainImage");
  console.log("Changing image to:", newSrc);
  mainImage.src = newSrc;
  if (newSrc === "wrong-answer.png" || newSrc === "wrong-again.png" || newSrc === "stop-teasing.png" || newSrc === "sad.png" || newSrc === "pleading.png") {
    mainImage.style.width = "80%";
  } else {
    mainImage.style.width = "";
  }
}

function resetImage() {
  if (noClickCount === 0) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = "doyou.png";
    mainImage.style.width = "";
  }
}

function handleNoClick() {
  noClickCount++;

  if (noClickCount === 1) {
    document.getElementById("mainTitle").textContent = "ไม่ใช่ล่ะ ตอบใหม่!";
    changeImage("wrong-answer.png");
    document.getElementById("noButton").removeAttribute("onmouseover");
    document.getElementById("loveButton").removeAttribute("onmouseover");
  }
  else if (noClickCount === 2) {
    document.getElementById("mainTitle").textContent = "แน้ะ ยังกดผิดอีก!";
    changeImage("wrong-again.png");
  }
  else if (noClickCount === 3) {
    document.getElementById("mainTitle").textContent = "เอาดีๆสิคุณ อย่าแกล้ง!!";
    changeImage("stop-teasing.png");
  }
  else if (noClickCount === 4) {
    document.getElementById("mainTitle").textContent = "จางอนแย้ว:-;";
    changeImage("sad.png");
  }
  else if (noClickCount === 5) {
    document.getElementById("mainTitle").textContent = "ชอบยางน้า<3";
    changeImage("pleading.png");
    const noButton = document.getElementById("noButton");
    if (noButton) {
      noButton.remove();
    }
    const loveButton = document.getElementById("loveButton");
    if (loveButton) {
      loveButton.classList.add("centered-love-button");
    }
  }

  if (noClickCount < 10 && noClickCount < 5) {
    shrinkNoButton();
    moveNoButton();
  } else if (noClickCount >= 10) {
    showPage("noPage");
  }
}

function shrinkNoButton() {
  const noButton = document.getElementById("noButton");
  if (noButton) {
    const currentPadding = parseFloat(getComputedStyle(noButton).padding);
    const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    noButton.style.padding = `${currentPadding * 0.9}px`;
    noButton.style.fontSize = `${currentFontSize * 0.9}px`;
  }
}

function moveNoButton() {
  const noButton = document.getElementById("noButton");
  if (noButton) {
    const container = noButton.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    const maxLeft = containerRect.width - buttonRect.width;
    const maxTop = containerRect.height - buttonRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;
    noButton.style.position = "absolute";
    noButton.style.left = `${randomLeft}px`;
    noButton.style.top = `${randomTop}px`;
  }
}

function showPage(pageId) {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("lovePage").classList.add("hidden");
  document.getElementById("noPage").classList.add("hidden");
  document.getElementById("finalPage").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}

function handleYayClick() {
  // เปลี่ยนข้อความและรูปเมื่อกดปุ่ม "เย่"
  document.getElementById("loveTitle").textContent = "เย่! ใครน้าน่ารักจาง<3";
  const loveImage = document.getElementById("loveImage");
  loveImage.src = "yay.png";
  loveImage.alt = "Yay!";
  loveImage.style.width = "25%"; // ย่อขนาดรูป yay.png
  // ลบปุ่ม "เย่" ออก
  const yayButton = document.getElementById("yayButton");
  if (yayButton) {
    yayButton.remove();
  }
  // เพิ่มปุ่ม "ต่อไป" ด้วย JavaScript
  const lovePage = document.getElementById("lovePage");
  const nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  nextButton.className = "button next-button";
  nextButton.textContent = "ต่อไป";
  nextButton.onclick = () => showPage("finalPage");
  lovePage.appendChild(nextButton);
}