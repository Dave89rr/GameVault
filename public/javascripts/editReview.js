const editBtns = document.querySelectorAll('.edit-btn');
// console.log(editBtns)

for (let i = 0; i < editBtns.length; i++) {
    const btn = editBtns[i];
    btn.addEventListener('click', (e) => {
        // console.log('hello from edit button')
        const reviewId = e.target.id.split('-')[2];
        const editReview = document.getElementById(`edit-form-review-${reviewId}`)

        // console.log(editReview)
        if (editReview.classList.contains('hidden')) {
            editReview.classList.remove('hidden')
        } else {
            editReview.classList.add('hidden')
        }

        const submitBtn = document.getElementById(`edit-submit-${reviewId}`)
        submitBtn.addEventListener('click', async (submitEvent) => {
            submitEvent.preventDefault();
            const content = document.getElementById(`${reviewId}-edit-content`).value;
            const url = window.location.pathname;
            const gameId = url.split('/')[2];
            const fetchUrl = `/games/${gameId}/reviews/${reviewId}`
            // console.log(content);

            const res = await fetch(fetchUrl, {
                method: 'put',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ content: content })
            })

            const data = await res.json();
            console.log(data)
            if (data.message === 'edit successful') {
                const reviewContainer = document.getElementById(`review-container-${reviewId}`)
                // console.log(reviewContainer)
                reviewContainer.innerHTML = `
                <p>${data.user.username} rated <span>${data.review.stars}<span></p>
                <p>${data.review.content}</p>
                `
            }
        })

    })
}
