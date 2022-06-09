document.getElementById("postReview")
        .addEventListener('click', async (e) => {
            e.preventDefault();
            const url = window.location.pathname;
            //console.log(url)
            const gameId = url.split('/')[2];
            const content = document.getElementById('content').value;
            //console.log(content);
            const jsonBody = JSON.stringify({ content });
            const catchResponse = await fetch(`${url}/reviews`, {
                method: "post",
                headers: { "Content-Type":"application/json"},
                body: jsonBody
            });
            //console.log(catchResponse)

            const data = await catchResponse.json()
            //console.log(data);
            if (data.message === 'review ok') {
                const indReview = document.createElement('div');
                indReview.setAttribute('class', 'ind-review');
                indReview.innerHTML = `
                <p>${data.user.username} rated <span>${data.review.stars}<span></p>
                <p>${data.review.content}</p>
                `
                const ul = document.querySelector('ul');
                ul.appendChild(indReview)
            }
        })