new Vue(
{
    el: '#app',
    data: {
        dog: ['./DogProfile.png',],
    },

    created() {
        this.loadDog();
    },

    methods: {
        loadDog () {
            fetch('https://random.dog/woof.json?include=jpg,png,gif,jpeg')
                .then(response => {
                        if (response.status !== 200) {
                            console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                            return;
                        }

                        response.json().then(data => {
                            this.dog = data.url;
                        });
                    }
                )
                .catch(error => {
                    console.log('Fetch Error :-S', error);
                });
        }
    }

});