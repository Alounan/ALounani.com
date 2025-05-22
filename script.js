document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const whoIsOunaniBtn = document.getElementById('whoIsOunaniBtn');
  const ounaniInfo = document.getElementById('ounaniInfo');
  const ounaniDescription = document.getElementById('ounaniDescription');
  const commentForm = document.getElementById('commentForm');
  const commentsList = document.getElementById('commentsList');

  learnMoreBtn.addEventListener('click', () => {
    alert('Here is more information about Ounani.');
  });

  whoIsOunaniBtn.addEventListener('click', () => {
    ounaniDescription.textContent =
      'Ounani is a remarkable individual known for his contributions to the community.';
    ounaniInfo.classList.remove('hidden');
  });

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (username && comment) {
      const commentDiv = document.createElement('div');
      commentDiv.innerHTML = `<strong>${username}:</strong> ${comment}`;
      commentsList.appendChild(commentDiv);
      commentForm.reset();
    }
  });
});
