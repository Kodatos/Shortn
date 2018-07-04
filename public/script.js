document.getElementById("shorten").onclick = async function() {
  let url = document.getElementById("urlInput").value;
  try {
    const response = await fetch("/addURL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url })
    });
    if (response.status === 200) {
      const message = document.getElementById("message");
      message.style.display = "inline-block";
      let messageJSON = await response.json();
      message.textContent = "http://localhost:8190/" + messageJSON.shortID;
    } else if (response.status === 400) {
      const message = document.getElementById("message");
      message.style.display = "inline-block";
      message.textContent = "Please Enter a Valid URL!!!";
    }
  } catch (err) {
    console.log(err.message);
  }
};
