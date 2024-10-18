document.addEventListener('DOMContentLoaded', function() {
    const candidateSelect = document.getElementById('candidate');
    const voteTally = {};
    const voterRecords = new Set(); // To track voters who have already voted

    // Generate more than 100 candidates
    for (let i = 1; i <= 100; i++) {
        const option = document.createElement('option');
        option.value = `candidate${i}`;
        option.textContent = `Candidate ${i}`;
        candidateSelect.appendChild(option);
        voteTally[`candidate${i}`] = 0; // Initialize vote count for each candidate
    }

    document.getElementById('voting-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the form data
        const voterId = document.getElementById('voter-id').value;
        const candidate = document.getElementById('candidate').value;

        // Check if the voter has already voted
        if (voterRecords.has(voterId)) {
            alert('You have already voted.');
            return;
        }

        // Record the voter's vote
        voterRecords.add(voterId);

        // Simulate a blockchain interaction and update vote tally
        simulateBlockchainVote(voterId, candidate);
    });

    function simulateBlockchainVote(voterId, candidate) {
        // Simulate a delay for blockchain transaction
        setTimeout(() => {
            // Update the vote tally
            voteTally[candidate]++;
            updateVoteTally();

            // Update the status message
            const statusMessage = document.getElementById('status-message');
            statusMessage.textContent = `Vote submitted successfully! Voter ID: ${voterId}, Candidate: ${candidate}`;
        }, 2000);
    }

    function updateVoteTally() {
        const voteTallyList = document.getElementById('vote-tally');
        voteTallyList.innerHTML = ''; // Clear the existing list

        for (const [candidate, votes] of Object.entries(voteTally)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${candidate}: ${votes} vote(s)`;
            voteTallyList.appendChild(listItem);
        }
    }
});
