// script.js

document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get search inputs
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("job-role").value;

    // Perform search (dummy candidates for demonstration)
    var candidates = [
      {
        name: "vishnu tamatta",
        location: "india",
        jobRole: "Software Engineer",
      },
      { name: "rohan", location: "London", jobRole: "Product Manager" },
      {
        name: "Mark Johnson",
        location: "San Francisco",
        jobRole: "Data Scientist",
      },
      // Add more candidates here
    ];

    // Filter candidates based on search inputs
    var filteredCandidates = candidates.filter(function (candidate) {
      return (
        candidate.location.toLowerCase() === location.toLowerCase() &&
        candidate.jobRole.toLowerCase() === jobRole.toLowerCase()
      );
    });

    // Generate HTML for candidate list
    var candidatesHTML = "";
    if (filteredCandidates.length > 0) {
      filteredCandidates.forEach(function (candidate) {
        candidatesHTML +=
          "<div class='candidate'>" +
          "<h3>" +
          candidate.name +
          "</h3>" +
          "<p><strong>Location:</strong> " +
          candidate.location +
          "</p>" +
          "<p><strong>Job Role:</strong> " +
          candidate.jobRole +
          "</p>" +
          "</div>";
      });
    } else {
      candidatesHTML = "<p>No candidates found.</p>";
    }

    // Update candidates list section
    document.getElementById("candidates-list").innerHTML = candidatesHTML;
  });

// Function to rank a candidate (dummy implementation)
function rankCandidate(candidateName) {
  // Dummy ranking logic
  var rankingList = document.getElementById("ranking-list");
  var listItem = document.createElement("li");
  listItem.textContent = candidateName;
  rankingList.appendChild(listItem);
}

