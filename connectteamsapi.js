// API endpoint URL
const apiUrl = "https://outlook.office.com/api/v2.0/me/events";

// Get data from API
async function getEvents() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Display events on the page
async function displayEvents() {
  const events = await getEvents();

  const eventsContainer = document.getElementById("eventsContainer");
  events.value.forEach((event) => {
    const eventContainer = document.createElement("div");
    eventContainer.classList.add("event");

    const subject = document.createElement("h3");
    subject.textContent = event.Subject;
    eventContainer.appendChild(subject);

    const start = document.createElement("p");
    start.textContent = new Date(event.Start).toLocaleString();
    eventContainer.appendChild(start);

    const end = document.createElement("p");
    end.textContent = new Date(event.End).toLocaleString();
    eventContainer.appendChild(end);

    eventsContainer.appendChild(eventContainer);
  });
}

displayEvents();
