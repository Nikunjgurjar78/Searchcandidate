function searchCandidates() {
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("jobRole").value;
  
  
    var candidates = [
      { name: "Candidate 1", location: "City 1", role: "Role 1" },
      { name: "Candidate 2", location: "City 2", role: "Role 2" },
      { name: "Candidate 3", location: "City 3", role: "Role 3" },
     
    ];
  
    var candidateList = document.getElementById("candidateList");
    candidateList.innerHTML = "";
  
    // Display the fetched candidates
    candidates.forEach(function(candidate) {
      var listItem = document.createElement("li");
      listItem.className = "candidate";
      listItem.innerHTML = `<strong>${candidate.name}</strong><br>
                            Location: ${candidate.location}<br>
                            Role: ${candidate.role}`;
  
      candidateList.appendChild(listItem);
    });
  }
  